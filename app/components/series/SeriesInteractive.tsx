"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useState, useRef} from "react";
import { imagePath } from "../home/assets";
import { ScrollReveal } from "../home/ScrollReveal";
import type { SeriesPageData } from "./series-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
export function SeriesApplicationsCarousel({ data }: { data: SeriesPageData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [progressKey, setProgressKey] = useState(0); // Used to instantly reset CSS animation
  const swiperRef = useRef<SwiperType | null>(null);
  
  const reducedMotion = useReducedMotion();
  const total = data.applications.length;

  const AUTOPLAY_DURATION = 3000;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Fired instantly when slide actively begins transitioning
  const handleSlideChangeTransitionStart = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    // Incrementing the key forces React to drop the old progress DOM element 
    // and recreate a brand new one, instantly resetting the CSS width back to 0%
    setProgressKey((prev) => prev + 1);
  };

  const start = activeIndex + 1;
  const end = Math.min(activeIndex + visibleCount, total);
  const counter =
    visibleCount > 1 && start !== end
      ? `${pad(start)}-${pad(end)}/${pad(total)}`
      : `${pad(start)}/${pad(total)}`;

  // Custom CSS Injection for declarative, performant, zero-JS animation
  const animationStyle = reducedMotion
    ? { width: "0%" }
    : {
        animation: `swiperLoader ${AUTOPLAY_DURATION}ms linear forwards`,
      };

  return (
    <section id="applications" className="overflow-hidden bg-white py-16 md:py-24">
      {/* Global CSS keyframe declaration injection safely contained */}
      <style>{`
        @keyframes swiperLoader {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="site-container">
        <ScrollReveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#005ead] md:text-base">
            Applications
          </p>
        </ScrollReveal>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal delay={80} className="max-w-[700px]">
            <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.02em] md:text-[36px]">
              {data.applicationsHeading}
            </h2>
            <p className="mt-4 max-w-[610px] text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
              {data.applicationsIntro}
            </p>
          </ScrollReveal>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-4 md:flex">
            <span className="relative grid h-8 min-w-24 place-items-center overflow-hidden rounded-full border border-[#9bb9d2] px-4 text-[14px] font-semibold shadow-sm">
              <span className="relative z-20 text-[#011f40]">{counter}</span>
              <div
                key={progressKey} // Native React diffing key component reset
                className="absolute inset-y-0 left-0 z-10 h-full bg-[#005ead]/20"
                style={animationStyle}
              />
            </span>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] transition hover:border-[#005ead] hover:text-[#005ead]"
              aria-label="Previous application"
            >
              <ArrowLeft className="size-5" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] transition hover:border-[#005ead] hover:text-[#005ead]"
              aria-label="Next application"
            >
              <ArrowRight className="size-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider Wrapper */}
      <div className="mt-10 overflow-hidden pl-[max(20px,calc((100vw-1340px)/2+20px))] pr-5">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
          loop={true}
          speed={500}
          spaceBetween={20}
          slidesPerView="auto"
          autoplay={
            reducedMotion
              ? false
              : {
                  delay: AUTOPLAY_DURATION,
                  disableOnInteraction: false,
                }
          }
          className="!overflow-visible"
        >
          {data.applications.map((application) => (
            <SwiperSlide key={application.title} className="!w-[min(390px,82vw)]">
              <article className="relative h-[460px] w-full overflow-hidden rounded-lg bg-[#dfe7ee]">
                {application.image ? (
                  <Image
                    src={`${imagePath}${application.image}`}
                    alt={application.title}
                    fill
                    sizes="(max-width: 640px) 82vw, 390px"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,0)_30%,rgba(1,31,64,.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-xl font-extrabold leading-tight md:text-2xl">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-white/88 md:text-base md:leading-6">
                    {application.copy}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Controls */}
      <div className="site-container mt-7 flex items-center justify-center gap-4 md:hidden">
        <span className="relative grid h-8 min-w-24 place-items-center overflow-hidden rounded-full border border-[#9bb9d2] px-4 text-[14px] font-semibold shadow-sm">
          <span className="relative z-20 text-[#011f40]">{counter}</span>
          <div
            key={progressKey}
            className="absolute inset-y-0 left-0 z-10 h-full bg-[#005ead]/20"
            style={animationStyle}
          />
        </span>
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40]"
          aria-label="Previous application"
        >
          <ArrowLeft className="size-5" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40]"
          aria-label="Next application"
        >
          <ArrowRight className="size-5" strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}
export function SeriesRobotSelector({
  data,
  series,
}: {
  data: SeriesPageData;
  series: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const reducedMotion = useReducedMotion();
  const activeProduct = data.products[activeIndex] ?? data.products[0];

  const specs = useMemo(
    () =>
      activeProduct.specs.map((spec) => ({
        label: spec.label,
        value:
          unit === "imperial" && spec.imperial ? spec.imperial : spec.value,
      })),
    [activeProduct, unit],
  );

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const };

  const total = data.products.length;
  const mobileMove = (direction: 1 | -1) => {
    setActiveIndex((current) =>
      Math.min(total - 1, Math.max(0, current + direction)),
    );
  };

  return (
    <section
      id="modals"
      className="relative overflow-hidden bg-[#e8f1f8] py-14 md:min-h-screen md:py-20"
    >
      <Image
        src={`${imagePath}series/ar/robots-bg.png`}
        alt=""
        fill
        sizes="100vw"
        className="object-contain object-bottom opacity-36"
      />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_72%,rgba(232,241,248,.08)_0%,rgba(232,241,248,.6)_48%,rgba(232,241,248,.92)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,241,248,.86)_0%,rgba(232,241,248,.34)_46%,rgba(214,230,242,.9)_100%)]" /> */}
      <div className="site-container relative z-10">
        {/* Header — always visible */}
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <m.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#005ead] md:text-base">
              Modals
            </p>
            <h2 className="mt-5 text-[28px] font-bold leading-[1.08] tracking-[-0.01em] md:text-[36px]">
              Explore <span className="text-[#005ead]">{data.eyebrow}</span>{" "}
              Robots
            </h2>
          </m.div>
          <UnitToggle unit={unit} onChange={setUnit} />
        </div>

        {/* ── MOBILE CARD CAROUSEL (hidden on md+) ── */}
        <div className="mt-8 md:hidden">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(${activeIndex} * -100%))` }}
            >
              {data.products.map((product) => {
                const productSpecs = product.specs.map((spec) => ({
                  label: spec.label,
                  value:
                    unit === "imperial" && spec.imperial
                      ? spec.imperial
                      : spec.value,
                }));
                return (
                  <div key={product.name} className="flex w-full shrink-0">
                    <div className="h-full w-full rounded-2xl bg-white shadow-[0_18px_48px_rgba(1,31,64,.12)] overflow-hidden [transform:translateZ(0)]">
                      {/* Text content — name, description, explore button */}
                      <div className="p-5 md:pt-0 pb-0">
                        <h3 className="text-xl font-bold text-[#011f40]">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[22px] text-[#3a3a3a] line-clamp-3">
                          {product.description}
                        </p>
                        <a
                          href={product.href}
                          className="group mt-4 inline-flex h-10 items-center gap-3 rounded-[3px] bg-[#005ead] px-5 text-[14px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
                        >
                          Explore
                          <span className="relative flex size-4 overflow-hidden">
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4 transition group-hover:translate-x-5"
                              strokeWidth={2}
                            />
                            <ArrowRight
                              aria-hidden="true"
                              className="absolute size-4 -translate-x-5 transition group-hover:translate-x-0"
                              strokeWidth={2}
                            />
                          </span>
                        </a>
                      </div>

                      {/* Robot image — sits inside the white card */}
                      <div className="relative mt-4 h-[220px] bg-white overflow-hidden">
                        {/* Watermark text — constrained within the card */}
                        {product.bgText ? (
                          <div className="absolute inset-x-[8%] top-[10%] h-[55%] z-0">
                            <Image
                              src={`${imagePath}${product.bgText}`}
                              alt=""
                              fill
                              sizes="80vw"
                              className="object-contain object-center opacity-20"
                            />
                          </div>
                        ) : null}
                        {/* Floating tags */}
                        {product.tags.map((tag, tagIndex) => (
                          <span
                            key={`${product.name}-mobile-${tag}`}
                            className="absolute z-20 rounded-[31px] bg-white/92 px-3 py-1 text-[13px] font-normal text-[#011f40] shadow-[0_6px_20px_rgba(1,31,64,.12)]"
                            style={getMobileTagPosition(
                              product.name,
                              tag,
                              tagIndex,
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                        {/* Robot image — no desktop scale/translate transforms */}
                        <Image
                          src={`${imagePath}${product.image}`}
                          alt={product.name}
                          fill
                          sizes="100vw"
                          className="object-contain object-bottom drop-shadow-[0_12px_20px_rgba(1,31,64,.15)] z-10"
                        />
                      </div>

                      {/* Specs grid */}
                      <div className="p-5">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-[#d6e6f2] pt-5">
                          {productSpecs.map((spec) => (
                            <div key={spec.label}>
                              <h4 className="text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-[#3a3a3a99]">
                                {spec.label}
                              </h4>
                              <p className="mt-1 text-[12px] font-semibold leading-5 text-[#011f40]">
                                {spec.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="rounded-full border border-[#9bb9d2] px-5 py-2 text-[14px] font-semibold text-[#011f40]">
              {pad(activeIndex + 1)}/{pad(total)}
            </span>
            <button
              type="button"
              onClick={() => mobileMove(-1)}
              disabled={activeIndex === 0}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous robot"
            >
              <ArrowLeft className="size-5" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => mobileMove(1)}
              disabled={activeIndex >= total - 1}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next robot"
            >
              <ArrowRight className="size-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (hidden below md) ── */}
        <div className="hidden md:block">
          <div className="min-h-[700px] md:min-h-[calc(100vh-160px)]">
            <div className="relative mt-12 min-h-[560px] md:mt-[54px] md:min-h-[calc(100vh-315px)]">
              <div className="relative z-20 grid gap-8 lg:grid-cols-[400px_390px_1fr]">
                <m.div
                  className="flex flex-col gap-3"
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    ...transition,
                    delay: reducedMotion ? 0 : 0.08,
                  }}
                >
                  {data.products.map((product, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <m.button
                        key={product.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "relative grid cursor-pointer overflow-hidden rounded-lg px-5 py-4 text-left outline-none transition-colors focus-visible:ring-3 focus-visible:ring-[#005ead]/25",
                          isActive
                            ? "bg-white shadow-[0_18px_42px_rgba(1,31,64,.1)]"
                            : "bg-white/55 hover:bg-white/86",
                        )}
                        whileHover={reducedMotion ? undefined : { x: 4 }}
                        whileTap={reducedMotion ? undefined : { scale: 0.985 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {isActive ? (
                          <m.span
                            layoutId={`series-active-tab-${data.slug}`}
                            className="absolute inset-0 rounded-lg bg-white"
                            transition={transition}
                          />
                        ) : null}
                        <span
                          className={cn(
                            "relative z-10 text-[16px] font-normal",
                            isActive
                              ? "font-semibold text-[#005ead]"
                              : "text-[#011f40]",
                          )}
                        >
                          {product.name}
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive ? (
                            <m.span
                              key={`${product.name}-description`}
                              className="relative z-10 mt-3 text-[14px] font-normal leading-[22px] text-[#011f40]"
                              initial={
                                reducedMotion ? false : { opacity: 0, y: -8 }
                              }
                              animate={
                                reducedMotion ? undefined : { opacity: 1, y: 0 }
                              }
                              exit={
                                reducedMotion
                                  ? undefined
                                  : { opacity: 0, y: -6 }
                              }
                              transition={{
                                duration: 0.26,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              {product.tabDescription}
                            </m.span>
                          ) : null}
                        </AnimatePresence>
                      </m.button>
                    );
                  })}
                </m.div>

                <AnimatePresence mode="popLayout" initial={false}>
                  <m.div
                    key={`${activeProduct.name}-details`}
                    className="lg:pt-0"
                    initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                    animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={transition}
                  >
                    <h3 className="text-[20px] font-semibold text-[#011f40]">
                      {activeProduct.name}
                    </h3>
                    <p className="mt-4 max-w-[370px] text-[16px] leading-[22px] text-[#3a3a3a]">
                      {activeProduct.description}
                    </p>
                    <m.a
                      href={activeProduct.href}
                      className="group mt-6 inline-flex h-10 items-center gap-3 rounded-[3px] bg-[#005ead] px-5 text-[14px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
                      whileHover={reducedMotion ? undefined : { y: -2 }}
                      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
                    >
                      Explore
                      <span className="relative flex size-4 overflow-hidden">
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition group-hover:translate-x-5"
                          strokeWidth={2}
                        />
                        <ArrowRight
                          aria-hidden="true"
                          className="absolute size-4 -translate-x-5 transition group-hover:translate-x-0"
                          strokeWidth={2}
                        />
                      </span>
                    </m.a>
                  </m.div>
                </AnimatePresence>

                <div className="grid grid-cols-2 w-full gap-x-14 gap-y-8 lg:pt-2 h-28">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {specs.map((spec, index) => (
                      <m.div
                        key={`${activeProduct.name}-${unit}-${spec.label}`}
                        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                        animate={
                          reducedMotion ? undefined : { opacity: 1, y: 0 }
                        }
                        exit={
                          reducedMotion ? undefined : { opacity: 0, y: -10 }
                        }
                        transition={{
                          ...transition,
                          delay: reducedMotion ? 0 : index * 0.035,
                        }}
                      >
                        <h4 className="text-[12px] font-medium uppercase leading-5 tracking-[0.08em] text-[#3a3a3a99]">
                          {spec.label}
                        </h4>
                        <p className="mt-2 text-[14px] font-semibold leading-5 text-[#011f40]">
                          {spec.value}
                        </p>
                      </m.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-[-88px] left-0 right-0 z-10 h-[360px] md:bottom-[-126px] md:left-[300px] md:h-[430px] lg:bottom-[-152px] lg:left-[470px] lg:h-[500px]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <m.div
                    key={`${activeProduct.name}-visual`}
                    className="absolute inset-0"
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, x: 70, rotateY: -8, scale: 0.96 }
                    }
                    animate={
                      reducedMotion
                        ? undefined
                        : { opacity: 1, x: 0, rotateY: 0, scale: 1 }
                    }
                    exit={
                      reducedMotion
                        ? undefined
                        : { opacity: 0, x: -45, rotateY: 8, scale: 0.98 }
                    }
                    transition={transition}
                    style={{ transformPerspective: 1200 }}
                  >
                    {activeProduct.bgText ? (
                      <m.div
                        className="absolute inset-x-[-11%] top-[14%] z-0 h-[55%]"
                        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                        animate={
                          reducedMotion ? undefined : { opacity: 1, y: 0 }
                        }
                        exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={transition}
                      >
                        <Image
                          src={`${imagePath}${activeProduct.bgText}`}
                          alt=""
                          fill
                          sizes="100vw"
                          className="object-contain object-center opacity-32"
                        />
                      </m.div>
                    ) : null}
                    {series === "psr-series" ? (
                      <Image
                        src={`${imagePath}${activeProduct.image}`}
                        alt={activeProduct.name}
                        width={650}
                        height={400}
                        className={cn(
                          "relative mt-20 z-10 object-contain object-bottom object-right drop-shadow-[0_34px_42px_rgba(1,31,64,.16)] md:h-[80%]",
                          selectorImageClass(activeProduct.name),
                        )}
                      />
                    ) : series === "agv-series" ? (
                      <Image
                        src={`${imagePath}${activeProduct.image}`}
                        alt={activeProduct.name}
                        width={800}
                        height={400}
                        className={cn(
                          "relative mt-20 z-10 object-contain object-bottom object-right drop-shadow-[0_34px_42px_rgba(1,31,64,.16)] md:h-[90%]",
                          selectorImageClass(activeProduct.name),
                        )}
                      />
                    )  : (
                      <Image
                        src={`${imagePath}${activeProduct.image}`}
                        alt={activeProduct.name}
                        fill
                        sizes="(max-width: 1024px) 110vw, 1180px"
                        className={cn(
                          "relative z-10 object-contain object-bottom object-right drop-shadow-[0_34px_42px_rgba(1,31,64,.16)]",
                          selectorImageClass(activeProduct.name),
                        )}
                      />
                    )}
                    <FloatingTags
                      product={activeProduct}
                      reducedMotion={Boolean(reducedMotion)}
                    />
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnitToggle({
  unit,
  onChange,
}: {
  unit: "metric" | "imperial";
  onChange: (unit: "metric" | "imperial") => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(unit === "metric" ? "imperial" : "metric")}
      className="inline-flex cursor-pointer items-center gap-2 self-start text-[12px] font-extrabold uppercase tracking-wide text-[#011f40]"
      aria-label="Toggle metric and imperial units"
    >
      <span className={unit === "metric" ? "opacity-100" : "opacity-45"}>
        Metric
      </span>
      <span className="relative h-6 w-11 rounded-full bg-[#011f40] p-0.5">
        <m.span
          className={cn("block size-5 rounded-full bg-white")}
          animate={{ x: unit === "imperial" ? 20 : 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
      <span className={unit === "imperial" ? "opacity-100" : "opacity-45"}>
        Imperial
      </span>
    </button>
  );
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

type FloatingTagPosition = {
  left: string;
  top: string;
};

const defaultDesktopTagPositions: FloatingTagPosition[] = [
  { left: "38%", top: "28%" },
  { left: "85%", top: "58%" },
  { left: "6%", top: "50%" },
];

const defaultMobileTagPositions: FloatingTagPosition[] = [
  { left: "44%", top: "12%" },
  { left: "62%", top: "48%" },
  { left: "6%", top: "48%" },
];

const desktopTagPositionsByProduct: Record<
  string,
  Record<string, FloatingTagPosition>
> = {
  "AR 250": {
    Tugging: { left: "6%", top: "50%" },
    Lifting: { left: "38%", top: "28%" },
    Tunneling: { left: "85%", top: "58%" },
  },
  "AR 500": {
    Cobot: { left: "73%", top: "31%" },
    Tugging: { left: "8%", top: "48%" },
  },
  "AR 650": {
    Tugging: { left: "6%", top: "48%" },
    Lifting: { left: "56%", top: "38%" },
    Tunneling: { left: "82%", top: "59%" },
  },
  "AR 1250": {
    Tugging: { left: "5%", top: "48%" },
    Lifting: { left: "56%", top: "38%" },
    Tunneling: { left: "84%", top: "59%" },
  },
  "PSR 2000": {
    "Open Pallet": { left: "18%", top: "28%" },
    Stacking: { left: "75%", top: "78%" },
  },
  "PSR 2000R": {
    "Open/Closed Pallet": { left: "18%", top: "48%" },
    Lifting: { left: "70%", top: "74%" },
  },
  "PSR 1000R": {
    "Open/Closed Pallet": { left: "15%", top: "35%" },
    Lifting: { left: "75%", top: "67%" },
  },
  "PSR G2G": {
    "Open Pallet": { left: "17%", top: "38%" },
    Stacking: { left: "72%", top: "78%" },
  },
  "LBR 500": {
    Trolley: { left: "40%", top: "30%" },
    Lifting: { left: "80%", top: "78%" },
  },
  "AGV 100": {
    Lifting: { left: "38%", top: "38%" },
    Sorting: { left: "80%", top: "58%" },
  },
};

const mobileTagPositionsByProduct: Record<
  string,
  Record<string, FloatingTagPosition>
> = {
  "AR 250": {
    Tugging: { left: "1%", top: "53%" },
    Lifting: { left: "33%", top: "30%" },
    Tunneling: { left: "78%", top: "68%" },
  },
  "AR 500": {
    Cobot: { left: "73%", top: "31%" },
    Tugging: { left: "1%", top: "53%" },
  },
  "AR 650": {
    Tugging: { left: "1%", top: "69%" },
    Lifting: { left: "51%", top: "49%" },
    Tunneling: { left: "77%", top: "79%" },
  },
  "AR 1250": {
    Tugging: { left: "1%", top: "69%" },
    Lifting: { left: "51%", top: "49%" },
    Tunneling: { left: "77%", top: "79%" },
  },
  "PSR 2000": {
    "Open Pallet": { left: "1%", top: "28%" },
    Stacking: { left: "70%", top: "76%" },
  },
  "PSR 2000R": {
    "Open/Closed Pallet": { left: "1%", top: "38%" },
    Lifting: { left: "68%", top: "74%" },
  },
  "PSR 1000R": {
    "Open/Closed Pallet": { left: "1%", top: "35%" },
    Lifting: { left: "70%", top: "60%" },
  },
  "PSR G2G": {
    "Open Pallet": { left: "1%", top: "38%" },
    Stacking: { left: "60%", top: "75%" },
  },
  "LBR 500": {
    Trolley: { left: "20%", top: "30%" },
    Lifting: { left: "65%", top: "75%" },
  },
  "AGV 100": {
    Lifting: { left: "38%", top: "28%" },
    Sorting: { left: "80%", top: "58%" },
  },
};

function getMobileTagPosition(
  productName: string,
  tag: string,
  index: number,
): FloatingTagPosition {
  return (
    mobileTagPositionsByProduct[productName]?.[tag] ??
    defaultMobileTagPositions[index] ??
    defaultMobileTagPositions[0]
  );
}

function getDesktopTagPosition(
  productName: string,
  tag: string,
  index: number,
): FloatingTagPosition {
  return (
    desktopTagPositionsByProduct[productName]?.[tag] ??
    defaultDesktopTagPositions[index] ??
    defaultDesktopTagPositions[0]
  );
}

function FloatingTags({
  product,
  reducedMotion,
}: {
  product: SeriesPageData["products"][number];
  reducedMotion: boolean;
}) {
  return (
    <div className="absolute inset-0 z-20 hidden md:block">
      {product.tags.map((tag, index) => (
        <m.span
          key={`${product.name}-${tag}`}
          className="absolute rounded-[31px] bg-white/92 px-3 py-1 text-[16px] font-normal text-[#011f40] shadow-[0_10px_30px_rgba(1,31,64,.12)]"
          style={getDesktopTagPosition(product.name, tag, index)}
          initial={reducedMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: reducedMotion ? 0 : 0.16 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {tag}
        </m.span>
      ))}
    </div>
  );
}

function selectorImageClass(name: string) {
  switch (name) {
    case "AR 250":
      return "scale-[0.9] translate-y-[8%]";
    case "AR 500":
      return "scale-[0.84] translate-y-[6%]";
    case "AR 650":
      return "scale-[0.84] translate-y-[7%]";
    case "AR 1250":
      return "scale-[0.86] translate-y-[8%]";
    case "PSR 2000":
    case "PSR 2000R":
    case "PSR 1000R":
    case "PSR G2G":
      return "scale-[0.84] translate-y-[4%]";
    case "LBR 500":
      return "scale-[0.8] translate-y-[4%]";
    case "AGV 100":
      return "scale-[0.88] translate-y-[9%]";
    default:
      return "scale-[1.2] translate-y-[8%]";
  }
}
