'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "田中さま",
      age: "お子様: 8歳",
      comment: "転びやすかった息子が、インソールを使い始めてから転ぶことがほとんどなくなりました。姿勢も良くなって、本当に感謝しています。",
      rating: 5,
      issue: "転倒・姿勢改善"
    },
    {
      name: "佐藤さま", 
      age: "お子様: 12歳",
      comment: "サッカーをしている娘のために作りました。足の痛みがなくなり、プレーも向上しています。医療費助成で負担が少なかったのも助かりました。",
      rating: 5,
      issue: "スポーツパフォーマンス向上"
    },
    {
      name: "山田さま",
      age: "お子様: 6歳",
      comment: "扁平足で心配していましたが、インソールのおかげで足のアーチが形成されてきました。子どもも「歩きやすい」と言っています。",
      rating: 5,
      issue: "扁平足改善"
    },
    {
      name: "鈴木さま",
      age: "お子様: 14歳",
      comment: "バスケットボール部の息子が成長痛で悩んでいましたが、専用のインソールで痛みが軽減されました。部活動も続けられています。",
      rating: 5,
      issue: "成長痛・スポーツ障害"
    },
    {
      name: "高橋さま",
      age: "お子様: 10歳",
      comment: "靴の減り方が左右で違っていたのが気になっていました。インソールを使ってから歩き方が改善され、靴も均等に減るようになりました。",
      rating: 5,
      issue: "歩行バランス改善"
    },
    {
      name: "渡辺さま",
      age: "お子様: 7歳",
      comment: "実質500円程度の負担で済んだのに驚きました。効果も素晴らしく、娘の足の疲れやすさが改善されました。もっと早く知りたかったです。",
      rating: 5,
      issue: "疲労軽減・費用満足"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            保護者の皆様の声
          </h2>
          <p className="text-lg text-gray-600">
            実際にご利用いただいた保護者様からの喜びの声をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.age}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>

              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                {testimonial.issue}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-heart-line text-green-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">満足度</h3>
                <div className="text-4xl font-bold text-green-600">98%</div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg">
              多くの保護者様とお子様にご満足いただいています
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}