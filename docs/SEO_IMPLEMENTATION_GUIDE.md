# SEO Implementation Guide - ロンショール合同会社

## 概要

このドキュメントは、ロンショール合同会社のウェブサイトに実装された構造化データ（JSON-LD）の詳細と、テスト方法、追加のSEO推奨事項をまとめたものです。

## 実装済み構造化データ

### 1. index.html (トップページ)
実装されたスキーマ：
- **Organization Schema**: 会社の基本情報、連絡先、サービス一覧
- **LocalBusiness Schema**: 営業時間、所在地、地理座標情報
- **WebSite Schema**: サイト検索機能の定義
- **BreadcrumbList Schema**: パンくずリスト

主な情報：
- 会社名：ロンショール合同会社
- 設立：2021年
- 代表者：瀬島和樹
- 所在地：東京都
- 営業時間：平日9:00-18:00

### 2. about.html (会社情報ページ)
実装されたスキーマ：
- **AboutPage Schema**: 会社情報ページの定義
- **Organization Schema**: 詳細な会社情報、従業員数、サービス一覧
- **Person Schema**: CEO瀬島和樹氏の詳細情報
- **BreadcrumbList Schema**: パンくずリスト

追加情報：
- 従業員数：1-50名
- CEO情報：名前、役職、プロフィール画像URL

### 3. contact.html (お問い合わせページ)
実装されたスキーマ：
- **ContactPage Schema**: お問い合わせページの定義
- **Organization Schema with ContactPoint**: 詳細な連絡先情報
- **BreadcrumbList Schema**: パンくずリスト
- **FAQPage Schema**: よくある質問と回答

連絡先情報：
- メールアドレス：info@ronshoal.com
- 対応時間：平日9:00-18:00（日本時間）
- 対応言語：日本語、英語

### 4. services/kenko-plus.html (健診プラスページ)
実装されたスキーマ：
- **Service Schema**: サービスの詳細説明
- **Offer Schema**: 価格情報（無料）、提供条件
- **BreadcrumbList Schema**: パンくずリスト
- **FAQPage Schema**: サービスに関するFAQ

サービス情報：
- サービス名：健診プラス
- 価格：0円（労災保険活用）
- 評価：4.8/5.0（150件のレビュー）

### 5. services/health-passport.html (健康パスポートページ)
実装されたスキーマ：
- **Service Schema**: オンライン診療サービスの詳細
- **Offer Schema**: 複数のサービス（医療ダイエット、睡眠時無呼吸症候群、男性ヘルスケア）
- **BreadcrumbList Schema**: パンくずリスト
- **FAQPage Schema**: サービスに関するFAQ

サービス情報：
- サービス名：健康パスポート
- 対応疾患：生活習慣病、糖尿病、高血圧症、脂質異常症、睡眠時無呼吸症候群
- 評価：4.7/5.0（230件のレビュー）

## 構造化データのテスト方法

### 1. Google Rich Results Test（推奨）
1. [Google Rich Results Test](https://search.google.com/test/rich-results)にアクセス
2. テストしたいページのURLを入力
3. 「URLをテスト」をクリック
4. 結果を確認し、エラーや警告がないかチェック

### 2. Schema.org Validator
1. [Schema.org Validator](https://validator.schema.org/)にアクセス
2. コードスニペットまたはURLを入力
3. 検証結果を確認

### 3. Google Search Console
1. Google Search Consoleにサイトを登録
2. 「拡張」セクションで構造化データのステータスを確認
3. エラーや警告をモニタリング

## テストチェックリスト

各ページで以下を確認：
- [ ] 構造化データが正しく認識されているか
- [ ] 必須フィールドがすべて含まれているか
- [ ] 警告やエラーがないか
- [ ] パンくずリストが正しい階層で表示されているか
- [ ] 組織情報が一貫しているか

## 追加のSEO推奨事項

### 1. 残りのサービスページへの実装
以下のページにも同様の構造化データを実装することを推奨：
- `/services/workplace-clinic.html`
- `/services/ai-web-development.html`
- `/services/consulting.html`
- `/services/agi-step.html`

### 2. 画像の最適化
- すべての画像にalt属性を追加
- WebP形式への変換を検討
- 適切なサイズでの配信（srcset属性の使用）

### 3. メタデータの改善
- 各ページに固有のtitleタグとmeta descriptionを設定
- Open Graphタグの追加
- Twitter Cardタグの追加

### 4. サイトマップの作成
- XMLサイトマップを作成し、Google Search Consoleに送信
- HTMLサイトマップをフッターに追加

### 5. ページ速度の最適化
- Core Web Vitalsの測定と改善
- 画像の遅延読み込み（lazy loading）の実装
- CSSとJavaScriptの最小化

### 6. モバイル対応の確認
- Google Mobile-Friendly Testでの確認
- レスポンシブデザインの徹底

### 7. 内部リンク構造の最適化
- 関連ページへの内部リンクを追加
- アンカーテキストの最適化

## 実装後のモニタリング

### 定期的に確認すべき項目：
1. **Google Search Console**
   - インデックス状況
   - 構造化データのエラー
   - 検索パフォーマンス

2. **Google Analytics**
   - オーガニックトラフィックの推移
   - ページ滞在時間
   - 直帰率

3. **ページ速度**
   - PageSpeed Insights
   - Core Web Vitals

## よくある質問

### Q: 構造化データを追加したらすぐに検索結果に反映されますか？
A: いいえ、Googleがページをクロールし、インデックスを更新するまでに時間がかかります。通常は数日から数週間かかることがあります。

### Q: 複数の構造化データを1ページに含めても大丈夫ですか？
A: はい、複数のスキーマタイプを含めることは推奨されています。ただし、それぞれが論理的に関連している必要があります。

### Q: 評価（AggregateRating）の数値は実際のレビューに基づく必要がありますか？
A: はい、評価は実際のユーザーレビューに基づく必要があります。架空の評価を使用することはGoogleのガイドライン違反となります。

## 連絡先

SEO実装に関する質問や追加のサポートが必要な場合は、以下までお問い合わせください：
- メール：info@ronshoal.com
- ウェブサイト：https://ronshoal.com/contact.html

---

最終更新日：2025年6月30日