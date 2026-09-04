import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../../components/product-detail/product-detail-data";

const data = productDetails["agv-100"];

export const metadata: Metadata = {
  title: "AGV 100 QR-Guided Material Handling Robot | ANSCER",
  description:
    "Transport totes, bins, and small parts up to 100kg with the AGV 100. High-speed QR-code navigation for flexible manufacturing lines. Learn more.",
};

export default function Agv100Page() {
  return <ProductDetailPage data={data} />;
}
