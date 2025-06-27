import Link from 'next/link';
import {
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Info,
  Users,
  Baby,
  Activity,
  Footprints,
  Target,
  Heart,
  Shield
} from 'lucide-react';

export default function InsolePage() {
  const insoleTypes = [
    {
      name: 'スポーツ用',
      description: 'パフォーマンス向上と怪我予防',
      features: ['衝撃吸収', 'アーチサポート', '安定性向上', '疲労軽減'],
      icon: Activity,
      color: 'from-blue-400 to-cyan-600'
    },
    {
      name: '日常生活用',
      description: '快適な歩行をサポート',
      features: ['圧力分散', '姿勢改善', '疲労軽減', '足の痛み緩和'],
      icon: Footprints,
      color: 'from-green-400 to-emerald-600'
    },
    {
      name: '成長期用',
      description: '正しい足の発達を促進',
      features: ['成長サポート', 'バランス向上', '姿勢矯正', '足の変形予防'],
      icon: Baby,
      color: 'from-purple-400 to-pink-600'
    }
  ];

  const benefits = [
    {
      title: '個別対応',
      description: '一人ひとりの足の形状に合わせて作成',
      icon: Target
    },
    {
      title: '専門的診断',
      description: '足病医学の専門家による詳細な診断',
      icon: Shield
    },
    {
      title: '問題解決',
      description: '足の痛みや不調の根本的な改善',
      icon: Heart
    },
    {
      title: '予防効果',
      description: '将来的な足のトラブルを予防',
      icon: Activity
    }
  ];

  const process = [
    {
      step: '1',
      title: '初回相談',
      description: '足の悩みや症状をヒアリング',
      duration: '約30分'
    },
    {
      step: '2',
      title: '足の診断',
      description: '専門機器による詳細な足の分析',
      duration: '約45分'
    },
    {
      step: '3',
      title: '型取り',
      description: '足の正確な型を採取',
      duration: '約20分'
    },
    {
      step: '4',
      title: '製作',
      description: 'オーダーメイドインソール作成',
      duration: '約2週間'
    },
    {
      step: '5',
      title: 'フィッティング',
      description: '実際に装着して調整',
      duration: '約30分'
    },
    {
      step: '6',
      title: 'アフターケア',
      description: '定期的なメンテナンスとフォロー',
      duration: '継続的'
    }
  ];

  const targetUsers = [
    {
      title: '成長期のお子様',
      conditions: [
        '偏平足や外反母趾の傾向がある',
        'スポーツで足の痛みを訴える',
        '歩き方に違和感がある',
        '疲れやすい'
      ]
    },
    {
      title: 'スポーツをする方',
      conditions: [
        'パフォーマンスを向上させたい',
        'スポーツ障害を予防したい',
        '練習後の疲労を軽減したい',
        '競技特性に合わせたサポート'
      ]
    },
    {
      title: '日常生活で困っている方',
      conditions: [
        '長時間の立ち仕事で足が痛む',
        '足の疲れが取れない',
        '靴が合わない',
        '姿勢が気になる'
      ]
    }
  ];

  const faqs = [
    {
      question: 'インソールの寿命はどのくらいですか？',
      answer: '使用頻度や体重により異なりますが、一般的に1～2年程度です。定期的なメンテナンスで長持ちさせることができます。'
    },
    {
      question: '保険は適用されますか？',
      answer: '医師の診断書がある場合、一部の保険が適用される場合があります。詳しくは専門機関にご相談ください。'
    },
    {
      question: '子どもでも使えますか？',
      answer: 'はい、成長期のお子様にこそおすすめです。足の健全な発達をサポートし、将来的な問題を予防できます。'
    },
    {
      question: '市販のインソールとの違いは？',
      answer: '市販品は平均的な足型に基づいていますが、オーダーメイドは個人の足に完全に合わせて作るため、効果が大きく異なります。'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">オーダーメイドインソール</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              一人ひとりの足の形状と歩行特性に合わせて作る、
              あなただけの特別なインソール
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            オーダーメイドインソールの<span className="gradient-text">メリット</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            用途別<span className="gradient-text">インソールタイプ</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {insoleTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.name} className="glass-effect rounded-2xl p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${type.color} text-white mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            インソール作成の<span className="gradient-text">流れ</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-purple-400" />
                  </div>
                )}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-sm text-purple-600 font-medium">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            こんな方に<span className="gradient-text">おすすめ</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {targetUsers.map((user) => (
              <div key={user.title} className="glass-effect rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">{user.title}</h3>
                </div>
                <ul className="space-y-3">
                  {user.conditions.map((condition) => (
                    <li key={condition} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            よくある<span className="gradient-text">質問</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-3 flex items-start">
                  <Info className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">専門機関でのご相談をおすすめします</h2>
            <p className="text-xl mb-8 opacity-90">
              オーダーメイドインソールは、専門的な診断と技術が必要です。
              お近くの専門機関でご相談ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support/medical" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                医療機関を探す
              </Link>
              <Link href="/support/expert" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition">
                専門家に相談
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">ご注意</h3>
                <p className="text-blue-800">
                  オーダーメイドインソールの作成には、専門的な知識と技術が必要です。
                  必ず専門機関（整形外科、足病医、義肢装具士など）にご相談の上、作成してください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}