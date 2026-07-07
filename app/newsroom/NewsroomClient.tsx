"use client";

import Image from "next/image";
import { useState } from "react";
import { imagePath } from "../components/home/assets";
import { ScrollReveal } from "../components/home/ScrollReveal";

/* ─── Data ─────────────────────────────────────────────────────────── */
const allArticles = [
  {
    id: 1,
    category: "Announcement",
    title: "Join us at Automate 2026",
    image: "events/automate-2026.png",
    link: "https://events.anscer.com/automate",
  },
  {
    id: 2,
    category: "Announcement",
    title: "Join us at IWS 2026",
    image: "events/iws-2026.png",
    link: "https://events.anscer.com/iws"
  },
  {
    id: 3,
    category: "Press Release",
    title: "ANSCER Robotics Expands AMR Fleet With New AR-Series Models",
    image: "events/series-a-funding.png",
    link: "https://manufacturing.economictimes.indiatimes.com/news/hi-tech/anscer-robotics-raises-5-4-million-in-series-a-led-by-ian-alpha-fund/131229847"
  },
  {
    id: 4,
    category: "Press Release",
    title: "SAP Labs India Unveils 2026 Startup Studio Cohort Focused on Enterprise AI and Deep-Tech Innovation",
    image: "article-images/image-4.avif",
    link: "https://theprint.in/ani-press-releases/sap-labs-india-unveils-2026-startup-studio-cohort-focused-on-enterprise-ai-and-deep-tech-innovation/2948992/"
  },
  {
    id: 5,
    category: "Case Study",
    title:"ANSCER's Real Play Isn’t Just Robots. It’s Overhauling the Entire Warehouse",
    image: "article-images/image-3.webp",
    link: "https://analyticsindiamag.com/deep-tech/anscers-real-play-isnt-just-robots-its-overhauling-the-entire-warehouse"
  },
  {
    id: 6,
    category: "Press Release",
    title: "ANSCER Robotics launches LBR500",
    image: "article-images/image-1.jpg",
    link: "https://www.engineering.com/anscer-robotics-launches-lbr500/"
  },
  {
    id: 7,
    category: "Press Release",
    title: "ANSCER Robotics Expands into the U.S. Market, Appointing Industry Veteran Mark Messina as CEO of Americas",
    image: "article-images/image-2.jpg",
    link: "https://www.prnewswire.com/news-releases/anscer-robotics-expands-into-the-us-market-appointing-industry-veteran-mark-messina-as-ceo-of-americas-302376136.html"
  },
];

const PAGE_SIZE = 3;

/* ─── Shared arrow icon ──────────────────────────────────────────────── */
function ArrowIcon({ dark = false }: { dark?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 30,
        height: 20,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33325 7.9987H12.6666M7.99992 12.6654L12.6666 7.9987L7.99992 3.33203"
          stroke={dark ? "#011f40" : "#fff"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ─── Blue CTA button (matches Webflow u-button: #005ead) ────────────── */
export function NavyButton({
  href,
  children,
  white,
}: {
  href: string;
  children: React.ReactNode;
  white?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        background: white
          ? hovered
            ? "rgba(255,255,255,0.9)"
            : "#fff"
          : "#005ead",
        backgroundImage:
          !white && hovered
            ? "linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05))"
            : undefined,
        color: white ? "#011f40" : "#fff",
        borderRadius: 3,
        padding: "13px 5px 13px 20px",
        fontSize: 12,
        fontWeight: 500,
        textTransform: "uppercase" as const,
        letterSpacing: "0.08em",
        textDecoration: "none",
        transition: "background-image 0.2s",
        width: "fit-content",
      }}
    >
      {children}
      <ArrowIcon dark={white} />
    </a>
  );
}

/* ─── Outline "Explore" link (matches Webflow u-button-2 article-btn) ── */
function ExploreLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        color: "#011f40",
        padding: "13px 5px 13px 0",
        fontSize: 13,
        fontWeight: 500,
        textDecoration: "none",
        textTransform: "uppercase" as const,
        letterSpacing: "0.06em",
      }}
    >
      Explore
      <ArrowIcon dark />
    </a>
  );
}

