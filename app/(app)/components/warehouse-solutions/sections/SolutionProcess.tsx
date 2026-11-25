"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeUp } from "../../animation";
import { ArrowButton } from "../../home/SectionPrimitives";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { SectionHeading } from "./SectionHeading";

export function SolutionProcess({ data }: { data: WarehouseSolutionData }) {
  const { process } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const idPrefix = `${data.slug}-process`;

  return (
    <section className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <SectionHeading
          kicker={process.kicker}
          title={process.title}
          intro={process.intro}
        />

        {/* One reveal for the map, steps and CTA strip so they enter together. */}
        <FadeUp>
          <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-[644fr_660fr] lg:gap-6 3xl:gap-8">
            <div className="relative aspect-[644/505] overflow-hidden rounded-[12px] bg-[#f0f0f0] lg:aspect-auto lg:min-h-[505px]">
              <Image
                src={process.image.src}
                alt={process.image.alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <ol className="flex flex-col gap-3 lg:h-full lg:justify-between lg:gap-2">
                {process.steps.map((step, index) => {
                  const isActive = index === activeIndex;
                  const number = String(index + 1).padStart(2, "0");
                  const panelId = `${idPrefix}-panel-${index}`;
                  const buttonId = `${idPrefix}-button-${index}`;

                  return (
                    <li
                      key={step.title}
                      className={cn(
                        "flex overflow-hidden rounded-[10px] border transition-colors duration-300",
                        isActive
                          ? "border-brand-blue bg-brand-blue"
                          : "border-[#e5e5e5] bg-white hover:border-brand-blue/40",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex w-12 shrink-0 items-center justify-center text-lg font-medium transition-colors duration-300 md:text-[clamp(18px,1.4vw,34px)] 3xl:w-16",
                          isActive
                            ? "bg-brand-navy text-white"
                            : "bg-[#f5f5f5] text-brand-charcoal",
                        )}
                      >
                        {number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3>
                          <button
                            id={buttonId}
                            type="button"
                            aria-expanded={isActive}
                            aria-controls={panelId}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                              "w-full cursor-pointer px-3 py-4 text-left text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-brand-blue/30 md:text-[clamp(14px,1.1vw,28px)] 3xl:px-5 3xl:py-5",
                              isActive
                                ? "pb-1 font-semibold text-white 3xl:pb-2"
                                : "text-brand-charcoal",
                            )}
                          >
                            <span className="sr-only">Step {number}: </span>
                            {step.title}
                          </button>
                        </h3>
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                            isActive
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="px-3 pb-4 text-[13px] leading-[1.55] text-white/90 md:text-[clamp(13px,0.9vw,24px)] 3xl:px-5 3xl:pb-5">
                              {step.copy}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[10px] border border-brand-blue/15 bg-[#eef4fb] px-5 py-5 md:mt-10 md:flex-row md:items-center md:justify-between md:px-7 3xl:px-9 3xl:py-7">
            <p className="text-base font-medium leading-[1.4] text-brand-navy md:text-[clamp(16px,1.25vw,30px)]">
              {process.cta.text}
            </p>
            <ArrowButton
              target={process.cta.href}
              className="h-[42px] shrink-0 self-start px-4 md:self-auto 3xl:h-[50px] 3xl:px-5"
            >
              {process.cta.label}
            </ArrowButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
