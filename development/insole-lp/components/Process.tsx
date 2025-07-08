
'use client';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "初回カウンセリング",
      description: "医師による詳細なカウンセリングで、患者様の症状や希望を伺います。治療の適応や注意事項について丁寧にご説明いたします。",
      icon: "ri-user-voice-line",
      color: "blue"
    },
    {
      number: "02",
      title: "治療計画の作成",
      description: "検査結果をもとに、患者様に最適な治療計画を作成します。注射頻度や治療期間を個別に設定いたします。",
      icon: "ri-file-text-line",
      color: "purple"
    },
    {
      number: "03",
      title: "自己注射指導",
      description: "安全で正確な自己注射の方法を丁寧に指導いたします。練習用キットを使用して、確実に習得していただきます。",
      icon: "ri-syringe-line",
      color: "orange"
    },
    {
      number: "04",
      title: "定期フォローアップ",
      description: "治療開始後は定期的に経過を確認し、効果や副作用の有無をチェックします。必要に応じて治療計画を調整いたします。",
      icon: "ri-calendar-check-line",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            施術の流れ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            初回カウンセリングから治療開始まで、安心して治療を受けていただけるよう丁寧にサポートいたします
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mr-6`}>
                        <i className={`${step.icon} text-2xl ${colors.text}`}></i>
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${colors.text} mb-1`}>
                          STEP {step.number}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
