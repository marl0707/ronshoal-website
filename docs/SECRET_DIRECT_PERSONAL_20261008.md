# /secret は個人サイトを直接表示する

2026-10-08のユーザー提案に基づく差し替え準備。従来の代表プロフィールから個人活動への追加クリックをなくす。

## 正本と配信

- 個人トップの表示ソースは public/personal/index.html。
- next.config.ts の beforeFiles rewrite で /secret を上記HTMLへ向ける。URLは /secret のまま。
- CSS・JS・側面詳細への参照を /personal/ 起点の絶対パスへ変更。本文、デザイン、音源、noindexは維持。
- src/app/secret/page.tsx は以前のプロフィール表示のソースとして残るが、通常の /secret 配信はrewriteが優先する。今後の個人トップ編集は public/personal/index.html を対象とする。

## 受入基準と検証済みの範囲

代表プロフィールを入口に追加するのではなく、公式HPのシークレット入口の遷移先で個人サイトそのものが表示されること。

- npm run build、next.config.tsのeslint、git diff --check成功。
- 独立レビュー差し戻しなし。
- 再起動したローカルNextサーバーで /secret と /personal/index.html のHTTP本文がバイト一致。
- /secret内のnoindex、CSS・JS3本・詳細ページの200と内容を確認。
- /secret/nonexistentは404（配下全体を誤って個人サイトへ向けない）。
- ブラウザで /secret の個人サイト表示、/secret#facets のページ内移動、経営者の詳細リンクを確認。
- 375px幅でCSS読込み、横はみ出しなし。
- プレビュー: http://127.0.0.1:8912/secret
- 画面: 26_Websites/evidence/20261008_secret_personal/direct-secret-preview.jpg

## 本番差し替え待ち

対象はrewrite1本と個人トップHTMLのリンク解決のみ。承認後、最新mainへ反映して既存Vercel自動配信を利用する。本番 /secret の本文一致・表示・詳細リンク・404を再確認する。

取り消しはこの差し替えコミットのrevert。直前の本番配信は dpl_GNm3bnrvtCbFjF51YG3rZ8grU2p4（コミットb9bef3c）。

この変更の本番反映は未実施。公開承認者は瀬島 和樹。
