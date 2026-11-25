import type { Metadata } from "next";
import { MaterialChallengesSection } from "./_components/MaterialChallengesSection";
import { AutonomousWorkflowsSection } from "./_components/AutonomousWorkflowsSection";
import { ExpertCtaBanner } from "./_components/ExpertCtaBanner";
import { OperationFitSection } from "./_components/OperationFitSection";
import { OperationalValueSection } from "./_components/OperationalValueSection";
import { MaterialFlowSection } from "./_components/MaterialFlowSection";
import { WarehouseFaqSection } from "./_components/WarehouseFaqSection";
import { WarehouseCta } from "./_components/WarehouseCta";
import { WarehouseHero } from "./_components/WarehouseHero";
import { WarehouseIndustriesSection } from "./_components/WarehouseIndustriesSection";
import { WarehouseWorkflowsSection } from "./_components/WarehouseWorkflowsSection";

export const metadata: Metadata = {
  title: "Warehouse Automation | ANSCER",
  description:
    "Autonomous mobile robots, pallet stackers and AGVs that move cases, pallets and trolleys across your warehouse.",
};

export default function WarehousePage() {
  return (
    <main className="bg-[#fafafa] text-[#011f40]">
      <WarehouseHero />
      <MaterialFlowSection />
      <AutonomousWorkflowsSection />
      <OperationalValueSection />
      <MaterialChallengesSection />
      <ExpertCtaBanner />
      <WarehouseWorkflowsSection />
      <WarehouseIndustriesSection />
      <OperationFitSection />
      <WarehouseFaqSection />
      <WarehouseCta />
    </main>
  );
}
