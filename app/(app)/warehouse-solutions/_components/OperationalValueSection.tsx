import { FadeUp } from "../../components/animation";
import { OperationalValueShowcase } from "./OperationalValueShowcase";

export function OperationalValueSection() {
  return (
    <section className="bg-[#edf1f5] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Turn Warehouse Automation Into Measurable Operational Value
            </h2>
          </FadeUp>
          <FadeUp
            delay={0.08}
            className="space-y-4 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]"
          >
            <p>
              The value of automation is not simply in moving materials
              autonomously. It is in improving how the warehouse operates.
            </p>
            <p>
              ANSCER&apos;s warehouse automation solutions create more efficient
              material flows and reduce dependence on repetitive manual
              transportation.
            </p>
          </FadeUp>
        </div>

        <OperationalValueShowcase />
      </div>
    </section>
  );
}
