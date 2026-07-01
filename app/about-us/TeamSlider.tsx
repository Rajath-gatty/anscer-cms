"use client";

import { imagePath } from "../components/home/assets";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useReducedMotion } from "motion/react";

import "swiper/css";

type TeamSlide = {
  image: string;
  name: string;
  role: string;
  alt: string;
  linkedIn: string;
};

type TeamSliderProps = {
  slides: readonly TeamSlide[];
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  copy: string;
};

const AUTOPLAY_DELAY = 3000;

export function TeamSlider({
  slides,
  eyebrow,
  title,
  highlightedTitle,
  copy,
}: TeamSliderProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [realIndex, setRealIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const reducedMotion = useReducedMotion();

  const total = slides.length;
  const isLoopable = total > 1;
  const hasProgress = !reducedMotion && isLoopable;

  const counter = useMemo(() => {
    const current = String(realIndex + 1).padStart(2, "0");
    const totalLabel = String(total).padStart(2, "0");
    return `${current}/${totalLabel}`;
  }, [realIndex, total]);

  const animationStyle = hasProgress
    ? { animation: `teamLoader ${AUTOPLAY_DELAY}ms linear forwards` }
    : { width: "0%" };

  // Safe Intersection Observer using the react-tracked swiper instance state
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !swiperInstance || reducedMotion || !isLoopable) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double-check autoplay module exists before running
          if (swiperInstance.autoplay && typeof swiperInstance.autoplay.start === "function") {
            swiperInstance.autoplay.start();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (swiperInstance.autoplay && typeof swiperInstance.autoplay.stop === "function") {
        swiperInstance.autoplay.stop();
      }
    };
  }, [swiperInstance, reducedMotion, isLoopable]);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setRealIndex(swiper.realIndex);
    setProgressKey((current) => current + 1);
  }, []);

  const renderControls = (isMobile = false) => (
    <div className={`flex items-center gap-3 ${isMobile ? "site-container mt-4 justify-center md:hidden" : "md:pb-1 hidden md:flex"}`}>
      <span className={`relative grid place-items-center overflow-hidden rounded-full border border-[#011f40] text-center tabular-nums shadow-sm ${
        isMobile ? "h-8 min-w-24 px-4 text-[14px] font-medium" : "min-w-21 px-5 py-2 text-[12px] font-medium md:min-w-30.5 md:py-3 md:text-[16px]"
      }`}>
        <span className="relative z-20 text-[#011f40]">{counter}</span>
        <div
          key={progressKey}
          className="absolute inset-y-0 left-0 z-10 h-full bg-[#005ead]/20"
          style={animationStyle}
        />
      </span>
      <button
        ref={isMobile ? undefined : prevRef}
        type="button"
        aria-label="Previous team member"
        className="grid size-10 place-items-center rounded-full border border-[#011f40] text-[#011f40] transition-colors duration-200 hover:border-[#005ead] hover:text-[#005ead] disabled:cursor-not-allowed disabled:opacity-35 md:size-11"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        ref={isMobile ? undefined : nextRef}
        type="button"
        aria-label="Next team member"
        className="grid size-10 place-items-center rounded-full border border-[#011f40] text-[#011f40] transition-colors duration-200 hover:border-[#005ead] hover:text-[#005ead] disabled:cursor-not-allowed disabled:opacity-35 md:size-11"
      >
        <ArrowRight className="size-5" />
      </button>
    </div>
  );

  return (
    <div ref={sectionRef}>
      <div className="site-container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-162.5">
            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#005ead] md:text-[16px]">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-[20px] font-bold leading-tight text-[#011f40] md:mt-3 md:text-[36px]">
              {title} <span className="text-[#005ead]">{highlightedTitle}</span>
            </h2>
            <p className="mt-3 max-w-160 text-[11px] leading-[1.45] text-[#3a3a3a] md:mt-4 md:text-[16px] md:leading-[1.55]">
              {copy}
            </p>
          </div>
          {renderControls(false)}
        </div>
      </div>

      <div className="mt-6 overflow-hidden pb-4 pl-[max(20px,calc((100vw-1300px)/2))] pr-5 md:mt-10" aria-label="Team members">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => {
            swiper.autoplay?.stop?.();
            setSwiperInstance(swiper); // Safely register instance into React state
          }}
          onSlideChange={handleSlideChange}
          loop={isLoopable}
          speed={500}
          spaceBetween={18}
          slidesPerView="auto"
          autoplay={
            reducedMotion || !isLoopable
              ? false
              : { delay: AUTOPLAY_DELAY, disableOnInteraction: false }
          }
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="overflow-visible!"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.image} className="w-56.25! md:w-105! xl:w-120!">
              <article className="relative h-71.25 overflow-hidden rounded-md bg-white text-white md:h-100">
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
                    <h3 className="text-[13px] font-semibold leading-tight text-white md:text-[18px]">
                      {slide.name}
                    </h3>
                    <p className="mt-2 text-[9px] font-normal text-white/92 md:text-[14px]">
                      {slide.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-3" aria-hidden="true">
                    <Link
                      href={slide.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="grid size-6 place-items-center rounded-full bg-white md:size-8"
                    >
                      <Image
                        src={`${imagePath}linkedin.png`}
                        alt=""
                        width={16}
                        height={16}
                        className="size-3.5 object-contain md:size-4"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {renderControls(true)}

      <style>{`
        @keyframes teamLoader {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}