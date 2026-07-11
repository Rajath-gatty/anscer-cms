import { FadeRight, FadeUp } from "../animation";
import { Kicker } from "./SectionPrimitives";
import { TechnologyAccordion } from "./TechnologyAccordion";

export function TechnologySection() {
  return (
    <section id="software" className="overflow-hidden bg-[#e7eef4] py-14">
      <div className="site-container">
        <FadeUp className="max-w-[610px]">
          <Kicker>Engineering the Future of Automation</Kicker>
          <h2 className="mt-4 text-[28px] font-bold tracking-tight md:text-[36px]">
            Our <span className="text-[#005ead]">Technology</span>
          </h2>
          <p className="mt-4 max-w-[590px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            By combining fundamental research with applied engineering, we create breakthroughs that redefine autonomous
            service.
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <TechnologyAccordion />
        </FadeUp>
      </div>
    </section>
  );
}
