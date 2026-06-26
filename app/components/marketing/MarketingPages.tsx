import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { imagePath } from "../home/assets";

export function MarketingHero({
  eyebrow,
  title,
  copy,
  image,
  cta,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  cta: string;
}) {
  return (
    <section className="relative min-h-[calc(100svh-60px)] overflow-hidden bg-[#011f40] text-white md:min-h-[calc(100svh-110px)]">
      <Image src={`${imagePath}${image}`} alt="" fill priority sizes="100vw" className="object-cover opacity-65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.84),rgba(1,31,64,.38)_52%,rgba(1,31,64,.08))]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-60px)] items-center py-16 md:min-h-[calc(100svh-110px)]">
        <div className="max-w-[760px]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80 md:text-base">{eyebrow}</p>
          <h1 className="mt-4 text-[42px] font-semibold leading-[1.1] md:text-[60px]">{title}</h1>
          <p className="mt-5 max-w-[590px] text-sm font-medium leading-6 text-white/88 md:text-lg md:leading-8">{copy}</p>
          <a className="mt-8 inline-flex items-center gap-3 rounded-[3px] bg-[#005ead] py-[13px] pl-5 pr-2 text-xs font-semibold uppercase tracking-wide text-white" href="#content">
            {cta} <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-[760px]">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#005ead] md:text-base">{eyebrow}</p>
      <h2 className="mt-4 text-[28px] font-bold leading-[1.2] text-[#011f40] md:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-sm leading-6 text-[#3a3a3a] md:text-base md:leading-[1.5]">{copy}</p> : null}
    </div>
  );
}

export function FeatureTile({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-white">
      {image ? (
        <div className="relative aspect-[1.55] bg-[#dce6ef]">
          <Image src={`${imagePath}${image}`} alt={title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
        </div>
      ) : null}
      <div className="p-5">
        <CheckCircle2 aria-hidden="true" className="size-7 text-[#005ead]" strokeWidth={1.8} />
        <h3 className="mt-5 text-xl font-semibold text-[#005ead]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#3a3a3a] md:text-base">{copy}</p>
      </div>
    </article>
  );
}

export function BlueCta({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden bg-[#005ead] py-20 text-white">
      <Image src={`${imagePath}footer-banner-p-1600.png`} alt="" fill sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-[#005ead]/76" />
      <div className="site-container relative z-10">
        <h2 className="max-w-[780px] text-[40px] font-semibold leading-[1.1] md:text-[60px]">{title}</h2>
        <p className="mt-5 max-w-[570px] text-sm leading-6 text-white/86 md:text-lg">{copy}</p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-[3px] bg-white py-[13px] pl-5 pr-2 text-xs font-semibold uppercase tracking-wide text-[#005ead]">
          Contact Us <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  );
}
