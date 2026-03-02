import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/ui/Footer";
import Link from 'next/link';

export default function MedicalDietPage() {
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
                                KENKO PASSPORT / MEDICAL DIET
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-corp-main leading-[1.2]">
                            我慢しない、科学的なアプローチで<br />
                            理想の体へ。
                        </h1>
                        <p className="text-lg md:text-xl text-corp-main/80 font-light tracking-wide max-w-2xl mx-auto pt-6">
                            医学的根拠に基づいた、医師の診察による<br className="hidden md:block" />
                            安全で効果的なオンラインダイエットプログラム
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* こんな方におすすめ */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                こんなお悩みはありませんか？
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.1} className="max-w-3xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-corp-main/10">
                            <ul className="space-y-6">
                                {[
                                    "自己流ダイエットで失敗を繰り返している",
                                    "リバウンドしない体質改善をしたい",
                                    "健康的に体重を確実に減らしたい",
                                    "忙しくて運動する時間がない",
                                    "つらい食事制限がどうしても続かない"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-lg text-corp-main/80 font-medium">
                                        <svg className="w-6 h-6 text-[#06C755] mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-8 border-t border-corp-main/10 text-center">
                                <p className="text-corp-main font-bold text-xl">
                                    そのお悩み、<span className="text-[#06C755]">医療の力</span>で解決できます。
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 取り扱い薬剤（料金） */}
            <section className="py-24 md:py-32 bg-white border-t border-corp-main/10">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                あなたに合わせた治療プラン
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                医師が診察を通じ、最適なアプローチをご提案します。
                            </p>
                        </div>
                    </FadeIn>

                    {/* マンジャロ（メイン） */}
                    <FadeIn direction="up" delay={0.1} className="max-w-4xl mx-auto mb-12">
                        <div className="bg-[#F8FAFC] border border-corp-main/20 rounded-2xl overflow-hidden shadow-md relative">
                            {/* おすすめバッジ */}
                            <div className="absolute top-0 right-0 bg-corp-main text-white text-xs font-bold px-4 py-2 rounded-bl-xl tracking-wider z-10">
                                圧倒的な減量効果
                            </div>

                            <div className="md:flex">
                                <div className="p-8 md:p-10 md:w-2/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-corp-main">マンジャロ</h3>
                                        <span className="text-sm border border-corp-main/30 text-corp-main px-2 py-0.5 rounded">週1回注射</span>
                                    </div>
                                    <p className="text-corp-main/60 text-sm mb-6 font-mono">チルゼパチド (デュアルアゴニスト GLP-1/GIP)</p>

                                    <ul className="space-y-3 text-corp-main/80 font-light mb-8">
                                        <li className="flex items-start">
                                            <span className="mr-2">■</span>
                                            <span><strong>世界初</strong>の持続性GIP/GLP-1受容体作動薬で最強クラスの効果</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">■</span>
                                            <span>3ヶ月で<strong>平均10〜12kg</strong>減少（自社統計）</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">■</span>
                                            <span>週に1回のペン型注射（極細針のため痛みはほぼありません）</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-8 md:p-10 md:w-1/3 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-corp-main/10">
                                    <p className="text-sm text-corp-main/60 font-bold mb-2 tracking-widest">月額・全て込み</p>
                                    <p className="text-4xl font-black text-corp-main mb-2">36,000<span className="text-lg font-normal">円</span></p>
                                    <p className="text-xs text-corp-main/50 mb-6">(薬剤費・診察料・配送料込)</p>
                                    <a href="https://lin.ee/hF5x7qJ" target="_blank" rel="noopener noreferrer" className="w-full block py-3 bg-corp-main text-white text-sm font-bold text-center rounded hover:bg-corp-main/90 transition-colors">
                                        初月20%OFFで相談
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* その他の薬剤 */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white p-6 rounded-xl border border-corp-main/10 h-full flex flex-col">
                                <h4 className="text-lg font-bold text-corp-main mb-1">リベルサス</h4>
                                <p className="text-xs text-corp-main/60 mb-4 border-b border-corp-main/10 pb-4">飲むGLP-1受容体作動薬（1日1回）</p>
                                <p className="text-corp-main/80 text-sm font-light mb-6 flex-grow">
                                    痛みが苦手で注射を避けたい方向け。「飲む痩せ薬」として食欲を抑え、無理のない減量をサポートします。
                                </p>
                                <div className="pt-4 border-t border-corp-main/10">
                                    <p className="text-xs text-corp-main/60 mb-1">月額（全て込み）</p>
                                    <p className="text-2xl font-black text-corp-main">10,000<span className="text-sm font-normal">円〜</span></p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.3}>
                            <div className="bg-white p-6 rounded-xl border border-corp-main/10 h-full flex flex-col">
                                <h4 className="text-lg font-bold text-corp-main mb-1">SGLT2阻害薬</h4>
                                <p className="text-xs text-corp-main/60 mb-4 border-b border-corp-main/10 pb-4">糖を尿から排出するお薬</p>
                                <p className="text-corp-main/80 text-sm font-light mb-6 flex-grow">
                                    1日200-400kcal分（ご飯1.5杯相当）の糖分を自動で排出。インスリンに依存しない、食べるのが好きな方に適したメカニズムです。
                                </p>
                                <div className="pt-4 border-t border-corp-main/10">
                                    <p className="text-xs text-corp-main/60 mb-1">月額（全て込み）</p>
                                    <p className="text-2xl font-black text-corp-main">10,000<span className="text-sm font-normal">円〜</span></p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.4}>
                            <div className="bg-white p-6 rounded-xl border border-corp-main/10 h-full flex flex-col relative overflow-hidden">
                                <div className="absolute top-2 right-2 bg-gray-100 text-corp-main/60 text-[10px] px-2 py-1 rounded font-bold">併用推奨</div>
                                <h4 className="text-lg font-bold text-corp-main mb-1">メトホルミン</h4>
                                <p className="text-xs text-corp-main/60 mb-4 border-b border-corp-main/10 pb-4">基礎代謝・腸内環境改善</p>
                                <p className="text-corp-main/80 text-sm font-light mb-4 flex-grow">
                                    体重減少に加え、筋肉を保護し抗老化・アンチエイジング効果も期待できる、60年以上の歴史を持つベース薬。
                                </p>
                                <div className="pt-4 border-t border-corp-main/10">
                                    <p className="text-xs text-corp-main/60 mb-1 flex items-center gap-2">
                                        月額 <span className="text-[10px] bg-corp-main/5 px-1 rounded text-orange-600 font-bold">マンジャロ併用で半額</span>
                                    </p>
                                    <p className="text-2xl font-black text-corp-main">5,000<span className="text-sm font-normal">円</span></p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 実績・経済効果 */}
            <section className="py-24 md:py-32 bg-[#F8FAFC] border-y border-corp-main/10">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <FadeIn direction="up">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-light text-corp-main mb-8">圧倒的な治療成績</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-corp-main/5 flex items-center justify-between">
                                        <span className="font-bold text-corp-main">減量成功率</span>
                                        <span className="text-4xl font-black text-corp-main">89<span className="text-xl">%<span className="text-sm font-normal">以上</span></span></span>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-corp-main/5 flex items-center justify-between">
                                        <span className="font-bold text-corp-main text-sm md:text-base">「注射の痛みをほぼ感じない」</span>
                                        <span className="text-4xl font-black text-corp-main">89<span className="text-xl">%</span></span>
                                    </div>
                                </div>
                                <p className="text-sm text-corp-main/60 mt-4 font-light">※従来の自己流ダイエット法に比べ、リバウンド率も大幅に低下しています。</p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-light text-corp-main mb-8">意外と安い「実質負担」</h3>
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-corp-main/5 relative">
                                    <p className="text-corp-main/80 font-light leading-relaxed mb-6">
                                        薬の力で自然と食欲が抑制されるため、お菓子や余分な外食が減り、<strong className="text-corp-main">月々30,000円〜45,000円程度の食費削減</strong>に繋がる方が多くいらっしゃいます。
                                    </p>
                                    <div className="bg-corp-main/5 p-6 rounded-lg border border-corp-main/10">
                                        <p className="text-sm font-bold text-corp-main mb-2">マンジャロプラン（月額36,000円）の場合</p>
                                        <p className="text-xl font-black text-corp-main">
                                            実質負担：<span className="text-3xl text-orange-600">0</span> 〜 <span className="text-3xl text-orange-600">6,000</span>円程度
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
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
                            まずは医師による無料診察・ご相談
                        </h2>
                        <p className="text-white/80 font-light mb-8 leading-relaxed">
                            どの薬が自分に合うかわからない、目標体重をどれくらいで達成できるか知りたい等、<br />
                            医師が丁寧にカウンセリングを行い、最適なプランをご提案します。
                        </p>
                        <ul className="text-sm text-white/70 font-light mb-8 space-y-2 text-left bg-white/5 p-6 rounded-xl inline-block">
                            <li>⚠️ 医師の診察が必ず必要です。</li>
                            <li>⚠️ 妊娠中・授乳中の方はご使用いただけません。</li>
                            <li>⚠️ 既往症によっては処方できない場合があります。</li>
                        </ul>
                        <div className="flex justify-center">
                            <a href="https://lin.ee/hF5x7qJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-[#06C755] text-white text-base font-bold tracking-wider hover:bg-[#05b34c] transition-colors shadow-lg w-full sm:w-auto">
                                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.94 11.23C23.94 5.03 18.57 0 11.97 0C5.37 0 0 5.03 0 11.23C0 16.36 3.82 20.67 9.1 22.04C9.45 22.12 9.8 22.28 9.9 22.68C9.97 22.95 9.88 23.63 9.85 23.83C9.8 24.16 9.49 24.97 10.95 24.36C12.42 23.75 18.84 19.98 21.6 16.4C23.11 14.86 23.94 13.13 23.94 11.23z" />
                                </svg>
                                公式LINEで無料相談を予約する
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
