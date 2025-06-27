import Link from 'next/link';
import { ArrowLeft, Trophy, Activity, AlertTriangle, TrendingUp, Shield, Target } from 'lucide-react';

export default function Age6to12Page() {
  const goldenAgeFeatures = [
    {
      title: '神経系の発達',
      percentage: '90%',
      description: '12歳までに成人の90%まで発達',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '運動学習能力',
      percentage: '最高',
      description: '新しい動きを最も習得しやすい時期',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '身体の成長',
      percentage: '急速',
      description: '年間5-6cmの成長が続く',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const sportsInjuries = [
    {
      name: 'シーバー病',
      part: 'かかと',
      symptoms: '運動後のかかとの痛み',
      sports: 'サッカー、陸上',
    },
    {
      name: 'オスグッド病',
      part: '膝',
      symptoms: '膝下の痛みと腫れ',
      sports: 'バスケ、バレー',
    },
    {
      name: '疲労骨折',
      part: '足部',
      symptoms: '慢性的な痛み',
      sports: '陸上、体操',
    },
  ];

  const preventionMethods = [
    {
      icon: Shield,
      title: 'ウォーミングアップ',
      points: [
        '運動前15分以上の準備運動',
        '動的ストレッチの実施',
        '段階的な強度上昇',
      ],
    },
    {
      icon: Activity,
      title: '適切な休養',
      points: [
        '週2日以上の休養日',
        '同じ動作の反復を避ける',
        '痛みがある時は無理しない',
      ],
    },
    {
      icon: Target,
      title: '正しいフォーム',
      points: [
        '基本動作の習得',
        '専門家の指導を受ける',
        '無理のない練習計画',
      ],
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link href="/age-guide" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          年齢別ガイドに戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mr-4">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">6-12歳</h1>
              <p className="text-xl text-gray-600 mt-2">ゴールデンエイジ - 運動能力の黄金期</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            運動神経が最も発達するこの時期は「ゴールデンエイジ」と呼ばれ、
            様々なスポーツの基礎技術を身につける絶好のタイミングです。
            同時に、成長期特有の怪我にも注意が必要な時期でもあります。
          </p>
        </div>
      </section>

      {/* Golden Age Features */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <TrendingUp className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">ゴールデンエイジの特徴</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {goldenAgeFeatures.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition card-hover">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-6 pt-8">
                <div className={`text-3xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-2`}>
                  {feature.percentage}
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sports Specialization */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">スポーツとの向き合い方</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3 text-purple-700">多様な運動経験</h3>
                <p className="text-gray-700">
                  特定のスポーツに偏らず、様々な動きを経験することで、
                  総合的な運動能力が向上します。
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-700">楽しさを重視</h3>
                <p className="text-gray-700">
                  勝敗よりも「楽しい」と感じることが、
                  長期的なスポーツ継続につながります。
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3 text-green-700">適切な負荷</h3>
                <p className="text-gray-700">
                  成長期の身体に過度な負担をかけず、
                  段階的にトレーニングを進めることが大切です。
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">推奨される活動</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">⚽</span>
                  <div>
                    <h4 className="font-semibold">球技スポーツ</h4>
                    <p className="text-sm text-gray-600">協調性と判断力を養う</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🏃</span>
                  <div>
                    <h4 className="font-semibold">陸上競技</h4>
                    <p className="text-sm text-gray-600">基礎体力の向上</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🤸</span>
                  <div>
                    <h4 className="font-semibold">体操・ダンス</h4>
                    <p className="text-sm text-gray-600">柔軟性とバランス感覚</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🏊</span>
                  <div>
                    <h4 className="font-semibold">水泳</h4>
                    <p className="text-sm text-gray-600">全身運動で怪我リスクが低い</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Injuries */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertTriangle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">注意すべきスポーツ障害</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sportsInjuries.map((injury, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3 text-orange-700">{injury.name}</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">部位：</span> {injury.part}
                </p>
                <p>
                  <span className="font-semibold">症状：</span> {injury.symptoms}
                </p>
                <p>
                  <span className="font-semibold">多い競技：</span> {injury.sports}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6 rounded">
          <p className="text-red-700">
            <AlertTriangle className="inline-block h-5 w-5 mr-2" />
            これらの症状が見られたら、早めに整形外科を受診し、適切な治療を受けましょう。
          </p>
        </div>
      </section>

      {/* Prevention Methods */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Shield className="inline-block h-8 w-8 text-green-600 mr-3" />
          <span className="gradient-text">怪我予防の3つのポイント</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {preventionMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-4">{method.title}</h3>
                <ul className="space-y-2">
                  {method.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Shoe Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">
            スポーツシューズの選び方
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-purple-700">選び方のポイント</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  競技特性に合った設計のものを選ぶ
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  成長を考慮し、3-6ヶ月でサイズを確認
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  クッション性と安定性のバランス
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  足首のサポート機能
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">メンテナンス</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  使用後は必ず乾燥させる
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  インソールは定期的に交換
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  靴底の減りを定期的にチェック
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  複数の靴をローテーション
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
            ゴールデンエイジを最大限に活かすための情報をもっと見る
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sports" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              スポーツ別対策を見る
            </Link>
            <Link href="/practice/exercise" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              運動プログラムを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}