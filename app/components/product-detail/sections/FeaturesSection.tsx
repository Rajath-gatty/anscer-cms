"use client";

import { ArrowRight, Layers, LocateFixed, ShieldCheck, Workflow } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../../home/assets";
import { ScrollReveal } from "../../home/ScrollReveal";
import type { ProductDetailData } from "../product-detail-data";

export function FeaturesSection({ data }: { data: ProductDetailData }) {
  const icons = [Layers, Workflow, LocateFixed, ShieldCheck];

  return (
    <section
      id="features"
      className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
    >
      <div className="site-container">
        <ScrollReveal className="max-w-[760px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#005ead] md:text-base">
            Features
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-4xl">
            Engineered For <span className="text-[#005ead]">Intelligent</span>{" "}
            Material Handling
          </h2>
          <p className="mt-4 max-w-[690px] text-sm leading-5 text-[#3a3a3a] md:text-[18px] md:leading-[26px]">
            The {data.title} combines intelligent navigation with purpose-built
            hardware to automate material handling while enabling rapid
            deployment and scalable operations.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {data.features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              copy={feature.copy}
              Icon={icons[index]}
            />
          ))}
          <article className="relative order-last row-span-2 min-h-[320px] overflow-hidden rounded-[12px] bg-[#011f40] p-5 text-white lg:order-none lg:min-h-[380px]">
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
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-[3px] bg-[#005ead] py-[10px] pl-4 pr-2 text-[11px] font-semibold uppercase tracking-wide text-white"
              >
                Talk to an Expert{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </article>
          {data.features.slice(2, 4).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              copy={feature.copy}
              Icon={icons[index + 2]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  copy,
  Icon,
}: {
  title: string;
  copy: string;
  Icon: typeof Layers;
}) {
  return (
    <article className="min-h-[170px] rounded-[12px] bg-[#FFFFFF] p-5">
      <Icon
        aria-hidden="true"
        className="size-8 text-[#005ead]"
        strokeWidth={1.7}
      />
      <h3 className="mt-5 text-xl font-semibold leading-6 text-[#005ead] md:text-2xl md:leading-7">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
        {copy}
      </p>
    </article>
  );
}
