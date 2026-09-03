import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/ui/Footer";


import type { Metadata } from 'next';

// 2026-09-02: このページに固有の metadata が無く、layout.tsx の既定タイトル
// 「ロンショール合同会社 | Ronshoal LLC」が5ページに同じまま出ていた（重複タイトル）。
export const metadata: Metadata = {
    title: '健診プラス｜企業負担0円の労災二次健診（訪問健康診断）｜ロンショール合同会社',
    description:
        '労災二次健診給付制度を活用し、血液検査・心臓エコー・頸動脈エコー等の精密検査を企業・受診者の負担0円で実施します。労災保険料は上がりません。訪問での実施に対応。',
};
export default function KenshinPlusPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-corp-main/10 bg-white">
                <div className="container relative z-10 px-4">
                    <FadeIn direction="up" className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-corp-main/5 px-4 py-2 rounded-full mb-8">
                            <span className="text-corp-main font-mono text-sm tracking-wider">
                                SECONDARY MEDICAL CHECKUP
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-corp-main leading-[1.2]">
                            健診プラス
                        </h1>
                        <p className="text-xl md:text-2xl text-corp-main/70 font-light tracking-wide max-w-2xl mx-auto">
                            労災事故を未然に防ぐ。<br />
                            企業負担ゼロの訪問健康診断。
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                            <a href="#contact" className="px-8 py-4 bg-corp-main text-white text-sm font-bold tracking-wider hover:bg-corp-main/90 transition-colors w-full sm:w-auto">
                                資料請求・お問い合わせ
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 企業負担ゼロの仕組み */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main mb-6">
                                費用負担 0円 の理由
                            </h2>
                            <p className="text-lg text-corp-main/60 max-w-2xl mx-auto font-light">
                                労災二次健診給付制度を活用するため、<br className="hidden md:block" />
                                本来高額な精密検査を無料で受診いただけます。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-white p-8 md:p-12 rounded-2xl h-full shadow-sm border border-corp-main/5 text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-corp-main mb-6">通常の精密検査</h3>
                                <p className="text-4xl md:text-5xl font-light text-corp-main/40 line-through mb-4">
                                    30,000円〜
                                </p>
                                <p className="text-corp-main/60 font-light text-sm">
                                    （血液・心臓エコー・頸動脈エコー等の場合）
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-corp-main p-8 md:p-12 rounded-2xl h-full shadow-lg border border-corp-main text-center relative overflow-hidden">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">健診プラスご利用時</h3>
                                <p className="text-5xl md:text-6xl font-bold text-white mb-4">
                                    0<span className="text-2xl md:text-3xl font-light">円</span>
                                </p>
                                <p className="text-white/80 font-light text-sm">
                                    労働局へ直接請求するため企業・受診者の負担はゼロ
                                </p>
                                <div className="absolute top-0 right-0 bg-white text-corp-main text-xs font-bold px-4 py-2 rounded-bl-xl tracking-wider">
                                    労災保険料も上がりません
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* おすすめの企業 */}
            <section className="py-24 md:py-32 bg-white border-t border-corp-main/10">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <FadeIn direction="up">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main text-center mb-12">
                                こんな企業様におすすめ
                            </h2>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <FadeIn direction="up" delay={0.1} className="flex items-start bg-[#F8FAFC] p-6 rounded-xl">
                                <span className="text-corp-main text-2xl mr-4">✓</span>
                                <p className="text-corp-main/80 font-light">従業員の健康管理を強化・徹底したい</p>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.2} className="flex items-start bg-[#F8FAFC] p-6 rounded-xl">
                                <span className="text-corp-main text-2xl mr-4">✓</span>
                                <p className="text-corp-main/80 font-light">健康経営優良法人を目指している</p>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.3} className="flex items-start bg-[#F8FAFC] p-6 rounded-xl">
                                <span className="text-corp-main text-2xl mr-4">✓</span>
                                <p className="text-corp-main/80 font-light">脳・心臓疾患などの労災事故リスクを未然に減らしたい</p>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.4} className="flex items-start bg-[#F8FAFC] p-6 rounded-xl">
                                <span className="text-corp-main text-2xl mr-4">✓</span>
                                <p className="text-corp-main/80 font-light">コストをかけずに健康関連の福利厚生を充実させたい</p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 制度の解説（2026-09-03 追加） =====
                 このページは可視テキスト1,039字しかなく、AdSense が ronshoal.com を
                 「有用性の低いコンテンツ」で却下している要因のひとつだった（管理画面で確認）。
                 サービスの宣伝文だけでなく、根拠となる制度そのものを解説して読者の役に立つ面にする。

                 ⚠️ 記載した要件・検査項目・期限はすべて厚生労働省／東京労働局の公開情報で裏を取った
                 （2026-09-03 実測）。制度は改正されうるので、更新時は必ず一次情報を引き直すこと。
                 出典: https://www.mhlw.go.jp/stf/newpage_05927.html
                       https://jsite.mhlw.go.jp/tokyo-roudoukyoku/hourei_seido_tetsuzuki/rousai_hoken/rousai-2ji.html */}
            <section className="py-24 md:py-32 bg-white border-t border-corp-main/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-corp-main mb-4">
                        労災二次健診（二次健康診断等給付）とは
                    </h2>
                    <p className="text-gray-600 mb-12 leading-relaxed">
                        労働者災害補償保険（労災保険）にもとづく給付制度です。定期健康診断で
                        脳・心臓疾患につながる所見が出た従業員が、費用の負担なく精密検査と
                        保健指導を受けられます。あまり知られていませんが、要件を満たせば
                        どの企業でも利用できる公的な制度です。
                    </p>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-corp-main mb-4 pb-2 border-b border-corp-main/20">
                                対象になる方
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                直近の定期健康診断（一次健康診断）で、次の
                                <strong className="font-bold">4項目すべて</strong>に
                                「異常の所見」があると診断された方が対象です。
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                {["血圧検査", "血中脂質検査", "血糖検査", "腹囲の検査 または BMI の測定"].map((x) => (
                                    <li key={x} className="bg-[#F8FAFC] rounded px-4 py-3 text-gray-800 text-sm">
                                        {x}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                なお、担当医師が「異常なし」と判断した場合でも、事業場に選任されている
                                産業医等が就業環境を総合的に勘案して異常の所見を認めたときは、
                                <strong className="font-bold">産業医等の意見が優先されます</strong>。
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                ただし、すでに<strong className="font-bold">脳・心臓疾患の症状がある方</strong>と、
                                <strong className="font-bold">労災保険の特別加入者</strong>は対象外です。
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-corp-main mb-4 pb-2 border-b border-corp-main/20">
                                受けられる検査と指導
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong className="font-bold">二次健康診断</strong>として、
                                次の検査を受けられます。
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                <li>空腹時血中脂質検査</li>
                                <li>空腹時血糖値検査</li>
                                <li>ヘモグロビンA1c検査</li>
                                <li>負荷心電図検査 または 胸部超音波検査（いずれか一方）</li>
                                <li>頸部超音波検査</li>
                                <li>微量アルブミン尿検査（一定の条件を満たす場合）</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                あわせて<strong className="font-bold">特定保健指導</strong>として、
                                栄養指導・運動指導・生活指導を受けられます。
                                いずれも<strong className="font-bold">受診者の負担なく</strong>受けられます。
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-corp-main mb-4 pb-2 border-b border-corp-main/20">
                                見落とされやすい期限
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                請求は、
                                <strong className="font-bold">一次健康診断を受けた日から3か月以内</strong>
                                に行う必要があります。3か月を過ぎると給付を受けられません。
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                制度を知らないまま期限が過ぎてしまう例が少なくありません。
                                健診結果が返ってきた時点で対象者を洗い出し、早めに手続きへ進むことが重要です。
                                健診プラスでは、この対象者の抽出から労働局への請求手続きまでを代行します。
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-corp-main mb-4 pb-2 border-b border-corp-main/20">
                                企業にとっての意味
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                脳・心臓疾患は、長時間労働との関連が指摘され、労災認定の対象にもなり得ます。
                                発症してからの対応はコストも影響も大きく、
                                <strong className="font-bold">兆候の段階で見つけること</strong>が
                                企業と従業員の双方にとって最も負担が小さい選択です。
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                この制度は労災保険から給付されるため、企業・受診者ともに費用の負担がなく、
                                利用しても<strong className="font-bold">労災保険料は上がりません</strong>。
                                健康経営の取り組みとしても、追加の予算をかけずに実施できます。
                            </p>
                        </div>
                    </div>

                    <p className="mt-12 text-xs text-gray-500 leading-relaxed">
                        ※ 本ページの制度に関する記載は、厚生労働省および東京労働局の公開情報にもとづいています
                        （2026年9月時点）。制度の詳細や最新の取扱いについては、
                        所轄の労働局・労働基準監督署にご確認ください。
                    </p>
                </div>
            </section>

            {/* サービス内容 */}
            <section className="py-24 md:py-32 bg-corp-main text-white">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
                                サービス内容
                            </h2>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
                                充実のパッケージを、スピーディに提供します。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="max-w-3xl mx-auto">
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-8 tracking-wide border-b border-white/20 pb-4">労災二次健診パッケージ</h3>

                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row md:justify-between py-2 border-b border-white/5">
                                        <span className="text-white/60 mb-1 md:mb-0">料金</span>
                                        <span className="font-bold tracking-wider">無料（労働局へ直接請求）</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:justify-between py-2 border-b border-white/5">
                                        <span className="text-white/60 mb-1 md:mb-0">出張料</span>
                                        <span className="font-bold tracking-wider">対象者20名以上で出張料無料</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:justify-between py-2 border-b border-white/5">
                                        <span className="text-white/60 mb-1 md:mb-0">検査時間</span>
                                        <span className="font-bold tracking-wider">約 20分 / 名</span>
                                    </div>
                                    <div className="flex flex-col py-2 border-b border-white/5">
                                        <span className="text-white/60 mb-3">検査項目</span>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3"></span>血液検査（血糖値、脂質、HbA1c）</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3"></span>頸動脈エコー検査</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3"></span>心臓エコー検査</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3"></span>尿検査（対象者のみ）</li>
                                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3"></span>特定保健指導</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 実績・事例 */}
            <section className="py-24 md:py-32 bg-[#F8FAFC]">
                <div className="container px-4">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-corp-main text-center mb-16 md:mb-24">
                            検査実績・受診者の声
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
                        <FadeIn direction="up" delay={0.1}>
                            <h3 className="text-xl font-bold text-corp-main mb-6 border-l-4 border-corp-main pl-4">異常発見率（見逃しを防ぐ）</h3>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-corp-main/5 shadow-sm">
                                    <h4 className="font-bold text-corp-main mb-3">心臓エコー判定</h4>
                                    <div className="flex justify-between items-center text-sm mb-1"><span className="text-corp-main/60">要精査</span><span className="font-bold text-red-500">3.2%</span></div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[3.2%]"></div></div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-corp-main/5 shadow-sm">
                                    <h4 className="font-bold text-corp-main mb-3">頸動脈エコー判定</h4>
                                    <div className="flex justify-between items-center text-sm mb-1"><span className="text-corp-main/60">要精査</span><span className="font-bold text-red-500">3.9%</span></div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[3.9%]"></div></div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.2}>
                            <h3 className="text-xl font-bold text-corp-main mb-6 border-l-4 border-corp-main pl-4">実際に救われた事例</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-corp-main/5 shadow-sm relative">
                                    <p className="text-corp-main/80 font-light italic">「頸動脈エコーで飛びそうなプラークが見つかり、そのまま緊急入院。大事に至らずに済みました。」</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-corp-main/5 shadow-sm relative">
                                    <p className="text-corp-main/80 font-light italic">「甲状腺の異常を早期発見でき、命が救われたと本当に感謝しています。」</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-corp-main/5 shadow-sm relative">
                                    <p className="text-corp-main/80 font-light italic">「自覚症状がなかったが、健診を機に健康意識が大きく変わり、生活習慣を改善できました。」</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 md:py-32 bg-white">
                <div className="container px-4 text-center">
                    <FadeIn direction="up" className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl font-light tracking-tight text-corp-main">
                            従業員の健康と、企業の未来を守るために
                        </h2>
                        <p className="text-corp-main/70 font-light mb-8">
                            導入にあたってのご相談から、各種制度活用の手続きサポートまで承ります。<br />
                            お気軽に「健康パスポート」公式LINEよりお問い合わせください。
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            {/* 現状は仮のLINE誘導先として#を設定。LINE誘導URLが判明次第変更 */}
                            <a href="https://lin.ee/hF5x7qJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#06C755] text-white text-sm font-bold tracking-wider hover:bg-[#05b34c] transition-colors w-full sm:w-auto shadow-md">
                                公式LINEで資料請求・相談
                            </a>
                            <a href="/" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-corp-main border border-corp-main/20 text-sm tracking-wider font-mono hover:bg-corp-main/5 transition-colors w-full sm:w-auto">
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
