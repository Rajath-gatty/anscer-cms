import Image from "next/image";
import { FadeUp } from "../../animation";
import { imagePath } from "../../home/assets";
import { ArrowButton } from "../../home/SectionPrimitives";
import type { WarehouseSolutionData } from "../warehouse-solutions-data";

/** Closing banner: left-aligned copy over the blue-graded robot line-up. */
export function SolutionCta({ data }: { data: WarehouseSolutionData }) {
  const { cta } = data;

  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-brand-navy py-16 text-white md:min-h-[clamp(420px,30vw,820px)]">
      <Image
        src={`${imagePath}warehouse-solutions/footer-banner.jpg`}
        alt=""
        fill
        quality={95}
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-center"
      />
      {/* Phones crop the robots under the copy; darken the left side there only. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,18,40,.85)_0%,rgba(1,18,40,.45)_100%)] md:hidden"
      />

      <FadeUp className="site-container relative z-10">
        <h2 className="max-w-[12em] text-[34px] font-semibold leading-[1.2] text-white md:text-[clamp(44px,3.4vw,96px)] md:leading-[1.15]">
          {cta.title}
        </h2>
        <p className="mt-5 max-w-[42em] text-sm leading-6 text-white/90 md:mt-6 md:text-[clamp(16px,1vw,28px)] md:leading-[1.55]">
          {cta.copy}
        </p>
        <ArrowButton
          target={cta.href}
          className="mt-8 h-[40px] px-4 3xl:h-[46px] 3xl:px-5"
        >
          {cta.label}
        </ArrowButton>
      </FadeUp>
    </section>
  );
}
