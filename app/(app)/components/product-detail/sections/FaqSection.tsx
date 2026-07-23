"use client";

import { ProductFaqAccordion } from "../../robots/ProductFaqAccordion";
import type { ProductDetailData } from "../product-detail-data";

export function FaqSection({ data }: { data: ProductDetailData }) {
  return (
    <section id="faqs" className="scroll-mt-28 bg-[#fafafa] py-14">
      <div className="site-container grid gap-4 md:grid-cols-[0.6fr_1fr] xl:grid-cols-[0.5fr_1fr]">
        <div>
          <h2 className="mt-5 text-[28px] font-bold leading-[1.2] text-[#011f40] md:text-[32px] md:leading-9">
            FAQs
          </h2>
          <p className="mt-4 max-w-[380px] text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-[26px]">
            We&apos;ve heard it all - here&apos;s what people are really asking
            behind the scenes.
          </p>
        </div>
        <ProductFaqAccordion items={data.faqs} />
      </div>
    </section>
  );
}
