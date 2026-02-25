'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "骨髄由来エクソソーム療法の安全性について教えてください",
      answer: "当療法は患者様ご自身の骨髄から抽出したエクソソームを使用するため、アレルギー反応や拒絶反応のリスクが極めて低く、安全性の高い治療法です。また、医療グレードの厳格な品質管理のもとで製造されており、感染症のリスクも最小限に抑えられています。治療前には必ず血液検査を行い、適応を確認いたします。"
    },
    {
      question: "効果が現れるまでにどのくらいの期間が必要ですか？",
      answer: "個人差がありますが、多くの患者様は治療開始から2-4週間程度で初期効果を実感され、2-3ヶ月で明確な改善を感じられます。肌質改善や美容効果は比較的早く現れやすく、慢性的な症状の改善には時間がかかる場合があります。定期的なフォローアップで効果を確認しながら治療を進めてまいります。"
    },
    {
      question: "自己注射の方法は難しくありませんか？", 
      answer: "当クリニックでは、患者様が安全で正確に自己注射できるよう、丁寧な指導を行っております。練習用キットを使用した実技指導により、ほとんどの方が簡単に習得できます。注射部位や手技について詳しくご説明し、不安がなくなるまでサポートいたします。また、24時間サポートホットラインでいつでもご相談いただけます。"
    },
    {
      question: "他の美容治療や薬物療法との併用は可能ですか？",
      answer: "多くの場合、他の治療との併用は可能ですが、治療内容によっては注意が必要な場合があります。現在受けている治療や服用中の薬がある場合は、必ず初回カウンセリング時にお申し出ください。医師が安全性を確認し、最適な治療計画をご提案いたします。併用により相乗効果が期待できる場合もあります。"
    },
    {
      question: "保険は適用されますか？",
      answer: "骨髄由来エクソソーム療法は、現在のところ保険適用外の自由診療となります。そのため、治療費は全額自己負担となります。ただし、医療費控除の対象となる場合がありますので、詳しくは税務署にご確認ください。当クリニックでは分割払いのご相談も承っております。"
    },
    {
      question: "副作用やリスクはありますか？",
      answer: "自己由来のエクソソームを使用するため、重篤な副作用のリスクは低いとされています。稀に注射部位の軽微な腫れや赤みが生じる場合がありますが、通常は数日以内に改善します。治療開始前に詳しいリスク説明を行い、治療期間中は定期的なフォローアップで安全性を確認いたします。何か異常を感じられた場合は、すぐにご連絡ください。"
    },
    {
      question: "どのような方が治療の対象となりますか？",
      answer: "18歳以上の健康な方で、美容効果や健康改善を求める方が対象となります。ただし、重篤な疾患をお持ちの方、妊娠中・授乳中の方、免疫抑制剤を使用中の方などは治療をお受けできない場合があります。詳しい適応については、初回カウンセリングで医師が判断いたします。"
    },
    {
      question: "治療を中止したい場合はどうすればよいですか？",
      answer: "治療はいつでも中止していただけます。体調の変化や効果に満足された場合など、どのような理由でも構いません。中止をご希望の場合は、お早めにクリニックまでご連絡ください。残った薬剤がある場合の取り扱いについてもご相談いたします。患者様の意思を最優先に、安心して治療をお受けいただけるよう配慮しております。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600">
            患者様からよくお寄せいただくご質問にお答えします
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-xl text-blue-600 transition-transform`}></i>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            その他のご質問がございましたら
          </h3>
          <p className="text-gray-700 mb-6">
            ここに掲載されていないご質問やご不明な点がございましたら、
            お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            お問い合わせする
          </button>
        </div>
      </div>
    </section>
  );
}