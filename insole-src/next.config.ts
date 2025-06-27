import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/insole',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
