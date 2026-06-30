"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export type ProductAccordionItem = {
  title: string;
  copy: string;
  imageUrl?: string;
};

export function ProductAccordionRows({
  items,
  activeIndex,
  onActiveChange,
  surface = "white",
  titleClassName,
  imageUrl,
  type = "advantages",
}: {
  items: ProductAccordionItem[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
  surface?: "white" | "muted";
  titleClassName?: string;
  imageUrl?: string;
  type?: "advantages" | "applications";
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
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
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
              <div className="min-h-0 overflow-hidden rounded-md">
                {type === "applications" && isOpen && (
                  <article className="relative aspect-[1.43] overflow-hidden rounded-[12px] block md:hidden bg-[#011f40] text-white mt-3">
                    <Image
                      key={imageUrl}
                      src={`${imageUrl}`}
                      alt={item?.title ?? "Application"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover opacity-85 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(360deg,rgba(0,0,0,.86),rgba(255,255,255,0)_60%)]" />
                    <h3 className="absolute bottom-6 left-6 text-base font-semibold md:text-2xl">
                      {item?.copy}
                    </h3>
                  </article>
                )}
                <p
                  className={cn(
                    "mt-4 text-[12px] leading-[18px] text-[#3a3a3a] md:text-base md:leading-[22px]",
                    type !== "applications" && "mb-3",
                  )}
                >
                  {item.copy}
                </p>
                {type !== "applications" && imageUrl && isOpen && (
                  <Image
                    key={item?.title}
                    src={imageUrl}
                    alt={`${item.title} advantage`}
                    width={700}
                    height={400}
                    className="object-cover transition-opacity w-full h-full duration-300 block md:hidden rounded-md"
                  />
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
