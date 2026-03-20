# NFCts アクセス障害（404/Down）の調査と復旧指令

## 概要
現在、`https://www.ronshoal.com/nfcts` のURLにアクセスできない（または正しく表示されない）状態になっています。
NFCtsプロジェクト (`~/projects/NFCts_web` または `~/projects/ronshoal-website` 側でのNext.jsルーティング設定) のVercelデプロイメントおよびドメイン・ルーティング設定を調査し、正常にアクセスできるように修正・再デプロイを行ってください。

## 実行ステップ
1. **原因の特定:**
   - Vercel CLI (`vercel ls` や `vercel inspect`)、またはプロジェクトの実装（`next.config.js` の `rewrites`, `redirects` またはVercelのプロジェクト設定等）を確認し、「なぜ ronshoal.com/nfcts にアクセスできないのか」を特定してください。
   - `ronshoal-website` 側のルーティングの問題か、それとも `NFCts_web` 単独のデプロイが落ちているかの切り分けを行ってください。
2. **修正処理の実行:**
   - 原因に応じたコード修正（リライトルールの追加、フロントエンドのビルドエラー修正等）またはVercel設定の構成変更を実施してください。
3. **デプロイと確認:**
   - `vercel deploy --prod` 等を実行し、実際に `https://www.ronshoal.com/nfcts` にアクセスしてページが正常に表示されるようにしてください。

以上の調査と対応を自律的に進め、完了次第結果を報告してください。
