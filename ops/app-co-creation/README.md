# iOSアプリ共同開発の受付

募集ページは `/app-co-creation.html`。トップページとAI事業ページから案内する。フォームの相談条件確認は、開発契約や支払いの成立ではない。

## 受付と通知

1. ブラウザが `/api/app-co-creation` へJSONを送信する。
2. Next.jsが既存の `RONSHOAL_CHAT_BASE_URL` と `RONSHOAL_CHAT_SECRET` で受付ゲートウェイへ転送する。資格情報はブラウザへ出さない。
3. ゲートウェイは必須項目・確認版・文字数・入力形式・送信頻度を検査し、受付番号ごとに記録する。
4. 既存Google Workspaceのgwsで `info@ronshoal.com` へ通知する。相談者のアドレスはReply-Toに使う。相談者への自動メールは送らない。
5. メール通知を確認した場合だけフォームへ成功を返す。失敗時は入力を残し、同じ受付番号で再試行する。

記録は `/home/antigravity/cockpit/data_local_mirror/app_co_creation/submissions/<受付番号>.json`。公開ディレクトリに置かず、記録ファイルは600、親ディレクトリは700。送信本文は一時ファイルのアップロードで渡し、コマンド引数やログへ出さない。一時ファイルは処理後に除去する。

受付番号と内容のハッシュで二重受付を防ぐ。メールのMessage-IDも受付番号から決め、送信結果が不明な場合は既存メールを検索してから再送する。直前の不確実な送信から120秒以内は再送しない。

通知待ちは既存 `ronshoal-chat.service` 内のlifespan処理で5分ごとに再確認する。追加のGoogle資格情報、管理画面、cronや他のユーザーへの通知は作らない。認証付き `/intake/app-co-creation/status` で起動と最終確認結果を取得できる。

自己通知が送信済みだけに残る場合に備え、宛先固定で送った通知を既存認証メールボックスの受信トレイへ未読で表示する。既存受信トレイにinfo宛メールが届いていること、infoの送信名義が認証済みであることを確認した。

## 更新・公開

ソースの正本はこのリポジトリの `ops/app-co-creation/`。実行コピーは `/home/antigravity/cockpit/app_co_creation_intake.py`。初回配線は `install_backend.py`、更新・有効化は `activate_backend.py` を使う。いずれも現行サーバーのPythonテストに合格してから書き換える。

`activate_backend.py` は原本を退避してatomicに差し替え、既存サービスを再起動する。ヘルスチェックと公開経路の再送処理確認に失敗した場合、今回のモジュールだけを元へ戻す。

```sh
cd /home/antigravity/projects/ronshoal-website
python3 ops/app-co-creation/activate_backend.py
npm run build
npx eslint src/app/api/app-co-creation/route.ts src/app/sitemap.ts
npx react-doctor@latest --verbose --diff
# 対象ファイルだけをコミットした後
npm run publish:app-co-creation
# 公開反映後の不正入力・Origin制限の確認（メールは送らない）
python3 ops/app-co-creation/check_public_paths.py
```

公開コマンドはゲートウェイの公開経路を先に確認し、401/400の期待値が揃わない場合はpushを止める。転送先URLの `/ai-chat/` を落とすと別サービスへ到達して404になるため、URLの接頭部分を保持する。

## 取り消しと検証

サイト側は今回のコミットをrevertして通常の公開経路で再公開する。受付配線を取り消す場合は、ゲートウェイの `_install_app_co_creation_intake(app, _SECRET)` とそのimportだけを取り除いて再起動する。バックアップは `/home/antigravity/cockpit/releases/appco-20261007/`。既存チャットの他の変更や受付記録は削除しない。

2026年10月7日、9件のテストで不正入力・認証・二重受付・通知失敗と再送・lifespan配線を確認。公開URLの接頭部分を落とした否定側で公開チェックが停止すること、意図的に壊したテストで有効化処理が停止して実行ファイルが変わらないことも確認する。

この追加の途中で古い起動イベントAPIが現行FastAPIで使えず起動確認に失敗した。互換性のあるlifespanへ修正し、テストを有効化スクリプトの必須工程に組み込んだ。構文チェックだけで有効化しない。
