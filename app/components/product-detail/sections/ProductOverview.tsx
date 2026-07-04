"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { imagePath, videoPath } from "../../home/assets";
import { ScrollReveal } from "../../home/ScrollReveal";
import { ArrowButton } from "../../home/SectionPrimitives";
import { ProductProfileRequestDialog } from "./ProductProfileRequestDialog";
import type { ProductDetailData } from "../product-detail-data";

export function ProductOverview({ data }: { data: ProductDetailData }) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isImperial = unit === "imperial";

  return (
    <section
      id="overview"
      className="scroll-mt-28 overflow-hidden bg-[#fafafa] py-12 md:py-14"
    >
      <div className="site-container grid gap-9 lg:grid-cols-[0.56fr_0.44fr]">
        <div>
          <ScrollReveal direction="right">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Overview
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.15] md:text-4xl">
              {data.subtitle}
            </h2>
            <p className="mt-4 max-w-155 text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-6.5">
              {data.overview}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
          <div className="relative mt-8 aspect-[1.72] overflow-hidden rounded-[12px] bg-[#e6ebf0]">
            {
              data.overviewVideo ? (
                <video
                  src={`${videoPath}${data.overviewVideo}`}
                  className="object-cover w-full h-full relative z-5"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={`${imagePath}${data.overviewImage ?? data.useCases[0]?.image ?? data.heroImage}`}
                  alt={`${data.title} overview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              )
            }
          </div>
          </ScrollReveal>
        </div>

        <div className="pt-1">
          <div className="mb-7">
            <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Key Applications
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-lg bg-[#e6ebf0] px-4 py-1.5 text-base font-medium text-[#011f40]"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
              Key Specifications
            </p>
            <button
              type="button"
              aria-pressed={isImperial}
              className="flex cursor-pointer items-center gap-2 text-xs font-semibold uppercase text-[#011f40]"
              onClick={() => setUnit(isImperial ? "metric" : "imperial")}
            >
              <span
                className={cn(
                  "transition-opacity duration-200",
                  isImperial && "opacity-45",
                )}
              >
                Metric
              </span>
              <span className="relative h-5 w-9 rounded-full bg-[#011f40]">
                <span
                  className={cn(
                    "absolute left-0.5 top-0.5 size-4 rounded-full bg-white transition-transform duration-300 ease-out",
                    isImperial && "translate-x-4.5",
                  )}
                />
              </span>
              <span
                className={cn(
                  "transition-opacity duration-200",
                  !isImperial && "opacity-45",
                )}
              >
                Imperial
              </span>
            </button>
          </div>
          <dl>
            {data.specs.map((spec, index) => (
              <ScrollReveal
                key={spec.label}
                direction="right"
                delay={index * 45}
                className="grid grid-cols-[0.75fr_1fr] border-b border-[#dfe6ee] py-3.5"
              >
                <dt className="text-[12px] font-semibold uppercase leading-5 text-[#3a3a3a]/65 md:text-[14px]">
                  {spec.label}
                </dt>
                <dd
                  key={`${spec.label}-${unit}`}
                  className="text-base font-medium leading-6 text-[#011f40] transition duration-200 md:text-[18px]"
                >
                  {isImperial ? (spec.imperial ?? spec.value) : spec.value}
                </dd>
              </ScrollReveal>
            ))}
          </dl>
          <ArrowButton
            asButton
            className="mt-6"
            onClick={() => setIsDialogOpen(true)}
          >
            {data.overviewCtaLabel ?? "DOWNLOAD PRODUCT PROFILE"}
          </ArrowButton>
        </div>
      </div>

      <ProductProfileRequestDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        productTitle={data.title}
        productProfileUrl={data.productProfileUrl}
      />
    </section>
  );
}
