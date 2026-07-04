"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imagePath } from "../home/assets";
import { ScrollReveal } from "../home/ScrollReveal";
import { ArrowButton } from "../home/SectionPrimitives";

const heroSlides = [
  {
    id: "lift",
    title: "Robots Ready to",
    accent: "Tug",
    image: "lift.png",
    imageClass: "scale-[1.2] -translate-x-[3%] md:translate-x-[3%]",
    tags: ["Ready to Lift", "Lifting"],
  },
  {
    id: "pull",
    title: "Robots Ready to",
    accent: "Lift",
    image: "pull.png",
    imageClass: "scale-[1.2] translate-x-[4%] md:translate-x-[10%]",
    tags: ["Ready to Pull", "Pulling"],
  },
  {
    id: "grasp",
    title: "Robots Ready to",
    accent: "Grasp",
    image: "grab.png",
    imageClass: "scale-[1.2] translate-x-[9%] md:translate-x-[15%]",
    tags: ["Ready to Grasp", "Grasping"],
  },
  {
    id: "move",
    title: "Robots Ready to",
    accent: "Move",
    image: "move.png",
    imageClass: "scale-[1.2] translate-x-[3%] md:translate-x-[9%]",
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
    <section
      className="overflow-hidden"
      style={{
        backgroundImage: `url('${imagePath}/products/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="site-container grid min-h-[88svh]  items-center gap-8 lg:gap-2 py-12  md:grid-cols-2 md:py-16">
        <div>
          <ScrollReveal>
            <h1 className="text-[48px] font-bold leading-[2] tracking-tight md:text-[60px] xl:whitespace-nowrap">
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
          <ArrowButton
            as="a"
            href="#robot-series"
            className="mt-7 font-bold"
          >
            Explore
          </ArrowButton>
          <div className="mt-8 flex items-center gap-3">
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

        <div className="relative self-stretch min-h-[300px] md:min-h-[500px] w-full">
          <div className="absolute top-0 left-0 right-0 bottom-0 md:bottom-[-40px] w-full">
            <Image
              src={`${imagePath}products/grab.png`}
              alt="ANSCER Robot"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-right-bottom drop-shadow-[0_26px_40px_rgba(1,31,64,.14)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
