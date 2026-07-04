"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FadeLeft, FadeRight } from "../animation";
import { imagePath } from "./assets";
import { ArrowButton, Kicker } from "./SectionPrimitives";

const caseStudies = [
  {
    category: "Manufacturing",
    image: "case-study-1.jpg",
    logo: "updated-logo-4.png",
    title: "Schneider Electric",
    copy: "Address the change and scale of your warehouse operations with robotic automation. Build the workforce of tomorrow.",
  },
  {
    category: "Manufacturing",
    image: "case-study-2.jpg",
    logo: "updated-logo-5.png",
    title: "Motherson",
    copy: "Automated line-side trolley movement keeps material flowing safely and predictably across busy production floors.",
  },
  {
    category: "Warehouse",
    image: "case-study-3.jpg",
    logo: "updated-logo-2.png",
    title: "Bajaj",
    copy: "Pallet movement workflows help teams improve throughput, reduce manual handling, and maintain reliable intralogistics.",
  },
  {
    category: "Logistics",
    image: "case-study-4.jpg",
    logo: "updated-logo-1.png",
    title: "Mahindra Logistics",
    copy: "Flexible AMR deployments support changing volumes, mixed payloads, and scalable point-to-point material movement.",
  },
  {
    category: "Factory Automation",
    image: "case-study-5.jpg",
    logo: "updated-logo-6.png",
    title: "MultiVista",
    copy: "Autonomous movement systems connect shop-floor operations with safer, smarter, and more efficient automation.",
  },
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = caseStudies[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? caseStudies.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % caseStudies.length);
  };

  return (
    <section className="overflow-hidden bg-[#eef5fb] py-8 md:bg-white md:py-20">
      <div className="site-container">
        <FadeRight>
          <Kicker>Transforming Workplaces With Intelligence</Kicker>
          <h2 className="mt-4 text-[28px] font-bold tracking-tight md:text-[36px]">
            Our <span className="text-[#005ead]">Case Studies</span>
          </h2>
          <p className="mt-4 max-w-[640px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            From factory floors to fulfillment centers, discover how industry leaders have partnered with ANSCER to elevate
            efficiency, safety, and productivity through automation.
          </p>
        </FadeRight>

        <div className="relative mt-7 md:mt-9">
          <FadeRight
            className="relative h-[150px] overflow-hidden rounded-lg bg-[#011f40] md:min-h-[520px] md:rounded-xl"
            delay={0.08}
          >
            {caseStudies.map((caseStudy, index) => (
              <Image
                key={caseStudy.image}
                src={`${imagePath}${caseStudy.image}`}
                alt={`${caseStudy.title} case study`}
                fill
                sizes="(max-width: 768px) 100vw, 1340px"
                priority={index === 0}
                className={cn(
                  "object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  index === activeIndex ? "scale-100 opacity-80 md:opacity-75" : "scale-105 opacity-0",
                )}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.18),rgba(1,31,64,.02)_45%,rgba(1,31,64,.22))] md:bg-[linear-gradient(90deg,rgba(1,31,64,.36),rgba(1,31,64,.08))]" />
            <h3 className="absolute left-5 top-5 text-base font-semibold text-white md:left-7 md:top-7 md:text-2xl">
              {activeCase.category}
            </h3>
          </FadeRight>

          <FadeLeft
            className="relative z-10 mx-2 -mt-6 rounded bg-white p-4 shadow-xl md:absolute md:bottom-7 md:right-7 md:mx-0 md:mt-0 md:w-[330px] md:rounded-lg md:p-6"
            delay={0.14}
          >
            <Image
              src={`${imagePath}${activeCase.logo}`}
              alt=""
              width={126}
              height={42}
              className="h-7 w-auto object-contain md:h-10"
            />
            <h4 className="mt-3 text-sm font-semibold text-[#011f40] md:mt-4 md:text-lg">{activeCase.title}</h4>
            <p className="mt-2 text-sm leading-4 text-[#536171] md:mt-3 md:text-base md:leading-6">
              {activeCase.copy}
            </p>
            <div className="mt-3 md:mt-5">
              <div className="md:hidden">
                <ArrowButton
                  as="a"
                  href="#contact"
                  className="h-9 w-full justify-center text-sm font-medium"
                >
                  Read their story
                </ArrowButton>
              </div>
              <div className="hidden md:block">
                <ArrowButton>Read their story</ArrowButton>
              </div>
            </div>
          </FadeLeft>

          <FadeRight
            className="mt-4 flex items-center justify-center gap-3 text-xs text-[#011f40] md:absolute md:bottom-7 md:left-7 md:mt-0 md:text-white"
            delay={0.16}
          >
            <div className="flex h-8 items-center gap-2 rounded-full border border-[#011f40]/25 px-3 md:hidden">
              {caseStudies.map((caseStudy, index) => (
                <button
                  key={caseStudy.title}
                  type="button"
                  aria-label={`Show case study ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "size-2 rounded-full transition-all duration-300",
                    activeIndex === index ? "w-5 bg-[#005ead]" : "bg-[#9db4cb]",
                  )}
                />
              ))}
            </div>
            <span className="hidden h-8 min-w-[62px] place-items-center rounded-full border border-[#011f40] px-4 md:grid md:h-auto md:min-w-0 md:border-0 md:px-0">
              {String(activeIndex + 1).padStart(2, "0")}/{String(caseStudies.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Previous case study"
              onClick={goToPrevious}
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-[#c9d4df] text-[#8491a0] transition hover:bg-[#eef3f7] md:border-white/60 md:text-white md:hover:bg-white/15"
            >
              <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next case study"
              onClick={goToNext}
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-[#c9d4df] text-[#8491a0] transition hover:bg-[#eef3f7] md:border-white/60 md:text-white md:hover:bg-white/15"
            >
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
            </button>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
