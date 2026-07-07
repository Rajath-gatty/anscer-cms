import { Code, ExternalLink, Layers, Network, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { FadeLeft, FadeRight } from "../../components/animation";
import { imagePath } from "../../components/home/assets";

export function BusinessBenefitsSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="site-container">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#005ead] md:text-[16px]">
          BENEFITS
        </p>
        <h2 className="mt-3 max-w-[648px] text-[30px] font-bold leading-tight text-[#011f40] md:text-4xl">
          Turning Industry Workflows Into Autonomous Operations
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <FadeRight className="order-2 flex flex-col overflow-hidden border border-[#005ead]/20 lg:order-1">
            <div className="flex flex-col border-b border-[#005ead]/20 lg:flex-row">
              <div className="group flex flex-1 flex-col gap-2.5 border-b border-[#005ead]/20 p-6 lg:border-b-0 lg:border-r">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
                  <Layers
                    className="size-5 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Operational Abstraction
                </h3>
                <p className="text-sm leading-[130%] text-[#000000]">
                  Separates business logic from robot control logic
                </p>
              </div>
              <div className="group flex flex-1 flex-col gap-2.5 p-6">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
                  <ExternalLink
                    className="size-5 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Scalability
                </h3>
                <p className="text-sm leading-[130%] text-[#000000]">
                  Supports multi-industry deployments
                </p>
              </div>
            </div>

            <div className="flex flex-col border-b border-[#005ead]/20 lg:flex-row">
              <div className="group flex flex-1 flex-col gap-2.5 border-b border-[#005ead]/20 p-6 lg:border-b-0 lg:border-r">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
                  <Network
                    className="size-5 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Flexibility
                </h3>
                <p className="text-sm leading-[130%] text-[#000000]">
                  Multiple implementation approaches (prebuilt, low-code,
                  integrated)
                </p>
              </div>
              <div className="group flex flex-1 flex-col gap-2.5 p-6">
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
                  <Code
                    className="size-5 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  Reduced Engineering Effort
                </h3>
                <p className="text-sm  leading-[130%] text-[#000000]">
                  Minimizes need for custom coding
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-6 p-6 lg:flex-row lg:items-center">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-brand-navy/5 text-[#011f40] transition-all duration-300 group-hover:bg-[#005EAD]">
                <UserCircle2
                  className="size-5 transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.7}
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base font-semibold text-[#000000]">
                  User-Centric Design
                </h3>
                <p className="text-sm  leading-[130%] text-[#000000]">
                  Simplifies interaction for non-technical operators
                </p>
              </div>
            </div>
          </FadeRight>

          <FadeLeft
            className="relative order-1 min-h-[300px] overflow-hidden rounded-xl bg-[#dce7ef] sm:min-h-[440px] lg:order-2"
            delay={0.08}
          >
            <Image
              src={`${imagePath}1369b1d9491c23604e01cf3a0ed8ab6fd984e0e3.jpg`}
              alt=""
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}
