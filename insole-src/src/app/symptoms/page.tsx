import Link from 'next/link';
import { AlertCircle, ChevronRight, Info, ArrowRight } from 'lucide-react';

export default function SymptomsPage() {
  const symptomCategories = [
    {
      title: '痛み',
      icon: '😣',
      gradient: 'from-red-500 to-pink-500',
      symptoms: [
        { name: 'かかとの痛み', href: '/symptoms/heel-pain' },
        { name: '土踏まずの痛み', href: '/symptoms/arch-pain' },
        { name: '爪の痛み', href: '/symptoms/nail-pain' },
        { name: '足首の痛み', href: '/symptoms/ankle-pain' },
      ],
    },
    {
      title: '変形',
      icon: '🦶',
      gradient: 'from-purple-500 to-pink-500',
      symptoms: [
        { name: '扁平足', href: '/symptoms/flat-foot' },
        { name: '外反母趾', href: '/symptoms/hallux-valgus' },
        { name: '内反小趾', href: '/symptoms/bunionette' },
        { name: '巻き爪', href: '/symptoms/ingrown-nail' },
      ],
    },
    {
      title: '皮膚トラブル',
      icon: '🩹',
      gradient: 'from-orange-500 to-red-500',
      symptoms: [
        { name: '水ぶくれ', href: '/symptoms/blister' },
        { name: 'タコ・魚の目', href: '/symptoms/callus' },
        { name: '皮むけ', href: '/symptoms/peeling' },
        { name: 'ひび割れ', href: '/symptoms/crack' },
      ],
    },
    {
      title: '腫れ・炎症',
      icon: '🔥',
      gradient: 'from-yellow-500 to-orange-500',
      symptoms: [
        { name: '足の甲の腫れ', href: '/symptoms/dorsal-swelling' },
        { name: 'くるぶしの腫れ', href: '/symptoms/ankle-swelling' },
        { name: '指の腫れ', href: '/symptoms/toe-swelling' },
        { name: '赤み・熱感', href: '/symptoms/inflammation' },
      ],
    },
  ];

  const emergencySymptoms = [
    '激しい痛みで歩けない',
    '足が紫色に変色している',
    '高熱を伴う足の腫れ',
    '骨が見えるような深い傷',
    '感覚がない・しびれが強い',
  ];

  const ageSpecificSymptoms = [
    {
      age: '0-3歳',
      common: ['内反足気味', '爪の巻き込み', '歩き方の左右差'],
      color: 'bg-pink-100 text-pink-700',
    },
    {
      age: '3-6歳',
      common: ['扁平足', 'X脚・O脚', '頻繁な転倒'],
      color: 'bg-purple-100 text-purple-700',
    },
    {
      age: '6-12歳',
      common: ['成長痛', 'スポーツ障害', '偏平足'],
      color: 'bg-blue-100 text-blue-700',
    },
    {
      age: '12-18歳',
      common: ['疲労骨折', 'シンスプリント', '外反母趾'],
      color: 'bg-green-100 text-green-700',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">よくある足の症状</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お子様の足に現れる様々な症状について、原因と対処法をご紹介します。
            心配な症状がある場合は、早めに専門家にご相談ください。
          </p>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-red-800 mb-4">緊急性の高い症状</h2>
              <p className="text-red-700 mb-4">
                以下の症状がある場合は、すぐに医療機関を受診してください：
              </p>
              <ul className="space-y-2">
                {emergencySymptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {symptom}
                  </li>
                ))}
              </ul>
              <Link href="/emergency" className="inline-flex items-center mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition">
                緊急時の対応を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Categories */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">症状から探す</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {symptomCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.symptoms.map((symptom, idx) => (
                  <Link
                    key={idx}
                    href={symptom.href}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                      {symptom.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Age-specific Symptoms */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">年齢別によくある症状</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageSpecificSymptoms.map((ageGroup, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition card-hover">
              <div className={`inline-block px-4 py-2 rounded-full ${ageGroup.color} font-bold mb-4`}>
                {ageGroup.age}
              </div>
              <ul className="space-y-2">
                {ageGroup.common.map((symptom, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {symptom}
                  </li>
                ))}
              </ul>
              <Link
                href={`/age-guide/${ageGroup.age.replace('歳', '')}`}
                className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700 font-medium"
              >
                詳しく見る
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Self Check Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <Info className="inline-block h-8 w-8 text-blue-600 mr-3" />
                セルフチェックの方法
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                日常的に以下のポイントをチェックすることで、
                早期に異常を発見できます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">足の形や左右差を観察</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">歩き方や姿勢の変化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">靴の減り方の偏り</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">痛みや違和感の有無</span>
                </li>
              </ul>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4">チェックシート</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">足に痛みがある</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">歩き方が気になる</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">靴がすぐに壊れる</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">運動を嫌がる</span>
                </label>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                2つ以上当てはまる場合は、専門家への相談をお勧めします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            症状について不安がある場合は、早めに専門家にご相談ください
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