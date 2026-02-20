'use client';

export default function LineRegistration() {
  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-line-fill text-green-600 text-4xl"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              公式LINE登録
            </h2>
            <p className="text-lg text-gray-600">
              24時間いつでも、お気軽にご相談ください
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 md:order-1">
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  LINEでできること
                </h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-camera-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">写真で症状相談</h4>
                    <p className="text-gray-600 text-sm">お子様の足の写真を送っていただければ、専門スタッフがアドバイスいたします</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-question-answer-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">無料相談・質問</h4>
                    <p className="text-gray-600 text-sm">インソールや制度について、どんな小さなことでもお気軽にご質問ください</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-information-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">お得な情報配信</h4>
                    <p className="text-gray-600 text-sm">制度改正情報や健康に関する有益な情報をお届けします</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-calendar-line text-orange-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">予約・相談日程調整</h4>
                    <p className="text-gray-600 text-sm">クリニック受診の予約や相談日程をスムーズに調整できます</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-6">
                  <img 
                    src="https://readdy.ai/api/search-image?query=QR%20code%20for%20LINE%20registration%2C%20clean%20white%20background%2C%20mobile%20phone%20scanning%20QR%20code%2C%20simple%20modern%20design%2C%20clear%20and%20readable%20QR%20code%2C%20professional%20business%20style%2C%20green%20LINE%20colors&width=300&height=300&seq=qr1&orientation=squarish"
                    alt="LINE登録QRコード"
                    className="w-48 h-48 mx-auto mb-4 border-4 border-white rounded-2xl shadow-lg"
                  />
                  <p className="text-sm text-gray-600">QRコードを読み取って登録</p>
                </div>
                
                <button 
                  onClick={handleLineCTA}
                  className="!rounded-button w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-line-fill mr-3 text-xl"></i>
                  今すぐ登録して相談開始
                </button>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-400">
            <div className="flex items-center gap-3 mb-3">
              <i className="ri-gift-line text-yellow-600 text-2xl"></i>
              <h4 className="font-bold text-yellow-800">登録特典</h4>
            </div>
            <p className="text-gray-700 text-sm">
              LINE登録いただいた方には、足の健康チェックシートと正しい靴の選び方ガイドを無料プレゼント！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}