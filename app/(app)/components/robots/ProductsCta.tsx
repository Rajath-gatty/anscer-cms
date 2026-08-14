import Image from "next/image";
import { imagePath } from "../home/assets";
import Link from "next/link";
import { ArrowButton } from "../home/SectionPrimitives";
import { FadeUp } from "../animation";

export function ProductsCta() {
  return (
    <section className="relative overflow-hidden flex items-center py-20 text-white h-[500px] 3xl:h-[620px] 4xl:h-[750px] 3xl:py-20 4xl:py-28">
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
      <FadeUp className="site-container relative z-10">
        <h2 className="max-w-[970px] 3xl:max-w-[1100px] 4xl:max-w-[1300px] text-[48px] font-semibold leading-[60px] tracking-normal md:text-[clamp(48px,4vw,80px)] md:leading-[70px] lg:leading-[1.1]">
          Dive Into The Future Factory
        </h2>
        <p className="mt-4 max-w-[850px] 3xl:max-w-[1000px] 4xl:max-w-[1200px] text-[14px] font-medium leading-[20px] text-white/85 md:text-[clamp(16px,0.8vw,30px)] md:leading-[32px] 3xl:text-[clamp(20px,0.9vw,28px)]">
          Explore ANSCER&apos;s cutting-edge lineup: powerful, smart automation
          solutions engineered to transform your operations.
        </p>
        <ArrowButton
          target="/contact-us"
          className="mt-8 h-11 px-5"
        >
          Talk to our experts
        </ArrowButton>
      </FadeUp>
    </section>
  );
}
