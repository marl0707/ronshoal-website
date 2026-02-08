'use client';

export default function AboutExosome() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            エクソソームについて
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            細胞間の情報伝達を担う重要な物質について詳しくご説明します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              骨髄由来エクソソームとは
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                エクソソームは、細胞から分泌される直径30-150nmの小さな細胞外小胞です。
                細胞間の情報伝達を担い、タンパク質、RNA、脂質などの生体分子を運搬します。
              </p>
              <p>
                特に骨髄由来のエクソソームには、幹細胞から分泌される貴重な成長因子や
                抗炎症物質が豊富に含まれており、組織の修復と再生を促進する効果が期待されています。
              </p>
              <p>
                当クリニックでは、患者様ご自身の骨髄から抽出したエクソソームを使用することで、
                アレルギー反応のリスクを最小限に抑えた安全な治療を提供しています。
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=scientific%20illustration%20of%20exosomes%20and%20cellular%20communication%2C%20medical%20diagram%20showing%20bone%20marrow%20derived%20exosomes%2C%20clean%20white%20background%20with%20blue%20accents%2C%20professional%20medical%20illustration%20style%2C%20molecular%20biology%20visualization%2C%20stem%20cell%20research%20imagery&width=600&height=400&seq=exosome-diagram&orientation=landscape"
              alt="エクソソームの構造図"
              className="rounded-2xl shadow-lg w-full h-auto object-cover object-top"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            他のエクソソームとの違い
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">高い安全性</h4>
              <p className="text-gray-700">
                自己由来のため、アレルギー反応や拒絶反応のリスクが極めて低く、安心して治療を受けられます。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-microscope-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">豊富な成長因子</h4>
              <p className="text-gray-700">
                骨髄幹細胞由来のため、組織修復に必要な様々な成長因子と抗炎症物質を高濃度で含有しています。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">厳格な品質管理</h4>
              <p className="text-gray-700">
                医療グレードの設備で抽出・精製を行い、品質と安全性を徹底的に管理しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}