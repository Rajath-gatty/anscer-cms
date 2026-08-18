"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FadeLeft, FadeRight, FadeUp } from "../animation";
import { imagePath } from "./assets";

const technologyItems = [
  {
    title: "Real-Time Monitoring & Control",
    copy: "Instantly view robot locations, task progress, and system status ensuring uninterrupted operations and proactive interventions.",
    image: "home_realtimes.avif",
    icon: "frame-18.svg",
  },
  {
    title: "Smart Analytics & Reports",
    copy: "Gain complete visibility into robot utilization, mission performance, and operational trends, enabling data-driven decisions and continuous process optimization",
    image: "home_smartanalytic.avif",
    icon: "frame-19.svg",
  },
  {
    title: "Flexible System Integration",
    copy: "Seamlessly connects with ERP, MES, and WMS platforms, enabling automated workflows, synchronized operations, and efficient end-to-end material movement",
    image: "home_flexibles.png",
    icon: "frame-20.svg",
  },
  {
    title: "Proactive Insights & Alerts",
    copy: "Delivers intelligent notifications on request patterns and performance trends to support proactive decision-making",
    image: "home_alert.avif",
    icon: "frame-21.svg",
  },
];

export function TechnologyAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="mt-7 grid items-stretch gap-5 3xl:gap-[10vw] md:mt-9   lg:grid-cols-[0.36fr_0.64fr]">
      <FadeUp className="h-full">
        <div className="h-full flex flex-col gap-3">
          {technologyItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={item.title}
                id={`tech-accordion-item-${index}`}
                className={cn(
                  "shrink-0 transition-all duration-500 ease-in-out scroll-mt-20 overflow-hidden rounded-xl bg-white px-5 shadow-sm",
                  isOpen ? "py-4 lg:py-6 4xl:py-8" : "py-3 lg:py-5 4xl:py-6",
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (activeIndex === index) return;
                    setActiveIndex(index);
                  }}
                  aria-expanded={isOpen}
                  className={cn(
                    "group/technology-accordion-trigger flex w-full items-center justify-between gap-4 text-left outline-none transition focus-visible:ring-3 focus-visible:ring-[#005ead]/30",
                    isOpen ? "cursor-default" : "cursor-pointer",
                  )}
                >
                  <span className="text-base font-semibold leading-5 md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.1vw,28px)] md:leading-[130%]">
                    {item.title}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={cn(
                      "size-5 shrink-0 text-[#011f40] transition-opacity duration-300",
                      isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
                    )}
                    strokeWidth={2}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0 mt-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-[470px] 4xl:max-w-[90%] text-sm leading-4 text-[#3a3a3a] md:mt-1    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[130%]">
                      {item.copy}
                    </p>
                    <div className="relative mt-4 aspect-[1.55] overflow-hidden rounded-md bg-[#d9e3eb] lg:hidden">
                      <Image
                        src={`${imagePath}${item.image}`}
                        alt={`${item.title} interface`}
                        width={1400}
                        height={1050}
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    {/* <Image
                      src={`${imagePath}${item.icon}`}
                      alt=""
                      width={52}
                      height={52}
                      className="mt-4 hidden size-[52px] lg:block"
                    /> */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </FadeUp>

      <FadeUp
        className="relative hidden min-h-75 3xl:min-h-[600px] h-full overflow-hidden rounded-xl bg-[#d9e3eb] lg:block"
        delay={0.08}
      >
        {technologyItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <Image
              key={item.image}
              src={`${imagePath}${item.image}`}
              alt={isActive ? `${item.title} interface` : ""}
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              loading="eager"
              aria-hidden={!isActive}
              className={cn(
                "object-contain h-full transition-opacity duration-500 ease-in-out motion-reduce:transition-none",
                isActive ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            />
          );
        })}
      </FadeUp>
    </div>
  );
}
