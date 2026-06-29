"use client";

import Image from "next/image";
import { useState } from "react";
import { imagePath } from "../../home/assets";
import { ScrollReveal } from "../../home/ScrollReveal";
import type { ProductDetailData } from "../product-detail-data";
import { ProductAccordionRows } from "./ProductAccordionRows";

export function ApplicationsSection({ data }: { data: ProductDetailData }) {
  const items = data.applicationRows ?? data.useCases;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <section
      id="applications"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <ScrollReveal>
        <div className="site-container">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Applications
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
              Built For Smart{" "}
              <span className="text-[#005ead]">Material</span> Movement
            </h2>
            <p className="mt-4 max-w-[670px] text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-[26px]">
              Designed to automate internal transport across warehouses,
              production floors, and distribution environments with safe and
              efficient autonomous navigation.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[0.55fr_0.45fr]">
            <article className="relative aspect-[1.43] overflow-hidden rounded-[12px] bg-[#011f40] text-white">
              <Image
                key={active?.image}
                src={`${imagePath}${active?.image ?? data.overviewImage ?? data.heroImage}`}
                alt={active?.title ?? "Application"}
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover opacity-85 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,.86),rgba(255,255,255,0)_60%)]" />
              <h3 className="absolute bottom-6 left-6 text-base font-semibold md:text-2xl">
                {active?.title}
              </h3>
            </article>
            <ProductAccordionRows
              items={items}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              surface="muted"
              titleClassName="text-base md:text-xl"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
