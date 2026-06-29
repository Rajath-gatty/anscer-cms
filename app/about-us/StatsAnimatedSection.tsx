"use client";

import Image from "next/image";
import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { imagePath } from "../components/home/assets";
import { StatsMotionRail, statsRobotRoutes } from "./StatsMotionRail";

type Stat = {
  value: string;
  label: string;
  copy: string;
};

type StatsAnimatedSectionProps = {
  stats: readonly Stat[];
};

export function StatsAnimatedSection({ stats }: StatsAnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.45 });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 md:pb-20 md:pt-10"
    >
      <StatsMotionRail isInView={isInView} reduceMotion={Boolean(reduceMotion)} />

      <div className="site-container relative mt-9 md:mt-8">
        <div className="relative grid gap-8 md:hidden">
          <span className="absolute left-[19px] top-4 h-[calc(100%-32px)] w-px bg-[#e1e6eb]" />
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="relative grid grid-cols-[40px_1fr] gap-4"
            >
              <Image
                src={`${imagePath}robot.png`}
                alt=""
                width={32}
                height={32}
                className="relative z-10 mt-1 h-8 w-auto object-contain"
              />
              <div className="text-center">
                <StatCardContent stat={stat} />
              </div>
            </article>
          ))}
        </div>

        <div className="hidden gap-9 md:grid md:grid-cols-3">
          {stats.map((stat, index) => (
            <m.article
              key={stat.label}
              className="relative text-center"
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={
                reduceMotion || isInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 18, filter: "blur(6px)" }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : statsRobotRoutes[index]?.duration ?? 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <StatCardContent stat={stat} />
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCardContent({ stat }: { stat: Stat }) {
  return (
    <>
      <h3 className="text-[18px] font-extrabold leading-none text-[#011f40] md:text-[40px]">
        <span className="text-[#005ead]">{stat.value}</span>
      </h3>
      <p className="mt-2 text-[10px] font-extrabold text-[#011f40] md:mt-4 md:text-[14px]">
        {stat.label}
      </p>
      <p className="mx-auto mt-2 max-w-[260px] text-[9px] leading-[1.45] text-[#3a3a3a] md:mt-3 md:max-w-[340px] md:text-[13px] md:leading-[1.6]">
        {stat.copy}
      </p>
    </>
  );
}

