import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function TechnologyAccordionRoot({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="technology-accordion"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  );
}

function TechnologyAccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="technology-accordion-item"
      className={cn("overflow-hidden rounded-xl bg-white px-5 shadow-sm transition-all duration-300", className)}
      {...props}
    />
  );
}

function TechnologyAccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="technology-accordion-trigger"
        className={cn(
          "group/technology-accordion-trigger flex w-full items-center justify-between gap-4 text-left outline-none transition focus-visible:ring-3 focus-visible:ring-[#005ead]/30 aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-[#011f40] group-aria-expanded/technology-accordion-trigger:hidden"
          strokeWidth={2}
        />
        <ChevronUpIcon
          aria-hidden="true"
          className="hidden size-5 shrink-0 text-[#011f40] group-aria-expanded/technology-accordion-trigger:block"
          strokeWidth={2}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function TechnologyAccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="technology-accordion-content"
      className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 data-closed:grid-rows-[0fr] data-closed:opacity-0 data-open:grid-rows-[1fr] data-open:opacity-100"
      {...props}
    >
      <div className={cn("overflow-hidden", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export {
  TechnologyAccordionRoot,
  TechnologyAccordionItem,
  TechnologyAccordionTrigger,
  TechnologyAccordionContent,
};
