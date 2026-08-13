import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function SoftwareCta() {
  return (
    <section className="relative flex h-[580px] 3xl:h-[720px] 4xl:h-[850px] items-center overflow-hidden bg-[#005ead] text-white max-[991px]:mt-5">
      <Image
        src={`${imagePath}Frame-1321317289.jpg`}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[#005ead] mix-blend-color" />
      <div className="absolute inset-0 z-10 bg-black/80" />
      <div className="site-container relative z-20">
        <FadeUp className="flex max-w-[970px] flex-col items-start gap-6 max-[991px]:gap-2">
          <h2 className="max-w-[970px] text-[48px] font-semibold leading-[60px] text-white md:text-[clamp(48px,4vw,80px)] md:leading-[110%]">
            Experience automation that understands your operations.
          </h2>
          <p className="max-w-[850px] text-sm leading-5 text-white md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
            Book your demo now and experience ANSCER in action.
          </p>
          <ArrowButton target="/contact-us" className="h-11.5 px-5">
            Book a demo
          </ArrowButton>
        </FadeUp>
      </div>
    </section>
  );
}
