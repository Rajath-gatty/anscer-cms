"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { imagePath } from "./assets";
import { ArrowButton, Kicker } from "./SectionPrimitives";

const solutions = [
  {
    title: "PALLET Stacking",
    copy: "A pallet stacking AMR for precise pallet pickup, lifting, and placement, enabling repeatable stacking operations and efficient intralogistics flow.",
    icon: "pallet-stacking-svg.svg",
    image: "our-solutions-image-1.png",
    imageHeight: 1024,
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Pallet%20Stacking%20With%20bg.mp4",
  },
  {
    title: "TROLLEY MOVEMENT",
    copy: "A compact, free-lift AMR with universal trolley compatibility, designed for trolley movement in low-clearance environments and the demands of dynamic shop floors.",
    icon: "trolley-movement.svg",
    image: "our-solutions-image-2.png",
    imageHeight: 1024,
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Trolley%20movement%20With%20bg.mp4",
  },
  {
    title: "Tugging",
    copy: "An AMR with a Tugger top module for automated trolley and cart transport, ensuring safe and flexible automation across production and intralogistics operations.",
    icon: "tugging-svg.svg",
    image: "our-solutions-image-3.png",
    imageHeight: 1020,
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Tugging%20with%20BG.mp4",
  },
];

export function SolutionsStickyStack() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(media.matches);
    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);

    const getWrapperMetrics = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return null;

      const rect = wrapper.getBoundingClientRect();
      const sticky = stickyRef.current;
      const stickyTop = sticky
        ? Number.parseFloat(window.getComputedStyle(sticky).top) || 0
        : 0;
      const stickyHeight = sticky?.offsetHeight ?? window.innerHeight;
      const scrollable = Math.max(wrapper.offsetHeight - stickyHeight, 1);
      const wrapperTop = window.scrollY + rect.top;
      const startY = wrapperTop - stickyTop;
      const endY = startY + scrollable;

      return { rect, scrollable, startY, endY };
    };

    const updateProgress = () => {
      const metrics = getWrapperMetrics();
      if (!metrics) return;

      const nextProgress = Math.min(
        Math.max((window.scrollY - metrics.startY) / metrics.scrollable, 0),
        1,
      );
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      media.removeEventListener("change", updateReducedMotion);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  if (reducedMotion) {
    return (
      <div className="mt-12 flex flex-col gap-16">
        {solutions.map((solution, index) => (
          <SolutionSlide
            key={solution.title}
            solution={solution}
            index={index}
            activeIndex={index}
            progress={index / 2}
            staticMode
          />
        ))}
      </div>
    );
  }

  const scaledProgress = Math.min(progress * 2.6, solutions.length - 1);
  const activeIndex = Math.min(
    Math.floor(scaledProgress + 0.5),
    solutions.length - 1,
  );

  return (
    <>
      <div className="pt-14 lg:hidden">
        <div className="mb-10">
          <Kicker>Robots Designed to Deliver</Kicker>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            Our <span className="text-[#005ead]">Solutions</span>
          </h2>
        </div>
        <div className="flex flex-col gap-[34px] md:gap-5">
          {solutions.map((solution, index) => (
            <SolutionSlide
              key={solution.title}
              solution={solution}
              index={index}
              activeIndex={index}
              progress={index}
              staticMode
            />
          ))}
        </div>
      </div>

      <div ref={wrapperRef} className="relative hidden h-[260vh] lg:block">
        <div
          ref={stickyRef}
          className="sticky top-[72px] 2xl:top-[88px] h-[calc(100vh-76px)] 2xl:h-[calc(100vh-96px)] min-h-[460px] 2xl:min-h-[540px] overflow-hidden"
        >
          <div className="absolute left-0 top-0 z-20">
            <Kicker>Robots Designed to Deliver</Kicker>
            <h2 className="mt-3 2xl:mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
              Our <span className="text-[#005ead]">Solutions</span>
            </h2>
          </div>

          <div className="absolute inset-x-0 bottom-0 top-[104px] 2xl:top-[116px]">
            {solutions.map((solution, index) => (
              <SolutionSlide
                key={solution.title}
                solution={solution}
                index={index}
                activeIndex={activeIndex}
                progress={scaledProgress}
              />
            ))}
          </div>

          <ProgressRail activeIndex={activeIndex} progress={scaledProgress} />
        </div>
      </div>
    </>
  );
}

