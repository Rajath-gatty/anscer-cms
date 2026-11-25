import Image from "next/image";
import { FadeUp } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import { ArrowButton } from "../../components/home/SectionPrimitives";

export function WarehouseHero() {
  return (
    <section className="relative min-h-[calc(100svh-60px)] overflow-hidden bg-[#011f40] text-white md:min-h-[calc(100svh-110px)]">
      <Image
        src={`${imagePath}warehouse/hero.png`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,31,64,.92)_0%,rgba(0,52,110,.72)_40%,rgba(0,60,125,.42)_100%)]" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-60px)] flex-col justify-center py-16 md:min-h-[calc(100svh-110px)]">
        <FadeUp>
          <h1 className="max-w-[14em] text-[40px] font-bold leading-[1.12] text-white md:text-[clamp(48px,4vw,80px)] md:leading-[1.15]">
            Automate Your Warehouse With Smarter Material Movement
          </h1>
          <p className="mt-5 max-w-[560px] text-sm font-medium leading-[1.5] text-[#fafafa] md:text-[clamp(16px,0.8vw,30px)] 3xl:max-w-[720px] 3xl:text-[clamp(20px,0.9vw,28px)] 4xl:max-w-[820px]">
            Autonomous mobile robots, pallet stackers and AGVs that move cases,
            pallets and trolleys across your warehouse.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ArrowButton target="/contact-us" className="h-[46px] px-5">
              Talk to an expert
            </ArrowButton>
            <ArrowButton
              target="#explore"
              className="h-[46px] bg-white px-5 text-[#011f40] hover:bg-[#edf6ff]"
            >
              Explore
            </ArrowButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
