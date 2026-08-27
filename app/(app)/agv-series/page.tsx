import type { Metadata } from "next";
import { SeriesPage } from "../components/series/SeriesPage";
import { seriesPages } from "../components/series/series-data";

const data = seriesPages["agv-series"];

export const metadata: Metadata = {
  title: "Industrial Automated Guided Vehicles (AGVs) | ANSCER",
  description:
    "Deploy cost-effective, high-reliability AGVs for fixed-path line feeding and carton handling. Proven track-guided intralogistics. View AGV models.",
};

export default function AgvSeriesPage() {
  return <SeriesPage data={data} />;
}
