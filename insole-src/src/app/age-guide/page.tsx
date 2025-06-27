import Link from 'next/link';
import { Baby, User, Users, School, ChevronRight, BookOpen } from 'lucide-react';

export default function AgeGuidePage() {
  const ageGroups = [
    {
      title: '0-3歳',
      subtitle: 'ファーストシューズ期',
      description: '歩き始めから3歳まで。足の基礎が作られる大切な時期です。',
      icon: Baby,
      href: '/age-guide/0-3',
      keyPoints: [
        '初めての靴の選び方',
        '足の成長スピード',
        '歩行の発達段階',
      ],
      color: 'bg-pink-50 text-pink-600',
    },
    {
      title: '3-6歳',
      subtitle: 'プレゴールデンエイジ',
      description: '運動の基礎が作られる時期。足の形も大きく変化します。',
      icon: User,
      href: '/age-guide/3-6',
      keyPoints: [
        '運動習慣の確立',
        '扁平足の見極め',
        '靴のサイズアップ時期',
      ],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: '6-12歳',
      subtitle: 'ゴールデンエイジ',
      description: '運動能力が飛躍的に向上。スポーツを始める子も多い時期です。',
      icon: Users,
      href: '/age-guide/6-12',
      keyPoints: [
        'スポーツシューズの選び方',
        '成長痛への対応',
        '運動負荷の管理',
      ],
      color: 'bg-green-50 text-green-600',
    },
    {
      title: '12-18歳',
      subtitle: '部活動期',
      description: '本格的なスポーツ活動。成長期特有の障害にも注意が必要です。',
      icon: School,
      href: '/age-guide/12-18',
      keyPoints: [
        'スポーツ障害の予防',
        '専門的なシューズ選び',
        '成長期の栄養管理',
      ],
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            年齢別ガイド
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            お子様の年齢に応じた足の健康情報をご紹介します。
            成長段階に合わせた適切なケアで、健やかな発達をサポートしましょう。
          </p>
        </div>
      </section>

      {/* Age Groups Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ageGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={group.href} className="block p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-lg ${group.color}`}>
                      <group.icon className="w-8 h-8" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 mt-4" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">{group.title}</h2>
                  <p className="text-lg text-gray-600 mb-4">{group.subtitle}</p>
                  <p className="text-gray-600 mb-6">{group.description}</p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">主なトピック：</p>
                    <ul className="space-y-1">
                      {group.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            成長期の足の健康について
          </h2>
          <p className="text-gray-600 mb-8">
            子どもの足は大人の足とは異なり、成長とともに大きく変化していきます。
            各年齢に応じた適切なケアを行うことで、将来の足トラブルを予防し、
            健康な体づくりの基礎を作ることができます。
          </p>
          <Link
            href="/practice"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            実践ガイドを見る
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}