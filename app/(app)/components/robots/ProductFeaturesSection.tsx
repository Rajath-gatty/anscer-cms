import { GitFork, Route, Workflow } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../home/assets";
import { ScrollReveal } from "../home/ScrollReveal";

const featureCards = [
  {
    title: "Interoperable Architecture",
    copy: "VDA 5050-compliant architecture for scalable multi-vendor fleet integration.",
    Icon: GitFork,
    iconClassName: "rotate-180",
  },
  {
    title: "Business Application Layer",
    copy: "Execute industry-specific workflows with predefined modules and low-code customization.",
    Icon: Route,
  },
  {
    title: "Built-In Fleet & Mission Management",
    copy: "Configure missions, routes, and fleets through an intuitive interface.",
    Icon: Workflow,
  },
];

export function ProductFeaturesSection() {
  return (
    <section className="bg-[#fafafa] py-14 md:py-20">
      <div className="site-container">
        <ScrollReveal className="max-w-[600px]">
          <p className="text-[12px] md:text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            How Our Robots Deliver Excellence
          </p>
          <h2 className="mt-4 text-[28px] font-bold tracking-tight md:text-[36px]">
            Key Features of All Our{" "}
            <span className="text-[#005ead]">Robots</span>
          </h2>
          <p className="mt-4 text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
            Never worry about maintenance. ANSCER Robotics ensures seamless
            software updates, reliable hardware, and ongoing support to keep
            your robots operating at peak performance.
          </p>
        </ScrollReveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {featureCards.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                delay={90 + index * 70}
                className={index === 2 ? "sm:col-span-2" : undefined}
              >
                <article className="h-full rounded-lg bg-[#eaf2f8] p-6">
                  <div className="grid size-9 place-items-center rounded-md text-[#005ead]">
                    <feature.Icon
                      aria-hidden="true"
                      className={`size-8 ${feature.iconClassName ?? ""}`}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#005ead] md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
                    {feature.copy}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={160} className="h-full">
            <article className="relative h-full min-h-[310px] overflow-hidden rounded-lg bg-[#011f40] p-7 text-white">
              <Image
                src={`${imagePath}de9a09864e6cf7999d592447391655110840a585.png`}
                alt=""
                fill
                sizes="680px"
                className="object-cover"
              />
              <div className="relative z-10 max-w-[340px]">
                <h3 className="text-xl font-bold md:text-2xl">
                  Let&apos;s Build Together
                </h3>
                <p className="mt-3 text-sm leading-5 text-white/84 md:text-base md:leading-6">
                  Join us in shaping the future of robotics.
                </p>
              </div>
              {/* <Image
                src={`${imagePath}agv-100-new.png`}
                alt="AGV robot"
                width={420}
                height={250}
                className="absolute bottom-0 right-6 w-[54%] max-w-[430px] object-contain"
              /> */}
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
