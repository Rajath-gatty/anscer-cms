import type { Metadata } from "next";
import { SeriesPage } from "../components/series/SeriesPage";
import { seriesPages } from "../components/series/series-data";

const data = seriesPages["agv-series"];

export const metadata: Metadata = {
  title: "AGV Series | ANSCER Robotics",
  description: data.description,
};

export default function AgvSeriesPage() {
  return <SeriesPage data={data} />;
}
