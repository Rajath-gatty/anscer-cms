import type { Metadata } from "next";
import { SeriesPage } from "../components/series/SeriesPage";
import { seriesPages } from "../components/series/series-data";

const data = seriesPages["ar-series"];

export const metadata: Metadata = {
  title: "Modular Autonomous Mobile Robots | ANSCER AR Series",
  description:
    "Discover ANSCER AR Series modular AMRs (250kg-1250kg). Features LiDAR SLAM navigation and swappable top modules for flexible intralogistics.",
};

export default function ArSeriesPage() {
  return <SeriesPage data={data} />;
}
