import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ScrollReveal } from "../../components/home/ScrollReveal";
import { fleetHighlights } from "../_data/software-solutions-data";

export function FleetManagementSection() {
  return (
    <section
      id="fleet-management"
      className="scroll-mt-32 bg-[#fafafa] py-10 md:py-15"
    >
      <div className="site-container">
        <ScrollReveal>
          <p className="mb-2.5 flex items-baseline text-[32px] font-medium text-[#005ead]">
            <span className="text-xl md:text-[28px]">01 </span>
            <span className="text-[12px] md:text-[16px] text-[#005ead]/50">
              / 04
            </span>
          </p>
          <h2 className="mt-4 max-w-[648px] text-[28px] font-bold leading-tight md:text-4xl">
            Fleet Management System
          </h2>
          <p className="mt-4 max-w-[648px] text-xl leading-6 text-[#363636]">
            Centralized intelligence for monitoring, controlling, and optimizing
            every robot operation from a single platform.
          </p>
        </ScrollReveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-start">
          <FadeUp className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-[#dce7ef] shadow-[0_18px_50px_rgba(1,31,64,.08)]">
            <Image
              src={`${imagePath}Frame-1321317564.png`}
              alt="ANSCER fleet management system in operation"
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </FadeUp>
          <FadeUp className="pt-1 lg:pt-2" delay={0.08}>
            <p className="max-w-170 text-sm leading-6 text-brand-charcoal md:text-base md:leading-6">
              The ANSCER Fleet Management System (FMS) is the intelligent
              orchestration platform that coordinates, monitors, and manages the
              operations of multiple autonomous mobile robots (AMRs) within a
              facility. Acting as the central control layer for robotic
              operations, the ANSCER FMS enables seamless automation of material
              movement workflows across manufacturing plants, warehouses, and
              intralogistics environments.
            </p>
            <div className="mt-11 grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
              {fleetHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="flex w-full flex-col gap-3"
                  >
                    <span className="flex size-11 items-center justify-center rounded-md bg-[#011f40]/5 text-[#011f40]">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.8}
                      />
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-[#011f40] md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-brand-charcoal md:text-base">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
