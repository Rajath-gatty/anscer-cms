import Image from "next/image";
import { FadeUp } from "../../animation";
import { ArrowButton } from "../../home/SectionPrimitives";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";

export function SolutionHero({ data }: { data: WarehouseSolutionData }) {
  const { hero } = data;

  return (
    <section className="bg-[#e6ebf0] py-10 md:py-[clamp(56px,4.5vw,120px)]">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-[clamp(40px,5vw,120px)]">
        <FadeUp>
          <h1 className="max-w-[12em] text-[36px] font-bold leading-[1.15] text-brand-navy md:text-[clamp(44px,3.9vw,96px)] md:leading-[1.12]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[46em] text-sm leading-6 text-brand-charcoal md:mt-6 md:text-[clamp(16px,1.1vw,28px)] md:leading-[1.5]">
            {hero.copy}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ArrowButton target={hero.primaryCta.href} className="h-[46px] px-5">
              {hero.primaryCta.label}
            </ArrowButton>
            <ArrowButton
              target={hero.secondaryCta.href}
              className="h-[46px] bg-white px-5 text-brand-navy hover:bg-[#edf6ff]"
            >
              {hero.secondaryCta.label}
            </ArrowButton>
          </div>

          {/* Stats hidden for now — uncomment to bring them back (data is still in `hero.stats`).
          <dl className="mt-10 grid max-w-[600px] grid-cols-3 md:mt-12 3xl:max-w-[800px]">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end gap-2 border-l border-brand-navy/20 px-4 first:border-l-0 first:pl-0 md:px-6"
              >
                <dt className="max-w-[8em] text-xs leading-[1.4] text-brand-charcoal md:text-[clamp(14px,0.9vw,24px)]">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-bold text-brand-blue md:text-[clamp(26px,1.9vw,48px)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          */}
        </FadeUp>

        <FadeUp delay={0.1} className="relative aspect-[6/5] overflow-hidden rounded-[12px] bg-[#dce7ef]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            quality={95}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </FadeUp>
      </div>
    </section>
  );
}
