import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";
import { Clock, HeartPulse, ShieldPlus, Activity } from "lucide-react";
import Link from "next/link";

export default function HealthPage() {
    return (
        <main className="min-h-screen bg-health-base text-health-text pt-24 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-16">
                <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-health-main">
                        健康パスポート
                    </h1>
                </TextReveal>
                <FadeIn delay={0.1}>
                    <p className="text-lg md:text-xl leading-relaxed mb-16 opacity-90">
                        仕事で忙しく、なかなかクリニックや病院に通院できない方のために<br className="hidden md:block" />
                        スマホ1つで生活習慣病（糖尿病、高血圧症、脂質異常症、睡眠時無呼吸症候群など）の治療・検査が可能なオンライン診療サービスです。
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="w-full aspect-[21/9] mb-16 overflow-hidden bg-health-sub rounded-2xl group shadow-lg">
                        <img
                            src="https://picsum.photos/seed/healthpassport/1600/900"
                            alt="健康パスポート Concept"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <h2 className="text-2xl font-bold mb-8 text-health-main flex items-center gap-3">
                        <Activity className="w-6 h-6" />
                        サービスの特長
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-health-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-health-accent" />
                                24時間対応
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                いつでもどこでもスマホで診療を受けられ、忙しい方も無理なく受診できます。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-health-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <HeartPulse className="w-5 h-5 text-health-accent" />
                                生活習慣病対応
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                糖尿病、高血圧症、脂質異常症など、幅広い生活習慣病の治療や検査に対応。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-health-main hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <ShieldPlus className="w-5 h-5 text-health-accent" />
                                継続管理
                            </h3>
                            <p className="text-sm leading-relaxed opacity-80">
                                定期的なフォローアップで、健康状態を途切れさせることなく継続的に管理します。
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="bg-health-sub p-8 md:p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute -top-4 -left-4 text-9xl text-health-main opacity-10 font-serif">"</div>
                        <div className="relative z-10">
                            <p className="text-lg md:text-xl italic leading-relaxed mb-6 font-medium">
                                「忙しい仕事の合間に通院するのが大変でしたが、健康パスポートで自宅で診療を受けられるようになり、とても助かっています。」
                            </p>
                            <p className="text-right font-bold text-health-main">
                                - IT企業B社 エンジニア
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="mt-20 text-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-health-main text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all hover:scale-105 shadow-md hover:shadow-lg">
                            お問い合わせはこちら
                        </Link>
                        <div className="mt-8">
                            <Link href="/" className="text-sm underline hover:text-health-main text-gray-500">
                                ← トップページへ戻る
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
