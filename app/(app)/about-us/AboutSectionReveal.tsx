"use client";

import { m, useReducedMotion } from "motion/react";

type AboutSectionRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export function AboutSectionReveal({
  children,
  delay = 0,
}: AboutSectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

