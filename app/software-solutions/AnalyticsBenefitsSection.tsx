"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  BarChart2,
  ChevronLeft,
  ChevronRight,
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
      <div className="bg-white py-14">
        <div className="site-container">
          <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
            BENEFITS
          </p>
          <h2 className="mt-3 max-w-[480px] text-[30px] font-bold leading-tight text-[#011f40] md:text-4xl">
            Turning Operational Data Into Actionable Insights
          </h2>

          {/* ── MOBILE VERTICAL CARDS (< lg) ── */}
          <div className="mt-10 flex flex-col gap-4 lg:hidden">
            {benefitCards.map((card) => {
              const Icon = card.mobileIcon || card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-[#d6e0e8] bg-white p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded bg-[#f4f7fa] text-[#011f40]">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-[#011f40]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#333333]">
                    {card.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dark area with warehouse bg (Desktop >= lg only) */}
      <div className="relative hidden lg:block overflow-hidden bg-[#011f40] py-10">
        {/* Warehouse background image */}
        <Image
          src={`${imagePath}783ae8688601ff1806be870305aedfcf9b385868.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />

        {/*
          Navigation arrows — in normal document flow, above the cards.
          Left-padded to match the first card's left edge.
        */}
        <div
          className="relative z-10 mb-5 flex gap-2"
          style={{ paddingLeft: containerPadding }}
        >
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll benefits left"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll benefits right"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <ChevronRight className="size-5" />
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
                className="w-[260px] shrink-0 snap-start rounded-xl bg-white p-6 shadow-xl sm:w-[300px]"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#f4f7fa] text-[#005ead]">
                  <Icon className="size-[18px]" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#011f40]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#333333]">
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
