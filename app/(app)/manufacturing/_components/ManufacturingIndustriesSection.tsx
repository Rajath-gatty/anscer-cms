import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FadeUp } from "../../components/animation";
import { manufacturingIndustries } from "../_data/manufacturing-data";

function ExploreLink({
  href,
  title,
  dark = false,
}: {
  href: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`Explore ${title}`}
      className={cn(
        "group/link inline-flex items-center gap-1.5 text-xs font-medium transition-colors md:text-[clamp(12px,0.6vw,20px)]",
        dark ? "text-white hover:text-white/80" : "text-[#011f40] hover:text-[#005ead]",
      )}
    >
      Explore
      <ArrowRight
        aria-hidden="true"
        className="size-3 transition-transform group-hover/link:translate-x-0.5 3xl:size-4"
        strokeWidth={2}
      />
    </Link>
  );
}

export function ManufacturingIndustriesSection() {
  const [featured, ...industries] = manufacturingIndustries;

  return (
    <section className="bg-[#fafafa] py-12 md:py-16 3xl:py-20 4xl:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-[28px] font-bold leading-tight text-[#011f40] md:text-[clamp(40px,2.4vw,80px)]">
              Adapt Warehouse Automation to Different Industries and Operations
            </h2>
          </FadeUp>
          <FadeUp
            delay={0.08}
            className="space-y-4 text-sm leading-6 text-brand-charcoal md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:text-[clamp(20px,0.9vw,28px)]"
          >
            <p>
              Material movement requirements vary significantly across
              industries. The same automation approach cannot always be applied
              in the same way to every facility.
            </p>
            <p>
              ANSCER&apos;s workflow-led approach allows warehouse automation to
              be configured around the materials, processes and operational
              requirements of different industries.
            </p>
          </FadeUp>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-[2fr_1fr_1fr] 3xl:gap-6">
          <li className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <FadeUp className="h-full">
              <article className="group relative flex aspect-[4/5] h-full flex-col justify-end overflow-hidden rounded-[10px] bg-[#011f40] p-6 text-white sm:aspect-[16/10] md:p-7 lg:aspect-auto 3xl:p-10">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,64,.05)_0%,rgba(1,31,64,.35)_45%,rgba(1,31,64,.92)_100%)]" />
                <div className="relative">
                  <h3 className="text-[28px] font-semibold leading-tight text-white md:text-[clamp(30px,2vw,64px)]">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-[520px] text-sm leading-[1.6] text-white/90 md:text-[clamp(14px,0.75vw,24px)] 3xl:max-w-[760px]">
                    {featured.copy}
                  </p>
                  <div className="mt-5 3xl:mt-7">
                    <ExploreLink href={featured.href} title={featured.title} dark />
                  </div>
                </div>
              </article>
            </FadeUp>
          </li>

          {industries.map((industry, index) => (
            <li key={industry.title}>
              <FadeUp delay={(index + 1) * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#011f40]/10 bg-white">
                  <div className="relative aspect-[271/107] overflow-hidden bg-[#dce7ef]">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 3xl:p-7">
                    <h3 className="text-lg font-semibold text-[#011f40] md:text-[clamp(18px,0.95vw,32px)]">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.5] text-brand-charcoal md:text-[clamp(13px,0.65vw,22px)]">
                      {industry.copy}
                    </p>
                    <div className="mt-auto pt-5 3xl:pt-7">
                      <ExploreLink href={industry.href} title={industry.title} />
                    </div>
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
