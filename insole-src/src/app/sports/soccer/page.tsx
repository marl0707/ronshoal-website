import Link from 'next/link';
import { ArrowLeft, Activity, AlertTriangle, Shield, Target, Zap } from 'lucide-react';

export default function SoccerPage() {
  const soccerInjuries = [
    {
      name: '足関節捻挫',
      percentage: '35%',
      part: '足首',
      cause: '急な方向転換、着地ミス',
      severity: '軽〜中',
    },
    {
      name: '膝前十字靭帯損傷',
      percentage: '15%',
      part: '膝',
      cause: 'ジャンプ着地、急停止',
      severity: '重',
    },
    {
      name: 'ハムストリング肉離れ',
      percentage: '20%',
      part: '太もも裏',
      cause: 'スプリント、キック動作',
      severity: '中',
    },
    {
      name: 'シーバー病',
      percentage: '10%',
      part: 'かかと',
      cause: '成長期の過負荷',
      severity: '軽〜中',
    },
  ];

  const preventionProgram = [
    {
      phase: 'ウォーミングアップ',
      duration: '15-20分',
      contents: [
        '軽いジョギング',
        '動的ストレッチ',
        'ラダートレーニング',
        'ボールタッチ',
      ],
    },
    {
      phase: 'クールダウン',
      duration: '10-15分',
      contents: [
        '軽いジョギング',
        '静的ストレッチ',
        'アイシング（必要時）',
        'セルフマッサージ',
      ],
    },
  ];

  const shoeSelection = [
    {
      surface: '天然芝',
      type: 'FG（ファームグラウンド）',
      feature: '固定式スタッド、グリップ力重視',
      icon: '🌱',
    },
    {
      surface: '人工芝',
      type: 'AG（アーティフィシャルグラス）',
      feature: '短めのスタッド、摩擦を軽減',
      icon: '🟢',
    },
    {
      surface: '土・ハードコート',
      type: 'TF（ターフ）',
      feature: '細かいラバースタッド',
      icon: '🟫',
    },
    {
      surface: '体育館',
      type: 'IN（インドア）',
      feature: 'フラットソール、滑り止め',
      icon: '🏢',
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mr-4 text-4xl">
              ⚽
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">サッカー</h1>
              <p className="text-xl text-gray-600 mt-2">世界で最も人気のスポーツの足のケア</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            サッカーは急な方向転換、ジャンプ、キック動作など、足に大きな負担がかかるスポーツです。
            適切なケアと予防で、怪我のリスクを最小限に抑えながら、パフォーマンスを向上させましょう。
          </p>
        </div>
      </section>

      {/* Common Injuries */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertTriangle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">サッカーで多い足の怪我</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {soccerInjuries.map((injury, index) => (
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
              <span className="gradient-text">サッカー特有の動き</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">急激な方向転換</h3>
                <p className="text-sm text-gray-700">
                  ドリブルやディフェンス時の切り返し動作で膝・足首に負担
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">繰り返しのキック動作</h3>
                <p className="text-sm text-gray-700">
                  股関節から足首までの連動動作による疲労蓄積
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">接触プレー</h3>
                <p className="text-sm text-gray-700">
                  相手選手との競り合いによる予期せぬ外力
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
                <h3 className="font-semibold mb-2">長距離走行</h3>
                <p className="text-sm text-gray-700">
                  1試合で10km以上の走行による下肢への負担
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-700">負荷がかかる部位</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">足首</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">膝</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">太もも</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">ふくらはぎ</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '70%'}}></div>
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
        <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
          <h3 className="font-semibold text-green-700 mb-2">FIFA 11+プログラム</h3>
          <p className="text-gray-700">
            FIFAが推奨する怪我予防プログラム「11+」を取り入れることで、
            怪我のリスクを30-50%減少させることができます。
          </p>
        </div>
      </section>

      {/* Shoe Selection Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">プレー環境に応じた靴選び</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shoeSelection.map((shoe, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center card-hover">
              <div className="text-5xl mb-4">{shoe.icon}</div>
              <h3 className="font-bold text-lg mb-2">{shoe.surface}</h3>
              <div className="text-purple-600 font-medium mb-3">{shoe.type}</div>
              <p className="text-sm text-gray-600">{shoe.feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-purple-50 rounded-2xl">
          <p className="text-gray-700">
            <span className="font-semibold text-purple-700">重要：</span>
            プレー環境に合わない靴を使用すると、怪我のリスクが大幅に増加します。
            特に人工芝でFGスパイクを使用すると、膝や足首への負担が増大します。
          </p>
        </div>
      </section>

      {/* Training Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">トレーニングのポイント</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">筋力強化</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 体幹トレーニング</li>
                <li>• 片足スクワット</li>
                <li>• カーフレイズ</li>
                <li>• バランストレーニング</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-emerald-700">柔軟性向上</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ハムストリングストレッチ</li>
                <li>• 股関節の可動域訓練</li>
                <li>• アキレス腱ストレッチ</li>
                <li>• 足首の回旋運動</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">技術練習</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 正しいキックフォーム</li>
                <li>• 着地動作の練習</li>
                <li>• 方向転換の技術</li>
                <li>• ボールコントロール</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            サッカーを安全に楽しむための詳しい情報をもっと見る
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