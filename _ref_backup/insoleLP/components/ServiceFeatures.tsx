
'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-message-3-line',
      title: 'LINE相談',
      description: '24時間いつでも無料相談可能',
      detail: '気になることはいつでもお気軽にご相談ください',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: '医療費助成対応',
      description: '各地域の制度に詳しいスタッフがサポート',
      detail: '小児医療費助成制度を最大限活用します',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'ri-trophy-line',
      title: 'スポーツ対応',
      description: '各競技に特化したインソールも作成可能',
      detail: 'サッカー・野球・ラグビー等、競技特性に合わせて製作',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          選ばれる3つの理由
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${feature.icon} text-3xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {feature.title}
              </h3>
              
              <p className="text-lg font-semibold text-center mb-4 text-blue-600">
                {feature.description}
              </p>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
