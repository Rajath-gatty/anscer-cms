"use client";

import Image from "next/image";
import { m } from "motion/react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { imagePath } from "./assets";
import { ArrowButton, Kicker } from "./SectionPrimitives";

const solutions = [
  {
    title: "PALLET Stacking",
    label: ["PALLET", "STACKING"],
    copy: "A pallet stacking AMR for precise pallet pickup, lifting, and placement, enabling repeatable stacking operations and efficient intralogistics flow.",
    icon: "pallet-stacking-svg.svg",
    image: "our-solutions-image-1-p-800.png",
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Pallet%20Stacking%20With%20bg.mp4",
  },
  {
    title: "TROLLEY MOVEMENT",
    label: ["TROLLEY", "MOVEMENT"],
    copy: "A compact, free-lift AMR with universal trolley compatibility, designed for trolley movement in low-clearance environments and the demands of dynamic shop floors.",
    icon: "trolley-movement.svg",
    image: "our-solutions-image-2-p-800.png",
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Trolley%20movement%20With%20bg.mp4",
  },
  {
    title: "Tugging",
    label: ["TUGGING"],
    copy: "An AMR with a Tugger top module for automated trolley and cart transport, ensuring safe and flexible automation across production and intralogistics operations.",
    icon: "tugging-svg.svg",
    image: "our-solutions-image-3-p-800.png",
    video:
      "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Tugging%20with%20BG.mp4",
  },
];

export function SolutionsCardDeckSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelDeltaRef = useRef(0);
  const wheelLockRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(media.matches);
    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);

    const getDeckMetrics = () => {
      const wrapper = wrapperRef.current;
      const sticky = stickyRef.current;
      if (!wrapper || !sticky) return null;

      const rect = wrapper.getBoundingClientRect();
      const stickyTop = sticky ? Number.parseFloat(window.getComputedStyle(sticky).top) || 0 : 0;
      const stickyHeight = sticky.offsetHeight;
      const scrollable = Math.max(wrapper.offsetHeight - stickyHeight, 1);
      const wrapperTop = window.scrollY + rect.top;
      const startY = wrapperTop - stickyTop;
      const endY = startY + scrollable;

      return {
        isActive: rect.top <= stickyTop + 40 && rect.bottom >= stickyTop + stickyHeight - 40,
        scrollable,
        startY,
        endY,
      };
    };

    const stepDeck = (direction: 1 | -1) => {
      const current = activeIndexRef.current;
      const next = Math.min(Math.max(current + direction, 0), solutions.length - 1);
      if (next === current) return false;

      activeIndexRef.current = next;
      setActiveIndex(next);

      const metrics = getDeckMetrics();
      if (metrics) {
        const targetProgress = next / (solutions.length - 1);
        window.scrollTo({
          top: metrics.startY + metrics.scrollable * targetProgress,
          behavior: "smooth",
        });
      }

      wheelLockRef.current = true;
      window.setTimeout(() => {
        wheelLockRef.current = false;
        wheelDeltaRef.current = 0;
      }, 640);

      return true;
    };

    const handleWheel = (event: WheelEvent) => {
      const metrics = getDeckMetrics();
      if (reducedMotion || window.innerWidth < 1024 || !metrics?.isActive) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const current = activeIndexRef.current;
      const canMove = direction > 0 ? current < solutions.length - 1 : current > 0;

      if (!canMove) {
        wheelDeltaRef.current = 0;
        return;
      }

      event.preventDefault();

      if (wheelLockRef.current) return;

      wheelDeltaRef.current += event.deltaY;
      if (Math.abs(wheelDeltaRef.current) < 18) return;

      wheelDeltaRef.current = 0;
      stepDeck(direction);
    };

    const resetWheelDelta = () => {
      wheelDeltaRef.current = 0;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", resetWheelDelta);

    return () => {
      media.removeEventListener("change", updateReducedMotion);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", resetWheelDelta);
    };
  }, [reducedMotion]);

  const scaledProgress = activeIndex;

  return (
    <section className="bg-[#fafafa] py-14 md:py-20 lg:pt-16">
      <div className="site-container">
        <div className="mx-auto max-w-3xl pb-6 text-center lg:pb-10">
          <Kicker>Solutions That Solve, Everywhere.</Kicker>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            Solutions That <span className="text-[#005ead]">Deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            From tugging and lifting to robotic arm integration and conveyor automation, our AMRs are designed to
            streamline operations, enhance safety, and maximize efficiency.
          </p>
        </div>

        {reducedMotion ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <StaticDeckCard key={solution.title} solution={solution} showButton={index === solutions.length - 1} />
            ))}
          </div>
        ) : (
          <>
            <div className="mt-10 flex flex-col gap-16 lg:hidden">
              <div>
                <Kicker>Robots Designed to Deliver</Kicker>
                <h3 className="mt-5 text-[28px] font-bold tracking-tight">
                  Our <span className="text-[#005ead]">Solutions</span>
                </h3>
              </div>
              {solutions.map((solution, index) => (
                <MobileSolutionCard key={solution.title} solution={solution} showButton={index === solutions.length - 1} />
              ))}
            </div>

            <div ref={wrapperRef} className="relative mt-4 hidden h-[210vh] lg:block">
              <div ref={stickyRef} className="sticky top-[72px] 2xl:top-[100px] h-[calc(100vh-76px)] 2xl:h-[calc(100vh-108px)] min-h-[560px] 2xl:min-h-[640px] overflow-visible">
                <div className="absolute left-0 top-0 z-30">
                  <Kicker>Robots Designed to Deliver</Kicker>
                  <h3 className="mt-3 2xl:mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
                    Our <span className="text-[#005ead]">Solutions</span>
                  </h3>
                </div>

                <div className="absolute -left-10 bottom-0 right-16 top-[68px] 2xl:top-[92px] px-10 pb-6 2xl:pb-12 pt-2 2xl:pt-5 [perspective:1600px]">
                  {solutions.map((solution, index) => (
                    <DeckCard
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
        )}
      </div>
    </section>
  );
}

