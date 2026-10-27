# Ronshoal 公式サイト — ビルド・公開

本番の正本は `/home/antigravity/projects/ronshoal-website`。通常の公開は `marl0707/ronshoal-website` の `main` へのpushから、Vercelプロジェクト `ronshoal-website` が自動実行する。Root Directoryはリポジトリ直下（設定値null）、Nodeは24.x。マレーシアの別プロジェクトにあるRoot Directory=`app`を転用しない。

`npm run build` は既存の認証中継・リンク検査を通してからNext.jsをビルドする。Git連携、検査、認証や秘密値を変更してビルドを通さない。

公開完了は、対象commitの実配備が `source=git`・Production・READYであること、キャッシュ復元を含むビルドログ、`www.ronshoal.com` の実配備ID、公開 `/contact` のHTML配備ID集合が当該IDだけに一致することで確認する。トップ `/` は `public/index.html` へのrewriteで配備IDを含まないため、既存内容の保持を別に確認する。HTTP 200やpush成功だけでは公開完了にしない。

アプリの編集先は `src/app`。トップページは `public/index.html`、各サブサイトへの中継は `next.config.ts`。`/pickleball` と `/malaysia` の本体は別リポジトリなので、公式HPの配備だけではサブサイトの更新を検証できない。

失敗時は配備ID・対象commit・ログを確認し、キャッシュ復元先を含め原因を調べる。未知の `app` ディレクトリや実ソースを一括削除しない。切り戻しは対象変更だけをrevertした新commitを通常pushし、同じ実配備・公開検査を行う。並行変更や履歴をreset/force-pushで消さない。手動配備が必要な場合もTech Baseの `safe_vercel_deploy.sh` を使い、Git自動公開の成功とは区別する。

## ローカル開発

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing App Router pages under `src/app`. The public home page is served from `public/index.html` by the rewrite in `next.config.ts`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
