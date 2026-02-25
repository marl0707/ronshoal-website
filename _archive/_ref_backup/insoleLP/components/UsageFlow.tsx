'use client';

export default function UsageFlow() {
  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  const steps = [
    {
      number: "1",
      title: "公式LINE登録",
      subtitle: "症状相談",
      description: "お子様の症状や気になることを写真付きでご相談ください",
      icon: "ri-line-fill",
      color: "bg-green-500"
    },
    {
      number: "2", 
      title: "クリニック診察",
      subtitle: "保険適応判断",
      description: "提携クリニックで専門医による診察・保険適応の判断を行います",
      icon: "ri-stethoscope-line",
      color: "bg-blue-500"
    },
    {
      number: "3",
      title: "計測・製作",
      subtitle: "約1週間",
      description: "足型の計測を行い、お子様専用のインソールを製作いたします",
      icon: "ri-tools-line",
      color: "bg-purple-500"
    },
    {
      number: "4",
      title: "完成・お渡し",
      subtitle: "使用方法説明",
      description: "完成したインソールをお渡しし、正しい使用方法をご説明します",
      icon: "ri-gift-line",
      color: "bg-orange-500"
    },
    {
      number: "5",
      title: "保険請求",
      subtitle: "書類準備サポート",
      description: "クリニックが保険請求に必要な書類をすべて準備いたします",
      icon: "ri-file-text-line",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="flow" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            ご利用の流れ
          </h2>
          <p className="text-lg text-gray-600">
            簡単5ステップで、お子様専用のインソールが完成します
          </p>
        </div>

        <div className="space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{step.subtitle}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ml-auto`}>
                      <i className={`${step.icon} text-2xl text-gray-600`}></i>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <i className="ri-arrow-down-line text-4xl text-gray-400 rotate-90 md:rotate-0"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              まずはお気軽にご相談ください
            </h3>
            <button 
              onClick={handleLineCTA}
              className="!rounded-button bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <i className="ri-line-fill mr-3 text-xl"></i>
              LINE で相談を始める
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}