function DeckCard({
  solution,
  index,
  activeIndex,
  progress,
}: {
  solution: (typeof solutions)[number];
  index: number;
  activeIndex: number;
  progress: number;
}) {
  const distance = index - progress;
  const absDistance = Math.abs(distance);
  const clampedDistance = Math.max(Math.min(distance, 1.2), -1.2);
  const depth = -Math.min(absDistance, 1.2) * 120;
  const scale = 1 - Math.min(absDistance, 1) * 0.055;
  const translateX = clampedDistance * 58;
  const translateY = Math.max(absDistance - 0.18, 0) * 18;
  const rotateY = clampedDistance * -10;
  const rotateX = Math.min(absDistance, 1) * 2.5;
  const shadowOpacity = Math.max(0.1, 0.18 - absDistance * 0.04);

  return (
    <m.article
      className="absolute inset-x-10 bottom-12 top-5 grid origin-center overflow-hidden rounded-xl bg-[#fafafa] will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d] lg:grid-cols-[0.42fr_0.58fr]"
      animate={{
        boxShadow: `0 28px 80px rgba(1, 31, 64, ${shadowOpacity})`,
        rotateX,
        rotateY,
        scale,
        x: translateX,
        y: translateY,
        z: depth,
      }}
      style={{
        zIndex: 40 - Math.round(absDistance * 10) + index,
        pointerEvents: activeIndex === index ? "auto" : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 24,
        mass: 0.85,
      }}
      aria-hidden={activeIndex !== index}
    >
      <div className="relative z-10 flex flex-col justify-center p-6 xl:p-10 2xl:p-12">
        <div className="flex items-center gap-4">
          <Image src={`${imagePath}${solution.icon}`} alt="" width={42} height={42} className="h-[42px] w-auto" />
          <h4 className="text-xs font-bold uppercase tracking-wide text-[#005ead]">{solution.title}</h4>
        </div>
        <p className="mt-4 2xl:mt-7 max-w-[430px] text-sm leading-5 2xl:leading-6 text-[#3f4b57]">{solution.copy}</p>
        <div className="relative mt-4 2xl:mt-8 aspect-[1.58] 2xl:aspect-[1.42] max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] overflow-hidden rounded-lg bg-[#dfe7ee]">
          <Image
            src={`${imagePath}${solution.image}`}
            alt={`${solution.title} application`}
            fill
            sizes="420px"
            className="object-cover"
          />
        </div>
        {index === 2 ? (
          <div className="mt-4 2xl:mt-7">
            <ArrowButton>Talk to us</ArrowButton>
          </div>
        ) : null}
      </div>

      <div className="relative min-h-[430px] overflow-hidden bg-[#fafafa]">
        <p className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[82px] font-bold uppercase leading-[0.95] text-[#011f40]/8 xl:text-[104px]">
          {solution.label.map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </p>
        <video
          className="absolute inset-0 z-10 h-full w-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={solution.video} type="video/mp4" />
        </video>
      </div>
    </m.article>
  );
}

function StaticDeckCard({ solution, showButton = false }: { solution: (typeof solutions)[number]; showButton?: boolean }) {
  return (
    <article className="rounded-xl bg-[#fafafa] p-6 shadow-[0_18px_48px_rgba(1,31,64,.1)]">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#fafafa]">
        <video className="absolute inset-0 h-full w-full object-contain" autoPlay loop muted playsInline preload="metadata">
          <source src={solution.video} type="video/mp4" />
        </video>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Image src={`${imagePath}${solution.icon}`} alt="" width={30} height={30} className="h-[30px] w-auto shrink-0" />
        <h4 className="text-xs font-bold uppercase tracking-wide text-[#005ead]">{solution.title}</h4>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#3f4b57]">{solution.copy}</p>
      {showButton && (
        <div className="mt-4 flex">
          <ArrowButton>Talk to us</ArrowButton>
        </div>
      )}
    </article>
  );
}

function MobileSolutionCard({ solution, showButton = false }: { solution: (typeof solutions)[number]; showButton?: boolean }) {
  return (
    <article className="relative bg-[#fafafa]">
      <div className="relative -mx-2 flex min-h-[220px] items-center justify-center overflow-hidden">
        <p className="pointer-events-none absolute left-1/2 top-5 w-full -translate-x-1/2 text-center text-[42px] font-bold uppercase leading-[0.96] text-[#011f40]/10 sm:text-[54px]">
          {solution.label.map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </p>
        <video className="relative z-10 h-[205px] w-full object-contain" autoPlay loop muted playsInline preload="metadata">
          <source src={solution.video} type="video/mp4" />
        </video>
      </div>
      <div className="mt-1 flex items-center gap-3">
        <Image src={`${imagePath}${solution.icon}`} alt="" width={28} height={28} className="h-7 w-auto shrink-0" />
        <h4 className="text-[10px] font-bold uppercase tracking-wide text-[#005ead]">{solution.title}</h4>
      </div>
      <p className="mt-4 text-xs leading-5 text-[#011f40]">{solution.copy}</p>
      <div className="relative mt-5 aspect-[1.45] overflow-hidden rounded-md bg-[#dfe7ee]">
        <Image
          src={`${imagePath}${solution.image}`}
          alt={`${solution.title} application`}
          fill
          sizes="(max-width: 1024px) 100vw, 390px"
          className="object-cover"
        />
      </div>
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
    <div className="absolute right-0 top-[150px] 2xl:top-[174px] z-40 flex w-[56px] justify-center">
      <div className="relative h-[310px] w-[42px] flex-col items-center justify-start">
        <m.div
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
          animate={{ y: robotY }}
          transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.75 }}
        >
          <ProgressRobot
            className="block"
            style={{ transform: "translateX(-1px)" }}
          />
        </m.div>
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
          <m.path
            d={`M21 28V${filledY}`}
            stroke="#005EAD"
            strokeWidth="2"
            strokeLinecap="round"
            initial={false}
            animate={{ d: `M21 28V${filledY}` }}
            transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.75 }}
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
        id="card-deck-progress-robot-mask"
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
      <g mask="url(#card-deck-progress-robot-mask)">
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

