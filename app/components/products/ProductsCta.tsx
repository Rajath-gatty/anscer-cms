import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { imagePath } from "../home/assets";

export function ProductsCta() {
  return (
    <section className="relative overflow-hidden flex items-center py-20 text-white h-[500px]">
      <Image
        src={`${imagePath}96cdc152cb608044ef4fbddf84c5978fac86d350.png`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover bg-[#005ead]  h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_48%,rgba(0,0,0,.28)_100%)] mix-blend-color" />
      <div className="absolute inset-0 w-full h-full bg-black/70" />
      <div className="absolute inset-0 w-full h-full bg-[#005ead] mix-blend-color" />
      <div className="site-container relative z-10">
        <h2 className="max-w-[760px] text-[48px] font-semibold leading-tight tracking-tight md:text-[60px]">
          Dive Into The Future Factory
        </h2>
        <p className="mt-4 max-w-[560px] font-medium text-sm leading-5 text-white/85 md:text-[18px] md:leading-[26px]">
          Explore ANSCER&apos;s cutting-edge lineup: powerful, smart automation
          solutions engineered to transform your operations.
        </p>
        <a
          href="#contact"
          className="group mt-8 inline-flex h-11 items-center gap-3 rounded-sm bg-[#015EAD] px-5 text-[14px] font-medium uppercase tracking-wide text-white transition hover:bg-[#046bc5]"
        >
          Talk to our experts
          <span className="relative flex size-4 overflow-hidden">
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition group-hover:translate-x-5"
              strokeWidth={2}
            />
            <ArrowRight
              aria-hidden="true"
              className="absolute size-4 -translate-x-5 transition group-hover:translate-x-0"
              strokeWidth={2}
            />
          </span>
        </a>
      </div>
    </section>
  );
}
