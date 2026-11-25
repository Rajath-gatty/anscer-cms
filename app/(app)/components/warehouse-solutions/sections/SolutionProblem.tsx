"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeUp } from "../../animation";
import { WarehouseAccordion } from "../WarehouseAccordion";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { SectionHeading } from "./SectionHeading";

export function SolutionProblem({ data }: { data: WarehouseSolutionData }) {
  const { problem } = data;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  // Keep showing the last opened item's image when every item is collapsed.
  const [imageIndex, setImageIndex] = useState(0);

  const handleChange = (index: number | null) => {
    setActiveIndex(index);
    if (index !== null) setImageIndex(index);
  };

  return (
    <section className="bg-[#e6ebf0] py-12 md:py-14 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <SectionHeading
          kicker={problem.kicker}
          title={problem.title}
          intro={problem.intro}
        />

        <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-2 lg:gap-10 3xl:gap-14">
          <FadeUp>
            <WarehouseAccordion
              items={problem.items}
              idPrefix={`${data.slug}-problem`}
              activeIndex={activeIndex}
              onActiveIndexChange={handleChange}
              cardClassName="rounded-[12px] bg-[#fafafa]"
              titleClassName="text-brand-blue md:text-[clamp(18px,1.4vw,34px)]"
            />
          </FadeUp>

          <FadeUp
            delay={0.1}
            className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-[#dce7ef] lg:aspect-auto lg:min-h-[370px]"
          >
            {problem.items.map((item, index) => (
              <Image
                key={item.image.src}
                src={item.image.src}
                alt={item.image.alt}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                aria-hidden={index !== imageIndex}
                className={cn(
                  "object-cover transition-opacity duration-500 ease-out",
                  index === imageIndex ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
