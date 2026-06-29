"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { imagePath } from "../components/home/assets";

const capabilities = [
  {
    title: "Utilization Reports",
    copy: "Monitor robot activity, operational efficiency, and fleet performance through detailed utilization reports. This platform presents visibility into active time, idle time, mission execution, and utilization rates to maximize fleet productivity.",
    chips: [],
    image: "0a650615d6addc613e5e73d23c9a69411bf9f542.png.jpg",
  },
  {
    title: "KPI Dashboards",
    copy: "Access centralized dashboards that display critical operational metrics and performance indicators in real time.",
    chipsIntro: "Key analytics include:",
    chips: ["Request success rate", "Mission volume", "Robot utilization rate", "Active station & stores", "Fleet performance trends", "Operational efficiency metrics"],
    image: "Group-1321315891.jpg",
  },
  {
    title: "Request Overview Analytics",
    copy: "Analyze all mission and transport requests generated across stations, production areas, and storage locations.",
    chipsIntro: "The Request Overview module provides detailed insights into:",
    chips: ["Total request volume", "Completed & failed requests", "Success rates", "High-demand stations and areas", "Workflow activity trends"],
    image: "Group-1321315892.jpg",
  },
  {
    title: "Heatmaps",
    copy: "Visualize operational incidents and traffic patterns across facility maps using intelligent heatmap analytics. This feature provides visibility into high-activity and high-risk zones while monitoring facility traffic.",
    chips: ["Emergency stop locations", "Robot errors", "Traffic congestion zones", "Connection interruptions", "Navigation bottlenecks"],
    image: "Group-1321315893.jpg",
  },
  {
    title: "Predictive Alerts",
    copy: "Receive proactive notifications related to robot performance, traffic congestion, operational anomalies, and potential system issues. Actionable insights help reduce downtime and improve operational continuity.",
    chips: [],
    image: "Group-1321315894.jpg",
  },
  {
    title: "Historical Data Filtering",
    copy: "Filter analytics and operational reports based on custom date ranges, robots, locations, missions, or event types to support deep analysis and reporting.",
    chips: [],
    image: "Group-1321315895.jpg",
  },
];

const SLIDE_HEIGHT = 800;
const BG = "linear-gradient(150deg, #c9d6e3 0%, #e6ebf0 100%)";

