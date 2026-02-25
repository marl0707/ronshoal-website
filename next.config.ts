import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /malaysia サブパスをマレーシア生活情報局プロジェクトへプロキシ
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/malaysia",
          destination: "https://app-tau-livid.vercel.app/malaysia",
        },
        {
          source: "/malaysia/:path*",
          destination: "https://app-tau-livid.vercel.app/malaysia/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
