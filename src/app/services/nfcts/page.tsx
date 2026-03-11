"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Sparkles, ArrowRight } from "lucide-react";

const easeOut = [0.33, 1, 0.68, 1] as const;

/* ─── 選ばれる4つの核心 データ ─── */
const coreFeatures = [
  {
    tag: "DYNAMIC LINK & CMS",
    title: "リンク先を自在に書き換え",
    body: "NFCタグに書き込むURLは固定でも、その先のコンテンツはクラウドCMSでいつでも更新可能。季節キャンペーンや新商品情報をリアルタイムに届けられます。QRコードの刷り直しはもう不要。タグを貼り替えることなく、デジタルの中身だけを差し替えられる柔軟性が最大の武器です。",
    image: "/images/nfcts/dynamic_cloud_cms.png",
    imageAlt: "クラウドCMSによる動的リンク管理",
  },
  {
    tag: "GPS LOCATION MATCH",
    title: "場所×NFCで魔法の体験を",
    body: "GPSとNFCを組み合わせることで「その場所でしか得られない」限定コンテンツを届けられます。観光地のスタンプラリー、店舗限定クーポン、イベント会場でのAR演出など、位置情報がトリガーとなって体験の質を飛躍的に高めます。",
    image: "/images/nfcts/gps_location_magic.png",
    imageAlt: "GPS連動による位置情報マッチング",
  },
  {
    tag: "SECURITY",
    title: "真贋判定でブランドを守る",
    body: "NFCチップ固有のUID（一意識別子）を活用し、製品の真贋をスマホ一つで即座に判定。偽造品・模倣品からブランド価値を守ります。消費者は「かざすだけ」で正規品であることを確認でき、安心と信頼のブランド体験を提供できます。",
    image: "/images/nfcts/fake_vs_real_nfc.png",
    imageAlt: "NFC真贋判定によるセキュリティ",
  },
  {
    tag: "PERSONALIZE",
    title: "一人ひとりに個別おもてなし",
    body: "NFCタグごとにユニークなIDを紐づけることで、タッチした人・場所・時間に応じてパーソナライズされたコンテンツを配信。顧客の名前入りメッセージ、購入履歴に基づくおすすめ、VIP限定の特典など、一人ひとりに寄り添う「おもてなし」を自動で実現します。",
    image: "/images/nfcts/personalize_omotenashi_nfc.png",
    imageAlt: "パーソナライズされたおもてなし体験",
  },
];

/* ─── 4ステップフロー データ ─── */
const flowSteps = [
  { label: "NFC埋込グッズ", sub: "カード・ポスター・製品等" },
  { label: "スマホでタッチ", sub: "アプリ不要・かざすだけ" },
  { label: "デジタル体験", sub: "動画・AR・クーポン等" },
  { label: "データ活用", sub: "閲覧分析・CRM連携" },
];

