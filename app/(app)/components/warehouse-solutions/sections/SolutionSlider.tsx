"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperProps } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { cn } from "@/lib/utils";

/*
  Shared behaviour for the warehouse-solution sliders, modelled on the product
  Advanced Features carousel (autoplay + counter with progress fill), but without
  looping: autoplay stops on the last card and the arrows disable at either end.
*/

const AUTOPLAY_DURATION = 3000;

/**
 * Full-bleed track: the first and last cards line up with the .site-container content
 * edges (max-width + 20px/24px padding-inline), but cards are never clipped on either side.
 * Render this outside .site-container and give the Swiper `!overflow-visible`.
 */
export const SLIDER_TRACK_CLASS =
  "overflow-hidden px-6 min-[992px]:px-[max(20px,calc((100%_-_clamp(1340px,90vw,2200px))/2_+_20px))]";

const pad = (value: number) => String(value).padStart(2, "0");

export function useSolutionSlider(total: number) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [progressKey, setProgressKey] = useState(0);
  const [edges, setEdges] = useState({ isBeginning: true, isEnd: false });
  const [autoplaying, setAutoplaying] = useState(false);
  const reducedMotion = useReducedMotion();

  // Autoplay is a one-way run that stops on the last card, so it only starts the first time
  // the slider scrolls into view — otherwise it could finish before anyone sees it.
  useEffect(() => {
    if (!swiper || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || swiper.destroyed) return;
        observer.disconnect();
        swiper.autoplay.start();
      },
      { threshold: 0.4 },
    );
    observer.observe(swiper.el);
    return () => observer.disconnect();
  }, [swiper, reducedMotion]);

  // Same breakpoints as the product Advanced Features counter (cards fully inside the container).
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

  const syncEdges = (swiper: SwiperType) => {
    setEdges({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
  };

  const start = activeIndex + 1;
  const end = Math.min(activeIndex + visibleCount, total);
  const counter =
    visibleCount > 1 && start !== end
      ? `${pad(start)}-${pad(end)}/${pad(total)}`
      : `${pad(start)}/${pad(total)}`;

  // Autoplay stops on the last card, so the progress fill is hidden from then on.
  const progressStyle: CSSProperties =
    reducedMotion || !autoplaying || edges.isEnd
      ? { width: "0%" }
      : { animation: `solutionSliderLoader ${AUTOPLAY_DURATION}ms linear forwards` };

  const swiperProps: SwiperProps = {
    modules: [A11y, Autoplay, Keyboard],
    onSwiper: (instance) => {
      swiperRef.current = instance;
      setSwiper(instance);
      syncEdges(instance);
    },
    onResize: syncEdges,
    onAutoplayStart: () => {
      setAutoplaying(true);
      setProgressKey((prev) => prev + 1);
    },
    onAutoplayStop: () => setAutoplaying(false),
    onSlideChangeTransitionStart: (swiper) => {
      setActiveIndex(swiper.activeIndex);
      // Re-keying the fill element restarts its CSS animation from 0%.
      setProgressKey((prev) => prev + 1);
      syncEdges(swiper);
    },
    speed: 500,
    slidesPerView: "auto",
    // Configured but not auto-started; the IntersectionObserver above starts it.
    autoplay: {
      enabled: false,
      delay: AUTOPLAY_DURATION,
      disableOnInteraction: false,
      stopOnLastSlide: true,
    },
    grabCursor: true,
    keyboard: { enabled: true, onlyInViewport: true },
    className: "!overflow-visible",
  };

  const controls: SliderControlsState = {
    counter,
    progressKey,
    progressStyle,
    ...edges,
    onPrev: () => swiperRef.current?.slidePrev(),
    onNext: () => swiperRef.current?.slideNext(),
  };

  return { swiperProps, controls };
}

type SliderControlsState = {
  counter: string;
  progressKey: number;
  progressStyle: CSSProperties;
  isBeginning: boolean;
  isEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export function SliderControls({
  counter,
  progressKey,
  progressStyle,
  isBeginning,
  isEnd,
  onPrev,
  onNext,
  dark = false,
  className,
}: SliderControlsState & {
  /** White controls for sections on the blue gradient background. */
  dark?: boolean;
  className?: string;
}) {
  const buttonClass = cn(
    "grid size-11 cursor-pointer place-items-center rounded-full border border-[#9bb9d2] transition disabled:cursor-default disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 3xl:size-14",
    dark
      ? "text-white hover:bg-white/20 disabled:hover:bg-transparent focus-visible:outline-white"
      : "text-brand-navy hover:border-brand-blue hover:text-brand-blue disabled:hover:border-[#9bb9d2] disabled:hover:text-brand-navy focus-visible:outline-brand-blue",
  );

  return (
    <div className={cn("items-center gap-4", className)}>
      <style>{`
        @keyframes solutionSliderLoader {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <span className="relative grid h-11 min-w-24 place-items-center overflow-hidden rounded-full border border-[#9bb9d2] px-4 text-sm font-semibold shadow-sm 3xl:h-14 3xl:min-w-28 3xl:text-base">
        <span className={cn("relative z-20", dark ? "text-white" : "text-brand-navy")}>
          {counter}
        </span>
        <span
          key={progressKey}
          aria-hidden
          className={cn(
            "absolute inset-y-0 left-0 z-10 h-full",
            dark ? "bg-white/20" : "bg-brand-blue/20",
          )}
          style={progressStyle}
        />
      </span>
      <button
        type="button"
        onClick={onPrev}
        disabled={isBeginning}
        aria-label="Previous card"
        className={buttonClass}
      >
        <ArrowLeft className="size-5" strokeWidth={1.8} />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={isEnd}
        aria-label="Next card"
        className={buttonClass}
      >
        <ArrowRight className="size-5" strokeWidth={1.8} />
      </button>
    </div>
  );
}
