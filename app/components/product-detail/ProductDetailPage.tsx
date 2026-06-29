"use client";

import type { ComponentType } from "react";
import type { ProductDetailData } from "./product-detail-data";
import {
  AdvantagesSection,
  ApplicationsSection,
  CaseStudiesSection,
  FaqSection,
  FeaturesSection,
  ModulesSection,
  ProductCta,
  ProductHero,
  ProductOverview,
  ProductTabs,
} from "./sections";

export type ProductDetailSectionKey =
  | "hero"
  | "tabs"
  | "overview"
  | "advantages"
  | "features"
  | "modules"
  | "applications"
  // | "case-studies"
  | "faqs"
  | "cta";

export const defaultProductDetailSectionOrder: ProductDetailSectionKey[] = [
  "hero",
  "tabs",
  "overview",
  "advantages",
  "features",
  "modules",
  "applications",
  // "case-studies",
  "faqs",
  "cta",
];

const productDetailSections: Record<
  ProductDetailSectionKey,
  ComponentType<{ data: ProductDetailData }>
> = {
  hero: ProductHero,
  tabs: ProductDetailTabsSection,
  overview: ProductOverview,
  advantages: AdvantagesSection,
  features: FeaturesSection,
  modules: ProductDetailModulesSection,
  applications: ApplicationsSection,
  // "case-studies": CaseStudiesSection,
  faqs: FaqSection,
  cta: ProductCta,
};

export function ProductDetailPage({
  data,
  sections = defaultProductDetailSectionOrder,
}: {
  data: ProductDetailData;
  sections?: ProductDetailSectionKey[];
}) {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      {sections.map((sectionKey) => {
        const Section = productDetailSections[sectionKey];
        return <Section key={sectionKey} data={data} />;
      })}
    </main>
  );
}

function ProductDetailTabsSection({ data }: { data: ProductDetailData }) {
  return <ProductTabs hasModules={Boolean(data.modules)} />;
}

function ProductDetailModulesSection({ data }: { data: ProductDetailData }) {
  return data.modules ? <ModulesSection data={data} /> : null;
}
