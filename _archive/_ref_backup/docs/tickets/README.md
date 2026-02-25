# 📋 ローカルチケット管理システム

## 概要
このフォルダでタスクをチケットとして管理します。GitHubを使わずにローカルで完結する仕組みです。

## 📁 フォルダ構成
```
tickets/
├── open/        # 新規・未着手のチケット
├── in-progress/ # 作業中のチケット
├── completed/   # 完了したチケット
└── backlog/     # 後回し・保留中のチケット
```

## 🎫 チケットの作り方

### 1. ファイル名のルール
```
[番号]-[カテゴリ]-[簡潔な説明].md

例：
001-feature-contact-form-validation.md
002-bug-mobile-menu-not-working.md
003-design-add-loading-animation.md
```

### カテゴリ一覧
- `feature`: 新機能
- `bug`: バグ修正
- `design`: デザイン改善
- `perf`: パフォーマンス
- `seo`: SEO対策
- `a11y`: アクセシビリティ

## 📝 チケットテンプレート

```markdown
# チケット #001: [タイトル]

## 📅 作成日: 2024-06-28
## 👤 担当: AI
## 🏷️ カテゴリ: feature
## 🎯 優先度: 高/中/低

## 概要
[このタスクで実現したいことを簡潔に]

## 背景・理由
[なぜこの作業が必要か]

## 要件
- [ ] 要件1
- [ ] 要件2
- [ ] 要件3

## 技術仕様
- **対象ファイル**: 
- **使用技術**: 
- **参考URL**: 

## 完了条件
- [ ] コードが実装されている
- [ ] 動作確認済み
- [ ] レスポンシブ対応済み

## 作業ログ
- 2024-06-28: チケット作成
- 

## AI向けコンテキスト
```
プロジェクトルート: /Users/sejimakazuki/ronshoal-website
デザインシステム: SITE_STRUCTURE.md参照
```
```

## 🔄 ワークフロー

1. **新規チケット作成**
   ```bash
   # openフォルダに新規ファイル作成
   touch tickets/open/004-feature-new-function.md
   ```

2. **作業開始**
   ```bash
   # openからin-progressへ移動
   mv tickets/open/004-*.md tickets/in-progress/
   ```

3. **作業完了**
   ```bash
   # in-progressからcompletedへ移動
   mv tickets/in-progress/004-*.md tickets/completed/
   ```

4. **保留・後回し**
   ```bash
   # backlogへ移動
   mv tickets/open/004-*.md tickets/backlog/
   ```

## 🤖 AIへの依頼方法

```
「tickets/open/001-feature-contact-form-validation.md のタスクをお願いします」
```

または

```
「openフォルダのチケット一覧を確認して、優先度の高いものから作業してください」
```

## 📊 ステータス確認

```bash
# 各フォルダのチケット数を確認
ls tickets/open | wc -l
ls tickets/in-progress | wc -l
ls tickets/completed | wc -l
ls tickets/backlog | wc -l
```

## 💡 便利なコマンド

```bash
# 全チケットを検索
grep -r "優先度: 高" tickets/

# 特定カテゴリのチケットを表示
ls tickets/*/feature*.md

# 今日作成されたチケット
grep -r "作成日: $(date +%Y-%m-%d)" tickets/
```