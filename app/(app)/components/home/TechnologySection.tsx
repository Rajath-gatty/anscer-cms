import { FadeRight, FadeUp } from "../animation";
import { Kicker } from "./SectionPrimitives";
import { TechnologyAccordion } from "./TechnologyAccordion";

export function TechnologySection() {
  return (
    <section id="software" className="overflow-hidden bg-[#e7eef4] py-14">
      <div className="site-container">
        <FadeUp className="max-w-[610px]">
          {/* <Kicker>Engineering the Future of Automation</Kicker> */}
          <h2 className="mt-4 text-[28px] font-bold tracking-tight md:text-[clamp(40px,2.4vw,80px)]">
            Our <span className="text-[#005ead] font-montserrat">Technology</span>
          </h2>
          <p className="mt-4 max-w-[590px] text-sm leading-[130%] text-[#3a3a3a]    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)]">
            ANSCER connects AMR operations through real-time monitoring, analytics, system integration, alerts and notifications, giving teams greater visibility and control over autonomous material flow.
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <TechnologyAccordion />
        </FadeUp>
      </div>
    </section>
  );
}
