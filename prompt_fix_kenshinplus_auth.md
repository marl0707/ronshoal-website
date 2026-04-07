【緊急・最優先タスク】
本番環境（ronshoal.com/kenshinplus）で /kenshinplus 配下へのアクセスがNextAuth（またはMiddleware）によって /login 等へ307リダイレクトされ、エラーになるバグが発生しています。

以下の手順で完全に解決してください：
1. 階層型委譲・プロジェクトメモリ: CLAUDE.mdに今回の修正方針を記述してください。
2. 修正: middleware.ts 等のルーティングを修正し、/kenshinplus 以下の全パスをパブリックルートとして保護対象から外し、どんなユーザーでも認証不要でアクセス可能にしてください。
3. 検証: npm run build で検証してください。
4. デプロイ方針: 対話プロンプト（Y/n）によるフリーズを避けるため、git commit と git push を行い、VercelのCI経由で本番デプロイをトリガーしてください（手動の vercel コマンドは極力使わないこと）。
