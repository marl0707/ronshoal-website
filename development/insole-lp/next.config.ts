import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/insoleLP",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
