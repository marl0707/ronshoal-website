# 🗺️ ロンショールWebサイト構成図

## 📁 ディレクトリ構造
```
ronshoal-website/
│
├── 📄 index.html (ホームページ)
├── 📄 about.html (会社情報)
├── 📄 business.html (事業内容)
├── 📄 contact.html (お問い合わせ)
├── 📄 privacy.html (プライバシーポリシー)
│
├── 📁 services/ (各サービスページ)
│   ├── 📄 kenko-plus.html (健診プラス)
│   ├── 📄 health-passport.html (健康パスポート)
│   ├── 📄 workplace-clinic.html (職場deクリニック)
│   ├── 📄 ai-web-development.html (AI Web制作)
│   └── 📄 consulting.html (医療介護コンサル)
│
├── 📁 shakaihoken/ (社会保険サービス)
│   ├── 📄 index.html
│   └── 📁 images/
│
├── 📁 insole/ (足測定アプリ ※Next.js)
│   └── [Next.jsビルド済みファイル]
│
├── 📁 insole-src/ (足測定アプリソース)
│   └── [Next.jsソースコード]
│
├── 📁 images/ (画像ファイル)
│   └── [各種画像]
│
└── 📁 tickets/ (チケット管理)
    ├── 📁 open/ (未着手)
    ├── 📁 in-progress/ (作業中)
    ├── 📁 completed/ (完了)
    └── 📁 backlog/ (保留)
```

## 🌐 サイトマップ

```
トップページ (/)
│
├── ストーリー (#story)
├── ミッション (#mission)
├── サービス (#services)
│   ├── 健診プラス
│   ├── 健康パスポート
│   ├── 職場deクリニック
│   ├── AI Web制作
│   ├── 社会保険サービス (/shakaihoken/)
│   └── 医療介護コンサル
│
├── 会社情報 (/about.html)
│   ├── 会社概要
│   ├── 代表挨拶
│   └── アクセス
│
├── 事業内容 (/business.html)
│
├── お問い合わせ (/contact.html)
│
├── プライバシーポリシー (/privacy.html)
│
└── 足測定アプリ (/insole/)
    └── [Next.jsアプリケーション]
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: #00d4ff (明るい青)
- **Secondary**: #ff6b35 (オレンジ)
- **Accent**: #ffc107 (黄色)
- **Dark**: #1a1a1a
- **Light**: #ffffff
- **Gray**: #f8f9fa

### フォント
- **見出し**: Montserrat (英語), Noto Sans JP (日本語)
- **本文**: Noto Sans JP

### ブレークポイント
- **デスクトップ**: 1024px以上
- **タブレット**: 768px - 1023px
- **スマートフォン**: 767px以下

## 📱 レスポンシブ対応状況

| ページ | デスクトップ | タブレット | スマホ |
|--------|------------|-----------|--------|
| index.html | ✅ | ✅ | ✅ |
| about.html | ✅ | ⚠️ | ⚠️ |
| services/* | ✅ | ⚠️ | ⚠️ |
| contact.html | ✅ | ⚠️ | ⚠️ |

## 🔧 技術スタック

### 静的サイト部分
- HTML5
- CSS3 (カスタムプロパティ使用)
- Vanilla JavaScript
- レスポンシブデザイン

### 動的アプリケーション (/insole/)
- Next.js 14
- React
- TypeScript
- Tailwind CSS

## 📊 ページ別機能一覧

### トップページ (index.html)
- ヒーローセクション（アニメーション付き）
- ストーリーセクション（引用風デザイン）
- ミッションカード（ホバーエフェクト）
- サービスカード（フリップアニメーション）
- モバイルメニュー（ハンバーガー）

### サービスページ共通
- ヒーローバナー
- 3つの特徴セクション
- 料金表
- FAQ
- CTA（お問い合わせ誘導）

### 特殊機能
- **/insole/**: カメラで足測定、AIインソール提案
- **/shakaihoken/**: 料金シミュレーター

## 🚀 今後の改善予定
1. 全ページのレスポンシブ対応完了
2. ページ読み込み速度の最適化
3. SEO対策（構造化データ追加）
4. アクセシビリティ改善
5. お問い合わせフォームの機能強化