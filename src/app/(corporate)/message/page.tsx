import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function MessagePage() {
    return (
        <main className="min-h-screen bg-corp-base text-corp-main pt-24 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-16">
                <TextReveal>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-corp-main">
                        MESSAGE<span className="block text-2xl mt-2 text-gray-500 font-bold tracking-normal">代表メッセージ</span>
                    </h1>
                </TextReveal>

                <FadeIn delay={0.1}>
                    <div className="prose prose-lg max-w-none text-gray-800 leading-[2.2]">
                        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-12 border-l-4 border-corp-main pl-6 text-black">
                            「すべての人々に、後悔のない人生を」
                        </p>

                        <p className="mb-8">
                            ロンショール合同会社は、2021年の創業以来、一貫して「人々の生活を根底から支え、より豊かな未来を切り拓くこと」を目標に歩んでまいりました。
                        </p>

                        <p className="mb-8">
                            私たちは現在、医療・ヘルスケア分野における「健診プラス」や「健康パスポート」といった予防的アプローチから、
                            企業の生産性を飛躍的に高める「AI開発（AGIステップ、AI Burger）」まで、多角的な事業を展開しています。
                            これらは一見異なる分野に見えるかもしれませんが、根底にある想いはすべて同じです。
                        </p>

                        <p className="mb-12">
                            それは、<strong>「人が本当の意味で豊かであるために、不要な障壁や物理的・時間的制約を取り除くこと」</strong>です。<br />
                            病気になる前に気づき、手遅れになる前に最新の医療へアクセスできる世界。<br />
                            AIの力でクリエイティブでない業務の負担を減らし、人が本来の力を発揮できる社会。<br />
                            私たちは、テクノロジーとアイディアを掛け合わせることで、そうした未来を一つずつ実現していきます。
                        </p>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mb-12 border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 text-black">共に、新しいスタンダードを</h2>
                            <p className="mb-0">
                                私たちの提供するサービスは、決して一部の恵まれた人のためのものではありません。
                                誰にでも開かれた、新しい生活の「スタンダード」となることを目指しています。
                                これからも、現状に満足することなく、社会課題に対して真摯に取り組み、驚きと感動を与えられるソリューションを提供し続けてまいります。
                            </p>
                        </div>

                        <div className="flex justify-end items-center mt-16 pb-8 border-b border-gray-200">
                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1 tracking-widest">代表社員</p>
                                <p className="text-2xl font-bold font-serif tracking-widest text-black">
                                    瀬島 和樹
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="mt-16 text-center">
                        <Link
                            href="/company"
                            className="group inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-md"
                        >
                            会社情報を見る
                            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
