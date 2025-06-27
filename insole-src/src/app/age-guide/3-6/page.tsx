import Link from 'next/link';
import { ArrowLeft, Users, Activity, AlertTriangle, Target, Heart } from 'lucide-react';

export default function Age3to6Page() {
  const developmentStages = [
    {
      title: '基本的な運動能力',
      items: ['片足立ち', 'スキップ', 'ボール投げ', '階段の昇降'],
      icon: Activity,
    },
    {
      title: '社会性の発達',
      items: ['集団遊び', '順番待ち', 'ルールの理解', '協調性'],
      icon: Users,
    },
    {
      title: '身体の成長',
      items: ['年間5-7cmの成長', '足のアーチ形成', '筋力向上', 'バランス感覚'],
      icon: Heart,
    },
  ];

  const sportRecommendations = [
    {
      sport: '水泳',
      benefits: '全身運動で足への負担が少ない',
      startAge: '3歳〜',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      sport: '体操',
      benefits: 'バランス感覚と柔軟性の向上',
      startAge: '4歳〜',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      sport: 'ダンス',
      benefits: 'リズム感と身体表現力',
      startAge: '3歳〜',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      sport: 'サッカー',
      benefits: '走力と協調性の発達',
      startAge: '5歳〜',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];

  const footCarePoints = [
    {
      title: '靴のサイズチェック',
      frequency: '3-4ヶ月ごと',
      description: '成長期のため頻繁なサイズ確認が必要',
    },
    {
      title: '運動後のケア',
      frequency: '毎回',
      description: '汗をかいた後は清潔に保つ',
    },
    {
      title: '爪のケア',
      frequency: '週1回',
      description: '運動量が増えるため定期的なチェック',
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mr-4">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">3-6歳</h1>
              <p className="text-xl text-gray-600 mt-2">プレゴールデンエイジ - 運動の基礎づくり</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            神経系の発達が著しいこの時期は、様々な動きを経験することが重要です。
            足の基本的な機能が確立され、活発な運動が可能になる大切な時期です。
          </p>
        </div>
      </section>

      {/* Development Areas */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="gradient-text">この時期の発達ポイント</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {developmentStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-4">{stage.title}</h3>
                <ul className="space-y-2">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sports Recommendations */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Target className="inline-block h-8 w-8 text-purple-600 mr-3" />
          <span className="gradient-text">おすすめのスポーツ活動</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportRecommendations.map((sport, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.gradient} opacity-10`}></div>
              <div className="relative bg-white/90 p-6 h-full">
                <h3 className="font-bold text-xl mb-2">{sport.sport}</h3>
                <p className="text-gray-600 text-sm mb-3">{sport.benefits}</p>
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${sport.gradient} text-white`}>
                  {sport.startAge}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-purple-50 rounded-2xl">
          <p className="text-gray-700">
            <span className="font-semibold text-purple-700">ポイント：</span>
            この時期は特定のスポーツに特化するのではなく、様々な運動を経験させることが大切です。
            楽しみながら基礎的な運動能力を育てましょう。
          </p>
        </div>
      </section>

      {/* Shoe Selection Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">活動に応じた靴選び</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">日常・通園用</h4>
                  <p className="text-sm text-gray-700">軽量で着脱しやすく、通気性の良いもの</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">運動・外遊び用</h4>
                  <p className="text-sm text-gray-700">クッション性があり、足首をサポートするもの</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">室内運動用</h4>
                  <p className="text-sm text-gray-700">滑りにくく、足裏の感覚が伝わりやすいもの</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">
              靴選びのポイント
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              活動量が増えるこの時期は、用途に応じた靴選びが重要です。
              足の成長も早いため、定期的なサイズチェックを忘れずに。
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
              <p className="text-sm text-orange-700">
                <AlertTriangle className="inline-block h-4 w-4 mr-2" />
                <span className="font-semibold">注意：</span>
                大きすぎる靴は転倒の原因に。必ず適切なサイズを選びましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Care Routine */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Heart className="inline-block h-8 w-8 text-pink-500 mr-3" />
          <span className="gradient-text">足のケアルーティン</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {footCarePoints.map((point, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{point.title}</h3>
              <div className="text-purple-600 font-semibold mb-3">{point.frequency}</div>
              <p className="text-gray-700 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Warning Signs */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">
            <AlertTriangle className="inline-block h-8 w-8 text-red-500 mr-3" />
            注意すべき症状
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                歩き方に左右差がある
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                頻繁に転ぶ、つまずく
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                足の痛みを訴える
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                靴の減り方が極端に偏る
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                足の変形（内反・外反）
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                運動を嫌がる
              </li>
            </ul>
          </div>
          <p className="mt-6 text-sm bg-white/70 rounded-xl p-4">
            これらの症状が見られる場合は、早めに小児科や整形外科を受診しましょう。
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            お子様の健やかな成長をサポートする情報をもっと見る
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/practice/exercise" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              運動プログラムを見る
            </Link>
            <Link href="/practice/shoes" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              靴選びガイドを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}