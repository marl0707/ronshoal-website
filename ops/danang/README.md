# 瀬島のダナン候補帳

依頼: 瀬島 和樹、2026-10-28。友人向けの個人的なダナン旅行候補ページ。

公開URL: https://www.ronshoal.com/personal/danang/index.html

## 要件と正本

- 今回の20店は未訪問。実食レビューや味・接客の保証を書かず、出発前の期待を一人称で紹介する。
- 肉入りバインミーを朝に食べたい。浅煎りでフルーティーなコーヒーが好き。最近海老を食べ過ぎたので、今回は海老以外の海鮮を楽しみたい。
- 一番気になるのはQuán NGONのベトナム式ボーネ。コーヒーではMewが特に気になる。
- 店舗正本は本人が渡した20件のGoogleマップリンク。2026-10-28に20件を展開し、店名・番地を照合。`spots.json`に対応を保持する。
- 「クァンハイ」の共有リンクはQuán Hải Sản Bé Nữを指す。MステーキのリンクはM Kitchenを指す。地図の店名と本人の呼び方を併記する。
- 約100円、近い／遠い、プルコギ、海鮮春雨、カニスープ等は本人の出発前メモ。現行価格・距離・提供の保証にしない。ホテルの名称や位置は取得・掲載していない。
- モックの記憶だけに頼らず、公開アーティストページのHTMLも取得。Archivo Black＋Zen Kaku Gothic New、大きな欧文、黒／骨白／オレンジ、粒子の方針を参照。
- 特定の存命作家を模倣せず、独自の比喩・軽いユーモア・読み進める仕掛けで制作。

## 補足調査

- XLIIIの超浅煎り方針: https://xliiicoffee.com/en/journal/the-light-roasting-method-preserving-the-true-flavor-of-specialty-coffee/
- XLIIIのダナン支店: https://xliiicoffee.com/en/location/xliii-coffee-da-nang/
- バーラン12 Lê Thánh Tôn支店の朝営業の参考: https://www.vietnamairlines.com/mo/en/plan-book/travel/travel-guide/best-banh-mi-da-nang
- Every Half Vincom支店住所: https://www.everyhalf.vn/location

## 制作・検査

```sh
npm run check:danang
node ops/danang/check.mjs --self-test
python3 ops/danang/make-og.py
npm run build -- --webpack
```

`spots.json`を編集して`npm run check:danang`で静的HTMLを再生成する。build.mjsはHTMLを書き込んだ後にcheck.mjsを実行する。通常の`npm run build`にも接続し、20店・アンカー・保存・絞り込み・不正URL断片など36項目を検査する。make-og.pyはPillowとmacOSの既存フォントから共有画像を生成する補助で、本番の実行には不要。

## 修正と恒久対策

- 不具合のクラス: 絞り込みで隠れるアンカー対象をhashchangeだけで復帰させると、同一hashへの再クリックではイベントが起きず移動できない。章／店へのリンクclickでも同じ復帰関数を呼ぶ。
- 不具合のクラス: 制御されないURL断片のdecodeURIComponentは不正なpercent表現で初期化全体を止める。このページのIDはASCII固定のため、不要な復号を除去。
- 36項目の実行検査と、旧不具合を注入したコピーを拒否するself-testを恒久化し、通常buildへ配線。メモだけで終わらせない。サーバー側のAI運用設定への変更は不要。
- オレンジの特集枠でフォーカス輪郭もオレンジになっていたため、枠内リンクの輪郭を黒へ変更。
- 本人が申告していない「悪い癖」の言い回しは、将来の行動を望む表現へ変更。

## 検証の限界

独立したコピー／事実、技術、デザインのレビューを実施。技術は軽量DOMで正負試験。CSSは320〜1440pxの分岐とコントラストを静的確認。OG画像は実画像を確認。

アプリ内ブラウザ操作はWork設定で無効と返った。利用者のフルアクセス変更後も同じ結果。外部ブラウザへ切り替えていない。実画面スクリーンショット、タッチ操作、canvasのフレーム変化、スマートフォン実機の確認は未実施。公開ページのHTTP・アセットバイト・20店舗と固有文言の照合は別途実施する。

公開は既存ronshoal-websiteのmainへの通常pushによるVercel配信。rollbackは今回の追加コミットをrevertして通常push。既存ページの内容・ナビは変更しない。

noindexは検索露出を抑える意図で、アクセス制限ではない。URLを知る人は閲覧可能。「行きたい」は各閲覧ブラウザだけに保存し、共通の閲覧履歴や外部送信は作らない。

## 2026-10-29 スマートフォン最適化

本人の「スマホでしかみない」に合わせて調整。ブラウザ操作が有効になったため、今回は実画面を検証。

- 本文16px、料理メモ13px、住所13px。地図は幅いっぱいの50px高ボタン、保存44px、下メニュー56px。
- 6項目の固定下メニューからカテゴリまたは保存済みの最初の店へ移動。空の保存リストにも対応。safe-area-inset-bottom、ズーム可能なviewportを維持。
- 長い導入文はdetailsで開閉。最初の画面を短くし、大本命の紹介はコンパクトに。全20店の紹介文と地図は維持。
- 320pxで大見出しの矢印が画面端へ出る問題を解消。動く粒子はスマホの画素密度と更新回数を下げ、表示外では停止。
- 固定ツールバーとアンカーの空きはscroll-paddingとscroll-marginの合計で検証。下メニューは長距離の自動スクロールアニメーションを使わず直接ジャンプ。
- `check.mjs --self-test`は64項目。通常と固定下メニューの12ボタンの同期、カテゴリ別件数、保存／空状態、最初の結果への移動を継続検査。
- アプリ内ブラウザの320/375/390/430pxで横はみ出し0、本文16px、地図／保存／参考リンク／下メニューの44px未満の操作領域0を実測。端末実機によるOS固有の挙動は未検証。

検証画像・数値: `26_Websites/evidence/20261029_danang_guide/mobile-*`。前節のブラウザ利用不可は初版公開時の制約で、今回の検証では解消。
