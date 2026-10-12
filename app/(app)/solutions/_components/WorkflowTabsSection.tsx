"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { FadeUp } from "../../components/animation";
import { cn } from "@/lib/utils";
import { ArrowButton } from "../../components/home/SectionPrimitives";
import {
  workflowMapImage,
  type MapMarker,
  type Workflow,
} from "../_data/solutions-data";

type WorkflowTabsSectionProps = {
  id: string;
  title: string;
  workflows: Workflow[];
  markers: MapMarker[];
  className?: string;
};

export function WorkflowTabsSection({
  id,
  title,
  workflows,
  markers,
  className,
}: WorkflowTabsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const active = workflows[activeIndex];
  const panelId = `${id}-panel`;

  const focusTab = (index: number) => {
    const next = (index + workflows.length) % workflows.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyActions: Record<string, () => void> = {
      ArrowRight: () => focusTab(activeIndex + 1),
      ArrowLeft: () => focusTab(activeIndex - 1),
      Home: () => focusTab(0),
      End: () => focusTab(workflows.length - 1),
    };
    const action = keyActions[event.key];
    if (!action) return;
    event.preventDefault();
    action();
  };

  return (
    <section
      id={id}
      className={cn("bg-[#edf1f5] py-12 md:py-16 3xl:py-20 4xl:py-28", className)}
    >
      <div className="site-container">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            {title}
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div
            role="tablist"
            aria-label={title}
            className="-mx-6 mt-5 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {workflows.map((workflow, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={workflow.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${workflow.id}`}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown}
                  className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-3.5 py-1.5 font-inter text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005ead] md:text-[clamp(14px,0.7vw,24px)] 3xl:px-5 3xl:py-2 ${
                    isActive
                      ? "border-[#005ead] bg-[#dbe9f6] text-[#005ead]"
                      : "border-[#011f40]/30 text-[#011f40] hover:border-[#005ead]/60 hover:text-[#005ead]"
                  }`}
                >
                  {workflow.label}
                </button>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="mt-6 grid gap-4 lg:grid-cols-[47fr_53fr] 3xl:gap-6">
            <div
              role="tabpanel"
              id={panelId}
              aria-labelledby={`${id}-tab-${active.id}`}
              className="overflow-hidden rounded-[10px] border border-[#005ead] bg-[#fafafa] p-5 md:p-6 3xl:p-8"
            >
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={active.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-xl font-semibold text-[#011f40] md:text-[clamp(20px,1.05vw,34px)]">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.5] text-brand-charcoal md:text-[clamp(14px,0.75vw,24px)]">
                    {active.copy}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-brand-charcoal md:text-[clamp(14px,0.75vw,24px)]">
                      Robots used:
                    </span>
                    {active.robots.map((robot) => (
                      <span
                        key={robot.name}
                        className="inline-flex items-center gap-2 rounded-md bg-[#e6f0f9] px-2.5 py-1 text-sm text-[#011f40] md:text-[clamp(14px,0.75vw,24px)]"
                      >
                        <span className="relative h-4 w-6 overflow-hidden 3xl:h-5 3xl:w-8">
                          <Image
                            src={robot.image}
                            alt=""
                            fill
                            sizes="64px"
                            className="scale-[1.6] object-contain"
                          />
                        </span>
                        {robot.name}
                      </span>
                    ))}
                  </div>

                  <ol className="mt-5 space-y-3 3xl:space-y-4">
                    {active.steps.map((step, index) => (
                      <li key={step.title} className="flex gap-2.5">
                        <span className="mt-0.5 flex h-5 min-w-7 shrink-0 items-center justify-center rounded-full bg-[#e3e8ee] font-inter text-[11px] font-medium text-[#011f40] 3xl:h-6 3xl:min-w-8 3xl:text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-[15px] font-semibold leading-snug text-[#011f40] md:text-[clamp(15px,0.8vw,26px)]">
                            {step.title}
                          </h4>
                          <p className="mt-0.5 text-[13px] leading-[1.45] text-brand-charcoal/85 md:text-[clamp(13px,0.7vw,22px)]">
                            {step.copy}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <ArrowButton
                    target={active.href}
                    aria-label={`Explore ${active.title}`}
                    className="mt-6 h-[40px] px-4 text-[12px] md:text-[13px]"
                  >
                    Explore more
                  </ArrowButton>
                </m.div>
              </AnimatePresence>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-[10px] border border-[#011f40]/10 bg-white lg:aspect-auto">
              {/* Square stage that covers the panel so marker %s stay aligned with the map */}
              <div className="absolute left-1/2 top-1/2 aspect-square min-h-full min-w-full -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={workflowMapImage}
                  alt={`Facility floor layout showing the ${active.title.toLowerCase()} workflow`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                {markers.map((marker, index) => (
                  <span
                    key={index}
                    aria-hidden="true"
                    className="absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3d8a63] font-inter text-xs font-semibold text-white shadow-[0_0_0_3px_rgba(61,138,99,.18)] 3xl:size-8 3xl:text-sm"
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
