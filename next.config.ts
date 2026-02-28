
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
        {
          source: "/gscope",
          destination: "https://g-scope-app.vercel.app/gscope",
        },
        {
          source: "/gscope/:path*",
          destination: "https://g-scope-app.vercel.app/gscope/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
