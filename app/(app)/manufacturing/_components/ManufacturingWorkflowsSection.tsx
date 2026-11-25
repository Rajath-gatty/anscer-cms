"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { FadeUp } from "../../components/animation";
import { ArrowButton } from "../../components/home/SectionPrimitives";
import {
  manufacturingWorkflowMapImage,
  manufacturingWorkflows,
} from "../_data/manufacturing-data";

const id = "manufacturing-workflows";
const panelId = `${id}-panel`;

export function ManufacturingWorkflowsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const active = manufacturingWorkflows[activeIndex];

  const focusTab = (index: number) => {
    const next = (index + manufacturingWorkflows.length) % manufacturingWorkflows.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyActions: Record<string, () => void> = {
      ArrowRight: () => focusTab(activeIndex + 1),
      ArrowLeft: () => focusTab(activeIndex - 1),
      Home: () => focusTab(0),
      End: () => focusTab(manufacturingWorkflows.length - 1),
    };
    const action = keyActions[event.key];
    if (!action) return;
    event.preventDefault();
    action();
  };

  return (
    <section id={id} className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Automate the Warehouse Workflows That Matter Most to Your
              Operation
            </h2>
          </FadeUp>
          <FadeUp
            delay={0.08}
            className="space-y-4 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]"
          >
            <p>
              Every warehouse has different materials, layouts, processes and
              movement requirements. The right automation strategy therefore
              starts with identifying the workflows where autonomous material
              movement creates the greatest operational value.
            </p>
            <p>
              ANSCER supports multiple warehouse workflows, from moving cases
              and pallets to transferring materials between warehouse and
              production environments.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.12}>
          <div
            role="tablist"
            aria-label="Warehouse workflows"
            className="-mx-6 mt-8 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:mt-10 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden 3xl:gap-3"
          >
            {manufacturingWorkflows.map((workflow, index) => {
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
                  className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 font-inter text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005ead] md:text-[clamp(14px,0.7vw,24px)] 3xl:px-5 3xl:py-2.5 ${
                    isActive
                      ? "border-[#011f40] bg-[#011f40] text-white"
                      : "border-[#011f40]/15 bg-white text-[#011f40] hover:border-[#011f40]/40"
                  }`}
                >
                  {workflow.label}
                </button>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[56fr_44fr] lg:gap-12 3xl:gap-16">
            <div className="relative aspect-[665/485] overflow-hidden rounded-[10px] bg-[#f0f0f0]">
              <Image
                src={manufacturingWorkflowMapImage}
                alt={`Warehouse floor layout showing the ${active.title.toLowerCase()} workflow`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div
              role="tabpanel"
              id={panelId}
              aria-labelledby={`${id}-tab-${active.id}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={active.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-2xl font-semibold text-[#011f40] md:text-[clamp(26px,1.5vw,48px)]">
                    {active.title}
                  </h3>
                  <h4 className="mt-5 text-base font-medium text-[#011f40] md:text-[clamp(16px,0.85vw,28px)] 3xl:mt-7">
                    {active.subtitle}
                  </h4>
                  <p className="mt-2 text-sm leading-[1.6] text-brand-charcoal md:text-[clamp(14px,0.75vw,24px)]">
                    {active.copy}
                  </p>

                  <p className="mt-5 text-xs text-brand-charcoal md:text-[clamp(12px,0.6vw,20px)] 3xl:mt-7">
                    Workflow
                  </p>
                  <ol className="mt-2 flex flex-wrap items-center gap-2">
                    {active.steps.map((step, index) => (
                      <li key={step} className="flex items-center gap-2">
                        {index > 0 && (
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3.5 text-brand-charcoal/70 3xl:size-4"
                          />
                        )}
                        <span className="rounded-md bg-[#edf1f5] px-3 py-2 text-sm text-[#011f40] md:text-[clamp(13px,0.7vw,22px)] 3xl:px-4">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>

                  <p className="mt-5 text-xs text-brand-charcoal md:text-[clamp(12px,0.6vw,20px)] 3xl:mt-7">
                    Recommended robots
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {active.robots.map((robot) => (
                      <li key={robot.name}>
                        <Link
                          href={robot.href}
                          className="inline-flex rounded-md border border-[#005ead] px-3 py-2 text-[13px] font-medium text-[#005ead] transition-colors hover:bg-[#edf6ff] md:text-[clamp(13px,0.65vw,22px)] 3xl:px-4"
                        >
                          {robot.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ArrowButton
                    target={active.href}
                    aria-label={`Explore ${active.title} use case`}
                    className="mt-6 h-[40px] px-4 md:h-[46px] md:px-5 3xl:mt-8"
                  >
                    Explore use case
                  </ArrowButton>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
