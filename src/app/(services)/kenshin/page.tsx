import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";
import { Activity, MapPin, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function KenshinPage() {
    return (
        <main className="min-h-screen bg-kenshin-base text-kenshin-text pt-24 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-16">
                <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-kenshin-main">
                        健診プラス
                    </h1>
                </TextReveal>
                <FadeIn delay={0.1}>
                    <p className="text-lg md:text-xl leading-relaxed mb-16 opacity-90">
                        労災二次健診給付制度を活用した無料訪問健康診断事業。<br className="hidden md:block" />
                        定期健診の結果を元に脳梗塞や心筋梗塞の発症リスクを把握するための二次健康診断等を１年度内に１回、無料で受診することができる制度です。
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="w-full aspect-[21/9] mb-16 overflow-hidden bg-kenshin-sub rounded-2xl group shadow-lg">
                        <img
                            src="/services/images/健診プラス動画資料.png"
                            alt="健診プラス Concept"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <h2 className="text-2xl font-bold mb-8 text-kenshin-main flex items-center gap-3">
                        <Activity className="w-6 h-6" />
                        ３つの特徴
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-kenshin-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-kenshin-accent" />
                                コストゼロ
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                企業様の負担なしで健康経営の推進や福利厚生の拡充が可能です。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-kenshin-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-kenshin-accent" />
                                訪問対応
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                企業様のオフィスに直接訪問し、従業員の負担を最小限に抑えます。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-kenshin-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Search className="w-5 h-5 text-kenshin-accent" />
                                早期発見
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                重症化を防ぎ、従業員の健康と企業の生産性を守ります。
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="bg-kenshin-sub p-8 md:p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute -top-4 -left-4 text-9xl text-kenshin-main opacity-10 font-serif">"</div>
                        <div className="relative z-10">
                            <p className="text-lg md:text-xl italic leading-relaxed mb-6 font-medium">
                                「従業員の健康管理に悩んでいましたが、健診プラスの導入で従業員の満足度が大幅に向上しました。コストもかからず、本当にありがたいサービスです。」
                            </p>
                            <p className="text-right font-bold text-kenshin-main">
                                - 製造業A社 人事部長
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="mt-20 text-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-kenshin-main text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                            お問い合わせはこちら
                        </Link>
                        <div className="mt-8">
                            <Link href="/" className="text-sm underline hover:text-kenshin-main text-gray-500">
                                ← トップページへ戻る
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
