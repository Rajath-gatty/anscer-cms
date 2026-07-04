"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { imagePath } from "../components/home/assets";

export function TabbedCapabilities({
  eyebrow,
  title,
  items,
  pale = false,
  variant = "cards",
}: {
  eyebrow: string;
  title: string;
  items: { title: string; copy: string; image: string }[];
  pale?: boolean;
  variant?: "accordion" | "cards";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <section
      className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} px-6 md:px-14 py-10 md:py-20`}
    >
      <style>{`
        @keyframes fade-image {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-card {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-image {
          animation: fade-image 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-card {
          animation: slide-card 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <div className="site-container">
        <p className="text-[12px] md:text-base font-medium uppercase tracking-[0.14em] text-[#005ead]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-[28px] md:text-4xl font-bold capitalize leading-tight">
          {title}
        </h2>

        {variant === "accordion" ? (
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
            <AccordionList
              items={items}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              aspectRatio="aspect-[4/3]"
              listClassName="min-h-[840px] sm:min-h-[980px] md:min-h-[1080px] lg:min-h-0"
            />

            <div className="relative hidden w-full self-stretch overflow-hidden rounded-[18px] bg-[#dce7ef] lg:block">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <Image
                    key={item.image}
                    src={`${imagePath}${item.image}`}
                    alt={isActive ? item.title : ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    aria-hidden={!isActive}
                    className={`object-cover object-[50%_20%] transition-opacity duration-500 ease-in-out ${
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-10 lg:hidden">
              <AccordionList
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                mobileOnly
                aspectRatio="aspect-[721/464]"
                listClassName="min-h-[560px] sm:min-h-[680px] md:min-h-[820px]"
              />
            </div>

            <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-2 lg:items-center">
              <div className="flex max-w-100 flex-col gap-3">
                {items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setActiveIndex(index)}
                      className={`cursor-pointer rounded-xl p-5 text-left text-xl font-semibold transition-colors duration-300 ${
                        isActive
                          ? "bg-white font-semibold text-[#005ead]"
                          : "bg-white font-normal text-[#011f40] hover:bg-white/90"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-8 lg:mt-0 mb-12">
                {/* Dark outer frame matching Webflow's device-screen effect */}
                <div
                  key={activeIndex}
                  className="relative w-full overflow-visible rounded-[21px] bg-[#252525] p-3 animate-image"
                >
                  {/* Inner white image container */}
                  <div className="relative aspect-[721/464] w-full overflow-hidden rounded-[21px] bg-[#252525]">
                    <Image
                      src={`${imagePath}${activeItem.image}`}
                      alt={activeItem.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover rounded-[21px]"
                    />
                  </div>
                  {/* Floating info card matching Webflow's overlap effect */}
                  <div
                    key={`card-${activeIndex}`}
                    className="absolute -bottom-10 -right-6 z-10 w-90 max-w-[calc(100%-3rem)] rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.12)] animate-card"
                    style={{ animationDelay: "0.1s", opacity: 0 }}
                  >
                    <h3 className="text-lg font-semibold text-[#005ead]">
                      {activeItem.title}
                    </h3>
                    <p className="mt-3 leading-normal text-brand-charcoal text-base">
                      {activeItem.copy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function AccordionList({
  items,
  activeIndex,
  setActiveIndex,
  mobileOnly = false,
  aspectRatio = "aspect-[4/3]",
  listClassName = "",
}: {
  items: { title: string; copy: string; image: string }[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  mobileOnly?: boolean;
  aspectRatio?: string;
  listClassName?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${listClassName}`}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <article
            key={item.title}
            id={`software-accordion-item-${index}`}
            className={`shrink-0 transition-all duration-500 ease-in-out scroll-mt-32 overflow-hidden rounded-[12px] bg-white px-5 shadow-sm ${
              isActive ? "py-4 lg:py-6" : "py-3 lg:py-5"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                const siblingIndex = activeIndex;
                
                // Measure sibling height synchronously BEFORE changing activeIndex state
                let siblingHeightDiff = 0;
                if (siblingIndex !== index && siblingIndex < index) {
                  const siblingElement = document.getElementById(`software-accordion-item-${siblingIndex}`);
                  if (siblingElement) {
                    const siblingClosedHeight = siblingElement.querySelector("button")?.offsetHeight || 60;
                    siblingHeightDiff = siblingElement.offsetHeight - siblingClosedHeight;
                  }
                }

                setActiveIndex(index);
                
                // Only scroll on mobile/tablet — desktop uses side-by-side layout
                if (window.innerWidth < 1024) {
                  setTimeout(() => {
                    const scrollMarginTop = 135; // combined sticky header offsets (navbar + subtabs)
                    const targetElement = document.getElementById(`software-accordion-item-${index}`);
                    if (!targetElement) return;

                    let targetY = targetElement.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
                    if (siblingHeightDiff > 0) {
                      targetY -= siblingHeightDiff;
                    }

                    window.scrollTo({
                      top: Math.max(0, targetY),
                      behavior: "smooth",
                    });
                  }, 0);
                }
              }}
              aria-expanded={isActive}
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left outline-none transition focus-visible:ring-3 focus-visible:ring-[#005ead]/30"
            >
              <span className="text-base font-semibold leading-5 text-[#005ead] md:text-xl md:leading-7">{item.title}</span>
              <ChevronDown
                aria-hidden="true"
                className={`size-5 shrink-0 text-[#011f40] transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                strokeWidth={2}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-[12px]">
                  <p className="max-w-140 text-sm leading-4 text-[#3a3a3a] md:text-base md:leading-6">
                    {item.copy}
                  </p>
                  <div
                    className={`relative mt-4 ${aspectRatio} w-full overflow-hidden rounded-[12px] bg-[#dce7ef] ${
                      mobileOnly ? "" : "lg:hidden"
                    }`}
                  >
                    <Image
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover object-[50%_20%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
