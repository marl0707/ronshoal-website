import Link from 'next/link';
import { ArrowLeft, Activity, AlertTriangle, Shield, Target, Zap } from 'lucide-react';

export default function RugbyPage() {
  const rugbyInjuries = [
    {
      name: '足関節捻挫',
      percentage: '40%',
      part: '足首',
      cause: 'タックル、ラック時の不自然な着地',
      severity: '軽〜重',
    },
    {
      name: '膝靭帯損傷',
      percentage: '25%',
      part: '膝',
      cause: 'コンタクト時の外力',
      severity: '重',
    },
    {
      name: '筋肉損傷',
      percentage: '20%',
      part: 'ふくらはぎ・太もも',
      cause: '急激なダッシュ、方向転換',
      severity: '中',
    },
    {
      name: '打撲・挫傷',
      percentage: '15%',
      part: '足全体',
      cause: 'コンタクトプレー',
      severity: '軽〜中',
    },
  ];

  const positionRequirements = [
    {
      position: 'フォワード',
      characteristics: ['パワー重視', 'スクラムの安定性'],
      footwork: ['強い踏み込み', '低い姿勢の維持', 'プッシュ力'],
      shoeType: '8スタッド（安定性重視）',
      color: 'from-red-500 to-pink-500',
    },
    {
      position: 'バックス',
      characteristics: ['スピード重視', '敏捷性'],
      footwork: ['ステップワーク', '急加速・減速', 'サイドステップ'],
      shoeType: '6スタッド（軽量性重視）',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      position: 'スクラムハーフ',
      characteristics: ['機動力', 'バランス'],
      footwork: ['素早い方向転換', 'パスモーション', '低い姿勢からの加速'],
      shoeType: 'ハイブリッド型',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const preventionProgram = [
    {
      category: 'ウォームアップ',
      exercises: [
        'ダイナミックストレッチ（20分）',
        'コンタクト準備運動',
        'アジリティドリル',
        'スクラム姿勢の練習',
      ],
      focus: '怪我予防と動作準備',
    },
    {
      category: 'ストレングス',
      exercises: [
        'スクワット（下半身強化）',
        'デッドリフト（体幹・下肢）',
        'カーフレイズ（ふくらはぎ）',
        'プライオメトリクス',
      ],
      focus: 'パワーと安定性向上',
    },
    {
      category: 'バランス',
      exercises: [
        '片足立ち（目を閉じて）',
        'ボスボール訓練',
        '不安定面でのスクワット',
        'コンタクト姿勢の保持',
      ],
      focus: '関節の安定性向上',
    },
    {
      category: 'リカバリー',
      exercises: [
        'アイスバス',
        'ストレッチング',
        'フォームローラー',
        'マッサージ',
      ],
      focus: '疲労回復と柔軟性維持',
    },
  ];

  const safetyTips = [
    {
      tip: '正しいタックル技術',
      description: '頭を上げ、肩から入る',
      importance: '脊椎・頭部保護',
      icon: '🛡️',
    },
    {
      tip: '適切な装具の使用',
      description: 'マウスガード、ヘッドギア',
      importance: '外傷予防',
      icon: '🦺',
    },
    {
      tip: '段階的な復帰',
      description: '怪我後は徐々に負荷増加',
      importance: '再発予防',
      icon: '📈',
    },
    {
      tip: 'ルールの理解',
      description: '危険なプレーを避ける',
      importance: '安全なプレー',
      icon: '📖',
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center text-white mr-4 text-4xl">
              🏉
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">ラグビー</h1>
              <p className="text-xl text-gray-600 mt-2">激しいコンタクトスポーツでの足の保護</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            ラグビーは激しいコンタクトと瞬発的な動きが特徴のスポーツです。
            足首や膝の保護、そして強靭な下半身の構築が怪我予防の鍵となります。
          </p>
        </div>
      </section>

      {/* Common Injuries */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertTriangle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">ラグビーで多い足の怪我</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {rugbyInjuries.map((injury, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{injury.name}</h3>
                <span className="text-2xl font-bold text-green-600">{injury.percentage}</span>
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
                    injury.severity === '中' ? 'text-orange-600' : 
                    injury.severity === '軽〜中' ? 'text-yellow-600' : 'text-green-600'
                  }`}>{injury.severity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Position Requirements */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Activity className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">ポジション別の要求</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {positionRequirements.map((position, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${position.color} text-white font-bold mb-4`}>
                {position.position}
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">特徴:</p>
                  <div className="flex flex-wrap gap-2">
                    {position.characteristics.map((char, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">フットワーク:</p>
                  <ul className="space-y-1">
                    {position.footwork.map((work, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <Zap className="h-3 w-3 text-green-500 mr-2" />
                        {work}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-700">
                    推奨: {position.shoeType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention Program */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Shield className="inline-block h-8 w-8 text-green-600 mr-3" />
          <span className="gradient-text">怪我予防プログラム</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {preventionProgram.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">{program.category}</h3>
              <p className="text-sm text-gray-600 mb-4">{program.focus}</p>
              <ul className="space-y-2">
                {program.exercises.map((exercise, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {exercise}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Rugby-Specific Movements */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">ラグビー特有の動作と足の使い方</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-emerald-700">スクラム</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 足を肩幅より広く</li>
                <li>• つま先は外向き</li>
                <li>• 重心を低く保つ</li>
                <li>• 足首の固定</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">ラック・モール</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 低い姿勢の維持</li>
                <li>• 強い踏み込み</li>
                <li>• バランスの保持</li>
                <li>• 素早い足の入れ替え</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-emerald-700">ランニング</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 加速時の前傾</li>
                <li>• ステップの切り替え</li>
                <li>• サイドステップ</li>
                <li>• 急停止の技術</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">安全にプレーするために</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition card-hover">
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="font-bold mb-2">{tip.tip}</h3>
              <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
              <div className="bg-purple-50 rounded-lg px-3 py-2">
                <p className="text-xs font-medium text-purple-700">{tip.importance}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe Selection Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">ラグビーブーツの選び方</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">スタッドの種類</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">●</span>
                  <div>
                    <span className="font-medium">アルミスタッド:</span> ソフトグラウンド用、グリップ力重視
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">●</span>
                  <div>
                    <span className="font-medium">ラバースタッド:</span> ハードグラウンド用、安定性重視
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">●</span>
                  <div>
                    <span className="font-medium">ブレードスタッド:</span> 人工芝用、方向転換重視
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">フィッティングのポイント</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  足首のサポート性を確認
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  つま先に5-10mmの余裕
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  かかとがしっかりホールド
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  厚手のソックスで試着
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            ラグビーを安全に楽しむための詳しい情報をもっと見る
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