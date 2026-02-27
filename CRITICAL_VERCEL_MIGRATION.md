# ⚠️ 最重要：Vercel × GitHub オーガナイゼーション移行問題

> **ステータス**: 🔴 未解決（2026/02/27 確認済み）
> **対象**: ronshoal.com の本番サイト

---

## 問題の概要

Vercelの `ronshoal-website` プロジェクト（= ronshoal.com）が、**削除予定の `health-rosai` オーガナイゼーション**のGitHubリポジトリに接続されている。

```
現在の接続先: health-rosai/ronshoal-website  ← 削除予定！
正しい接続先: marl0707/ronshoal-website       ← こちらに統一したい
```

**`health-rosai` をそのまま削除すると、ronshoal.com のデプロイが壊れます。**

---

## 現状の構成

| 項目 | 値 |
|------|-----|
| Vercelプロジェクト | `ronshoal-website` |
| 現在のGit接続先 | `health-rosai/ronshoal-website`（❌ 削除予定） |
| 移行先 | `marl0707/ronshoal-website`（✅ 正しいアカウント） |
| 本番ドメイン | `ronshoal.com` / `www.ronshoal.com` |
| ブランチ | `main` |

### GitHubアカウントの整理

| メールアドレス | GitHubアカウント/Org | 方針 |
|--------------|---------------------|------|
| `health@ronshoal.com` | `health-rosai` org | ❌ **削除予定** |
| `sejimakazuki@ronshoal.com` | `marl0707` | ✅ **統一先** |

---

## 解決手順（この順番で実行すること）

### 1. Vercelの接続先を切り替え
1. https://vercel.com/sejimarls-projects/ronshoal-website/settings/git を開く
2. 「Disconnect」をクリック（health-rosai/ronshoal-website を切断）
3. 「Connect Git Repository」で `marl0707/ronshoal-website` を選択して接続

### 2. 再デプロイの確認
1. 接続後、Vercelが自動的に `marl0707/ronshoal-website` の `main` ブランチからデプロイする
2. デプロイが成功するのを確認

### 3. ronshoal.com の動作確認
1. `https://ronshoal.com` にアクセスして正常表示を確認
2. `https://ronshoal.com/malaysia` のrewriteも正常動作を確認

### 4. health-rosai の削除
上記すべてが正常であることを確認した後に、`health-rosai` オーガナイゼーションを削除する。

---

## 補足：ローカルgitリモートの整理

ronshoal-websiteのローカルに `vercel` という名前で `health-rosai` のリモートが残っている。
切り替え完了後に以下で削除可能：

```bash
git remote remove vercel
```

---

> **調査日**: 2026/02/27 17:15
> **調査者**: Antigravity AI
