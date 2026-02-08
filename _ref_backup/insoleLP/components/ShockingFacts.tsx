'use client';

export default function ShockingFacts() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-6 py-3 rounded-full font-bold text-lg mb-6">
              <i className="ri-alarm-warning-line text-2xl"></i>
              衝撃の事実
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
              小学生の40％以上に
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              足部変形があります
            </h3>
            
            <div className="relative max-w-2xl mx-auto mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Medical%20infographic%20showing%20foot%20problems%20in%20children%2C%20statistical%20chart%20with%2040%25%20highlighted%2C%20professional%20medical%20illustration%2C%20clean%20white%20background%2C%20data%20visualization%2C%20healthcare%20statistics%2C%20pediatric%20foot%20deformities%2C%20educational%20diagram&width=600&height=300&seq=stats1&orientation=landscape"
                alt="小学生の足部変形統計"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-unfollow-line text-red-600 text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-red-800 mb-2">姿勢悪化</h4>
              <p className="text-gray-600">足の問題が全身の姿勢に影響します</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-speed-down-line text-orange-600 text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-orange-800 mb-2">運動能力低下</h4>
              <p className="text-gray-600">スポーツパフォーマンスが下がります</p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-yellow-600 text-2xl"></i>
              </div>
              <h4 className="text-lg font-bold text-yellow-800 mb-2">転倒リスク増加</h4>
              <p className="text-gray-600">ケガをしやすくなります</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              早期対応で将来の問題を予防できます
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              足の問題は放置すると悪化し、将来的により深刻な症状につながる可能性があります。<br />
              今のうちに適切な対処をすることで、お子様の健やかな成長をサポートできます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}