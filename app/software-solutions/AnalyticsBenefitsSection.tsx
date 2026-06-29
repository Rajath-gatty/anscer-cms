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
          <h2 className="mt-6 max-w-[648px] text-[28px] font-bold leading-[120%] text-[#011f40] md:text-[36px]">
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
                  <h3 className="text-[16px] font-semibold text-[#011f40]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[150%] text-[#333333]">
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
          Left-padded to match the first card's left edge.
        */}
        <div
          className="relative z-10 mb-5 flex gap-2"
          style={{ paddingLeft: containerPadding }}
        >
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll benefits left"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition hover:text-white/80"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll benefits right"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition hover:text-white/80"
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
                className="flex h-[224px] w-[300px] shrink-0 snap-start flex-col items-start gap-3 rounded-[12px] bg-white p-5"
              >
                <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#011f40]/5 text-[#011f40]">
                  <Icon className="size-5" strokeWidth={1.7} />
                </div>
                <h3 className="text-[16px] font-semibold text-[#011f40]">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[150%] text-[#333333]">
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
