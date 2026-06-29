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

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  exitDuration?: number;
  margin?: string;
  once?: boolean;
  className?: string;
};

const variantOffsets: Record<RevealVariant, { x: number; y: number; scale: number }> = {
  fade: { x: 0, y: 0, scale: 1 },
  "fade-up": { x: 0, y: 22, scale: 1 },
  "fade-down": { x: 0, y: -22, scale: 1 },
  "fade-left": { x: 28, y: 0, scale: 1 },
  "fade-right": { x: -28, y: 0, scale: 1 },
  "scale-up": { x: 0, y: 14, scale: 0.99 },
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.82,
  exitDuration = 0.62,
  margin = "-20% 0px -20% 0px",
  once = false,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const viewportOptions = {
    amount: "some",
    margin,
    once,
  } as Parameters<typeof useInView>[1];
  const isInView = useInView(ref, viewportOptions);
  const shouldReduceMotion = useReducedMotion();
  const offset = variantOffsets[variant];

  const initialHidden = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1 }
    : {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: offset.scale,
      };

  const exitHidden = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1 }
    : { opacity: 0, x: 0, y: 0, scale: 1 };
  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialHidden}
      animate={isInView ? visible : exitHidden}
      transition={{
        duration: shouldReduceMotion ? 0 : isInView ? duration : exitDuration,
        delay: shouldReduceMotion || !isInView ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        backfaceVisibility: "hidden",
        willChange: shouldReduceMotion ? undefined : "opacity, transform",
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
