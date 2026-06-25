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
    image: "our-solutions-image-1-p-800.png",
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Pallet%20Stacking%20With%20bg.mp4",
  },
  {
    title: "TROLLEY MOVEMENT",
    copy: "A compact, free-lift AMR with universal trolley compatibility, designed for trolley movement in low-clearance environments and the demands of dynamic shop floors.",
    icon: "pallet-stacking-svg.svg",
    image: "our-solutions-image-2-p-800.png",
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Trolley%20movement%20With%20bg.mp4",
  },
  {
    title: "Tugging",
    copy: "An AMR with a Tugger top module for automated trolley and cart transport, ensuring safe and flexible automation across production and intralogistics operations.",
    icon: "tugging-svg.svg",
    image: "our-solutions-image-3-p-800.png",
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
      const stickyTop = sticky ? Number.parseFloat(window.getComputedStyle(sticky).top) || 0 : 0;
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

      const nextProgress = Math.min(Math.max((window.scrollY - metrics.startY) / metrics.scrollable, 0), 1);
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

  const scaledProgress = progress * (solutions.length - 1);
  const activeIndex = Math.min(
    Math.floor(scaledProgress + 0.5),
    solutions.length - 1,
  );

  return (
    <>
      <div className="mt-12 flex flex-col gap-16 lg:hidden">
        <div>
          <Kicker>Robots Designed to Deliver</Kicker>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            Our <span className="text-[#005ead]">Solutions</span>
          </h2>
        </div>
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

      <div
        ref={wrapperRef}
        className="relative mt-10 hidden h-[220vh] lg:block"
      >
        <div ref={stickyRef} className="sticky top-[112px] h-[calc(100vh-112px)] min-h-[620px] overflow-hidden">
          <div className="absolute left-0 top-0 z-20">
            <Kicker>Robots Designed to Deliver</Kicker>
            <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
              Our <span className="text-[#005ead]">Solutions</span>
            </h2>
          </div>

          <div className="absolute inset-x-0 bottom-0 top-[92px]">
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
  const relative = index - progress;
  const translateY = staticMode
    ? 0
    : Math.max(Math.min(relative * 100, 100), 0);

  return (
    <article
      className={cn(
        "grid min-h-[520px] items-start gap-10 bg-[#fafafa] pt-4 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform lg:grid-cols-[0.42fr_0.58fr]",
        staticMode ? "relative" : "absolute inset-0",
      )}
      style={
        staticMode
          ? undefined
          : {
              transform: `translateY(${translateY}%)`,
              zIndex: index + 1,
            }
      }
      aria-hidden={!staticMode && activeIndex !== index}
    >
      <div className="relative z-10 max-w-xl">
        <div className="flex items-center gap-4">
          <Image
            src={`${imagePath}${solution.icon}`}
            alt=""
            width={42}
            height={42}
          />
          <h3 className="text-xs font-bold uppercase text-[#005ead]">
            {solution.title}
          </h3>
        </div>
        <p className="mt-7 text-sm leading-6 text-[#4b4b4b]">{solution.copy}</p>
        <div className="relative mt-8 aspect-[1.42] max-w-[390px] overflow-hidden rounded-lg bg-[#dfe7ee]">
          <Image
            src={`${imagePath}${solution.image}`}
            alt={`${solution.title} application`}
            fill
            sizes="390px"
            className="object-cover"
          />
        </div>
        {index === 2 ? (
          <div className="mt-7">
            <ArrowButton>Talk to us</ArrowButton>
          </div>
        ) : null}
      </div>

      <div className="relative min-h-[430px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-contain"
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
    <div className="absolute right-2 top-[158px] z-30 flex w-[56px] justify-center">
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
    <svg
      width="42"
      height="60"
      viewBox="0 0 42 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <mask
        id="solutions-progress-robot-mask"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="60"
      >
        <path
          d="M3.84673 0H37.8125L41.25 4.26184V55.4875L37.2396 60H3.76488L0 55.4875V4.26184L3.84673 0Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#solutions-progress-robot-mask)">
        <rect
          x="8.125"
          y="0.0234375"
          width="25.2138"
          height="59.9914"
          fill="#005EAD"
        />
        <rect
          x="2.46875"
          y="4.15625"
          width="8.25968"
          height="51.7317"
          fill="#484B4A"
        />
        <path
          d="M5.95605 0.0234375L0.304688 6.19583V13.8843L5.95605 19.2986V40.4147L0.304688 45.9374V53.9507L5.95605 60.0148L7.80361 60.0234L9.86853 57.6411V5.45744V2.40577L7.80361 0.0234375H5.95605Z"
          fill="#005EAD"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.80361 60.0234L9.86853 57.6411V5.45744H10.738V57.7325L8.67305 60.0234H7.80361Z"
          fill="#E6E0D9"
        />
        <path
          d="M7.80361 0.0234375L9.86853 2.40577V5.45744H10.738V2.40577L8.67305 0.0234375H7.80361Z"
          fill="#FE362A"
        />
        <path
          d="M7.80361 60.0234L9.86853 57.6411V54.5894H10.738V57.7325L8.67305 60.0234H7.80361Z"
          fill="#FE362A"
        />
        <rect
          width="8.25968"
          height="51.7317"
          transform="matrix(-1 0 0 1 38.7812 4.15625)"
          fill="#484B4A"
        />
        <path
          d="M35.294 0.0234375L40.9453 6.19583V13.8843L35.294 19.2986V40.4147L40.9453 45.9374V53.9507L35.294 60.0148L33.4464 60.0234L31.3815 57.6411V5.45744V2.40577L33.4464 0.0234375H35.294Z"
          fill="#005EAD"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.4464 60.0234L31.3815 57.6411V5.45744H30.512V57.7325L32.577 60.0234H33.4464Z"
          fill="#E6E0D9"
        />
        <path
          d="M33.4464 0.0234375L31.3815 2.40577V5.45744H30.512V2.40577L32.577 0.0234375H33.4464Z"
          fill="#FE362A"
        />
        <path
          d="M33.4464 60.0234L31.3815 57.6411V54.5894H30.512V57.7325L32.577 60.0234H33.4464Z"
          fill="#FE362A"
        />
      </g>
    </svg>
  );
}
