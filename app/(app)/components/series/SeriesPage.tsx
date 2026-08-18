import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../home/assets";
import { ScrollReveal } from "../home/ScrollReveal";
import { ProductFaqAccordion } from "../robots/ProductFaqAccordion";
import { ArrowButton } from "../home/SectionPrimitives";
import type { SeriesPageData } from "./series-data";
import {
  SeriesApplicationsCarousel,
  SeriesRobotSelector,
} from "./SeriesInteractive";
import { topModules } from "../product-detail/product-detail-data";
import { ArSeriesModules } from "../product-detail/sections/ArSeriesModules";

export function SeriesPage({ data }: { data: SeriesPageData }) {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SeriesHero data={data} />
      <ArSeriesModules
        data={{ modules: topModules, modulesBaseImage: "ar-250-base.png" }}
      />
      <SeriesFeatures data={data} />
      <SeriesApplicationsCarousel data={data} />
      <SeriesRobotSelector data={data} series={data.slug} />
      <SeriesFaqs data={data} />
    </main>
  );
}

const defaultHeroTagPosition = { left: "1%", top: "58%" };

const heroTagPositionsBySeries: Record<
  string,
  Record<string, { left: string; top: string }>
> = {
  "ar-series": {
    Tugging: { left: "1%", top: "58%" },
    Tunneling: { left: "44%", top: "25%" },
    Lifting: { left: "82%", top: "55%" },
  },
  "psr-series": {
    Stacking: { left: "1%", top: "68%" },
    "Open/Closed Pallet": { left: "64%", top: "18%" },
  },
  "agv-series": {
    Lifting: { left: "44%", top: "20%" },
    Sorting: { left: "84%", top: "50%" },
  },
};

function getHeroTagPosition(slug: string, tag: string) {
  return heroTagPositionsBySeries[slug]?.[tag] ?? defaultHeroTagPosition;
}

