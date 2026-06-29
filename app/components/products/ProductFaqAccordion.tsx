"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ProductFaq = {
  question: string;
  answer: string;
};

export function ProductFaqAccordion({ items }: { items: ProductFaq[] }) {
  const [value, setValue] = useState<string[]>(["faq-0"]);
  const activeValue = value[0] ?? "";

  return (
    <Accordion
      value={value}
      onValueChange={(nextValue) => {
        setValue(Array.isArray(nextValue) ? nextValue.slice(0, 1) : []);
      }}
      className="w-full flex flex-col gap-4"
    >
      {items.map((item, index) => {
        const itemValue = `faq-${index}`;
        const isOpen = activeValue === itemValue;

        return (
          <AccordionItem
            key={item.question}
            value={itemValue}
            className={cn(
              "overflow-hidden border-0 border-transparent transition-colors duration-300 [&:not(:last-child)]:border-b-0",
              isOpen ? "rounded-xl bg-[#f1f1f1]" : "bg-transparent",
            )}
          >
            <AccordionTrigger className="items-center gap-4 rounded-xl px-3 py-3 text-left hover:no-underline focus-visible:ring-[#005ead]/25 md:gap-4 md:px-6 md:py-3 **:data-[slot=accordion-trigger-icon]:hidden">
              <span className="text-sm font-semibold leading-5 text-[#3a3a3a] md:text-[18px] md:leading-6">
                {item.question}
              </span>
              <span
                className="ml-auto grid size-6 shrink-0 place-items-center text-[#3a3a3a]"
                aria-hidden="true"
              >
                {isOpen ? (
                  <Minus className="size-5" strokeWidth={2} />
                ) : (
                  <Plus className="size-5" strokeWidth={2} />
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-3 pb-3 md:px-6">
              <p className="max-w-[760px] pt-2.5 text-[12px] leading-[18px] text-[#222228] md:text-base md:leading-6">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
