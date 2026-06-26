import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { imagePath } from "../home/assets";
import { ProductFaqAccordion } from "../products/ProductFaqAccordion";
import { SeriesApplicationsCarousel, SeriesRobotSelector } from "./SeriesInteractive";
import type { SeriesPageData } from "./series-data";

export function SeriesPage({ data }: { data: SeriesPageData }) {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SeriesHero data={data} />
      <SeriesFeatures data={data} />
      <SeriesApplicationsCarousel data={data} />
      <SeriesRobotSelector data={data} />
      <SeriesFaqs data={data} />
    </main>
  );
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
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,250,.98)_0%,rgba(250,250,250,.9)_38%,rgba(250,250,250,.62)_100%)]" />
      <div className="site-container relative z-10 grid min-h-[calc(100vh-108px)] items-center gap-8 py-14 md:py-16 lg:grid-cols-[0.46fr_0.54fr]">
        <div className="max-w-[590px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">{data.eyebrow} Robots</p>
          <h1 className="mt-5 text-[48px] font-extrabold leading-[1.04] tracking-[-0.02em] text-[#011f40] md:text-[64px] lg:text-[72px]">
            {data.title}
            <br />
            <span className="text-[#005ead]">{data.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[15px] font-medium leading-6 text-[#4b5563] md:text-base">{data.description}</p>
          <a
            href="#modals"
            className="mt-7 inline-flex h-11 items-center gap-3 rounded-[3px] bg-[#005ead] px-5 text-[12px] font-bold uppercase tracking-wide text-white transition hover:bg-[#0671cc]"
          >
            Explore <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </a>
        </div>

        <div className="relative ml-auto flex min-h-[360px] w-full items-center justify-end lg:min-h-[520px]">
          <div className="relative h-[340px] w-full max-w-[760px] md:h-[440px] lg:h-[560px]">
            <Image
              src={`${imagePath}${data.heroRobot}`}
              alt={`${data.eyebrow} robot`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 760px"
              className="object-contain object-right drop-shadow-[0_30px_45px_rgba(1,31,64,.18)]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {data.tags.map((tag, index) => (
              <span
                key={tag}
                className="absolute rounded-xl bg-white/90 px-4 py-2 text-[13px] font-semibold text-[#456070] shadow-[0_10px_30px_rgba(1,31,64,.14)] backdrop-blur"
                style={{
                  left: index === 0 ? "18%" : index === 1 ? "48%" : "82%",
                  top: index === 0 ? "68%" : index === 1 ? "28%" : "55%",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeriesFeatures({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24">
      <div className="site-container">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#005ead]">How Our Robots Deliver Excellence</p>
          <h2 className="mt-4 text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[44px]">
            Key Features of <span className="text-[#005ead]">{data.eyebrow}</span> Robots
          </h2>
          <p className="mt-4 max-w-[620px] text-[15px] leading-6 text-[#4b5563]">{data.featureIntro}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.47fr_0.53fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {data.features.slice(0, 2).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
            {data.features[2] ? (
              <FeatureCard feature={data.features[2]} className="sm:col-span-2" />
            ) : null}
          </div>

          <article className="relative min-h-[310px] overflow-hidden rounded-lg bg-[#dfe8ef] text-white">
            <Image
              src={`${imagePath}${data.featureImage}`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.48),rgba(1,31,64,.08)_48%,rgba(1,31,64,.18))]" />
            <div className="relative z-10 p-6 md:p-7">
              <h3 className="text-[24px] font-extrabold leading-tight">Let&apos;s Build Together</h3>
              <p className="mt-2 text-[15px] font-medium text-white/86">Join us in shaping the future of robotics</p>
            </div>
          </article>
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
    <article className={`rounded-lg bg-[#e8f0f7] p-6 ${className}`}>
      {feature.icon ? (
        <Image src={`${imagePath}${feature.icon}`} alt="" width={42} height={42} className="h-10 w-10 object-contain" />
      ) : null}
      <h3 className="mt-5 max-w-[270px] text-[22px] font-extrabold leading-[1.08] text-[#005ead]">{feature.title}</h3>
      <p className="mt-3 text-[14px] leading-5 text-[#4b5563]">{feature.copy}</p>
    </article>
  );
}

function SeriesFaqs({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-container grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <h2 className="text-[34px] font-extrabold tracking-[-0.02em] md:text-[42px]">FAQs</h2>
          <p className="mt-4 max-w-[320px] text-[15px] leading-6 text-[#4b5563]">
            We&apos;ve heard it all - here&apos;s what people are really asking behind the scenes.
          </p>
        </div>
        <ProductFaqAccordion items={data.faqs} />
      </div>
    </section>
  );
}
