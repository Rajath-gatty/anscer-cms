"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { SectionHeading } from "./SectionHeading";
import { SLIDER_TRACK_CLASS, useSolutionSlider } from "./SolutionSlider";

export function SolutionApplications({ data }: { data: WarehouseSolutionData }) {
  const { applications } = data;
  // No counter or arrows here — the cards are dragged (or autoplay) only.
  const { swiperProps } = useSolutionSlider(applications.items.length);

  return (
    <section className="overflow-hidden bg-[#fafafa] py-12 md:py-[60px] 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <SectionHeading kicker={applications.kicker} title={applications.title} />
      </div>

      <div className={cn("mt-6 md:mt-10", SLIDER_TRACK_CLASS)}>
        <Swiper
          {...swiperProps}
          spaceBetween={20}
          breakpoints={{ 768: { spaceBetween: 40 } }}
          a11y={{ containerMessage: applications.title }}
        >
          {applications.items.map((item) => (
            <SwiperSlide
              key={item.title}
              className="!w-[min(82vw,clamp(300px,27.8vw,640px))]"
            >
              <Link
                href={item.href}
                className="group relative block aspect-[400/350] overflow-hidden rounded-[12px] bg-brand-navy outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/40"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 82vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,rgba(0,0,0,.25)_45%,rgba(0,0,0,.1)_100%)]"
                />
                <h3 className="absolute left-6 top-8 flex items-center gap-2 text-2xl font-medium text-white md:left-[30px] md:top-[38px] md:text-[clamp(24px,1.95vw,48px)]">
                  {item.title}
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={2}
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1 3xl:size-7"
                  />
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
