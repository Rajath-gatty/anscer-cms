import { useMemo } from "react";
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
  return (
    <section id="solutions" className="bg-[#fafafa] py-14 md:py-20 lg:pb-0">
      <div className="site-container">
        <div className="flex  items-center justify-between gap-6 md:gap-8">
          <div className="pb-8 pt-1 text-left">
            <Kicker>Solutions That Solve, Everywhere.</Kicker>
            <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
              Solutions That <span className="text-[#005ead]">Deliver</span>
            </h2>
            <p className="text-left mt-4 max-w-[640px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
              From tugging and lifting to robotic arm integration and conveyor
              automation, our AMRs are designed to streamline operations,
              enhance safety, and maximize efficiency.
            </p>
          </div>
          <div className="xl:border-l xl:pl-4">
            <div className="divide-x">
              {stats.length > 0 &&
                stats.map((stat, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-[20px] font-extrabold text-[#011f40] md:text-[28px]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] font-extrabold text-[#011f40] md:mt-4 md:text-[14px]">
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

        <SolutionsStickyStack />
      </div>
    </section>
  );
}
