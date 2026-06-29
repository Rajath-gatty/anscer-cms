"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "../../home/assets";
import type { ProductDetailData } from "../product-detail-data";

export function ProductCta({ data }: { data: ProductDetailData }) {
  return (
    <section className="relative overflow-hidden bg-[#005ead] py-20 text-white">
      <Image
        src={`${imagePath}footer-banner.png`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[#005ead]/60" />
      <div className="site-container relative z-10">
        <h2 className="max-w-[760px] text-[48px] font-semibold leading-[1.1] md:text-[60px]">
          {data.ctaTitle ??
            `Know More About The ${data.title.replaceAll(" ", "")}`}
        </h2>
        <p className="mt-5 max-w-[560px] text-sm leading-6 text-white/85 md:text-lg">
          Access detailed specifications, features, and performance data for the{" "}
          {data.title} in one compact product datasheet.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-[3px] bg-[#0048ad] py-[13px] pl-5 pr-2 text-[14px] font-semibold uppercase tracking-wide text-white"
          >
            Download Product Datasheet{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <Link
            href={`/${data.seriesSlug}`}
            className="inline-flex items-center gap-3 rounded-[3px] border border-white/50 py-[13px] pl-5 pr-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Back to {data.seriesLabel}{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
