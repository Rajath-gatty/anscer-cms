import type { ComponentType } from "react";
import type {
  WarehouseSolutionData,
  WarehouseSolutionPageData,
} from "./warehouse-solutions-data";
import { SolutionApplications } from "./sections/SolutionApplications";
import { SolutionCta } from "./sections/SolutionCta";
import { SolutionFaq } from "./sections/SolutionFaq";
import { SolutionHero } from "./sections/SolutionHero";
import { SolutionImpact } from "./sections/SolutionImpact";
import { SolutionOverview } from "./sections/SolutionOverview";
import { SolutionPortfolio } from "./sections/SolutionPortfolio";
import { SolutionProblem } from "./sections/SolutionProblem";
import { SolutionProcess } from "./sections/SolutionProcess";
import { SolutionWorkflow } from "./sections/SolutionWorkflow";

export type WarehouseSolutionSectionKey =
  | "hero"
  | "overview"
  | "problem"
  | "solution"
  | "process"
  | "portfolio"
  | "applications"
  | "impact"
  | "faq"
  | "cta";

export const defaultWarehouseSolutionSectionOrder: WarehouseSolutionSectionKey[] =
  [
    "hero",
    "overview",
    "problem",
    "solution",
    "process",
    "portfolio",
    "applications",
    "impact",
    "faq",
    "cta",
  ];

const warehouseSolutionSections: Record<
  WarehouseSolutionSectionKey,
  ComponentType<{ data: WarehouseSolutionData }>
> = {
  hero: SolutionHero,
  overview: SolutionOverview,
  problem: SolutionProblem,
  solution: SolutionWorkflow,
  process: SolutionProcess,
  portfolio: SolutionPortfolio,
  applications: SolutionApplications,
  impact: SolutionImpact,
  faq: SolutionFaq,
  cta: SolutionCta,
};

export function WarehouseSolutionPage({
  data,
  sections = defaultWarehouseSolutionSectionOrder,
}: {
  data: WarehouseSolutionPageData;
  sections?: WarehouseSolutionSectionKey[];
}) {
  // Section keys mirror data keys, so a section renders only when its data exists.
  const presentSections = sections.filter((key) => data[key] != null);
  // Safe: every section left in `presentSections` has its data defined.
  const fullData = data as WarehouseSolutionData;

  return (
    <main className="bg-[#fafafa] text-brand-navy">
      {presentSections.map((sectionKey) => {
        const Section = warehouseSolutionSections[sectionKey];
        return <Section key={sectionKey} data={fullData} />;
      })}
    </main>
  );
}
