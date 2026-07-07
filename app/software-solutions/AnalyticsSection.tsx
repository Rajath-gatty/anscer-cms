"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { imagePath } from "../components/home/assets";

/* ─── Slide data ────────────────────────────────────────────────────── */
interface Capability {
  title: string;
  copy: string;
  chipsIntro?: string;
  chips: string[];
  chipsOutro?: string;
  image: string;
}

const capabilities: Capability[] = [
  {
    title: "Utilization Reports",
    copy: "Monitor robot activity, operational efficiency, and fleet performance through detailed utilization reports. The platform provides visibility into robot active time, idle time, mission execution, and utilization rates to help maximize fleet productivity.",
    chipsIntro: "",
    chips: [] as string[],
    image: "0a650615d6addc613e5e73d23c9a69411bf9f542.png",
  },
  {
    title: "KPI Dashboards",
    copy: "Access centralized dashboards that display critical operational metrics and performance indicators in real time.",
    chipsIntro: "Key analytics include:",
    chips: [
      "Request success rate",
      "Mission volume",
      "Robot utilization rate",
      "Active stations and stores",
      "Fleet performance trends",
      "Operational efficiency metrics",
    ],
    image: "Group-1321315891.png",
  },
  {
    title: "Request Overview Analytics",
    copy: "Analyze all mission and transport requests generated across stations, production areas, and storage locations.",
    chipsIntro: "The Request Overview module provides detailed insights into:",
    chipsOutro:
      "This data enables operators to identify operational patterns and optimize material flow processes.",
    chips: [
      "Total request volume",
      "Completed and failed requests",
      "Success rates",
      "High-demand stations and stores",
      "Workflow activity trends",
    ],
    image: "Group-1321315892.png",
  },
  {
    title: "Heatmaps",
    copy: "Visualize operational incidents and traffic patterns across facility maps using intelligent heatmap analytics. The Heatmap module helps identify high-activity and high-risk areas within the facility by displaying:",
    chipsIntro: "",
    chips: [
      "Emergency stop locations",
      "Robot errors",
      "Traffic congestion zones",
      "Connection interruptions",
      "Navigation bottlenecks",
    ],
    image: "Group-1321315893.png",
  },
  {
    title: "Predictive Alerts",
    copy: "Receive proactive notifications and predictive alerts related to robot performance, traffic congestion, operational anomalies, and potential system issues. Predictive insights help reduce downtime and improve operational continuity.",
    chipsIntro: "",
    chips: [] as string[],
    image: "Group-1321315894.png",
  },
  {
    title: "Historical Data Filtering",
    copy: "Filter analytics and operational reports based on custom date ranges, robots, locations, missions, or event types to support detailed performance analysis and reporting.",
    chipsIntro: "",
    chips: [] as string[],
    image: "Group-1321315895.png",
  },
];

/* ─── Animation constants ────────────────────────────────────────────── */
const BG = "linear-gradient(12deg, #c9d6e3 0%, #e6ebf0 100%)";
const PIN_TOP = 160;
const PIN_SCROLL_SCREENS = 14;
const TIMELINE_DURATION = 24;

const TABLET_SHIFT = 250; // px rightward for even, leftward for odd
const CONTENT_SHIFT = 300; // px leftward for even, rightward for odd

const clamp = (v: number, lo = 0, hi = 1) => Math.min(Math.max(v, lo), hi);
const ease = (t: number) => 0.5 - Math.cos(clamp(t) * Math.PI) / 2;

