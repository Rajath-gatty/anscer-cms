import Image from "next/image";
import { FadeUp } from "../animation";
import { ArrowButton } from "./SectionPrimitives";

export function CtaSection() {
  return (
    <section id="contact" className="relative flex min-h-[580px] items-center overflow-hidden bg-[#005ead] py-0 text-white">
      <Image src="/anscer/images/banner-home-final.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div className="absolute inset-0 z-20 bg-[#005ead] mix-blend-color" />
      <FadeUp className="site-container relative z-30 flex flex-col items-start gap-6">
        <h2 className="max-w-[970px] text-[36px] font-bold tracking-tight text-white md:text-[clamp(40px,2.4vw,80px)] leading-tight md:leading-[1.1]">
          Ready to Automate Your Material Flow?
        </h2>
        <p className="max-w-[850px] text-sm font-medium leading-5 text-white md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
          See how ANSCER’s Autonomous Mobile Robots can turn repetitive material handling into reliable, scalable autonomous flow.
        </p>
        <div>
          <ArrowButton>Talk to Our Experts</ArrowButton>
        </div>
      </FadeUp>
    </section>
  );
}
