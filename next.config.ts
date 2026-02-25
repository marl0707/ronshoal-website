import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /malaysia サブパスをマレーシア生活情報局プロジェクトへプロキシ
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/malaysia",
          destination: "https://app-sejimarls-projects.vercel.app/malaysia",
        },
        {
          source: "/malaysia/:path*",
          destination: "https://app-sejimarls-projects.vercel.app/malaysia/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
