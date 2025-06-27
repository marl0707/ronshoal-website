'use client';

import Link from 'next/link';
import { ArrowLeft, HelpCircle, ChevronDown, Search } from 'lucide-react';

export default function FAQPage() {
  const faqCategories = [
    {
      category: '足の健康について',
      icon: '🦶',
      questions: [
        {
          q: '子どもの足の成長で気をつけるべきことは？',
          a: '足は18歳頃まで成長を続けます。3〜6ヶ月ごとに靴のサイズを確認し、適切なサイズの靴を履かせることが重要です。また、裸足で過ごす時間を作ることで、足の筋肉の発達を促すことができます。',
        },
        {
          q: '扁平足は治りますか？',
          a: '多くの子どもは生まれつき扁平足ですが、成長とともに土踏まずが形成されます。6歳を過ぎても改善が見られない場合は、専門家に相談することをお勧めします。適切な運動療法で改善することが多いです。',
        },
        {
          q: '外反母趾は遺伝しますか？',
          a: '足の形状は遺伝的要因もありますが、靴の選び方や歩き方などの環境要因も大きく影響します。早期から適切なケアを行うことで予防可能です。',
        },
      ],
    },
    {
      category: '靴選びについて',
      icon: '👟',
      questions: [
        {
          q: '子どもの靴のサイズはどのくらい余裕を持たせるべき？',
          a: 'つま先に5〜10mm程度の余裕があることが理想的です。親指で押して確認できます。大きすぎると歩行が不安定になり、小さすぎると足の変形の原因になります。',
        },
        {
          q: '中古の靴を履かせても大丈夫？',
          a: '靴は履く人の足の形に合わせて変形するため、他の子が履いた靴は避けることをお勧めします。特に靴底の減り方が偏っている場合は、歩き方に悪影響を与える可能性があります。',
        },
        {
          q: 'スポーツシューズは専用のものが必要？',
          a: 'スポーツの種類によって足への負担が異なるため、専用シューズの使用をお勧めします。特に競技レベルが上がるほど、適切なシューズ選びが怪我予防に重要になります。',
        },
      ],
    },
    {
      category: 'スポーツと足',
      icon: '⚽',
      questions: [
        {
          q: 'スポーツを始める適齢期は？',
          a: '基本的な運動は3歳頃から始められますが、本格的なスポーツは6歳以降が適しています。ゴールデンエイジ（9〜12歳）は運動神経が最も発達する時期なので、この時期に様々な動きを経験することが大切です。',
        },
        {
          q: '成長痛とスポーツ障害の違いは？',
          a: '成長痛は主に夜間に起こり、翌朝には改善することが多いです。一方、スポーツ障害は運動時や運動後に痛みが出て、休んでも改善しない場合があります。継続する痛みは専門家に相談してください。',
        },
        {
          q: 'オーバーユースを防ぐには？',
          a: '週2日は完全休養日を設け、同じ動作の繰り返しを避けることが大切です。また、練習前後のストレッチやアイシングなどのケアも重要です。',
        },
      ],
    },
    {
      category: '症状・トラブル',
      icon: '🩹',
      questions: [
        {
          q: '巻き爪の予防法は？',
          a: '爪は真っ直ぐに切り、角を丸めすぎないことが大切です。また、きつい靴を避け、正しい歩き方を身につけることも予防につながります。',
        },
        {
          q: '水ぶくれができた時の対処法は？',
          a: '小さな水ぶくれは自然に吸収されるのを待ちます。大きな場合は清潔な針で水を抜きますが、皮は剥がさないでください。感染予防のため清潔に保つことが重要です。',
        },
        {
          q: 'タコ・魚の目の違いは？',
          a: 'タコは皮膚の表面が厚くなったもので痛みは少ないです。魚の目は中心に芯があり、圧迫すると痛みます。どちらも圧迫や摩擦が原因なので、靴の見直しが必要です。',
        },
      ],
    },
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
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">よくある質問</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            保護者の方からよくいただく質問と回答をまとめました。
            お探しの情報が見つからない場合は、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Search Box */}
      <section className="max-w-3xl mx-auto px-4 mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="質問を検索..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-purple-500 transition"
          />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-4xl mx-auto px-4">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{category.icon}</span>
              <h2 className="text-2xl font-bold gradient-text">{category.category}</h2>
            </div>
            <div className="space-y-4">
              {category.questions.map((item, index) => (
                <details key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-semibold text-lg pr-4">{item.q}</h3>
                    <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Additional Resources */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">その他のサポート</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/support/medical" className="bg-white rounded-2xl p-6 hover:shadow-md transition text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold mb-2">医療機関</h3>
              <p className="text-sm text-gray-600">専門医療機関を探す</p>
            </Link>
            <Link href="/support/expert" className="bg-white rounded-2xl p-6 hover:shadow-md transition text-center">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="font-bold mb-2">専門家情報</h3>
              <p className="text-sm text-gray-600">足の専門家について</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-2xl p-6 hover:shadow-md transition text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold mb-2">お問い合わせ</h3>
              <p className="text-sm text-gray-600">直接質問する</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            お探しの情報は見つかりましたか？
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/symptoms" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              症状をチェックする
            </Link>
            <Link href="/age-guide" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              年齢別ガイドを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}