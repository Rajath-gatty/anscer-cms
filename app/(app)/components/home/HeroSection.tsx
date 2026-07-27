import { FadeUp } from "../animation";
import { videoPath } from "./assets";
import { ArrowButton } from "./SectionPrimitives";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#011f40] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={`${videoPath}home-hero-section_poster.0000000.jpg`}
      >
        <source
          src={`${videoPath}home-hero-section_mp4.mp4`}
          type="video/mp4"
        />
        <source
          src={`${videoPath}home-hero-section_webm.webm`}
          type="video/webm"
        />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,20,40,.74)_0%,rgba(1,20,40,.44)_48%,rgba(1,20,40,.16)_100%)]" />
      <FadeUp className="site-container relative z-10">
        <h1 className="max-w-4xl text-[48px] font-bold leading-[1.06] tracking-tight md:text-[60px]">
          Automate Smarter With ANSCER
          {/* <span className="block">Lead the future with ANSCER</span> */}
        </h1>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-white/88 md:text-[18px]">
          Join the robotics revolution, where innovation meets execution.
        </p>
        <div className="mt-8">
          <ArrowButton target="#client-section">Explore ANSCER</ArrowButton>
        </div>
      </FadeUp>
    </section>
  );
}
