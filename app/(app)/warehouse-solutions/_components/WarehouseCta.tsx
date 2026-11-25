import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function WarehouseCta() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#011f40] py-16 text-white md:min-h-[clamp(360px,24vw,700px)]">
      <Image
        src={`${imagePath}warehouse/footer-banner.jpg`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_75%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,12,28,.88)_0%,rgba(1,18,40,.78)_60%,rgba(1,31,64,.62)_100%)]" />
      <FadeUp className="site-container relative z-10 flex flex-col items-center text-center">
        <h2 className="max-w-[560px] text-[36px] font-semibold leading-tight text-white md:text-[clamp(44px,2.8vw,88px)] md:leading-[1.15] 3xl:max-w-[820px] 4xl:max-w-[1000px]">
          Ready to Automate Your Warehouse?
        </h2>
        <p className="mt-6 max-w-[660px] text-sm leading-6 text-white/90 md:text-[clamp(16px,0.8vw,30px)] md:leading-[150%] 3xl:max-w-[900px] 3xl:text-[clamp(20px,0.9vw,28px)]">
          Every warehouse has different workflows, materials and operational
          priorities. ANSCER identifies where autonomous material movement
          creates the greatest value and builds an automation approach around
          your operation.
        </p>
        <ArrowButton
          target="/contact-us"
          className="mt-8 h-[40px] px-4 3xl:h-[46px] 3xl:px-5"
        >
          Talk to an expert
        </ArrowButton>
      </FadeUp>
    </section>
  );
}
