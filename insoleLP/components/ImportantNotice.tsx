'use client';

export default function ImportantNotice() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-orange-400">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="ri-error-warning-line text-orange-600 text-2xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-800">
              重要なお知らせ
            </h2>
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              知らなかった！
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <i className="ri-gift-line text-blue-600"></i>
                小児医療費助成が使えます
              </h3>
              <p className="text-gray-700 leading-relaxed">
                多くの保護者様が知らない制度ですが、医師の診断によるオーダーメイドインソールは小児医療費助成の対象となります。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  40,000〜50,000円
                </div>
                <p className="text-gray-700 font-semibold">通常の製作費用</p>
                <i className="ri-arrow-down-line text-4xl text-gray-400 my-4"></i>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  実質500円程度
                </div>
                <p className="text-gray-700 font-semibold">医療費助成適用後</p>
                <p className="text-sm text-gray-500 mt-2">（大阪市の例）</p>
              </div>
            </div>

            <div className="bg-green-100 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-bold text-green-800 mb-2">対象年齢</h4>
              <div className="text-3xl font-bold text-green-700">0〜18歳</div>
              <p className="text-gray-600 mt-2">※地域により制度内容が異なります</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}