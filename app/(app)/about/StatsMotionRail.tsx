"use client";

import { m } from "motion/react";
import { imagePath } from "../components/home/assets";

export const statsRobotRoutes = [
  {
    duration: 2.05,
    start: { x: -70, y: 43, rotate: -90 },
    mid: { x: 206, y: 43, rotate: -90 },
    turn: { x: 237, y: 58, rotate: -38 },
    end: { x: 242, y: 118, rotate: 0 },
  },
  {
    duration: 3.35,
    start: { x: -70, y: 43, rotate: -90 },
    mid: { x: 206, y: 43, rotate: -90 },
    pass: { x: 662, y: 43, rotate: -90 },
    turn: { x: 704, y: 58, rotate: -38 },
    end: { x: 721, y: 118, rotate: 0 },
  },
  {
    duration: 4.85,
    start: { x: -70, y: 43, rotate: -90 },
    mid: { x: 206, y: 43, rotate: -90 },
    pass: { x: 1144, y: 43, rotate: -90 },
    turn: { x: 1185, y: 58, rotate: -38 },
    end: { x: 1200, y: 118, rotate: 0 },
  },
] as const;

type StatsMotionRailProps = {
  isInView: boolean;
  reduceMotion: boolean;
};

export function StatsMotionRail({
  isInView,
  reduceMotion,
}: StatsMotionRailProps) {
  return (
    <div
      className="pointer-events-none relative mx-auto hidden aspect-[1442/183] w-full max-w-[1340px] md:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1442 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <path
          opacity="0.2"
          d="M0 43.1156H206.249M1440 43.1156H718.001H206.249M206.249 43.1156C219.24 42.4436 251.207 43.0689 247 93.0003M662.25 43.1153C675.241 42.4432 722.209 43.0685 718.001 92.9999M1144.42 43.1156C1157.41 42.4436 1204.37 43.0689 1200.17 93.0003"
          stroke="#011F40"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {statsRobotRoutes.map((robot, index) => {
          const xPath =
            "pass" in robot
              ? [
                  robot.start.x,
                  robot.mid.x,
                  robot.pass.x,
                  robot.turn.x,
                  robot.end.x,
                ]
              : [
                  robot.start.x,
                  robot.mid.x,
                  robot.turn.x,
                  robot.end.x,
                ];
          const yPath =
            "pass" in robot
              ? [
                  robot.start.y,
                  robot.mid.y,
                  robot.pass.y,
                  robot.turn.y,
                  robot.end.y,
                ]
              : [
                  robot.start.y,
                  robot.mid.y,
                  robot.turn.y,
                  robot.end.y,
                ];
          const rotatePath =
            "pass" in robot
              ? [
                  robot.start.rotate,
                  robot.mid.rotate,
                  robot.pass.rotate,
                  robot.turn.rotate,
                  robot.end.rotate,
                ]
              : [
                  robot.start.rotate,
                  robot.mid.rotate,
                  robot.turn.rotate,
                  robot.end.rotate,
                ];

          return (
          <m.g
            key={index}
            initial={{
              opacity: reduceMotion ? 1 : 0,
              x: reduceMotion ? robot.end.x : robot.start.x,
              y: reduceMotion ? robot.end.y : robot.start.y,
              rotate: reduceMotion ? robot.end.rotate : robot.start.rotate,
            }}
            animate={
              reduceMotion || isInView
                ? {
                    opacity: reduceMotion
                      ? 1
                      : "pass" in robot
                        ? [0, 1, 1, 1, 1]
                        : [0, 1, 1, 1],
                    x: reduceMotion ? robot.end.x : xPath,
                    y: reduceMotion ? robot.end.y : yPath,
                    rotate: reduceMotion ? robot.end.rotate : rotatePath,
                  }
                : undefined
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                  : {
                    duration: robot.duration,
                    ease: "linear",
                    times:
                      "pass" in robot
                        ? [0, 0.08, 0.62, 0.8, 1]
                        : [0, 0.62, 0.8, 1],
                  }
            }
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <image
              href={`${imagePath}robot.png`}
              x="-43"
              y="-65"
              width="86"
              height="130"
              preserveAspectRatio="xMidYMid meet"
            />
          </m.g>
          );
        })}
      </svg>
    </div>
  );
}

