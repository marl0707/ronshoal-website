import type { Metadata } from 'next';

// 2026-09-02: page.tsx が 'use client' のため metadata を出せない。
// route 単位の layout（サーバーコンポーネント）で付ける。
// それまで layout.tsx（ルート）の既定タイトルが5ページに同じまま出ていた（重複タイトル）。
export const metadata: Metadata = {
    title: '会社概要・代表プロフィール｜ロンショール合同会社',
    description:
        'ロンショール合同会社の理念・沿革と、代表社員 瀬島和樹のプロフィール。製薬MRから医療施設の立ち上げ、テクノロジーを使った事業開発までの経歴を掲載しています。',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
