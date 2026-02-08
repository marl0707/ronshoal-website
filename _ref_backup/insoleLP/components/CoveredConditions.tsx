'use client';

export default function CoveredConditions() {
  const conditions = [
    { name: "扁平足", icon: "ri-foot-print-line", color: "bg-blue-100 text-blue-600" },
    { name: "外反母趾", icon: "ri-arrow-right-line", color: "bg-green-100 text-green-600" },
    { name: "ハイアーチ", icon: "ri-mountain-line", color: "bg-purple-100 text-purple-600" },
    { name: "タコ・ウオノメ", icon: "ri-close-circle-line", color: "bg-red-100 text-red-600" },
    { name: "モートン病", icon: "ri-pulse-line", color: "bg-orange-100 text-orange-600" },
    { name: "足底腱膜炎", icon: "ri-heart-pulse-line", color: "bg-pink-100 text-pink-600" },
    { name: "スポーツ障害", icon: "ri-football-line", color: "bg-indigo-100 text-indigo-600" },
    { name: "成長痛", icon: "ri-seedling-line", color: "bg-teal-100 text-teal-600" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            保険適応疾患
          </h2>
          <p className="text-lg text-gray-600">
            医師の診断により、以下のような症状で保険適応となります
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className={`w-16 h-16 ${condition.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${condition.icon} text-2xl`}></i>
              </div>
              <h3 className="font-bold text-gray-800 text-lg">
                {condition.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-blue-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              医師の診断による正式な医療行為
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              当サービスは医療機関と連携し、専門医による診断を基に保険適応のオーダーメイドインソールを製作いたします。<br />
              適切な診断と治療により、お子様の足の健康をしっかりとサポートします。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 inline-block">
            <p className="text-sm text-gray-600 mb-2">※症状により保険適応とならない場合があります</p>
            <p className="text-sm text-gray-600">まずはお気軽にご相談ください</p>
          </div>
        </div>
      </div>
    </section>
  );
}