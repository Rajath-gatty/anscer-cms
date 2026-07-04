"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FadeLeft, FadeRight } from "../animation";
import { imagePath } from "./assets";
import {
  TechnologyAccordionContent,
  TechnologyAccordionItem,
  TechnologyAccordionRoot,
  TechnologyAccordionTrigger,
} from "./TechnologyAccordionPrimitives";

const technologyItems = [
  {
    title: "Real-Time Monitoring & Control",
    copy: "Instantly view robot locations, task progress, and system status ensuring uninterrupted operations and proactive interventions.",
    image: "home_realtimes.png",
    icon: "frame-18.png",
  },
  {
    title: "Smart Analytics & Reports",
    copy: "Gain complete visibility into robot utilization, mission performance, and operational trends, enabling data-driven decisions and continuous process optimization",
    image: "home_smartanalytic.png",
    icon: "frame-19.png",
  },
  {
    title: "Flexible System Integration",
    copy: "Seamlessly connects with ERP, MES, and WMS platforms, enabling automated workflows, synchronized operations, and efficient end-to-end material movement",
    image: "home_flexibles.png",
    icon: "frame-20.png",
  },
  {
    title: "Alerts & Notifications",
    copy: "Delivers intelligent notifications on request patterns and performance trends to support proactive decision-making",
    image: "home_alert.png",
    icon: "frame-21.png",
  },
];

export function TechnologyAccordion() {
  const [activeValue, setActiveValue] = useState<string[]>(["technology-0"]);
  const activeIndex = Number(activeValue[0]?.replace("technology-", "") ?? 0);

  return (
    <div className="mt-7 grid items-stretch gap-5 md:mt-9   lg:grid-cols-[0.36fr_0.64fr]">
      <FadeRight className="h-full">
        <TechnologyAccordionRoot
          value={activeValue}
          onValueChange={(nextValue) => {
            if (Array.isArray(nextValue) && nextValue[0]) {
              setActiveValue([nextValue[0]]);
            }
          }}
          className="h-full"
        >
          {technologyItems.map((item, index) => {
            const value = `technology-${index}`;
            const isOpen = activeIndex === index;

            return (
              <TechnologyAccordionItem
                key={item.title}
                value={value}
                className={cn(
                  "shrink-0 transition-all duration-300",
                  isOpen ? "py-4 lg:py-6" : "py-3 lg:py-5",
                )}
              >
                <TechnologyAccordionTrigger className="cursor-pointer">
                  <span className="text-base font-semibold leading-5 text-[#005ead] md:text-xl md:leading-7">
                    {item.title}
                  </span>
                </TechnologyAccordionTrigger>

                <TechnologyAccordionContent>
                  <p className="mt-3 max-w-[470px] text-sm leading-4 text-[#3a3a3a] md:mt-6 md:text-base md:leading-6">
                    {item.copy}
                  </p>
                  <div className="relative mt-4 aspect-[1.55] overflow-hidden rounded-md bg-[#d9e3eb] lg:hidden">
                    <Image
                      src={`${imagePath}${item.image}`}
                      alt={`${item.title} interface`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <Image
                    src={`${imagePath}${item.icon}`}
                    alt=""
                    width={52}
                    height={52}
                    className="mt-4 hidden size-[52px] lg:block"
                  />
                </TechnologyAccordionContent>
              </TechnologyAccordionItem>
            );
          })}
        </TechnologyAccordionRoot>
      </FadeRight>

      <FadeLeft
        className="relative hidden min-h-75 h-full overflow-hidden rounded-xl bg-[#d9e3eb] lg:block"
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
                "object-cover h-full transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                isActive ? "opacity-100" : "opacity-0",
              )}
            />
          );
        })}
      </FadeLeft>
    </div>
  );
}