/* ─── Article card ───────────────────────────────────────────────────── */
function ArticleCard({ article }: { article: (typeof allArticles)[number] }) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image with border-radius (matches Webflow .image-74) */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/11",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <Image
          src={`${imagePath}${article.image}`}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          style={{ objectFit: "cover" }}
          className="h-[400px] object-top"
        />
      </div>

      {/* Content area (matches Webflow .div-block-281: height 146px, flex col) */}
      <div
        style={{
          height: 146,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 500,
            opacity: 0.5,
            color: "#363636",
            marginTop: 12,
            marginBottom: 0,
          }}
        >
          {article.category}
        </p>
        <div style={{ flex: "1 0 auto" }}>
          <h4
            style={{
              color: "#363636",
              fontSize: 16,
              fontWeight: 600,
              marginTop: 0,
              marginBottom: 0,
              overflowWrap: "break-word",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.title}
          </h4>
        </div>
        <ExploreLink href={article.link} />
      </div>
    </article>
  );
}

/* ─── Explore More section (client, for load-more state) ─────────────── */
export function ExploreMoreSection() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleArticles = allArticles.slice(0, visibleCount);
  const hasMore = visibleCount < allArticles.length;

  return (
    <section
      style={{
        paddingTop: 56,
        paddingBottom: 56,
        background: "#fafafa",
      }}
    >
      <div className="site-container">
        <ScrollReveal>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: 600,
              color: "#011f40",
              marginTop: 0,
              marginBottom: 8,
            }}
          >
            Explore More
          </h2>
          <p style={{ color: "#3a3a3a", fontSize: 16, margin: 0 }}>
            Access all news updates conveniently in a single location
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 56,
          }}
          className="articles-grid-responsive"
        >
          {visibleArticles.map((article) => (
            <ScrollReveal key={article.id}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <LoadMoreButton
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            />
          </div>
        )}
      </div>

      {/* Responsive CSS */}
      <style>{`
        .articles-grid-responsive {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 900px) {
          .articles-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .articles-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Load More button ──────────────────────────────────────────────── */
function LoadMoreButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#011f40" : "#005ead",
        color: "#fff",
        border: "none",
        borderRadius: 3,
        padding: "13px 24px",
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      Load more
    </button>
  );
}

/* ─── Newsletter section ─────────────────────────────────────────────── */
export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section
      style={{
        background: "#e6ebf0",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div
        className="site-container newsletter-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div>
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#005ead",
              marginBottom: 0,
            }}
          >
            Newsletter
          </p>
          <h3
            style={{
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: 600,
              color: "#011f40",
              marginTop: 24,
              marginBottom: 24,
              lineHeight: "110%",
            }}
          >
            Subscribe to our Newsletter
          </h3>
          <p style={{ fontSize: 16, color: "#3a3a3a", margin: 0 }}>
            Get latest updates from ANSCER
          </p>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <p
              style={{
                color: "#011f40",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Thank you! Your submission has been received!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="newsletter-form"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                style={{
                  flex: 1,
                  height: 46,
                  border: "1px solid #011f40",
                  borderRadius: 4,
                  padding: "16px 14px",
                  fontSize: 14,
                  color: "#011f40",
                  outline: "none",
                  background: "#fff",
                }}
              />
              <SubscribeButton />
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
          .newsletter-form {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .newsletter-form input {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

function SubscribeButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#011f40" : "#005EAD",
        color: "#fff",
        border: "none",
        borderRadius: 3,
        padding: "0 20px",
        height: 46,
        minWidth: 110,
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 0.2s",
      }}
    >
      Subscribe
    </button>
  );
}