function getState(progress: number) {
  const time = clamp(progress) * TIMELINE_DURATION;

  // ── Intro (0 → 2 s): tablet rises from below, content invisible ──
  if (time < 2) {
    const t = clamp(time / 1.5);
    return {
      tabletX: 0,
      tabletY: 100 - 100 * ease(t),
      tabletScale: 1.5 - 0.5 * ease(t),
      tabletOp: ease(t),
      contentOp: 0,
      contentX: 0,
      slideIndex: 0,
      imageIndex: 0,
    };
  }

  // ── Zigzag slides ─────────────────────────────────────────────────
  let cursor = 2;

  for (let i = 0; i < capabilities.length; i++) {
    const isLast = i === capabilities.length - 1;
    const segLen = isLast ? 2.5 : 4;
    const local = time - cursor;
    if (local < 0) break;

    if (local <= segLen || isLast) {
      const isEven = i % 2 === 0;
      const tgtTabletX = isEven ? TABLET_SHIFT : -TABLET_SHIFT;
      const tgtContentX = isEven ? -CONTENT_SHIFT : CONTENT_SHIFT;

      // Phase 1 – slide out from centre (0 → 1.5 s)
      if (local <= 1.5) {
        const e = ease(local / 1.5);
        return {
          tabletX: tgtTabletX * e,
          tabletY: 0,
          tabletScale: 1,
          tabletOp: 1,
          contentOp: e,
          contentX: tgtContentX * e,
          slideIndex: i,
          imageIndex: i,
        };
      }

      // Phase 2 – hold (1.5 → 2.5 s)
      if (local <= 2.5 || isLast) {
        return {
          tabletX: tgtTabletX,
          tabletY: 0,
          tabletScale: 1,
          tabletOp: 1,
          contentOp: 1,
          contentX: tgtContentX,
          slideIndex: i,
          imageIndex: i,
        };
      }

      // Phase 3 – return to centre (2.5 → 4 s)
      const e = ease((local - 2.5) / 1.5);
      return {
        tabletX: tgtTabletX * (1 - e),
        tabletY: 0,
        tabletScale: 1,
        tabletOp: 1,
        contentOp: 1 - e,
        contentX: tgtContentX * (1 - e),
        slideIndex: i,
        imageIndex: local >= 3.9 ? i + 1 : i,
      };
    }

    cursor += segLen;
  }

  const last = capabilities.length - 1;
  const isLastEven = last % 2 === 0;
  return {
    tabletX: isLastEven ? TABLET_SHIFT : -TABLET_SHIFT,
    tabletY: 0,
    tabletScale: 1,
    tabletOp: 1,
    contentOp: 1,
    contentX: isLastEven ? -CONTENT_SHIFT : CONTENT_SHIFT,
    slideIndex: last,
    imageIndex: last,
  };
}

