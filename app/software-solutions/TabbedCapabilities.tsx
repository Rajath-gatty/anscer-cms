"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
      className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} py-14 md:py-20`}
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
        <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-[30px] font-bold leading-tight md:text-4xl">
          {title}
        </h2>

        {variant === "accordion" ? (
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <AccordionList
              items={items}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <div className="relative mt-8 hidden lg:mt-0 lg:block">
              <div
                key={activeIndex}
                className="relative min-h-75 w-full overflow-hidden rounded-[18px] bg-[#dce7ef] md:min-h-110 animate-image"
              >
                <Image
                  src={`${imagePath}${activeItem.image}`}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </div>
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
                      className={`cursor-pointer rounded-xl p-5 text-left text-[20px] transition-colors duration-300 ${
                        isActive
                          ? "bg-white font-medium text-[#005ead]"
                          : "bg-white font-normal text-[#011f40] hover:bg-white/90"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-8 lg:mt-0">
                {/* Dark outer frame matching Webflow's device-screen effect */}
                <div
                  key={activeIndex}
                  className="relative min-h-75 w-full overflow-visible rounded-[21px] bg-[#252525] p-3 lg:min-h-126 animate-image"
                >
                  {/* Inner white image container */}
                  <div className="absolute inset-3 overflow-hidden rounded-2xl">
                    <Image
                      src={`${imagePath}${activeItem.image}`}
                      alt={activeItem.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
                    />
                  </div>
                  {/* Floating info card — top-98 = 392px from frame top, matching Webflow's
                       transform:translate(0,-100px) from natural flow position (480px inner height) */}
                  <div
                    key={`card-${activeIndex}`}
                    className="absolute top-98 right-0 z-10 w-90 max-w-[calc(100%-3rem)] rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.12)] animate-card"
                    style={{ animationDelay: "0.1s", opacity: 0 }}
                  >
                    <h3 className="text-[18px] font-semibold text-[#005ead]">
                      {activeItem.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-normal text-[#333333] md:text-[16px]">
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
}: {
  items: { title: string; copy: string; image: string }[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  mobileOnly?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <article
            key={item.title}
            className="overflow-hidden rounded-[12px] bg-white transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-expanded={isActive}
              className={`flex w-full cursor-pointer items-center justify-between gap-4 px-5 pt-[18px] text-left text-[16px] font-semibold text-[#005ead] transition-colors lg:text-[20px] ${
                isActive ? "pb-0" : "pb-[18px]"
              }`}
            >
              <span className="leading-snug">{item.title}</span>
              <span className="flex shrink-0 items-center justify-center text-[#005ead] transition-transform duration-300">
                <ChevronDown
                  aria-hidden="true"
                  className={`size-5 transition-transform duration-300 ${
                    isActive ? "rotate-180" : "rotate-0"
                  }`}
                  strokeWidth={2}
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-[18px] pt-[12px]">
                  <p className="max-w-140 text-[15px] leading-[1.5] text-[#333333] md:text-[16px]">
                    {item.copy}
                  </p>
                  <div
                    className={`relative mt-5 min-h-[220px] w-full overflow-hidden rounded-[12px] bg-[#dce7ef] sm:min-h-[300px] ${
                      mobileOnly ? "" : "lg:hidden"
                    }`}
                  >
                    <Image
                      src={`${imagePath}${item.image}`}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
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
