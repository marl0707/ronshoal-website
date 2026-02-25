'use client';

export default function Effects() {
  return (
    <section id="effects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            期待できる効果
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            骨髄由来エクソソーム療法による美容効果と治療効果をご紹介します
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <i className="ri-star-line text-2xl text-pink-600"></i>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">美容効果</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-skin-line text-lg text-pink-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">肌質改善</h4>
                <p className="text-gray-700">
                  コラーゲン生成促進により、肌のハリと弾力が向上し、きめ細やかな肌質へ
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-time-line text-lg text-pink-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">シワ・たるみ改善</h4>
                <p className="text-gray-700">
                  細胞レベルでの修復により、加齢による肌の変化を根本からケア
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-sun-line text-lg text-pink-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">美白効果</h4>
                <p className="text-gray-700">
                  メラニン生成の抑制と細胞のターンオーバー促進により、透明感のある肌へ
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-plant-line text-lg text-pink-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">毛髪健康促進</h4>
                <p className="text-gray-700">
                  毛根の健康状態を改善し、髪のボリュームとツヤの向上をサポート
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="ri-health-book-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">治療効果</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-shield-line text-lg text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">抗炎症作用</h4>
                <p className="text-gray-700">
                  慢性的な炎症を抑制し、組織の健康状態を改善
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-refresh-line text-lg text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">組織修復・再生促進</h4>
                <p className="text-gray-700">
                  損傷した組織の修復を促進し、自然治癒力を高める
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-heart-pulse-line text-lg text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">免疫調整作用</h4>
                <p className="text-gray-700">
                  免疫システムのバランスを整え、全身の健康状態を向上
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-battery-charge-line text-lg text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">慢性疲労改善</h4>
                <p className="text-gray-700">
                  細胞のエネルギー代謝を改善し、疲労感の軽減をサポート
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            個人差について
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            効果には個人差があり、すべての方に同様の効果が保証されるものではありません。
            治療前のカウンセリングで、患者様の状態に応じた適切な治療計画をご提案いたします。
            また、既存の疾患がある場合は、事前に医師にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}