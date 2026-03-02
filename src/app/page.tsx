"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhysicsBlocks } from "@/components/ui/PhysicsBlocks";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Header } from "@/components/ui/Header";
import { TextReveal } from "@/components/ui/TextReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ArrowRight } from "lucide-react";

// Datagrid 風 READ MORE ボタン
const ReadMoreButton = ({ href, text = "READ MORE" }: { href: string; text?: string }) => (
  <div className="group relative inline-flex items-center mt-10">
    <a href={href} className="flex items-center text-xs md:text-sm font-bold tracking-[0.2em] text-corp-main transition-colors hover:text-gray-600">
      <span className="mr-6 relative">
        <span className="relative z-10">{text}</span>
      </span>
      <svg viewBox="0 0 39.01 44.01" className="w-[20px] h-[22px] md:w-[26px] md:h-[30px] fill-current transition-transform duration-500 group-hover:translate-x-2">
        <polygon points="27.01 0 16.87 0 28.87 22 16.87 44.01 27.01 44.01 39.01 22 27.01 0"></polygon>
        <polygon points="10.14 0 0 0 12 22 0 44.01 10.14 44.01 22.14 22 10.14 0"></polygon>
      </svg>
    </a>
  </div>
);

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showSecret, setShowSecret] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false); // カオスアニメーション発動フラグ

  // マウスストーカー制御用
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!matrixMode) return;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [matrixMode]);

  // ランダム乱数生成
  const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

  // 降り注ぐ画像たち
  const matrixImages = [
    "/ronshoal-logo-mark.png",
    "/services/images/AIバーガー説明.jpg",
    "/services/images/健診プラス動画資料.png",
    "/ronshoal-logo-block.png"
  ];
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    if (!matrixMode) return;
    // 画面全体に画像を30個生成
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: randomRange(-10, 110),
      y: randomRange(-20, 100),
      src: matrixImages[Math.floor(Math.random() * matrixImages.length)],
      size: randomRange(40, 200),
      duration: randomRange(3, 10),
      delay: randomRange(0, 5),
      rotation: randomRange(-360, 360)
    }));
    setParticles(items);
  }, [matrixMode]);

  return (
    <>
      <SplashScreen onComplete={() => setShowSplash(false)} />
      <Header />

      <div className={`flex flex-col min-h-screen bg-white text-corp-main selection:bg-gray-200 transition-opacity duration-1000 ${showSplash ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* 1. Hero Section (DataGrid Clone - Physics Animation) */}
        <section className={`relative h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-[2000ms] ${showSecret ? 'bg-[#030014]' : 'bg-white'}`}>
          <div className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ${showSecret ? 'invert hue-rotate-180' : ''}`}>
            {!showSplash && <PhysicsBlocks isActive={true} onSecretTrigger={() => setShowSecret(true)} />}
          </div>

          {/* シークレット発動時の光と衝撃波エフェクト（Framer Motion） */}
          <AnimatePresence>
            {showSecret && (
              <>
                {/* 瞬間的な大爆発フラッシュ */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="fixed inset-0 bg-white z-[150] pointer-events-none"
                />
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  className="fixed inset-0 bg-white z-[100] pointer-events-none mix-blend-overlay"
                />

                {/* 中央から広がる強烈な衝撃波リングと光の十字 */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 1, borderWidth: "150px" }}
                    animate={{ scale: [0, 8, 20], opacity: [1, 0.8, 0], borderWidth: ["150px", "10px", "0px"] }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute w-[100px] h-[100px] rounded-full border-cyan-300 drop-shadow-[0_0_20px_rgba(103,232,249,1)]"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 1, borderWidth: "100px" }}
                    animate={{ scale: [0, 6, 15], opacity: [1, 0.5, 0], borderWidth: ["100px", "5px", "0px"] }}
                    transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
                    className="absolute w-[100px] h-[100px] rounded-full border-indigo-400 drop-shadow-[0_0_30px_rgba(129,140,248,1)]"
                  />
                  {/* 光の十字（レーザー） */}
                  <motion.div
                    initial={{ scaleY: 0, scaleX: 10, opacity: 1 }}
                    animate={{ scaleY: [0, 100], scaleX: [10, 0], opacity: [1, 0] }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute w-[20px] h-[50px] bg-white blur-sm"
                  />
                  <motion.div
                    initial={{ scaleX: 0, scaleY: 10, opacity: 1 }}
                    animate={{ scaleX: [0, 100], scaleY: [10, 0], opacity: [1, 0] }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute w-[50px] h-[20px] bg-white blur-sm"
                  />
                  {/* 中央が激しく発光して消える */}
                  <motion.div
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: [0, 2, 8], opacity: [1, 0, 0] }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-500 blur-3xl mix-blend-screen"
                  />
                </div>
              </>
            )}
          </AnimatePresence>

          {/* テキストレイヤー */}
          <div className="max-w-6xl w-full mx-auto text-center z-20 pointer-events-none mt-[-10vh] relative px-4">
            <FadeIn>
              <div className="relative flex items-center justify-center py-12 md:py-24 mb-10 md:mb-16 select-none pointer-events-none">
                <img
                  id="hero-bg-image"
                  src="/ronshoal-hero-text-only.png"
                  alt="Ronshoal Logo and Catchphrase"
                  className={`w-[80vw] max-w-[700px] h-auto object-contain transition-all duration-[2000ms] ${showSecret ? "invert drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" : "drop-shadow-sm"}`}
                  draggable="false"
                />
              </div>
            </FadeIn>

            {/* シークレットボタン（別次元へのポータル風） */}
            <AnimatePresence>
              {showSecret && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }} // フラッシュの直後にドカッと表示
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-80px] md:bottom-[-100px] z-40 pointer-events-auto"
                >
                  <button
                    onClick={() => {
                      setMatrixMode(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      // 少し演出を見せてからシークレットページへ遷移
                      setTimeout(() => {
                        window.location.href = '/secret';
                      }, 1000);
                    }}
                    className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 overflow-hidden rounded-full shadow-[0_0_40px_rgba(79,70,229,0.5)] hover:shadow-[0_0_80px_rgba(79,70,229,0.8)] transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* ベースの宇宙空間っぽい背景 */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></span>

                    {/* ホバーで回る光の輪（Tailwindのアニメーション機能を使用） */}
                    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ECECFF_0%,#393BB2_50%,#ECECFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                    {/* 内側の黒背景（ボタン本体） */}
                    <span className="absolute inset-[2px] bg-black rounded-full"></span>

                    {/* テキスト */}
                    <span className="relative flex items-center gap-2 md:gap-3 text-sm md:text-base font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 group-hover:scale-105 transition-transform duration-300">
                      ACCESS SECRET WORLD
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-purple-300"
                      >
                        →
                      </motion.span>
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="flex flex-col items-center opacity-40">
              <span className="w-[1px] h-16 bg-black block mb-4 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase rotate-90 origin-left ml-2 mt-4">Scroll</span>
            </div>
          </div>
        </section>

        {/* 2. Philosophy Section (DataGrid: ourVision) */}
        <section className="py-32 md:py-48 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <TextReveal>
              <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-black uppercase mb-16">
                PHILOSOPHY
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black mb-20 leading-[1.3] tracking-tight">
                すべての人々に、<br />後悔のない人生を。
              </h3>
            </TextReveal>
            <TextReveal delay={0.2} className="text-left w-full max-w-2xl text-black font-medium leading-[2] text-sm md:text-base tracking-wide flex flex-col gap-8">
              <p>
                すべての人々が死を迎える最後の瞬間に、「俺の人生、最高に楽しかったな」と心から思えること。<br />
                それが私たちの掲げる理念の真意です。
              </p>
              <p>
                「あの時こうしていれば」という後悔を抱えながら一生を終えたくない。<br />
                自分自身がやり切り、後悔なく人生を燃やし尽くす。そして、その全力の背中を愛する息子や未来の子どもたちにしっかりと見せていきたいと強く願っています。
              </p>
              <p>
                健康を守る最先端医療事業も、ビジネスを加速させるAI・システム開発事業も、すべてはその一貫した信念で繋がっています。関わるすべての人に最高の選択肢を届け、共に後悔のない人生を創り上げます。
              </p>

              <div className="flex justify-center mt-12">
                <ReadMoreButton href="/philosophy" />
              </div>
            </TextReveal>
          </div>
        </section>

        {/* 3. Our Business Section (DataGrid: lTechnology) */}
        <section className="py-32 md:py-48 px-6 lg:px-12 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto">
            <TextReveal>
              <div className="flex flex-col items-center mb-32">
                <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-black uppercase mb-12">OUR BUSINESS</h2>
                <div className="text-center max-w-4xl text-sm md:text-base leading-[2.2] text-gray-800 font-medium space-y-6">
                  <p>
                    私たちが展開するビジネスの基準はただ一つ、「自分たちにしかできないことであるか」どうか。<br />
                    誰にでもできる、ありふれたサービスをあえて私たちがやる意味はありません。<br />
                    私たちが培ってきた独自のスキルや経験があるからこそ生み出せる強烈な価値を、世の中に届けていきます。
                  </p>
                  <p>
                    何よりも大切にしているのは、自分たち自身が本気で「ワクワク」し、ふれた多くの人が「面白い！」と笑顔になるサービスを作ること。<br />
                    既存の枠組みや特定のジャンルに一切とらわれることなく、人々の心を動かすビジネスを次々と生み出し続けていきます。
                  </p>
                </div>
              </div>
            </TextReveal>

            <div className="space-y-32">
              {/* Medical Panel (DataGrid DIGITAL HUMAN style) */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="lg:w-1/3 shrink-0">
                  <TextReveal>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">MEDICAL & HEALTHCARE</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-snug">
                      メディカル＆<br />ヘルスケア
                    </h3>
                  </TextReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                  <FadeIn delay={0.1} className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">KENSHIN PLUS / ROUSAI</p>
                    <ImageReveal>
                      <div className="aspect-[16/9] w-full bg-gray-200 overflow-hidden mb-8 relative">
                        <img src="/services/images/健診プラス動画資料.png" alt="健診プラス" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                      </div>
                    </ImageReveal>
                    <h4 className="text-xl font-bold mb-4">健診プラス（労災二次健診）</h4>
                    <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                      リスクを放置し、ある日突然、脳梗塞や心筋梗塞で倒れてから「あの時、ちゃんと病院に行っておけばよかった」と後悔する。<br />
                      手遅れになる前に自らの状態を知り、予防への意識を変えるための仕組み作りが私たちの使命です。<br />
                      誰もが面倒だと感じる検査を、限界まで使いやすく、受けやすい形にアップデートしました。
                    </p>
                    <ReadMoreButton href="#" />
                  </FadeIn>

                  <FadeIn delay={0.2} className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">HEALTH PASSPORT</p>
                    <ImageReveal delay={0.1}>
                      <div className="aspect-[16/9] w-full bg-gray-200 overflow-hidden mb-8 relative">
                        <img src="/services/images/健康パスポート.png" alt="エクソソーム" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                      </div>
                    </ImageReveal>
                    <h4 className="text-xl font-bold mb-4">健康パスポート（オンライン診療プラットフォーム）</h4>
                    <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                      待ち時間が何時間になるかわからない。交通費をかけてわずか数分の診察のために医療機関へ通う。そんな「受診の壁」が、人々の予防意識を奪っています。<br />
                      不調や肥満を抱える人が、隙間時間で手軽に、そして確実に改善へ向かえるオンライン診療プラットフォーム。<br />
                      医療へのアクセス構造を壊し、世界をもっと豊かで健康なものへと変革します。
                    </p>
                    <ReadMoreButton href="#" />
                  </FadeIn>
                </div>
              </div>

              {/* AI Panel */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 border-t border-gray-200 pt-32">
                <div className="lg:w-1/3 shrink-0">
                  <TextReveal>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">AI & DX SOLUTION</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-snug">
                      AI・システム<br />ソリューション
                    </h3>
                  </TextReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                  <FadeIn delay={0.1} className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">AI BURGER</p>
                    <ImageReveal>
                      <div className="aspect-[16/9] w-full bg-gray-900 overflow-hidden mb-8 relative">
                        <img src="/services/images/AIバーガー説明.jpg" alt="AI Burger" className="w-full h-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" />
                      </div>
                    </ImageReveal>
                    <h4 className="text-xl font-bold mb-4">AI Burger（超高速システム開発）</h4>
                    <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                      ホームページ制作やシステム開発に数百万円をかける時代は終わりました。<br />
                      私たちはシリコンバレーのITベンチャー元CTOを迎え入れ、強力なAIを駆使することで、開発に膨大な時間をかけることなく、これまでにない高品質・短期間・低予算でのシステム開発を実現しました。<br />
                      どこよりも圧倒的に質の高いシステムを、驚くほどの速さと価格でお届けすることをお約束します。
                    </p>
                    <ReadMoreButton href="#" />
                  </FadeIn>

                  <FadeIn delay={0.2} className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">IN-HOUSE SYSTEM DEVELOPMENT</p>
                    <ImageReveal delay={0.1}>
                      <div className="aspect-[16/9] w-full bg-gray-200 overflow-hidden mb-8 relative">
                        <img src="/services/images/自社開発.png" alt="System Development" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                      </div>
                    </ImageReveal>
                    <h4 className="text-xl font-bold mb-4">自社システム開発</h4>
                    <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                      「こんなシステムがあれば便利なのにな」という思いを、私たちが形にしていきます。<br />
                      面白いアイデアがあればどんどんサービス化していきますので、皆様からの熱いリクエストをお待ちしています。
                    </p>
                    <ReadMoreButton href="#" />
                  </FadeIn>
                </div>
              </div>

              {/* Other Business Panel */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 border-t border-gray-200 pt-32">
                <div className="lg:w-1/3 shrink-0">
                  <TextReveal>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">OTHER BUSINESS / PRODUCING</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight leading-snug">
                      支援・プロデュース<br />その他事業
                    </h3>
                  </TextReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                  <FadeIn delay={0.1} className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">BUSINESS PRODUCING & CO-CREATION</p>
                    <ImageReveal>
                      <div className="aspect-[16/9] w-full bg-gray-200 overflow-hidden mb-8 relative">
                        <img src="/services/images/共創事業.png" alt="事業プロデュース" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                      </div>
                    </ImageReveal>
                    <h4 className="text-xl font-bold mb-4">多角的なプロデュース・共創事業</h4>
                    <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                      様々な業界の企業様と手を組み、サービスの「0→1」開発やビジネスの拡大を強力に伴走支援します。<br />
                      ビジネスを創る上で不可欠な、システムの初期設計、自動化、効率的な運営の構築を得意としています。<br />
                      私たちに任せていただければ、必ずあなたのビジネスを大きくします。お気軽にご相談ください。
                    </p>
                    <ReadMoreButton href="#" />
                  </FadeIn>

                </div>
              </div>
            </div>

            <div className="flex justify-center mt-32">
              <ReadMoreButton href="#" text="VIEW ALL BUSINESSES" />
            </div>
          </div>
        </section>

        {/* 4. Company & Contact Section (DataGrid: Footer pre-contact) */}
        <section className="bg-black text-white pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:gap-32 gap-16">
            <div className="flex-1">
              <TextReveal>
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-12 opacity-50 flex items-center gap-4">
                  <ArrowRight className="w-5 h-5" /> 会社情報
                </h2>
                <p className="text-xl font-medium mb-6">ロンショール合同会社 (Ronshoal LLC)</p>
                <p className="text-sm leading-[2] opacity-80 font-light mb-12 line-clamp-3">
                  私たちは、AIやヘルスケア事業を通じて、関わるすべての人の「後悔のない人生」を後押しする事業インキュベーションカンパニーです。
                </p>
                <ReadMoreButton href="/company" text="COMPANY PROFILE" />
              </TextReveal>
            </div>

            <div className="flex-1">
              <TextReveal delay={0.2}>
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-12 opacity-50 flex items-center gap-4">
                  <ArrowRight className="w-5 h-5" /> お問い合わせ
                </h2>
                <p className="text-xl font-medium mb-6">ご相談・お見積もり</p>
                <p className="text-sm leading-[2] opacity-80 font-light mb-12 line-clamp-3">
                  各種サービスに関するご質問、AI開発のご相談はお気軽にお問い合わせください。
                </p>
                <ReadMoreButton href="/contact" text="CONTACT US" />
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white pb-12 pt-16 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; {new Date().getFullYear()} Ronshoal LLC. All right reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="/terms" className="hover:opacity-100 transition-opacity">利用規約</a>
              <a href="/privacy" className="hover:opacity-100 transition-opacity">プライバシーポリシー</a>
            </div>
          </div>
        </footer>
      </div>

      {/* マトリックス（カオス）モード全体オーバーレイ */}
      <AnimatePresence>
        {matrixMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black text-white overflow-hidden"
          >
            {/* カオス背景スタイル定義 */}
            <style jsx>{`
              @keyframes glitch {
                0% { filter: hue-rotate(0deg) invert(0); transform: translate(0, 0); }
                20% { filter: hue-rotate(90deg) invert(1); transform: translate(-10px, 5px); }
                40% { filter: hue-rotate(180deg) invert(0); transform: translate(10px, -5px); }
                60% { filter: hue-rotate(270deg) invert(1); transform: translate(-5px, 10px); }
                80% { filter: hue-rotate(360deg) invert(0); transform: translate(5px, -10px); }
                100% { filter: hue-rotate(0deg) invert(0); transform: translate(0, 0); }
              }
              .glitch-bg {
                background-image: radial-gradient(circle at center, #1a0033 0%, #000000 100%);
                animation: glitch 3s infinite reverse;
              }
              .bg-text-stream {
                position: fixed;
                font-size: 15vw;
                white-space: nowrap;
                opacity: 0.1;
                font-weight: 900;
                color: lime;
                font-family: monospace;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%) rotate(-20deg);
                animation: marquee 10s linear infinite;
              }
              @keyframes marquee {
                0% { transform: translate(-50%, -50%) rotate(-20deg) scale(1); }
                50% { transform: translate(-40%, -60%) rotate(-20deg) scale(1.5); }
                100% { transform: translate(-50%, -50%) rotate(-20deg) scale(1); }
              }
            `}</style>

            <div className="absolute inset-0 glitch-bg pointer-events-none" />

            <div className="bg-text-stream pointer-events-none">
              AI BURGER AI BURGER RONSHOAL RONSHOAL WE ARE THE FUTURE
            </div>

            {/* 降り注ぐパーツ */}
            {particles.map((p) => (
              <motion.img
                key={p.id}
                src={p.src}
                initial={{ top: `${p.y}%`, left: `${p.x}vw`, rotate: 0, opacity: 0 }}
                animate={{
                  top: ["-20%", "120%"],
                  rotate: [0, p.rotation, p.rotation * 3],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "linear"
                }}
                className="absolute pointer-events-none drop-shadow-[0_0_20px_#f0f] mix-blend-screen"
                style={{ width: `${p.size}px`, height: 'auto' }}
              />
            ))}

            {/* マウスストーカー */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`stalker-${i}`}
                animate={{
                  x: mousePosition.x - 20,
                  y: mousePosition.y - 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150 - (i * 15),
                  damping: 10 + (i * 2),
                  mass: 0.5
                }}
                className="absolute w-10 h-10 rounded-full mix-blend-difference pointer-events-none"
                style={{
                  backgroundColor: i % 2 === 0 ? '#0ff' : '#f0f',
                  opacity: 1 - (i * 0.1),
                  scale: 1 - (i * 0.08)
                }}
              />
            ))}

            <main className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              <motion.h1
                animate={{ scale: [1, 1.1, 0.9, 1.2, 1], rotate: [0, 2, -3, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="text-7xl md:text-9xl mb-8 font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-fuchsia-500 to-cyan-400 drop-shadow-[0_0_50px_#f0f]"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                SYSTEM OVERRIDE
              </motion.h1>

              <div className="bg-black/60 backdrop-blur-3xl p-12 border-4 border-cyan-400 rounded-3xl shadow-[0_0_100px_#0ff]">
                <motion.h2
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  最終兵器：AIバーガー
                </motion.h2>
                <p className="text-2xl text-fuchsia-400 font-mono">WARNING: TOO MUCH ANIMATION DETECTED.</p>

                <div className="flex justify-center gap-8 mt-12">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    <img src="/services/images/AIバーガー説明.jpg" className="w-56 h-56 object-cover rounded-full border-8 border-yellow-400 mix-blend-exclusion" />
                  </motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
                    <img src="/services/images/健診プラス動画資料.png" className="w-56 h-56 object-cover rounded-full border-8 border-cyan-400 mix-blend-difference" />
                  </motion.div>
                </div>
              </div>

              <div className="mt-16 z-50">
                <button
                  onClick={() => setMatrixMode(false)}
                  className="px-12 py-6 bg-white text-black font-black text-3xl rounded-full hover:bg-yellow-400 hover:scale-125 transition-all shadow-[0_0_50px_#fff]"
                >
                  現実に戻る
                </button>
              </div>

              {/* 絶対押せないボタン */}
              <motion.button
                onHoverStart={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = `translate(${randomRange(-300, 300)}px, ${randomRange(-300, 300)}px)`;
                }}
                className="absolute bg-gradient-to-r from-red-600 to-fuchsia-600 text-white font-bold text-2xl px-8 py-4 rounded-full border-4 border-white shadow-[0_0_50px_#f00] transition-all duration-100 ease-out z-[999]"
                style={{ top: '20%', left: '80%' }}
                onClick={() => alert("押せた猛者には報酬を！")}
              >
                🔥 クリックできるかな？ 🔥
              </motion.button>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

