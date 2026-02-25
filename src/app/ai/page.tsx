import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";
import { Cpu, Zap, Settings, Command } from "lucide-react";
import Link from "next/link";

export default function AiPage() {
    return (
        <main className="min-h-screen bg-ai-base text-ai-text pt-24 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-16">
                <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-ai-main">
                        AI Burger / AGIステップ
                    </h1>
                </TextReveal>
                <FadeIn delay={0.1}>
                    <p className="text-lg md:text-xl leading-relaxed mb-16 opacity-90">
                        大規模言語モデルを用いたビジネス支援事業。<br className="hidden md:block" />
                        今やビジネスを構築する上で避けて通れないと言われている最新のAI技術で、「あなたの分身」を作り出します。<br className="hidden md:block" />
                        うまい、早い、安い。システム開発の常識を覆すソリューションです。
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="w-full aspect-[21/9] mb-16 overflow-hidden bg-ai-sub rounded-2xl group shadow-lg">
                        <img
                            src="https://picsum.photos/seed/aiburger/1600/900"
                            alt="AI Burger Concept"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <h2 className="text-2xl font-bold mb-8 text-ai-main flex items-center gap-3">
                        <Command className="w-6 h-6" />
                        圧倒的なAIアドバンテージ
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-ai-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <ClockIcon className="w-5 h-5 text-ai-accent" />
                                24時間対応
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                AIが24時間体制でビジネスをサポート。深夜や休日のお問い合わせにも逃さず対応します。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-ai-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-ai-accent" />
                                業務効率化
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                定型業務の自動化により、圧倒的なコスト削減と業務効率化を同時に実現します。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-ai-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-ai-accent" />
                                カスタマイズ
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                企業ごとの固有の業務やマニュアルに特化した、専用のAIシステムを構築します。
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="bg-ai-sub p-8 md:p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute -top-4 -left-4 text-9xl text-ai-main opacity-10 font-serif">"</div>
                        <div className="relative z-10">
                            <p className="text-lg md:text-xl italic leading-relaxed mb-6 font-medium">
                                「AGIステップの導入で、顧客対応の効率が格段に向上しました。24時間対応が可能になり、顧客満足度も大幅に改善しています。」
                            </p>
                            <p className="text-right font-bold text-ai-main">
                                - サービス業C社 営業部長
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="mt-20 text-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-ai-main text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                            お問い合わせはこちら
                        </Link>
                        <div className="mt-8">
                            <Link href="/" className="text-sm underline hover:text-ai-main text-gray-500">
                                ← トップページへ戻る
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
