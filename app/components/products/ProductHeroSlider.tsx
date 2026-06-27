"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imagePath } from "../home/assets";

const heroSlides = [
  {
    title: "Robots Ready to",
    accent: "Lift",
    image: "PSR-1000R_1.png",
    imageClass: "scale-[1.05] translate-x-[3%]",
  },
  {
    title: "Robots Ready to",
    accent: "Pull",
    image: "hero-image-2.png",
    imageClass: "scale-[1.24] translate-x-[10%]",
  },
  {
    title: "Robots Ready to",
    accent: "Grasp",
    image: "Group-1321315879.png",
    imageClass: "scale-[1.42] translate-x-[15%]",
  },
  {
    title: "Robots Ready to",
    accent: "Move",
    image: "hero-image-4.png",
    imageClass: "scale-[1.22] translate-x-[9%]",
  },
];

export function ProductHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = heroSlides[activeIndex];

  const goToSlide = (direction: 1 | -1) => {
    setActiveIndex(
      (current) =>
        (current + direction + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#fafafa]">
      <div className="site-container grid min-h-[calc(100svh-60px)] items-center gap-8 py-12 md:min-h-[calc(100svh-110px)] md:grid-cols-2 md:py-16">
        <div>
          <h1 className="text-[48px] font-bold leading-[1.06] tracking-tight md:text-[60px] xl:whitespace-nowrap">
            {active.title}{" "}
            <span className="relative inline-grid overflow-hidden align-bottom text-[#005ead]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active.accent}
                  initial={{ y: "85%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-85%", opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  {active.accent}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="mt-5 max-w-[470px] text-sm leading-5 text-[#3f4b57] md:text-[18px] md:leading-[26px]">
            Explore ANSCER&apos;s cutting-edge lineup: powerful, smart
            automation solutions engineered to transform your operations.
          </p>
          <a
            href="#robot-series"
            className="mt-7 inline-flex h-10 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-[14px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
          >
            Explore{" "}
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </a>
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-8 min-w-[62px] place-items-center rounded-full border border-[#b9c9d9] px-4 text-xs font-medium">
              {String(activeIndex + 1).padStart(2, "0")}/04
            </span>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-full border border-[#b9c9d9] transition hover:bg-[#edf4fa]"
              aria-label="Previous hero slide"
              onClick={() => goToSlide(-1)}
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              className="grid size-8 place-items-center rounded-full border border-[#b9c9d9] transition hover:bg-[#edf4fa]"
              aria-label="Next hero slide"
              onClick={() => goToSlide(1)}
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[430px] md:min-h-[560px] xl:min-h-[620px] w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={active.image}
              className="absolute inset-0"
              initial={{ x: 46, opacity: 0, scale: 0.97 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -34, opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={`${imagePath}${active.image}`}
                alt={`${active.title} ${active.accent}`}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 768px) 100vw, 780px"
                className={`object-contain object-right drop-shadow-[0_26px_40px_rgba(1,31,64,.14)] p-6 ${active.imageClass}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
