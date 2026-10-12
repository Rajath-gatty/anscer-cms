import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { ArrowButton } from "../../components/home/SectionPrimitives";
import { automationSolutions } from "../_data/solutions-data";

export function AutomationSolutionsSection() {
  return (
    <section className="bg-[#fafafa] pb-12 md:pb-16 3xl:pb-20 4xl:pb-28">
      <div className="site-container">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            Automation Designed For Every Move
          </h2>
          <p className="mt-4 max-w-[780px] text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[1000px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[1200px]">
            From warehouse transport to production support, ANSCER delivers
            autonomous solutions that streamline workflows, improve operational
            performance, and scale with evolving business needs.
          </p>
        </FadeUp>

        <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-2 3xl:gap-8">
          {automationSolutions.map((solution, index) => (
            <FadeUp key={solution.title} delay={index * 0.1} className="h-full">
              <article className="flex h-full flex-col rounded-[10px] border border-[#011f40]/10 bg-white p-5 md:p-6 3xl:p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={solution.icon}
                    alt=""
                    width={66}
                    height={66}
                    unoptimized
                    className="size-12 shrink-0 md:size-[52px] 3xl:size-[66px]"
                  />
                  <h3 className="text-2xl font-semibold text-[#011f40] md:text-[clamp(24px,1.4vw,44px)]">
                    {solution.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]">
                  {solution.copy}
                </p>
                <div className="relative mt-6 aspect-[45/18] overflow-hidden rounded-[8px] bg-[#dce7ef] lg:mt-auto">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <ArrowButton
                  target={solution.href}
                  aria-label={`Explore ${solution.title}`}
                  className="mt-4 h-[40px] self-start px-4 text-[12px] md:text-[13px]"
                >
                  Explore more
                </ArrowButton>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
