"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { useEffect, useRef, useState, useMemo } from "react";
import { imagePath, videoPath } from "./assets";
import { ArrowButton, Kicker } from "./SectionPrimitives";

const solutions = [
  {
    title: "PALLET Stacking",
    copy: "A pallet stacking AMR for precise pallet pickup, lifting, and placement, enabling repeatable stacking operations and efficient intralogistics flow.",
    icon: "pallet-stacking-svg.svg",
    image: "our-solutions-image-1.png",
    image2: "home/our-solutions-img-1.png",
    imageHeight: 1024,
    // video:
    //   "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Pallet%20Stacking%20With%20bg.mp4",
  },
  {
    title: "TROLLEY MOVEMENT",
    copy: "A compact, free-lift AMR with universal trolley compatibility, designed for trolley movement in low-clearance environments and the demands of dynamic shop floors.",
    icon: "trolley-movement.svg",
    image: "our-solutions-image-2.png",
    image2: "home/our-solutions-img-2.png",
    imageHeight: 1024,
    // video: "trolley-movement-latest.mp4",
  },
  {
    title: "Tugging",
    copy: "An AMR with a Tugger top module for automated trolley and cart transport, ensuring safe and flexible automation across production and intralogistics operations.",
    icon: "tugging-svg.svg",
    image: "our-solutions-image-3.png",
    image2: "home/our-solutions-img-3.png",
    imageHeight: 1020,
    // video:
    //   "https://pub-3529b8dc90d544c3a0d5ab70a1840a1a.r2.dev/files/With%20BG/Tugging%20with%20BG.mp4",
  },
];

