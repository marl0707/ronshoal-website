# シークレットから個人活動への導線

## 確認と変更

2026-10-08、公開 https://www.ronshoal.com/secret のリンクは公式HPへ戻る2本のみ（ロゴと末尾ボタン）。トップの「瀬島 和樹の個人ページへ」も /secret を指していた。

完了条件: 公式HP → /secret → 個人活動 → アーティスト活動 → 楽曲ページをクリックで移動でき、公式HPへ戻れること。

- /secret の上部・末尾に「個人活動のページへ」を追加。静的HTMLへ通常のaタグで遷移。
- 21_SejimaArtistSite/official_mockup を public/personal、site_mockup を public/artist に同梱（32ファイル、音源8本・ジャケット8本を含む）。既存の本文を継承。
- ローカル専用URLを /personal/index.html、/artist/index.html、/ に変更。モックのフッター表記を整理。
- 個人/artistの5つのHTMLのnoindexを維持。/secretの既存SEO設定は対象外。
- artistの320px幅でメニューが右側に切れたため、640px以下でロゴとメニューを2段に配置。各メニューに44pxの高さを確保。

## 検証

- origin/main cfa6a59から分離。ローカルmirrorは着手時3コミット遅れており、そのまま公開しない。
- npm run build: TypeScriptと18ページ生成成功。生成済みsecret.htmlの入口は2本。
- 独立レビュー: 静的・動的69参照の実在、ローカルURL残存ゼロ。差し戻しなし。
- ローカルNextサーバー: http://127.0.0.1:8912/secret
- 32配信ファイルのHEAD 200、存在しない個人HTML/音源は404。
- 実ブラウザでsecret → personal → artist → music → trackをクリック。音源メタデータ読込み readyState=4、errorなし（音声を聴いた確認ではない）。
- 375pxのsecret/personal/artistは横スクロールなし。320pxのartistは全5リンクが画面内、各高さ44px。document.scrollWidthだけではoverflow:hiddenで切れたリンクを検出できないため、リンク矩形の左右端も検証した。
- eslintは変更前からあるTimelineItemのany型が1件残る。no-explicit-any以外の変更ファイル検査は通過。ビルドの型検査は成功。
- スクショ: 26_Websites/evidence/20261008_secret_personal/secret-mobile.jpg、artist-mobile.jpg、secret-desktop.jpg

## 公開待ち

公開予定: /secretの入口変更と/personal・/artistの同梱。公式トップ・他サイト・DB・メール設定は変更しない。

本番はVercel ronshoal-website。調査時productionはdpl_9xZoQBAtewRN6Zsyo35XL4VpZfce、公開先はhttps://www.ronshoal.com。承認後、最新origin/mainとの競合を確認して正本へ適用し、既存GitHub自動デプロイ経路で反映する。

取り消し: 導線追加コミットをrevertして同経路で再配信。緊急時は上記既存デプロイへロールバック。公開後に入口クリック・静的素材・404否定側を再確認する。

本番反映・push・個人素材の公開はいずれも未実施。承認者は瀬島 和樹。
