import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "../components/home/assets";
import { ScrollReveal } from "../components/home/ScrollReveal";
import {
  ExploreMoreSection,
  NavyButton,
  NewsletterSection,
} from "./NewsroomClient";

export const metadata: Metadata = {
  title: "Newsroom | ANSCER Robotics",
  description:
    "Explore our latest news, press releases, events, and business updates from ANSCER Robotics.",
};

const latestNews = {
  category: "LATEST NEWS",
  title: "Bengaluru-Based ANSCER Robotics Raises $2 Million in Seed Round",
  excerpt:
    "ANSCER Robotics, a Bengaluru-based autonomous mobile robot (AMR) startup, has successfully raised $2 million in a seed funding round led by IKP Eden. The funding will be used to scale its product portfolio and expand its market reach across India and Southeast Asia.",
  image: "1850236eda6ba48b3a4bfe7084528816a27e9c32.jpg",
};

export default function NewsroomPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      {/* ══ 1. HERO ════════════════════════════════════════════════════════ */}
      <section style={{ height: 580, position: "relative" }}>
        <Image
          src={`${imagePath}newsroom-final.jpeg`}
          alt="Newsroom hero"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Bottom-up dark gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(13deg, #000 0%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* Content anchored to bottom-left */}
        <div
          className="site-container"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingBottom: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 732,
              lineHeight: "110%",
            }}
          >
            <p
              className="hero-sub-heading"
              style={{
                fontSize: 16,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}
            >
              Newsroom
            </p>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 600,
                color: "#fff",
                margin: 0,
                lineHeight: "110%",
              }}
            >
              The Latest from Our Robotics Ecosystem
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "#fff",
                margin: 0,
              }}
            >
              Explore our latest news, press releases, events, and business
              updates.
            </p>
            <NavyButton href="#">Download media kit</NavyButton>
          </div>
        </div>
      </section>

      {/* ══ 2. LATEST NEWS ════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 56,
          paddingBottom: 56,
          background: "#fafafa",
        }}
      >
        <div className="site-container">
          <ScrollReveal>
            {/* 2-col layout: text | image */}
            <div
              className="latest-news-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                alignItems: "center",
              }}
            >
              {/* Left */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#005ead",
                    margin: 0,
                  }}
                >
                  {latestNews.category}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 600,
                    color: "#011f40",
                    margin: 0,
                    lineHeight: "120%",
                    overflowWrap: "anywhere" as const,
                  }}
                >
                  {latestNews.title}
                </h2>
                <p style={{ fontSize: 16, color: "#3a3a3a", margin: 0 }}>
                  {latestNews.excerpt}
                </p>
                {/* Desktop button */}
                <div className="latest-news-btn-desktop">
                  <NavyButton href="#">read now</NavyButton>
                </div>
              </div>

              {/* Right */}
              <div>
                <Image
                  src={`${imagePath}${latestNews.image}`}
                  alt={latestNews.title}
                  width={600}
                  height={400}
                  style={{
                    objectFit: "cover",
                    borderRadius: 12,
                    width: "100%",
                    height: 400,
                  }}
                />
              </div>
            </div>

            {/* Mobile read-now button */}
            <div className="latest-news-btn-mobile" style={{ marginTop: 24 }}>
              <NavyButton href="#">read now</NavyButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 3. EXPLORE MORE (client component for load-more) ══════════════ */}
      <ExploreMoreSection />

      {/* ══ 4. NEWSLETTER (client component for form) ═════════════════════ */}
      <NewsletterSection />

      {/* ══ 5. BANNER CTA ══════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: 580,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Blue colour-blend layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            mixBlendMode: "color",
            background: "#005ead",
          }}
        />
        {/* Dark semi-transparent overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 9,
            background: "rgba(0,0,0,0.8)",
          }}
        />
        {/* Background image */}
        <Image
          src={`${imagePath}f7334de79d3b0b0e61bc3d16b89c879619ad77fb.png`}
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="site-container"
          style={{ position: "relative", zIndex: 15, alignSelf: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 24,
              maxWidth: 970,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 60px)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: "110%",
                margin: 0,
              }}
            >
              Everything You Need to Tell Our Story
            </h2>
            <p
              style={{
                maxWidth: 850,
                color: "#fff",
                fontSize: 18,
                fontWeight: 500,
                lineHeight: "32px",
                margin: 0,
              }}
            >
              Official brand assets, company information, and press
              resources—all available in one convenient package.
            </p>
            <NavyButton href="#">Download media kit</NavyButton>
          </div>
        </div>
      </section>

      {/* Responsive helpers */}
      <style>{`
        .hero-sub-heading { display: block; }
        @media (max-width: 767px) {
          .hero-sub-heading { display: none !important; }
          .latest-news-btn-desktop { display: none !important; }
          .latest-news-btn-mobile { display: block !important; }
          .latest-news-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) {
          .latest-news-btn-desktop { display: block !important; }
          .latest-news-btn-mobile { display: none !important; }
        }
      `}</style>
    </main>
  );
}
