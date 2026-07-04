import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

function TechnologyAccordionRoot({
  className,
  ...props
}: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="technology-accordion"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  );
}

function TechnologyAccordionItem({
  className,
  ...props
}: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="technology-accordion-item"
      className={cn(
        "overflow-hidden rounded-xl bg-white px-5 shadow-sm transition-all duration-500 ease-in-out",
        className,
      )}
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
          "group/technology-accordion-trigger flex w-full cursor-pointer items-center justify-between gap-4 text-left outline-none transition focus-visible:ring-3 focus-visible:ring-[#005ead]/30 aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-[#011f40] group-aria-expanded/technology-accordion-trigger:rotate-180 transition-transform duration-500 ease-in-out"
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
      className="grid transition-all duration-500 ease-in-out data-closed:grid-rows-[0fr] data-closed:opacity-0 data-open:grid-rows-[1fr] data-open:opacity-100 data-ending-style:grid-rows-[0fr] data-starting-style:grid-rows-[0fr] motion-reduce:transition-none overflow-hidden"
      {...props}
      keepMounted
    >
      <div className={cn("overflow-hidden pb-1", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export {
  TechnologyAccordionContent,
  TechnologyAccordionItem,
  TechnologyAccordionRoot,
  TechnologyAccordionTrigger,
};
