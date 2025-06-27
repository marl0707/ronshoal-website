import Link from 'next/link';
import { ArrowLeft, Hospital, MapPin, Phone, Clock, Award, Search } from 'lucide-react';

export default function MedicalPage() {
  const specialties = [
    {
      name: '小児整形外科',
      description: '子どもの骨・関節・筋肉の専門',
      conditions: ['成長痛', '骨折', '先天性疾患', 'スポーツ障害'],
      icon: '🦴',
    },
    {
      name: '足病医学',
      description: '足専門の医療分野',
      conditions: ['扁平足', '外反母趾', '巻き爪', '足底筋膜炎'],
      icon: '🦶',
    },
    {
      name: 'スポーツ医学',
      description: 'スポーツ障害の診断・治療',
      conditions: ['疲労骨折', '靭帯損傷', 'オーバーユース症候群'],
      icon: '⚽',
    },
    {
      name: 'リハビリテーション科',
      description: '機能回復と予防',
      conditions: ['歩行訓練', '筋力強化', '姿勢改善'],
      icon: '🏃',
    },
  ];

  const searchTips = [
    {
      title: '診療科の確認',
      description: '整形外科、小児科、リハビリテーション科などを確認',
      icon: Hospital,
    },
    {
      title: '専門医の有無',
      description: '日本整形外科学会認定医などの資格を確認',
      icon: Award,
    },
    {
      title: 'アクセス',
      description: '通院しやすい立地かどうかを考慮',
      icon: MapPin,
    },
    {
      title: '診療時間',
      description: '学校帰りや週末の診療があるか確認',
      icon: Clock,
    },
  ];

  const whenToVisit = [
    {
      urgency: '緊急',
      color: 'red',
      symptoms: [
        '激しい痛みで歩けない',
        '骨折の疑い',
        '高熱を伴う腫れ',
        '感覚がない・麻痺',
      ],
    },
    {
      urgency: '早めに受診',
      color: 'orange',
      symptoms: [
        '1週間以上続く痛み',
        '腫れが引かない',
        '歩き方の明らかな異常',
        'スポーツ時の繰り返す痛み',
      ],
    },
    {
      urgency: '経過観察後',
      color: 'yellow',
      symptoms: [
        '軽い痛みが続く',
        '疲れやすい',
        '靴の減り方が偏る',
        '足の形が気になる',
      ],
    },
  ];

  const preparationChecklist = [
    '症状の経過（いつから、どんな時に痛むか）',
    '今までの病歴・けがの履歴',
    'スポーツ活動の内容と頻度',
    '使用している靴（持参するとよい）',
    '痛み止めなど使用している薬',
    '保険証・医療証',
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
            <Hospital className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">医療機関の選び方</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お子様の足の症状に応じて、適切な医療機関を選ぶためのガイドです。
            早期の適切な診断と治療が、健やかな成長につながります。
          </p>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">診療科と専門分野</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{specialty.icon}</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">{specialty.name}</h3>
                  <p className="text-gray-600 text-sm">{specialty.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-medium mb-2">主な対象疾患:</p>
                <div className="flex flex-wrap gap-2">
                  {specialty.conditions.map((condition, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Visit */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">受診のタイミング</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {whenToVisit.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${
              item.color === 'red' ? 'from-red-50 to-orange-50' :
              item.color === 'orange' ? 'from-orange-50 to-yellow-50' :
              'from-yellow-50 to-green-50'
            } rounded-2xl p-6`}>
              <div className={`inline-block px-4 py-2 rounded-full font-bold mb-4 ${
                item.color === 'red' ? 'bg-red-100 text-red-700' :
                item.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {item.urgency}
              </div>
              <ul className="space-y-2">
                {item.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className={`w-2 h-2 rounded-full mr-3 mt-1.5 ${
                      item.color === 'red' ? 'bg-red-500' :
                      item.color === 'orange' ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`}></span>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Search Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">医療機関の探し方</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition card-hover">
              <tip.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Checklist */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">受診時の準備</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-purple-700">持ち物チェックリスト</h3>
              <div className="space-y-3">
                {preparationChecklist.map((item, index) => (
                  <label key={index} className="flex items-center bg-white rounded-lg p-3">
                    <input type="checkbox" className="mr-3 h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-pink-700">診察時のポイント</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">●</span>
                  症状を具体的に伝える（いつ、どこが、どのように）
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">●</span>
                  日常生活やスポーツへの影響を説明
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">●</span>
                  不安な点は遠慮なく質問する
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">●</span>
                  治療方針や期間について確認
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">●</span>
                  次回受診の目安を聞く
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online Resources */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">医療機関検索サイト</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-3">全国医療機関検索</h3>
              <p className="text-sm text-gray-600 mb-4">
                地域や診療科から医療機関を検索できる公的サイトへのリンクです。
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                検索サイトへ →
              </button>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-3">専門医検索</h3>
              <p className="text-sm text-gray-600 mb-4">
                整形外科専門医、スポーツドクターなどの認定医を検索できます。
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                専門医を探す →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            お子様の症状について心配がある場合は、早めの受診をお勧めします
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/symptoms" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              症状をチェックする
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