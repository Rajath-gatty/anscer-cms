"use client";

import { m, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

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
  viewportAmount?: number;
  className?: string;
};

type RevealOffset = { x: number; y: number; scale: number };
type RevealStyle = CSSProperties & {
  "--motion-reveal-x": string;
  "--motion-reveal-y": string;
  "--motion-reveal-scale": number;
};

const variantOffsets: Record<RevealVariant, RevealOffset> = {
  fade: { x: 0, y: 0, scale: 1 },
  "fade-up": { x: 0, y: 80, scale: 1 },
  "fade-down": { x: 0, y: -80, scale: 1 },
  "fade-left": { x: 80, y: 0, scale: 1 },
  "fade-right": { x: -80, y: 0, scale: 1 },
  "scale-up": { x: 0, y: 14, scale: 0.7 },
};

const revealVariants = {
  hidden: ({ x, y, scale }: RevealOffset) => ({
    opacity: 0,
    x,
    y,
    scale,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
};

const defaultViewportMargin = "-20% 0px -20% 0px";
const premiumEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.75,
  viewportAmount = 0.2,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const viewportMargin =
    viewportAmount === 0.2
      ? defaultViewportMargin
      : `${viewportAmount * -100}% 0px ${viewportAmount * -100}% 0px`;
  const offset = variantOffsets[variant];
  const revealClassName = className
    ? `motion-reveal ${className}`
    : "motion-reveal";
  const revealStyle: RevealStyle = {
    "--motion-reveal-x": `${offset.x}px`,
    "--motion-reveal-y": `${offset.y}px`,
    "--motion-reveal-scale": offset.scale,
    backfaceVisibility: "hidden",
    willChange: "transform, opacity",
  };

  return (
    <m.div
      className={revealClassName}
      custom={offset}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      variants={revealVariants}
      whileInView="visible"
      viewport={{ once: true, amount: "some", margin: viewportMargin }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: premiumEase,
        opacity: { duration: shouldReduceMotion ? 0 : duration * 0.8 },
        x: { duration: shouldReduceMotion ? 0 : duration },
        y: { duration: shouldReduceMotion ? 0 : duration },
        scale: { duration: shouldReduceMotion ? 0 : duration },
      }}
      style={revealStyle}
    >
      {children}
    </m.div>
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
