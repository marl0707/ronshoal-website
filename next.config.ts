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
          destination: "https://onefunnel-lms.vercel.app/onefunnel",
        },
        {
          source: "/onefunnel/:path*",
          destination: "https://onefunnel-lms.vercel.app/onefunnel/:path*",
        },

        {
          source: "/kenshinplus",
          destination: "https://rousai-kensin-delta.vercel.app/kenshinplus",
        },
        {
          source: "/kenshinplus/:path*",
          destination: "https://rousai-kensin-delta.vercel.app/kenshinplus/:path*",
        },

        {
          source: "/shoalflow",
          destination: "https://shoalflow-site.vercel.app/shoalflow",
        },
        {
          source: "/shoalflow/:path*",
          destination: "https://shoalflow-site.vercel.app/shoalflow/:path*",
        },
        // 自鯖 Supabase(GoTrue) のメール確認リンクを正規ドメインで受ける。2026-08-19
        // それまで再設定メールのリンクが http://95.217.176.121:8000/auth/v1/verify?... と
        // 生IP・平文HTTPで出ており、受け取った人にはフィッシングにしか見えなかった。
        // GOTRUE_API_EXTERNAL_URL を https://www.ronshoal.com に変えたうえで、ここで Kong へ橋渡しする。
        // ⚠️ 通すのは verify の1本だけ。/auth/v1/:path* にすると GoTrue の全APIが公開ドメインに出る。
        //    アプリ本体は NEXT_PUBLIC_SUPABASE_URL(生IP) で直接 Kong を叩くので、ここは経由しない。
        {
          source: "/auth/v1/verify",
          destination: "http://95.217.176.121:8000/auth/v1/verify",
        },
      ],
    };
  },
  async redirects() {
    return [
      // 健康パスポート（オンライン診療）は休止中。配下ページへの直アクセスをトップへ一時リダイレクト（permanent:false=307・再開時にこの2行を削除）。2026-07-06
      { source: "/services/kenko-passport", destination: "/", permanent: false },
      { source: "/services/kenko-passport/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
