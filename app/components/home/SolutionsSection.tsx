"use client";

import { useEffect, useMemo, useState } from "react";
import { Kicker } from "./SectionPrimitives";
import { SolutionsStickyStack } from "./SolutionsStickyStack";

export function SolutionsSection() {
  const stats = useMemo(
    () =>
      [
        {
          value: "85+",
          label: "Projects Delivered",
          copy: "Successfully deployed automation solutions across 4+ continents, helping customers in diverse industries achieve operational excellence.",
        },
        {
          value: "800,000+",
          label: "Autonomous Trips Completed",
          copy: "Proven reliability across real-world manufacturing and warehouse environments.",
        },
        {
          value: "100+",
          label: "Robots Deployed Worldwide",
          copy: "Delivering reliable automation across multiple industries and geographies",
        },
      ] as const,
    [],
  );
  const [displayStats, setDisplayStats] = useState(
    stats.map((stat) => ({ ...stat, value: "0" })),
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (hasAnimated || !sectionRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(sectionRef);

    return () => observer.disconnect();
  }, [hasAnimated, sectionRef]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1200;
    const intervalMs = 50;
    const steps = duration / intervalMs;

    const timers = stats.map((stat, index) => {
      const targetValue = Number.parseInt(stat.value.replace(/[^\d]/g, ""), 10);
      let step = 0;

      return window.setInterval(() => {
        step += 1;
        const progress = Math.min(step / steps, 1);
        const currentValue = Math.round(targetValue * progress);

        setDisplayStats((current) =>
          current.map((item, itemIndex) => {
            if (itemIndex !== index) return item;

            return {
              ...item,
              value: `${new Intl.NumberFormat("en-US").format(currentValue)}`,
            };
          }),
        );

        if (progress >= 1) {
          window.clearInterval(timers[index]);
        }
      }, intervalMs);
    });

    return () => {
      timers.forEach((timer) => window.clearInterval(timer));
    };
  }, [hasAnimated, stats]);

  return (
    <section id="solutions" ref={setSectionRef} className="bg-[#fafafa] ">
      <div className="bg-[#BDE1FF2E]">
        <div className="md:flex grid items-center justify-between gap-6 md:gap-8 py-12 site-container ">
          <div className="pt-1 text-center md:text-left">
            <Kicker>Solutions That Solve, Everywhere.</Kicker>
            <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
              Solutions That <span className="text-[#005ead]">Deliver</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-center text-sm leading-5 text-[#3a3a3a] md:mx-0 md:text-left md:text-base md:leading-[22px]">
              From tugging and lifting to robotic arm integration and conveyor
              automation, our AMRs are designed to streamline operations,
              enhance safety, and maximize efficiency.
            </p>
          </div>
          <div className="">
            <div className="md:divide-x flex flex-wrap justify-center items-center  md:justify-none sm:flex-nowrap md:items-center">
              {displayStats.length > 0 &&
                displayStats.map((stat, index) => (
                  <div key={index} className="mb-4 px-4 text-center">
                    <h3 className="text-[18px] font-extrabold leading-none text-[#011f40] md:text-[30px] flex items-center justify-center gap-1">
                      <span className="text-[#005ead]">{stat.value}</span>
                      <span className="text-[#005ead] md:mb-2 mb-1">
                        {stats[index]?.value.endsWith("+") ? "+" : ""}
                      </span>
                    </h3>
                    <p className="mt-2 text-[12px] font-medium text-[#011f40] md:mt-4 md:text-[20px]">
                      {stat.label}
                    </p>
                    {/* <p className="mx-auto mt-2 max-w-65 text-[9px] leading-[1.45] text-[#3a3a3a] md:mt-3 md:max-w-85 md:text-[13px] md:leading-[1.6]">
                    {stat.copy}
                  </p> */}
                  </div>
                ))}
            </div>
            {/* <StatsSlider /> */}
          </div>
        </div>
      </div>
      <div className="site-container py-14 md:py-20 lg:pb-0">
        <SolutionsStickyStack />
      </div>
    </section>
  );
}
