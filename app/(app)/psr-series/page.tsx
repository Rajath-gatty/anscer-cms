import type { Metadata } from "next";
import { SeriesPage } from "../components/series/SeriesPage";
import { seriesPages } from "../components/series/series-data";

const data = seriesPages["psr-series"];

export const metadata: Metadata = {
  title: "PSR Series | ANSCER Robotics",
  description: data.description,
};

export default function PsrSeriesPage() {
  return <SeriesPage data={data} />;
}
