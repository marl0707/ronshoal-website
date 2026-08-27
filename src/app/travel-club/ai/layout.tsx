import type { Metadata } from "next";

/**
 * NOINDEX_AI_20260827: 社長指示（2026-08-27）— 当社が MWR を扱っていることを検索から辿らせない。
 *
 * page.tsx が client component（'use client'）で metadata を持てないため、
 * layout 側で robots を指定する。直リンクでのみ到達させる。
 */
export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function TravelClubAiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
