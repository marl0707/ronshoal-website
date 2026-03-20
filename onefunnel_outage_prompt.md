# OneFunnel (ronshoal.com/onefunnel) アクセス障害の原因究明と復旧指令

## 概要
現在、`https://www.ronshoal.com/onefunnel` へのアクセスができず、ページが表示されない障害が発生しています。
OneFunnelプロジェクト (`~/projects/onefunnel-lms` あるいは `~/projects/ronshoal-website` 側のルーティング) のデプロイメントログ、エラーログ、およびVercelのネットワーク/ドメイン設定を調査し、原因を究明した上で修正と復旧を行ってください。

## 実行ステップ
1. **原因の特定:**
   - サーバー上の `onefunnel-lms` および `ronshoal-website` プロジェクトにて、Vercel CLI (`vercel ls`, `vercel inspect` 等) を使用してデプロイ状態とエラーログを確認してください。
   - `ronshoal.com/onefunnel` へのアクセスが404エラーなのか、500系エラーなのか、あるいはルーティング（Next.js `next.config.js` の rewrites 設定など）の不備なのかを切り分けてください。
2. **修正処理の実行:**
   - 調査にて特定された原因に基づき、コード修正（rewritesの追加・修正、フロントエンドのビルド・ランタイムエラーの解消など）または環境変数の見直しを実施してください。
3. **デプロイと復旧の確認:**
   - 修正後、`vercel deploy --prod` 等を実行して本番反映し、実際にページが正常に表示される状態まで復旧させてください。

これらのプロセスを自律的に実行し、復旧が完了次第、その原因とともに結果を報告してください。
