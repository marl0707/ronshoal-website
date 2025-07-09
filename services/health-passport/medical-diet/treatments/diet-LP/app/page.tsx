
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20medical%20consultation%20scene%2C%20modern%20doctor%20in%20white%20coat%20consulting%20with%20patient%20in%20bright%20contemporary%20clinic%2C%20medical%20equipment%20and%20technology%20in%20background%2C%20clean%20white%20medical%20environment%20with%20blue%20accents%2C%20soft%20professional%20lighting%2C%20healthcare%20professional%20setting%2C%20modern%20medical%20facility%20interior%2C%20consultation%20room%20with%20medical%20charts%20and%20equipment%2C%20professional%20healthcare%20atmosphere%2C%20high-quality%20medical%20photography&width=1200&height=600&seq=medical-hero-bg&orientation=landscape"
            alt="医療相談の様子"
            className="w-full h-full object-cover object-center opacity-80"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-teal-500/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            科学的根拠に基づく<br />次世代医療ダイエット
          </h1>
          <p className="text-xl mb-8 opacity-90">
            WHO認定の肥満治療法。医師の診断により、あなたに最適な治療法を提案します。
          </p>
          <button className="!rounded-button bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-colors">
            公式LINEに登録して予約する
          </button>
        </div>
      </section>

      {/* Medical Diet Explanation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">医療ダイエットとは？</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            WHOが肥満を「治療すべき疾患」と認定。従来のダイエット法とは異なり、 
            医学的アプローチで根本的な体質改善を目指します。
          </p>
        </div>
      </section>

      {/* Drug Cards Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            4つの治療薬から最適な選択を
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mounjaro */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                最も人気
              </div>
              <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/5ddc7f970653ea919bc08f9debfba94a.png"
                  alt="マンジャロ"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">マンジャロ</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">月額36,000円</p>
              <p className="text-sm text-gray-600 mb-4">
                最も効果的（平均20.9%減量）<br />
                週1回注射<br />
                最新の治療薬
              </p>
              <Link href="/mounjaro">
                <button className="!rounded-button w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition-colors">
                  マンジャロの詳細を見る
                </button>
              </Link>
            </div>

            {/* Rybelsus */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/4cf94c660d27d2b60e4b4eb4db0c7df0.webp"
                  alt="リベルサス"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">リベルサス</h3>
              <p className="text-2xl font-bold text-teal-600 mb-2">月額10,000円</p>
              <p className="text-sm text-gray-600 mb-4">
                経口薬で手軽<br />
                平均6.5%減量<br />
                注射が苦手な人向け
              </p>
              <Link href="/rybelsus">
                <button className="!rounded-button w-full bg-teal-600 text-white py-3 font-semibold hover:bg-teal-700 transition-colors">
                  リベルサスの詳細を見る
                </button>
              </Link>
            </div>

            {/* SGLT2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/6b30708cd60d1a908a835f55cb21ad65.webp"
                  alt="SGLT2阻害薬"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">SGLT2阻害薬</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">月額10,000円</p>
              <p className="text-sm text-gray-600 mb-4">
                糖を尿中に排出<br />
                平均3.5%減量<br />
                コスト重視の選択肢
              </p>
              <Link href="/sglt2">
                <button className="!rounded-button w-full bg-green-600 text-white py-3 font-semibold hover:bg-green-700 transition-colors">
                  SGLT2阻害薬の詳細を見る
                </button>
              </Link>
            </div>

            {/* Metformin */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://static.readdy.ai/image/e5f49f3025e99ae3c3b43b9bb0dffa79/7bc9ed9d0374857dbf8678da8d0a0c3f.webp"
                  alt="メトホルミン"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">メトホルミン</h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">月額5,000円</p>
              <p className="text-sm text-gray-600 mb-4">
                60年以上の実績<br />
                抗老化効果も期待<br />
                最も経済的な選択肢
              </p>
              <Link href="/metformin">
                <button className="!rounded-button w-full bg-purple-600 text-white py-3 font-semibold hover:bg-purple-700 transition-colors">
                  メトホルミンの詳細を見る
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'comparison'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                比較表
              </button>
              <button
                onClick={() => setActiveTab('combination')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'combination'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                併用療法
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          {activeTab === 'comparison' && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">治療薬</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">効果</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">投与方法</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">価格</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">即効性</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-blue-600">マンジャロ</td>
                      <td className="px-6 py-4 text-center">平均20.9%減量</td>
                      <td className="px-6 py-4 text-center">週1回注射</td>
                      <td className="px-6 py-4 text-center">36,000円/月</td>
                      <td className="px-6 py-4 text-center">★★★★★</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-teal-600">リベルサス</td>
                      <td className="px-6 py-4 text-center">平均6.5%減量</td>
                      <td className="px-6 py-4 text-center">毎日経口</td>
                      <td className="px-6 py-4 text-center">10,000円/月</td>
                      <td className="px-6 py-4 text-center">★★★★☆</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-green-600">SGLT2阻害薬</td>
                      <td className="px-6 py-4 text-center">平均3.5%減量</td>
                      <td className="px-6 py-4 text-center">毎日経口</td>
                      <td className="px-6 py-4 text-center">10,000円/月</td>
                      <td className="px-6 py-4 text-center">★★★☆☆</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-purple-600">メトホルミン</td>
                      <td className="px-6 py-4 text-center">抗老化効果</td>
                      <td className="px-6 py-4 text-center">毎日経口</td>
                      <td className="px-6 py-4 text-center">5,000円/月</td>
                      <td className="px-6 py-4 text-center">★★☆☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Combination Therapy */}
          {activeTab === 'combination' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                複数薬剤の組み合わせで相乗効果を実現
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    <i className="ri-star-fill text-yellow-500 mr-2"></i>
                    最強の組み合わせ
                  </h4>
                  <div className="text-lg font-semibold text-blue-600 mb-2">
                    マンジャロ + メトホルミン
                  </div>
                  <p className="text-gray-600 mb-4">
                    最高の減量効果と抗老化効果を同時に実現。医師の管理下で安全に併用できます。
                  </p>
                  <div className="text-sm text-gray-500">
                    併用価格：月額41,000円
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    <i className="ri-wallet-3-line text-green-500 mr-2"></i>
                    コスト重視の組み合わせ
                  </h4>
                  <div className="text-lg font-semibold text-teal-600 mb-2">
                    リベルサス + メトホルミン
                  </div>
                  <p className="text-gray-600 mb-4">
                    経口薬のみの組み合わせで、注射が苦手な方におすすめ。コストパフォーマンスも良好。
                  </p>
                  <div className="text-sm text-gray-500">
                    併用価格：月額15,000円
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            よくあるご質問
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">
                <i className="ri-question-line text-blue-600 mr-2"></i>
                副作用は大丈夫ですか？
              </h3>
              <p className="text-gray-600">
                すべて医師の管理下で使用する医薬品です。定期的な診察で副作用のチェックを行い、安全に治療を続けられます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">
                <i className="ri-question-line text-blue-600 mr-2"></i>
                保険は適用されますか？
              </h3>
              <p className="text-gray-600">
                現在、肥満治療薬は自由診療となっております。ただし、糖尿病の診断がある場合は一部保険適用となる場合があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            あなたに最適な医療ダイエットを始めませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            まずは無料オンライン相談で、専門医があなたの状況を詳しくお聞きします。
          </p>
          <button className="!rounded-button bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-colors">
            無料オンライン相談を予約する
          </button>
          <p className="mt-4 text-sm opacity-75">
            相談は完全無料・所要時間約15分
          </p>
        </div>
      </section>
    </div>
  );
}
