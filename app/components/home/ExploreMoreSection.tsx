import { BarChart3, Globe2, Monitor, Radar, Wrench } from "lucide-react";
import Image from "next/image";
import { FadeLeft, FadeRight, FadeUp } from "../animation";
import { imagePath } from "./assets";

const supportItems = [
  { icon: Wrench, label: "On-site support capabilities" },
  { icon: Radar, label: "Remote diagnostics" },
  { icon: Monitor, label: "Training" },
  { icon: BarChart3, label: "Scalable" },
  {
    icon: Globe2,
    label:
      "After-sales infrastructure across India and global partner regions.",
  },
];

export function ExploreMoreSection() {
  return (
    <section className="overflow-hidden bg-[#efefef] py-14">
      <div className="site-container">
        <FadeUp>
          <p className="text-xs font-medium uppercase text-[#005ead] md:text-base">
            Your Gateway to All Things ANSCER
          </p>
          <h2 className="mt-8 text-[28px] font-bold tracking-tight md:text-[36px]">
            Explore <span className="text-[#005ead]">More</span>
          </h2>
          <p className="mt-6 max-w-[640px] text-sm leading-5 text-[#3a3a3a] md:text-base md:leading-[22px]">
            All the Answers You Need About ANSCER Robotics&mdash;Right at Your
            Fingertips. From how our autonomous robots transform industries to
            what makes our tech stand out&mdash;your journey into the future of
            smart automation starts here.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.05fr_.5fr_1.05fr]">
          <FadeUp className="grid gap-6" delay={0.08}>
            <article className="rounded-xl bg-white p-5">
              <Image
                src={`${imagePath}diamond-plus.svg`}
                alt=""
                width={44}
                height={44}
                className="size-11"
              />
              <h3 className="mt-5 text-[20px] font-semibold text-[#005ead]">
                Globally Safety-Compliant Robots
              </h3>
              <p className="mt-5 max-w-[560px] text-sm leading-5 text-[#1e1e1e] md:text-base md:leading-[22px]">
                Designed to meet international safety standards for industrial
                deployment across manufacturing and warehousing environments.
              </p>
            </article>

            <article className="group relative min-h-[222px] overflow-hidden rounded-xl bg-[#011f40] p-5 text-white">
              <Image
                src={`${imagePath}explore-more-img-1.png`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover opacity-65 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.18)_52%,rgba(0,0,0,.68))]" />
              <div className="relative">
                <h3 className="text-[20px] font-semibold leading-[30px]">
                  Multi-Brand Interoperability
                </h3>
                <p className="mt-4 max-w-[560px] text-sm leading-5 text-white md:text-base md:leading-6">
                  Ability to integrate and operate with diverse automation
                  ecosystems, third-party robots, ERP, WMS, conveyors, doors,
                  and factory systems.
                </p>
              </div>
            </article>
          </FadeUp>

          <FadeUp className="rounded-xl bg-white p-5" delay={0.14}>
            <Image
              src={`${imagePath}lightbulb.svg`}
              alt=""
              width={44}
              height={44}
              className="size-11"
            />
            <h3 className="mt-10 text-[20px] font-semibold leading-tight text-[#005ead]">
              Lower Total Cost of Ownership (TCO)
            </h3>
            <p className="mt-10 text-sm leading-5 text-[#1e1e1e] md:text-base md:leading-6">
              Optimized hardware, scalable software, predictive maintenance, and
              operational efficiency reduce long-term automation costs.
            </p>
          </FadeUp>

          <FadeUp
            className="group relative min-h-[470px] overflow-hidden rounded-xl bg-[#011f40] p-5 text-white md:min-h-[532px] lg:min-h-[470px]"
            delay={0.2}
          >
            <Image
              src={`${imagePath}explore-more-img-2.png`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative">
              <h3 className="text-[20px] font-semibold leading-[30px]">
                Strong Support & Service Model
              </h3>
              <div className="mt-7 flex flex-col gap-6">
                {supportItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-6 shrink-0 text-white"
                      strokeWidth={1.8}
                    />
                    <p className="text-sm font-normal leading-5 text-white md:text-base md:leading-6">
                      {label ===
                      "After-sales infrastructure across India and global partner regions." ? (
                        <>
                          After-sales infrastructure across India
                          <br />
                          and global partner regions.
                        </>
                      ) : (
                        label
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
