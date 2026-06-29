"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { imagePath } from "../../home/assets";
import type { ProductDetailData } from "../product-detail-data";

export function ModulesSection({ data }: { data: ProductDetailData }) {
  const modules = data.modules ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = modules[activeIndex] ?? modules[0];
  const activeModuleImage = active?.image ?? data.heroImage;
  const baseImage = data.modulesBaseImage;
  const isLayeredModule = Boolean(baseImage && active?.image);
  const overlay = active?.overlay;
  const total = modules.length;
  const overlayStyle = {
    height: overlay?.height ?? "100%",
    left: overlay?.left ?? "50%",
    top: overlay?.top ?? "0",
    transform: `translate(${overlay?.translateX ?? "-50%"}, ${
      overlay?.translateY ?? "0"
    })`,
    width: overlay?.width ?? "100%",
  };

  const pillScrollRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const pill = pillRefs.current[activeIndex];
    const container = pillScrollRef.current;
    if (!pill || !container) return;
    const scrollTarget =
      pill.offsetLeft - container.offsetWidth / 2 + pill.offsetWidth / 2;
    container.scrollTo({ left: scrollTarget, behavior: "smooth" });
  }, [activeIndex]);

  if (!modules.length || !active) return null;

  const move = (dir: 1 | -1) =>
    setActiveIndex((i) => Math.min(total - 1, Math.max(0, i + dir)));

  return (
    <section
      id="attachments"
      className="relative scroll-mt-28 overflow-hidden bg-[#e6ebf0] py-16 md:py-[84px]"
    >
      {data.backgroundText ? (
        <Image
          src={`${imagePath}${data.backgroundText}`}
          alt=""
          width={600}
          height={220}
          className="pointer-events-none absolute left-1/2 top-[45%] z-0 h-[220px] w-[600px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.72] md:top-2/3"
        />
      ) : null}
      <div className="site-container relative z-10">
        <div className="max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Attachments
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
            {data.title} <span className="text-[#005ead]">Compatible</span> With
            The Top Modules
          </h2>
          <p className="mt-4 max-w-[670px] text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-[26px]">
            The {data.title} seamlessly integrates with leading top modules and
            attachments, enabling flexible material handling for diverse
            warehouse and industrial operations.
          </p>
        </div>

        <div className="mt-8 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(${activeIndex} * -100%))` }}
            >
              {modules.map((module) => {
                const moduleImage = module.image ?? data.heroImage;
                const modOverlay = module.overlay;
                const modOverlayStyle = {
                  height: modOverlay?.height ?? "100%",
                  left: modOverlay?.left ?? "50%",
                  top: modOverlay?.top ?? "0",
                  transform: `translate(${modOverlay?.translateX ?? "-50%"}, ${modOverlay?.translateY ?? "0"})`,
                  width: modOverlay?.width ?? "100%",
                };
                const isLayered = Boolean(baseImage && module.image);
                return (
                  <div key={module.title} className="w-full shrink-0">
                    <div className="relative mx-auto h-[200px] w-[300px]">
                      {baseImage ? (
                        <Image
                          src={`${imagePath}${baseImage}`}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 100vw, 540px"
                          className="z-10 translate-y-28 object-contain"
                        />
                      ) : null}
                      <div
                        className="absolute z-20 transition-opacity duration-300"
                        style={modOverlayStyle}
                      >
                        <Image
                          src={`${imagePath}${moduleImage}`}
                          alt={module.title}
                          fill
                          sizes={modOverlay?.sizes ?? "(max-width: 1024px) 100vw, 240px"}
                          className={cn(
                            "object-contain",
                            isLayered && "object-top",
                          )}
                        />
                      </div>
                    </div>
                    <div className="mt-28">
                      <h3 className="text-base font-semibold leading-5 text-[#005ead]">
                        {module.title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-[18px] text-[#3a3a3a]">
                        {module.copy}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={pillScrollRef}
            className="-mx-4 mt-6 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-2">
              {modules.map((module, index) => (
                <button
                  key={module.title}
                  ref={(el) => {
                    pillRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors",
                    activeIndex === index
                      ? "border-[#011f40] bg-transparent font-semibold text-[#011f40]"
                      : "border-[#9bb9d2] bg-transparent text-[#3a3a3a] hover:border-[#005ead] hover:text-[#005ead]",
                  )}
                >
                  {module.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <span className="rounded-full border border-[#011f40] px-5 py-2 text-[14px] font-semibold text-[#011f40]">
              {String(activeIndex + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={activeIndex === 0}
              className="grid size-11 place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] disabled:opacity-35"
              aria-label="Previous attachment"
            >
              <ArrowLeft className="size-5" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={activeIndex >= total - 1}
              className="grid size-11 place-items-center rounded-full border border-[#9bb9d2] text-[#011f40] disabled:opacity-35"
              aria-label="Next attachment"
            >
              <ArrowRight className="size-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.25fr_0.5fr_0.25fr] lg:items-center">
            <div className="flex flex-col gap-2 text-[14px] font-medium text-[#3a3a3a]">
              {modules.map((module, index) => (
                <button
                  key={module.title}
                  type="button"
                  className={cn(
                    "px-2 py-1 text-left transition-colors hover:text-[#005ead]",
                    activeIndex === index && "font-bold text-[#005ead]",
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  {module.title}
                </button>
              ))}
            </div>
            <div className="relative mx-auto h-[200px] w-[300px]">
              {baseImage ? (
                <Image
                  src={`${imagePath}${baseImage}`}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="z-10 translate-y-28 object-contain"
                />
              ) : null}
              <div className="absolute z-20" style={overlayStyle}>
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={`${active.title}-${activeModuleImage}`}
                    className="absolute inset-0 will-change-transform"
                    initial={{
                      opacity: shouldReduceMotion ? 1 : 0,
                      x: shouldReduceMotion ? 0 : 92,
                      scale: shouldReduceMotion ? 1 : 0.98,
                    }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{
                      opacity: shouldReduceMotion ? 1 : 0,
                      x: shouldReduceMotion ? 0 : -44,
                      scale: shouldReduceMotion ? 1 : 0.98,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={`${imagePath}${activeModuleImage}`}
                      alt={active.title}
                      fill
                      sizes={overlay?.sizes ?? "(max-width: 1024px) 100vw, 240px"}
                      className={cn(
                        "object-contain",
                        isLayeredModule && "object-top",
                      )}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="pt-10 lg:pl-10 lg:pt-48 xl:pl-16">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={`${active.title}-copy`}
                  initial={{
                    opacity: shouldReduceMotion ? 1 : 0,
                    x: shouldReduceMotion ? 0 : 42,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: shouldReduceMotion ? 1 : 0,
                    x: shouldReduceMotion ? 0 : -24,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.34,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3 className="text-2xl font-semibold leading-7 text-[#005ead]">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[26px] text-[#3a3a3a]">
                    {active.copy}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
