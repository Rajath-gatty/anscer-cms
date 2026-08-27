import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["ar-650"];

export const metadata: Metadata = {
  title: "AR 650 Autonomous Mobile Robot, 650kg Payload | ANSCER",
  description:
    "Automate medium-to-heavy shop floor logistics with the AR 650 AMR. Ideal for sub-assembly lines, cart towing, and roller conveyors. Inquire now.",
};

export default function Ar650Page() {
  return <ProductDetailPage data={data} />;
}
