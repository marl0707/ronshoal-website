# 🚨 絶対ルール（AI はこの事実を前提に作業せよ）

## R-0: Supabase は全て self-hosted
- 接続先: `95.217.176.121` 内の Docker コンテナのみ
- Supabase Cloud（supabase.com）は未使用
- DB認証情報 / JWT のローテーションは全部サーバー内で実施する
- `trvgkuuengwlqylhgaf` 等の Cloud プロジェクト ID が .env に残っていても無視/削除対象

## R-1: DB スキーマは `.ai-context/schema.md` を参照（推測禁止）

## R-2: コード変更前に `.ai-context/gotchas.json` を読む
