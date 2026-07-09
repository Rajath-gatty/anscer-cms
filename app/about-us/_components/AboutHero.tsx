import { FadeUp } from "@/app/components/animation";
import Image from "next/image";
import { imagePath } from "../../components/home/assets";

export function AboutHero() {
  return (
    <section className="relative h-[220px] overflow-hidden bg-[#011f40] text-white md:h-[720px]">
      <Image
        src={`${imagePath}Desktop---28.jpg`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_50%] md:object-[58%_50%]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(59deg,rgba(0,0,0,.82),rgba(0,0,0,.18)_66%,rgba(0,0,0,0))]" />
      <div className="site-container relative z-10 flex h-full items-end pb-8 md:items-center md:pb-0">
        <div className="max-w-[680px] md:pt-10">
          <FadeUp>
            <h1 className="max-w-[270px] text-[28px] font-bold leading-[1.08] text-white md:max-w-none md:text-[60px]">
              Powering What&rsquo;s Next, Today
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="mt-3 text-[9px] font-semibold leading-4 text-white/92 md:mt-6 md:text-lg md:leading-6">
              Built to transform industries. Driven by vision
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
