import Image from "next/image";
import { FadeUp } from "../animation";
import { imagePath, videoPath } from "./assets";
import { clientLogos } from "./home-data";

export function TrustSection() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-white pt-20 md:min-h-[790px] md:pt-24">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        poster={`${videoPath}clients-video_poster.0000000.jpg`}
      >
        <source src={`${videoPath}clients-video-new.mp4`} type="video/mp4" />
        <source src={`${videoPath}clients-video_webm.webm`} type="video/webm" />
      </video>
      <div className="absolute inset-0 " />
      <FadeUp className="site-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[36px] font-bold leading-tight tracking-tight md:text-[60px]">
            Engineered in India.
            <br />
            Trusted <span className="text-[#005ead]">Everywhere.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#4d4d4d] md:text-base">
            Born in India, for the world, we deliver precision-engineered
            automation trusted by industry leaders. Our homegrown innovation
            powers global performance with reliability, intelligence, and
            impact.
          </p>
        </div>
      </FadeUp>
      <div className="absolute inset-x-0 bottom-2 z-10 overflow-hidden py-3 md:bottom-3">
        <div className="logo-marquee flex w-max items-center gap-20 grayscale">
          {[...clientLogos, ...clientLogos, ...clientLogos].map(
            (logo, index) => (
              <Image
                key={`${logo}-${index}`}
                src={`${imagePath}${logo}`}
                alt=""
                width={210}
                height={82}
                className="h-16 w-auto object-contain md:h-20"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
