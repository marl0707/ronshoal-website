import Link from 'next/link';
import { Footprints, Dumbbell, Layers, Sun, ChevronRight, Book } from 'lucide-react';

export default function PracticePage() {
  const guides = [
    {
      title: '靴選び完全ガイド',
      description: '成長期の子どもの足に合った靴の選び方を詳しく解説します。',
      icon: Footprints,
      href: '/practice/shoes',
      topics: [
        'サイズの測り方',
        '年齢別の選び方',
        '買い替えタイミング',
        'スポーツシューズの選び方'
      ],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: '運動プログラム',
      description: '足の健康を保つための年齢別エクササイズを動画付きで紹介。',
      icon: Dumbbell,
      href: '/practice/exercise',
      topics: [
        '足指の運動',
        'バランストレーニング',
        'ストレッチ方法',
        '予防エクササイズ'
      ],
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'インソール活用法',
      description: '足のトラブル予防や改善に役立つインソールの使い方。',
      icon: Layers,
      href: '/practice/insole',
      topics: [
        'インソールの種類',
        '選び方のポイント',
        '使用上の注意',
        'カスタムインソール'
      ],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: '季節別ケア',
      description: '季節ごとに変わる足のケア方法と注意点をまとめました。',
      icon: Sun,
      href: '/practice/seasonal',
      topics: [
        '春：新学期の準備',
        '夏：蒸れ対策',
        '秋：スポーツシーズン',
        '冬：冷え対策'
      ],
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            実践ガイド
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            日常生活で実践できる足の健康管理方法をご紹介します。
            正しい知識と適切なケアで、お子様の健やかな成長をサポートしましょう。
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={guide.href} className="block p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-lg ${guide.color}`}>
                      <guide.icon className="w-8 h-8" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 mt-4" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">{guide.title}</h2>
                  <p className="text-gray-600 mb-6">{guide.description}</p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-700">主な内容：</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {guide.topics.map((topic, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0" />
                          {topic}
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

      {/* Tips Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            今すぐ実践できる足の健康習慣
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold mb-2">毎日の足チェック</h3>
              <p className="text-sm text-gray-600">
                お風呂上がりに足の状態を確認。赤みや腫れ、変形がないかチェックしましょう。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-bold mb-2">足指じゃんけん</h3>
              <p className="text-sm text-gray-600">
                1日1回、足指でグー・チョキ・パーを作る運動。足の筋力強化に効果的です。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="font-bold mb-2">靴のサイズ確認</h3>
              <p className="text-sm text-gray-600">
                3ヶ月に1度は靴のサイズを確認。成長期は頻繁なサイズチェックが重要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Book className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            さらに詳しい情報をお探しですか？
          </h2>
          <p className="text-gray-600 mb-6">
            よくある質問や専門家の情報など、さらに詳しい情報をご用意しています
          </p>
          <Link
            href="/support/faq"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Q&Aを見る
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}