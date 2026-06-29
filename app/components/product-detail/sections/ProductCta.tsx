"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../../home/assets";
import { ProductProfileRequestDialog } from "./ProductProfileRequestDialog";
import type { ProductDetailData } from "../product-detail-data";

export function ProductCta({ data }: { data: ProductDetailData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#005ead] py-20 text-white">
        <Image
          src={`${imagePath}footer-banner.png`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_48%,rgba(0,0,0,.28)_100%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[#005ead] mix-blend-color" />
        <div className="absolute inset-0 bg-[#005ead]/60 mix-blend-color" />
        <div className="site-container relative z-10">
          <h2 className=" text-[48px] font-semibold leading-[1.1] md:text-[60px]">
            {data.ctaTitle ??
              `Know More About The ${data.title.replaceAll(" ", "")}`}
          </h2>
          <p className="mt-5 max-w-140 text-sm leading-6 text-white/85 md:text-lg">
            Access detailed specifications, features, and performance data for
            the {data.title} in one compact product datasheet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center gap-3 rounded-[3px] bg-[#0048ad] py-3.25 pl-5 pr-2 text-[14px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#003f96]"
            >
              Download Product Profile
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <ProductProfileRequestDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        productTitle={data.title}
      />
    </>
  );
}