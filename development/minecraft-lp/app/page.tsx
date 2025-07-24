'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-gray-900 jp-font">
              マインクラフト×プログラミング
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md jp-font"
          >
            無料で相談する
          </button>
        </div>
      </header>

      {/* Floating LINE Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full hover:scale-105 transition-all shadow-2xl z-40 font-bold flex items-center gap-2 jp-font"
      >
        <span className="text-xl">📱</span>
        <span>LINE相談</span>
      </button>

      {/* Hero Section - 注意を引く */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 jp-font leading-tight">
            お子様の<span className="text-green-600">「ゲーム時間」</span>を<br />
            <span className="text-blue-600">「学習時間」</span>に変える方法
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 jp-font">
            マインクラフトで遊びながら、<br />
            プログラミングの基礎から本格的なゲーム開発まで
          </p>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8 inline-block">
            <p className="text-lg font-bold text-gray-900 mb-2 jp-font">
              ⚡ 今なら期間限定
            </p>
            <p className="text-2xl font-bold text-red-600 jp-font">
              無料体験セミナー＋4大特典プレゼント中
            </p>
          </div>
          
          <div className="mb-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl px-12 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all jp-font"
            >
              今すぐ無料で始める →
            </button>
            <p className="text-sm text-gray-600 mt-4 jp-font">
              ※30秒で簡単登録・いつでも解除可能
            </p>
          </div>
        </div>
      </section>

      {/* 共感・問題提起 Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 jp-font">
            こんなお悩みありませんか？
          </h2>
          
          <div className="space-y-6">
            {[
              { 
                icon: "😔", 
                title: "ゲームばかりで勉強しない",
                desc: "「宿題は？」と聞いても「あとで」の繰り返し..."
              },
              { 
                icon: "😟", 
                title: "将来が心配",
                desc: "プログラミング教育が必修化されたけど、何から始めれば..."
              },
              { 
                icon: "😩", 
                title: "習い事が続かない",
                desc: "興味を持ってもすぐに飽きてしまう..."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 jp-font">{item.title}</h3>
                    <p className="text-gray-700 jp-font">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4 jp-font">
              でも、もし...
            </p>
            <p className="text-xl text-gray-700 jp-font">
              お子様の大好きな<span className="font-bold text-green-600">マインクラフト</span>が<br />
              最高の<span className="font-bold text-blue-600">学習ツール</span>になるとしたら？
            </p>
          </div>
        </div>
      </section>

      {/* 解決策の提示 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 jp-font">
            博士監修の本格プログラミング講座
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 jp-font">
            東京情報大学 川勝英史教授（博士）による特別カリキュラム
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-2 jp-font">学術的裏付け</h3>
              <p className="text-gray-700 jp-font">20年以上の研究に基づく最適な学習設計</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2 jp-font">楽しく継続</h3>
              <p className="text-gray-700 jp-font">ゲーム感覚で自然に身につくプログラミング思考</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2 jp-font">確実な成長</h3>
              <p className="text-gray-700 jp-font">12ステップで基礎から本格開発まで</p>
            </div>
          </div>
        </div>
      </section>

      {/* 信頼性・権威性 */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 jp-font">
            なぜ選ばれるのか
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/b2e66b943cb7aaa4d47467efdf461b49.jfif"
                  alt="川勝英史教授"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2 jp-font">
                  川勝 英史 教授
                </h3>
                <p className="text-blue-600 font-semibold mb-4 jp-font">
                  東京情報大学 総合情報学部 教授<br />
                  博士（経営情報科学）
                </p>
                <ul className="space-y-2 text-gray-700 jp-font">
                  <li>✅ 日本初！Intel Skills for Innovation "Silver Ambassador"</li>
                  <li>✅ オペレーションズ・リサーチ20年以上の研究経験</li>
                  <li>✅ 国際会議でBest Paper Award複数受賞</li>
                  <li>✅ 千葉市・インテル株式会社との産学官連携実績</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 jp-font">
              「小学生の頃のプログラミング体験が今の私を作りました。<br />
              子どもたちの『好き』を『力』に変える教育を届けたい」
            </p>
          </div>
        </div>
      </section>

      {/* ベネフィット */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 jp-font">
            受講後に得られる未来
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-800 jp-font">
                お子様の変化
              </h3>
              <ul className="space-y-3">
                {[
                  "ゲーム時間が学習時間に",
                  "論理的思考力が身につく",
                  "問題解決能力が向上",
                  "創造力が開花",
                  "将来役立つスキルを習得"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span className="jp-font">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 jp-font">
                保護者様のメリット
              </h3>
              <ul className="space-y-3">
                {[
                  "「勉強しなさい」が不要に",
                  "将来の不安が解消",
                  "お子様との共通の話題",
                  "成長を実感できる",
                  "教育投資の確かな成果"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-blue-600">✓</span>
                    <span className="jp-font">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 社会的証明 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 jp-font">
            受講生保護者様の声
          </h2>
          
          <div className="space-y-6">
            {[
              {
                grade: "小学5年生の保護者様",
                comment: "ゲームばかりだった息子が、今では『プログラミングの時間だ！』と自分から机に向かうように。学校の成績も上がりました。",
                rating: "★★★★★"
              },
              {
                grade: "小学3年生の保護者様",
                comment: "最初は難しいかなと心配でしたが、ステップごとに進められるので無理なく続けられています。何より楽しそうなのが一番です。",
                rating: "★★★★★"
              },
              {
                grade: "小学6年生の保護者様",
                comment: "プログラミング教室をいくつか試しましたが、ここまで夢中になったのは初めて。博士監修という安心感もあります。",
                rating: "★★★★★"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-gray-800 jp-font">{item.grade}</p>
                  <p className="text-yellow-500">{item.rating}</p>
                </div>
                <p className="text-gray-700 jp-font leading-relaxed">
                  「{item.comment}」
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 緊急性・限定性 */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-red-700 mb-4 jp-font">
              ⚠️ 重要なお知らせ
            </h2>
            <p className="text-xl text-gray-800 mb-6 jp-font">
              無料体験セミナーは<span className="font-bold text-red-600">各回10名限定</span>です
            </p>
            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="text-lg font-bold text-gray-900 mb-2 jp-font">今月の残り枠</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">3</p>
                  <p className="text-sm text-gray-600 jp-font">火曜日</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">5</p>
                  <p className="text-sm text-gray-600 jp-font">金曜日</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">2</p>
                  <p className="text-sm text-gray-600 jp-font">日曜日</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 jp-font">
              ※人気の時間帯から埋まっていきます
            </p>
          </div>
        </div>
      </section>

      {/* 行動喚起 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 jp-font">
            今すぐ始める3つの理由
          </h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 jp-font">完全無料で試せる</h3>
                <p className="text-gray-700 jp-font">
                  まずは無料セミナーで、お子様に合うかどうかを確認できます。
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 jp-font">特典が今だけ</h3>
                <p className="text-gray-700 jp-font">
                  4大特典（5,000円相当）は期間限定。来月以降は内容が変更される可能性があります。
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 jp-font">早く始めるほど有利</h3>
                <p className="text-gray-700 jp-font">
                  プログラミング学習は早期開始が効果的。1日でも早いスタートが将来の大きな差に。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 jp-font">
              簡単30秒！LINE登録で今すぐスタート
            </h3>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl px-12 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all jp-font mb-4"
            >
              無料で始める →
            </button>
            <p className="text-sm text-gray-600 jp-font">
              ※しつこい勧誘は一切ありません
            </p>
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 jp-font">
            お子様の可能性を、今すぐ解き放ちませんか？
          </h2>
          <p className="text-xl text-gray-700 mb-8 jp-font">
            ゲームが大好きな今だからこそ、<br />
            その情熱を未来につながる力に変えるチャンスです。
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-2xl px-16 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all jp-font"
          >
            今すぐ無料で始める
          </button>
          <p className="text-sm text-gray-500 mt-4 jp-font">
            ※登録は無料です。いつでも解除できます。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2 jp-font">
            マインクラフトで学ぶ能力開発プログラミング講座
          </p>
          <p className="text-gray-400 jp-font">
            博士（経営情報科学）川勝英史教授 監修
          </p>
          <p className="text-sm text-gray-500 mt-6">
            &copy; 2024 All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-bold mb-4 text-center jp-font">
              LINE友だち追加
            </h3>
            <p className="text-gray-700 mb-6 text-center jp-font">
              下記のQRコードを読み取るか、<br />
              ボタンをタップして友だち追加してください
            </p>
            
            <div className="text-center mb-6">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://line.me/R/ti/p/%40minecraft-programming"
                alt="LINE QRコード"
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
            
            <a 
              href="https://line.me/R/ti/p/@minecraft-programming"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-center transition-colors jp-font"
            >
              LINEで友だち追加
            </a>
          </div>
        </div>
      )}
    </div>
  );
}