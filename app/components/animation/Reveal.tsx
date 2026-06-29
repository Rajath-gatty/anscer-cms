"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export type RevealVariant =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up";

type InViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  exitDuration?: number;
  amount?: InViewOptions["amount"];
  margin?: InViewOptions["margin"];
  once?: InViewOptions["once"];
  className?: string;
};

const variantOffsets: Record<RevealVariant, { x: number; y: number; scale: number }> = {
  fade: { x: 0, y: 0, scale: 1 },
  "fade-up": { x: 0, y: 28, scale: 1 },
  "fade-down": { x: 0, y: -28, scale: 1 },
  "fade-left": { x: 34, y: 0, scale: 1 },
  "fade-right": { x: -34, y: 0, scale: 1 },
  "scale-up": { x: 0, y: 18, scale: 0.985 },
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.56,
  exitDuration = 0.32,
  amount = 0.18,
  margin = "0px 0px -10% 0px",
  once = false,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount, margin, once });
  const shouldReduceMotion = useReducedMotion();
  const offset = variantOffsets[variant];

  const hidden = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
    : {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: offset.scale,
        filter: "blur(4px)",
      };

  const visible = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: shouldReduceMotion ? 0 : isInView ? duration : exitDuration,
        delay: shouldReduceMotion || !isInView ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: shouldReduceMotion ? undefined : "opacity, transform, filter",
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn(props: Omit<RevealProps, "variant">) {
  return <Reveal {...props} variant="fade" />;
}

export function FadeUp(props: Omit<RevealProps, "variant">) {
  return <Reveal {...props} variant="fade-up" />;
}

export function FadeDown(props: Omit<RevealProps, "variant">) {
  return <Reveal {...props} variant="fade-down" />;
}

export function FadeLeft(props: Omit<RevealProps, "variant">) {
  return <Reveal {...props} variant="fade-left" />;
}

export function FadeRight(props: Omit<RevealProps, "variant">) {
  return <Reveal {...props} variant="fade-right" />;
}

export function ScaleUp(props: Omit<RevealProps, "variant">) {
  return <Reveal {...props} variant="scale-up" />;
}
