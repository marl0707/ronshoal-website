'use client';

export default function SpecialContent() {
  const presents = [
    {
      title: "足の健康チェックシート",
      description: "お子様の足の状態を簡単にチェックできるシートです。日常的な観察ポイントがわかります。",
      icon: "ri-file-list-3-line",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "正しい靴の選び方ガイド",
      description: "成長期のお子様に適した靴選びのポイントを詳しく解説したガイドブックです。",
      icon: "ri-footprint-line",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "スポーツ別インソール活用ガイド",
      description: "各スポーツ競技に応じたインソールの効果的な活用方法をご紹介します。",
      icon: "ri-trophy-line",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
            <i className="ri-gift-line text-2xl"></i>
            LINE登録限定プレゼント
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            特別コンテンツを無料プレゼント
          </h2>
          <p className="text-lg text-gray-600">
            お子様の足の健康をサポートする貴重な情報をお届けします
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {presents.map((present, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                  FREE
                </div>
              </div>
              
              <div className={`w-16 h-16 ${present.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${present.icon} text-3xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {present.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {present.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="ri-download-line"></i>
                  <span>PDF形式でダウンロード可能</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-gift-2-line text-white text-3xl"></i>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                今だけの特別プレゼント
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                この3つの貴重な資料を、LINE登録いただいた方全員に無料でプレゼントしています。<br />
                お子様の足の健康づくりに、今すぐお役立てください。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <i className="ri-time-line text-red-500 text-2xl"></i>
                <span className="text-lg font-semibold text-red-600">期間限定</span>
              </div>
              <p className="text-gray-600">
                このプレゼント企画は予告なく終了する場合があります。<br />
                ぜひお早めにご登録ください。
              </p>
            </div>

            <button 
              onClick={handleLineCTA}
              className="!rounded-button bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <i className="ri-line-fill mr-3 text-2xl"></i>
              今すぐ登録してプレゼントをもらう
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}