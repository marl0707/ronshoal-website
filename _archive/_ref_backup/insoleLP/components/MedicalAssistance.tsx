'use client';

export default function MedicalAssistance() {
  return (
    <section id="assistance" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            医療費助成制度について
          </h2>
          <p className="text-lg text-gray-600">
            小児医療費助成制度を活用して、大幅な費用削減が可能です
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">大阪市の例</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">通常の製作費用</div>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    40,000〜50,000円
                  </div>
                  <div className="text-gray-700">保険適用前</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-green-400">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">助成制度適用後</div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    実質500〜1,000円
                  </div>
                  <div className="text-gray-700">お客様負担額</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i className="ri-information-line text-blue-600"></i>
              助成制度の仕組み
            </h4>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                <p>医師の診断により保険適応となった治療用装具が対象</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                <p>18歳以下（高校3年生まで）のお子様が対象</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-green-600 text-xl mt-1"></i>
                <p>自治体の小児医療費助成制度により自己負担額が大幅に削減</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-400">
            <div className="flex items-start gap-3">
              <i className="ri-error-warning-line text-yellow-600 text-xl mt-1"></i>
              <div>
                <h5 className="font-bold text-yellow-800 mb-2">重要な注意事項</h5>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 助成制度の内容は地域により異なります</li>
                  <li>• 自治体によって対象年齢や助成額が違います</li>
                  <li>• 詳細は各自治体にお問い合わせください</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
              <i className="ri-map-pin-line text-blue-600"></i>
              対応地域例
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                大阪市・大阪府内
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                神戸市・兵庫県内
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                京都市・京都府内
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                その他関西圏
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              <i className="ri-time-line text-green-600"></i>
              申請手続き
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                書類準備は当クリニックが対応
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                保険組合への申請もサポート
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                面倒な手続きはお任せください
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}