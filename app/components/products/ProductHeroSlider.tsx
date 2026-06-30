"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imagePath } from "../home/assets";
import { ScrollReveal } from "../home/ScrollReveal";

const heroSlides = [
  {
    id: "lift",
    title: "Robots Ready to",
    accent: "Lift",
    image: "lift.png",
    imageClass: "scale-[1] -translate-x-[3%] md:translate-x-[3%]",
    tags: ["Ready to Lift", "Lifting"],
  },
  {
    id: "pull",
    title: "Robots Ready to",
    accent: "Pull",
    image: "pull.png",
    imageClass: "scale-[1] translate-x-[4%] md:translate-x-[10%]",
    tags: ["Ready to Pull", "Pulling"],
  },
  {
    id: "grasp",
    title: "Robots Ready to",
    accent: "Grasp",
    image: "grab.png",
    imageClass: "scale-[1] translate-x-[9%] md:translate-x-[15%]",
    tags: ["Ready to Grasp", "Grasping"],
  },
  {
    id: "move",
    title: "Robots Ready to",
    accent: "Move",
    image: "move.png",
    imageClass: "scale-[1] translate-x-[3%] md:translate-x-[9%]",
    tags: ["Ready to Move", "Moving"],
  },
];

type ProductHeroTagPosition = {
  left: string;
  top: string;
};

const defaultProductHeroTagPositions: ProductHeroTagPosition[] = [
  { left: "12%", top: "24%" },
  { left: "62%", top: "58%" },
];

const productHeroTagPositionsBySlide: Record<
  string,
  Record<string, ProductHeroTagPosition>
> = {
  lift: {
    "Ready to Lift": { left: "54%", top: "64%" },
    Lifting: { left: "42%", top: "35%" },
  },
  pull: {
    "Ready to Pull": { left: "52%", top: "65%" },
    Pulling: { left: "30%", top: "35%" },
  },
  grasp: {
    "Ready to Grasp": { left: "52%", top: "48%" },
    Grasping: { left: "49%", top: "5%" },
  },
  move: {
    "Ready to Move": { left: "5%", top: "54%" },
    Moving: { left: "68%", top: "68%" },
  },
};

function getProductHeroTagPosition(
  slideId: string,
  tag: string,
  index: number,
): ProductHeroTagPosition {
  return (
    productHeroTagPositionsBySlide[slideId]?.[tag] ??
    defaultProductHeroTagPositions[index] ??
    defaultProductHeroTagPositions[0]
  );
}

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
    <section
      // className="bg-[#fafafa]"
      style={{
        backgroundImage: `url('${imagePath}/products/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="site-container grid  items-center gap-8 py-12  md:grid-cols-2 md:py-16">
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
            <p className="mt-5 max-w-[470px] text-sm leading-5 text-[#3f4b57] md:text-[18px] md:leading-[26px]">
              Explore ANSCER&apos;s cutting-edge lineup: powerful, smart
              automation solutions engineered to transform your operations.
            </p>
          </ScrollReveal>
          <a
            href="#robot-series"
            className="group mt-7 inline-flex h-10 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-[14px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
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
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-8 min-w-[62px] place-items-center rounded-full border border-[#b9c9d9] px-4 text-xs font-medium">
              {String(activeIndex + 1).padStart(2, "0")}/04
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

        <div className="relative min-h-[430px] md:min-h-[500px] xl:min-h-[520px] w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div
              key={active.image}
              className="absolute inset-0"
              initial={{ x: 46, opacity: 0, scale: 0.97 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -34, opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={`${imagePath}products/${active.image}`}
                alt={`${active.title} ${active.accent}`}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 520px) 50vw, 520px"
                className={`object-contain object-bottom-right drop-shadow-[0_26px_40px_rgba(1,31,64,.14)] p-6 ${active.imageClass}`}
              />
              <div className="pointer-events-none absolute inset-0 z-20">
                {active.tags.map((tag, index) => (
                  <span
                    key={`${active.id}-${tag}`}
                    className="absolute rounded-[31px] bg-white/92 px-3 py-1 text-[13px] font-semibold text-[#011f40] shadow-[0_8px_24px_rgba(1,31,64,.14)] md:px-4 md:py-2 md:text-sm"
                    style={getProductHeroTagPosition(active.id, tag, index)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
