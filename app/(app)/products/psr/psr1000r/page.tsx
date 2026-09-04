import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../../components/product-detail/product-detail-data";

const data = productDetails["psr-1000r"];

export const metadata: Metadata = {
  title: "PSR 1000R Autonomous Pallet Reach Stacker | ANSCER",
  description:
    "Automate 1000kg vertical pallet stacking in narrow warehouse aisles. Intelligent SLAM navigation with high-rack precision sensors. View details.",
};

export default function Psr1000rPage() {
  return <ProductDetailPage data={data} />;
}
