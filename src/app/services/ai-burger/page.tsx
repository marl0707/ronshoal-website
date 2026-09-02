import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/ui/Footer";


import type { Metadata } from 'next';

// 2026-09-02: このページに固有の metadata が無く、layout.tsx の既定タイトル
// 「ロンショール合同会社 | Ronshoal LLC」が5ページに同じまま出ていた（重複タイトル）。
export const metadata: Metadata = {
    title: 'AI Burger｜AI駆動のシステム開発・受託開発｜ロンショール合同会社',
    description:
        'MVPから大規模SaaSまで。AIを活用した開発手法でコーディング工数を圧縮し、短納期・低コストでシステムを提供します。LINEから無料相談・お見積りが可能です。',
};
export default function AIBurgerPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-corp-main/10 bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.02),transparent_50%)]" />
                </div>
                <div className="container relative z-10 px-4">
                    <FadeIn direction="up" className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-corp-main/5 px-4 py-2 rounded-full mb-8">
                            <span className="text-corp-main font-mono text-sm tracking-wider font-semibold">
                                AI DRIVEN DEVELOPMENT
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-corp-main leading-[1.1]">
                            AI Burger
                        </h1>
                        <p className="text-xl md:text-2xl text-corp-main/70 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                            <span className="font-semibold text-corp-main">「早い・うまい・安い」</span><br />
                            最適化されたAI駆動開発で、システム開発を。<br className="hidden md:block" />
                            <span className="text-lg md:text-xl opacity-80 mt-2 block">MVPから大規模SaaSまで。シリコンバレー品質のシステムを圧倒的スピードで提供します。</span>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
                            <a href="https://lin.ee/h7F3bIt" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#06C755] text-white text-sm tracking-wider font-bold hover:bg-[#05b34c] transition-colors w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg shadow-sm">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.907 8.885 9.444 9.595.369.078.874.241 1.002.553.116.279.038.715-.015 1.002-.085.467-.535 2.652-.65 3.141-.144.646.66 1.037 1.161.733.456-.277 5.619-3.35 7.697-5.698C22.42 16.591 24 13.626 24 10.304" />
                                </svg>
                                LINEで無料相談・お見積り
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why AI Burger? (3つの革新) */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-main mb-6">
                                Why AI Burger?
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light leading-relaxed">
                                最新のAI技術とシリコンバレーの開発手法を最適に組み合わせることで、<br className="hidden md:block" />
                                すべての工程において圧倒的なコスト効率化を徹底しています。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {/* 1. 早い */}
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-white p-8 md:p-12 rounded-2xl h-full shadow-sm border border-corp-main/5 hover:border-corp-main/20 transition-all hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-corp-main mb-6 tracking-tighter flex items-center gap-3">
                                    <span className="text-4xl">⚡</span> 早い
                                </h3>
                                <ul className="space-y-4 text-corp-main/70 font-light text-left text-sm md:text-base">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        AI活用によりコーディング時間を大幅削減
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        最短当日でのMVP（最小限のプロダクト）納品も可能
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        {/* 2. うまい */}
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white p-8 md:p-12 rounded-2xl h-full shadow-sm border border-corp-main/5 hover:border-corp-main/20 transition-all hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-corp-main mb-6 tracking-tighter flex items-center gap-3">
                                    <span className="text-4xl">🎯</span> うまい
                                </h3>
                                <ul className="space-y-4 text-corp-main/70 font-light text-left text-sm md:text-base">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        世界基準のシリコンバレー品質
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        米Bloomberg掲載など確かな実績
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        サンフランシスコWeb3イベント受賞歴
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        {/* 3. 安い */}
                        <FadeIn direction="up" delay={0.3}>
                            <div className="bg-white p-8 md:p-12 rounded-2xl h-full shadow-sm border border-corp-main/5 hover:border-corp-main/20 transition-all hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-corp-main mb-6 tracking-tighter flex items-center gap-3">
                                    <span className="text-4xl">💰</span> 安い
                                </h3>
                                <ul className="space-y-4 text-corp-main/70 font-light text-left text-sm md:text-base">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        他社見積もりの最大20%OFF保証
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-corp-main mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        AI活用による抜本的なコスト最適化構造
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Service Lineup */}
            <section className="py-24 md:py-32 bg-white border-t border-corp-main/10">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-main mb-6">
                                Service Lineup
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                御社のフェーズや課題に合わせて、最適な開発サービスを柔軟に提供いたします。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "ウェブサイト制作", desc: "コーポレートサイト、サービスサイト等をAI活用で通常の半分の納期で構築" },
                            { title: "LP制作", desc: "超速プロトタイピングによる柔軟なマーケティング基盤の早期立ち上げ" },
                            { title: "ECサイト構築", desc: "AIを活用した効率的かつ拡張性の高いセキュアなEコマース基盤の構築" },
                            { title: "AIチャットボット開発", desc: "最新LLMを活用したカスタムAIソリューションで社内DX・顧客対応を自動化" },
                            { title: "SaaS/業務システム開発", desc: "MicroservicesアーキテクチャによるスケーラブルなSaaS基盤・社内管理画面構築" },
                            { title: "Talent Platform", desc: "プロ人材のチーム支援やAIチームの立ち上げなど内製化サポート" },
                        ].map((service, index) => (
                            <FadeIn key={index} direction="up" delay={0.1 * index}>
                                <div className="p-8 h-full bg-[#F8FAFC] border border-corp-main/5 hover:border-corp-main/30 hover:shadow-md transition-all rounded-xl group cursor-pointer">
                                    <h3 className="text-xl font-bold text-corp-main mb-3 group-hover:text-corp-main/80 transition-colors">{service.title}</h3>
                                    <p className="text-corp-main/60 text-sm font-light leading-relaxed">{service.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Works & Partner */}
            <section className="py-24 md:py-32 bg-corp-main text-white">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                Works & Partner
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                                世界の最前線で培われた技術力とスタートアップ精神で、<br className="hidden md:block" />
                                御社のビジネス成長を技術面から強力に牽引します。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto items-stretch">
                        <FadeIn direction="up">
                            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-2">中川 慎太郎</h3>
                                <p className="text-white/60 mb-8 font-light text-sm">Shintaro Nakagawa / 開発パートナー</p>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-white mb-2">経歴</p>
                                        <ul className="space-y-3 text-white/80 font-light text-sm leading-relaxed">
                                            <li className="flex items-start">
                                                <span className="mr-2 text-white/40">2021-2025</span>
                                                <div>
                                                    米国シリコンバレーCTO - Bye & DeStore(US)<br />
                                                    <span className="text-white/50 text-xs">Forever21、メルカリ等から出資獲得実績</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-white/40">2019-2022</span>
                                                <div>
                                                    都内スタートアップCPO - Lisa Technologies<br />
                                                    <span className="text-white/50 text-xs">サイバーエージェント等から出資獲得実績</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-2">専門領域</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["フルスタック (10Y+)", "AI/LLM", "Web3", "Microservices", "SaaS"].map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2} className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-8">クライアント成功事例</h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-white/30 pl-6 py-2">
                                    <h4 className="text-lg font-bold mb-2">年商5億規模リユース業</h4>
                                    <p className="text-white/70 font-light text-sm">業務一気通貫SaaS開発により、30%以上の業務効率DX化を達成。</p>
                                </div>
                                <div className="border-l-2 border-white/30 pl-6 py-2">
                                    <h4 className="text-lg font-bold mb-2">年商70億規模人材・介護業</h4>
                                    <p className="text-white/70 font-light text-sm">エンジニア不要のモダンなシステム開発・DX支援を実現。</p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <p className="text-white/60 text-sm font-light mb-4">主な過去の開発プロダクト</p>
                                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-light text-white/80">
                                        <li>・フードデリバリーマネージャー</li>
                                        <li>・huriuri（フリウリ）</li>
                                        <li>・Orb（Web3 Social）</li>
                                        <li>・Bye（AI検索エンジン）</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Development Flow */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <FadeIn direction="up">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-corp-main text-center mb-12">
                                柔軟な開発フロー
                            </h2>
                            <p className="text-center text-corp-main/70 font-light">プロジェクトの成否は「初動の設計」で決まります。AIバーガーでは要件定義のムダを排除します。</p>
                        </FadeIn>

                        <div className="space-y-8">
                            <FadeIn direction="up" delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-corp-main/5 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-12 h-12 bg-corp-main/5 rounded-full flex items-center justify-center shrink-0">
                                    <span className="font-bold text-corp-main text-lg">01</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-corp-main mb-3">セールスAIエンジニアによる直提案</h3>
                                    <p className="text-corp-main/70 font-light text-sm leading-relaxed">営業マンを挟まず、初期段階から高い技術知見を持つエンジニア視点でフィードバックを提供。要件の実現可能性と事業価値を早期に検証し、AIを活用したPoC（概念実証）を最速で実施します。</p>
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-corp-main/5 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-12 h-12 bg-corp-main/5 rounded-full flex items-center justify-center shrink-0">
                                    <span className="font-bold text-corp-main text-lg">02</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-corp-main mb-3">超速開発サイクル・MVP納品</h3>
                                    <p className="text-corp-main/70 font-light text-sm leading-relaxed">機能要件を極限まで絞り込み、検証可能なMVP（Minimum Viable Product）を最短当日で納品。実際の動く画面を見ながら迅速なフィードバックループを回します。</p>
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-corp-main/5 flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-12 h-12 bg-corp-main/5 rounded-full flex items-center justify-center shrink-0">
                                    <span className="font-bold text-corp-main text-lg">03</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-corp-main mb-3">柔軟なリソースシェアリング</h3>
                                    <p className="text-corp-main/70 font-light text-sm leading-relaxed">社内エンジニアがゼロの状態でも問題ありません。プロジェクトの拡大に合わせて最速で開発チームを組成でき、マネジメントのオーバーヘッドなくプロフェッショナルなリソースを活用できます。</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 md:py-32 bg-white">
                <div className="container px-4 text-center">
                    <FadeIn direction="up" className="max-w-2xl mx-auto space-y-8 bg-[#F8FAFC] p-12 rounded-3xl border border-corp-main/10 shadow-sm">
                        <h2 className="text-3xl font-bold tracking-tight text-corp-main">
                            Ready to accelerate?
                        </h2>
                        <p className="text-corp-main/80 font-light mb-8 text-sm md:text-base leading-relaxed">
                            他社の見積もりをお持ちの方は、より低コスト・短納期で世界品質のシステムをご提案可能です。<br />
                            <span className="font-semibold">システム仕様が固まっていなくても構いません。</span>まずは無料にて、システムの実現可能性やコスト削減のシミュレーションをご相談ください。
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="https://lin.ee/h7F3bIt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-[#06C755] text-white text-sm font-bold tracking-wider hover:bg-[#05b34c] transition-all rounded-xl shadow-md hover:shadow-lg w-full sm:w-auto gap-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.907 8.885 9.444 9.595.369.078.874.241 1.002.553.116.279.038.715-.015 1.002-.085.467-.535 2.652-.65 3.141-.144.646.66 1.037 1.161.733.456-.277 5.619-3.35 7.697-5.698C22.42 16.591 24 13.626 24 10.304" />
                                </svg>
                                公式LINEで無料相談する
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
