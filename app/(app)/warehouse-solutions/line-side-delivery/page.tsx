import type { Metadata } from "next";
import { WarehouseSolutionPage } from "../../components/warehouse-solutions/WarehouseSolutionPage";
import { warehouseSolutions } from "../../components/warehouse-solutions/warehouse-solutions-data";

const data = warehouseSolutions["line-side-delivery"];

export const metadata: Metadata = {
  title: "Autonomous Line-Side Delivery Robots | ANSCER",
  description:
    "Deliver bins, totes, racks and pallets from storage straight to production lines with ANSCER autonomous mobile robots. Material needs, robots deliver, software coordinates.",
};

export default function LineSideDeliveryPage() {
  return <WarehouseSolutionPage data={data} />;
}
