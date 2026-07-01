"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imagePath } from "../home/assets";
import { ScrollReveal } from "../home/ScrollReveal";

const heroSlides = [
  {
    title: "Robots Ready to",
    accent: "Lift",
    image: "PSR-1000R_1.png",
    imageWidth: 772,
    imageHeight: 515,
    imageClass:
      "max-w-[358px] md:max-w-[400px] lg:max-w-[526px] xl:max-w-[540px]",
  },
  {
    title: "Robots Ready to",
    accent: "Pull",
    image: "hero-image-2.png",
    imageWidth: 766,
    imageHeight: 411,
    imageClass:
      "max-w-[360px] md:max-w-[500px] lg:max-w-[540px] xl:max-w-[560px]",
  },
  {
    title: "Robots Ready to",
    accent: "Grasp",
    image: "Group-1321315879.png",
    imageWidth: 749,
    imageHeight: 670,
    imageClass:
      "max-w-[320px] md:max-w-[420px] lg:max-w-[440px] xl:max-w-[470px]",
  },
  {
    title: "Robots Ready to",
    accent: "Move",
    image: "hero-image-4.png",
    imageWidth: 749,
    imageHeight: 560,
    imageClass:
      "max-w-[358px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[530px]",
  },
];

export function ProductHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const active = heroSlides[activeIndex];
  const progressWidth = `${progress}%`;

  const goToSlide = (direction: 1 | -1) => {
    setActiveIndex(
      (current) =>
        (current + direction + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const duration = 3000;
    const intervalMs = 50;
    const totalSteps = duration / intervalMs;
    let step = 0;

    const interval = window.setInterval(() => {
      step += 1;
      const nextProgress = Math.min((step / totalSteps) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(interval);
        setActiveIndex((current) => (current + 1) % heroSlides.length);
        setProgress(0);
      }
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="bg-white">
      <div className="site-container grid min-h-[calc(110svh-60px)] content-start gap-10 py-20 md:gap-12 md:py-16 lg:min-h-[calc(100svh-60px)] lg:content-center lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-4 lg:py-0">
        <div>
          <ScrollReveal>
            <h1 className="text-[48px] font-bold leading-[1.06] tracking-tight md:text-[60px] xl:whitespace-nowrap">
              {active.title}{" "}
              <span className="relative inline-grid overflow-hidden align-bottom text-[#005ead]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <m.span
                    key={active.accent}
                    initial={{ y: "85%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-85%", opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {active.accent}
                  </m.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="mt-5 max-w-[600px] text-sm font-medium leading-5 text-[#3f4b57] md:text-[18px] md:leading-[26px] lg:max-w-[470px]">
              Explore ANSCER&apos;s cutting-edge lineup: powerful, smart
              automation solutions engineered to transform your operations.
            </p>
          </ScrollReveal>
          <a
            href="#robot-series"
            className="group mt-7 inline-flex h-10 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-[14px] font-medium uppercase tracking-wide text-white transition hover:bg-[#014f91]"
          >
            Explore{" "}
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
          <div className="mt-16 flex items-center gap-3 md:mt-20 lg:mt-[120px]">
            <span className="relative grid h-8 min-w-[62px] place-items-center overflow-hidden rounded-full border border-[#b9c9d9] bg-white px-4 text-xs font-medium shadow-sm">
              <span className="relative z-20 text-[#011f40]">
                {String(activeIndex + 1).padStart(2, "0")}/04
              </span>
              <div
                className="absolute inset-y-0 left-0 z-10 h-full bg-[#005ead]/20 transition-[width] duration-100"
                style={{ width: progressWidth }}
              ></div>
            </span>
            <button
              type="button"
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-[#b9c9d9] transition hover:bg-[#edf4fa]"
              aria-label="Previous hero slide"
              onClick={() => goToSlide(-1)}
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-[#b9c9d9] transition hover:bg-[#edf4fa]"
              aria-label="Next hero slide"
              onClick={() => goToSlide(1)}
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px] w-full md:min-h-[330px] lg:min-h-[420px] lg:-translate-y-8">
          <div className="absolute inset-0 flex w-full items-center justify-center lg:justify-end">
            <Image
              src="/anscer/images/products/Union.png"
              alt=""
              fill
              className="object-contain lg:object-right"
            />
          </div>
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div
              key={active.image}
              className="absolute inset-0 z-10 flex w-full items-center justify-center lg:justify-end"
              initial={{ x: 80, opacity: 0, scale: 1 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -80, opacity: 0, scale: 1 }}
              transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={`${imagePath}${active.image}`}
                alt={`${active.title} ${active.accent}`}
                width={active.imageWidth}
                height={active.imageHeight}
                priority={activeIndex === 0}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 500px, 540px"
                className={`h-auto w-full object-contain drop-shadow-[0_26px_40px_rgba(1,31,64,.14)] ${active.imageClass}`}
              />
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
