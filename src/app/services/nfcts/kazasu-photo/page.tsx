"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextReveal } from "@/components/ui/TextReveal";

import { Smartphone, Image, Play, Heart, Sparkles, ArrowRight } from "lucide-react";

const easeOut = [0.33, 1, 0.68, 1] as const;

function NfcTapAnimation() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* 台紙（アルバム） */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOut }}
        className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-2xl shadow-2xl border border-amber-200/50 flex items-center justify-center"
      >
        <div className="w-3/4 h-3/4 border-2 border-dashed border-amber-300/50 rounded-lg flex items-center justify-center">
          <Image className="w-12 h-12 text-amber-300" />
        </div>
      </motion.div>

      {/* NFCタグの波紋 */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.5, 2.5], opacity: [0, 0.6, 0] }}
          transition={{
            duration: 2,
            delay: 1.5 + i * 0.4,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-amber-400/40"
        />
      ))}

      {/* スマートフォン */}
      <motion.div
        initial={{ x: 80, y: -60, rotate: -15, opacity: 0 }}
        animate={{
          x: [80, 10, 10],
          y: [-60, -10, -10],
          rotate: [-15, -5, -5],
          opacity: [0, 1, 1],
        }}
        transition={{ duration: 1.5, delay: 1, ease: easeOut }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-28 md:w-20 md:h-32 bg-gray-900 rounded-xl shadow-xl flex items-center justify-center z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 0.3, delay: 2.5 }}
          className="w-[85%] h-[85%] bg-gradient-to-b from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
        >
          <Play className="w-6 h-6 text-white fill-white" />
        </motion.div>
      </motion.div>

      {/* 接触時のフラッシュ */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
        transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-300/30 rounded-full blur-xl z-5"
      />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <FadeIn direction="up" delay={delay}>
      <div className="group bg-white p-8 rounded-2xl h-full shadow-sm border border-nfc-main/5 hover:shadow-lg hover:border-nfc-accent/20 transition-all duration-500">
        <div className="w-14 h-14 bg-gradient-to-br from-nfc-accent/10 to-nfc-sub/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-nfc-accent" />
        </div>
        <h3 className="text-lg font-bold text-nfc-main mb-3">{title}</h3>
        <p className="text-nfc-main/70 font-light text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

export default function KazasuPhotoPage() {
  const steps = [
    {
      num: "01",
      title: "NFCタグ内蔵の写真台紙・アルバムを制作",
      desc: "フォトスタジオが撮影した写真を収める台紙やアルバムに、薄型のNFCチップを埋め込みます。見た目や手触りは従来品と全く同じ。高品質な印刷と製本はそのままに、目に見えないデジタルの橋を架けます。",
    },
    {
      num: "02",
      title: "撮影時の動画・音声をクラウドに紐づけ",
      desc: "七五三、成人式、ウェディング――撮影の裏側で交わされた笑い声やメイキング映像、スタッフからのお祝いメッセージ動画などを、NFCタグに紐づけてクラウドにアップロードします。",
    },
    {
      num: "03",
      title: "お客様がスマホをかざすと、思い出が蘇る",
      desc: "アルバムを開き、写真の上にスマホをかざすだけ。アプリのインストールは不要。ブラウザが自動で起動し、その瞬間の動画や音声がシームレスに再生されます。紙の写真から、生きた思い出が溢れ出す体験です。",
    },
    {
      num: "04",
      title: "コンテンツの追加・更新も自由自在",
      desc: "お子様の成長記録など、後から新しい動画やメッセージを追加することも可能。アルバムは時間と共に「育つ」記録媒体となり、家族の宝物として世代を超えて受け継がれていきます。",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-nfc-base text-nfc-main">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-white to-nfc-base">
          {/* 装飾用の微細なドット背景 */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #2c1810 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="container relative z-10 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* テキスト */}
                <div className="flex-1 text-center lg:text-left space-y-8">
                  <TextReveal>
                    <div className="inline-flex items-center space-x-2 bg-nfc-accent/10 px-4 py-2 rounded-full">
                      <Sparkles className="w-4 h-4 text-nfc-accent" />
                      <span className="text-nfc-accent font-mono text-xs tracking-wider font-bold">
                        NFCts CASE STUDY
                      </span>
                    </div>
                  </TextReveal>

                  <TextReveal delay={0.1}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-nfc-main leading-[1.1]">
                      かざす写真館
                    </h1>
                  </TextReveal>

                  <TextReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-nfc-main/70 font-light tracking-wide leading-relaxed">
                      写真にスマホをかざすと、<br className="hidden md:block" />
                      思い出の動画が再生される。<br />
                      <span className="text-nfc-accent font-medium">
                        紙とデジタルが融合する、新しい写真体験。
                      </span>
                    </p>
                  </TextReveal>

                  <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="#how-it-works"
                        className="px-8 py-4 bg-nfc-main text-white text-sm font-bold tracking-wider hover:bg-nfc-main/90 transition-colors"
                      >
                        仕組みを見る
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

                {/* NFCタップアニメーション */}
                <div className="flex-1">
                  <NfcTapAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* コンセプト */}
        <section className="py-24 md:py-32 bg-white border-t border-nfc-main/5">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-6">
                  CONCEPT
                </p>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-nfc-main mb-8 leading-[1.4]">
                  写真は「見るもの」から、
                  <br />
                  「体験するもの」へ。
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <p className="text-sm md:text-base leading-[2.2] text-nfc-main/70 font-light">
                  スマートフォンが普及した現代でも、大切な瞬間を「紙の写真」として残したいという想いは変わりません。
                  しかし、写真だけでは伝えきれない声、笑い、空気感がある。
                  <br />
                  <br />
                  NFCtsの技術を活用した「かざす写真館」は、写真台紙やアルバムに埋め込んだNFCタグにスマホをかざすだけで、
                  撮影時の動画やメッセージが再生される全く新しい写真体験を実現します。
                  紙の温もりとデジタルの可能性を融合させた、唯一無二のサービスです。
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 特長 */}
        <section className="py-24 md:py-32 bg-nfc-base">
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-16 md:mb-24">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  FEATURES
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  かざす写真館の特長
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <FeatureCard
                icon={Smartphone}
                title="アプリ不要"
                description="NFCタグにスマホをかざすだけ。専用アプリのインストールは一切不要で、ブラウザが自動起動します。"
                delay={0.1}
              />
              <FeatureCard
                icon={Play}
                title="動画・音声を即再生"
                description="撮影のメイキング映像、家族からのメッセージ、BGM付きスライドショーなど、リッチなコンテンツを瞬時に再生。"
                delay={0.2}
              />
              <FeatureCard
                icon={Heart}
                title="感動の贈り物"
                description="七五三、成人式、ウェディング。人生の節目を彩る写真に、動く思い出を添えて大切な方へ届けられます。"
                delay={0.3}
              />
              <FeatureCard
                icon={Sparkles}
                title="コンテンツ更新可能"
                description="後からでも動画やメッセージを追加・変更OK。時間と共に成長する、世界に一つだけのアルバムに。"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* 利用シーン */}
        <section className="py-24 md:py-32 bg-white border-t border-nfc-main/5">
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-16 md:mb-24">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  USE CASES
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  活用シーン
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  emoji: "👘",
                  title: "七五三・お宮参り",
                  desc: "お子様の晴れ姿を写真に収めるだけでなく、着付け中のはしゃぐ姿や「おめでとう」の声を動画で残せます。祖父母への贈り物にも最適。",
                },
                {
                  emoji: "💒",
                  title: "ウェディングフォト",
                  desc: "前撮りや挙式当日の感動的なシーンを、アルバムに紐づけ。ゲストからのサプライズ映像を仕込むことも。",
                },
                {
                  emoji: "🎓",
                  title: "成人式・卒業記念",
                  desc: "恩師や友人からのビデオメッセージ、学生時代のスライドショーをアルバムに埋め込み。開くたびに青春が蘇ります。",
                },
              ].map((scene, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-nfc-base/50 p-8 rounded-2xl h-full border border-nfc-main/5 hover:border-nfc-accent/20 transition-colors duration-300">
                    <span className="text-4xl block mb-6">{scene.emoji}</span>
                    <h3 className="text-lg font-bold text-nfc-main mb-3">
                      {scene.title}
                    </h3>
                    <p className="text-nfc-main/70 font-light text-sm leading-relaxed">
                      {scene.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 導入の流れ */}
        <section
          id="how-it-works"
          className="py-24 md:py-32 bg-nfc-base border-t border-nfc-main/5"
        >
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-16 md:mb-24">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  HOW IT WORKS
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  仕組みと導入の流れ
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto space-y-6">
              {steps.map((item, index) => (
                <FadeIn key={index} direction="up" delay={index * 0.1}>
                  <div className="flex bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-nfc-main/5 hover:shadow-md transition-shadow duration-300">
                    <div className="mr-6 md:mr-8 flex flex-col items-center shrink-0">
                      <span className="text-3xl md:text-4xl font-black text-nfc-accent/20 leading-none">
                        {item.num}
                      </span>
                      {index < steps.length - 1 && (
                        <div className="w-px h-full bg-nfc-accent/10 mt-4 hidden md:block" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-nfc-main mb-3">
                        {item.title}
                      </h3>
                      <p className="text-nfc-main/70 font-light leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 導入効果 */}
        <section className="py-24 md:py-32 bg-white border-t border-nfc-main/5">
          <div className="container px-4">
            <FadeIn direction="up">
              <div className="text-center mb-16 md:mb-24">
                <p className="text-[10px] font-bold text-nfc-accent tracking-[0.3em] mb-4">
                  BENEFITS FOR STUDIOS
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-nfc-main">
                  写真館にとってのメリット
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  metric: "客単価UP",
                  title: "プレミアム商品として提供",
                  desc: "通常のアルバムに＋αの付加価値を。NFC対応台紙はプレミアムオプションとして、自然な客単価アップに貢献します。",
                },
                {
                  metric: "差別化",
                  title: "他店にはない唯一の体験",
                  desc: "「写真がしゃべるアルバム」は強力な差別化ポイント。口コミやSNSで自然に広がる話題性があります。",
                },
                {
                  metric: "リピート",
                  title: "成長と共に再来店",
                  desc: "お子様の成長記録を追加できるため、年ごとの撮影リピートに直結。長期的な顧客関係を構築できます。",
                },
              ].map((benefit, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className="text-center p-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + i * 0.1,
                        ease: easeOut,
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-nfc-accent/10 to-nfc-sub/20 mb-6"
                    >
                      <span className="text-lg font-black text-nfc-accent tracking-tight">
                        {benefit.metric}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-bold text-nfc-main mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-nfc-main/70 font-light text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                写真に、新しい命を吹き込む。
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                「かざす写真館」の導入に興味をお持ちの写真スタジオ様、
                <br className="hidden md:block" />
                まずはお気軽にお問い合わせください。
                <br />
                NFCタグの仕組みやコスト、導入スケジュールなど、
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

      </main>
    </>
  );
}