export function SolutionsStickyStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [panelProgress, setPanelProgress] = useState<number[]>(() => solutions.map(() => 0));

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(media.matches);
    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);
    return () => media.removeEventListener("change", updateReducedMotion);
  }, []);

  // Track scroll progress from the section container for desktop
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const scrollableDistance = rect.height - viewportHeight;

      if (scrollableDistance <= 0) return;

      // How far we've scrolled through the section (0 to 1)
      const sectionProgress = clamp(-rect.top / scrollableDistance, 0, 1);

      // Determine active index from scroll position
      const slideCount = solutions.length;
      const rawIndex = Math.floor(sectionProgress * slideCount);
      setActiveIndex(clamp(rawIndex, 0, slideCount - 1));

      // Per-panel progress for the text fill animation
      const newProgress = solutions.map((_, i) => {
        const slideStart = i / slideCount;
        const slideEnd = (i + 1) / slideCount;
        return clamp((sectionProgress - slideStart) / (slideEnd - slideStart), 0, 1);
      });
      setPanelProgress(newProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (reducedMotion) {
    return (
      <div className="mt-12 flex flex-col gap-16">
        {solutions.map((solution, index) => (
          <StaticSolutionCard
            key={solution.title}
            solution={solution}
            showButton={index === 2}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Mobile layout */}
      <div className="pt-14 lg:hidden">
        <div className="mb-10">
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[40px]">
            Our{" "}
            <span className="text-[#005ead] font-montserrat">Solutions</span>
          </h2>
        </div>
        <div className="flex flex-col gap-[34px] md:gap-5">
          {solutions.map((solution, index) => (
            <StaticSolutionCard
              key={solution.title}
              solution={solution}
              showButton={index === 2}
            />
          ))}
        </div>
      </div>

      {/* Desktop layout: both sides sticky, right images crossfade */}
      <div ref={sectionRef} className="relative hidden lg:block" style={{ height: '300vh' }}>
        <div className="sticky top-[54px] h-screen flex gap-8 xl:gap-12 items-start">
          {/* Left side: heading + content + image */}
          <div className="w-[45%] shrink-0">
            <h2 className="mb-2 2xl:mb-2 mt-3 2xl:mt-5 text-[28px] font-bold tracking-tight md:text-[clamp(40px,2.4vw,80px)]">
              Our{" "}
              <span className="text-[#005ead] font-montserrat">Solutions</span>
            </h2>
            <div className="relative min-h-[480px] 2xl:min-h-[520px]">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className={cn(
                    "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : activeIndex > index
                        ? "opacity-0 -translate-y-4 pointer-events-none"
                        : "opacity-0 translate-y-4 pointer-events-none",
                  )}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="mb-6 w-[400px] 2xl:w-[500px] 3xl:w-[650px] 4xl:w-[750px] max-w-full overflow-hidden rounded-xl bg-[#dfe7ee]">
                    <Image
                      src={`${imagePath}${solution.image}`}
                      alt={`${solution.title} application`}
                      width={1600}
                      height={solution.imageHeight}
                      sizes="350px"
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 my-[clamp(24px,5vh,84px)]">
                    <div className="flex items-center gap-4">
                      <Image
                        src={`${imagePath}${solution.icon}`}
                        alt=""
                        width={42}
                        height={42}
                        className="h-[42px] w-auto"
                      />
                      <h3 className="text-xs md:text-[clamp(20px,1.4vw,40px)] font-bold uppercase text-[#005ead]">
                        {solution.title}
                      </h3>
                    </div>
                    <FillText
                      text={solution.copy}
                      className="mt-[18px] max-w-[640px] 2xl:max-w-[750px] text-base font-medium md:text-[clamp(20px,1.5vw,64px)] 2xl:text-[clamp(28px,1.5vw,64px)] leading-[130%]"
                      scrollProgress={activeIndex === index ? panelProgress[index] ?? 0 : 0}
                    />
                  </div>
                  <div className="mt-5 4xl:mt-12">
                    <ArrowButton>Talk to us</ArrowButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: fixed at center, images crossfade */}
          <div className="flex-1 flex items-center justify-center h-full">
            <div className="relative w-full max-w-[550px] 2xl:max-w-[650px] 3xl:max-w-[750px] 4xl:max-w-[850px]">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className={cn(
                    "transition-opacity duration-700 ease-in-out flex-1",
                    index === 0 ? "relative" : "absolute inset-0",
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none",
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl overflow-hidden",
                      "bg-[#f0f4f8]",
                    )}
                  >
                    <Image
                      src={`${imagePath}${solution.image2}`}
                      alt={`${solution.title} application`}
                      width={1600}
                      height={solution.imageHeight}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function FillText({
  text,
  className,
  scrollProgress,
}: {
  text: string;
  className?: string;
  scrollProgress: number;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const words = useMemo(() => text.split(" "), [text]);

  // Update fill positions based on scroll progress
  useEffect(() => {
    const spans = wordRefs.current;
    if (!spans.length) return;

    // Group words by visual line and collect line geometry
    const lineMap = new Map<number, { index: number; left: number; right: number }>();
    let lineCount = 0;
    const wordInfo: { lineIdx: number; startFrac: number; endFrac: number }[] = [];

    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      if (!span) {
        wordInfo.push({ lineIdx: 0, startFrac: 0, endFrac: 0 });
        continue;
      }

      const top = span.offsetTop;
      if (!lineMap.has(top)) {
        lineMap.set(top, { index: lineCount++, left: span.offsetLeft, right: span.offsetLeft + span.offsetWidth });
      } else {
        const line = lineMap.get(top)!;
        line.left = Math.min(line.left, span.offsetLeft);
        line.right = Math.max(line.right, span.offsetLeft + span.offsetWidth);
      }
    }

    // Calculate each word's fractional position within its line
    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      if (!span) {
        wordInfo.push({ lineIdx: 0, startFrac: 0, endFrac: 0 });
        continue;
      }

      const line = lineMap.get(span.offsetTop)!;
      const lineWidth = line.right - line.left || 1;
      wordInfo.push({
        lineIdx: line.index,
        startFrac: (span.offsetLeft - line.left) / lineWidth,
        endFrac: (span.offsetLeft + span.offsetWidth - line.left) / lineWidth,
      });
    }

    const totalLines = lineCount || 1;

    // Remap: fill starts at 20% scroll and finishes at 70% scroll of the panel
    const fillProgress = clamp((scrollProgress - 0.2) / 0.5, 0, 1);

    // Each line gets an equal share of the fill range
    const lineWindow = 1 / totalLines;

    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      if (!span) continue;

      const info = wordInfo[i];

      // When does this line's sweep happen within the overall progress
      const lineStart = info.lineIdx * lineWindow * 0.85;
      const lineEnd = lineStart + lineWindow;

      // How far through this line's sweep are we
      const lineProgress = clamp((fillProgress - lineStart) / (lineEnd - lineStart), 0, 1);

      // Where is the sweep cursor on this line (0 = left edge, 1 = right edge)
      const sweepPos = lineProgress;

      // Word fill: how much of this word has the sweep passed
      const wordFill = clamp(
        (sweepPos - info.startFrac) / (info.endFrac - info.startFrac || 0.01),
        0,
        1,
      );

      const position = 100 - wordFill * 100;
      span.style.backgroundPosition = `${position}% 0`;
    }
  }, [scrollProgress, words.length]);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          ref={(el) => { wordRefs.current[index] = el; }}
          className="mr-[0.22em] inline-block"
          style={{
            background:
              "linear-gradient(to right, #3a3a3a 50%, rgba(58,58,58,0.18) 50%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