function SolutionSlide({
  solution,
  index,
  activeIndex,
  progress,
  staticMode = false,
}: {
  solution: (typeof solutions)[number];
  index: number;
  activeIndex: number;
  progress: number;
  staticMode?: boolean;
}) {
  if (staticMode) {
    return <StaticSolutionCard solution={solution} showButton={index === 2} />;
  }

  const relative = index - progress;
  const translateY = Math.max(Math.min(relative * 100, 100), 0);

  return (
    <article
      className={cn(
        "grid min-h-[524px] pt-10 items-start gap-6 bg-[#fafafa] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform lg:grid-cols-2",
        "absolute inset-0",
      )}
      style={{
        transform: `translateY(${translateY}%)`,
        zIndex: index + 1,
      }}
      aria-hidden={activeIndex !== index}
    >
      <div className="relative z-10 max-w-none">
        <div className="flex items-center gap-2">
          <Image
            src={`${imagePath}${solution.icon}`}
            alt=""
            width={42}
            height={42}
            className="h-[42px] w-auto"
          />
          <h3 className="text-xs font-bold uppercase text-[#005ead]">
            {solution.title}
          </h3>
        </div>
        <p className="mt-[18px] max-w-[640px] text-base leading-[22px] text-[#3a3a3a]">
          {solution.copy}
        </p>
        <div className="mt-[18px] w-[350px] max-w-full overflow-hidden rounded-xl bg-[#dfe7ee]">
          <Image
            src={`${imagePath}${solution.image}`}
            alt={`${solution.title} application`}
            width={1600}
            height={solution.imageHeight}
            sizes="350px"
            className="h-auto w-full"
          />
        </div>
        {index === 2 ? (
          <div className="mt-5">
            <ArrowButton>Talk to us</ArrowButton>
          </div>
        ) : null}
      </div>

      <div className="relative flex min-h-[485px] items-start justify-start overflow-hidden">
        <video
          className="size-[485px] max-h-full max-w-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={solution.video} type="video/mp4" />
        </video>
      </div>
    </article>
  );
}

function StaticSolutionCard({
  solution,
  showButton = false,
}: {
  solution: (typeof solutions)[number];
  showButton?: boolean;
}) {
  return (
    <article className="relative bg-[#fafafa]">
      <div className="overflow-hidden rounded-xl bg-[#dfe7ee]">
        <Image
          src={`${imagePath}${solution.image}`}
          alt={`${solution.title} application`}
          width={1600}
          height={solution.imageHeight}
          sizes="(max-width: 1024px) 100vw, 390px"
          className="h-[250px] w-full object-cover md:h-auto"
        />
      </div>

      <div className="mt-8 flex items-center gap-2">
        <Image
          src={`${imagePath}${solution.icon}`}
          alt=""
          width={42}
          height={42}
          className="h-[42px] w-auto shrink-0"
        />
        <h3 className="text-xs font-bold uppercase tracking-wide text-[#005ead]">
          {solution.title}
        </h3>
      </div>
      <p className="mt-6 text-sm leading-5 text-[#011f40]">{solution.copy}</p>

      {showButton && (
        <div className="mt-4 flex">
          <ArrowButton>Talk to us</ArrowButton>
        </div>
      )}
    </article>
  );
}

function ProgressRail({
  activeIndex,
  progress,
}: {
  activeIndex: number;
  progress: number;
}) {
  const robotY = Math.min(Math.max(progress, 0), 2) * 112 + 22;
  const clampedProgress = Math.min(Math.max(progress, 0), 2);
  const filledY =
    clampedProgress <= 1
      ? 28 + clampedProgress * (124 - 28)
      : 124 + (clampedProgress - 1) * (236 - 124);

  return (
    <div className="absolute right-2 top-[170px] 2xl:top-[194px] z-30 flex w-[56px] justify-center">
      <div className="relative h-[310px] w-[42px] flex-col items-center justify-start">
        <ProgressRobot
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 transition-transform duration-300 ease-out"
          style={{ transform: `translate(calc(-50% + 20px), ${robotY}px)` }}
        />
        <svg
          width="42"
          height="310"
          viewBox="0 0 42 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 28V268"
            stroke="#D4E0EC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d={`M21 28V${filledY}`}
            stroke="#005EAD"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
          {[12, 124, 236].map((cy, index) => {
            const isActive = activeIndex === index;
            const isCompleted = progress >= index;
            return (
              <g key={cy} className="transition-opacity duration-300">
                <circle
                  cx="21"
                  cy={cy}
                  r={isActive ? "5" : "3"}
                  fill={isActive || isCompleted ? "#005EAD" : "#C9D9E9"}
                />
                {isActive ? (
                  <circle
                    cx="21"
                    cy={cy}
                    r="9"
                    stroke="#005EAD"
                    strokeWidth="2"
                  />
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function ProgressRobot({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      src={`${imagePath}home/robot.png`}
      alt=""
      width={40}
      height={60}
      aria-hidden="true"
      className={className}
      style={style}
    />
  );
}
