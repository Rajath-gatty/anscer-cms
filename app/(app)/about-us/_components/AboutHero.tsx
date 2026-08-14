import { FadeUp } from "@/app/(app)/components/animation";
import Image from "next/image";
import { imagePath } from "../../components/home/assets";

export function AboutHero() {
  return (
    <section className="relative h-[220px] overflow-hidden bg-[#011f40] text-white md:h-[720px] 3xl:h-[900px] 4xl:h-[1000px]">
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
        <div className="max-w-[680px] 3xl:max-w-[850px] 4xl:max-w-[1000px] md:pt-10">
          <FadeUp>
            <h1 className="max-w-[270px] text-[28px] font-bold leading-[1.08] text-white md:max-w-none md:text-[clamp(48px,4vw,80px)]">
              Powering What&rsquo;s Next, Today
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="mt-3 text-[9px] font-semibold leading-4 text-white/92 md:mt-6 md:text-[clamp(16px,0.8vw,30px)] 3xl:text-[clamp(20px,0.9vw,28px)] md:leading-[150%]">
              Built to transform industries. Driven by vision
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
