"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
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
import { useReducedMotion } from "motion/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

const AUTOPLAY_DURATION = 3000;
const total = benefitCards.length;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function AnalyticsBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [progressKey, setProgressKey] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else if (window.innerWidth < 1340) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleSlideChangeTransitionStart = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((prev) => prev + 1);
  };

  const start = activeIndex + 1;
  const end = Math.min(activeIndex + visibleCount, total);
  const counter =
    visibleCount > 1 && start !== end
      ? `${pad(start)}-${pad(end)}/${pad(total)}`
      : `${pad(start)}/${pad(total)}`;

  const animationStyle = reducedMotion
    ? { width: "0%" }
    : {
        animation: `benefitsLoader ${AUTOPLAY_DURATION}ms linear forwards`,
      };

  return (
    <section>
      {/* CSS keyframe for the progress bar */}
      <style>{`
        @keyframes benefitsLoader {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      {/* White header + Mobile Vertical Cards */}
      <div className="bg-white py-10 md:py-14">
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

        {/* Navigation controls — counter badge + prev/next arrows */}
        <div
          className="relative z-10 mb-5 flex items-center justify-end gap-4"
          style={{ paddingRight: containerPadding }}
        >
          {/* Counter pill with animated progress fill */}
          <span className="relative grid h-11 min-w-24 place-items-center overflow-hidden rounded-full border border-white/40 px-4 text-[14px] font-semibold shadow-sm">
            <span className="relative z-20 text-white">{counter}</span>
            <div
              key={progressKey}
              className="absolute inset-y-0 left-0 z-10 h-full bg-white/25"
              style={animationStyle}
            />
          </span>

          {/* Prev button */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous benefit"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/40 text-white transition hover:border-white hover:text-white"
          >
            <ArrowLeft className="size-5" strokeWidth={1.8} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next benefit"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/40 text-white transition hover:border-white hover:text-white"
          >
            <ArrowRight className="size-5" strokeWidth={1.8} />
          </button>
        </div>

        {/* Horizontally scrollable benefit cards via Swiper */}
        <div className="relative z-10 overflow-hidden pl-[max(20px,calc(50vw-650px))] pr-5">
          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
            loop={true}
            speed={500}
            spaceBetween={20}
            slidesPerView={"auto"}
            autoplay={
              reducedMotion
                ? false
                : {
                    delay: AUTOPLAY_DURATION,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            className="!overflow-visible"
          >
            {benefitCards.map((card) => {
              const Icon = card.icon;
              return (
                <SwiperSlide key={card.title} className="!w-[300px]">
                  <article className="flex h-[224px] w-[300px] shrink-0 flex-col transition-colors items-start gap-3 rounded-[12px] bg-white p-5 group">
                    <div className="flex size-10 items-center justify-center rounded-[8px] bg-[#011f40]/5 text-[#011f40] group-hover:bg-[#005EAD] transition-all duration-300">
                      <Icon className="size-5 group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                    </div>
                    <h3 className="text-base font-semibold text-[#000000]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-[150%] text-[#000000]">
                      {card.copy}
                    </p>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
