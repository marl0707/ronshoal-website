import type { Metadata } from "next";

/**
 * NOINDEX_AI_20260827: 社長指示（2026-08-27）— 当社が MWR を扱っていることを検索から辿らせない。
 *
 * page.tsx が client component（'use client'）で metadata を持てないため、
 * layout 側で robots を指定する。直リンクでのみ到達させる。
 */
export const metadata: Metadata = {
    robots: { index: false, follow: false },
    // META_PERSONA_20260827: これを書かないと、ルート layout の
    // "ロンショール合同会社 | Ronshoal LLC" がそのまま <title> に出る（実測）。
    title: "なんでも聞いてください｜ギリギリ社長",
    description: "会員制の旅行サービスについて、費用・仕組み・やめたいときのことまでお答えします。",
    keywords: [],
    openGraph: {
        title: "なんでも聞いてください｜ギリギリ社長",
        description: "会員制の旅行サービスについて、費用・仕組み・やめたいときのことまでお答えします。",
        siteName: "ギリギリ社長",
        url: undefined,
        type: "website",
    },
    twitter: { card: "summary", title: "なんでも聞いてください｜ギリギリ社長" },
    metadataBase: undefined,
};

export default function TravelClubAiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
