import Link from 'next/link';
import { ArrowLeft, Baby, Footprints, AlertCircle, CheckCircle, BookOpen } from 'lucide-react';

export default function Age0to3Page() {
  const milestones = [
    { month: '6-12ヶ月', event: 'つかまり立ち・伝い歩き', description: 'まだ靴は不要です' },
    { month: '12-15ヶ月', event: '独立歩行開始', description: 'ファーストシューズの検討時期' },
    { month: '18-24ヶ月', event: '安定した歩行', description: '外出用の靴が必要に' },
    { month: '24-36ヶ月', event: '走る・跳ぶ', description: '活発な動きに対応する靴選び' },
  ];

  const shoeSelectionPoints = [
    {
      icon: CheckCircle,
      title: '適切なサイズ',
      description: '足の実寸＋0.5〜1.0cmの余裕が理想的',
    },
    {
      icon: CheckCircle,
      title: '柔らかい素材',
      description: '足の動きを妨げない柔軟な素材を選択',
    },
    {
      icon: CheckCircle,
      title: '軽量設計',
      description: '重い靴は歩行の妨げになります',
    },
    {
      icon: CheckCircle,
      title: '通気性',
      description: '蒸れを防ぐメッシュ素材などが最適',
    },
  ];

  const commonProblems = [
    {
      problem: '内反足気味',
      symptoms: '足が内側に向いている',
      action: '小児科医に相談を',
    },
    {
      problem: '扁平足',
      symptoms: '土踏まずが見られない',
      action: '3歳までは正常な場合が多い',
    },
    {
      problem: '爪の巻き込み',
      symptoms: '爪が皮膚に食い込む',
      action: '爪の切り方を見直す',
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
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mr-4">
              <Baby className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">0-3歳</h1>
              <p className="text-xl text-gray-600 mt-2">ファーストシューズと歩き始めのケア</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            この時期は足の骨がまだ軟骨で形成されており、適切なケアが将来の足の健康を左右します。
            裸足での活動を基本とし、必要な時のみ適切な靴を選ぶことが大切です。
          </p>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="gradient-text">発達の目安</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition card-hover">
              <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.month}</div>
              <h3 className="font-semibold text-lg mb-2">{milestone.event}</h3>
              <p className="text-gray-600 text-sm">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First Shoes Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <Footprints className="inline-block h-8 w-8 text-purple-600 mr-3" />
              ファーストシューズの選び方
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              歩き始めて10歩程度安定して歩けるようになったら、ファーストシューズを検討しましょう。
              最初は室内で練習し、慣れてから外出時に使用します。
            </p>
            <div className="space-y-4">
              {shoeSelectionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start">
                    <Icon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-gray-600 text-sm">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative glass-effect rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4 text-purple-700">靴選びのポイント</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  つま先に5mm程度の余裕
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  かかとがしっかりホールドされる
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  足の甲で調整可能（マジックテープ等）
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  滑りにくいソール
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertCircle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">注意すべき症状</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {commonProblems.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{item.problem}</h3>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">症状：</span> {item.symptoms}
              </p>
              <p className="text-sm bg-white/70 rounded-lg p-3">
                <span className="font-medium text-orange-600">対応：</span> {item.action}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Care Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">
            <BookOpen className="inline-block h-8 w-8 text-purple-600 mr-3" />
            日常のケアポイント
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-purple-700">毎日のケア</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• お風呂で足を優しく洗い、指の間も清潔に</li>
                <li>• 爪は真っ直ぐに切り、角を少し丸める</li>
                <li>• 足のマッサージで血行促進</li>
                <li>• 靴下は締め付けないものを選択</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-purple-700">環境づくり</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 室内では裸足を推奨</li>
                <li>• 床は滑りにくい素材に</li>
                <li>• 足を使った遊びを取り入れる</li>
                <li>• 定期的な足のサイズ測定（3ヶ月ごと）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            お子様の足について心配なことがありましたら、早めに専門家にご相談ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/symptoms" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              症状をチェックする
            </Link>
            <Link href="/support/medical" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              医療機関を探す
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}