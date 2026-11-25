import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["end-of-line-movement"];

export const metadata: Metadata = {
  title: "Autonomous End-of-Line Movement Robots | ANSCER",
  description:
    "Move finished goods, pallets and packaged products from production lines to inspection, staging, storage and dispatch with ANSCER autonomous mobile robots. Production finishes, robots move, systems coordinate.",
};

export default function EndOfLineMovementPage() {
  return <WarehouseSolutionPage data={data} />;
}
