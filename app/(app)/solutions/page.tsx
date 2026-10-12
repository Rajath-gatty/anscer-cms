import type { Metadata } from "next";
import { AutomationIndustriesSection } from "./_components/AutomationIndustriesSection";
import { AutomationSolutionsSection } from "./_components/AutomationSolutionsSection";
import { IntelligentAutomationSection } from "./_components/IntelligentAutomationSection";
import { MaterialMovementSection } from "./_components/MaterialMovementSection";
import { SolutionsCta } from "./_components/SolutionsCta";
import { SolutionsFaqSection } from "./_components/SolutionsFaqSection";
import { SolutionHighlights } from "./_components/SolutionHighlights";
import { SolutionsHero } from "./_components/SolutionsHero";
import { WorkflowTabsSection } from "./_components/WorkflowTabsSection";
import { WorkflowAutomationSection } from "./_components/WorkflowAutomationSection";
import {
  manufacturingMapMarkers,
  manufacturingWorkflows,
  warehouseMapMarkers,
  warehouseWorkflows,
} from "./_data/solutions-data";

export const metadata: Metadata = {
  title: "Intelligent Automation Solutions | ANSCER",
  description:
    "Transform complex warehouse workflows with ANSCER. Autonomous robotics designed for seamless integration, scalable deployment, and measurable operational gains.",
};

export default function SolutionsPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <SolutionsHero />
      <SolutionHighlights />
      <WorkflowAutomationSection />
      <AutomationSolutionsSection />
      <MaterialMovementSection />
      <WorkflowTabsSection
        id="warehouse-workflows"
        title="Warehouse Workflows"
        workflows={warehouseWorkflows}
        markers={warehouseMapMarkers}
      />
      <WorkflowTabsSection
        id="manufacturing-workflows"
        title="Manufacturing Workflow"
        workflows={manufacturingWorkflows}
        markers={manufacturingMapMarkers}
        className="pt-0 md:pt-0 3xl:pt-0 4xl:pt-0"
      />
      <AutomationIndustriesSection />
      <IntelligentAutomationSection />
      <SolutionsFaqSection />
      <SolutionsCta />
    </main>
  );
}
