import Image from "next/image";
import { FadeRight } from "../animation";
import { imagePath } from "./assets";
import { ArrowButton } from "./SectionPrimitives";

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#005fad] py-24 text-white">
      <Image src={`${imagePath}footer-banner-p-1600.png`} alt="" fill sizes="100vw" className="object-cover opacity-50" />
      <div className="absolute inset-0 bg-[#005ead]/82" />
      <FadeRight className="site-container relative">
        <h2 className="max-w-3xl text-[36px] font-semibold leading-tight tracking-tight md:text-[56px]">
          Dive Into The Future Factory
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/82">
          Explore ANSCER&apos;s cutting-edge lineup, powerful smart automation solutions engineered to transform your
          operations.
        </p>
        <div className="mt-8">
          <ArrowButton dark>Explore Solutions</ArrowButton>
        </div>
      </FadeRight>
    </section>
  );
}
