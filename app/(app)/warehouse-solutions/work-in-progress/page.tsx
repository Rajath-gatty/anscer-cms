import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["work-in-progress"];

export const metadata: Metadata = {
  title: "Autonomous Work-in-Progress (WIP) Movement | ANSCER",
  description:
    "Automate WIP movement between production, assembly, inspection, staging and storage with ANSCER autonomous mobile robots to keep materials flowing across your facility.",
};

export default function WorkInProgressPage() {
  return <WarehouseSolutionPage data={data} />;
}
