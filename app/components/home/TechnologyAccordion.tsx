"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
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
    image: "our-technology-img-1-p-800.png",
  },
  {
    title: "Smart Analytics & Reports",
    copy: "Gain complete visibility into robot utilization, mission performance, and operational trends, enabling data-driven decisions and continuous process optimization",
    image: "our-technology-updated-p-1080.png",
  },
  {
    title: "Flexible System Integration",
    copy: "Seamlessly connects with ERP, MES, and WMS platforms, enabling automated workflows, synchronized operations, and efficient end-to-end material movement",
    image: "our-technology-img-3-p-800.png",
  },
  {
    title: "Alerts & Notifications",
    copy: "Delivers intelligent notifications on request patterns and performance trends to support proactive decision-making",
    image: "our-technology-img-4-p-800.png",
  },
];

export function TechnologyAccordion() {
  const [activeValue, setActiveValue] = useState<string[]>(["technology-0"]);
  const activeIndex = Number(activeValue[0]?.replace("technology-", "") ?? 0);
  const activeItem = technologyItems[activeIndex];

  return (
    <div className="mt-7 grid items-stretch gap-5 md:mt-9 lg:grid-cols-[0.36fr_0.64fr]">
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
                "shrink-0",
                isOpen ? "py-4 lg:h-[240px] lg:py-6" : "h-[44px] py-3 lg:h-[76px] lg:py-5",
              )}
            >
              <TechnologyAccordionTrigger>
                <span className="text-xs font-semibold leading-5 text-[#005ead] md:text-xl md:leading-7">{item.title}</span>
              </TechnologyAccordionTrigger>

              <TechnologyAccordionContent>
                <p className="mt-3 max-w-[470px] text-[10px] leading-4 text-[#3a3a3a] md:mt-6 md:text-base md:leading-6">
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
                  src={`${imagePath}Union.svg`}
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

      <div className="relative hidden min-h-[432px] overflow-hidden rounded-xl bg-[#d9e3eb] lg:block lg:h-full">
        <Image
          key={activeItem.image}
          src={`${imagePath}${activeItem.image}`}
          alt={`${activeItem.title} interface`}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover transition-opacity duration-300"
          priority={activeIndex === 0}
        />
      </div>
    </div>
  );
}
