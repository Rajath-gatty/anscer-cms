"use client";

import Image from "next/image";
import { useState } from "react";
import { imagePath } from "../../home/assets";
import { ScrollReveal } from "../../home/ScrollReveal";
import type { ProductDetailData } from "../product-detail-data";
import { ProductAccordionRows } from "./ProductAccordionRows";

export function AdvantagesSection({ data }: { data: ProductDetailData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAdvantage = data.advantages[activeIndex] ?? data.advantages[0];

  return (
    <section
      id="advantages"
      className="scroll-mt-28 bg-[#e6ebf0] py-12 md:py-[56px]"
    >
      <ScrollReveal>
        <div className="site-container">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Advantages
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
              Why <span className="text-[#005ead]">Choose</span> {data.title}
            </h2>
            <p className="mt-4 max-w-[680px] text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-[26px]">
              {data.advantageIntro ??
                `Choose the ${data.title} to standardize automation with an adaptable platform that reduces complexity, improves throughput, and supports evolving material handling needs.`}
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
            <ProductAccordionRows
              items={data.advantages}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              surface="white"
            />
            <div className="relative aspect-[1.75] overflow-hidden rounded-[12px] bg-white">
              <Image
                key={activeAdvantage?.title}
                src={`${imagePath}${data.advantageImage ?? data.overviewImage ?? data.heroImage}`}
                alt={`${data.title} advantage`}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
