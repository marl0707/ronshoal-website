import Link from 'next/link';
import { ArrowLeft, Sun, Cloud, Leaf, Snowflake, Droplets, Thermometer, Wind, AlertCircle, Eye, Ruler, CheckCircle } from 'lucide-react';

export default function SeasonalCarePage() {
  const seasons = [
    {
      season: '春',
      icon: '🌸',
      gradient: 'from-pink-400 to-pink-600',
      challenges: [
        {
          issue: '新学期の靴替え',
          description: '急激な活動量増加による足への負担',
          care: '徐々に活動量を増やし、足を慣らす',
        },
        {
          issue: '花粉症による運動不足',
          description: '室内で過ごす時間が増え、足の筋力低下',
          care: '室内でできる足の運動を継続',
        },
        {
          issue: '気温差による体調変化',
          description: '朝晩の冷えで血行不良',
          care: '足首の保温と軽いストレッチ',
        },
      ],
      tips: [
        '新しい靴は徐々に慣らす',
        '足のサイズを再確認',
        '運動再開は段階的に',
        '室内運動も活用',
      ],
    },
    {
      season: '夏',
      icon: '☀️',
      gradient: 'from-orange-400 to-red-500',
      challenges: [
        {
          issue: '汗による靴内環境悪化',
          description: '蒸れや臭い、水虫のリスク増加',
          care: '通気性の良い靴、こまめな靴の交換',
        },
        {
          issue: 'サンダルでの怪我',
          description: '足の保護不足による外傷リスク',
          care: '活動に適した履物の選択',
        },
        {
          issue: '熱中症による体調不良',
          description: '脱水による筋肉のけいれん',
          care: '水分補給と適度な休憩',
        },
      ],
      tips: [
        '靴を複数用意して交替',
        '速乾性の靴下を選ぶ',
        '足の清潔を保つ',
        'プールでの足のケア',
      ],
    },
    {
      season: '秋',
      icon: '🍂',
      gradient: 'from-orange-500 to-amber-600',
      challenges: [
        {
          issue: 'スポーツシーズンの疲労',
          description: '運動会や部活動での酷使',
          care: '適切な休養とケアの実施',
        },
        {
          issue: '気温低下による硬直',
          description: '筋肉や関節の柔軟性低下',
          care: '入念なウォーミングアップ',
        },
        {
          issue: '日照時間減少',
          description: '活動量低下による筋力低下',
          care: '意識的な運動習慣の維持',
        },
      ],
      tips: [
        '疲労回復を重視',
        '保温性のある靴下',
        'ストレッチを習慣化',
        '靴の状態をチェック',
      ],
    },
    {
      season: '冬',
      icon: '❄️',
      gradient: 'from-blue-400 to-indigo-600',
      challenges: [
        {
          issue: '冷えによる血行不良',
          description: 'しもやけや感覚鈍化のリスク',
          care: '足首の保温と血行促進マッサージ',
        },
        {
          issue: '路面凍結での転倒',
          description: '滑りやすい路面での怪我',
          care: '滑り止め付きの靴の使用',
        },
        {
          issue: '厚手の靴下での圧迫',
          description: '血行不良や靴のサイズ不適合',
          care: '適切な厚さの靴下選び',
        },
      ],
      tips: [
        '足湯で血行促進',
        '室内でも運動継続',
        '靴の防水対策',
        '乾燥対策も忘れずに',
      ],
    },
  ];

  const yearRoundCare = [
    {
      title: '定期的なサイズチェック',
      description: '3ヶ月ごとに足のサイズを確認',
      icon: Ruler,
      importance: '成長期は特に重要',
    },
    {
      title: '爪のケア',
      description: '月1回の正しい爪切り',
      icon: CheckCircle,
      importance: '巻き爪予防',
    },
    {
      title: '清潔の維持',
      description: '毎日の足洗いと乾燥',
      icon: Droplets,
      importance: '感染症予防',
    },
    {
      title: '観察の習慣',
      description: '足の変化を早期発見',
      icon: Eye,
      importance: '問題の早期対応',
    },
  ];

  const emergencyItems = [
    {
      season: '全季節共通',
      items: ['絆創膏', '消毒液', '包帯', '冷却材'],
    },
    {
      season: '夏季追加',
      items: ['虫刺され薬', '日焼け止め', '予備の靴下'],
    },
    {
      season: '冬季追加',
      items: ['保温用品', 'ハンドクリーム', 'カイロ'],
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link href="/practice" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          実践ガイドに戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
            <Thermometer className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">季節別足のケア</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            季節ごとに変わる環境や活動に合わせた
            足のケア方法をご紹介します。
          </p>
        </div>
      </section>

      {/* Seasonal Care */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">四季の足ケアガイド</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {seasons.map((season, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">{season.icon}</span>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${season.gradient} bg-clip-text text-transparent`}>
                  {season.season}のケア
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-700">主な課題と対策</h4>
                {season.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4">
                    <h5 className="font-semibold text-sm mb-1">{challenge.issue}</h5>
                    <p className="text-xs text-gray-600 mb-2">{challenge.description}</p>
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-xs font-medium text-green-700">
                        <CheckCircle className="inline h-3 w-3 mr-1" />
                        {challenge.care}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3">ケアのポイント</h4>
                <ul className="space-y-2">
                  {season.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${season.gradient} mr-3`}></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Year-round Care */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">年間を通じた基本ケア</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {yearRoundCare.map((care, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-md transition">
              <care.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-bold mb-2">{care.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{care.description}</p>
              <div className="bg-white rounded-lg px-3 py-2">
                <p className="text-xs font-medium text-purple-700">{care.importance}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">季節の活動と足への影響</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">春夏の活動</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold mb-2">運動会・体育祭</h4>
                  <p className="text-sm text-gray-700">急激な運動量増加に注意。段階的なトレーニングが重要。</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold mb-2">プール・海水浴</h4>
                  <p className="text-sm text-gray-700">素足での活動増加。怪我と感染症に注意。</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold mb-2">部活動本格化</h4>
                  <p className="text-sm text-gray-700">オーバーユース症候群のリスク。適切な休養を。</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-cyan-700">秋冬の活動</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold mb-2">マラソン大会</h4>
                  <p className="text-sm text-gray-700">長距離走による負担。シューズ選びと準備が大切。</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold mb-2">ウィンタースポーツ</h4>
                  <p className="text-sm text-gray-700">特殊な靴での活動。普段と違う筋肉を使用。</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold mb-2">受験期の運動不足</h4>
                  <p className="text-sm text-gray-700">座位時間増加。意識的な運動とストレッチを。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Kit */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertCircle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">季節別応急処置キット</span>
        </h2>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="space-y-6">
            {emergencyItems.map((kit, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <h3 className="font-bold text-lg mb-3">{kit.season}</h3>
                <div className="flex flex-wrap gap-3">
                  {kit.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Shoe Rotation */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">季節に応じた靴のローテーション</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <Sun className="h-12 w-12 mx-auto mb-3 text-orange-500" />
              <h3 className="font-bold mb-2">春</h3>
              <p className="text-sm text-gray-600">通気性重視の軽量シューズ</p>
            </div>
            <div className="text-center">
              <Droplets className="h-12 w-12 mx-auto mb-3 text-blue-500" />
              <h3 className="font-bold mb-2">梅雨</h3>
              <p className="text-sm text-gray-600">防水・速乾性のある靴</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <h3 className="font-bold mb-2">秋</h3>
              <p className="text-sm text-gray-600">保温性のあるスポーツシューズ</p>
            </div>
            <div className="text-center">
              <Snowflake className="h-12 w-12 mx-auto mb-3 text-blue-600" />
              <h3 className="font-bold mb-2">冬</h3>
              <p className="text-sm text-gray-600">防寒・滑り止め機能付き</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            季節に合わせた適切なケアで、一年中健康な足を保ちましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/practice/shoes" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              靴選びガイドを見る
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