import Link from 'next/link';
import { ArrowLeft, Activity, AlertTriangle, Shield, Target, Zap } from 'lucide-react';

export default function BaseballPage() {
  const baseballInjuries = [
    {
      name: '野球肩',
      percentage: '30%',
      part: '肩',
      cause: '投球動作の繰り返し',
      severity: '中〜重',
    },
    {
      name: '野球肘',
      percentage: '35%',
      part: '肘',
      cause: '不適切な投球フォーム',
      severity: '中〜重',
    },
    {
      name: '腰痛',
      percentage: '20%',
      part: '腰',
      cause: 'バッティング・投球時の捻転',
      severity: '中',
    },
    {
      name: '足関節捻挫',
      percentage: '15%',
      part: '足首',
      cause: 'ベースランニング時',
      severity: '軽〜中',
    },
  ];

  const positionSpecific = [
    {
      position: '投手',
      risks: ['肩・肘の障害', '下肢の疲労'],
      footCare: ['マウンドでの踏み込み足の保護', '軸足の安定性強化'],
      color: 'from-red-500 to-pink-500',
    },
    {
      position: '捕手',
      risks: ['膝の負担', '腰痛'],
      footCare: ['しゃがみ姿勢での足首柔軟性', 'ブロッキング時の保護'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      position: '内野手',
      risks: ['急激な方向転換', '足首捻挫'],
      footCare: ['サイドステップの練習', 'グラブ側への重心移動'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      position: '外野手',
      risks: ['長距離走での疲労', '膝への衝撃'],
      footCare: ['芝生での安定した走行', '後方への走り方'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const preventionExercises = [
    {
      exercise: '股関節の柔軟性',
      purpose: '投球・打撃動作の改善',
      duration: '10分×毎日',
      details: ['股関節回し', '開脚ストレッチ', '腸腰筋ストレッチ'],
    },
    {
      exercise: '体幹トレーニング',
      purpose: '回転動作の安定',
      duration: '15分×週4回',
      details: ['プランク', 'サイドプランク', 'ロシアンツイスト'],
    },
    {
      exercise: 'バランス訓練',
      purpose: '片足での安定性',
      duration: '10分×週3回',
      details: ['片足立ち', 'バランスボード', 'ジャンプ着地'],
    },
    {
      exercise: '下肢筋力強化',
      purpose: '走塁・守備力向上',
      duration: '20分×週3回',
      details: ['スクワット', 'ランジ', 'カーフレイズ'],
    },
  ];

  const shoeSelection = [
    {
      type: 'スパイク',
      features: ['金具or樹脂製', 'かかとのホールド', '土踏まずサポート'],
      recommendation: 'ポジションに応じた選択',
      icon: '⚾',
    },
    {
      type: 'トレーニングシューズ',
      features: ['クッション性', '通気性', '軽量性'],
      recommendation: '練習用として使い分け',
      icon: '👟',
    },
    {
      type: 'ランニングシューズ',
      features: ['衝撃吸収', '安定性', '耐久性'],
      recommendation: 'ベースランニング練習用',
      icon: '🏃',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link href="/sports" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          スポーツ別対策に戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mr-4 text-4xl">
              ⚾
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">野球</h1>
              <p className="text-xl text-gray-600 mt-2">投球動作と走塁に必要な足のケア</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            野球は投球、打撃、走塁、守備と多様な動きが求められるスポーツです。
            特に下半身の安定性と柔軟性が、パフォーマンスと怪我予防の鍵となります。
          </p>
        </div>
      </section>

      {/* Position Specific Care */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Activity className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">ポジション別の足ケア</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {positionSpecific.map((position, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${position.color} text-white font-bold mb-4`}>
                {position.position}
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">主なリスク:</p>
                  <div className="flex flex-wrap gap-2">
                    {position.risks.map((risk, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                        {risk}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">足のケアポイント:</p>
                  <ul className="space-y-1">
                    {position.footCare.map((care, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <Zap className="h-3 w-3 text-green-500 mr-2" />
                        {care}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Injuries */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertTriangle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">野球で多い怪我</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {baseballInjuries.map((injury, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{injury.name}</h3>
                <span className="text-2xl font-bold text-red-500">{injury.percentage}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">部位:</span>
                  <span className="font-medium">{injury.part}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">原因:</span>
                  <span className="font-medium">{injury.cause}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">重症度:</span>
                  <span className={`font-medium ${
                    injury.severity === '中〜重' ? 'text-red-600' : 
                    injury.severity === '中' ? 'text-orange-600' : 'text-yellow-600'
                  }`}>{injury.severity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention Exercises */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Shield className="inline-block h-8 w-8 text-green-600 mr-3" />
          <span className="gradient-text">怪我予防エクササイズ</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {preventionExercises.map((exercise, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">{exercise.exercise}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">目的:</span>
                  <span className="font-medium text-green-700">{exercise.purpose}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">頻度:</span>
                  <span className="font-medium">{exercise.duration}</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm font-medium mb-2">内容:</p>
                <ul className="space-y-1">
                  {exercise.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-700">• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe Selection */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">野球用シューズの選び方</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {shoeSelection.map((shoe, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition card-hover">
              <div className="text-5xl mb-4">{shoe.icon}</div>
              <h3 className="font-bold text-lg mb-3">{shoe.type}</h3>
              <ul className="space-y-1 mb-4">
                {shoe.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700">• {feature}</li>
                ))}
              </ul>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm font-medium text-purple-700">{shoe.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">野球特有の足の使い方</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-red-700">投球動作</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  軸足での安定した立ち方
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  踏み込み足の正しい着地
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  体重移動とバランス
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">●</span>
                  フォロースルー時の足の使い方
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-orange-700">走塁技術</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">●</span>
                  スタートダッシュの足の使い方
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">●</span>
                  ベース回りでの減速と方向転換
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">●</span>
                  スライディングの正しい方法
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">●</span>
                  帰塁時の足首の保護
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Schedule */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">練習スケジュールと足のケア</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">練習前</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 足首の回旋運動</li>
                <li>• アキレス腱ストレッチ</li>
                <li>• 股関節の動的ストレッチ</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">練習中</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 適切な水分補給</li>
                <li>• 疲労時の無理な継続を避ける</li>
                <li>• 痛みがある場合は中止</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">練習後</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• アイシング（必要時）</li>
                <li>• 静的ストレッチ</li>
                <li>• マッサージでリカバリー</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            野球を安全に楽しむための詳しい情報をもっと見る
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/practice/exercise" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              トレーニングプログラムを見る
            </Link>
            <Link href="/symptoms" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              症状をチェックする
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}