import Link from 'next/link';
import { ArrowLeft, Award, AlertTriangle, TrendingUp, Heart, Calendar, Target } from 'lucide-react';

export default function Age12to18Page() {
  const growthChallenges = [
    {
      title: '急激な身体成長',
      description: '身長・体重の急増に筋力が追いつかない',
      impact: '怪我のリスク増加',
      icon: TrendingUp,
    },
    {
      title: 'ホルモンバランス',
      description: '成長ホルモンの影響で骨端線が弱い',
      impact: '成長痛や疲労骨折',
      icon: Heart,
    },
    {
      title: '競技特化',
      description: '部活動での同一動作の反復',
      impact: 'オーバーユースによる障害',
      icon: Target,
    },
  ];

  const commonInjuries = [
    {
      name: '前十字靭帯損傷',
      risk: '高',
      sports: 'バスケ、サッカー、バレー',
      prevention: 'ジャンプ・着地動作の改善',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      name: '野球肘・野球肩',
      risk: '中',
      sports: '野球、テニス、バドミントン',
      prevention: '投球数制限、フォーム指導',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      name: '腰椎分離症',
      risk: '中',
      sports: '陸上、体操、サッカー',
      prevention: '体幹トレーニング',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'シンスプリント',
      risk: '高',
      sports: '陸上、バスケ、サッカー',
      prevention: '適切な休養とストレッチ',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const trainingPrinciples = [
    {
      principle: '段階的負荷',
      description: '急激な練習量増加を避け、徐々に強度を上げる',
    },
    {
      principle: 'クロストレーニング',
      description: '異なる運動を組み合わせて偏りを防ぐ',
    },
    {
      principle: '栄養管理',
      description: '成長期に必要な栄養素をバランスよく摂取',
    },
    {
      principle: '十分な睡眠',
      description: '成長ホルモン分泌のため8時間以上の睡眠',
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mr-4">
              <Award className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">12-18歳</h1>
              <p className="text-xl text-gray-600 mt-2">部活動期 - 本格的なスポーツと成長期の両立</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            第二次成長期と部活動が重なるこの時期は、身体が大きく変化する中で
            高強度のトレーニングを行うため、特に怪我のリスクが高まります。
            適切な管理とケアで、健全な成長とスポーツパフォーマンスの向上を両立させましょう。
          </p>
        </div>
      </section>

      {/* Growth Challenges */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="gradient-text">この時期特有の課題</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {growthChallenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-3">{challenge.description}</p>
                <div className="bg-purple-50 rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-purple-700">影響: </span>
                  <span className="text-sm text-purple-600">{challenge.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Common Sports Injuries */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertTriangle className="inline-block h-8 w-8 text-red-500 mr-3" />
          <span className="gradient-text">頻発するスポーツ障害</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {commonInjuries.map((injury, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${injury.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl">{injury.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    injury.risk === '高' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    リスク: {injury.risk}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-gray-700">多い競技:</span>
                    <span className="text-gray-600 ml-2">{injury.sports}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">予防法:</span>
                    <span className="text-gray-600 ml-2">{injury.prevention}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Management */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <Calendar className="inline-block h-8 w-8 text-green-600 mr-3" />
              <span className="gradient-text">トレーニング管理</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              成長期の身体に配慮したトレーニング計画が、
              将来のスポーツキャリアを左右します。
            </p>
            <div className="space-y-4">
              {trainingPrinciples.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">{item.principle}</h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">週間トレーニング例</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">月・水・金</span>
                  <span className="text-sm text-gray-600">競技練習（2-3時間）</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">火・木</span>
                  <span className="text-sm text-gray-600">補強トレーニング（1時間）</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">土</span>
                  <span className="text-sm text-gray-600">試合または実戦練習</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-green-600">日</span>
                  <span className="text-sm text-green-600">完全休養</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                ※個人差があるため、専門家と相談して調整してください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition and Recovery */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">
            <Heart className="inline-block h-8 w-8 text-pink-500 mr-3" />
            栄養と回復
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-purple-700">栄養摂取</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• タンパク質: 体重×1.5-2g/日</li>
                <li>• カルシウム: 800-1000mg/日</li>
                <li>• 鉄分: 男子12mg、女子15mg/日</li>
                <li>• ビタミンD: 適度な日光浴</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-pink-700">睡眠</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 最低8時間の睡眠確保</li>
                <li>• 22-2時のゴールデンタイム</li>
                <li>• 就寝前のスマホ制限</li>
                <li>• 規則正しい生活リズム</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-purple-700">ケア方法</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• アイシング（練習後15分）</li>
                <li>• ストレッチ（毎日20分）</li>
                <li>• マッサージ・入浴</li>
                <li>• 定期的な健康チェック</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Care */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">メンタルケアの重要性</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-blue-700">プレッシャーとの向き合い方</h3>
              <p className="text-gray-700 mb-4">
                部活動での競争、進路選択、成績への期待など、
                多くのプレッシャーがかかる時期です。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 完璧を求めすぎない</li>
                <li>• 失敗を成長の機会と捉える</li>
                <li>• チームメイトとの対話を大切に</li>
                <li>• 必要に応じて大人に相談</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-cyan-700">バーンアウト予防</h3>
              <p className="text-gray-700 mb-4">
                燃え尽き症候群を防ぐため、
                適度な息抜きと目標設定が重要です。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• スポーツ以外の趣味を持つ</li>
                <li>• 短期・長期の目標を設定</li>
                <li>• 定期的なオフシーズン</li>
                <li>• 家族との時間を大切に</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            部活動での怪我予防と、健全な成長をサポートする情報をもっと見る
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sports" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              競技別の対策を見る
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