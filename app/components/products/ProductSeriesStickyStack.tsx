"use client";

import { ArrowRight } from "lucide-react";
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { imagePath } from "../home/assets";

const seriesCards = [
  {
    index: "01",
    title: "PSR Series",
    copy: "Our PSR series automates pallet stacking, pallet transport, and trolley movement for warehouse automation for improved inventory visibility, operational efficiency, productivity, and intralogistics performance.",
    tags: ["Stacking", "G2G"],
    backgroundImage: "psr-main.png",
    href: "/psr-series",
    marker: "PSR",
  },
  {
    index: "02",
    title: "AR Series",
    copy: "Our AR Series automates diverse applications through one platform and multiple top modules.",
    tags: ["Tugging", "Lifting", "Tunneling"],
    backgroundImage: "PSR-Series.jpg",
    href: "/ar-series",
    marker: "AR",
  },
  {
    index: "03",
    title: "AGV Series",
    copy: "Our AGV Series streamlines point-to-point material transport through compact, QR-guided automation.",
    tags: ["Lifting", "Sorting"],
    backgroundImage: "AGV.jpg",
    href: "/agv-series",
    marker: "AGV",
  },
];

export function ProductSeriesStickyStack() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 60px", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 42,
    mass: 0.22,
    stiffness: 360,
  });
  const panelProgress = useTransform(
    smoothProgress,
    [0, 1],
    [0, seriesCards.length - 1],
  );

  useMotionValueEvent(
    reduceMotion ? scrollYProgress : smoothProgress,
    "change",
    (latest) => {
      setActiveIndex(
        Math.min(
          Math.floor(latest * (seriesCards.length - 1) + 0.5),
          seriesCards.length - 1,
        ),
      );
    },
  );

  if (reduceMotion) {
    return (
      <section className="bg-[#fafafa]">
        {seriesCards.map((series) => (
          <SeriesPanel
            key={series.title}
            series={series}
            activeIndex={0}
            index={0}
            progress={0}
            staticMode
          />
        ))}
      </section>
    );
  }

  return (
    <section
      ref={wrapperRef}
      className="relative hidden h-[240vh] bg-[#fafafa] lg:block"
    >
      <div className="sticky top-[60px] h-[calc(100vh-60px)] min-h-[720px] overflow-hidden">
        <div className="absolute inset-0">
          {seriesCards.map((series, index) => (
            <AnimatedSeriesPanel
              key={series.title}
              series={series}
              index={index}
              activeIndex={activeIndex}
              progress={panelProgress}
            />
          ))}
        </div>
        <SeriesRail activeIndex={activeIndex} />
      </div>
    </section>
  );
}

export function ProductSeriesStaticMobile() {
  return (
    <section className="bg-[#fafafa] lg:hidden">
      {seriesCards.map((series) => (
        <SeriesPanel
          key={series.title}
          series={series}
          activeIndex={0}
          index={0}
          progress={0}
          staticMode
        />
      ))}
    </section>
  );
}

