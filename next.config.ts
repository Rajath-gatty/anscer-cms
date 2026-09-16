import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const seriesRedirects = [
  // AR series
  { source: "/ar-series", destination: "/products/ar" },
  { source: "/ar-series/ar-250", destination: "/products/ar/ar250" },
  { source: "/ar-series/ar-500", destination: "/products/ar/ar500" },
  { source: "/ar-series/ar-650", destination: "/products/ar/ar650" },
  { source: "/ar-series/ar-1250", destination: "/products/ar/ar1250" },
  // PSR series
  { source: "/psr-series", destination: "/products/psr" },
  { source: "/psr-series/psr-2000", destination: "/products/psr/psr2000" },
  { source: "/psr-series/psr-2000r", destination: "/products/psr/psr2000r" },
  { source: "/psr-series/psr-1000r", destination: "/products/psr/psr1000r" },
  { source: "/psr-series/psr-g2g", destination: "/products/psr/psrg2g" },
  { source: "/psr-series/lbr-500", destination: "/products/psr/lbr500" },
  // AGV series
  { source: "/agv-series", destination: "/products/agv" },
  { source: "/agv-series/agv-100", destination: "/products/agv/agv100" },
] as const;

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/6a0bda6e14c5e11eabf72925/**",
      },
    ],
  },
  async redirects() {
    return seriesRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default withPayload(nextConfig);
