"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/ui/Header";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Heart, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const TimelineItem = ({ year, title, subtitle, description, delay = 0, icon: Icon }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay }}
        className="relative pl-8 md:pl-0"
    >
        <div className="md:flex items-center justify-between mb-8 group">
            {/* タイムラインの線とドット（スマホ向け） */}
            <div className="hidden md:block absolute left-1/2 -ml-[0.5px] w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent -z-10 top-10"></div>

            {/* ドット */}
            <div className="absolute left-0 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:bg-purple-500 transition-colors duration-500">
                <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            <div className="md:w-5/12 text-left md:text-right pr-0 md:pr-12 mb-4 md:mb-0">
                <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 font-mono text-sm tracking-wider mb-3">
                    {year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <h4 className="text-lg text-gray-400 font-medium flex items-center md:justify-end gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {subtitle}
                </h4>
            </div>

            <div className="md:w-5/12 pl-0 md:pl-12">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-500 relative overflow-hidden group-hover:border-purple-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="text-gray-300 leading-relaxed text-sm relative z-10 whitespace-pre-wrap">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function SecretPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <main ref={containerRef} className="bg-[#050510] text-white min-h-screen selection:bg-purple-500/30">
            <Header />

            {/* 背景エフェクト */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,0,255,0.15)_0%,transparent_50%)] pointer-events-none"></div>
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,100,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay"></div>

            {/* Hero Section */}
            <motion.section
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
            >
                <div className="max-w-4xl mx-auto w-full text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <p className="text-purple-400 tracking-[0.3em] text-sm md:text-base mb-6 font-mono uppercase">
                            Ronshoal LLC. Founder & CEO
                        </p>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-sm pb-2">
                                Kazuki Sejima
                            </span>
                            <span className="block text-3xl md:text-5xl mt-2 text-white/50 font-medium tracking-widest">
                                瀬島 和樹
                            </span>
                        </h1>
                    </motion.div>

                    {/* プロフィール要約 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 mb-20"
                    >
                        {[
                            { icon: MapPin, text: "Born in Kobe, Living in KL" },
                            { icon: GraduationCap, text: "Medical Research (Gut Microbiome)" },
                            { icon: Briefcase, text: "System Development & Medical Management" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                                <item.icon className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-medium text-gray-300">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-500 tracking-[0.3em] font-mono uppercase">Scroll to Discover</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-purple-400" />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Philosophy Section */}
            <section className="py-32 relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                Philosophy & Vision
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <div className="space-y-8">
                                <div className="border-l-2 border-purple-500 pl-6">
                                    <h3 className="text-2xl font-bold mb-4 text-white">持続可能な成長と共存共栄</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        ビジネスの本質は、単なる利益の追求ではなく、関わるすべてのステークホルダーと共に成長し、価値を共有することにあります。クライアントの成功が、我々の成長を牽引します。
                                    </p>
                                </div>
                                <div className="border-l-2 border-cyan-500 pl-6">
                                    <h3 className="text-2xl font-bold mb-4 text-white">社会への貢献と責任</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        「社会の一員としての責任を自覚し、社会に貢献する。」<br />
                                        医療からテクノロジーまで、領域を横断した知見を統合し、社会に新しい選択肢と豊かさをもたらすことを使命としています。
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="bg-[#0a0a1a] p-8 md:p-12 rounded-[22px] relative z-10 backdrop-blur-xl">
                                    <Heart className="w-10 h-10 text-purple-400 mb-6" />
                                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-gray-200">
                                        「人生観は経験を通じて形成されていく。多様な環境での挑戦が、本質的な価値を生み出す源泉となる。」
                                    </blockquote>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <p className="text-sm text-gray-400 font-mono">Kazuki Sejima - Life Principle</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Career Timeline Section */}
            <section className="py-32 relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">Career & Journey</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto rounded-full"></div>
                            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                                MRとしての現場経験から、医療施設の立ち上げ、そしてテクノロジーを駆使したビジネスコンサルティングへの展開。
                            </p>
                        </div>
                    </FadeIn>

                    <div className="relative mt-20">
                        {/* スマホ向けの左側ライン */}
                        <div className="md:hidden absolute left-[11px] top-4 border-l border-white/10 h-[calc(100%-80px)] -z-10"></div>

                        <TimelineItem
                            year="2010 - 2013"
                            title="日本イーライリリー株式会社"
                            subtitle="MR (医薬情報担当者)"
                            icon={Briefcase}
                            description="糖尿病専門のMRとして徳島県を担当。現場のドクターと向き合う中で、医療現場のリアルな課題と営業の将来像について深く考察する契機となる。「セジマール」の愛称で親しまれた。"
                            delay={0.1}
                        />

                        <TimelineItem
                            year="Pre-2020"
                            title="天満病院グループ"
                            subtitle="新規事業立ち上げ / 医療経営"
                            icon={Heart}
                            description={`医療機関の移転事業やクリニックの立ち上げに従事。補助金も活用しながら、就労支援施設、老人ホーム、地域コミュニティカフェなどを統合した「スマートウェルネス事業」を推進。\n神戸市の民間移行プロポーザルによる「みらいおもいけ園」の立ち上げなど、社会貢献を伴う事業構築で実績を残す。`}
                            delay={0.2}
                        />

                        <TimelineItem
                            year="2020 - Present"
                            title="ロンショール合同会社 (Ronshoal LLC)"
                            subtitle="代表社員 CEO"
                            icon={Globe}
                            description={`コロナ禍での新しい挑戦として、2020年末にロンショール合同会社を設立。ビジネスコンサルティングを軸に、医療×テクノロジー（AI、システム開発）の領域でクライアントの成長と成功を支援。\n「フライング事業構築」の実践などを通じ、独自の価値提供を追求し続ける。`}
                            delay={0.3}
                        />

                        <TimelineItem
                            year="Current"
                            title="Global Lifestyle"
                            subtitle="教育移住・研究"
                            icon={GraduationCap}
                            description="家族と共にマレーシアへの教育移住を実現し、クアラルンプールを拠点に活動。また、奈良県立医科大学大学院にて腸内細菌の医学研究に携わるなど、経営・生活・学問の多様な顔を併せ持つ。"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Footer area */}
            <section className="py-20 border-t border-white/10 relative z-10 bg-black text-center">
                <FadeIn>
                    <h2 className="text-3xl font-black tracking-[0.2em] mb-8 text-white/50">RONSHOAL</h2>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        トップページへ戻る
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
