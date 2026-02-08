'use client';

export default function Pricing() {
  const plans = [
    {
      name: "ベーシックコース",
      price: "298,000",
      period: "初回4週間分",
      description: "初めての方におすすめのコース",
      features: [
        "初回カウンセリング込み",
        "血液検査費用込み",
        "自己注射指導込み",
        "4回分のエクソソーム",
        "2週間後フォローアップ",
        "24時間サポートホットライン"
      ],
      recommended: false,
      color: "blue"
    },
    {
      name: "スタンダードコース", 
      price: "498,000",
      period: "8週間分",
      description: "継続治療で効果を実感したい方に",
      features: [
        "初回カウンセリング込み",
        "血液検査費用込み",
        "自己注射指導込み",
        "8回分のエクソソーム",
        "週1回フォローアップ",
        "24時間サポートホットライン",
        "効果測定検査込み"
      ],
      recommended: true,
      color: "green"
    },
    {
      name: "プレミアムコース",
      price: "748,000", 
      period: "12週間分",
      description: "最大限の効果を求める方に",
      features: [
        "初回カウンセリング込み",
        "血液検査費用込み", 
        "自己注射指導込み",
        "12回分のエクソソーム",
        "週1回フォローアップ",
        "24時間サポートホットライン",
        "効果測定検査込み",
        "栄養指導・生活指導込み",
        "専属看護師によるサポート"
      ],
      recommended: false,
      color: "purple"
    }
  ];

  const additionalServices = [
    { name: "初回カウンセリング", price: "無料", note: "※治療開始の場合" },
    { name: "血液検査", price: "15,000円", note: "" },
    { name: "追加エクソソーム（1回分）", price: "68,000円", note: "" },
    { name: "フォローアップ相談", price: "5,000円", note: "※コース料金に含まれない場合" }
  ];

  const getColorClasses = (color: string, recommended: boolean) => {
    if (recommended) {
      return {
        card: "bg-gradient-to-br from-green-500 to-emerald-600 text-white",
        badge: "bg-white text-green-600",
        button: "bg-white text-green-600 hover:bg-gray-50"
      };
    }
    const colorMap = {
      blue: {
        card: "bg-white border-2 border-blue-200",
        badge: "bg-blue-100 text-blue-600",
        button: "bg-blue-600 text-white hover:bg-blue-700"
      },
      purple: {
        card: "bg-white border-2 border-purple-200", 
        badge: "bg-purple-100 text-purple-600",
        button: "bg-purple-600 text-white hover:bg-purple-700"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            患者様のニーズに合わせた3つのコースをご用意しております
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.recommended);
            return (
              <div key={index} className={`rounded-2xl p-8 shadow-lg relative ${colors.card}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`px-6 py-2 rounded-full text-sm font-semibold ${colors.badge}`}>
                      おすすめ
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    ¥{plan.price}
                  </div>
                  <div className={`text-sm ${plan.recommended ? 'text-green-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </div>
                  <p className={`mt-4 ${plan.recommended ? 'text-green-100' : 'text-gray-700'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${plan.recommended ? 'bg-white/20' : 'bg-green-100'}`}>
                        <i className={`ri-check-line text-sm ${plan.recommended ? 'text-white' : 'text-green-600'}`}></i>
                      </div>
                      <span className={`${plan.recommended ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${colors.button}`}
                >
                  相談・予約する
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            オプション・追加サービス
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {service.price}
                </div>
                {service.note && (
                  <div className="text-sm text-gray-600">
                    {service.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            お支払い方法
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <i className="ri-bank-card-line text-white"></i>
              </div>
              <span>各種クレジットカード</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <i className="ri-bank-line text-white"></i>
              </div>
              <span>銀行振込</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <i className="ri-calendar-line text-white"></i>
              </div>
              <span>分割払い相談可能</span>
            </div>
          </div>
          <p className="text-center mt-6 text-blue-100">
            ※保険適用外の自由診療となります。分割払いについては個別にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}