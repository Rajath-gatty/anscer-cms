import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["case-picking"];

export const metadata: Metadata = {
  title: "Autonomous Case Picking Robots | ANSCER",
  description:
    "Automate case movement across picking, staging, replenishment and dispatch with ANSCER autonomous mobile robots. People pick, robots move, software coordinates.",
};

export default function CasePickingPage() {
  return <WarehouseSolutionPage data={data} />;
}
