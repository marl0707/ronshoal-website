import Link from "next/link";

export default function KenshinPage() {
    return (
        <div className="min-h-screen bg-kenshin-base text-kenshin-text p-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-kenshin-main mb-4">健診プラス</h1>
            <p className="text-xl mb-8">労災二次健診を、無料で、簡単に。</p>
            <div className="animate-pulse text-kenshin-accent font-bold">
                UI生成中... (Stitch Integration Pending)
            </div>
            <Link href="/" className="mt-8 text-sm underline hover:text-kenshin-main">
                ← 法人TOPへ戻る
            </Link>
        </div>
    );
}
