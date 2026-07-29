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
          {/* <p className="text-xs font-medium uppercase text-[#005ead]    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)]">
            Your Gateway to All Things ANSCER
          </p> */}
          <h2 className="mt-8 text-[28px] font-bold tracking-tight md:text-[clamp(40px,2.4vw,80px)]">
            Explore <span className="text-[#005ead] font-montserrat">More</span>
          </h2>
          <p className="mt-6 max-w-[640px] 3xl:max-w-[750px] 4xl:max-w-[1000px] text-sm leading-5 text-[#3a3a3a]    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
            All the Answers You Need About ANSCER Robotics&mdash;Right at Your
            Fingertips. From how our autonomous robots transform industries to
            what makes our tech stand out&mdash;your journey into the future of
            smart automation starts here.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.05fr_.5fr_1.05fr] 3xl:h-[600px] 4xl:h-[750px]">
          <FadeUp className="grid gap-6" delay={0.08}>
            <article className="group relative overflow-hidden rounded-xl bg-[#011f40] p-5 3xl:py-7 4xl:py-9 text-white">
              <Image
                src={`${imagePath}explore-more-img-1.png`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover opacity-65 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.18)_52%,rgba(0,0,0,.68))]" />
              <div className="relative">
                <Image
                  src={`${imagePath}diamond-plus.svg`}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 3xl:size-13 4xl:size-15 brightness-0 invert"
                />
                <h3 className="mt-4 3xl:mt-5 4xl:mt-7 text-[20px] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.3vw,36px)] font-semibold text-white">
                  Globally Safety-Compliant Robots
                </h3>
                <p className="mt-3 3xl:mt-4 4xl:mt-4 text-sm leading-5 text-white/90    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,1vw,34px)] md:leading-[130%]">
                  Designed to meet international safety standards for industrial
                  deployment across manufacturing and warehousing environments.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-xl bg-[#011f40] p-5 3xl:py-7 4xl:py-9 text-white">
              <Image
                src={`${imagePath}explore-more-img-2.png`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.18)_52%,rgba(0,0,0,.68))]" />
              <div className="relative">
                <Image
                  src={`${imagePath}lightbulb.svg`}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 3xl:size-13 4xl:size-15 brightness-0 invert"
                />
                <h3 className="mt-4 3xl:mt-5 4xl:mt-7 text-[20px] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.3vw,36px)] font-semibold text-white">
                  Lower Total Cost of Ownership (TCO)
                </h3>
                <p className="mt-3 3xl:mt-4 4xl:mt-4 text-sm leading-5 text-white/90    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,1vw,34px)] md:leading-[130%]">
                  Optimized hardware, scalable software, predictive maintenance, and
                  operational efficiency reduce long-term automation costs.
                </p>
              </div>
            </article>
          </FadeUp>

          <FadeUp delay={0.14}>
            <article className="group relative h-full w-full overflow-hidden rounded-xl bg-[#011f40] p-5 3xl:py-7 4xl:py-9 text-white">
              <Image
                src={`${imagePath}explore-more-img-1.png`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover opacity-65 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72),rgba(0,0,0,.18)_52%,rgba(0,0,0,.68))]" />
              <div className="relative">
                <h3 className="text-[20px] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.3vw,36px)] font-semibold text-white">
                  Multi-Brand Interoperability
                </h3>
                <p className="mt-3 3xl:mt-6 4xl:mt-8 max-w-[560px] text-sm leading-5 text-white/90    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,1vw,34px)] md:leading-[130%]">
                  Ability to integrate and operate with diverse automation
                  ecosystems, third-party robots, ERP, WMS, conveyors, doors,
                  and factory systems.
                </p>
              </div>
            </article>
          </FadeUp>

          <FadeUp
            className="group relative min-h-[470px] overflow-hidden rounded-xl bg-[#011f40] p-5 3xl:py-7 4xl:py-9 text-white md:min-h-[532px] lg:min-h-[470px]"
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
              <h3 className="text-[20px] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.3vw,36px)] font-semibold text-white">
                Strong Support & Service Model
              </h3>
              <div className="mt-7 flex flex-col gap-6">
                {supportItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-6 3xl:size-8 4xl:size-10 shrink-0 text-white"
                      strokeWidth={1.8}
                    />
                    <p className="text-sm font-normal leading-5 text-white/90    md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,1vw,34px)] md:leading-[130%]">
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
    </section >
  );
}
