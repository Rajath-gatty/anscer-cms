import type { Metadata } from "next";
import { SeriesPage } from "../../components/series/SeriesPage";
import { seriesPages } from "../../components/series/series-data";

const data = seriesPages["psr-series"];

export const metadata: Metadata = {
  title: "Autonomous Pallet Stacker Robots | ANSCER PSR Series",
  description:
    "Automate pallet transport, stacking, and racking with ANSCER PSR Series AMRs. Eliminate forklift hazards and accelerate dock-to-stock workflows.",
};

export default function PsrSeriesPage() {
  return <SeriesPage data={data} />;
}
