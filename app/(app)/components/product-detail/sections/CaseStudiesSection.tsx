"use client";

import Image from "next/image";
import type { ProductDetailData } from "../product-detail-data";
import { ArrowButton } from "../../home/SectionPrimitives";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeLeft, FadeRight } from "../../animation";

interface CaseStudyMedia {
  url: string;
  alt?: string;
}
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  image: CaseStudyMedia;
  logo: CaseStudyMedia;
}

export function CaseStudiesSection({ data }: { data: ProductDetailData }) {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCaseStudyAvailable, setIsCaseStudyAvailable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const res = await fetch(
          `/api/case-studies?where[caseStudy][equals]=${data.slug}&depth=1&limit=10`,
        );
        if (!res.ok) throw new Error("Failed to fetch case studies");
        const resData = await res.json();
        if (resData.docs.length > 0) {
          setIsCaseStudyAvailable(true);
          setCaseStudies(resData.docs ?? []);
        }
      } catch (err) {
        console.error("Error fetching case studies:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCaseStudies();
  }, [data.slug]);

  const activeCase = caseStudies[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? caseStudies.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % caseStudies.length);
  };

  return (
    isCaseStudyAvailable && (
      <section
        id="case-studies"
        className="scroll-mt-28 bg-[#fafafa] py-12 md:py-[56px]"
      >
        <div className="site-container">
          <FadeRight>
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
          </FadeRight>

          {isLoading ? (
            <CaseStudiesLoadingSkeleton />
          ) : (
            <div className="relative mt-8">
              <FadeRight
                className="relative h-[260px] overflow-hidden rounded-[12px] bg-[#011f40] md:aspect-[2.04] md:h-auto md:rounded-[12px]"
                delay={0.08}
              >
                {caseStudies.map((caseStudy, index) => (
                  <Image
                    key={caseStudy.id}
                    src={caseStudy.image.url}
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.18),rgba(1,31,64,.02)_45%,rgba(1,31,64,.22))] md:bg-[linear-gradient(90deg,rgba(1,31,64,.48),rgba(1,31,64,.08))]" />
                <h3 className="absolute left-5 top-5 text-base font-semibold text-white md:left-7 md:top-7 md:text-2xl">
                  {activeCase.title}
                </h3>
              </FadeRight>

              <FadeLeft
                className="relative z-10 mx-4 -mt-8 rounded-[12px] bg-white p-5 shadow-md md:absolute md:bottom-7 md:right-7 md:mx-0 md:mt-0 md:w-[270px] md:rounded-[12px] md:p-5"
                delay={0.14}
              >
                <Image
                  src={activeCase.logo.url}
                  alt={activeCase.logo.alt ?? ""}
                  width={126}
                  height={42}
                  className="h-7 w-auto object-contain md:h-10"
                />
                <p className="mt-3 text-[12px] leading-[18px] text-[#3a3a3a] md:mt-4 md:text-base md:leading-[22px]">
                  {activeCase.description}
                </p>
                <div className="mt-4 md:mt-5">
                  <ArrowButton
                    as="a"
                    href={activeCase.url}
                    className="w-full justify-center font-semibold rounded-[3px]"
                  >
                    Read Their Story
                  </ArrowButton>
                </div>
              </FadeLeft>

              {caseStudies.length > 1 && (
                <FadeRight
                  className="mt-4 flex items-center justify-center gap-3 text-xs text-[#011f40] md:absolute md:bottom-7 md:left-7 md:mt-0 md:text-white"
                  delay={0.16}
                >
                  <div className="flex h-8 items-center gap-2 rounded-full border border-[#011f40]/25 px-3 md:hidden">
                    {caseStudies.map((caseStudy, index) => (
                      <button
                        key={caseStudy.id}
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
              )}
            </div>
          )}
        </div>
      </section>
    )
  );
}

function CaseStudiesLoadingSkeleton() {
  return (
    <div className="relative mt-8 animate-pulse">
      {/* Image area skeleton */}
      <div className="relative h-[260px] overflow-hidden rounded-[12px] bg-[#c9d8e6] md:aspect-[2.04] md:h-auto md:min-h-[400px] md:rounded-[12px]">
        <div className="absolute left-5 top-5 h-5 w-28 rounded bg-white/20 md:left-7 md:top-7 md:h-7 md:w-36" />
      </div>

      {/* Info card skeleton */}
      <div className="relative z-10 mx-4 -mt-8 rounded-[12px] bg-white p-5 shadow-md md:absolute md:bottom-7 md:right-7 md:mx-0 md:mt-0 md:w-[270px] md:rounded-[12px] md:p-5">
        <div className="h-7 w-[100px] rounded bg-[#e4ecf3] md:h-10 md:w-[126px]" />
        <div className="mt-3 space-y-2 md:mt-4">
          <div className="h-3 w-full rounded bg-[#e4ecf3] md:h-4" />
          <div className="h-3 w-5/6 rounded bg-[#e4ecf3] md:h-4" />
          <div className="h-3 w-2/3 rounded bg-[#e4ecf3] md:h-4" />
        </div>
        <div className="mt-4 md:mt-5">
          <div className="h-9 w-full rounded bg-[#e4ecf3] md:h-10" />
        </div>
      </div>

      {/* Navigation skeleton */}
      <div className="mt-4 flex items-center justify-center gap-3 md:absolute md:bottom-7 md:left-7 md:mt-0">
        <div className="flex h-8 items-center gap-2 rounded-full border border-[#e4ecf3] px-3 md:hidden">
          <div className="size-2 rounded-full bg-[#d1dbe5]" />
          <div className="size-2 rounded-full bg-[#d1dbe5]" />
          <div className="size-2 rounded-full bg-[#d1dbe5]" />
        </div>
        <div className="hidden h-5 w-12 rounded bg-[#d1dbe5] md:block" />
        <div className="size-8 rounded-full border border-[#e4ecf3] bg-[#f4f7fa]" />
        <div className="size-8 rounded-full border border-[#e4ecf3] bg-[#f4f7fa]" />
      </div>
    </div>
  );
}
