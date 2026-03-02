import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/ui/Footer";
import Link from 'next/link';

export default function ExosomePage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* 戻るナビゲーション */}
            <div className="fixed top-24 left-4 z-50 md:top-32 md:left-8">
                <Link href="/services/kenko-passport" className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md text-corp-main hover:bg-gray-50 transition-colors border border-corp-main/10">
                    <span className="sr-only">戻る</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-corp-main/10 bg-white">
                <div className="container relative z-10 px-4">
                    <FadeIn direction="up" className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-corp-main/5 px-4 py-2 rounded-full mb-8">
                            <span className="text-corp-main font-mono text-sm tracking-wider">
                                KENKO PASSPORT / EXOSOME
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-corp-main leading-[1.2]">
                            世界最高水準・1.3兆個の力。<br />
                            骨髄由来エクソソーム<br />
                            <span className="text-2xl md:text-4xl lg:text-5xl border-b-2 border-corp-main/30 pb-2 inline-block mt-4">『ZEN CELLS』</span>
                        </h1>
                        <p className="text-lg md:text-xl text-corp-main/80 font-light tracking-wide max-w-2xl mx-auto pt-6">
                            ロシア・ベラルーシの研究機関との提携による、<br className="hidden md:block" />
                            これまでの常識を覆す圧倒的な濃度の幹細胞上清液。
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ZEN CELLSの技術的優位性 */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                ZEN CELLSの技術的優位性
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                「なんとなく体に良い」ではなく、明確な設計と厳格な管理に基づいた<br className="hidden md:block" />
                                次世代の再生医療サービスです。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-white p-8 md:p-10 rounded-2xl h-full shadow-sm border border-corp-main/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-corp-main/5 rounded-bl-full -mr-4 -mt-4"></div>
                                <h3 className="text-2xl font-bold text-corp-main mb-6 relative z-10">
                                    3Dバイオリアクター培養
                                </h3>
                                <div className="space-y-4 text-corp-main/80 font-light relative z-10">
                                    <p className="text-sm font-bold bg-corp-main/5 inline-block px-3 py-1 rounded">
                                        平面（2D） vs 立体（3D）の違い
                                    </p>
                                    <p className="leading-relaxed">
                                        国内の主流である2D（平面）培養を「小さな部屋での生活」とするなら、ZEN CELLSが採用する3D培養は「森の中でのびのびと暮らす」環境です。
                                    </p>
                                    <p className="leading-relaxed">
                                        立体的でストレスの少ない環境下で育てられた幹細胞は、より強力で高品質な生理活性物質（成長因子・サイトカイン等）を大量に産出します。
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white p-8 md:p-10 rounded-2xl h-full shadow-sm border border-corp-main/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-corp-main/5 rounded-bl-full -mr-4 -mt-4"></div>
                                <h3 className="text-2xl font-bold text-corp-main mb-6 relative z-10">
                                    厳格な継代管理（P3制限）
                                </h3>
                                <div className="space-y-4 text-corp-main/80 font-light relative z-10">
                                    <p className="text-sm font-bold bg-corp-main/5 inline-block px-3 py-1 rounded">
                                        コピー劣化を極限まで防ぐ
                                    </p>
                                    <p className="leading-relaxed">
                                        細胞は分裂（継代）を繰り返すたびに、元の能力を失う「コピー劣化」を起こします。多くの国内製品が5回〜10回以上継代して量産を図る一方、ZEN CELLSはロシアの厳格な法律に基づき、継代数を3回（P3）までに制限。
                                    </p>
                                    <p className="leading-relaxed">
                                        「オリジナル」に最も近い、ピュアで高品質な幹細胞の状態を維持したまま、あなたのもとへ届けられます。
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 圧倒的な濃度比較（テーブル） */}
            <section className="py-24 md:py-32 bg-white border-t border-corp-main/10">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                他を寄せ付けない圧倒的な濃度
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                比較すれば一目瞭然。採取が難しく希少価値の高い「骨髄由来」だからこそ実現できた、<br className="hidden md:block" />
                                1バイアルあたり1兆3,100億個のエクソソーム。
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.1} className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto rounded-2xl border border-corp-main/10 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F8FAFC]">
                                        <th className="p-6 font-bold text-corp-main border-b border-corp-main/10 w-1/3">由来・製品</th>
                                        <th className="p-6 font-bold text-corp-main border-b border-corp-main/10 text-right w-1/3">エクソソーム数<br className="md:hidden" /><span className="text-sm font-normal">（1バイアルあたり）</span></th>
                                        <th className="p-6 font-bold text-corp-main border-b border-corp-main/10 text-right w-1/3">ZEN CELLSとの比較</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-corp-main/5">
                                        <td className="p-6 font-bold text-corp-main border-b border-corp-main/10">
                                            ZEN CELLS<br />
                                            <span className="text-sm font-normal text-corp-main/70">（骨髄由来）</span>
                                        </td>
                                        <td className="p-6 text-right font-black text-xl md:text-2xl text-corp-main border-b border-corp-main/10">
                                            1兆3,100億個
                                        </td>
                                        <td className="p-6 text-right font-bold text-corp-main border-b border-corp-main/10">
                                            基準
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="p-6 text-corp-main/80 border-b border-corp-main/10">
                                            ベラルーシ製品<br />
                                            <span className="text-sm font-normal text-corp-main/50">（旧世代）</span>
                                        </td>
                                        <td className="p-6 text-right text-corp-main/80 border-b border-corp-main/10">
                                            2,500億個
                                        </td>
                                        <td className="p-6 text-right text-corp-main/60 border-b border-corp-main/10 text-sm">
                                            約5倍少ない
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="p-6 text-corp-main/80 border-b border-corp-main/10">
                                            国内標準製品<br />
                                            <span className="text-sm font-normal text-corp-main/50">（脂肪/臍帯由来）</span>
                                        </td>
                                        <td className="p-6 text-right text-corp-main/80 border-b border-corp-main/10">
                                            約70億〜1,200億個
                                        </td>
                                        <td className="p-6 text-right text-red-600/80 font-bold border-b border-corp-main/10 text-sm">
                                            約185〜200倍少ない
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 品質保証 */}
            <section className="py-24 md:py-32 bg-[#F8FAFC] border-t border-corp-main/10">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                専門家による品質評価
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.1} className="max-w-3xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-corp-main/5 relative">
                            <div className="absolute top-6 left-6 text-6xl text-corp-main/10 font-serif">"</div>
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl text-corp-main/80 font-light leading-relaxed mb-8 italic">
                                    エクソソーム研究の第一人者である、落谷教授（東京医科歯科大学）の研究室において本製品を評価。
                                    数量だけでなく、品質（miRNAプロファイル）においても、これまで分析した中で最高水準であると評価されました。
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-corp-main/10 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-corp-main text-xl">🔬</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-corp-main">国内トップクラスの研究機関による裏付け</p>
                                        <p className="text-sm text-corp-main/60">Quality Assurance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 bg-corp-main text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="container relative z-10 px-4 text-center">
                    <FadeIn direction="up" className="max-w-2xl mx-auto space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-4">
                            <span className="text-white font-mono text-xs tracking-widest">
                                SPECIAL CONCIERGE
                            </span>
                        </div>
                        <h2 className="text-3xl font-light tracking-tight text-white mb-6">
                            詳細資料のご請求・無料相談
                        </h2>
                        <p className="text-white/80 font-light mb-8 leading-relaxed">
                            ZEN CELLSは非常に高度で品質の高い再生医療サービスです。<br />
                            費用や治療サイクル、具体的な適応に関する疑問は、公式LINEの専任コンシェルジュおよび医師に直接ご相談いただけます。<br />
                            まずは詳細資料をお受け取りください。
                        </p>
                        <div className="flex justify-center pt-4">
                            <a href="https://lin.ee/hF5x7qJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-[#06C755] text-white text-base font-bold tracking-wider hover:bg-[#05b34c] transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
                                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.94 11.23C23.94 5.03 18.57 0 11.97 0C5.37 0 0 5.03 0 11.23C0 16.36 3.82 20.67 9.1 22.04C9.45 22.12 9.8 22.28 9.9 22.68C9.97 22.95 9.88 23.63 9.85 23.83C9.8 24.16 9.49 24.97 10.95 24.36C12.42 23.75 18.84 19.98 21.6 16.4C23.11 14.86 23.94 13.13 23.94 11.23z" />
                                </svg>
                                公式LINEで資料請求・無料相談
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
