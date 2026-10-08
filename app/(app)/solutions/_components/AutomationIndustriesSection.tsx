import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeUp } from "../../components/animation";
import { automationIndustries } from "../_data/solutions-data";

export function AutomationIndustriesSection() {
  return (
    <section className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            Automation Across Industries
          </h2>
          <p className="mt-4 max-w-[560px] text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[760px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[900px]">
            Delivering intelligent automation solutions tailored to the unique
            material movement needs of diverse industries.
          </p>
        </FadeUp>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 3xl:gap-6">
          {automationIndustries.map((industry, index) => (
            <li
              key={industry.title}
              className={cn(industry.featured && "lg:row-span-2")}
            >
              <FadeUp delay={(index % 3) * 0.08} className="h-full">
                <article
                  className={cn(
                    "relative flex aspect-[277/225] h-full flex-col justify-end overflow-hidden rounded-[10px] bg-[#011f40] p-4 text-white md:p-5 3xl:p-7",
                    industry.featured && "lg:aspect-auto",
                  )}
                >
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,rgba(0,0,0,.5)_45%,rgba(0,0,0,.72)_100%)]" />
                  <div className="relative">
                    <h3 className="text-2xl font-semibold leading-tight text-white md:text-[clamp(22px,1.25vw,40px)]">
                      {industry.title}
                    </h3>
                    <p className="mt-3 max-w-[320px] text-xs font-medium leading-[1.35] text-white/90 md:text-[clamp(11px,0.6vw,20px)] 3xl:max-w-[440px]">
                      {industry.copy}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-5 flex size-7 items-center justify-center rounded-full border border-white 3xl:size-9"
                    >
                      <ArrowRight className="size-4 3xl:size-5" strokeWidth={1.8} />
                    </span>
                  </div>
                </article>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
