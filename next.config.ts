import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

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
};

export default withPayload(nextConfig);
