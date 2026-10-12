import Image from "next/image";
import { FadeUp } from "../../components/animation";
import {
  intelligentAutomationFeatures,
  intelligentAutomationImage,
} from "../_data/solutions-data";

export function IntelligentAutomationSection() {
  return (
    <section className="bg-[#edf1f5] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            Intelligent Automation.
            <br />
            Real Result
          </h2>
          <p className="mt-4 max-w-[400px] text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[560px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[680px]">
            From warehouses to manufacturing, our AMRs automate material
            movement, improve efficiency, and create safer operations.
          </p>

          <ul className="mt-8 space-y-7 3xl:mt-10 3xl:space-y-9">
            {intelligentAutomationFeatures.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <Image
                  src={feature.icon}
                  alt=""
                  width={42}
                  height={42}
                  unoptimized
                  className="-mt-2 size-9 shrink-0 md:size-[42px] 3xl:size-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#011f40] md:text-[clamp(18px,0.95vw,32px)]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-[340px] text-sm leading-[1.5] text-brand-charcoal md:text-[clamp(14px,0.75vw,24px)] 3xl:max-w-[480px]">
                    {feature.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="relative aspect-[535/441] overflow-hidden rounded-[10px] bg-[#dce7ef]">
            <Image
              src={intelligentAutomationImage}
              alt="ANSCER PSR 2000 robot lifting stacked wooden crates"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
