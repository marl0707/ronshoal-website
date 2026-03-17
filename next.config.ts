import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/nfcts",
          destination: "https://nfcts-site.vercel.app/nfcts",
        },
        {
          source: "/nfcts/:path*",
          destination: "https://nfcts-site.vercel.app/nfcts/:path*",
        },
        {
          source: "/malaysia",
          destination: "https://app-tau-livid.vercel.app/malaysia",
        },
        {
          source: "/malaysia/:path*",
          destination: "https://app-tau-livid.vercel.app/malaysia/:path*",
        },
        {
          source: "/gscope",
          destination: "https://g-scope-app.vercel.app/gscope",
        },
        {
          source: "/gscope/:path*",
          destination: "https://g-scope-app.vercel.app/gscope/:path*",
        },
        {
          source: "/pickleball",
          destination: "https://i-love-pickleball.vercel.app/pickleball",
        },
        {
          source: "/pickleball/:path*",
          destination: "https://i-love-pickleball.vercel.app/pickleball/:path*",
        },
        {
          source: "/onefunnel",
          destination: "https://onefunnel-lms-sejimarls-projects.vercel.app/onefunnel",
        },
        {
          source: "/onefunnel/:path*",
          destination: "https://onefunnel-lms-sejimarls-projects.vercel.app/onefunnel/:path*",
        },

        {
          source: "/kenshinplus",
          destination: "https://rousai-kensin-delta.vercel.app/kenshinplus",
        },
        {
          source: "/kenshinplus/:path*",
          destination: "https://rousai-kensin-delta.vercel.app/kenshinplus/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
