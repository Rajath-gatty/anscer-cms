"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { imagePath } from "../components/home/assets";

const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const railTop = 18;
const railHeight = 390;

const baseSlides = [
  {
    image: "1caa4163dc3f1c3c3c49b87e9ad9c750db3f30df-1.jpg",
    title: "ANSCER raises $2M to expand its AMR solutions and strengthen in US.",
    alt: "ANSCER team celebrating a company milestone",
  },
  {
    image: "slider-img-2.jpg",
    title: "ANSCER raises $2M to expand its AMR solutions and strengthen in US.",
    alt: "ANSCER robot moving through a warehouse aisle",
  },
  {
    image: "1850236eda6ba48b3a4bfe7084528816a27e9c32.jpg",
    title: "ANSCER raises $2M to expand its AMR solutions and strengthen in US.",
    alt: "ANSCER autonomous robot in a facility",
  },
] as const;

export function PathToPowerInteractive() {
  const [activeYearIndex, setActiveYearIndex] = useState(3);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const yearStep = railHeight / (years.length - 1);
  const thumbY = activeYearIndex * yearStep;

  const slides = useMemo(() => {
    const offset = activeYearIndex % baseSlides.length;
    return [...baseSlides.slice(offset), ...baseSlides.slice(0, offset)];
  }, [activeYearIndex]);

  const selectYear = (index: number) => {
    setActiveYearIndex(index);
    setActiveSlideIndex(0);
  };

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[132px_1fr] lg:gap-10">
      <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        {years.map((year, index) => {
          const isActive = index === activeYearIndex;

          return (
            <button
              key={year}
              type="button"
              onClick={() => selectYear(index)}
              data-path-year-mobile={year}
              className={`relative z-10 shrink-0 text-left font-extrabold outline-none transition-colors duration-300 focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-[#005ead]/20 ${
                isActive
                  ? "text-[28px] leading-none text-[#005ead]"
                  : "text-[16px] text-[#a7a7a7] hover:text-[#005ead]"
              }`}
              aria-pressed={isActive}
            >
              {year}
            </button>
          );
        })}
      </div>

      <div className="relative hidden h-[426px] w-[132px] lg:block">
        <span
          className="absolute left-[96px] w-px bg-[#d9d9d9]"
          data-path-rail="true"
          style={{ top: railTop, height: railHeight }}
        />
        <m.span
          className="absolute left-[92px] h-9 w-[9px] -translate-y-1/2 rounded-full bg-[#005ead] shadow-[0_0_0_3px_rgba(0,94,173,0.08)]"
          data-path-thumb="true"
          style={{ top: railTop }}
          animate={reduceMotion ? { y: thumbY } : { y: thumbY }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
          }
          aria-hidden="true"
        />
        {years.map((year, index) => {
          const isActive = index === activeYearIndex;

          return (
            <button
              key={year}
              type="button"
              onClick={() => selectYear(index)}
              data-path-year-desktop={year}
              className={`absolute left-0 z-10 w-[78px] -translate-y-1/2 text-right font-extrabold tabular-nums outline-none transition-colors duration-300 focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-[#005ead]/20 ${
                isActive
                  ? "text-[28px] leading-none text-[#005ead]"
                  : "text-[16px] text-[#a7a7a7] hover:text-[#005ead]"
              }`}
              style={{ top: railTop + index * yearStep }}
              aria-pressed={isActive}
            >
              {year}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:hidden">
        {slides.map((slide) => (
          <article
            key={`${years[activeYearIndex]}-mobile-${slide.image}`}
            className="relative min-h-[235px] overflow-hidden rounded-md bg-[#011f40] text-white"
          >
            <Image
              src={`${imagePath}${slide.image}`}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.14),rgba(0,0,0,.78))]" />
            <h3 className="absolute bottom-4 left-4 right-4 text-[11px] font-medium leading-tight">
              {slide.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="hidden h-[360px] min-w-0 gap-4 overflow-hidden md:flex md:h-[470px]">
        {slides.map((slide, index) => {
          const isActive = index === activeSlideIndex;

          return (
            <m.button
              key={`${years[activeYearIndex]}-${slide.image}`}
              type="button"
              layout
              onClick={() => setActiveSlideIndex(index)}
              animate={reduceMotion ? undefined : { flexGrow: isActive ? 1 : 0 }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative h-full min-w-0 overflow-hidden rounded-[22px] bg-[#011f40] text-left text-white outline-none ring-[#005ead]/35 transition-[width,filter] duration-500 focus-visible:ring-4 ${
                isActive
                  ? "w-[calc(100%-216px)] flex-1"
                  : "w-[72px] flex-none md:w-[92px]"
              }`}
              aria-label={`${isActive ? "Active" : "Expand"} ${slide.title}`}
              aria-pressed={isActive}
            >
              <Image
                src={`${imagePath}${slide.image}`}
                alt={slide.alt}
                fill
                sizes={isActive ? "(min-width: 1024px) 70vw, 100vw" : "120px"}
                className={`object-cover transition-transform duration-700 ${
                  isActive ? "scale-100" : "scale-110"
                }`}
              />
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-[linear-gradient(180deg,rgba(0,0,0,.66),rgba(0,0,0,.1)_44%,rgba(0,0,0,.2))]"
                    : "bg-[linear-gradient(180deg,rgba(1,31,64,.04),rgba(1,31,64,.45))]"
                }`}
              />

              <h3
                className={`absolute left-5 right-5 top-5 text-[18px] font-medium leading-tight transition-all duration-300 md:left-6 md:right-6 md:top-6 md:text-[22px] ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                {slide.title}
              </h3>

              <span
                className={`absolute bottom-5 left-1/2 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/80 text-white transition-all duration-300 ${
                  isActive
                    ? "scale-90 opacity-0"
                    : "scale-100 opacity-100 group-hover:bg-white/15"
                }`}
                aria-hidden="true"
              >
                <Plus className="size-5" strokeWidth={1.8} />
              </span>
            </m.button>
          );
        })}
      </div>
    </div>
  );
}

