"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type SoftwareSectionRevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function SoftwareSectionReveal({
  children,
  delay = 0,
  direction = "up",
}: SoftwareSectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.18,
    margin: "0px 0px -10% 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const hidden = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
    : {
        opacity: 0,
        x: direction === "left" ? -34 : direction === "right" ? 34 : 0,
        y: direction === "up" ? 22 : 0,
        scale: 0.985,
        filter: "blur(4px)",
      };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : hidden}
      transition={{
        duration: shouldReduceMotion ? 0 : isInView ? 0.52 : 0.3,
        delay: shouldReduceMotion || !isInView ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: shouldReduceMotion ? undefined : "opacity, transform, filter" }}
    >
      {children}
    </motion.div>
  );
}
