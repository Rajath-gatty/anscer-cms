import Image from "next/image";
import { FadeUp } from "../../components/animation";
import {
  operationFitImage,
  operationFitPillars,
} from "../_data/warehouse-data";

export function OperationFitSection() {
  return (
    <section className="border-b border-[#2f9bea] bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Build Warehouse Automation Around the Way Your Operation Works
            </h2>
          </FadeUp>
          <FadeUp
            delay={0.08}
            className="space-y-4 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]"
          >
            <p>
              Warehouse automation should fit the operational environment rather
              than forcing businesses to completely redesign the way they work.
            </p>
            <p>
              ANSCER combines robotics, software and workflow intelligence to
              create automation around specific material movement requirements.
            </p>
          </FadeUp>
        </div>

        <FadeUp className="mt-8 md:mt-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#dce7ef] sm:aspect-[16/7] lg:aspect-[27/8]">
            <Image
              src={operationFitImage}
              alt="ANSCER AGV 100 automated guided vehicle on a warehouse floor"
              fill
              quality={95}
              sizes="100vw"
              className="object-cover object-[60%_78%]"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-4 3xl:mt-6">
          <ul className="grid gap-px overflow-hidden rounded-[12px] border border-[#011f40]/10 bg-[#011f40]/10 sm:grid-cols-2 lg:grid-cols-3">
            {operationFitPillars.map((pillar) => (
              <li
                key={pillar.title}
                className="bg-white p-6 md:p-7 3xl:p-10"
              >
                <span
                  aria-hidden="true"
                  className="block h-0.5 w-5 bg-[#005ead] 3xl:w-7"
                />
                <h3 className="mt-4 text-base font-medium text-[#011f40] md:text-[clamp(16px,0.85vw,28px)] 3xl:mt-5">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-[260px] text-[13px] leading-5 text-brand-charcoal md:text-[clamp(13px,0.7vw,22px)] md:leading-[155%] 3xl:max-w-[400px]">
                  {pillar.copy}
                </p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