export default function NfctsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-nfc-base text-nfc-main">
        {/* ── Hero Section ── */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-white to-nfc-base">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #2c1810 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <TextReveal>
                <div className="inline-flex items-center space-x-2 bg-nfc-accent/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-nfc-accent" />
                  <span className="text-nfc-accent font-mono text-xs tracking-wider font-bold">
                    NFCts — DIGITAL WASHI PLATFORM
                  </span>
                </div>
              </TextReveal>

              <TextReveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-nfc-main leading-[1.1]">
                  モノに知性を、
                  <br />
                  体験に感動を。
                </h1>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="text-lg md:text-xl text-nfc-main/70 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
                  NFCチップを「デジタル和紙」として製品に漉き込み、
                  <br className="hidden md:block" />
                  スマホをかざすだけで広がる
                  <span className="text-nfc-accent font-medium">
                    唯一無二のデジタル体験
                  </span>
                  を届けます。
                </p>
              </TextReveal>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#core"
                    className="px-8 py-4 bg-nfc-main text-white text-sm font-bold tracking-wider hover:bg-nfc-main/90 transition-colors"
                  >
                    選ばれる理由を見る
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-transparent text-nfc-main border border-nfc-main/20 text-sm font-bold tracking-wider hover:bg-nfc-main/5 transition-colors"
                  >
                    導入のご相談
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── 4ステップ フロー図 ── */}
        <section className="py-20 md:py-28 bg-white border-t border-nfc-main/5">
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-14 md:mb-20">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  HOW IT WORKS
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  NFCtsの仕組み ― 4ステップ
                </h2>
              </div>
            </FadeIn>

            {/* フロー図: ボックス + 矢印を items-center で縦中央揃え */}
            <FadeIn direction="up" delay={0.15}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-5xl mx-auto">
                {flowSteps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center"
                  >
                    {/* ステップボックス */}
                    <div className="flex flex-col items-center text-center bg-gradient-to-br from-nfc-accent/5 to-nfc-sub/10 border border-nfc-accent/20 rounded-2xl px-6 py-6 md:px-8 md:py-8 w-48 md:w-52 min-h-[120px] justify-center">
                      <span className="text-xs font-mono font-bold text-nfc-accent tracking-wider mb-1">
                        STEP {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-nfc-main leading-tight">
                        {step.label}
                      </h3>
                      <p className="text-[11px] text-nfc-main/50 mt-1 leading-snug">
                        {step.sub}
                      </p>
                    </div>

                    {/* 矢印（最後のステップ以外に表示） items-center で縦中央配置 */}
                    {i < flowSteps.length - 1 && (
                      <span className="hidden md:flex items-center justify-center text-nfc-accent/60 text-2xl font-bold mx-3 select-none">
                        ▶
                      </span>
                    )}
                    {/* モバイル用 下矢印 */}
                    {i < flowSteps.length - 1 && (
                      <span className="md:hidden text-nfc-accent/60 text-2xl font-bold my-1 select-none">
                        ▼
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── 選ばれる4つの核心 ── */}
        <section
          id="core"
          className="py-24 md:py-32 bg-nfc-base border-t border-nfc-main/5"
        >
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-16 md:mb-24">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  CORE STRENGTHS
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  選ばれる4つの核心
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
              {coreFeatures.map((feat, i) => {
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={i} direction="up" delay={0.1}>
                    <div
                      className={`flex flex-col ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-10 lg:gap-16`}
                    >
                      {/* 画像 */}
                      <div className="flex-1 w-full">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: easeOut,
                          }}
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                        >
                          <Image
                            src={feat.image}
                            alt={feat.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </motion.div>
                      </div>

                      {/* テキストボックス — p-8 md:p-10 で十分なパディング */}
                      <div className="flex-1 w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-nfc-main/5 p-8 md:p-10">
                          <span className="inline-block text-[10px] font-bold text-nfc-accent tracking-[0.2em] bg-nfc-accent/10 px-3 py-1 rounded-full mb-5">
                            {feat.tag}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-nfc-main mb-5 leading-snug">
                            {feat.title}
                          </h3>
                          <p className="text-sm md:text-base text-nfc-main/70 font-light leading-[2] tracking-wide">
                            {feat.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 導入事例リンク ── */}
        <section className="py-20 md:py-28 bg-white border-t border-nfc-main/5">
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-12">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  CASE STUDY
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  導入事例
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="max-w-2xl mx-auto">
                <a
                  href="/services/nfcts/kazasu-photo"
                  className="group block bg-nfc-base/50 border border-nfc-main/5 rounded-2xl p-8 md:p-10 hover:border-nfc-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-xs font-mono text-nfc-accent tracking-wider font-bold">
                    CASE 01
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-nfc-main mt-3 mb-3 group-hover:text-nfc-accent transition-colors">
                    かざす写真館
                  </h3>
                  <p className="text-sm text-nfc-main/70 font-light leading-relaxed mb-4">
                    写真台紙にNFCを埋め込み、スマホをかざすだけで撮影時の動画やメッセージが蘇る。紙とデジタルが融合する新しい写真体験。
                  </p>
                  <span className="inline-flex items-center text-sm text-nfc-accent font-medium gap-1 group-hover:gap-2 transition-all">
                    詳しく見る
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── モノづくりセクション ── */}
        <section className="py-24 md:py-32 bg-nfc-base border-t border-nfc-main/5">
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-16 md:mb-24">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  OUR PHILOSOPHY
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main leading-[1.4]">
                  ITベンダーには作れない、
                  <br />
                  本物の「モノづくり」。
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="flex-1 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: easeOut }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/images/nfcts/monozukuri_real.jpg"
                      alt="職人の手元 — 本物のモノづくり"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl shadow-sm border border-nfc-main/5 p-8 md:p-10">
                    <p className="text-sm md:text-base text-nfc-main/70 font-light leading-[2] tracking-wide">
                      私たちは「システム屋」ではありません。和紙職人、印刷工房、プロダクトデザイナーと手を組み、NFCチップを素材の一部として漉き込む——そんな「モノづくり」から始まるテクノロジーカンパニーです。
                      <br /><br />
                      だからこそ、手に取った瞬間の質感、かざしたときの驚き、そしてその先に広がるデジタル体験まで、一気通貫で設計できる。ITだけでは届かない、職人の手仕事とデジタルが融合した唯一無二の価値を届けます。
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="contact"
          className="py-24 md:py-32 bg-nfc-main text-white"
        >
          <div className="container px-4 text-center">
            <FadeIn direction="up" className="max-w-2xl mx-auto space-y-8">
              <p className="text-[10px] font-bold text-nfc-sub tracking-[0.3em]">
                GET STARTED
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-[1.4]">
                あなたの製品に、
                <br />
                デジタルの息吹を。
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                NFCtsプラットフォームの導入に興味をお持ちの企業様、
                <br className="hidden md:block" />
                まずはお気軽にお問い合わせください。
                <br />
                技術仕様やコスト、導入スケジュールなど、
                <br className="hidden md:block" />
                専任スタッフが丁寧にご説明いたします。
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-nfc-accent text-white text-sm font-bold tracking-wider hover:bg-nfc-accent/90 transition-colors w-full sm:w-auto"
                >
                  お問い合わせ
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/20 text-sm tracking-wider font-mono hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  RETURN TO HOME
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
