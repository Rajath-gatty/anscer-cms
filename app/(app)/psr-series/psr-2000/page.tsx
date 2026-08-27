import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["psr-2000"];

export const metadata: Metadata = {
  title: "PSR 2000 Heavy-Duty Pallet Stacking AMR | ANSCER",
  description:
    "Transport heavy pallets up to 2000kg with the PSR 2000 AMR. Built for continuous 24/7 warehouse operations and seamless ERP dispatch. Request demo.",
};

export default function Psr2000Page() {
  return <ProductDetailPage data={data} />;
}
