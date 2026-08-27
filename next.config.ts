import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
        {
          source: "/pickleball",
          destination: "https://i-love-pickleball.vercel.app/pickleball",
        },
        {
          source: "/pickleball/:path*",
          destination: "https://i-love-pickleball.vercel.app/pickleball/:path*",
        },
        // 2026-08-27: OneFunnel を寝かせる社長判断により導線を撤去。
        //   Supabase スタック13コンテナは同日停止済（最終ダンプ
        //   supabase_onefunnel_FINAL_20260826.sql.gz）。
        //   撤去の主目的は死活ではなく表示内容: /onefunnel の LP に実在しない導入事例
        //   2件（「IT系オンラインスクール運営会社様」「中堅メーカー従業員研修部門様」）が
        //   実績として載っており、実データはテナント2件・受講者0・課金0だった。
        //   復活させるときは LP の事例と補助金の記述を正本で裏取りしてから。
        // {
        //   source: "/onefunnel",
        //   destination: "https://onefunnel-lms.vercel.app/onefunnel",
        // },
        // {
        //   source: "/onefunnel/:path*",
        //   destination: "https://onefunnel-lms.vercel.app/onefunnel/:path*",
        // },

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
        // 2026-08-21: ピックルボールを専用 Supabase(Kong 8300) へ分離したため、宛先を振り分ける。
        // GoTrue は API_EXTERNAL_URL にパスを付けても **オリジンしか使わない**ので、
        // 専用スタックのメールも /pickleball 抜きでここへ落ちてくる。
        // 判別材料は redirect_to（リンクに必ず付いており、アプリのパスが入っている）。
        // ⚠️ 条件付きを先に置くこと。無条件の方が先だと全部が旧スタックへ行き、
        //    新スタックで発行したトークンが検証できずに「再設定できませんでした」になる。
        {
          source: "/auth/v1/verify",
          has: [
            {
              type: "query",
              key: "redirect_to",
              value: ".*/pickleball(/.*)?",
            },
          ],
          destination: "http://95.217.176.121:8300/auth/v1/verify",
        },
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
      // NFC-TS は 2026-07-04 に Vercel 運用終了 → 谷口松雄堂側（app.nfc-ts.com）へ移行済み。
      // ゲートウェイの rewrite が旧 Vercel を指したままで /nfcts が 404 だった（2026-08-21 実測）。
      // 配下パスは :path* を引き継がない（旧 /nfcts/... と現行のフラット構成でパス体系が違う＝404 の連鎖になる）。
      // permanent:false=307。7週間 404 で SEO 資産は既に無く、301 のキャッシュ固定は取り消しを難しくするだけ。
      { source: "/nfcts", destination: "https://app.nfc-ts.com/", permanent: false },
      { source: "/nfcts/:path*", destination: "https://app.nfc-ts.com/", permanent: false },
    ];
  },
};

export default nextConfig;
