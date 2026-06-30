"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BarChart2,
  CircleArrowLeft,
  CircleArrowRight,
  Code,
  ExternalLink,
  Eye,
  Gauge,
  Layers,
  Monitor,
  Network,
  RefreshCw,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { imagePath } from "../components/home/assets";

const benefitCards: { icon: LucideIcon; mobileIcon?: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Eye,
    mobileIcon: Layers,
    title: "Improved Operational Visibility",
    copy: "Gain real-time and historical insights into robot operations, fleet performance, and workflow efficiency.",
  },
  {
    icon: TrendingUp,
    mobileIcon: ExternalLink,
    title: "Data-Driven Optimization",
    copy: "Use operational analytics to identify bottlenecks, improve traffic flow, and optimize robot utilization.",
  },
  {
    icon: Gauge,
    mobileIcon: Network,
    title: "Increased Fleet Efficiency",
    copy: "Monitor utilization rates and mission trends to maximize robot productivity and reduce idle time.",
  },
  {
    icon: Zap,
    mobileIcon: Code,
    title: "Faster Issue Identification",
    copy: "Heatmaps and predictive alerts help quickly detect operational issues, congestion areas, and recurring system events.",
  },
  {
    icon: BarChart2,
    mobileIcon: Code,
    title: "Enhanced Decision Making",
    copy: "KPI dashboards and analytics reports support informed operational planning and continuous process improvement.",
  },
  {
    icon: Monitor,
    mobileIcon: Code,
    title: "Scalable Performance Monitoring",
    copy: "Analyze and manage performance across single or multi-site robotic deployments from a centralized platform.",
  },
  {
    icon: RefreshCw,
    mobileIcon: Code,
    title: "Continuous Improvement",
    copy: "Leverage historical operational data to refine workflows, improve system reliability, and enhance overall automation performance.",
  },
];

// site-container left edge: max(20px, (100vw - 1340px) / 2 + 20px) = max(20px, 50vw - 650px)
const containerPadding = "max(20px, calc(50vw - 650px))";

export function AnalyticsBenefitsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollLimits();

    const handleScroll = () => {
      checkScrollLimits();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {/* White header + Mobile Vertical Cards */}
      <div className="bg-white px-6 py-10 md:py-14">
        <div className="site-container">
          <p className="text-[12px] md:text-base font-medium uppercase tracking-[0.14em] text-[#005ead]">
            BENEFITS
          </p>
          <h2 className="mt-6 max-w-[648px] text-[28px] font-bold leading-[120%] text-[#011f40] md:text-4xl">
            Turning Operational Data Into Actionable Insights
          </h2>

          {/* ── MOBILE VERTICAL CARDS (< lg) ── */}
          <div className="mt-10 flex flex-col gap-3 lg:hidden">
            {benefitCards.map((card) => {
              const Icon = card.mobileIcon || card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col items-start gap-3 rounded-[12px] border border-[#005ead]/20 bg-white p-5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#011f40]/5 text-[#011f40]">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-base font-semibold text-[#000000]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[150%] text-[#000000]">
                    {card.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dark area with warehouse bg (Desktop >= lg only) */}
      <div className="relative hidden h-[600px] flex-col justify-end overflow-hidden bg-[#011f40] pb-[60px] lg:flex">
        {/* Warehouse background image */}
        <Image
          src={`${imagePath}783ae8688601ff1806be870305aedfcf9b385868.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/*
          Navigation arrows — in normal document flow, above the cards.
          Right-padded to match the right edge of the content.
        */}
        <div
          className="relative z-10 mb-5 flex justify-end gap-2"
          style={{ paddingRight: containerPadding }}
        >
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll benefits left"
            className="cursor-pointer text-white transition hover:text-white/80 disabled:opacity-35 disabled:cursor-not-allowed"
          >
            <CircleArrowLeft className="size-11" strokeWidth={1} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll benefits right"
            className="cursor-pointer text-white transition hover:text-white/80 disabled:opacity-35 disabled:cursor-not-allowed"
          >
            <CircleArrowRight className="size-11" strokeWidth={1} />
          </button>
        </div>

        {/* Horizontally scrollable benefit cards */}
        <div
          ref={scrollRef}
          className="relative z-10 flex gap-5 overflow-x-auto snap-x snap-mandatory"
          style={{
            paddingLeft: containerPadding,
            paddingRight: containerPadding,
            paddingBottom: "4px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {benefitCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex h-[224px] w-[300px] shrink-0 snap-start flex-col items-start gap-3 rounded-[12px] bg-white p-5"
              >
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#011f40]/5 text-[#011f40]">
                  <Icon className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="text-base font-semibold text-[#000000]">
                  {card.title}
                </h3>
                <p className="text-sm leading-[150%] text-[#000000]">
                  {card.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
