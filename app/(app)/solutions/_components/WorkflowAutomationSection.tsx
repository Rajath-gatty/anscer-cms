import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { workflowSteps } from "../_data/solutions-data";

export function WorkflowAutomationSection() {
  return (
    <section className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            From Workflow To Automation
          </h2>
        </FadeUp>

        <ol className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 3xl:gap-x-8">
          {workflowSteps.map((step, index) => (
            <li key={step.title}>
              <FadeUp delay={index * 0.1} className="group">
                <div className="relative aspect-[23/24] overflow-hidden rounded-[10px] bg-[#dce7ef]">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Image
                    src={step.icon}
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                    className="size-5 3xl:size-6"
                  />
                  <span className="text-lg font-semibold leading-none text-[#011f40] 3xl:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-1 size-3.5 shrink-0 rounded-full bg-[#c9dbf0] transition-colors duration-300 group-hover:bg-[#005ead]"
                  />
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 origin-left bg-[linear-gradient(90deg,#005ead_0%,#7fb1dd_70%,rgba(0,94,173,0)_100%)] transition-transform duration-500 group-hover:scale-x-105"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#011f40] md:text-[clamp(20px,1.05vw,34px)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-charcoal capitalize md:text-[clamp(14px,0.75vw,24px)] md:leading-[1.6] 3xl:text-[clamp(18px,0.85vw,26px)]">
                  {step.copy}
                </p>
              </FadeUp>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
