import Image from "next/image";
import { FadeRight } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function SoftwareCta() {
  return (
    <section className="relative flex h-[580px] items-center overflow-hidden bg-[#005ead] text-white max-[991px]:mt-5">
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
        <FadeRight className="flex max-w-[970px] flex-col items-start gap-6 max-[991px]:gap-2">
          <h2 className="max-w-[970px] text-[48px] font-semibold leading-[60px] text-white md:text-[60px] md:leading-[110%]">
            Experience automation that understands your operations.
          </h2>
          <p className="max-w-[850px] text-[14px] font-medium leading-5 text-white md:text-[18px] md:leading-8">
            Book your demo now and experience ANSCER in action.
          </p>
          <ArrowButton target="/contact-us" className="h-[46px] px-5">
            Book a demo
          </ArrowButton>
        </FadeRight>
      </div>
    </section>
  );
}
