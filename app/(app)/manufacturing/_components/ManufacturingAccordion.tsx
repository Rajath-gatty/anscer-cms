"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  copy: string;
};

type ManufacturingAccordionProps = {
  items: AccordionItem[];
  idPrefix: string;
  /** Controlled open index. Omit to let the accordion manage its own state. */
  activeIndex?: number | null;
  onActiveIndexChange?: (index: number | null) => void;
  cardClassName?: string;
};

export function ManufacturingAccordion({
  items,
  idPrefix,
  activeIndex: controlledIndex,
  onActiveIndexChange,
  cardClassName,
}: ManufacturingAccordionProps) {
  const [internalIndex, setInternalIndex] = useState<number | null>(0);
  const activeIndex =
    controlledIndex === undefined ? internalIndex : controlledIndex;

  const toggle = (index: number) => {
    const next = activeIndex === index ? null : index;
    setInternalIndex(next);
    onActiveIndexChange?.(next);
  };

  return (
    <div className="flex w-full flex-col gap-3 3xl:gap-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;

        return (
          <article
            key={item.title}
            className={cn("rounded-[10px] bg-[#edf1f5]", cardClassName)}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-[10px] px-5 py-4 text-left outline-none focus-visible:ring-3 focus-visible:ring-[#005ead]/25 md:py-[18px] 3xl:px-7 3xl:py-6"
              >
                <span className="text-base font-semibold leading-[1.3] text-[#011f40] md:text-[clamp(17px,0.9vw,30px)]">
                  {item.title}
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  strokeWidth={2}
                  className={cn(
                    "size-5 shrink-0 text-[#011f40] transition-transform duration-300 3xl:size-6",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-[13px] leading-5 text-brand-charcoal md:pb-[18px] md:text-[clamp(14px,0.75vw,24px)] md:leading-[150%] 3xl:px-7 3xl:pb-6 3xl:text-[clamp(18px,0.85vw,26px)]">
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
