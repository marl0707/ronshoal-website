import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "足育（あしすく）ナビ - 子どもの足の健康お役立ちサイト",
  description: "0歳から18歳までの成長期における足のケア、靴選び、スポーツ障害予防に関する情報を提供。高齢者向けの歩行と健康寿命に関する情報も掲載。",
  keywords: "子ども,足の健康,靴選び,スポーツ障害,成長期,高齢者,歩行,健康寿命",
  openGraph: {
    title: "足育（あしすく）ナビ - 子どもの足の健康お役立ちサイト",
    description: "0歳から18歳までの成長期における足のケア、靴選び、スポーツ障害予防に関する情報を提供",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
