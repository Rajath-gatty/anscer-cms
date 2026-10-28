import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../../components/product-detail/product-detail-data";

const data = productDetails["gpr-1000"];

export const metadata: Metadata = {
  title: "GPR 1000 Underride Pallet Robot, 1000kg Capacity | ANSCER",
  description:
    "Pick, transport and drop closed and open pallets up to 1000kg in aisles under 3 m. The GPR 1000 underride pallet robot automates ground-level pallet movement. Learn more.",
};

export default function Gpr1000Page() {
  return <ProductDetailPage data={data} />;
}
