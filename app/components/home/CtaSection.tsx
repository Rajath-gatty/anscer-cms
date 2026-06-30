import Image from "next/image";
import { FadeRight } from "../animation";
import { ArrowButton } from "./SectionPrimitives";

export function CtaSection() {
  return (
    <section id="contact" className="relative flex min-h-[556px] items-center overflow-hidden bg-[#005ead] py-20 text-white">
      <Image src="/anscer/images/dive-into-future/bg.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 z-10 bg-black/55" />
      <div className="absolute inset-0 z-20 bg-[#005ead] mix-blend-color" />
      <FadeRight className="site-container relative z-30 flex flex-col items-start gap-6">
        <h2 className="max-w-[970px] text-[48px] font-semibold leading-[60px] tracking-normal md:leading-[70px] lg:text-[60px] lg:leading-[1.1]">
          Dive Into The Future Factory
        </h2>
        <p className="max-w-[850px] text-[14px] font-medium leading-[20px] text-white md:leading-[32px] lg:text-[18px] lg:leading-[32px]">
          Explore ANSCER&apos;s cutting-edge lineup, powerful smart automation solutions engineered to transform your
          operations.
        </p>
        <div>
          <ArrowButton dark>Explore Solutions</ArrowButton>
        </div>
      </FadeRight>
    </section>
  );
}
