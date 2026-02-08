import Link from "next/link";

export default function AiPage() {
    return (
        <div className="min-h-screen bg-ai-base text-ai-text p-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-ai-main mb-4">AI Burger</h1>
            <p className="text-xl mb-8">うまい、早い、安い。システム開発の常識を覆す</p>
            <div className="animate-pulse text-ai-accent font-bold">
                UI生成中... (Stitch Integration Pending)
            </div>
            <Link href="/" className="mt-8 text-sm underline hover:text-ai-main">
                ← 法人TOPへ戻る
            </Link>
        </div>
    );
}
