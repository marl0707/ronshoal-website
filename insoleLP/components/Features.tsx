'use client';

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            施術の特徴
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            当クリニックの骨髄由来エクソソーム療法が選ばれる理由
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-home-line text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              自己注射による利便性
            </h3>
            <p className="text-gray-700 leading-relaxed">
              ご自宅で注射が可能なため、頻繁な通院が不要。
              お忙しい方でも継続しやすい治療法です。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              高い安全性
            </h3>
            <p className="text-gray-700 leading-relaxed">
              自己由来の成分を使用し、厳格な品質管理のもとで製造。
              副作用のリスクを最小限に抑えます。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-user-settings-line text-3xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              個別カスタマイズ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              患者様の症状や希望に応じて、
              治療頻度や濃度を個別に調整いたします。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-leaf-line text-3xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              副作用が少ない
            </h3>
            <p className="text-gray-700 leading-relaxed">
              自然な細胞再生プロセスを促進するため、
              従来の治療法と比べて副作用が軽微です。
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            治療の安全性について
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-test-tube-line text-2xl text-red-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">厳格な検査</h4>
              <p className="text-gray-700">
                治療前の血液検査により、感染症の有無や適応を確認し、安全性を確保します。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-microscope-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">品質管理</h4>
              <p className="text-gray-700">
                クリーンルーム環境での抽出・精製により、医療グレードの品質を維持しています。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-2xl text-green-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">継続的サポート</h4>
              <p className="text-gray-700">
                治療期間中は定期的にフォローアップを行い、安全性と効果を確認します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}