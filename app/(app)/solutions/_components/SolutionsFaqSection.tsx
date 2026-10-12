import { FadeUp } from "../../components/animation";
import { solutionsFaqs } from "../_data/solutions-data";
import { SolutionsFaqAccordion } from "./SolutionsFaqAccordion";

export function SolutionsFaqSection() {
  return (
    <section className="bg-white py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container grid gap-6 md:grid-cols-[0.75fr_1fr] md:gap-10">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            FAQs
          </h2>
          <p className="mt-4 max-w-[400px] text-sm leading-5 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[520px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[640px]">
            We&apos;ve heard it all — here&apos;s what people are really asking
            behind the scenes.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SolutionsFaqAccordion items={solutionsFaqs} />
        </FadeUp>
      </div>
    </section>
  );
}
