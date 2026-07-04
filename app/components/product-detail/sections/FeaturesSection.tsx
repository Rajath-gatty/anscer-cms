"use client";

import { useState } from "react";
import {
  ArrowUpDown,
  Box,
  Boxes,
  DiamondPlus,
  Expand,
  Gauge,
  Layers,
  Minimize,
  Minimize2,
  MoveDiagonal,
  MoveHorizontal,
  PackageCheck,
  QrCode,
  ScanSearch,
  PackagePlus
} from "lucide-react";
import Image from "next/image";
import { imagePath } from "../../home/assets";
import { ScrollReveal } from "../../home/ScrollReveal";
import type { ProductDetailData } from "../product-detail-data";
import { ArrowButton } from "../../home/SectionPrimitives";
import { ProductProfileRequestDialog } from "./ProductProfileRequestDialog";

const featureIcons = {
  Layers,
  DiamondPlus,
  MoveDiagonal,
  PackageCheck,
  Box,
  QrCode,
  Expand,
  Gauge,
  ScanSearch,
  MoveHorizontal,
  ArrowUpDown,
  Boxes,
  Minimize,
  Minimize2,
  PackagePlus
} as const;

export function FeaturesSection({ data }: { data: ProductDetailData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section
        id="features"
        className="scroll-mt-28 bg-[#fafafa] py-12 md:py-14"
      >
        <div className="site-container">
          <ScrollReveal className="max-w-190" direction="left">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Features
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl" dangerouslySetInnerHTML={{ __html: data.features.title }} />
            <p className="mt-4 max-w-172.5 text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-6.5">
              {data.features.content}
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {data.features.features.slice(0, 2).map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 200}>
                <FeatureCard
                  title={feature.title}
                  copy={feature.copy}
                  Icon={featureIcons[feature.icon as keyof typeof featureIcons] ?? Layers}
              />
              </ScrollReveal>
            ))}
            <article className="relative order-last row-span-2 min-h-80 overflow-hidden rounded-[12px] bg-[#011f40] p-5 text-white lg:order-0 lg:min-h-95">
              <Image
                src={`${imagePath}Frame-1321317289.jpg`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.04),rgba(1,31,64,.86))]" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-bold leading-6 md:text-3xl md:leading-[1.1]">
                  Ready To Automate Your Workflow?
                </h3>
                <div className="mt-6">
                  <ArrowButton
                    asButton
                    onClick={() => {
                      setIsDialogOpen(true);
                    }}
                  >
                    Talk to an Expert
                  </ArrowButton>
                </div>
              </div>
            </article>
            {data.features.features.slice(2, 4).map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 200}>
              <FeatureCard
                key={feature.title}
                title={feature.title}
                copy={feature.copy}
                Icon={featureIcons[feature.icon as keyof typeof featureIcons] ?? Layers}
              />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProductProfileRequestDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        productTitle={data.title}
        productProfileUrl={data.productProfileUrl}
      />
    </>
  );
}

function FeatureCard({
  title,
  copy,
  Icon,
}: {
  title: string;
  copy: string;
  Icon: (typeof featureIcons)[keyof typeof featureIcons];
}) {
  return (
    <article className="min-h-42.5 rounded-[12px] bg-[#FFFFFF] p-5">
      <Icon
        aria-hidden="true"
        className="size-8 text-[#005ead]"
        strokeWidth={1.7}
      />
      <h3 className="mt-5 text-xl font-semibold leading-6 text-[#005ead] md:text-2xl md:leading-7">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-5.5">
        {copy}
      </p>
    </article>
  );
}
