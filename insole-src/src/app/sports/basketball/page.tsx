import Link from 'next/link';
import { ArrowLeft, Activity, AlertTriangle, Shield, Target, Zap } from 'lucide-react';

export default function BasketballPage() {
  const basketballInjuries = [
    {
      name: '前十字靭帯損傷',
      percentage: '25%',
      part: '膝',
      cause: 'ジャンプ着地、急激な方向転換',
      severity: '重',
    },
    {
      name: '足関節捻挫',
      percentage: '40%',
      part: '足首',
      cause: '着地時の足首のひねり',
      severity: '軽〜中',
    },
    {
      name: 'ジャンパー膝',
      percentage: '20%',
      part: '膝',
      cause: '繰り返しのジャンプ動作',
      severity: '中',
    },
    {
      name: 'アキレス腱炎',
      percentage: '15%',
      part: 'アキレス腱',
      cause: '急激なダッシュ、ストップ',
      severity: '中',
    },
  ];

  const preventionProgram = [
    {
      phase: 'ウォーミングアップ',
      duration: '20分',
      contents: [
        'ダイナミックストレッチ',
        'ラダートレーニング',
        'ジャンプ動作の練習',
        'バランストレーニング',
      ],
    },
    {
      phase: 'クールダウン',
      duration: '15分',
      contents: [
        '静的ストレッチ',
        'フォームローラー',
        'アイシング',
        'リカバリー体操',
      ],
    },
  ];

  const shoeFeatures = [
    {
      feature: 'ハイカット',
      benefit: '足首のサポート強化',
      recommendation: '捻挫経験者に推奨',
      icon: '🦵',
    },
    {
      feature: 'クッション性',
      benefit: '着地時の衝撃吸収',
      recommendation: '膝への負担軽減',
      icon: '🛡️',
    },
    {
      feature: 'グリップ力',
      benefit: '急激な動きに対応',
      recommendation: '体育館床での使用',
      icon: '👟',
    },
    {
      feature: '通気性',
      benefit: '長時間プレーでも快適',
      recommendation: '汗による滑り防止',
      icon: '💨',
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
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mr-4 text-4xl">
              🏀
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">バスケットボール</h1>
              <p className="text-xl text-gray-600 mt-2">ジャンプとダッシュが多い競技の足のケア</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            バスケットボールは、ジャンプ、急激な方向転換、ダッシュ＆ストップなど、
            足への負担が大きい動作が連続する競技です。特に膝と足首の怪我予防が重要です。
          </p>
        </div>
      </section>

      {/* Common Injuries */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertTriangle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">バスケで多い足の怪我</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {basketballInjuries.map((injury, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{injury.name}</h3>
                <span className="text-2xl font-bold text-orange-500">{injury.percentage}</span>
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
                    injury.severity === '重' ? 'text-red-600' : 
                    injury.severity === '中' ? 'text-orange-600' : 'text-yellow-600'
                  }`}>{injury.severity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Movement Characteristics */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <Activity className="inline-block h-8 w-8 text-purple-600 mr-3" />
              <span className="gradient-text">バスケ特有の動き</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">ジャンプ＆着地</h3>
                <p className="text-sm text-gray-700">
                  リバウンドやシュート時の繰り返しジャンプが膝に大きな負担
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">カッティング動作</h3>
                <p className="text-sm text-gray-700">
                  ディフェンスを抜く際の急激な方向転換で足首・膝を痛めやすい
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">ストップ＆ゴー</h3>
                <p className="text-sm text-gray-700">
                  急激な加速と減速の繰り返しがアキレス腱に負担
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">横移動（シャッフル）</h3>
                <p className="text-sm text-gray-700">
                  ディフェンス時の横移動で足首の内反・外反のリスク
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-700">負荷がかかる部位</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">膝関節</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">足首</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">アキレス腱</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">足底</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Program */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Shield className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">怪我予防プログラム</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {preventionProgram.map((phase, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl">{phase.phase}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {phase.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {phase.contents.map((content, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 text-blue-500 mr-3" />
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-orange-50 border-l-4 border-orange-400 p-6 rounded">
          <h3 className="font-semibold text-orange-700 mb-2">ジャンプ着地の練習</h3>
          <p className="text-gray-700">
            両足での安定した着地、膝を軽く曲げての衝撃吸収など、
            正しい着地フォームの練習は怪我予防に効果的です。
          </p>
        </div>
      </section>

      {/* Shoe Selection Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">バスケットシューズの選び方</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shoeFeatures.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center card-hover">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.feature}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.benefit}</p>
              <div className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full inline-block">
                {item.recommendation}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">トレーニングのポイント</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-orange-700">筋力強化</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• スクワットジャンプ</li>
                <li>• カーフレイズ</li>
                <li>• プランク</li>
                <li>• 片足立ちバランス</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">柔軟性向上</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• アキレス腱ストレッチ</li>
                <li>• ハムストリングストレッチ</li>
                <li>• 股関節の可動域訓練</li>
                <li>• 足首の回旋運動</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-orange-700">アジリティ</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ラダートレーニング</li>
                <li>• コーンドリル</li>
                <li>• ジャンプロープ</li>
                <li>• サイドステップ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            バスケットボールを安全に楽しむための詳しい情報をもっと見る
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