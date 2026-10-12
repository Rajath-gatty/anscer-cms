import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/product-detail/ProductDetailPage";
import { productDetails } from "../../../components/product-detail/product-detail-data";

const data = productDetails["atr-1000"];

export const metadata: Metadata = {
  title: "ATR 1000 Turntable AMR, 1000kg Capacity | ANSCER",
  description:
    "Lift up to 1000kg and rotate loads a full 360° in place. The ATR 1000 turntable robot delivers trolleys and pallets already aligned for the next station. Learn more.",
};

export default function Atr1000Page() {
  return <ProductDetailPage data={data} />;
}
