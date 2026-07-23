"use client";

import { useState } from "react";
import Image from "next/image";
import { imagePath } from "../../home/assets";
import { ProductProfileRequestDialog } from "./ProductProfileRequestDialog";
import type { ProductDetailData } from "../product-detail-data";
import { ArrowButton } from "../../home/SectionPrimitives";
import { FadeUp } from "../../animation";

export function ProductCta({ data }: { data: ProductDetailData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden flex items-center bg-[#005ead] py-20 text-white h-125">
        <Image
          src={`${imagePath}${data.footerBanner}`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_48%,rgba(0,0,0,.28)_100%)]" />
        <div className="absolute inset-0 w-full h-full bg-black/70" />
        <div className="absolute inset-0 w-full h-full bg-[#005ead] mix-blend-color" />
        <FadeUp className="site-container relative z-10">
          <h2 className=" text-[48px] font-semibold leading-[1.1] md:text-[60px]">
            {data.ctaTitle ??
              `Know More About The ${data.title.replaceAll(" ", "")}`}
          </h2>
          <p className="mt-5 max-w-140 text-sm leading-6 text-white/85 md:text-lg">
            Access detailed specifications, features, and performance data for
            the {data.title} in one compact product datasheet.
          </p>
          {/* <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex cursor-pointer items-center gap-3 rounded-[3px] bg-[#0048ad] py-3.25 pl-5 pr-2 text-[14px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#003f96]"
            >
              Download Product Profile
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div> */}
          <div className="mt-8">
            <ArrowButton
              asButton
              onClick={() => {
                setIsDialogOpen(true);
              }}
            >
              Download Product Profile
            </ArrowButton>
          </div>
        </FadeUp>
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
