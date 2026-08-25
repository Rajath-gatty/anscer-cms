"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductFaq = {
  question: string;
  answer: string;
};

export function ProductFaqAccordion({ items }: { items: ProductFaq[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <article
            key={item.question}
            className={cn(
              "overflow-hidden border-0 border-transparent transition-colors duration-300",
              isOpen ? "rounded-xl bg-[#f1f1f1]" : "bg-transparent",
            )}
          >
            <button
              type="button"
              onClick={() => {
                if (activeIndex === index) return;
                setActiveIndex(index);
              }}
              aria-expanded={isOpen}
              className={cn(
                "group flex w-full items-center justify-between gap-4 rounded-xl px-3 py-3 text-left outline-none transition hover:no-underline focus-visible:ring-3 focus-visible:ring-[#005ead]/25 md:gap-4 md:px-6 md:py-3",
                isOpen ? "cursor-default" : "cursor-pointer"
              )}
            >
              <span className="text-sm font-semibold leading-5 text-[#3a3a3a] md:text-[18px] md:leading-6">
                {item.question}
              </span>
              <ChevronDownIcon
                aria-hidden="true"
                className={cn(
                  "size-5 shrink-0 text-[#3a3a3a] transition-opacity duration-300",
                  isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
                )}
                strokeWidth={2}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-3 pb-3 md:px-6">
                  <p className="max-w-[760px] 3xl:max-w-[900px] 4xl:max-w-[1100px] pt-2.5 text-[12px] leading-[18px] text-[#222228] md:text-base md:leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