/* ─── Component ─────────────────────────────────────────────────────── */
export function AnalyticsSection() {
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const zone = scrollZoneRef.current;
    if (!zone) return;
    const scrollRoom = window.innerHeight * PIN_SCROLL_SCREENS;

    // Prefer the header position so the animation starts when the first
    // text becomes visible. Fallback to the scroll zone rect if header
    // is not found.
    const header = headerRef.current;
    if (header) {
      const rect = header.getBoundingClientRect();
      setProgress(clamp((window.innerHeight - rect.top) / scrollRoom));
      return;
    }

    const rect = zone.getBoundingClientRect();
    setProgress(clamp((PIN_TOP - rect.top) / scrollRoom));
  }, []);

  useEffect(() => {
    const tick = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  const s = getState(progress);
  const cap = capabilities[s.slideIndex];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          DESKTOP (lg+) – sticky scroll animation
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="hidden lg:block pb-10"
        style={{ background: BG }}
        ref={scrollZoneRef}
      >
        {/* Section header */}
        <div className="site-container py-14" ref={headerRef}>
          <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            Key Capabilities
          </p>
          <h2 className="mt-3 max-w-[680px] text-[30px] font-bold leading-tight text-[#011f40] md:text-[36px]">
            Turning Industry Workflows Into Autonomous Operations
          </h2>
        </div>

        {/* Scroll room */}
        <div
          className="relative"
          style={{
            height: `calc(${PIN_SCROLL_SCREENS * 100}vh + 70vh)`,
          }}
        >
          {/* Sticky stage */}
          <div
            className="sticky w-full"
            style={{ top: PIN_TOP, height: "70vh", overflow: "visible" }}
          >
            <div className="site-container relative h-full">
              {/* ── Content panel (Always Left Aligned) ────────────────────────────────── */}
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 w-[380px] text-left"
                style={{
                  opacity: s.contentOp,
                  transform: `translate(calc(-50% + ${s.contentX}px), -50%)`,
                  willChange: "transform, opacity",
                }}
              >
                <h3 className="text-[22px] font-bold leading-snug text-[#011f40] xl:text-[26px]">
                  {cap.title}
                </h3>
                <p className="mt-3 text-base leading-[1.6] text-brand-charcoal">
                  {cap.copy}
                </p>
                {cap.chips.length > 0 && (
                  <div className="mt-4">
                    {cap.chipsIntro && (
                      <p className="mb-3 text-base leading-snug text-brand-charcoal">
                        {cap.chipsIntro}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 justify-start">
                      {cap.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full text-xs md:text-sm bg-white px-3 py-1.5  leading-none text-[#011f40] shadow-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    {cap.chipsOutro && (
                      <p className="mt-3 text-base leading-snug text-brand-charcoal">
                        {cap.chipsOutro}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ── Tablet frame + images ─────────────────────────── */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: 600,
                  overflow: "hidden",
                  opacity: s.tabletOp,
                  transform: `translate(calc(-50% + ${s.tabletX}px), calc(-50% + ${s.tabletY}%)) scale(${s.tabletScale})`,
                  transformOrigin: "center center",
                  willChange: "transform, opacity",
                }}
              >
                <div className="relative" style={{ aspectRatio: "1396/1108" }}>
                  {capabilities.map((c, idx) => (
                    <Image
                      key={c.title}
                      src={`${imagePath}${c.image}`}
                      alt={c.title}
                      fill
                      priority={idx === 0}
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 1800px"
                      className="rounded-[27px] object-cover transition-all duration-300"
                      style={{ opacity: s.imageIndex === idx ? 1 : 0 }}
                    />
                  ))}
                  <Image
                    src={`${imagePath}Tabletframe.png`}
                    alt=""
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 1800px"
                    className="pointer-events-none object-contain"
                    style={{ zIndex: 2 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MOBILE / TABLET fallback (< lg)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 lg:hidden" style={{ background: BG }}>
        <div className="site-container">
          <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            Key Capabilities
          </p>
          <h2 className="mb-12 max-w-[680px] text-[28px] font-bold leading-tight text-[#011f40]">
            Turning Industry Workflows Into Autonomous Operations
          </h2>

          <div className="space-y-16">
            {capabilities.map((c) => (
              <article
                key={c.title}
                className="mx-auto flex max-w-[560px] flex-col items-center"
              >
                <div
                  className="relative w-4/5 overflow-hidden rounded-[26px] max-[479px]:rounded-[12px]"
                  style={{ aspectRatio: "1239/956" }}
                >
                  <Image
                    src={`${imagePath}${c.image}`}
                    alt={c.title}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 80vw, 560px"
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-6 text-center text-base font-bold text-[#011f40] md:text-[24px]">
                  {c.title}
                </h3>
                <p className="mt-3 text-center text-base leading-[1.7] text-[#333333] md:text-[15px]">
                  {c.copy}
                </p>

                {c.chips.length > 0 && (
                  <div className="mt-5 flex w-full flex-col items-center">
                    {c.chipsIntro && (
                      <p className="mb-3 text-center text-[13px] font-semibold text-[#011f40]">
                        {c.chipsIntro}
                      </p>
                    )}
                    <div className="flex flex-wrap justify-center gap-2">
                      {c.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#011f40] shadow-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    {c.chipsOutro && (
                      <p className="mt-3 text-center text-sm leading-[1.7] text-brand-charcoal">
                        {c.chipsOutro}
                      </p>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
