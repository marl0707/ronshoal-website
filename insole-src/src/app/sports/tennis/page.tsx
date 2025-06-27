import Link from 'next/link';
import { ArrowLeft, Activity, AlertTriangle, Shield, Target, Zap } from 'lucide-react';

export default function TennisPage() {
  const tennisInjuries = [
    {
      name: 'テニスレッグ',
      percentage: '30%',
      part: 'ふくらはぎ',
      cause: '急激な前進、ストップ動作',
      severity: '中〜重',
    },
    {
      name: '足関節捻挫',
      percentage: '35%',
      part: '足首',
      cause: '横移動時の捻り',
      severity: '軽〜中',
    },
    {
      name: '足底筋膜炎',
      percentage: '20%',
      part: '足底',
      cause: 'ハードコートでの長時間プレー',
      severity: '中',
    },
    {
      name: 'アキレス腱炎',
      percentage: '15%',
      part: 'アキレス腱',
      cause: 'サーブ時の蹴り出し',
      severity: '中',
    },
  ];

  const courtTypes = [
    {
      type: 'ハードコート',
      impact: '高',
      characteristics: '衝撃が強く、足への負担大',
      care: 'クッション性の高いシューズ必須',
      color: 'from-gray-500 to-gray-700',
    },
    {
      type: 'クレーコート',
      impact: '低',
      characteristics: 'スライドしやすく、関節に優しい',
      care: 'グリップ調整が重要',
      color: 'from-orange-500 to-red-500',
    },
    {
      type: 'グラスコート',
      impact: '中',
      characteristics: '滑りやすく、バランスが必要',
      care: '足首のサポート重視',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const movementPatterns = [
    {
      movement: 'スプリットステップ',
      description: '相手の打球に反応する基本動作',
      footCare: '着地時の衝撃に注意',
      icon: '⬆️',
    },
    {
      movement: 'サイドステップ',
      description: 'ベースライン沿いの横移動',
      footCare: '足首の内反捻挫リスク',
      icon: '↔️',
    },
    {
      movement: 'フォワードダッシュ',
      description: 'ネットへのアプローチ',
      footCare: 'ふくらはぎの肉離れ注意',
      icon: '⬅️',
    },
    {
      movement: 'バックペダル',
      description: 'ロブへの対応',
      footCare: 'アキレス腱への負担大',
      icon: '➡️',
    },
  ];

  const preventionExercises = [
    {
      exercise: 'アジリティラダー',
      purpose: 'フットワーク向上',
      duration: '10分',
      frequency: '週3回',
    },
    {
      exercise: 'カーフレイズ',
      purpose: 'ふくらはぎ強化',
      duration: '3セット×15回',
      frequency: '週4回',
    },
    {
      exercise: 'バランスボード',
      purpose: '足首の安定性向上',
      duration: '5分×両足',
      frequency: '毎日',
    },
    {
      exercise: 'プライオメトリクス',
      purpose: '瞬発力向上',
      duration: '20分',
      frequency: '週2回',
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl flex items-center justify-center text-white mr-4 text-4xl">
              🎾
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">テニス</h1>
              <p className="text-xl text-gray-600 mt-2">多方向への動きに対応する足のケア</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            テニスは前後左右への素早い動き、急激なストップ＆ゴーが特徴的なスポーツです。
            コートサーフェスによっても足への負担が変わるため、適切なケアが重要です。
          </p>
        </div>
      </section>

      {/* Court Types */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Activity className="inline-block h-8 w-8 text-green-600 mr-3" />
          <span className="gradient-text">コート別の特徴</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courtTypes.map((court, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${court.color} text-white font-bold mb-4`}>
                {court.type}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">衝撃度:</span>
                  <span className={`font-medium ${
                    court.impact === '高' ? 'text-red-600' :
                    court.impact === '中' ? 'text-orange-600' : 'text-green-600'
                  }`}>{court.impact}</span>
                </div>
                <p className="text-sm text-gray-700">{court.characteristics}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-700">{court.care}</p>
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
          <span className="gradient-text">テニスで多い足の怪我</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tennisInjuries.map((injury, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{injury.name}</h3>
                <span className="text-2xl font-bold text-green-500">{injury.percentage}</span>
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

      {/* Movement Patterns */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">テニス特有の動き</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movementPatterns.map((pattern, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-6 hover:shadow-md transition">
              <div className="text-4xl mb-4 text-center">{pattern.icon}</div>
              <h3 className="font-bold text-lg mb-2">{pattern.movement}</h3>
              <p className="text-sm text-gray-600 mb-3">{pattern.description}</p>
              <div className="bg-yellow-50 rounded-lg p-2">
                <p className="text-xs font-medium text-yellow-700">{pattern.footCare}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention Exercises */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Shield className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">怪我予防エクササイズ</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {preventionExercises.map((exercise, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <h3 className="font-bold text-xl mb-4">{exercise.exercise}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">目的:</span>
                  <span className="font-medium text-purple-600">{exercise.purpose}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">時間:</span>
                  <span className="font-medium">{exercise.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">頻度:</span>
                  <span className="font-medium text-green-600">{exercise.frequency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe Features */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-green-100 to-lime-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">テニスシューズの選び方</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-green-700">必須機能</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">横方向のサポート</span>
                    <p className="text-sm text-gray-600">サイドステップ時の安定性</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">つま先の補強</span>
                    <p className="text-sm text-gray-600">ドラッグによる摩耗対策</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium">適度なクッション</span>
                    <p className="text-sm text-gray-600">衝撃吸収と反発性のバランス</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-lime-700">コート別選択</h3>
              <ul className="space-y-3">
                <li className="bg-white/80 rounded-lg p-3">
                  <span className="font-medium">ハードコート用</span>
                  <p className="text-sm text-gray-600">耐久性とクッション性重視</p>
                </li>
                <li className="bg-white/80 rounded-lg p-3">
                  <span className="font-medium">クレーコート用</span>
                  <p className="text-sm text-gray-600">ヘリンボーンパターンのソール</p>
                </li>
                <li className="bg-white/80 rounded-lg p-3">
                  <span className="font-medium">オールコート用</span>
                  <p className="text-sm text-gray-600">バランス型で汎用性高い</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">練習時の注意点</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">練習前</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 十分なウォーミングアップ</li>
                <li>• 足首のテーピング（必要時）</li>
                <li>• シューズの状態確認</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">練習中</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 水分補給をこまめに</li>
                <li>• 疲労時は無理しない</li>
                <li>• 正しいフットワーク意識</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">練習後</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• クールダウンストレッチ</li>
                <li>• アイシング（炎症時）</li>
                <li>• 十分な休養</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            テニスを安全に楽しむための詳しい情報をもっと見る
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