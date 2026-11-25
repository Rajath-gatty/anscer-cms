import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["point-to-point-movement"];

export const metadata: Metadata = {
  title: "Autonomous Point-to-Point Material Movement Robots | ANSCER",
  description:
    "Move materials between production lines, storage zones, conveyors and workstations with ANSCER autonomous mobile robots. People focus, robots move, systems coordinate.",
};

export default function PointToPointMovementPage() {
  return <WarehouseSolutionPage data={data} />;
}
