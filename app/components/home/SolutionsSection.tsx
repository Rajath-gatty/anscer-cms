import { Kicker } from "./SectionPrimitives";
import { SolutionsStickyStack } from "./SolutionsStickyStack";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-[#fafafa] py-14 md:py-20 lg:pb-0">
      <div className="site-container">
        <div className="mx-auto max-w-3xl pb-8 pt-1 text-center">
          <Kicker>Solutions That Solve, Everywhere.</Kicker>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            Solutions That <span className="text-[#005ead]">Deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            From tugging and lifting to robotic arm integration and conveyor automation, our AMRs are designed to
            streamline operations, enhance safety, and maximize efficiency.
          </p>
        </div>

        <SolutionsStickyStack />
      </div>
    </section>
  );
}
