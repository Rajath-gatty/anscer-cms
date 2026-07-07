import Image from "next/image";
import { FadeRight } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function SoftwareHero() {
  return (
    <section className="relative min-h-[calc(100svh-60px)] overflow-hidden bg-[#011f40] text-white md:min-h-[calc(100svh-110px)]">
      <Image
        src={`${imagePath}Desktop---27.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,.86)_0%,rgba(0,0,0,.58)_42%,rgba(0,0,0,0)_86%)]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-60px)] items-center py-16 md:min-h-[calc(100svh-110px)]">
        <FadeRight className="max-w-[807px]">
          <h1 className="mt-4 max-w-[807px] text-[40px] font-bold leading-[1.12] text-white md:text-[60px] md:leading-[1.15]">
            Software That Understands Your Business, Not Just Your Robots
          </h1>
          <p className="mt-5 max-w-[680px] text-sm md:text-lg font-medium leading-[1.3] text-[#fafafa]">
            Robots move materials. Operations move businesses. ANSCER transforms
            business requests into autonomous execution through
            industry-specific business applications and configurable workflows.
          </p>
          <ArrowButton target="/contact-us" className="mt-8 h-[46px] px-5">
            Request demo
          </ArrowButton>
        </FadeRight>
      </div>
    </section>
  );
}
