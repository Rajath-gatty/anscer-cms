import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function SolutionsCta() {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-[#005ead] py-16 text-white md:min-h-[clamp(480px,32vw,900px)]">
      {/* TODO: swap for the PSR/AR fleet lineup image from the design */}
      <Image
        src={`${imagePath}footer-banner-p-1600.png`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div className="absolute inset-0 z-20 bg-[#005ead] mix-blend-color" />
      <FadeUp className="site-container relative z-30 flex flex-col items-center text-center">
        <h2 className="max-w-[620px] text-[36px] font-semibold leading-tight text-white md:text-[clamp(44px,3.2vw,88px)] md:leading-[1.15] 3xl:max-w-[820px] 4xl:max-w-[1000px]">
          Ready to Automate Your Material Flow?
        </h2>
        <p className="mt-6 max-w-[680px] text-sm font-medium leading-6 text-white md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[900px] 3xl:text-[clamp(20px,0.9vw,28px)]">
          Discover the right robotic solution for your warehouse or
          manufacturing facility.
        </p>
        <ArrowButton target="/contact-us" className="mt-8 h-[46px] px-5">
          Book a demo
        </ArrowButton>
      </FadeUp>
    </section>
  );
}
