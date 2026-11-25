import { FadeUp } from "../../components/animation";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function ExpertCtaBanner() {
  return (
    <section className="bg-[#011f40] py-12 text-white md:py-14 3xl:py-20 4xl:py-24">
      <FadeUp className="site-container flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-[640px] text-[22px] font-semibold leading-[1.3] text-white md:text-[clamp(26px,1.6vw,52px)] 3xl:max-w-[900px] 4xl:max-w-[1100px]">
          Let&apos;s identify where autonomous material movement creates the
          most value for your operation.
        </h2>
        <ArrowButton
          target="/contact-us"
          className="h-[40px] shrink-0 bg-white px-4 text-[#011f40] hover:bg-[#edf6ff] 3xl:h-[46px] 3xl:px-5"
        >
          Talk to an expert
        </ArrowButton>
      </FadeUp>
    </section>
  );
}
