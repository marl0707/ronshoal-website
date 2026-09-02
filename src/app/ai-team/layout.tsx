import type { Metadata } from 'next';

// 2026-09-02: page.tsx が 'use client' のため metadata を出せない。
// route 単位の layout（サーバーコンポーネント）で付ける。
// それまで layout.tsx（ルート）の既定タイトルが5ページに同じまま出ていた（重複タイトル）。
export const metadata: Metadata = {
    title: 'AIチーム紹介｜28人のAI社員が5部署で稼働中｜ロンショール合同会社',
    description:
        'ロンショールでは28人のAIが経営司令部・開発プロダクト部・品質保証本部・教育部・マーケティング部の5部署に分かれて実務を回しています。各部署の役割と稼働の様子を紹介します。',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
