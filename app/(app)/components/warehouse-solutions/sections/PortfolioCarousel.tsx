"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";
import { PortfolioCard, type PortfolioItem } from "./PortfolioCard";
import { SLIDER_TRACK_CLASS, useSolutionSlider } from "./SolutionSlider";

/**
 * Same slider as the Applications section: full-bleed track aligned to the container,
 * cards bleeding off the right edge, autoplay once in view, dragged only (no arrows).
 * Render outside .site-container.
 */
export function PortfolioCarousel({
  items,
  label,
}: {
  items: PortfolioItem[];
  label: string;
}) {
  const { swiperProps } = useSolutionSlider(items.length);

  return (
    <div className={cn("mt-8 md:mt-10", SLIDER_TRACK_CLASS)}>
      <Swiper
        {...swiperProps}
        spaceBetween={20}
        breakpoints={{ 768: { spaceBetween: 40 } }}
        a11y={{ containerMessage: label }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={item.name}
            className="!h-auto !w-[min(82vw,clamp(300px,27.8vw,640px))]"
          >
            <PortfolioCard
              item={item}
              index={index}
              sizes="(max-width: 768px) 82vw, 28vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
