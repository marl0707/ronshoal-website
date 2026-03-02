import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/ui/Footer";
import Link from 'next/link';

export default function KenkoPassportPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-corp-main/10 bg-white">
                <div className="container relative z-10 px-4">
                    <FadeIn direction="up" className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-corp-main/5 px-4 py-2 rounded-full mb-8">
                            <span className="text-corp-main font-mono text-sm tracking-wider">
                                ONLINE MEDICAL PLATFORM
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-corp-main leading-[1.1]">
                            健康パスポート
                        </h1>
                        <p className="text-xl md:text-2xl text-corp-main/70 font-light tracking-wide max-w-2xl mx-auto">
                            受診の壁を壊し、健康を日常に。<br />
                            隙間時間で即アクセスできるオンライン診療プラットフォーム。
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                            <a href="#services" className="px-8 py-4 bg-corp-main text-white text-sm font-bold tracking-wider hover:bg-corp-main/90 transition-colors w-full sm:w-auto">
                                診療メニューを見る
                            </a>
                            <a href="#flow" className="px-8 py-4 bg-transparent text-corp-main border border-corp-main/20 text-sm font-bold tracking-wider hover:bg-corp-main/5 transition-colors w-full sm:w-auto">
                                ご利用の流れ
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                選ばれる理由
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                多忙なビジネスパーソンや、医療機関へのアクセスが困難な方のために、<br className="hidden md:block" />
                                医療の質を落とさず、徹底して「受けやすさ」を追求しました。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-white p-8 rounded-2xl h-full shadow-sm border border-corp-main/5 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-corp-main/5 rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-bold text-corp-main mb-4">完全オンライン完結</h3>
                                <p className="text-corp-main/70 font-light text-sm">
                                    予約から問診、診察まですべてスマホで完結。通院による移動時間や待ち時間をゼロにします。
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white p-8 rounded-2xl h-full shadow-sm border border-corp-main/5 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-corp-main/5 rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="text-xl font-bold text-corp-main mb-4">最短翌日に自宅配送</h3>
                                <p className="text-corp-main/70 font-light text-sm">
                                    診察後、院内処方でスピーディーに手配。必要なお薬を最短で翌日にはご自宅のポストへお届けします。
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.3}>
                            <div className="bg-white p-8 rounded-2xl h-full shadow-sm border border-corp-main/5 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-corp-main/5 rounded-full flex items-center justify-center mb-6">
                                    <span className="text-2xl">👨‍⚕️</span>
                                </div>
                                <h3 className="text-xl font-bold text-corp-main mb-4">医師による定期フォロー</h3>
                                <p className="text-corp-main/70 font-light text-sm">
                                    お薬を渡して終わりではありません。月1回のオンライン診察で効果と副作用を細かく確認・調整します。
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-24 md:py-32 bg-white border-t border-corp-main/10">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                プロフェッショナルな診療メニュー
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* 医療ダイエット */}
                        <FadeIn direction="up" delay={0.1}>
                            <Link href="/services/kenko-passport/medical-diet" className="group block h-full">
                                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl h-full border border-corp-main/10 transition-all duration-300 hover:shadow-lg hover:border-corp-main/30 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-corp-main/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                    <h3 className="text-2xl font-bold text-corp-main mb-4 relative z-10 flex items-center">
                                        医療ダイエット <span className="ml-2 text-sm font-normal text-corp-main/50 border border-corp-main/20 px-2 py-1 rounded">Medical Diet</span>
                                    </h3>
                                    <p className="text-corp-main/70 font-light mb-8 relative z-10">
                                        マンジャロ等の最新薬剤を使用した、医師による科学的で安全なダイエットプログラム。我慢も運動も不要で、リバウンドしにくい体質改善を目指します。
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-corp-main group-hover:underline underline-offset-4 relative z-10">
                                        詳細はこちら →
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>

                        {/* エクソソーム治療 */}
                        <FadeIn direction="up" delay={0.2}>
                            <Link href="/services/kenko-passport/exosome" className="group block h-full">
                                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl h-full border border-corp-main/10 transition-all duration-300 hover:shadow-lg hover:border-corp-main/30 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-corp-main/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                    <h3 className="text-2xl font-bold text-corp-main mb-4 relative z-10 flex items-center">
                                        エクソソーム療法 <span className="ml-2 text-sm font-normal text-corp-main/50 border border-corp-main/20 px-2 py-1 rounded">ZEN CELLS</span>
                                    </h3>
                                    <p className="text-corp-main/70 font-light mb-8 relative z-10">
                                        世界最高水準・1.3兆個の濃度を誇る骨髄由来エクソソーム治療。3Dバイオリアクター培養による高品質な幹細胞上清液で、究極のアンチエイジングと組織再生を提供。
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-corp-main group-hover:underline underline-offset-4 relative z-10">
                                        詳細はこちら →
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>

                        {/* その他の治療（網羅的な案内） */}
                        <FadeIn direction="up" delay={0.3} className="md:col-span-2">
                            <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl border border-corp-main/10">
                                <h3 className="text-xl font-bold text-corp-main mb-6">その他のご相談</h3>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-bold text-corp-main mb-2">睡眠時無呼吸症候群</h4>
                                        <p className="text-sm text-corp-main/70 font-light">自宅でできる簡易・精密検査キットのお届けから、月額5,070円でのCPAP継続治療まで一貫サポート。</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-corp-main mb-2">AGA治療</h4>
                                        <p className="text-sm text-corp-main/70 font-light">デュタステリドや高濃度ミノキシジル外用薬を用いて、単剤・低価格での効果的な薄毛治療を実現。</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-corp-main mb-2">ED治療</h4>
                                        <p className="text-sm text-corp-main/70 font-light">シアリス・バイアグラ等の内服薬や、医療機器「ビガー2020」による根底からの改善治療をご提供。</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-corp-main/10 text-center">
                                    <p className="text-sm text-corp-main/60 font-light">これらについても、公式LINEよりお気軽にご相談・ご予約いただけます。</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ご利用の流れ */}
            <section id="flow" className="py-24 md:py-32 bg-[#F8FAFC] border-t border-corp-main/10">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                ご利用の流れ
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                登録からお薬の受け取りまで、誰でも簡単に進められます。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "公式LINEの友だち追加・予約", desc: "まずはスマートフォンから公式LINEを友だち追加してください。そのままチャット画面からご希望の日時を選択し、診察予約を行います。（24時間受付）" },
                                { step: "02", title: "オンライン問診票の記入", desc: "予約完了後、LINEに問診票が届きます。現在の体調やご希望の治療方針についてご回答ください。事前に入力いただくことで診察がスムーズになります。" },
                                { step: "03", title: "医師によるビデオ通話診察", desc: "予約時間になりましたら、お持ちのスマートフォンやPCからビデオ通話（約15分）を接続し、専門医師の丁寧な診察と最適な治療方針のご提案を受けます。" },
                                { step: "04", title: "最短翌日にご自宅へお届け", desc: "診察終了・決済確認後、院内で処方を行いスピーディーに発送します。中身が分からないプライバシーに配慮した梱包で、最短翌日にご指定の住所へお届けします。" }
                            ].map((item, index) => (
                                <FadeIn key={index} direction="up" delay={index * 0.1}>
                                    <div className="flex bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-corp-main/5">
                                        <div className="mr-6 md:mr-8 flex flex-col items-center">
                                            <span className="text-3xl md:text-4xl font-black text-corp-main/10 leading-none">{item.step}</span>
                                            <div className="w-px h-full bg-corp-main/10 mt-4 hidden md:block"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-corp-main mb-3">{item.title}</h3>
                                            <p className="text-corp-main/70 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 bg-corp-main text-white">
                <div className="container px-4 text-center">
                    <FadeIn direction="up" className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl font-light tracking-tight text-white mb-2">
                            まずは公式LINEを追加
                        </h2>
                        <p className="text-white/80 font-light text-sm mb-8 tracking-widest">
                            初回診察料無料・24時間いつでも予約可能
                        </p>
                        <p className="text-white/80 font-light mb-8">
                            どの治療が自分に合っているか分からない方も、専任のコンシェルジュが丁寧にご案内します。<br />
                            お気軽にご登録・ご相談ください。
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            {/* LINExリンクの設定（ダミー） */}
                            <a href="https://lin.ee/hF5x7qJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#06C755] text-white text-sm font-bold tracking-wider hover:bg-[#05b34c] transition-colors w-full sm:w-auto shadow-md">
                                公式LINEを友だち追加する
                            </a>
                            <a href="/" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/30 text-sm tracking-wider font-mono hover:bg-white/10 transition-colors w-full sm:w-auto">
                                RETURN TO HOME
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
