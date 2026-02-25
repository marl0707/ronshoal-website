'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "本当に500円程度で済むのですか？",
      answer: "はい、小児医療費助成制度を活用することで、大阪市の場合は実質500円程度のご負担となります。ただし、地域により制度内容が異なりますので、詳細は各自治体にご確認ください。"
    },
    {
      question: "どこでインソールを作ることができますか？",
      answer: "医師の診断が可能な提携クリニックにて製作いたします。お住まいの地域に応じて最適なクリニックをご紹介いたします。まずはLINEでご相談ください。"
    },
    {
      question: "子どもが成長したらどうなりますか？",
      answer: "お子様の成長に合わせて1〜2年での作り直しを推奨しています。成長期のお子様には定期的なチェックと必要に応じた調整も行っています。"
    },
    {
      question: "スポーツ用のインソールも作れますか？",
      answer: "はい、各競技の特性に合わせた専用インソールの製作が可能です。サッカー、野球、バスケットボール、テニスなど、様々なスポーツに対応しています。"
    },
    {
      question: "保険適応にならない場合はありますか？",
      answer: "医師の診断により、症状によっては保険適応とならない場合があります。その場合も、お子様に最適な治療方法をご提案いたします。"
    },
    {
      question: "インソールの効果はどのくらいで現れますか？",
      answer: "個人差がありますが、多くのお子様で使用開始から2〜4週間程度で改善を実感いただいています。継続的な使用により、より効果を感じられます。"
    },
    {
      question: "普通の靴に入れることはできますか？",
      answer: "はい、一般的な運動靴や学校の上履きにも対応できるよう設計しています。お子様が普段使用している靴に合わせて製作いたします。"
    },
    {
      question: "相談は本当に無料ですか？",
      answer: "はい、LINE相談は完全無料です。症状についてのご相談、写真での状態確認、制度についてのご質問など、お気軽にご相談ください。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg text-gray-600">
            保護者の皆様からよくいただくご質問にお答えします
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">Q</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                  </div>
                  <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-2xl text-gray-400 transition-transform duration-200`}></i>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 font-bold text-sm">A</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              その他のご質問がございましたら
            </h3>
            <p className="text-gray-600 mb-6">
              お気軽にLINEでお問い合わせください。専門スタッフがお答えいたします。
            </p>
            <button 
              onClick={() => window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank')}
              className="!rounded-button bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <i className="ri-line-fill mr-2"></i>
              LINE で質問する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}