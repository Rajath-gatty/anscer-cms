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
    <section className={`${pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"} py-14 md:py-20`}>
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

            <div className="mt-10 hidden gap-10 lg:grid lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
              <div className="flex flex-col gap-4">
                {items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setActiveIndex(index)}
                      className={`cursor-pointer rounded-xl px-6 py-5 text-left text-[18px] transition-all duration-300 md:text-[20px] ${
                        isActive
                          ? "bg-white font-semibold text-[#005ead] shadow-[0_4px_20px_rgba(1,31,64,.05)]"
                          : "bg-white/50 font-semibold text-[#3a3a3a]/70 hover:bg-white/80"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-8 lg:mt-0">
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
                <div
                  key={`card-${activeIndex}`}
                  className="absolute -bottom-6 -right-2 z-10 w-[92%] max-w-90 rounded-xl bg-white p-6 shadow-[0_12px_30px_rgba(1,31,64,.12)] sm:-right-6 md:p-8 lg:-right-8 animate-card"
                  style={{ animationDelay: "0.1s", opacity: 0 }}
                >
                  <h3 className="text-xl font-bold text-[#005ead]">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.6] text-[#333333] md:text-base">
                    {activeItem.copy}
                  </p>
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
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <article
            key={item.title}
            className={`overflow-hidden rounded-[12px] border transition-all duration-300 ${
              isActive
                ? "border-[#d9e4ec] bg-white shadow-[0_12px_30px_rgba(1,31,64,.06)]"
                : "border-[#e5edf3] bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-expanded={isActive}
              className={`flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-[18px] font-semibold md:text-[20px] transition-colors md:px-7 md:py-6 ${
                isActive ? "text-[#005ead]" : "text-[#011f40]"
              }`}
            >
              <span className="leading-snug">
                {item.title}
              </span>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f3f6f9] text-[#011f40] transition-colors duration-300 group-aria-expanded:bg-[#e8f1f8] group-aria-expanded:text-[#005ead]">
                <ChevronDown
                  aria-hidden="true"
                  className={`size-4 transition-transform duration-300 ${
                    isActive ? "rotate-180" : "rotate-0"
                  }`}
                  strokeWidth={2.1}
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-0 md:px-7 md:pb-7">
                  <p className="max-w-140 text-[15px] leading-6 text-[#333333] md:text-[16px]">
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
