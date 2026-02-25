# ドメイン設定・移行記録 (2026年2月26日)

## 概要
`ronshoal.com` アプリケーションのフロントエンドをGitHub Pages（レガシーなHTML）からVercel（Next.jsプロジェクト）に移行した際の設定記録です。

## 対象システム
- **メインドメイン**: `ronshoal.com`
- **サブドメイン**: `www.ronshoal.com`
- **レジストラ**: お名前.com (ネームサーバー: `01.dnsv.jp` ~ `04.dnsv.jp`)
- **デプロイ先**: Vercel (`ronshoal-website` プロジェクト)

## お名前.com DNSレコード設定（2026/02/26 最新）
以下のレコードをVercel向けに設定し、それぞれVercelから所有権を検証(Verify)しています。

| ホスト名 | TYPE | TTL | VALUE (内容) | 備考 |
| :--- | :--- | :--- | :--- | :--- |
| `(空白)` | A | 3600 | `216.198.79.1` | Vercelの本番用IPv4アドレス。ネイキッドドメイン(`ronshoal.com`)用。 |
| `_vercel` | TXT | 3600 | `vc-domain-verify=ronshoal.com,10bc41c9f2b2f2aa072f` | Vercel側での`ronshoal.com` 所有権証明用 |
| `www` | CNAME | 3600 | `cname.vercel-dns.com` | `www` あり用のVercelエイリアス。Aレコードより優先してルーティングされる。 |
| `_vercel.www` | TXT | 3600 | `vc-domain-verify=www.ronshoal.com,8931f4544a4c90ec1a12` | Vercel側での`www.ronshoal.com` 所有権証明用 |

※ その他、Google Workspace用のMXレコード等が設定されています。
※ 以前設定されていた、GitHub Pages用の旧レコード（`185.199...` 系のAレコードや、`marl0707.github.io` 用のCNAME）はすべて削除済みです。

## トラブルシューティング（備忘録）
### NXDOMAIN または 古い画面が表示される問題
- **事象**: VercelへのDNS切り替え後も、ブラウザで `https://ronshoal.com` や `www.ronshoal.com` にアクセスすると、古いGitHub Pagesに残ったテスト用HTML（`kkokaosdkokkgj` 等）が表示されたり、NXDOMAINでアクセス不可になった。
- **原因と解決**: プロバイダやルーター、ブラウザ側での旧DNS情報（IPv4 / IPv6 AAAAレコード）の強力なキャッシュが原因。確実なアクセスルートを即時に確保するため、一度は削除した `www.ronshoal.com` のCNAME設定を復活（Vercel向けに新規設定）させた。
- **補足**: 完全なDNS伝播には最大24時間を要する可能性があるため、検証時には別回線（Wi-Fiオフにしたスマホの4G・5Gなど）で行うか、ブラウザのシークレットウィンドウを利用することが望ましい。
