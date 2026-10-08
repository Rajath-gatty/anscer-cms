"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Faq = {
  question: string;
  answer: string;
};

export function SolutionsFaqAccordion({ items }: { items: Faq[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `solutions-faq-panel-${index}`;
        const buttonId = `solutions-faq-button-${index}`;

        return (
          <article key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setActiveIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-md py-5 text-left outline-none focus-visible:ring-3 focus-visible:ring-[#005ead]/25 md:py-6 3xl:py-8"
              >
                <span
                  className={cn(
                    "text-sm font-medium leading-5 text-brand-charcoal md:text-[clamp(16px,0.85vw,28px)] md:leading-[140%] 3xl:text-[clamp(20px,0.95vw,30px)]",
                    !isOpen && "md:line-clamp-1",
                  )}
                >
                  {item.question}
                </span>
                <PlusIcon
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className={cn(
                    "size-5 shrink-0 text-brand-charcoal transition-transform duration-300 3xl:size-6",
                    isOpen && "rotate-45",
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
                <p className="max-w-[90%] pb-5 text-[13px] leading-5 text-brand-charcoal/80 md:pb-6 md:text-[clamp(15px,0.8vw,26px)] md:leading-[150%] 3xl:text-[clamp(18px,0.85vw,26px)]">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
