"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
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
        <div className="grid gap-9 md:hidden">
          {stats.map((stat) => (
            <article key={stat.label} className="relative text-center">
              <Image
                src={`${imagePath}robot.png`}
                alt=""
                width={58}
                height={58}
                className="mx-auto mb-7 h-[58px] w-auto object-contain"
              />
              <StatCardContent stat={stat} />
            </article>
          ))}
        </div>

        <div className="hidden gap-9 md:grid md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.article
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCardContent({ stat }: { stat: Stat }) {
  return (
    <>
      <h3 className="text-[32px] font-extrabold leading-none text-[#011f40] md:text-[40px]">
        <span className="text-[#005ead]">{stat.value}</span>
      </h3>
      <p className="mt-4 text-[14px] font-extrabold text-[#011f40]">
        {stat.label}
      </p>
      <p className="mx-auto mt-3 max-w-[340px] text-[13px] leading-[1.6] text-[#3a3a3a]">
        {stat.copy}
      </p>
    </>
  );
}
