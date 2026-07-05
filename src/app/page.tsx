"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { PhysicsBlocks } from "@/components/ui/PhysicsBlocks";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { TextReveal } from "@/components/ui/TextReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { OfficePreview } from "@/components/ai-team/OfficePreview";
import { WordmarkPanel } from "@/components/ui/WordmarkPanel";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showSecret, setShowSecret] = useState(false);
  return (
    <>
      <SplashScreen onComplete={() => setShowSplash(false)} />
      <Header />

      <div className={`flex flex-col min-h-screen bg-white text-corp-main selection:bg-gray-200 transition-opacity duration-1000 ${showSplash ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {/* 1. Hero Section (DataGrid Clone - Physics Animation) */}
        <section className={`relative h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-[2000ms] ${showSecret ? 'bg-[#030014]' : 'bg-white'}`}>
          <h1 className="sr-only">ロンショール合同会社（Ronshoal LLC）— すべての人々に、後悔のない人生を。</h1>
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
              <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-corp-main uppercase mb-16">
                PHILOSOPHY
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-corp-main mb-20 leading-[1.3] tracking-tight">
                すべての人々に、<br />後悔のない人生を。
              </h3>
            </TextReveal>
            <TextReveal delay={0.2} className="text-left w-full max-w-2xl text-corp-main font-medium leading-[2] text-sm md:text-base tracking-wide flex flex-col gap-8">
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
            </TextReveal>
          </div>
        </section>

        {/* 2.5. News: AI Team 始動 (Philosophyの下) */}
        <section className="py-32 md:py-48 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <TextReveal>
              <div className="flex flex-col items-center mb-16">
                <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-corp-main uppercase mb-6">
                  NEWS
                </h2>
                <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-gray-500 mb-10">
                  2026.05.16
                </p>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-corp-main text-center leading-[1.4] tracking-tight mb-10">
                  ロンショール、<br />AI社員による経営組織を始動。
                </h3>
                <p className="text-sm md:text-base leading-[2.2] text-gray-700 font-medium max-w-2xl text-center">
                  5部署・25名のAI社員が、開発・品質保証・教育・マーケティング・経営司令を分担して稼働しています。
                  24時間365日、人間の指示を受けて会社の中をぐるぐる回っているところを覗いてみてください。
                </p>
                {/* この組織を動かしている技術（AI経営体制の裏付け） */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-gray-400 mr-1">POWERED BY</span>
                  {["Next.js", "TypeScript", "Supabase", "Vercel", "Claude / Anthropic API"].map((t) => (
                    <span key={t} className="font-mono text-[10px] font-bold tracking-[0.15em] text-gray-500 border border-gray-300 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TextReveal>

            <FadeIn delay={0.1}>
              <Link
                href="/ai-team"
                className="block group max-w-5xl mx-auto"
                aria-label="AI社員紹介ページへ"
              >
                <div className="relative transition-transform duration-500 group-hover:-translate-y-1">
                  <OfficePreview />
                  {/* hover overlay */}
                  <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-mono text-xs tracking-[0.4em] uppercase border border-white/60 px-6 py-3 rounded-full backdrop-blur-sm">
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex justify-center mt-12">
                <Link
                  href="/ai-team"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-corp-main text-white text-sm font-bold tracking-wider hover:bg-black transition-colors duration-300 group"
                >
                  <span>詳しく知りたい</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Our Business Section (DataGrid: lTechnology) */}
        <section className="py-32 md:py-48 px-6 lg:px-12 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto">
            <TextReveal>
              <div className="flex flex-col items-center mb-32">
                <h2 className="text-[10px] md:text-xs font-black tracking-[0.4em] text-corp-main uppercase mb-12">OUR BUSINESS</h2>
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
                    <h3 className="text-2xl md:text-3xl font-bold text-corp-main tracking-tight leading-snug">
                      メディカル＆<br />ヘルスケア
                    </h3>
                  </TextReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                  <FadeIn delay={0.1} className="group cursor-pointer">
                    <Link href="/services/kenshin-plus" className="block">
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
                    </Link>
                  </FadeIn>

                  {/* 健康パスポート（オンライン診療プラットフォーム）は休止中のため非表示（2026-07-06）。
                      配下のエクソソーム治療・医療ダイエットも同様。再開時はこのカードとフッターの該当リンクを復元。 */}
                </div>
              </div>

              {/* AI Panel */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 border-t border-gray-200 pt-32">
                <div className="lg:w-1/3 shrink-0">
                  <TextReveal>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">AI & DX SOLUTION</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-corp-main tracking-tight leading-snug">
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
                  </FadeIn>
                </div>
              </div>

              {/* Other Business Panel */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 border-t border-gray-200 pt-32">
                <div className="lg:w-1/3 shrink-0">
                  <TextReveal>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">OTHER BUSINESS / PRODUCING</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-corp-main tracking-tight leading-snug">
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
                  </FadeIn>

                </div>
              </div>

              {/* Media Panel — 公開済みの自社メディア（実績） */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 border-t border-gray-200 pt-32">
                <div className="lg:w-1/3 shrink-0">
                  <TextReveal>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-4">MEDIA / OWNED MEDIA</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-corp-main tracking-tight leading-snug">
                      自社メディア<br />運営
                    </h3>
                  </TextReveal>
                  <TextReveal delay={0.1}>
                    <p className="text-sm leading-[2] text-gray-500 font-medium mt-6">
                      実際に公開・運営しているメディア事業です。企画から開発・SEO・日々の運用までを一気通貫で内製しています。
                    </p>
                  </TextReveal>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-16">
                  <FadeIn delay={0.1} className="group cursor-pointer">
                    {/* /pickleball・/malaysia は next.config.ts の rewrites() で別Vercelアプリへプロキシされる経路。
                        next/link ではなく素の <a>（フルナビゲーション）を使う（Footer も同様）。<Link> に揃えると壊れる。 */}
                    <a href="/pickleball" className="block">
                      <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">I LOVE PICKLEBALL</p>
                      <ImageReveal>
                        <WordmarkPanel label="I LOVE PICKLEBALL" sublabel="Media / Community" />
                      </ImageReveal>
                      <h4 className="text-xl font-bold mb-4">I LOVE PICKLEBALL（ピックルボール専門メディア）</h4>
                      <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                        競技人口が急拡大するピックルボールの専門メディア。全国のコート・施設データベースや用語集を自社で構築し、日々コンテンツを配信しています。
                      </p>
                    </a>
                  </FadeIn>

                  <FadeIn delay={0.2} className="group cursor-pointer">
                    <a href="/malaysia" className="block">
                      <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-6">MALAYSIA INFO BUREAU</p>
                      <ImageReveal delay={0.1}>
                        <WordmarkPanel label="マレーシア生活情報局" sublabel="Media / Lifestyle" />
                      </ImageReveal>
                      <h4 className="text-xl font-bold mb-4">マレーシア生活情報局</h4>
                      <p className="text-sm md:text-base leading-[2.2] text-gray-600 mb-6 font-medium">
                        マレーシアでの生活・移住に役立つ情報を届けるメディア。記事配信の仕組みからSEO設計までを内製し、現地で暮らす人々の実用的な疑問に応えています。
                      </p>
                    </a>
                  </FadeIn>
                </div>
              </div>
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
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

