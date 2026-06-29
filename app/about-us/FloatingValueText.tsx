"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FloatingValueTextProps = {
  children: ReactNode;
  delay: number;
  seed: number;
};

const driftPaths: Array<{
  x: number[];
  y: number[];
  xDuration: number;
  yDuration: number;
}> = [
  {
    x: [0, 7, -5, 4, 0],
    y: [0, -6, 4, -3, 0],
    xDuration: 9.6,
    yDuration: 11.2,
  },
  {
    x: [0, -6, 4, -8, 0],
    y: [0, 5, -6, 3, 0],
    xDuration: 10.4,
    yDuration: 12,
  },
  {
    x: [0, 4, 9, -3, 0],
    y: [0, -5, 2, 6, 0],
    xDuration: 11,
    yDuration: 9.8,
  },
  {
    x: [0, -5, 6, 2, 0],
    y: [0, -5, -2, 5, 0],
    xDuration: 10.8,
    yDuration: 12.4,
  },
  {
    x: [0, 8, 2, -6, 0],
    y: [0, 3, -7, -2, 0],
    xDuration: 9.2,
    yDuration: 11.6,
  },
];

export function FloatingValueText({
  children,
  delay,
  seed,
}: FloatingValueTextProps) {
  const reduceMotion = useReducedMotion();
  const drift = driftPaths[seed % driftPaths.length];

  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              x: drift.x,
              y: drift.y,
            }
      }
      transition={{
        x: {
          duration: drift.xDuration,
          delay,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
        y: {
          duration: drift.yDuration,
          delay,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      className="lg:will-change-transform"
    >
      {children}
    </motion.div>
  );
}
