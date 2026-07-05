"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useEffect, useState } from "react";
import { Header } from "@/components/ui/Header";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-corp-base text-corp-main flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
            <Header />
            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <FadeIn delay={0.1}>
                    <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4 fill-transparent text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">
                        404
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-corp-main">
                        お探しのページが見つかりません
                    </h2>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className="text-gray-600 mb-12 leading-relaxed">
                        アクセスしようとしたページは削除されたか、URLが変更されたか、一時的に利用できない可能性があります。<br className="hidden md:block" />
                        トップページまたは他の事業サービスをご覧ください。
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center gap-2 bg-corp-main text-white px-8 py-3.5 rounded-full font-bold hover:bg-opacity-90 transition-all hover:scale-105 shadow-md flex-1 w-full sm:w-auto"
                        >
                            トップページへ戻る
                            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium">
                        <Link href="/kenshin" className="text-gray-500 hover:text-black transition-colors underline-offset-4 hover:underline">健診プラス</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/ai" className="text-gray-500 hover:text-black transition-colors underline-offset-4 hover:underline">AI Burger</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/company" className="text-gray-500 hover:text-black transition-colors underline-offset-4 hover:underline">会社紹介</Link>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
