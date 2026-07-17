import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { FadeLeft, FadeRight } from "../../components/animation";
import { imagePath } from "../../components/home/assets";
import {
  fleetBenefits,
  type FleetBenefit,
} from "../_data/software-solutions-data";

type BenefitsSectionProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  cards: readonly string[];
  image?: string;
  pale?: boolean;
  fleetMap?: boolean;
};

export function BenefitsSection({
  eyebrow,
  title,
  copy,
  cards,
  image,
  pale = false,
  fleetMap = false,
}: BenefitsSectionProps) {
  if (fleetMap) {
    return (
      <section className="bg-[#fafafa] py-10 md:pt-[60px] md:pb-[40px]">
        <div className="site-container">
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#005ead] md:text-[16px]">
              {eyebrow}
            </p>
            <h2 className="max-w-[760px] text-[28px] font-bold leading-[1.2] md:text-4xl">
              {title}
            </h2>
            {copy ? (
              <p className="max-w-[690px] text-sm leading-6 text-[#333333] md:text-base">
                {copy}
              </p>
            ) : null}
            <FleetBenefitsMap />
            <div className="grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:hidden">
              {fleetBenefits.map((benefit) => (
                <FleetBenefitCard
                  key={benefit.title}
                  benefit={benefit}
                  mobile
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${
        pale ? "bg-[#e6ebf0]" : "bg-[#fafafa]"
      } md:pt-[60px] md:pb-[40px]`}
    >
      <div className="site-container">
        <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-[#005ead]">
          {eyebrow}
        </p>
        <h2 className="mt-10 max-w-[720px] text-[30px] font-bold leading-tight md:text-4xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-10 max-w-[680px] text-base leading-6 text-[#333333]">
            {copy}
          </p>
        ) : null}
        <div
          className={`mt-10 grid gap-5 ${
            image ? "lg:grid-cols-[0.58fr_0.42fr]" : ""
          }`}
        >
          <FadeRight className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card}
                className="rounded-xl bg-white p-5 shadow-[0_12px_30px_rgba(1,31,64,.06)]"
              >
                <CheckCircle2
                  className="size-8 text-[#005ead]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-5 text-lg font-bold text-[#005ead]">
                  {card}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#333333]">
                  {benefitCopy(card)}
                </p>
              </article>
            ))}
          </FadeRight>
          {image ? (
            <FadeLeft
              className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#dce7ef]"
              delay={0.08}
            >
              <Image
                src={`${imagePath}${image}`}
                alt=""
                fill
                sizes="560px"
                className="object-cover"
              />
            </FadeLeft>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function FleetBenefitsMap() {
  const robotPaths = [
    { id: "fleet-route-purple", d: "M0 332H471.125V120H913.625V332H1479.62" },
    { id: "fleet-route-green", d: "M2 620H445.625V420H897.125V645H1505.12" },
    { id: "fleet-route-red", d: "M907.125 699.818V332H1379.12V0" },
    { id: "fleet-route-blue", d: "M1401.62 22V332H906.125V120H462.125V712" },
  ];

  const totalDuration = 22;
  const robotsAnim = [
    { id: "r1", pathId: "fleet-route-purple", start: 0, dur: 7.8 },
    { id: "r2", pathId: "fleet-route-green", start: 1, dur: 7.8 },
    { id: "r3", pathId: "fleet-route-red", start: 8.2, dur: 6.2 },
    { id: "r4", pathId: "fleet-route-blue", start: 14, dur: 7.6 },
  ];

  return (
    <div className="relative mt-6 hidden min-h-[714px] overflow-x-clip lg:block">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-70px] top-0 z-20 h-full w-[calc(100%+140px)]"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1506 714"
      >
        <defs>
          {robotPaths.map((path) => (
            <path key={path.id} id={path.id} d={path.d} />
          ))}
        </defs>
        <g className="motion-reduce:hidden">
          {robotsAnim.map((robot) => {
            const t1 = robot.start / totalDuration;
            const t2 = (robot.start + robot.dur) / totalDuration;

            let keyTimes = "";
            let keyPoints = "";
            let opKeyTimes = "";
            let opValues = "";

            if (robot.start === 0) {
              keyTimes = `0; ${t2.toFixed(4)}; 1`;
              keyPoints = "0; 1; 1";
              opKeyTimes = `0; ${Math.max(0, t2 - 0.02).toFixed(
                4,
              )}; ${t2.toFixed(4)}; 1`;
              opValues = "1; 1; 0; 0";
            } else if (robot.start + robot.dur === totalDuration) {
              keyTimes = `0; ${t1.toFixed(4)}; 1`;
              keyPoints = "0; 0; 1";
              opKeyTimes = `0; ${Math.max(0, t1 - 0.01).toFixed(
                4,
              )}; ${t1.toFixed(4)}; 0.98; 1`;
              opValues = "0; 0; 1; 1; 0";
            } else {
              keyTimes = `0; ${t1.toFixed(4)}; ${t2.toFixed(4)}; 1`;
              keyPoints = "0; 0; 1; 1";
              opKeyTimes = `0; ${Math.max(0, t1 - 0.01).toFixed(
                4,
              )}; ${t1.toFixed(4)}; ${Math.max(0, t2 - 0.02).toFixed(
                4,
              )}; ${t2.toFixed(4)}; 1`;
              opValues = "0; 0; 1; 1; 0; 0";
            }

            return (
              <g key={robot.id} opacity="0">
                <animateMotion
                  dur={`${totalDuration}s`}
                  keyPoints={keyPoints}
                  keyTimes={keyTimes}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${robot.pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  dur={`${totalDuration}s`}
                  keyTimes={opKeyTimes}
                  repeatCount="indefinite"
                  values={opValues}
                />
                <image
                  href={`${imagePath}robot.png`}
                  width="52"
                  height="52"
                  x="-26"
                  y="-26"
                  transform="rotate(-90)"
                />
              </g>
            );
          })}
        </g>
      </svg>
      <div className="relative z-10 h-[714px]">
        {fleetBenefits.map((benefit) => (
          <FleetBenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </div>
  );
}

function FleetBenefitCard({
  benefit,
  mobile = false,
}: {
  benefit: FleetBenefit;
  mobile?: boolean;
}) {
  const Icon = benefit.icon;
  const activeStyles = benefit.isActive ? "active" : "";
  const cardDepthStyles = mobile ? "mobile" : "";
  const positionStyles = mobile
    ? "relative"
    : `absolute ${benefit.position} w-[min(300px,23.08vw)]`;

  return (
    <article
      className={`group card3d ${cardDepthStyles} ${activeStyles} flex flex-col items-start gap-3 bg-white p-6 transition duration-300 ${positionStyles} ${
        mobile ? "min-h-[204px]" : "min-h-[186px]"
      }`}
    >
      <span
        className={`flex size-10 items-center justify-center rounded-[8px] transition ${
          benefit.isActive
            ? "bg-[#005ead] text-white"
            : "bg-[#011f40]/5 text-[#011f40] group-hover:bg-[#005ead] group-hover:text-white"
        }`}
      >
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
      </span>
      <h3 className="text-[16px] font-semibold leading-snug text-black">
        {benefit.title}
      </h3>
      <div className="text-[14px] font-regular leading-[1.5] text-[#333333]">
        {benefit.copy}
      </div>
    </article>
  );
}

function benefitCopy(title: string) {
  const copy: Record<string, string> = {
    "Centralized Fleet Control":
      "Manage multiple robots and workflows from a single unified platform.",
    "Scalable Automation":
      "Easily expand robot fleets and operational workflows as facility requirements grow.",
    "Reduced Downtime":
      "Automated charging management and intelligent task scheduling help maintain robot availability.",
    "Enhanced Safety":
      "Controlled robot traffic flow reduces congestion and improves operational safety.",
    "User-Friendly Operation":
      "Browser-based controls make robot operations easier for non-technical teams.",
    "Improved Operational Efficiency":
      "Optimize task flow, routing, availability, and throughput across your facility.",
    "Operational Abstraction":
      "Separate business logic from robot control logic.",
    Scalability:
      "Support multi-industry deployments and growing automation footprints.",
    Flexibility:
      "Use prebuilt, low-code, or integrated implementation approaches.",
    "Reduced Engineering Effort":
      "Minimize the need for custom coding and long engineering cycles.",
    "User-Centric Design": "Simplify interaction for non-technical operators.",
    "Flexible Workflow Configuration":
      "Create and adjust operational flows as requirements change.",
    "Industry-Specific Adaptability":
      "Configure workflows for the way each facility actually works.",
    "Simplified Automation":
      "Turn repeatable operations into clear robot instructions.",
    "Scalable Operations":
      "Extend workflows across robots, lines, sites, and use cases.",
    "Reduced Operational Dependency":
      "Lower dependence on manual coordination and custom engineering.",
    "Improved Operational Visibility":
      "Gain real-time and historical insight into robot operations.",
    "Data-Driven Optimization":
      "Use analytics to identify bottlenecks and improve traffic flow.",
    "Increased Fleet Efficiency":
      "Monitor utilization rates and mission trends to maximize productivity.",
    "Faster Issue Identification":
      "Heatmaps and predictive alerts help detect recurring system events.",
    "Enhanced Decision Making":
      "KPI dashboards support informed operational planning.",
    "Scalable Performance Monitoring":
      "Analyze performance across single or multi-site deployments.",
    "Continuous Improvement":
      "Use historical data to refine workflows and improve reliability.",
  };

  return (
    copy[title] ??
    "Designed to improve automation visibility, reliability, and operational performance."
  );
}
