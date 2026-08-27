import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["ar-250"];

export const metadata: Metadata = {
  title: "AR 250 Autonomous Mobile Robot, 250kg Payload | ANSCER",
  description:
    "Optimize light load transport with the AR 250 AMR. Compact footprint, dynamic obstacle avoidance, and seamless WMS integration. Request specs.",
};

export default function Ar250Page() {
  return <ProductDetailPage data={data} />;
}
