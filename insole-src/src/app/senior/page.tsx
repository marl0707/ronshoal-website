import Link from 'next/link';
import { 
  Heart, 
  AlertTriangle, 
  Activity, 
  Footprints,
  Users,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

export default function SeniorPage() {
  const sections = [
    {
      title: '歩くことの大切さ',
      description: '健康寿命を延ばす最も効果的な方法',
      icon: Heart,
      href: '/senior/walking',
      color: 'bg-green-100 text-green-600',
      keyPoints: [
        '1日8,000歩で健康寿命が4年延びる',
        '認知症リスクが40%減少',
        '心臓病リスクが30%減少'
      ]
    },
    {
      title: '転倒予防と足の健康',
      description: '転倒による大腿骨骨折を防ぐために',
      icon: AlertTriangle,
      href: '/senior/fall-prevention',
      color: 'bg-red-100 text-red-600',
      keyPoints: [
        '転倒後の1年死亡率20-30%',
        '適切な靴選びで転倒リスク減少',
        '毎日の足部運動が効果的'
      ]
    },
    {
      title: '高齢者の足のトラブル',
      description: 'よくある症状と対処法',
      icon: Activity,
      href: '/senior/trouble',
      color: 'bg-blue-100 text-blue-600',
      keyPoints: [
        '外反母趾・巻き爪の対処',
        '足のむくみ解消法',
        '適切なフットケア'
      ]
    },
    {
      title: '運動プログラム',
      description: '安全で効果的な運動方法',
      icon: Footprints,
      href: '/senior/exercise',
      color: 'bg-purple-100 text-purple-600',
      keyPoints: [
        '椅子を使った安全な運動',
        'バランス能力の向上',
        '筋力維持トレーニング'
      ]
    }
  ];

  const benefits = [
    { number: '8,000', unit: '歩', description: '1日の理想的な歩数' },
    { number: '40', unit: '%', description: '認知症リスク減少率' },
    { number: '30', unit: '%', description: '心臓病リスク減少率' },
    { number: '4.8', unit: '年', description: '健康寿命の延伸' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            歩くことは、健康寿命を伸ばす最も簡単で効果的な方法です
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            適切な歩行習慣と足のケアで、いつまでも自分の足で歩ける生活を。
            転倒予防と健康維持のための情報をお届けします。
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            歩くことがもたらす驚きの効果
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  {benefit.number}
                  <span className="text-xl">{benefit.unit}</span>
                </div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-lg ${section.color}`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 mt-4" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                
                <ul className="space-y-2">
                  {section.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-600 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  大腿骨骨折の深刻なリスク
                </h2>
                <p className="text-gray-700 mb-4">
                  高齢者の転倒による大腿骨骨折は、生命に関わる重大な問題です。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">20-30%</div>
                    <p className="text-sm text-gray-700">骨折後1年以内の死亡率</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">40%</div>
                    <p className="text-sm text-gray-700">寝たきりになる確率</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">90%以上</div>
                    <p className="text-sm text-gray-700">転倒が原因の割合</p>
                  </div>
                </div>
                <Link
                  href="/senior/fall-prevention"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  転倒予防について詳しく見る
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Habits */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            今日から始められる健康習慣
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👣</span>
              </div>
              <h3 className="font-bold mb-2">毎日の足チェック</h3>
              <p className="text-sm text-gray-600">
                入浴時に足の状態を確認。むくみや変色がないかチェックしましょう。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👟</span>
              </div>
              <h3 className="font-bold mb-2">適切な靴選び</h3>
              <p className="text-sm text-gray-600">
                滑りにくく、軽量で、つま先が反った靴を選びましょう。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚶</span>
              </div>
              <h3 className="font-bold mb-2">歩く習慣づくり</h3>
              <p className="text-sm text-gray-600">
                まずは今より1,000歩多く。徐々に8,000歩を目指しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            健康寿命を延ばす第一歩を踏み出しましょう
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            正しい知識と適切なケアで、いつまでも自分の足で歩ける生活を
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/senior/walking"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              歩くことの大切さを学ぶ
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/senior/exercise"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-secondary border-2 border-secondary rounded-lg hover:bg-green-50 transition-colors"
            >
              運動プログラムを見る
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}