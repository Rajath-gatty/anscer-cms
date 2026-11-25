import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["put-away"];

export const metadata: Metadata = {
  title: "Autonomous Put Away Robots | ANSCER",
  description:
    "Automate inbound inventory movement from receiving and staging to storage with ANSCER autonomous mobile robots. Receive, robots move, software tracks.",
};

export default function PutAwayPage() {
  return <WarehouseSolutionPage data={data} />;
}
