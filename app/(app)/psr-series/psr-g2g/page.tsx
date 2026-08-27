import type { Metadata } from "next";
import { ProductDetailPage } from "../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../components/product-detail/product-detail-data";

const data = productDetails["psr-g2g"];

export const metadata: Metadata = {
  title: "PSR G2G Ground-to-Ground Pallet AMR | ANSCER",
  description:
    "Eliminate manual pallet towing between receiving, staging, and assembly with the PSR G2G autonomous pallet mover. View technical specs.",
};

export default function PsrG2gPage() {
  return <ProductDetailPage data={data} />;
}
