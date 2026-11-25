import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["cross-docking"];

export const metadata: Metadata = {
  title: "Autonomous Cross Docking Robots | ANSCER",
  description:
    "Automate pallet movement from receiving to outbound staging and dispatch with ANSCER autonomous mobile robots. Receive, robots move, stage, dispatch.",
};

export default function CrossDockingPage() {
  return <WarehouseSolutionPage data={data} />;
}