function SeriesHero({ data }: { data: SeriesPageData }) {
  return (
    <section className="relative min-h-[calc(100vh-108px)] overflow-hidden bg-[#fbfbfb]">
      <Image
        src={`${imagePath}${data.heroImage}`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,250,.88)_0%,rgba(250,250,250,.0)_80%,rgba(250,250,250,.22)_100%)]" />
      <div className="site-container relative z-10 grid min-h-[calc(100vh-108px)] items-center gap-8 py-14 md:py-16 lg:grid-cols-[0.46fr_0.54fr]">
        <div className="max-w-[590px] 2xl:max-w-[720px] 4xl:max-w-[880px]">
          <ScrollReveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
              {data.eyebrow} Robots
            </p>
            <h1 className="mt-5 text-[48px] font-bold leading-[1.04] tracking-[-0.02em] text-[#011f40] md:text-[clamp(48px,4vw,80px)]">
              {data.title}
              <br />
              <span className="text-[#005ead] font-montserrat">{data.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-[520px] 3xl:max-w-[640px] 4xl:max-w-[780px] text-sm font-medium leading-5 text-[#4b5563] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              {data.description}
            </p>
          </ScrollReveal>
          <ArrowButton
            as="a"
            href="#modals"
            className="mt-7 h-11 font-bold rounded-[3px] px-5"
          >
            Explore
          </ArrowButton>
        </div>

        <div className="relative ml-auto flex min-h-[360px] w-full items-center justify-end lg:min-h-[520px]">
          <div className="relative flex justify-end h-[340px] w-full max-w-[760px] md:h-[440px] lg:h-[560px] 3xl:h-[700px] 4xl:h-[800px]">
            <Image
              src={`${imagePath}${data.heroRobot}`}
              alt={`${data.eyebrow} robot`}
              width={760}
              height={560}
              priority
              className={cn(
                "object-contain self-end object-right -translate-y-[40px] md:translate-y-[-60px] origin-right scale-100 md:scale-140   drop-shadow-[0_30px_45px_rgba(1,31,64,.18)] max-w-[400px]",
                data.slug === "psr-series" ?
                  "md:-translate-y-[75px] md:scale-130 scale-100 w-[90%] translate-y-0 2xl:-translate-y-[50px] 3xl:translate-y-[0px]" :
                  data.slug === "ar-series" && "md:translate-x-[180px] 2xl:translate-x-[80px]",
              )}
            />
          </div>
          {/* <div className="pointer-events-none absolute inset-0 block">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="absolute rounded-xl bg-white/90 px-4 py-2 text-[13px] font-semibold text-[#456070] shadow-[0_10px_30px_rgba(1,31,64,.14)] backdrop-blur"
                style={getHeroTagPosition(data.slug, tag)}
              >
                {tag}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

function SeriesFeatures({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24 3xl:py-32 4xl:py-40">
      <div className="site-container">
        <ScrollReveal className="max-w-[720px] 3xl:max-w-[900px] 4xl:max-w-[1100px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#005ead] md:text-[clamp(16px,0.8vw,30px)]">
            How Our Robots Deliver Excellence
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.02em] md:text-[clamp(40px,2.4vw,80px)]">
            Key Features of{" "}
            <span className="text-[#005ead]">{data.eyebrow}</span> Robots
          </h2>
          <p className="mt-4 max-w-[620px] 3xl:max-w-[750px] 4xl:max-w-[900px] text-sm leading-5 text-[#4b5563] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
            {data.featureIntro}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.47fr_0.53fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {data.features.slice(0, 2).map((feature, index) => (
              <ScrollReveal key={feature.title} delay={90 + index * 70}>
                <FeatureCard feature={feature} />
              </ScrollReveal>
            ))}
            {data.features[2] ? (
              <ScrollReveal delay={230} className="sm:col-span-2">
                <FeatureCard feature={data.features[2]} />
              </ScrollReveal>
            ) : null}
          </div>

          <ScrollReveal delay={160} className="h-full">
            <article className="relative h-full min-h-[310px] overflow-hidden rounded-lg bg-[#dfe8ef] text-white">
              <Image
                src={`${imagePath}${data.featureImage}`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.48),rgba(1,31,64,.08)_48%,rgba(1,31,64,.18))]" />
              <div className="relative z-10 p-6 md:p-7">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">
                  Let&apos;s Build Together
                </h3>
                <p className="mt-2 text-sm font-medium text-white/86 md:text-base">
                  Join us in shaping the future of robotics
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  className = "",
}: {
  feature: SeriesPageData["features"][number];
  className?: string;
}) {
  return (
    <article className={`h-full rounded-lg bg-[#e8f0f7] p-6 ${className}`}>
      {feature.icon ? (
        <Image
          src={`${imagePath}${feature.icon}`}
          alt=""
          width={42}
          height={42}
          className="h-10 w-10 object-contain"
        />
      ) : null}
      <h3 className="mt-5 max-w-[270px] 2xl:max-w-full text-xl font-bold leading-[1.08] text-[#005ead] md:text-[clamp(20px,0.9vw,30px)] 3xl:text-[clamp(24px,1.3vw,36px)]">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm leading-5 text-[#4b5563] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
        {feature.copy}
      </p>
    </article>
  );
}

function SeriesFaqs({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-[#fafafa] py-14 lg:py-24">
      <div className="site-container grid gap-4 md:grid-cols-[0.6fr_1fr] xl:grid-cols-[0.5fr_1fr]">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.2] text-[#011f40] md:text-[clamp(40px,2.4vw,80px)] md:leading-[1.15]">
            FAQs
          </h2>
          <p className="mt-4 max-w-[380px] 3xl:max-w-[480px] 4xl:max-w-[600px] text-sm leading-5 text-[#3a3a3a] md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
            We&apos;ve heard it all - here&apos;s what people are really asking
            behind the scenes.
          </p>
        </div>
        <ProductFaqAccordion items={data.faqs} />
      </div>
    </section>
  );
}
