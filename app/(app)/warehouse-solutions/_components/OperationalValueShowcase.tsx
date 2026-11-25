"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeUp } from "../../components/animation";
import {
  operationalValueImage,
  operationalValueItems,
} from "../_data/warehouse-data";
import { WarehouseAccordion } from "../../components/warehouse-solutions/WarehouseAccordion";

export function OperationalValueShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  // Keep the last opened title on the image when every item is collapsed.
  const [captionIndex, setCaptionIndex] = useState(0);

  const handleChange = (index: number | null) => {
    setActiveIndex(index);
    if (index !== null) setCaptionIndex(index);
  };

  return (
    <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-2 lg:gap-6 3xl:gap-8">
      <FadeUp className="h-full">
        <div className="relative aspect-[4/3] h-full overflow-hidden rounded-[10px] bg-[#dce7ef] lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={operationalValueImage}
            alt="ANSCER AR 250 robot carrying a stacked pallet through a warehouse aisle"
            fill
            quality={95}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#011f40]/85 via-[#011f40]/35 to-transparent"
          />
          <p
            key={captionIndex}
            aria-live="polite"
            className="reveal absolute bottom-6 left-6 right-6 text-xl font-medium text-white md:bottom-8 md:text-[clamp(20px,1.1vw,36px)] 3xl:bottom-10 3xl:left-10"
          >
            {operationalValueItems[captionIndex].title}
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <WarehouseAccordion
          items={operationalValueItems}
          idPrefix="operational-value"
          activeIndex={activeIndex}
          onActiveIndexChange={handleChange}
          cardClassName="border border-[#011f40]/8 bg-white"
        />
      </FadeUp>
    </div>
  );
}
