
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600" style={{fontFamily: 'Pacifico, serif'}}>
            logo
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-6 py-2 !rounded-button hover:bg-green-600 transition-colors font-bold"
          >
            公式LINE登録で無料セミナー
          </button>
        </div>
      </header>

      {/* Floating LINE Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-3 !rounded-button hover:bg-green-600 transition-colors shadow-lg z-40 font-bold"
      >
        📱 LINE友だち追加
      </button>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            ゲームが学びに変わる<br />
            瞬間を、お子様に。
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            マインクラフトで身につく論理的思考力とプログラミング思考
          </p>
          
          <div className="mb-12">
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20children%20aged%208-12%20playing%20Minecraft%20on%20computers%20together%2C%20bright%20clean%20educational%20environment%2C%20focused%20and%20joyful%20expressions%2C%20learning%20through%20gaming%2C%20colorful%20setup%20with%20multiple%20screens%20showing%20agent%20characters%2C%20warm%20lighting%2C%20realistic%20photo%20of%20educational%20technology&width=800&height=500&seq=hero3&orientation=landscape"
              alt="マインクラフトで学ぶ子どもたち"
              className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto object-cover"
            />
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">🎁 LINE登録で4大特典プレゼント</h3>
            <div className="grid md:grid-cols-4 gap-4 text-yellow-700">
              <div>✅ 無料セミナー参加権</div>
              <div>✅ 受講料特別割引</div>
              <div>✅ 入門動画</div>
              <div>✅ 設定ガイド</div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white text-xl px-12 py-4 !rounded-button hover:bg-green-600 transition-colors shadow-lg font-bold"
            >
              公式LINEで無料セミナーに申し込む
            </button>
            <p className="text-lg text-gray-600 font-bold">
              ↓ たった30秒！友だち追加するだけ
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            こんなお悩みありませんか？
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🎮", text: "ゲームばかりで勉強しない..." },
              { icon: "💻", text: "プログラミング教育が必要と聞くけど、何から始めれば..." },
              { icon: "🧠", text: "子どもの創造力や論理的思考力を伸ばしたい" },
              { icon: "😊", text: "楽しみながら学べる環境を探している" }
            ].map((problem, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{problem.icon}</span>
                  <p className="text-lg text-gray-700">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-green-50 p-6 rounded-2xl">
            <p className="text-xl font-bold text-green-800 mb-4">💚 そのお悩み、LINEで解決のヒントをお届けします</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white px-8 py-3 !rounded-button hover:bg-green-600 transition-colors font-bold"
            >
              今すぐLINE登録
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ゲーム×プログラミング＝最強の学習体験
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">ミッションクリア型</h3>
              <p className="text-gray-600">達成感を味わいながら学習</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">エージェント指示</h3>
              <p className="text-gray-600">論理的思考力を育成</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">段階的難易度</h3>
              <p className="text-gray-600">確実にレベルアップ</p>
            </div>
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            プログラムの3大特徴
          </h2>
          
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">特徴1：ステージクリア型カリキュラム</h3>
              <p className="text-lg text-gray-600 mb-6">まるでRPGのような学習体験</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-sm font-bold">全10ステージの冒険</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">⭐</div>
                  <p className="text-sm font-bold">クリアごとに新しいスキルを獲得</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">📈</div>
                  <p className="text-sm font-bold">レベルアップを実感できる進行システム</p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">特徴2：エージェントプログラミング</h3>
              <p className="text-lg text-gray-600 mb-6">キャラクターを動かして問題解決</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">🤖</div>
                  <p className="text-sm font-bold">エージェントに指示を出して課題クリア</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">🔄</div>
                  <p className="text-sm font-bold">試行錯誤しながら最適解を発見</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">💡</div>
                  <p className="text-sm font-bold">プログラミング的思考が自然に身につく</p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">特徴3：継続的な学習サポート</h3>
              <p className="text-lg text-gray-600 mb-6">仲間と一緒に成長できる環境</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">👥</div>
                  <p className="text-sm font-bold">月1回の合同ミーティングで作品共有</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">🌟</div>
                  <p className="text-sm font-bold">他の受講生の解法から新しい発見</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm font-bold">モチベーションを維持する仕組み</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            10ステージの冒険内容
          </h2>
          
          <div className="mb-12">
            <img 
              src="https://readdy.ai/api/search-image?query=Game%20style%20adventure%20map%20showing%2010%20stages%20progression%20from%20beginner%20to%20master%20level%2C%20colorful%20RPG%20fantasy%20theme%2C%20pathway%20with%20numbered%20milestones%2C%20bright%20engaging%20colors%2C%20top-down%20view%20with%20different%20themed%20areas&width=1000&height=600&seq=stages3&orientation=landscape"
              alt="10ステージ冒険マップ"
              className="rounded-2xl shadow-lg mx-auto max-w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            {/* Stage Groups */}
            {[
              { 
                emoji: "🌱", 
                level: "初級ステージ（1-2）", 
                title: "エージェント操作の基礎",
                details: ["move、turn、place などの基本コマンド", "簡単な採掘・建築ミッション"],
                color: "bg-green-100 border-green-300"
              },
              { 
                emoji: "🌿", 
                level: "基礎ステージ（3-4）", 
                title: "繰り返し処理の習得",
                details: ["forループで効率的な作業", "パターンを見つけて自動化"],
                color: "bg-blue-100 border-blue-300"
              },
              { 
                emoji: "🌳", 
                level: "中級ステージ（5-6）", 
                title: "条件分岐の活用",
                details: ["if文で状況判断", "障害物回避、アイテム収集"],
                color: "bg-yellow-100 border-yellow-300"
              },
              { 
                emoji: "⚡", 
                level: "上級ステージ（7-8）", 
                title: "複雑な課題への挑戦",
                details: ["迷路脱出プログラム", "パズル解決アルゴリズム"],
                color: "bg-orange-100 border-orange-300"
              },
              { 
                emoji: "🏅", 
                level: "マスターステージ（9-10）", 
                title: "オリジナルミッション作成",
                details: ["自分だけの課題を設計", "作品発表会で成果を共有"],
                color: "bg-purple-100 border-purple-300"
              }
            ].map((stage, index) => (
              <div key={index} className={`p-6 rounded-2xl border-2 ${stage.color}`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{stage.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{stage.level}</h3>
                    <p className="text-lg text-gray-700 mb-3">{stage.title}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {stage.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            受講生の成果紹介
          </h2>
          
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">
            みんなのクリア動画ギャラリー
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
            <h4 className="text-xl font-bold text-gray-800 mb-4">成長グラフ</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📊</div>
                <p className="font-bold text-gray-800">プログラミングスキルの向上</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🧩</div>
                <p className="font-bold text-gray-800">問題解決能力の成長</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🌟</div>
                <p className="font-bold text-gray-800">創造力の開花</p>
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
                <p className="text-lg text-blue-600 font-semibold mb-6">
                  東京情報大学 総合情報学部 教授
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            お子様の「ゲームが好き」を<br />
            将来につながる本物の力に変える
          </h2>
          
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
              logo
            </div>
            <p className="text-gray-400 mb-6">
              マインクラフト学習プログラム - 未来を創る力を育てる
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
            <p>&copy; 2024 マインクラフト学習プログラム. All rights reserved.</p>
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
