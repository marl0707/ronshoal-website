'use client';

export default function DoctorIntro() {
  const doctors = [
    {
      name: "田中 健一",
      title: "院長・再生医療専門医",
      specialties: ["再生医療", "細胞治療", "エクソソーム療法"],
      experience: "15年",
      credentials: [
        "日本再生医療学会認定医",
        "日本細胞治療学会専門医", 
        "医学博士（東京大学）",
        "米国スタンフォード大学留学経験"
      ],
      description: "再生医療の分野で15年以上の豊富な経験を持つ専門医。特にエクソソーム療法の臨床応用において国内の第一人者として活躍。患者様一人ひとりに最適な治療を提供することを信念としています。"
    },
    {
      name: "佐藤 美穂",
      title: "副院長・美容再生医療専門医",
      specialties: ["美容再生医療", "アンチエイジング", "皮膚再生"],
      experience: "12年",
      credentials: [
        "日本美容外科学会専門医",
        "日本抗加齢医学会認定医",
        "医学博士（慶應義塾大学）",
        "国際美容医療学会認定医"
      ],
      description: "美容医療と再生医療を融合した治療を専門とし、自然で美しい仕上がりを追求。女性ならではの視点で、患者様の美容に関するお悩みに寄り添った治療を心がけています。"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            医師・スタッフ紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            豊富な経験と専門知識を持つ医師が、患者様お一人おひとりに最適な治療を提供いたします
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=professional%20Japanese%20doctor%20portrait%2C%20medical%20professional%20in%20white%20coat%2C%20confident%20and%20trustworthy%20appearance%2C%20clean%20medical%20background%2C%20healthcare%20professional%20headshot%2C%20doctor%20in%20clinical%20setting&width=200&height=250&seq=doctor-${index}&orientation=portrait`}
                    alt={doctor.name}
                    className="w-32 h-40 rounded-xl object-cover object-top shadow-md"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {doctor.title}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">専門分野</div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {doctor.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">臨床経験</div>
                    <div className="font-semibold text-gray-900">{doctor.experience}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">資格・認定</h4>
                  <ul className="space-y-1">
                    {doctor.credentials.map((credential, credIndex) => (
                      <li key={credIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">メッセージ</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {doctor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            クリニックの理念
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">患者様第一</h4>
              <p className="text-gray-700">
                患者様の健康と美しさを第一に考え、一人ひとりに最適な治療を提供することをお約束いたします。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">安全性の追求</h4>
              <p className="text-gray-700">
                最新の医療技術と厳格な品質管理により、安全で効果的な治療の提供に努めています。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-purple-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">革新的治療</h4>
              <p className="text-gray-700">
                常に最先端の再生医療技術を取り入れ、より良い治療法の開発と実践に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}