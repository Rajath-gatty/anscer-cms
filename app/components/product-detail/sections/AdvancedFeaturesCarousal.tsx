"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollReveal } from "../../home/ScrollReveal";
import { ProductDetailData } from "../product-detail-data";

// Import Swiper styles
import "swiper/css";
import { imagePath } from "../../home/assets";

export function AdvancedFeaturesCarousal({ data }: { data: ProductDetailData }) {
  if(!data?.advancedFeatures || data.advancedFeatures.length === 0) {
    return null;
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [progressKey, setProgressKey] = useState(0); // Used to instantly reset CSS animation
  const swiperRef = useRef<SwiperType | null>(null);

  const reducedMotion = useReducedMotion();
  const total = data?.advancedFeatures?.length ?? 0;

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
    <section
      id="applications"
      className="overflow-hidden bg-linear-to-r from-[#011F40] to-[#005ead] py-16 md:py-24"
    >
      {/* Global CSS keyframe declaration injection safely contained */}
      <style>{`
        @keyframes swiperLoader {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="site-container">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white md:text-base">
            {data.title}
          </p>
        </ScrollReveal>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal delay={80} className="max-w-[750px]">
            <h2 className="text-[28px] font-bold text-white leading-tight tracking-[-0.02em] md:text-[36px]">
             Advanced Features for Industrial Automation
            </h2>
          </ScrollReveal>

          {/* Desktop Controls */}
          <div
            className={cn(
              "hidden items-center gap-4",
              data.slug === "agv-series" ? "md:hidden" : "md:flex",
            )}
          >
            <span className="relative grid h-8 min-w-24 place-items-center overflow-hidden rounded-full border border-[#9bb9d2] px-4 text-[14px] font-semibold shadow-sm">
              <span className="relative z-20 text-white">{counter}</span>
              <div
                key={progressKey} // Native React diffing key component reset
                className="absolute inset-y-0 left-0 z-10 h-full bg-white/20"
                style={animationStyle}
              />
            </span>
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] transition hover:border-[#005ead] hover:text-[#005ead]"
              aria-label="Previous application"
            >
              <ArrowLeft className="size-5 text-white" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] transition hover:border-[#005ead] hover:text-[#005ead]"
              aria-label="Next application"
            >
              <ArrowRight className="size-5 text-white" strokeWidth={1.8} />
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
          slidesPerView={"auto"}
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
          {data?.advancedFeatures && data.advancedFeatures.map((features) => (
            <SwiperSlide
              key={features.title}
              className={cn(
                data.slug === "agv-series"
                  ? "!w-[390px] md:!w-[clamp(290px,26.4vw,416px)] lg:!w-[416px]"
                  : "!w-[min(390px,82vw)]",
              )}
            >
              <article className="relative h-[460px] w-full overflow-hidden rounded-lg bg-white">
                {features.image ? (
                  <Image
                    src={`${imagePath}${features.image}`}
                    alt={features.title}
                    width={1040}
                    height={900}
                    sizes="(max-width: 640px) 82vw, 390px"
                    className="object-contain h-[240px]"
                  />
                ) : null}
                <div className="p-6 text-white h-[175px]">
                  <h3 className="text-xl font-bold leading-tight md:text-2xl text-[#005ead]">
                    {features.title}
                  </h3>
                  <div className="flex flex-col justify-center gap-1 mt-3 ">
                    {features.points.map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                        <CircleCheck size={16} className="text-[#011F40] shrink-0 mt-1" />
                        <p className="text-sm leading-5 text-[#011F40] md:text-base md:leading-6">
                        {point}
                        </p>
                    </div>
                  ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Controls */}
      <div className="site-container mt-7 flex items-center justify-center gap-4 md:hidden">
        <span className="relative grid h-8 min-w-24 place-items-center overflow-hidden rounded-full border border-[#9bb9d2] px-4 text-[14px] font-semibold shadow-sm">
          <span className="relative z-20 text-white">{counter}</span>
          <div
            key={progressKey}
            className="absolute inset-y-0 left-0 z-10 h-full bg-[white]/20"
            style={animationStyle}
          />
        </span>
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40]"
          aria-label="Previous application"
        >
          <ArrowLeft className="size-5 text-white" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] text-[#011f40]"
          aria-label="Next application"
        >
          <ArrowRight className="size-5 text-white" strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}