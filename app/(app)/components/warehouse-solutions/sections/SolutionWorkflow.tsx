import Image from "next/image";
import { FadeUp } from "../../animation";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";
import { SectionHeading } from "./SectionHeading";

const bodyText =
  "text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,1.25vw,30px)] md:leading-[1.5]";

export function SolutionWorkflow({ data }: { data: WarehouseSolutionData }) {
  const { solution } = data;

  return (
    <section className="bg-white py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <SectionHeading
          kicker={solution.kicker}
          title={solution.title}
          intro={solution.intro}
        />

        <FadeUp>
          <h3 className="mt-8 text-xl font-semibold text-brand-navy md:mt-10 md:text-[clamp(22px,1.65vw,40px)]">
            {solution.workflowTitle}
          </h3>
        </FadeUp>

        <ol className="mt-6 grid gap-5 sm:grid-cols-2 md:mt-8 lg:grid-cols-4 3xl:gap-7">
          {solution.steps.map((step, index) => (
            <li key={step.title}>
              <FadeUp delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#e3eef9]">
                  <div className="relative aspect-[16/10] bg-[#dce7ef]">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 3xl:p-7">
                    <span
                      aria-hidden="true"
                      className="flex size-[30px] items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white 3xl:size-10 3xl:text-base"
                    >
                      {index + 1}
                    </span>
                    <h4 className="mt-4 text-lg font-semibold text-brand-navy md:text-[clamp(20px,1.4vw,34px)]">
                      <span className="sr-only">Step {index + 1}: </span>
                      {step.title}
                    </h4>
                    <p className="mt-3 text-[13px] leading-[1.7] text-brand-charcoal md:text-[clamp(14px,0.75vw,24px)]">
                      {step.copy}
                    </p>
                  </div>
                </article>
              </FadeUp>
            </li>
          ))}
        </ol>

        <FadeUp>
          <p className={`mt-8 md:mt-10 ${bodyText}`}>{solution.closing}</p>
        </FadeUp>
      </div>
    </section>
  );
}
