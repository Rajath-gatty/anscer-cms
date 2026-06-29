"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export type ProductAccordionItem = {
  title: string;
  copy: string;
};

export function ProductAccordionRows({
  items,
  activeIndex,
  onActiveChange,
  surface = "white",
  titleClassName,
}: {
  items: ProductAccordionItem[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
  surface?: "white" | "muted";
  titleClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <article
            key={item.title}
            className={cn(
              "overflow-hidden rounded-[12px] transition-all duration-300 ease-out",
              surface === "white" ? "bg-white" : "bg-[#fafafa]",
              isOpen
                ? "p-5 shadow-[0_12px_30px_rgba(1,31,64,.08)]"
                : "px-5 py-4 shadow-[0_12px_30px_rgba(1,31,64,.08)]",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => onActiveChange(index)}
            >
              <h3
                className={cn(
                  "font-semibold text-[#005ead]",
                  titleClassName ?? "text-base md:text-xl",
                )}
              >
                {item.title}
              </h3>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="mt-4 text-[12px] leading-[18px] text-[#3a3a3a] md:text-base md:leading-[22px]">
                  {item.copy}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
