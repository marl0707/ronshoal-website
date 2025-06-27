import Link from 'next/link';
import { ArrowLeft, UserCheck, Award, BookOpen, Stethoscope, Users, GraduationCap } from 'lucide-react';

export default function ExpertPage() {
  const expertTypes = [
    {
      title: '整形外科医',
      icon: Stethoscope,
      description: '骨・関節・筋肉の専門医',
      expertise: [
        '足の変形の診断',
        '成長障害の評価',
        'スポーツ障害の治療',
        '手術的治療の判断',
      ],
      certification: '日本整形外科学会認定医',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '理学療法士',
      icon: Users,
      description: '運動機能回復の専門家',
      expertise: [
        '歩行分析・指導',
        '筋力トレーニング',
        'ストレッチ指導',
        '運動療法プログラム',
      ],
      certification: '国家資格',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '義肢装具士',
      icon: Award,
      description: '装具・インソールの専門家',
      expertise: [
        'カスタムインソール作成',
        '矯正装具の製作',
        'シューズの調整',
        'フィッティング',
      ],
      certification: '国家資格',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'スポーツトレーナー',
      icon: GraduationCap,
      description: 'スポーツ医学の専門家',
      expertise: [
        'パフォーマンス向上',
        '怪我予防プログラム',
        'リハビリテーション',
        'コンディショニング',
      ],
      certification: 'JSPO-AT等',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const consultationProcess = [
    {
      step: '初回相談',
      duration: '60-90分',
      content: [
        '詳細な問診',
        '視診・触診',
        '歩行観察',
        '必要な検査',
      ],
    },
    {
      step: '評価・診断',
      duration: '30分',
      content: [
        '検査結果の説明',
        '現状の評価',
        '治療方針の提案',
        '質問への回答',
      ],
    },
    {
      step: '治療・ケア',
      duration: '個別設定',
      content: [
        '治療プログラム開始',
        '定期的な経過観察',
        'ホームケア指導',
        '必要に応じて調整',
      ],
    },
  ];

  const selectionCriteria = [
    {
      criteria: '専門性',
      points: [
        '足の治療経験が豊富',
        '小児の診療に慣れている',
        '最新の知識を持っている',
        '学会や研修に参加',
      ],
      icon: '🎯',
    },
    {
      criteria: 'コミュニケーション',
      points: [
        '子どもに優しい対応',
        '説明がわかりやすい',
        '質問しやすい雰囲気',
        '親身になって相談に乗る',
      ],
      icon: '💬',
    },
    {
      criteria: 'アクセス・設備',
      points: [
        '通いやすい立地',
        '予約が取りやすい',
        '必要な検査設備',
        'リハビリ施設の充実',
      ],
      icon: '🏥',
    },
    {
      criteria: '連携体制',
      points: [
        '他の専門家との連携',
        '学校との情報共有',
        '紹介状の作成',
        'フォローアップ体制',
      ],
      icon: '🤝',
    },
  ];

  const questions = [
    '症状の原因は何ですか？',
    '治療にはどれくらいの期間がかかりますか？',
    '日常生活で気をつけることは？',
    'スポーツは続けても大丈夫ですか？',
    '家でできるケアはありますか？',
    '再発を防ぐにはどうすればいいですか？',
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link href="/support" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          サポート情報に戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
            <UserCheck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">専門家について</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お子様の足の健康を支える様々な専門家の役割と、
            適切な専門家の選び方についてご紹介します。
          </p>
        </div>
      </section>

      {/* Expert Types */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">足の健康に関わる専門家</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {expertTypes.map((expert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${expert.color} rounded-xl mr-4`}>
                  <expert.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{expert.title}</h3>
                  <p className="text-sm text-gray-600">{expert.description}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">専門分野:</p>
                <ul className="space-y-1">
                  {expert.expertise.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2 inline-block">
                <p className="text-xs font-medium text-gray-600">資格: {expert.certification}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Process */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">相談の流れ</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {consultationProcess.map((process, index) => (
            <div key={index} className="relative">
              {index < consultationProcess.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 rotate-45 w-2 h-2 border-t-2 border-r-2 border-gray-300"></div>
                </div>
              )}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl">{process.step}</h3>
                  <span className="text-sm text-purple-600 font-medium">{process.duration}</span>
                </div>
                <ul className="space-y-2">
                  {process.content.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">専門家の選び方</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectionCriteria.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <div className="text-5xl mb-4 text-center">{item.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-center">{item.criteria}</h3>
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">
            <BookOpen className="inline-block h-8 w-8 text-blue-600 mr-3" />
            専門家に聞いておきたいこと
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">基本的な質問</h3>
              <ul className="space-y-3">
                {questions.map((question, index) => (
                  <li key={index} className="bg-white rounded-lg p-3 flex items-center">
                    <span className="text-blue-600 mr-3 font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-cyan-700">メモを取るポイント</h3>
              <div className="bg-white rounded-2xl p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1">✓</span>
                    診断名と症状の説明
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1">✓</span>
                    治療計画とスケジュール
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1">✓</span>
                    自宅でのケア方法
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1">✓</span>
                    次回受診の目安
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-3 mt-1">✓</span>
                    緊急時の対応方法
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">チーム医療のメリット</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6 text-center">
              複数の専門家が連携することで、より効果的な治療が可能になります
            </p>
            <div className="bg-white rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">医</span>
                  </div>
                  <div>
                    <p className="font-medium">医師による診断・治療方針の決定</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">PT</span>
                  </div>
                  <div>
                    <p className="font-medium">理学療法士による運動療法</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">PO</span>
                  </div>
                  <div>
                    <p className="font-medium">義肢装具士による装具作成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            お子様に最適な専門家を見つけて、健やかな成長をサポートしましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/support/medical" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              医療機関を探す
            </Link>
            <Link href="/support/faq" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              よくある質問を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}