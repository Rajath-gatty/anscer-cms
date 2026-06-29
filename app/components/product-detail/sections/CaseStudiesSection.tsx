"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../../home/assets";
import type { ProductDetailData } from "../product-detail-data";

export function CaseStudiesSection({ data }: { data: ProductDetailData }) {
  return (
    <section
      id="case-studies"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <div className="site-container">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
          Case Studies
        </p>
        <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
          {data.title} <span className="text-[#005ead]">Success</span> Stories
        </h2>
        <p className="mt-4 max-w-[700px] text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-[26px]">
          Discover how manufacturers, warehouses, and industrial facilities use
          ANSCER robots to improve workflow efficiency and reduce manual
          handling.
        </p>
        <div className="relative mt-8">
          <div className="relative h-[260px] overflow-hidden rounded-[12px] bg-[#011f40] md:aspect-[2.04] md:h-auto md:rounded-[12px]">
            <Image
              src={`${imagePath}${data.caseStudyImage ?? "case-study-manufacturing.jpg"}`}
              alt="Manufacturing case study"
              fill
              sizes="100vw"
              className="object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.48),rgba(1,31,64,.08))]" />
            <h3 className="absolute left-7 top-7 text-xl font-bold leading-6 text-white md:text-[36px] md:leading-[1.1]">
              Manufacturing
            </h3>
            <div className="absolute bottom-7 right-7 hidden w-[270px] rounded-[12px] bg-white p-5 text-[#011f40] md:block">
              <p className="text-xl font-bold text-[#66bd6a]">
                Schneider
                <br />
                Electric
              </p>
              <p className="mt-4 text-base leading-[22px] text-[#3a3a3a]">
                Address the change and scale of your warehouse operations with
                robotic automation.
              </p>
              <a
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-[#005ead] py-3 text-[14px] font-semibold uppercase text-white"
                href="#"
              >
                Read Their Story{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative z-10 -mt-8 mx-4 rounded-[12px] bg-white p-5 text-[#011f40] shadow-md md:hidden">
            <p className="text-xl font-bold text-[#66bd6a]">
              Schneider
              <br />
              Electric
            </p>
            <p className="mt-4 text-[12px] leading-[18px] text-[#3a3a3a]">
              Address the change and scale of your warehouse operations with
              robotic automation.
            </p>
            <a
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-[#005ead] py-3 text-[14px] font-semibold uppercase text-white"
              href="#"
            >
              Read Their Story <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
