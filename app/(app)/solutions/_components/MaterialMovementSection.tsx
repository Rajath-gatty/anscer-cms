import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { ArrowButton, Tags } from "../../components/home/SectionPrimitives";
import { materialMovementSeries } from "../_data/solutions-data";

export function MaterialMovementSection() {
  return (
    <section className="bg-[#fafafa] pb-12 md:pb-16 3xl:pb-20 4xl:pb-28">
      <div className="site-container">
        <FadeUp>
          <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
            Complete Material Movement Solutions
          </h2>
          <p className="mt-4 max-w-[1000px] text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[1300px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[1500px]">
            ANSCER Robotics automates the complete material movement flow from
            inbound to outbound. Our product portfolio consists of three robot
            families designed to support warehouse and manufacturing operations.
            By seamlessly integrating into existing warehouse and manufacturing
            workflows, these intelligent autonomous systems improve throughput
            speed, minimize material damage, enhance workplace safety, and
            significantly reduce operational downtime across every stage of the
            facility.
          </p>
        </FadeUp>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3 3xl:gap-6">
          {materialMovementSeries.map((series, index) => (
            <FadeUp key={series.title} delay={index * 0.1} className="h-full">
              <article className="group relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-[10px] bg-[#011f40] p-5 md:min-h-[520px] md:p-6 lg:min-h-[560px] 3xl:min-h-[720px] 3xl:p-8 4xl:min-h-[820px]">
                <Image
                  src={series.image}
                  alt={series.imageAlt}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${series.imagePosition} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105`}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-black/80 via-black/45 to-transparent"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white md:text-[clamp(26px,1.5vw,48px)]">
                    {series.title}
                  </h3>
                  <p className="mt-3 max-w-[460px] text-sm leading-5 text-white/90 md:text-[clamp(14px,0.75vw,26px)] md:leading-[140%] 3xl:max-w-[600px] 3xl:text-[clamp(18px,0.85vw,26px)]">
                    {series.copy}
                  </p>
                  <Tags tags={series.tags} />
                  <ArrowButton
                    target={series.href}
                    aria-label={`Explore ${series.title}`}
                    className="mt-4 h-[40px] px-4 text-[12px] md:text-[13px] 3xl:mt-6"
                  >
                    Explore
                  </ArrowButton>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
