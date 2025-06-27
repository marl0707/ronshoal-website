import Link from 'next/link';
import { ArrowLeft, Activity, AlertTriangle, Shield, Target, Zap } from 'lucide-react';

export default function TrackPage() {
  const trackInjuries = [
    {
      name: 'シンスプリント',
      percentage: '35%',
      part: 'すね',
      cause: '繰り返しの衝撃、オーバーユース',
      severity: '中',
    },
    {
      name: '疲労骨折',
      percentage: '20%',
      part: '中足骨',
      cause: '過度なトレーニング',
      severity: '重',
    },
    {
      name: 'アキレス腱炎',
      percentage: '25%',
      part: 'アキレス腱',
      cause: '急激な負荷増加',
      severity: '中',
    },
    {
      name: '足底筋膜炎',
      percentage: '20%',
      part: '足底',
      cause: '長距離走での繰り返し衝撃',
      severity: '中',
    },
  ];

  const eventCategories = [
    {
      category: '短距離',
      events: ['100m', '200m', '400m'],
      mainIssues: ['肉離れ', 'アキレス腱損傷'],
      shoeType: 'スパイク（硬め）',
      color: 'from-red-500 to-orange-500',
    },
    {
      category: '中距離',
      events: ['800m', '1500m'],
      mainIssues: ['シンスプリント', '疲労骨折'],
      shoeType: 'スパイク（中間）',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      category: '長距離',
      events: ['3000m', '5000m', 'マラソン'],
      mainIssues: ['足底筋膜炎', '疲労骨折'],
      shoeType: 'ランニングシューズ',
      color: 'from-green-500 to-teal-500',
    },
    {
      category: '跳躍',
      events: ['走高跳', '走幅跳', '三段跳'],
      mainIssues: ['膝関節損傷', '足関節捻挫'],
      shoeType: 'スパイク（軽量）',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const preventionMethods = [
    {
      method: 'ウォーミングアップ',
      duration: '30分以上',
      contents: [
        'ジョギング10分',
        'ダイナミックストレッチ',
        '種目別ドリル',
        '流し（ウィンドスプリント）',
      ],
    },
    {
      method: 'クールダウン',
      duration: '20分',
      contents: [
        'ジョギング5分',
        '静的ストレッチ',
        'セルフマッサージ',
        'アイシング（必要時）',
      ],
    },
  ];

  const trainingTips = [
    {
      title: '段階的な負荷増加',
      description: '週の走行距離は10%以内の増加に留める',
      icon: '📈',
    },
    {
      title: '休養日の設定',
      description: '週2日は完全休養または軽い運動のみ',
      icon: '🛌',
    },
    {
      title: '複数シューズの使用',
      description: '練習用と試合用を使い分ける',
      icon: '👟',
    },
    {
      title: '栄養と水分補給',
      description: '練習前後の適切な補給でリカバリー促進',
      icon: '🥤',
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mr-4 text-4xl">
              🏃
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">陸上競技</h1>
              <p className="text-xl text-gray-600 mt-2">種目別の特性に応じた足のケア</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            陸上競技は種目により足への負担が大きく異なります。短距離の爆発的な力、
            長距離の持続的な衝撃、跳躍の着地衝撃など、それぞれに適したケアが必要です。
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Activity className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">種目別の特徴</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {eventCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-bold mb-4`}>
                {category.category}
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-600">種目:</span>
                  <span className="ml-2 font-medium">{category.events.join('、')}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">多い怪我:</span>
                  <span className="ml-2 font-medium text-red-600">{category.mainIssues.join('、')}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">推奨シューズ:</span>
                  <span className="ml-2 font-medium text-blue-600">{category.shoeType}</span>
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
          <span className="gradient-text">陸上で多い足の怪我</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {trackInjuries.map((injury, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{injury.name}</h3>
                <span className="text-2xl font-bold text-blue-500">{injury.percentage}</span>
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

      {/* Prevention Program */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Shield className="inline-block h-8 w-8 text-green-600 mr-3" />
          <span className="gradient-text">怪我予防プログラム</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {preventionMethods.map((method, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl">{method.method}</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {method.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {method.contents.map((content, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 text-green-500 mr-3" />
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Running Form Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">正しいランニングフォーム</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-blue-700">着地</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 足の前〜中部で着地</li>
                <li>• 膝を軽く曲げて衝撃吸収</li>
                <li>• 体の真下で着地</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-cyan-700">姿勢</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 軽い前傾姿勢</li>
                <li>• 肩の力を抜く</li>
                <li>• 視線は前方へ</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-teal-700">腕振り</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 肘を90度に保つ</li>
                <li>• 前後にまっすぐ振る</li>
                <li>• リラックスして振る</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">トレーニングのポイント</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center card-hover">
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe Selection */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">シューズ選びのアドバイス</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-600">スパイクシューズ</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 種目に応じたピン配置を選択</li>
                <li>• フィット感を最優先に</li>
                <li>• 足首のサポート性を確認</li>
                <li>• 定期的なピン交換</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-green-600">トレーニングシューズ</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• クッション性と反発性のバランス</li>
                <li>• 足の形に合ったラストを選択</li>
                <li>• 500-800km程度で交換</li>
                <li>• 練習内容に応じて使い分け</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            陸上競技を安全に楽しむための詳しい情報をもっと見る
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