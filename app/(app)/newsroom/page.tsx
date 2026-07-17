import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "../components/home/assets";
import { ScrollReveal } from "../components/home/ScrollReveal";
import {
  ExploreMoreSection,
  NavyButton,
  NewsletterSection,
} from "./NewsroomClient";
import { FadeUp } from "../components/animation";

export const metadata: Metadata = {
  title: "Newsroom | ANSCER Robotics",
  description:
    "Explore our latest news, press releases, events, and business updates from ANSCER Robotics.",
};

const latestNews = {
  category: "LATEST NEWS",
  title: "Join us at Automate 2026",
  excerpt:
    "Experience our cutting-edge automation solutions in person.",
  image: "events/automate-2026.png",
  link: "https://events.anscer.com/automate"
};

export default function NewsroomPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      {/* ══ 1. HERO ════════════════════════════════════════════════════════ */}
      <section className="h-[580px] relative">
        <Image
          src={`${imagePath}newsroom-final.jpeg`}
          alt="Newsroom hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Bottom-up dark gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(13deg,#000_0%,transparent_100%)] z-[1]" />

        {/* Content anchored to bottom-left */}
        <FadeUp className="site-container absolute inset-0 z-[2] flex flex-col justify-center items-start h-full pb-12">
          <div className="flex flex-col gap-6 max-w-[732px] leading-[110%]">
            <p className="hero-sub-heading hidden md:block text-[16px] font-medium uppercase tracking-[0.18em] text-[#005ead] m-0">
              Newsroom
            </p>
            <h1 className="text-[clamp(36px,5vw,60px)] font-semibold text-white m-0 leading-[110%]">
              The Latest from Our Robotics Ecosystem
            </h1>
            <p className="text-[18px] font-medium text-white m-0">
              Explore our latest news, press releases, events, and business
              updates.
            </p>
            <NavyButton href="#">Download media kit</NavyButton>
          </div>
        </FadeUp>
      </section>

      {/* ══ 2. LATEST NEWS ════════════════════════════════════════════════ */}
      <section className="py-14 bg-[#fafafa]">
        <div className="site-container">
          <FadeUp>
            {/* 2-col layout: text | image */}
            <div className="latest-news-grid grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Left */}
              <div className="flex flex-col gap-6">
                <p className="text-[16px] font-medium uppercase tracking-[0.18em] text-[#005ead] m-0">
                  {latestNews.category}
                </p>
                <h2 className="text-[clamp(24px,3vw,36px)] font-semibold text-[#011f40] m-0 leading-[120%] [overflow-wrap:anywhere]">
                  {latestNews.title}
                </h2>
                <p className="text-[16px] text-[#3a3a3a] m-0">
                  {latestNews.excerpt}
                </p>
                {/* Desktop button */}
                <div className="latest-news-btn-desktop hidden md:block">
                  <NavyButton href={latestNews.link}>read now</NavyButton>
                </div>
              </div>

              {/* Right */}
              <div>
                <Image
                  src={`${imagePath}${latestNews.image}`}
                  alt={latestNews.title}
                  width={600}
                  height={400}
                  className="object-cover rounded-xl w-full h-[400px]"
                />
              </div>
            </div>

            {/* Mobile read-now button */}
            <div className="latest-news-btn-mobile block md:hidden mt-6">
              <NavyButton href="#">read now</NavyButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ 3. EXPLORE MORE (client component for load-more) ══════════════ */}
      <ExploreMoreSection />

      {/* ══ 4. NEWSLETTER (client component for form) ═════════════════════ */}
      <NewsletterSection />

      {/* ══ 5. BANNER CTA ══════════════════════════════════════════════════ */}
      <section className="relative w-full h-[580px] flex overflow-hidden">
        {/* Blue colour-blend layer */}
        <div className="absolute inset-0 z-[10] mix-blend-color bg-[#005ead]" />
        {/* Dark semi-transparent overlay */}
        <div className="absolute inset-0 z-[9] bg-black/80" />
        {/* Background image */}
        <Image
          src={`${imagePath}f7334de79d3b0b0e61bc3d16b89c879619ad77fb.png`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center z-[1]"
        />

        {/* Content */}
        <div className="site-container relative z-[15] self-center">
          <FadeUp className="flex flex-col items-start gap-6 max-w-[870px]">
            <h2 className="text-[clamp(32px,4vw,60px)] font-semibold text-white leading-[110%] m-0">
              Everything You Need to Tell Our Story
            </h2>
            <p className="max-w-[850px] text-white text-[18px] font-medium leading-[32px] m-0">
              Official brand assets, company information, and press
              resources—all available in one convenient package.
            </p>
            <NavyButton href="#">Download media kit</NavyButton>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
