
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
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-slate-100 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg animate-pulse-scale" />
            <div className="minecraft-font text-xl text-gray-900">
              MC PROGRAMMING
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="minecraft-btn text-white px-8 py-3 rounded-none font-bold text-sm uppercase tracking-wider shadow-lg"
          >
            🎮 無料セミナー参加
          </button>
        </div>
      </header>

      {/* Floating LINE Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-emerald-600 text-white px-6 py-4 rounded-full hover:scale-110 transition-all shadow-2xl z-40 font-bold animate-glow flex items-center gap-2"
      >
        <span className="text-2xl">📱</span>
        <span className="text-sm">LINE登録</span>
      </button>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        {/* パララックス背景 */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.5}px)` }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 animate-slide-up">
            <div className="pixel-card bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 minecraft-font text-xs uppercase tracking-wider shadow-lg">
              🎓 Dr. Kawakatsu Supervised
            </div>
          </div>
          
          <h1 className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block minecraft-font text-3xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
              MINECRAFT
            </span>
            <span className="block jp-font text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              能力開発
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">プログラミング</span>
              講座
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 jp-font animate-slide-up font-medium" style={{ animationDelay: '0.2s' }}>
            遊びながら、未来に必要なスキルを身につける<br />
            <span className="text-lg text-gray-600">🎮 全12ステップで基礎から本格的なゲーム開発まで</span>
          </p>
          
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50" />
              <img 
                src="https://readdy.ai/api/search-image?query=Happy%20children%20aged%208-12%20playing%20Minecraft%20on%20computers%20together%2C%20bright%20clean%20educational%20environment%2C%20focused%20and%20joyful%20expressions%2C%20learning%20through%20gaming%2C%20colorful%20setup%20with%20multiple%20screens%20showing%20agent%20characters%2C%20warm%20lighting%2C%20realistic%20photo%20of%20educational%20technology&width=800&height=500&seq=hero3&orientation=landscape"
                alt="マインクラフトで学ぶ子どもたち"
                className="relative rounded-2xl shadow-2xl mx-auto max-w-full h-auto object-cover border-4 border-gray-300"
              />
            </div>
          </div>

          <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 blur-xl opacity-30" />
            <div className="relative pixel-card bg-white/90 backdrop-blur-md p-8 border-yellow-400 shadow-lg">
              <h3 className="minecraft-font text-2xl text-yellow-400 mb-6 neon-text">🎁 LINE BONUS x4</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: '🎥', text: '無料セミナー' },
                  { icon: '💰', text: '特別割引' },
                  { icon: '🎬', text: '入門動画' },
                  { icon: '📚', text: '設定ガイド' }
                ].map((item, index) => (
                  <div key={index} className="text-center hover-lift">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <div className="text-gray-800 jp-font font-bold">{item.text}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 jp-font">
                ※教育版マインクラフトを使用した本格的なプログラミング学習
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg blur-lg group-hover:blur-xl transition-all opacity-70" />
              <div className="relative minecraft-btn text-white text-xl px-12 py-5 rounded-lg font-bold uppercase tracking-wider flex items-center gap-3">
                <span>🎮</span>
                <span>無料セミナーに申し込む</span>
              </div>
            </button>
            <p className="text-lg text-gray-600 font-bold jp-font animate-pulse">
              ↓ たった30秒！友だち追加するだけ
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="minecraft-font text-3xl md:text-4xl text-center text-gray-900 mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              PROBLEMS?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: "🎮", text: "ゲームばかりで勉強しない..." },
              { icon: "💻", text: "プログラミング教育が必要と聞くけど..." },
              { icon: "🧠", text: "創造力や論理的思考力を伸ばしたい" },
              { icon: "😊", text: "楽しみながら学べる環境を探している" }
            ].map((problem, index) => (
              <div key={index} className="group relative hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                <div className="relative pixel-card bg-white/90 backdrop-blur-sm p-6 border-red-400/50 group-hover:border-red-400 shadow-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl group-hover:animate-bounce">{problem.icon}</span>
                    <p className="text-lg text-gray-700 jp-font">{problem.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 blur-xl opacity-50" />
              <div className="relative bg-gradient-to-r from-green-100 to-emerald-100 backdrop-blur-sm p-8 rounded-2xl border border-green-400">
                <p className="minecraft-font text-xl text-green-400 mb-6 neon-text">💚 SOLUTION INSIDE</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="minecraft-btn text-white px-8 py-3 rounded-lg font-bold uppercase"
                >
                  今すぐLINE登録
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Program Section */}
      <section className="py-24 relative overflow-hidden">
        {/* アニメーション背景 */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 bg-purple-500/10 rounded-lg animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="minecraft-font text-3xl md:text-4xl text-center text-gray-900 mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              FEATURES
            </span>
          </h2>
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 shadow-xl">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 jp-font">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    お子様の大好きなマインクラフトが、
                  </span><br />
                  <span className="text-gray-900 font-bold">最高の学習ツールに変わります。</span>
                </p>
                <p className="text-gray-600 leading-relaxed mb-10 jp-font">
                  本講座は、川勝英史教授（博士・経営情報科学分野）が監修する、教育版マインクラフトを活用した革新的なプログラミング学習プログラムです。
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: '📝', title: '順次処理', desc: '上から順に実行' },
                    { icon: '🔄', title: '繰り返し', desc: '効率的な処理' },
                    { icon: '🔀', title: '条件分岐', desc: '状況に応じた判断' }
                  ].map((item, index) => (
                    <div key={index} className="text-center group/item">
                      <div className="inline-block p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-3 group-hover/item:scale-110 transition-transform">
                        <div className="text-5xl">{item.icon}</div>
                      </div>
                      <h4 className="minecraft-font text-sm text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-600 jp-font">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="minecraft-font text-2xl text-center text-gray-900 mb-12">
            WHY MINECRAFT?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: '🎯', title: '主体的な学びを実現', desc: '子どもたちが自ら考え、行動する力を育みます', color: 'from-orange-400 to-red-400' },
              { icon: '💪', title: '失敗を恐れない姿勢', desc: '試行錯誤を繰り返すことで、問題解決能力を養います', color: 'from-blue-400 to-purple-400' },
              { icon: '🛠️', title: '実践的なスキル習得', desc: '将来必要となるデジタルスキルを楽しく学べます', color: 'from-green-400 to-emerald-400' },
              { icon: '🌟', title: '創造力の開花', desc: '最終的には簡単なゲームや音楽まで作れるように', color: 'from-purple-400 to-pink-400' }
            ].map((item, index) => (
              <div key={index} className="group card-3d">
                <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 p-8 hover:border-white/30 transition-all">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-20 blur-3xl`} />
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 jp-font">{item.title}</h4>
                    <p className="text-gray-400 jp-font">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Before / After</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mb-4">
                  <h4 className="text-lg font-bold text-red-800 mb-2">Before</h4>
                  <p className="text-red-700">ゲームで遊ぶだけ</p>
                  <div className="text-4xl mt-4">😞</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 mb-4">
                  <h4 className="text-lg font-bold text-green-800 mb-2">After</h4>
                  <p className="text-green-700">エージェントを操作して課題を解決</p>
                  <div className="text-4xl mt-4">😊</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-2xl">
            <p className="text-xl font-bold mb-4">→ 詳しい解決方法は公式LINEでご紹介します</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-600 px-8 py-3 !rounded-button hover:bg-gray-100 transition-colors font-bold"
            >
              今すぐLINE友だち追加
            </button>
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            講座で身につく具体的なスキル
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">💻 技術的スキル</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• タイピング（ホームポジション）</li>
                <li>• ファイル管理とプログラム実行</li>
                <li>• フローチャートの理解と作成</li>
                <li>• ループ処理と条件分岐の実装</li>
                <li>• 配列と関数の活用</li>
                <li>• 3次元座標の理解と操作</li>
                <li>• ゲーム開発の基礎</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">🧠 思考力</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 順次処理の理解</li>
                <li>• 問題の分解と解決</li>
                <li>• アルゴリズム設計</li>
                <li>• 効率的な方法の発見</li>
                <li>• 空間認識能力</li>
                <li>• 数学的思考（余りの活用）</li>
                <li>• データ構造の設計</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4">🤝 社会性</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 指示の理解と実行</li>
                <li>• ルールの遵守</li>
                <li>• 目標達成への取り組み</li>
                <li>• 数学的概念の理解と応用</li>
                <li>• 総合的なプロジェクトの完成</li>
                <li>• 他者の成果物の理解と活用</li>
                <li>• チームワークの基礎</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="minecraft-font text-3xl md:text-4xl text-center text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              12 STEPS
            </span>
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 jp-font">
            基礎から応用まで、段階的に学習を進めます
          </p>
          
          {/* 3Dカードレイアウト */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 perspective-1000">
            {/* STEP 1-4 初級 */}
            <div className="space-y-6">
              <div className="minecraft-font text-xl text-green-400 text-center mb-6 neon-text">
                BEGINNER
              </div>
              {[
                { num: 1, title: 'パソコン操作の基礎', desc: 'キーボード・マウス操作' },
                { num: 2, title: 'プログラミングの基礎', desc: 'MakeCodeでエージェント操作' },
                { num: 3, title: '順次処理', desc: 'フローチャートとアルゴリズム' },
                { num: 4, title: '繰り返しと条件分岐', desc: 'ループとif文の基礎' }
              ].map((step, index) => (
                <div key={index} className="group relative hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
                  <div className="relative pixel-card bg-white/95 backdrop-blur-sm p-6 border-green-400/30 group-hover:border-green-400 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-gradient-to-br from-green-400 to-emerald-600 text-black w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl minecraft-font">
                        {step.num}
                      </div>
                      <h3 className="font-bold text-gray-900 jp-font flex-1">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 jp-font">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* STEP 5-8 中級 */}
            <div className="space-y-6">
              <div className="minecraft-font text-xl text-blue-400 text-center mb-6 neon-text">
                INTERMEDIATE
              </div>
              {[
                { num: 5, title: '繰り返しを極める', desc: '前判定・後判定ループ' },
                { num: 6, title: '条件分岐を極める', desc: 'ネスト構造と効率化' },
                { num: 7, title: '座標とゲーム開発', desc: 'ワールド座標・相対座標' },
                { num: 8, title: '変数の応用', desc: '割り算の余りと建築' }
              ].map((step, index) => (
                <div key={index} className="group relative hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
                  <div className="relative pixel-card bg-white/95 backdrop-blur-sm p-6 border-blue-400/30 group-hover:border-blue-400 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-gradient-to-br from-blue-400 to-cyan-600 text-black w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl minecraft-font">
                        {step.num}
                      </div>
                      <h3 className="font-bold text-gray-900 jp-font flex-1">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 jp-font">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* STEP 9-12 上級 */}
            <div className="space-y-6">
              <div className="minecraft-font text-xl text-purple-400 text-center mb-6 neon-text">
                ADVANCED
              </div>
              {[
                { num: 9, title: '配列と関数', desc: '総合的な作品制作' },
                { num: 10, title: '音楽プログラミング（１）', desc: '音符ブロックとメロディー' },
                { num: 11, title: '音楽プログラミング（２）', desc: '伴奏とチーム開発' },
                { num: 12, title: '時間制限ゲーム開発', desc: '総合的なゲーム制作' }
              ].map((step, index) => (
                <div key={index} className="group relative hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
                  <div className="relative pixel-card bg-white/95 backdrop-blur-sm p-6 border-purple-400/30 group-hover:border-purple-400 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-gradient-to-br from-purple-400 to-pink-600 text-black w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl minecraft-font">
                        {step.num}
                      </div>
                      <h3 className="font-bold text-gray-900 jp-font flex-1">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 jp-font">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* カリキュラム特長 */}
          <div className="relative mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 shadow-xl">
              <h3 className="minecraft-font text-2xl text-center text-gray-900 mb-12">
                CURRICULUM FEATURES
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    icon: '🌱',
                    title: '初級 (1-4)',
                    color: 'from-green-400 to-emerald-400',
                    points: ['パソコン操作の基礎', 'ビジュアルプログラミング', 'エージェント操作', 'フローチャート理解']
                  },
                  { 
                    icon: '🌳',
                    title: '中級 (5-8)',
                    color: 'from-blue-400 to-cyan-400',
                    points: ['ループと条件分岐', '効率的な設計', '3D座標システム', '自動建築プログラム']
                  },
                  { 
                    icon: '🏆',
                    title: '上級 (9-12)',
                    color: 'from-purple-400 to-pink-400',
                    points: ['配列と関数', '音楽プログラミング', 'チーム開発', 'ゲーム制作']
                  },
                  { 
                    icon: '🎉',
                    title: '学習フロー',
                    color: 'from-orange-400 to-red-400',
                    points: ['目標設定', 'スキル定着', '実践ミッション', '達成度確認']
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-block mb-4">
                      <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl`}>
                        <span className="text-4xl">{feature.icon}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-4 jp-font">{feature.title}</h4>
                    <ul className="space-y-2">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-gray-600 jp-font">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message to Parents Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            保護者の方へのメッセージ
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              本講座では、単にゲームをするのではなく、教育的な目的を持ってマインクラフトを活用します。お子様は楽しみながら、以下のような21世紀型スキルを身につけることができます：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🧠 思考力・判断力</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 論理的思考力 - プログラミング的思考の基礎</li>
                  <li>• 問題解決能力 - 課題に直面した時の対処法</li>
                  <li>• アルゴリズム設計力 - 最適解を見つける力</li>
                  <li>• 効率化の視点 - より良い方法を追求</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">🔧 実践的スキル</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• デジタルリテラシー - PCの基本操作</li>
                  <li>• プログラミング基礎 - 今後必須のスキル</li>
                  <li>• 協調的開発能力 - チームで働く力</li>
                  <li>• システム開発能力 - 完成度の高い作品作り</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-4">🌟 創造性・表現力</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 創造性 - 自由な発想で新しいものを生み出す</li>
                  <li>• 計画性 - 最適なルートを考える戦略的思考</li>
                  <li>• 空間把握能力 - 3次元座標の理解</li>
                  <li>• 学際的応用力 - 音楽など他分野との融合</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-4">🎓 学習姿勢</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 試行錯誤の精神 - 失敗を恐れず挑戦</li>
                  <li>• 継続的学習 - コツコツ積み重ねる力</li>
                  <li>• 目標達成への取り組み - やり抜く力</li>
                  <li>• 他者から学ぶ姿勢 - 協調性と柔軟性</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            受講後の姿
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              全12ステップを修了すると、お子様は：
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "パソコンを自在に操作できるようになります",
                "プログラミングの基本的な考え方が身につきます",
                "論理的に考え、計画的に行動する習慣が身につきます",
                "アルゴリズムの3つの基本構造を理解し活用できます",
                "複雑な条件分岐を使った高度なプログラムが作れます",
                "座標システムを理解し、簡単なゲームを開発できます",
                "配列と関数を使って効率的なプログラムが作れます",
                "音楽プログラミングで異分野の知識を活かせます",
                "他人のプログラムを理解し、改良できます",
                "時間制御を含む本格的なゲームを開発できます",
                "より高度なプログラミング学習への準備が整います",
                "失敗を恐れず、試行錯誤しながら解決する力が育ちます"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-green-500">✓</div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recommended for Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">こんなお子様におすすめ</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "マインクラフトが大好き",
                "パソコンを使えるようになりたい",
                "プログラミングに興味がある",
                "論理的に考えることが好き",
                "パズルや謎解きを楽しめる",
                "創造的な活動を楽しみたい",
                "新しいことにチャレンジしたい",
                "ゲームを作ってみたい",
                "建築や構造物を作るのが好き",
                "自分のアイデアを形にしたい",
                "音楽やリズムが好き",
                "友達と協力して何かを作ることが好き",
                "完成度の高い作品を作りたい"
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">
            受講生の作品例
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6">
              <img 
                src="https://readdy.ai/api/search-image?query=Minecraft%20automatic%20farm%20system%20screenshot%20with%20agent%20working%2C%20organized%20crop%20fields%20with%20redstone%20mechanisms%2C%20educational%20programming%20project%20interface%2C%20clean%20bright%20colors%2C%20systematic%20layout&width=400&height=300&seq=result8&orientation=landscape"
                alt="自動農場システム"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-2">作品例1：自動農場システム</h4>
              <p className="text-gray-600">エージェントが種まきから収穫まで全自動で実行</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <img 
                src="https://readdy.ai/api/search-image?query=Minecraft%20maze%20solving%20program%20with%20clear%20solution%20path%2C%20complex%20labyrinth%20with%20agent%20character%20navigating%20through%2C%20educational%20programming%20visualization%2C%20bright%20interface%20showing%20algorithm%20in%20action&width=400&height=300&seq=result9&orientation=landscape"
                alt="迷路脱出プログラム"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-2">作品例2：迷路脱出プログラム</h4>
              <p className="text-gray-600">どんな迷路でも出口を見つけるアルゴリズム</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <img 
                src="https://readdy.ai/api/search-image?query=Minecraft%20building%20assistant%20program%20showing%20automatic%20construction%20process%2C%20architectural%20helper%20system%20with%20blueprint%2C%20organized%20building%20automation%2C%20educational%20programming%20interface&width=400&height=300&seq=result10&orientation=landscape"
                alt="建築アシスタント"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-2">作品例3：建築アシスタント</h4>
              <p className="text-gray-600">設計図通りに建物を自動建築</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-4">学習の特別な工夫</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-bold text-gray-800 mb-2">🎮 ゲーミフィケーション</h5>
                <p className="text-sm text-gray-600">ミッション形式で、達成感を味わいながら学習</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-bold text-gray-800 mb-2">🖍️ ビジュアルプログラミング</h5>
                <p className="text-sm text-gray-600">MakeCodeのブロックで、視覚的にプログラムを理解</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-bold text-gray-800 mb-2">📈 段階的な難易度設定</h5>
                <p className="text-sm text-gray-600">少しずつレベルアップし、無理なく成長</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-bold text-gray-800 mb-2">📄 親子で取り組める内容</h5>
                <p className="text-sm text-gray-600">保護者の方も一緒に考え、話し合える課題設計</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 bg-green-50 p-6 rounded-2xl">
            <p className="text-xl font-bold text-green-800 mb-4">💡 実際の作品動画をLINEで配信中</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white px-8 py-3 !rounded-button hover:bg-green-600 transition-colors font-bold"
            >
              LINE登録して作品を見る
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            保護者様の声
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🗣️</div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">小学4年生の保護者様</p>
                  <p className="text-gray-700 leading-relaxed">
                    「ゲームの時間が学習時間に変わりました！毎回のステージクリアを楽しみにしていて、自分から『今日はプログラミングやる！』と言うようになりました」
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🗣️</div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">小学6年生の保護者様</p>
                  <p className="text-gray-700 leading-relaxed">
                    「最初は難しいかなと心配でしたが、ゲーム感覚で進められるので全く問題ありませんでした。自分で考えて解決する力が明らかについています」
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🗣️</div>
                <div>
                  <p className="font-bold text-gray-800 mb-2">小学5年生の保護者様</p>
                  <p className="text-gray-700 leading-relaxed">
                    「プログラミングへの苦手意識がなくなっただけでなく、学校の勉強でも論理的に考えるようになりました」
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 bg-green-50 p-6 rounded-2xl">
            <p className="text-xl font-bold text-green-800 mb-4">💚 もっと多くの体験談をLINEで配信中</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white px-8 py-3 !rounded-button hover:bg-green-600 transition-colors font-bold"
            >
              LINE登録して体験談を読む
            </button>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            講師紹介
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/b2e66b943cb7aaa4d47467efdf461b49.jfif"
                  alt="川勝英史教授"
                  className="w-full rounded-2xl shadow-lg object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  川勝 英史（かわかつ ひでふみ）教授
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  東京情報大学 総合情報学部 教授
                </p>
                <p className="text-md text-gray-700 mb-6">
                  博士（経営情報科学）- 神戸商科大学
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">🎓 学歴・専門性</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 博士（経営情報科学）- 神戸商科大学</li>
                      <li>• 日本初！Intel Skills for Innovation "Silver Ambassador"</li>
                      <li>• オペレーションズ・リサーチ20年以上の研究経験</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2">🏆 実績</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Best Paper Award（国際会議にて複数受賞）</li>
                      <li>• 研究論文60本以上発表</li>
                      <li>• 千葉市・インテル株式会社との産学官連携</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-800 mb-3">💭 なぜマインクラフト教育なのか</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                「小学生の頃、プログラミングに夢中になった経験が今の私を作りました。子どもたちの『ゲームが好き』という純粋な気持ちを、将来につながる本物の力に変えたい。マインクラフトのエージェントプログラミングは、まさにその理想を実現できる最高の教材です。」
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h5 className="font-bold text-green-800 mb-2">🌟 監修のこだわり</h5>
                <p className="text-green-700 text-sm">
                  「オペレーションズ・リサーチで20年以上の研究経験を活かし、最適解を見つける思考法をカリキュラムに反映しました。単にプログラミングを学ぶだけでなく、問題解決のプロセスを通じて、子どもたちの未来に活きる力を育てます。」
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold text-blue-800 mb-2">📢 教授からのメッセージ</h5>
                <p className="text-blue-700 text-sm">
                  「オペレーションズ・リサーチで培った『最適解を見つける思考法』と、エージェントプログラミングの組み合わせは、子どもたちに最高の学習体験を提供します。一緒に、ゲームの世界で本物の問題解決力を身につけましょう！」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINE Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            公式LINEご登録の3大メリット
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-xl font-bold text-green-800">📱 たった30秒！LINE友だち追加で得られるもの</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">メリット1：無料セミナーへの優先案内</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✅ 人気の時間帯をLINE登録者限定で先行予約</li>
                <li>✅ キャンセル待ちの優先案内</li>
                <li>✅ 追加開催の最速お知らせ</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">メリット2：豪華4大特典プレゼント</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  <span className="text-gray-700">無料セミナー参加権（通常5,000円相当）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-700">受講料特別割引クーポン</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📹</span>
                  <span className="text-gray-700">エージェントプログラミング入門動画</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <span className="text-gray-700">マインクラフト教育版設定ガイド</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">メリット3：最新情報&限定コンテンツ</h3>
              <ul className="text-gray-700 space-y-2">
                <li>📸 受講生の作品紹介</li>
                <li>💡 プログラミング学習のコツ</li>
                <li>🎉 期間限定キャンペーン情報</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">🚀 かんたん登録手順</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-green-600">1</span>
                </div>
                <p className="font-bold text-gray-800">下のボタンをタップ</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-green-600">2</span>
                </div>
                <p className="font-bold text-gray-800">「友だち追加」をタップ</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-green-600">3</span>
                </div>
                <p className="font-bold text-gray-800">自動返信メッセージから予約</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="font-bold text-blue-800">⏱️ 所要時間：たった30秒！</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="font-bold text-blue-800">📧 メールアドレス不要！</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="font-bold text-blue-800">🔒 いつでもブロックOK！</span>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white text-xl px-12 py-4 !rounded-button hover:bg-green-600 transition-colors shadow-lg font-bold mb-6"
            >
              公式LINEに友だち追加して特典を受け取る
            </button>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-bold text-gray-800 mb-2">Q: LINEでしつこい勧誘はありませんか？</p>
              <p className="text-sm text-gray-600">A: 週1〜2回の有益な情報配信のみ。いつでもブロック可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Seminar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            📺 LINE登録者限定！充実の無料セミナー
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">公式LINEにご登録いただいた方だけが参加できる特別セミナーです。</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">セミナー内容（60分）</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">25分</div>
                  <h4 className="text-lg font-bold text-gray-800">実演デモ</h4>
                </div>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• エージェントプログラミングの実際の様子</li>
                  <li>• 子どもたちの「できた！」の瞬間</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">25分</div>
                  <h4 className="text-lg font-bold text-gray-800">プログラム詳細説明</h4>
                </div>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• 10ステージの学習内容</li>
                  <li>• 身につくスキルと成長イメージ</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-bold">10分</div>
                  <h4 className="text-lg font-bold text-gray-800">質疑応答</h4>
                </div>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• よくある質問への回答</li>
                  <li>• 個別相談は別途承ります</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                ※個別相談をご希望の方は、セミナー終了後に改めてお時間をお取りいたします
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">開催スケジュール</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h4 className="text-lg font-bold text-blue-600 mb-3">火曜日</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">14:00-15:00</p>
                  <p className="text-gray-700">19:00-20:00</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h4 className="text-lg font-bold text-green-600 mb-3">金曜日</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">11:00-12:00</p>
                  <p className="text-gray-700">22:00-23:00</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h4 className="text-lg font-bold text-purple-600 mb-3">日曜日</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">10:00-11:00</p>
                  <p className="text-gray-700">18:00-19:00</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 font-bold">※すべてオンライン（Zoom）開催</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-800 mb-6">🎯 今すぐLINE登録すべき理由</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🚀</div>
                <div>
                  <h4 className="font-bold text-red-800">セミナー枠がすぐ埋まる</h4>
                  <p className="text-red-700">各回10名限定。LINE登録者から優先案内</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <h4 className="font-bold text-red-800">登録特典は期間限定</h4>
                  <p className="text-red-700">受講料割引は今月末まで</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl">📢</div>
                <div>
                  <h4 className="font-bold text-red-800">情報を逃さない</h4>
                  <p className="text-red-700">キャンセル枠や追加開催をLINEで即お知らせ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white text-xl px-12 py-4 !rounded-button hover:bg-green-600 transition-colors shadow-lg font-bold mb-4"
            >
              LINE友だち追加でセミナーに申し込む
            </button>
            <p className="text-lg text-gray-600 font-bold">
              ↓ 友だち追加後、すぐに予約できます！
            </p>
          </div>
        </div>
      </section>

      {/* Professor Message Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            📝 川勝教授より最後にひとこと
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/b2e66b943cb7aaa4d47467efdf461b49.jfif"
                  alt="川勝教授"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    お子様の「ゲームが好き」という気持ちは、実は素晴らしい才能の種です。
                  </p>
                  <p>
                    でも、いきなり高額なプログラムに申し込むのは不安ですよね。
                  </p>
                  <p>
                    だからこそ、まずは公式LINEにご登録ください。
                  </p>
                  <p>
                    LINEでは、実際の授業風景や受講生の作品、プログラミング学習のコツなど、有益な情報を定期的にお届けします。
                  </p>
                  <p>
                    そして何より、無料セミナーで直接お話しできることを楽しみにしています。
                  </p>
                  <p>
                    登録は本当に簡単。たった30秒で完了します。
                  </p>
                  <p>
                    もちろん、合わないと思えばいつでもブロックできます。
                  </p>
                  <p className="font-bold text-blue-600">
                    まずは気軽に、お子様の可能性を探ってみませんか？
                  </p>
                </div>
                
                <div className="mt-6 text-right">
                  <p className="text-gray-600">東京情報大学 教授</p>
                  <p className="font-bold text-gray-800 text-lg">川勝 英史</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-2xl p-8 shadow-2xl mb-8">
            <h2 className="text-3xl font-bold text-center mb-6">🎁 今だけ！LINE登録4大特典</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📺</span>
                <span className="text-lg font-bold">無料セミナー参加権（5,000円相当）</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">💰</span>
                <span className="text-lg font-bold">受講料特別割引クーポン</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎮</span>
                <span className="text-lg font-bold">プログラミング入門動画</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">📖</span>
                <span className="text-lg font-bold">設定完全ガイドブック</span>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-red-800 mb-3">緊急お知らせ</h3>
            <div className="space-y-2">
              <p className="text-red-700 flex items-center gap-2">
                <span>⚠️</span>
                <span>特典は今月末で終了予定</span>
              </p>
              <p className="text-red-600 text-sm">来月以降は特典内容が変更される可能性があります</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">🔥 本日限定！スペシャル特典</h3>
            <p className="text-lg mb-4">今日中にLINE登録された方だけ</p>
            <div className="bg-white/20 rounded-xl p-4 mb-6">
              <p className="text-xl font-bold mb-2">🎁 川勝教授の「プログラミング思考育成法」</p>
              <p className="text-lg">特別講義動画（30分）をプレゼント！</p>
            </div>
            <p className="text-sm mb-6" suppressHydrationWarning={true}>※23:59までの登録が対象です</p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-purple-600 text-2xl px-16 py-4 !rounded-button hover:bg-gray-100 transition-colors shadow-lg font-bold"
            >
              公式LINEに今すぐ友だち追加
            </button>
          </div>

          <div className="mt-8 text-center">
            <div className="mb-6">
              <img 
                src="https://readdy.ai/api/search-image?query=QR%20code%20for%20LINE%20registration%20with%20green%20LINE%20logo%2C%20mobile%20phone%20scanning%20QR%20code%2C%20clean%20white%20background%2C%20easy%20to%20scan%20design%2C%20educational%20app%20registration%20interface&width=200&height=200&seq=qr5&orientation=squarish"
                alt="LINE登録用QRコード"
                className="mx-auto rounded-xl shadow-lg"
              />
            </div>
            <p className="text-lg font-bold text-gray-700 mb-4">QRコードはこちら</p>
            <p className="text-gray-600">最後まで読んでいただき、ありがとうございました。</p>
            <p className="text-gray-600 font-bold">LINEでお会いできることを楽しみにしています！</p>
          </div>
        </div>
      </section>

      {/* Registration Flow Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            公式LINE登録後の流れ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">友だち追加完了</h3>
                  <p className="text-gray-600">ウェルカムメッセージ受信（即時）</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">4大特典の受け取り</h3>
                  <p className="text-gray-600">無料セミナー予約フォームへのリンク</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">定期的な有益情報配信</h3>
                  <p className="text-gray-600">週1〜2回のお役立ち情報</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">LINE配信内容</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📹</span>
                  <span className="text-gray-700">受講生の作品紹介動画</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">💡</span>
                  <span className="text-gray-700">プログラミング学習のコツ</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎯</span>
                  <span className="text-gray-700">エージェント活用テクニック</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎁</span>
                  <span className="text-gray-700">期間限定キャンペーン情報</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📚</span>
                  <span className="text-gray-700">教育に関するお役立ち情報</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              今すぐ始めよう！
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              お子様の「好き」を「学び」に変える、新しい教育のカタチ。<br />
              マインクラフトで、楽しみながら未来のスキルを身につけませんか？
            </p>
            <p className="text-lg text-gray-600">
              プログラミング教育の第一歩を、大好きなゲームから始めましょう！<br />
              全12ステップを通じて、基礎から本格的なゲーム開発まで、着実にスキルアップできます。
            </p>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            まずは気軽にLINE登録から始めてみませんか？
          </p>
          
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
            <p className="text-lg font-bold text-yellow-800 mb-2">⚠️ 定員制のため、お早めに！</p>
            <p className="text-yellow-700">無料セミナーは毎回満席になる人気イベントです</p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white text-2xl px-16 py-6 !rounded-button hover:bg-green-600 transition-colors shadow-lg font-bold"
          >
            公式LINE登録で特典を受け取る
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            ※登録は無料です。いつでも解除できます。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-4" style={{fontFamily: 'Pacifico, serif'}}>
              マインクラフトで学ぶ能力開発プログラミング講座
            </div>
            <p className="text-gray-400 mb-6">
              博士（経営情報科学）川勝英史教授 監修<br />
              未来を創る力を育てる
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div>
              <h4 className="font-bold text-white mb-3">会社情報</h4>
              <ul className="space-y-2">
                <li>運営会社情報</li>
                <li>お問い合わせ（公式LINE内）</li>
                <li>プライバシーポリシー</li>
                <li>特定商取引法に基づく表記</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-3">サポート</h4>
              <ul className="space-y-2">
                <li>よくある質問</li>
                <li>技術的なお問い合わせ</li>
                <li>受講生サポート</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-3">SNS</h4>
              <ul className="space-y-2">
                <li>公式LINE</li>
                <li>教育ブログ</li>
                <li>最新情報配信</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 マインクラフトで学ぶ能力開発プログラミング講座. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                公式LINE登録
              </h3>
              
              <div className="mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Smartphone%20screen%20showing%20LINE%20app%20registration%20interface%20with%20QR%20code%2C%20green%20LINE%20logo%20prominent%2C%20clean%20modern%20mobile%20UI%20design%2C%20realistic%20device%20mockup%20showing%20friend%20registration%20process&width=200&height=350&seq=line3&orientation=portrait"
                  alt="LINE登録画面"
                  className="mx-auto rounded-xl shadow-lg max-w-full h-auto object-cover"
                />
              </div>
              
              <div className="bg-green-50 p-4 rounded-xl mb-6">
                <p className="text-lg font-bold text-green-800 mb-2">
                  📱 QRコードを読み取って登録
                </p>
                <p className="text-green-700 text-sm">
                  スマートフォンのカメラでQRコードを読み取り、友だち追加してください
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p>✅ たった30秒で完了</p>
                <p>✅ メールアドレス不要</p>
                <p>✅ 4大特典が即座に受け取れます</p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-green-500 text-white py-3 !rounded-button hover:bg-green-600 transition-colors font-bold"
              >
                登録完了後、このウィンドウを閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
