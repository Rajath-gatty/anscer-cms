import type { Metadata } from "next";
import { SeriesPage } from "../components/series/SeriesPage";
import { seriesPages } from "../components/series/series-data";

const data = seriesPages["ar-series"];

export const metadata: Metadata = {
  title: "AR Series | ANSCER Robotics",
  description: data.description,
};

export default function ArSeriesPage() {
  return <SeriesPage data={data} />;
}
