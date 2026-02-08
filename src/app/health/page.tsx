import Link from "next/link";

export default function HealthPage() {
    return (
        <div className="min-h-screen bg-health-base text-health-text p-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-health-main mb-4">健康パスポート</h1>
            <p className="text-xl mb-8">科学的根拠に基づいた、未来の医療へのパスポート</p>
            <div className="animate-pulse text-health-accent font-bold">
                UI生成中... (Stitch Integration Pending)
            </div>
            <Link href="/" className="mt-8 text-sm underline hover:text-health-main">
                ← 法人TOPへ戻る
            </Link>
        </div>
    );
}
