import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ロンショール合同会社 | Ronshoal LLC",
  description: "すべての人々に後悔のない人生を。労災二次健診、再生医療、AI開発などを展開するロンショール合同会社の公式サイトです。",
  keywords: ["ロンショール", "Ronshoal", "労災二次健診", "健診プラス", "健康経営", "AI開発", "AGIステップ", "健康パスポート"],
  openGraph: {
    title: "ロンショール合同会社 | Ronshoal LLC",
    description: "すべての人々に後悔のない人生を。医療・AI・ライフスタイルの領域から世界をサポートします。",
    url: "https://ronshoal.com",
    siteName: "Ronshoal LLC",
    locale: "ja_JP",
    type: "website",
    // images: [{ url: "https://ronshoal.com/images/ogp.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ロンショール合同会社 | Ronshoal LLC",
    description: "すべての人々に後悔のない人生を。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4635815438893136"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
