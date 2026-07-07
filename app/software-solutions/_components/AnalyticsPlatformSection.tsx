import Image from "next/image";
import { FadeLeft, FadeRight } from "../../components/animation";
import { imagePath } from "../../components/home/assets";

export function AnalyticsPlatformSection() {
  return (
    <section
      id="analytics-platform"
      className="scroll-mt-32 bg-[#fafafa] py-10 md:py-14"
    >
      <div className="site-container">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <FadeRight>
            <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
              <span className="text-xl md:text-[28px]">04 </span>
              <span className="text-sm text-[#005ead]/50 md:text-[16px]">
                / 04
              </span>
            </p>
            <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#011f40] md:text-4xl">
              Analytics Platform
            </h2>
            <p className="mt-2.5 text-base leading-normal text-brand-charcoal md:text-[20px]">
              Turn Operational Data Into Actionable Intelligence
            </p>

            <div className="relative mt-6 aspect-[1288/816] w-full overflow-hidden rounded-[12px] bg-[#dce7ef] lg:hidden">
              <Image
                src={`${imagePath}Frame-427322850.png`}
                alt="ANSCER analytics platform in use"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <p className="mt-6 text-[14px] leading-[150%] text-brand-charcoal lg:mt-8 lg:text-[16px]">
              The ANSCER Analytics Platform provides comprehensive operational
              insights into robot fleets, missions, and facility workflows.
              Designed to support data-driven decision-making, the Analytics
              layer transforms real-time operational data into actionable
              intelligence that helps optimize robot performance, improve
              workflow efficiency, and enhance overall facility productivity.
            </p>
            <p className="mt-5 text-[14px] leading-[150%] text-brand-charcoal lg:text-[16px]">
              By continuously collecting and analyzing data from robot
              operations, mission requests, traffic flow, and system events, the
              platform enables users to monitor key performance indicators,
              identify operational bottlenecks, and proactively improve
              automation performance across facilities.
            </p>
          </FadeRight>

          <FadeLeft
            className="relative hidden aspect-[1288/816] w-full overflow-hidden rounded-[12px] bg-[#dce7ef] lg:block"
            delay={0.08}
          >
            <Image
              src={`${imagePath}Frame-427322850.png`}
              alt="ANSCER analytics platform in use"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}
