"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { SectionHeading } from "./SectionHeading";
import { SLIDER_TRACK_CLASS, SliderControls, useSolutionSlider } from "./SolutionSlider";

export function SolutionImpact({ data }: { data: WarehouseSolutionData }) {
  const { impact } = data;
  const { swiperProps, controls } = useSolutionSlider(impact.items.length);

  return (
    <section className="overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)),linear-gradient(74.23deg,#011F40_-1.19%,#005EAD_120.16%)] py-12 md:py-[60px] 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            dark
            kicker={impact.kicker}
            title={impact.title}
            className="md:max-w-[75%]"
          />
          <SliderControls dark {...controls} className="hidden shrink-0 md:flex" />
        </div>
      </div>

      <div className={cn("mt-6 md:mt-10", SLIDER_TRACK_CLASS)}>
        <Swiper
          {...swiperProps}
          spaceBetween={16}
          breakpoints={{ 768: { spaceBetween: 24 } }}
          a11y={{ containerMessage: impact.title }}
        >
          {impact.items.map((item) => (
            <SwiperSlide
              key={item.title}
              className="!h-auto !w-[min(82vw,clamp(300px,27.8vw,640px))]"
            >
              <article className="flex h-full flex-col items-center gap-3 rounded-[10px] bg-white px-6 py-6 text-center 3xl:px-8 3xl:py-8">
                <h3 className="text-lg font-semibold leading-[1.3] text-brand-blue md:text-[clamp(18px,1.4vw,34px)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.35] text-brand-navy md:text-[clamp(15px,1.1vw,26px)]">
                  {item.copy}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SliderControls
        dark
        {...controls}
        className="site-container mt-7 flex justify-center md:hidden"
      />
    </section>
  );
}
