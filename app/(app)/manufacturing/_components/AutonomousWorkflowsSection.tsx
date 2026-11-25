import Image from "next/image";
import { FadeUp } from "../../components/animation";
import {
  autonomousWorkflowsImage,
  facilityFeatures,
  workflowCapabilities,
} from "../_data/manufacturing-data";
import { ManufacturingAccordion } from "./ManufacturingAccordion";

export function AutonomousWorkflowsSection() {
  return (
    <section className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Turn Repetitive Warehouse Movement Into Autonomous Workflows
            </h2>
          </FadeUp>
          <FadeUp
            delay={0.08}
            className="space-y-4 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]"
          >
            <p>
              Effective warehouse automation is about more than deploying
              robots. The robots need to become part of the operational
              workflow — understanding what needs to move, where it needs to go
              and how that movement fits into the wider process.
            </p>
            <p>
              ANSCER combines robotics, fleet intelligence, workflow
              orchestration and system integration to transform material
              movement requirements into coordinated autonomous workflows.
            </p>
          </FadeUp>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-2 lg:gap-6 3xl:gap-8">
          <FadeUp className="h-full">
            <div className="relative aspect-[3/2] h-full overflow-hidden rounded-[10px] bg-[#dce7ef] lg:aspect-auto lg:min-h-[400px]">
              <Image
                src={autonomousWorkflowsImage}
                alt="Hands holding a tablet showing ANSCER robot utilization analytics in a warehouse"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ManufacturingAccordion
              items={workflowCapabilities}
              idPrefix="workflow-capability"
            />
          </FadeUp>
        </div>

        <FadeUp className="mt-6 rounded-[14px] border border-[#011f40]/10 bg-white p-6 md:p-8 3xl:mt-8 3xl:p-10">
          <h3 className="text-xl font-medium text-[#011f40] md:text-[clamp(20px,1.05vw,34px)]">
            How it runs in your facility
          </h3>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {facilityFeatures.map((feature) => (
              <li
                key={feature.title}
                className="lg:border-l lg:border-[#011f40]/15 lg:px-[clamp(18px,1.2vw,32px)] lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <h4 className="text-base font-medium text-[#005ead] md:text-[clamp(16px,0.85vw,28px)]">
                  {feature.title}
                </h4>
                <p className="mt-3 text-[13px] leading-5 text-brand-charcoal md:text-[clamp(13px,0.7vw,22px)] md:leading-[155%]">
                  {feature.copy}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-[8px] bg-[#edf6ff] px-4 py-4 text-[13px] leading-5 text-brand-charcoal md:px-[18px] md:text-[clamp(13px,0.75vw,24px)] md:leading-[150%] 3xl:px-7 3xl:py-5">
            <strong className="mr-2 font-semibold text-[#011f40]">
              Deployment without disruption
            </strong>
            Robots are commissioned alongside live operations, so the warehouse
            keeps running while automation goes in.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
