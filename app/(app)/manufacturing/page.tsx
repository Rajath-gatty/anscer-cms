import type { Metadata } from "next";
import { MaterialChallengesSection } from "./_components/MaterialChallengesSection";
import { AutonomousWorkflowsSection } from "./_components/AutonomousWorkflowsSection";
import { ExpertCtaBanner } from "./_components/ExpertCtaBanner";
import { OperationFitSection } from "./_components/OperationFitSection";
import { OperationalValueSection } from "./_components/OperationalValueSection";
import { MaterialFlowSection } from "./_components/MaterialFlowSection";
import { ManufacturingFaqSection } from "./_components/ManufacturingFaqSection";
import { ManufacturingCta } from "./_components/ManufacturingCta";
import { ManufacturingHero } from "./_components/ManufacturingHero";
import { ManufacturingIndustriesSection } from "./_components/ManufacturingIndustriesSection";
import { ManufacturingWorkflowsSection } from "./_components/ManufacturingWorkflowsSection";

export const metadata: Metadata = {
  title: "Manufacturing Automation | ANSCER",
  description:
    "Autonomous mobile robots, pallet stackers and AGVs that move cases, pallets and trolleys across your warehouse.",
};

export default function ManufacturingPage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <ManufacturingHero />
      <MaterialFlowSection />
      <AutonomousWorkflowsSection />
      <OperationalValueSection />
      <MaterialChallengesSection />
      <ExpertCtaBanner />
      <ManufacturingWorkflowsSection />
      <ManufacturingIndustriesSection />
      <OperationFitSection />
      <ManufacturingFaqSection />
      <ManufacturingCta />
    </main>
  );
}
