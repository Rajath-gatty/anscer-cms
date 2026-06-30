"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { imagePath } from "../components/home/assets";

type TeamSlide = {
  image: string;
  name: string;
  role: string;
  alt: string;
};

type TeamSliderProps = {
  slides: readonly TeamSlide[];
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  copy: string;
};

const autoplayDelay = 5000;
const desktopInitialIndex = 0;

function getDesignedVisibleCount(total: number) {
  if (window.innerWidth >= 1024) return Math.min(3, total);
  if (window.innerWidth >= 768) return Math.min(2, total);
  return 1;
}

function getDesktopPeekSize() {
  return window.innerWidth >= 1024 ? 92 : 0;
}

export function TeamSlider({
  slides,
  eyebrow,
  title,
  highlightedTitle,
  copy,
}: TeamSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const visibleSlideCount = Math.max(visibleCount, 1);
  const maxScrollIndex = Math.max(slides.length - visibleSlideCount, 0);
  const displayIndex = Math.min(activeIndex, maxScrollIndex);

  const counter = useMemo(() => {
    const total = String(slides.length).padStart(2, "0");
    const start = String(displayIndex + 1).padStart(2, "0");
    const endIndex = Math.min(displayIndex + visibleSlideCount, slides.length);
    const end = String(endIndex).padStart(2, "0");

    return visibleSlideCount > 1 && displayIndex + 1 !== endIndex
      ? `${start}–${end}/${total}`
      : `${start}/${total}`;
  }, [displayIndex, slides.length, visibleSlideCount]);

  const updateFromScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideNodes = Array.from(
      slider.querySelectorAll<HTMLElement>("[data-team-slide]")
    );
    if (slideNodes.length === 0) return;

    const inset = Number.parseFloat(window.getComputedStyle(slider).paddingLeft) || 0;
    const left = slider.scrollLeft + inset + getDesktopPeekSize();
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideNodes.forEach((node, index) => {
      const distance = Math.abs(node.offsetLeft - left);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const designedVisibleCount = getDesignedVisibleCount(slides.length);
    const lastScrollableIndex = Math.max(slides.length - designedVisibleCount, 0);

    setVisibleCount(designedVisibleCount);
    setActiveIndex(Math.min(closestIndex, lastScrollableIndex));
  }, [slides.length]);

  const goTo = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const boundedIndex = Math.max(0, Math.min(index, maxScrollIndex));
      const slideNodes = slider.querySelectorAll<HTMLElement>("[data-team-slide]");
      const slide = slideNodes[boundedIndex];
      if (!slide) return;

      const computedStyle = window.getComputedStyle(slider);
      const inset = Number.parseFloat(computedStyle.paddingLeft) || 0;
      const rightInset = Number.parseFloat(computedStyle.paddingRight) || 0;
      const isLastGroup = boundedIndex === maxScrollIndex && maxScrollIndex > 0;
      let targetLeft =
        slide.offsetLeft - inset - (isLastGroup ? 0 : getDesktopPeekSize());

      if (isLastGroup) {
        const lastSlide = slideNodes[slideNodes.length - 1];

        if (lastSlide) {
          targetLeft = Math.max(
            targetLeft,
            lastSlide.offsetLeft + lastSlide.offsetWidth + rightInset - slider.clientWidth
          );
        }
      }

      slider.scrollTo({
        left: Math.max(0, targetLeft),
        behavior,
      });
    },
    [maxScrollIndex]
  );

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (maxScrollIndex <= 0) return;

    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((current) => {
        const clampedCurrent = Math.min(current, maxScrollIndex);

        if (clampedCurrent >= maxScrollIndex) {
          stopAutoplay();
          return clampedCurrent;
        }

        const next = clampedCurrent + 1;
        goTo(next);
        return next;
      });
    }, autoplayDelay);
  }, [goTo, maxScrollIndex, stopAutoplay]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (window.innerWidth >= 1024 && slides.length > desktopInitialIndex) {
      goTo(desktopInitialIndex, "auto");
      window.requestAnimationFrame(updateFromScroll);
    }

    updateFromScroll();
    slider.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      slider.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [goTo, slides.length, updateFromScroll]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoplay();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  const handlePrevious = () => {
    stopAutoplay();
    const previousIndex = displayIndex <= 0 ? 0 : displayIndex - 1;
    setActiveIndex(previousIndex);
    goTo(previousIndex);
  };

  const handleNext = () => {
    stopAutoplay();
    const nextIndex =
      displayIndex >= maxScrollIndex ? maxScrollIndex : displayIndex + 1;

    setActiveIndex(nextIndex);
    goTo(nextIndex);
  };

  return (
    <div ref={sectionRef}>
      <div className="site-container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[650px]">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#005ead] md:text-[12px]">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-[20px] font-extrabold leading-tight text-[#011f40] md:mt-3 md:text-[36px]">
              {title} <span className="text-[#005ead]">{highlightedTitle}</span>
            </h2>
            <p className="mt-3 max-w-[640px] text-[11px] leading-[1.45] text-[#3a3a3a] md:mt-4 md:text-[15px] md:leading-[1.55]">
              {copy}
            </p>
          </div>

          <div className="flex items-center gap-3 md:pb-1">
            <span
              data-team-counter
              className="min-w-[84px] rounded-full border border-[#011f40] px-5 py-2 text-center text-[12px] font-bold tabular-nums text-[#011f40] md:min-w-[122px] md:py-3 md:text-[16px]"
            >
              {counter}
            </span>
            <button
              type="button"
              onClick={handlePrevious}
              disabled={displayIndex === 0}
              aria-label="Previous team member"
              className="grid size-10 place-items-center rounded-full border border-[#011f40] text-[#011f40] transition-colors duration-200 hover:border-[#005ead] hover:text-[#005ead] disabled:cursor-not-allowed disabled:opacity-35 md:size-11"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={displayIndex === maxScrollIndex}
              aria-label="Next team member"
              className="grid size-10 place-items-center rounded-full border border-[#011f40] text-[#011f40] transition-colors duration-200 hover:border-[#005ead] hover:text-[#005ead] disabled:cursor-not-allowed disabled:opacity-35 md:size-11"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-[max(20px,calc((100vw-1300px)/2))] pr-5 [scrollbar-width:none] md:mt-10 md:gap-5 lg:gap-6 lg:[scroll-snap-type:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Team members"
      >
        {slides.map((slide) => (
          <article
            key={slide.image}
            data-team-slide
            className="relative h-[285px] w-[225px] shrink-0 snap-start overflow-hidden rounded-md bg-white text-white md:h-[400px] md:w-[420px] xl:w-[480px]"
          >
            <Image
              src={`${imagePath}${slide.image}`}
              alt={slide.alt}
              fill
              sizes="(min-width: 1280px) 480px, (min-width: 768px) 420px, 225px"
              className="object-contain object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_34%,rgba(0,0,0,.84))]" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 md:p-7">
              <div>
                <h3 className="text-[13px] font-extrabold leading-tight text-white md:text-[20px]">
                  {slide.name}
                </h3>
                <p className="mt-2 text-[9px] font-medium text-white/92 md:text-[16px]">
                  {slide.role}
                </p>
              </div>
              <div className="flex items-center gap-3" aria-hidden="true">
                <span className="grid size-6 place-items-center rounded-full bg-white md:size-8">
                  <Image
                    src={`${imagePath}linkedin.png`}
                    alt=""
                    width={16}
                    height={16}
                    className="size-3.5 object-contain md:size-4"
                  />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
