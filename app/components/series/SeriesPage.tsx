import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { imagePath } from "../home/assets";
import type { SeriesPageData, SeriesProduct } from "./series-data";

export function SeriesPage({ data }: { data: SeriesPageData }) {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SeriesHero data={data} />
      <SeriesFeatures data={data} />
      <SeriesApplications data={data} />
      <SeriesProducts data={data} />
      <SeriesFaqs data={data} />
    </main>
  );
}

function SeriesHero({ data }: { data: SeriesPageData }) {
  return (
    <section className="relative min-h-[calc(100vh-108px)] overflow-hidden bg-[#011f40] text-white">
      <Image
        src={`${imagePath}${data.heroImage}`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.82),rgba(1,31,64,.35)_48%,rgba(1,31,64,.18))]" />
      <div className="site-container relative z-10 grid min-h-[calc(100vh-108px)] items-center gap-10 py-16 lg:grid-cols-[0.48fr_0.52fr]">
        <div className="max-w-[620px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">{data.eyebrow}</p>
          <h1 className="mt-5 text-[44px] font-bold leading-[1.05] tracking-tight md:text-[64px]">
            {data.title} <span className="text-[#4db5ff]">{data.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-sm leading-6 text-white/86 md:text-base">{data.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {data.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#series-products"
            className="mt-8 inline-flex h-11 items-center gap-3 rounded-sm bg-[#005ead] px-5 text-[12px] font-bold uppercase tracking-wide text-white transition hover:bg-[#0671cc]"
          >
            Explore <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </a>
        </div>
        <div className="relative mx-auto aspect-[1.18] w-full max-w-[640px]">
          <Image
            src={`${imagePath}${data.heroRobot}`}
            alt={`${data.eyebrow} robot`}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 640px"
            className="object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,.38)]"
          />
        </div>
      </div>
    </section>
  );
}

function SeriesFeatures({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005ead]">How Our Robots Deliver Excellence</p>
            <h2 className="mt-4 text-[30px] font-bold tracking-tight md:text-[40px]">
              Key Features of <span className="text-[#005ead]">{data.eyebrow}</span> Robots
            </h2>
          </div>
          <p className="max-w-[720px] text-sm leading-6 text-[#4b5563] md:text-base">{data.featureIntro}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {data.features.map((feature) => (
            <article key={feature.title} className="rounded-lg bg-[#eef5fb] p-6">
              {feature.icon ? (
                <Image src={`${imagePath}${feature.icon}`} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              ) : null}
              <h3 className="mt-5 text-lg font-bold text-[#011f40]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b5563]">{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeriesApplications({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-container">
        <div className="max-w-[760px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005ead]">Applications Built For</p>
          <h2 className="mt-4 text-[30px] font-bold tracking-tight md:text-[40px]">Smart Material Movement</h2>
          <p className="mt-4 text-sm leading-6 text-[#4b5563] md:text-base">{data.applicationsIntro}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.applications.map((application) => (
            <article key={application.title} className="overflow-hidden rounded-lg bg-[#eef5fb]">
              {application.image ? (
                <div className="relative aspect-[1.48] bg-[#dfe7ee]">
                  <Image
                    src={`${imagePath}${application.image}`}
                    alt={application.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#011f40]">{application.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4b5563]">{application.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeriesProducts({ data }: { data: SeriesPageData }) {
  return (
    <section id="series-products" className="bg-[#fafafa] py-16 md:py-24">
      <div className="site-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005ead]">Explore {data.eyebrow} Robots</p>
            <h2 className="mt-4 text-[30px] font-bold tracking-tight md:text-[40px]">Robots Built For Your Workflow</h2>
          </div>
          <div className="flex gap-2 rounded-md bg-[#eef5fb] p-1 text-xs font-semibold uppercase tracking-wide text-[#011f40]">
            <span className="rounded bg-white px-4 py-2 text-[#005ead]">Metric</span>
            <span className="px-4 py-2 text-[#768291]">Imperial</span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {data.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: SeriesProduct }) {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-[#e8f0f7] p-6 transition hover:shadow-[0_24px_60px_rgba(1,31,64,.12)] md:p-7">
      {product.bgText ? (
        <Image
          src={`${imagePath}${product.bgText}`}
          alt=""
          width={520}
          height={160}
          className="pointer-events-none absolute right-3 top-8 max-h-28 w-auto max-w-[68%] object-contain opacity-10"
        />
      ) : null}
      <div className="relative z-10 grid gap-6 md:grid-cols-[0.58fr_0.42fr]">
        <div>
          <h3 className="text-2xl font-bold text-[#011f40]">{product.name}</h3>
          <p className="mt-3 max-w-[440px] text-sm leading-6 text-[#4b5563]">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-[#011f40]">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={product.href}
            className="mt-6 inline-flex h-10 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
          >
            Explore <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </a>
        </div>
        <div className="relative min-h-[220px]">
          <Image
            src={`${imagePath}${product.image}`}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <dl className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2">
        {product.specs.map((spec) => (
          <div key={spec.label} className="rounded bg-white/80 p-3">
            <dt className="text-[10px] font-bold uppercase tracking-wide text-[#6b7785]">{spec.label}</dt>
            <dd className="mt-1 text-sm font-semibold text-[#011f40]">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function SeriesFaqs({ data }: { data: SeriesPageData }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-container grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#005ead]">FAQs</p>
          <h2 className="mt-4 text-[30px] font-bold tracking-tight md:text-[40px]">Questions Teams Ask</h2>
        </div>
        <div className="grid gap-4">
          {data.faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg bg-[#eef5fb] p-5">
              <div className="flex gap-3">
                <CheckCircle2 aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#005ead]" strokeWidth={2} />
                <div>
                  <h3 className="text-lg font-bold text-[#011f40]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4b5563]">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
