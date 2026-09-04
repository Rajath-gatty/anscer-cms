import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../../components/product-detail/product-detail-data";

const data = productDetails["lbr-500"];

export const metadata: Metadata = {
  title: "LBR 500 Low-Bay Lifter AMR, 500kg Payload | ANSCER",
  description:
    "Low-clearance autonomous lifter robot designed for compact warehouse racks and low-bay pallet handling up to 500kg. Explore LBR 500 specs.",
};

export default function Lbr500Page() {
  return <ProductDetailPage data={data} />;
}
