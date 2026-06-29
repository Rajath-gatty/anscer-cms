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

const autoplayDelay = 10000;

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

  const maxIndex = Math.max(slides.length - 1, 0);

  const counter = useMemo(() => {
    const total = String(slides.length).padStart(2, "0");
    const start = String(activeIndex + 1).padStart(2, "0");
    const endIndex = Math.min(activeIndex + Math.max(visibleCount, 1), slides.length);
    const end = String(endIndex).padStart(2, "0");

    return visibleCount > 1 && activeIndex + 1 !== endIndex
      ? `${start}-${end}/${total}`
      : `${start}/${total}`;
  }, [activeIndex, slides.length, visibleCount]);

  const updateFromScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideNodes = Array.from(
      slider.querySelectorAll<HTMLElement>("[data-team-slide]")
    );
    if (slideNodes.length === 0) return;

    const left = slider.scrollLeft;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideNodes.forEach((node, index) => {
      const distance = Math.abs(node.offsetLeft - left);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const firstSlide = slideNodes[0];
    const slideWidth = firstSlide.offsetWidth;
    const gap = slideNodes[1] ? slideNodes[1].offsetLeft - slideWidth : 0;
    const count = Math.max(1, Math.floor((slider.clientWidth + gap) / (slideWidth + gap)));

    setVisibleCount(Math.min(count, slides.length));
    setActiveIndex(closestIndex);
  }, [slides.length]);

  const goTo = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const slide = slider.querySelectorAll<HTMLElement>("[data-team-slide]")[
        Math.max(0, Math.min(index, maxIndex))
      ];
      if (!slide) return;

      slider.scrollTo({ left: slide.offsetLeft, behavior });
    },
    [maxIndex]
  );

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((current) => {
        if (current >= maxIndex) {
          stopAutoplay();
          return current;
        }

        const next = current + 1;
        goTo(next);
        return next;
      });
    }, autoplayDelay);
  }, [goTo, maxIndex, stopAutoplay]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateFromScroll();
    slider.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      slider.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [updateFromScroll]);

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
    goTo(activeIndex <= 0 ? 0 : activeIndex - 1);
  };

  const handleNext = () => {
    stopAutoplay();
    goTo(activeIndex >= maxIndex ? maxIndex : activeIndex + 1);
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

          <div className="flex items-center gap-3">
            <span
              data-team-counter
              className="min-w-[64px] rounded-full border border-[#ccd2d9] px-4 py-2 text-center text-[12px] font-bold tabular-nums text-[#011f40]"
            >
              {counter}
            </span>
            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              aria-label="Previous team member"
              className="grid size-10 place-items-center rounded-full border border-[#ccd2d9] text-[#011f40] transition-colors duration-200 hover:border-[#005ead] hover:text-[#005ead] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === maxIndex}
              aria-label="Next team member"
              className="grid size-10 place-items-center rounded-full border border-[#ccd2d9] text-[#011f40] transition-colors duration-200 hover:border-[#005ead] hover:text-[#005ead] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-[max(20px,calc((100vw-1300px)/2))] pr-5 [scrollbar-width:none] md:mt-10 md:gap-6 [&::-webkit-scrollbar]:hidden"
        aria-label="Team members"
      >
        {slides.map((slide) => (
          <article
            key={slide.image}
            data-team-slide
            className="relative h-[285px] w-[225px] shrink-0 snap-start overflow-hidden rounded-md bg-[#011f40] text-white md:h-[350px] md:w-[300px]"
          >
            <Image
              src={`${imagePath}${slide.image}`}
              alt={slide.alt}
              fill
              sizes="(min-width: 768px) 300px, 225px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,0)_38%,rgba(0,0,0,.86))]" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 md:p-5">
              <div>
                <h3 className="text-[13px] font-extrabold leading-tight text-white md:text-[15px]">
                  {slide.name}
                </h3>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.06em] text-white/82 md:text-[9px]">
                  {slide.role}
                </p>
              </div>
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="grid size-5 place-items-center rounded-full bg-white/92 md:size-6">
                  <Image
                    src={`${imagePath}linkedin.png`}
                    alt=""
                    width={12}
                    height={12}
                    className="size-3 object-contain"
                  />
                </span>
                <span className="grid size-5 place-items-center rounded-full bg-white/92 md:size-6">
                  <Image
                    src={`${imagePath}facebook.png`}
                    alt=""
                    width={12}
                    height={12}
                    className="size-3 object-contain"
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
