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
      className="flex flex-col gap-3"
    >
      {items.map((item, index) => {
        const itemValue = `faq-${index}`;
        const isOpen = activeValue === itemValue;

        return (
          <AccordionItem
            key={item.question}
            value={itemValue}
            className={cn(
              "overflow-hidden rounded-xl border-0 transition-colors duration-300 [&:not(:last-child)]:border-b-0",
              isOpen ? "bg-[#f1f1f1]" : "bg-transparent",
            )}
          >
            <AccordionTrigger className="min-h-[68px] items-center gap-5 px-5 py-5 text-left hover:no-underline focus-visible:ring-[#005ead]/30 **:data-[slot=accordion-trigger-icon]:hidden">
              <span className="text-sm font-bold leading-5 text-[#011f40]">{item.question}</span>
              <span className="ml-auto grid size-4 shrink-0 place-items-center text-[#011f40]" aria-hidden="true">
                {isOpen ? <Minus className="size-4" strokeWidth={2} /> : <Plus className="size-4" strokeWidth={2} />}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <p className="max-w-[660px] text-sm leading-6 text-[#4b5563]">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
