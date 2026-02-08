'use client';

export default function InsoleEffects() {
  const effects = [
    {
      title: "変形矯正",
      description: "足の形を正しい状態に導きます",
      icon: "ri-foot-print-line",
      color: "bg-blue-100 text-blue-600",
      image: "Medical orthotic insole showing foot correction, anatomical diagram, professional medical illustration, before and after comparison, foot alignment improvement, clean white background, detailed side view"
    },
    {
      title: "アーチ形成",
      description: "足のアーチを適切にサポートします",
      icon: "ri-mountain-line",
      color: "bg-green-100 text-green-600",
      image: "Foot arch support illustration, medical diagram showing proper arch formation, orthotic insole cross-section, anatomical accuracy, professional healthcare visualization, clean medical background"
    },
    {
      title: "バランス改善",
      description: "全身のバランスを整えます",
      icon: "ri-balance-line",
      color: "bg-purple-100 text-purple-600",
      image: "Child with improved posture and balance, before and after comparison, better body alignment, healthy stance, professional medical photography, clean bright background, positive transformation"
    },
    {
      title: "運動能力向上",
      description: "基本的な運動能力が向上します",
      icon: "ri-run-line",
      color: "bg-orange-100 text-orange-600",
      image: "Children running with improved athletic performance, dynamic sports action, better movement mechanics, active kids playing, bright outdoor setting, high energy positive mood"
    },
    {
      title: "スポーツパフォーマンス向上",
      description: "競技での成績向上が期待できます",
      icon: "ri-trophy-line",
      color: "bg-red-100 text-red-600",
      image: "Young athlete with enhanced sports performance, soccer football action shot, improved agility and movement, competitive sports scene, dynamic athletic photography, winner celebration"
    },
    {
      title: "疲労軽減",
      description: "足の疲れを軽減し、長時間の活動が可能になります",
      icon: "ri-battery-charge-line",
      color: "bg-teal-100 text-teal-600",
      image: "Happy energetic children playing actively, reduced fatigue, longer play time, joyful outdoor activities, vibrant energy, kids having fun without tiredness, bright cheerful atmosphere"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            インソールの効果
          </h2>
          <p className="text-lg text-gray-600">
            オーダーメイドインソールがもたらす6つの効果
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {effects.map((effect, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Beffect.image%7D&width=400&height=200&seq=effect${index}&orientation=landscape`}
                  alt={effect.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${effect.color} rounded-full flex items-center justify-center`}>
                    <i className={`${effect.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {effect.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {effect.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              お子様の将来の健康への投資
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              オーダーメイドインソールは、お子様の現在の症状を改善するだけでなく、<br />
              将来の健康な体づくりの基盤となります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}