export function AnalyticsSection() {
  const stickyZoneRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    const zone = stickyZoneRef.current;
    if (!zone) return;
    const rect = zone.getBoundingClientRect();
    const scrolled = -rect.top;
    const totalScrollable = zone.offsetHeight - window.innerHeight;
    if (scrolled < 0) { setActiveIndex(-1); return; }
    const clamped = Math.min(scrolled, totalScrollable);
    const idx = Math.min(
      Math.floor((clamped / totalScrollable) * capabilities.length),
      capabilities.length - 1
    );
    setActiveIndex(idx);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <>
      {/* ── HEADER: empty background state (Desktop only) ── */}
      <div style={{ background: BG }} className="hidden lg:block py-20 lg:py-28">
        <div className="site-container">
          <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            KEY CAPABILITIES
          </p>
          <h2 className="mt-3 max-w-[680px] text-[30px] font-bold leading-tight text-[#011f40] md:text-[36px]">
            Turning Industry Workflows Into Autonomous Operations
          </h2>
        </div>
      </div>

      {/* ── STICKY SCROLL ZONE — Desktop only ── */}
      <div
        ref={stickyZoneRef}
        className="relative hidden lg:block"
        style={{ height: `${capabilities.length * SLIDE_HEIGHT}px`, background: BG }}
      >
        {/* Sticky pin: full viewport, content absolutely centered */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ paddingTop: "var(--navbar-h, 60px)" }}
          >
            {/* Fixed-size stage so absolute children fill a known height */}
            <div
              className="relative w-full max-w-[1220px] px-10"
              style={{ height: "clamp(420px, 70vh, 600px)" }}
            >
              {capabilities.map((cap, index) => {
                const isActive = index === activeIndex;
                // even index → text left, tablet right; odd → tablet left, text right
                const textLeft = index % 2 === 0;

                // Text slides in from bottom + opposite X direction to where it sits
                const textOffX = textLeft ? 70 : -70;
                // Tablet settles offset to its side when active
                const tabletX = textLeft ? "9%" : "-9%";

                return (
                  <div
                    key={cap.title}
                    className="absolute inset-0 flex items-center"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.35s ease",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className={`flex w-full items-center gap-14 ${textLeft ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                      {/* ── TEXT (no card, plain on background) ── */}
                      <div
                        className="w-[400px] shrink-0"
                        style={{
                          transform: isActive
                            ? "translate(0px, 0px)"
                            : `translate(${textOffX}px, 50px)`,
                          opacity: isActive ? 1 : 0,
                          transition: isActive
                            ? "transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.55s ease"
                            : "none",
                        }}
                      >
                        <p className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#005ead]">
                          {String(index + 1).padStart(2, "0")} / {String(capabilities.length).padStart(2, "0")}
                        </p>
                        <h3 className="mt-4 text-[24px] font-bold leading-snug text-[#011f40]">
                          {cap.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-[1.75] text-[#333333]">
                          {cap.copy}
                        </p>
                        {cap.chips.length > 0 && (
                          <div className="mt-6">
                            {cap.chipsIntro && (
                              <p className="mb-2 text-[13px] font-semibold text-[#011f40]">
                                {cap.chipsIntro}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {cap.chips.map((chip) => (
                                <span
                                  key={chip}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-[#005ead]/25 bg-white/50 px-3.5 py-1.5 text-[11px] font-semibold text-[#005ead] backdrop-blur-sm"
                                >
                                  <CheckCircle2 className="size-3" strokeWidth={2.5} />
                                  {chip}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ── TABLET FRAME ── */}
                      <div
                        className="flex-1"
                        style={{
                          transform: isActive
                            ? `translateX(${tabletX})`
                            : "translateX(0px)",
                          transition: isActive
                            ? "transform 0.85s cubic-bezier(0.16,1,0.3,1)"
                            : "transform 0.3s ease",
                        }}
                      >
                        <div
                          className="relative mx-auto w-full overflow-hidden rounded-[28px] bg-[#1c1c2e] p-[10px] shadow-[0_40px_100px_-20px_rgba(1,31,64,0.45)]"
                          style={{ maxWidth: 560, aspectRatio: "4/3" }}
                        >
                          {/* Status bar */}
                          <div className="mb-1 flex items-center justify-between px-3 pb-1 text-[10px] font-medium text-white/50">
                            <span>10:42 AM</span>
                            <div className="flex gap-3">
                              <span>WiFi</span>
                              <span>100%</span>
                            </div>
                          </div>
                          {/* Screen */}
                          <div className="relative overflow-hidden rounded-[18px] bg-white" style={{ height: "calc(100% - 26px)" }}>
                            {capabilities.map((c, ci) => (
                              <div
                                key={c.title}
                                className="absolute inset-0"
                                style={{
                                  opacity: activeIndex === ci ? 1 : 0,
                                  transition: "opacity 0.4s ease",
                                }}
                              >
                                <Image
                                  src={`${imagePath}${c.image}`}
                                  alt={c.title}
                                  fill
                                  priority={ci === 0}
                                  sizes="560px"
                                  className="object-contain p-2"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Progress dots */}
              <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-2.5">
                {capabilities.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-[5px] rounded-full transition-all duration-400 ${activeIndex === idx
                        ? "w-8 bg-[#005ead]"
                        : "w-[5px] bg-[#005ead]/25"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE fallback ── */}
      <div className="lg:hidden py-14" style={{ background: BG }}>
        <div className="site-container">
          <p className="mb-2 text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            KEY CAPABILITIES
          </p>
          <h2 className="mb-12 max-w-[680px] text-[26px] font-bold leading-tight text-[#011f40]">
            Turning Industry Workflows Into Autonomous Operations
          </h2>
          <div className="space-y-16">
            {capabilities.map((cap) => (
              <article key={cap.title} className="flex flex-col items-center max-w-[560px] mx-auto">
                {/* Tablet Frame */}
                <div
                  className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#1c1c2e] p-[8px] sm:p-[10px] shadow-[0_20px_50px_-10px_rgba(1,31,64,0.35)]"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Status bar */}
                  <div className="mb-1 flex items-center justify-between px-3 pb-1 text-[10px] font-medium text-white/50">
                    <span>10:42 AM</span>
                    <div className="flex gap-3">
                      <span>WiFi</span>
                      <span>100%</span>
                    </div>
                  </div>
                  {/* Screen */}
                  <div className="relative overflow-hidden rounded-[16px] sm:rounded-[18px] bg-white" style={{ height: "calc(100% - 24px)" }}>
                    <Image
                      src={`${imagePath}${cap.image}`}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-[22px] sm:text-[24px] font-bold text-[#011f40] text-center">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.7] text-[#333333] text-center">
                  {cap.copy}
                </p>

                {cap.chips && cap.chips.length > 0 && (
                  <div className="mt-5 flex flex-col items-center w-full">
                    {cap.chipsIntro && (
                      <p className="mb-3 text-[13px] font-semibold text-[#011f40] text-center">
                        {cap.chipsIntro}
                      </p>
                    )}
                    <div className="flex flex-wrap justify-center gap-2">
                      {cap.chips.map((chip) => (
                        <span
                          key={chip}
                          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#011f40] shadow-sm"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