function SeriesPanel({
  series,
  index,
  activeIndex,
  progress,
  staticMode = false,
}: {
  series: (typeof seriesCards)[number];
  index: number;
  activeIndex: number;
  progress: number;
  staticMode?: boolean;
}) {
  const relative = index - progress;
  const translateY = staticMode
    ? 0
    : Math.max(Math.min(relative * 100, 100), 0);

  return (
    <article
      className={`${staticMode ? "relative" : "absolute inset-0"} overflow-hidden bg-[#fafafa]`}
      style={
        staticMode
          ? undefined
          : {
              transform: `translateY(${translateY}%)`,
              zIndex: index + 1,
            }
      }
      aria-hidden={!staticMode && activeIndex !== index}
    >
      <div className="absolute inset-0">
        <Image
          src={`${imagePath}${series.backgroundImage}`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,250,1),rgba(250,250,250,.42)_40%,rgba(250,250,250,0))]" />
        <div className="absolute w-[180px] bottom-0 right-0 h-full bg-[linear-gradient(90deg,rgba(250,250,250,0),rgba(250,250,250,.6)_75%,rgba(250,250,250,1)_100%)]" />
        {/* <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(250,250,250,.2),rgba(250,250,250,0))]" /> */}
      </div>
      <div className="site-container relative z-10 grid min-h-[720px] items-center py-16 lg:min-h-[calc(100vh-60px)]">
        <div className="max-w-[455px]">
          <p className="text-xs font-semibold text-[#005ead]">{series.index}</p>
          <h2 className="mt-5 text-[28px] font-bold tracking-tight md:text-[36px]">
            {series.title}
          </h2>
          <p className="mt-4 max-w-[430px] text-sm leading-5 text-[#4b5563] md:text-base md:leading-6">
            {series.copy}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {series.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-[#011f40] md:text-base"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={series.href}
            className="mt-6 inline-flex h-10 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-[14px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
          >
            Explore{" "}
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

function AnimatedSeriesPanel({
  series,
  index,
  activeIndex,
  progress,
}: {
  series: (typeof seriesCards)[number];
  index: number;
  activeIndex: number;
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, (latest) => {
    const relative = index - latest;
    return `${Math.max(Math.min(relative * 100, 100), 0)}%`;
  });

  return (
    <motion.article
      className="absolute inset-0 overflow-hidden bg-[#fafafa]"
      style={{ y, zIndex: index + 1 }}
      aria-hidden={activeIndex !== index}
    >
      <PanelContent series={series} />
    </motion.article>
  );
}

function PanelContent({ series }: { series: (typeof seriesCards)[number] }) {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src={`${imagePath}${series.backgroundImage}`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,250,1),rgba(250,250,250,.8)_40%,rgba(250,250,250,0)_80%,rgba(250,250,250,0))]" />
        <div className="absolute bottom-0 right-0 h-full w-[240px] bg-[linear-gradient(90deg,rgba(250,250,250,0),rgba(250,250,250,.8)_75%,rgba(250,250,250,1)_100%)]" />
      </div>
      <div className="site-container relative z-10 grid min-h-[720px] items-center py-16 lg:min-h-[calc(100vh-60px)]">
        <div className="max-w-[455px]">
          <p className="text-xs font-semibold text-[#005ead]">{series.index}</p>
          <h2 className="mt-5 text-[36px] font-bold tracking-tight">
            {series.title}
          </h2>
          <p className="mt-4 max-w-[430px] text-base leading-6 text-[#4b5563]">
            {series.copy}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {series.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white px-3 py-1.5 text-base font-semibold text-[#011f40]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={series.href}
            className="mt-6 inline-flex h-10 items-center gap-3 rounded-sm bg-[#005ead] px-4 text-[14px] font-bold uppercase tracking-wide text-white transition hover:bg-[#014f91]"
          >
            Explore{" "}
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </>
  );
}

function SeriesRail({ activeIndex }: { activeIndex: number }) {
  const ringOffset = activeIndex * 56;

  return (
    <div className="absolute top-1/2 right-3 z-30 hidden h-[137px] w-[68px] -translate-y-1/2 lg:block">
      <svg
        width="68"
        height="137"
        viewBox="0 0 68 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Series progress"
      >
        <rect
          x="1"
          y="1.332"
          width="22"
          height="22"
          rx="11"
          stroke="#005EAD"
          strokeWidth="2"
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${ringOffset}px)` }}
        />
        <SeriesRailItem
          active={activeIndex === 0}
          circleY={12.332}
          label="PSR"
        />
        <path
          opacity={activeIndex >= 1 ? 1 : 0.3}
          d="M12 52.332V28.332"
          stroke="#005EAD"
          strokeWidth="2"
        />
        <SeriesRailItem
          active={activeIndex === 1}
          circleY={68.332}
          label="AR"
        />
        <path
          opacity={activeIndex >= 2 ? 1 : 0.3}
          d="M12 108.332V84.332"
          stroke="#005EAD"
          strokeWidth="2"
        />
        <SeriesRailItem
          active={activeIndex === 2}
          circleY={124.332}
          label="AGV"
        />
      </svg>
    </div>
  );
}

function SeriesRailItem({
  active,
  circleY,
  label,
}: {
  active: boolean;
  circleY: number;
  label: "PSR" | "AR" | "AGV";
}) {
  return (
    <g>
      <circle
        opacity={active ? 1 : 0.3}
        cx="12"
        cy={circleY}
        r="3.66667"
        fill="#005EAD"
        stroke="#005EAD"
        strokeWidth="0.666667"
      />
      <text
        x="29"
        y={circleY + 5.5}
        fill="#005EAD"
        opacity={active ? 1 : 0.2}
        fontSize="14"
        fontWeight="500"
        letterSpacing="0"
      >
        {label}
      </text>
    </g>
  );
}
