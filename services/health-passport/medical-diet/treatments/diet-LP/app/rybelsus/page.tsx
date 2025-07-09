'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RybelsusPage() {
  const [activeTab, setActiveTab] = useState('effect');

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-green-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Medical%20oral%20medication%20pills%20in%20clean%20medical%20environment%2C%20white%20tablets%20in%20professional%20healthcare%20setting%2C%20pharmaceutical%20medicine%20on%20clinical%20table%2C%20modern%20medical%20facility%20background%2C%20clean%20sterile%20environment%2C%20professional%20healthcare%20photography%2C%20bright%20medical%20lighting%2C%20high-quality%20pharmaceutical%20image&width=1200&height=600&seq=rybelsus-hero&orientation=landscape"
            alt="リベルサス経口薬"
            className="w-full h-full object-cover object-center opacity-80"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/40 to-green-500/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            リベルサス<br />
            <span className="text-2xl">注射不要の経口GLP-1薬</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            世界初の経口GLP-1受容体作動薬。注射が苦手な方でも安心して続けられます。
          </p>
          <button className="!rounded-button bg-white text-teal-600 px-8 py-4 text-lg font-semibold hover:bg-teal-50 transition-colors">
            公式LINEで相談する
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-capsule-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">経口薬で手軽</h3>
              <p className="text-gray-600">
                毎日1回、起床時に服用するだけ。注射の必要がありません。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">確実な減量効果</h3>
              <p className="text-gray-600">
                臨床試験で平均6.5%の体重減少を実証。食欲を自然に抑制します。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">安全性の高さ</h3>
              <p className="text-gray-600">
                世界中で使用されている安全な薬剤。医師の管理下で安心して使用できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('effect')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'effect'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                効果・メカニズム
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'usage'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                服用方法
              </button>
              <button
                onClick={() => setActiveTab('price')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'price'
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                料金プラン
              </button>
            </div>
          </div>

          {/* Effect Tab */}
          {activeTab === 'effect' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">リベルサスの作用メカニズム</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">GLP-1受容体作動薬として</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-teal-600 mr-2 mt-1"></i>
                      <span>満腹中枢に作用し、食欲を自然に抑制</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-teal-600 mr-2 mt-1"></i>
                      <span>胃の排出を遅らせ、満腹感を持続</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-teal-600 mr-2 mt-1"></i>
                      <span>血糖値の上昇を緩やかにし、脂肪蓄積を抑制</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">臨床試験の結果</h4>
                  <div className="bg-teal-50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-teal-600 mb-2">平均6.5%</div>
                    <p className="text-gray-600 mb-4">16週間で達成した体重減少率</p>
                    <div className="text-sm text-gray-500">
                      ※個人差があります。医師の指導のもと適切に使用してください。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Usage Tab */}
          {activeTab === 'usage' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">正しい服用方法</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">起床時に服用</h4>
                    <p className="text-gray-600">
                      朝起きてすぐ、空腹時に服用します。食事や他の薬の30分以上前に服用してください。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">水で服用</h4>
                    <p className="text-gray-600">
                      コップ半分程度（約120ml）の水で服用。他の飲み物では効果が減少する可能性があります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">段階的な増量</h4>
                    <p className="text-gray-600">
                      3mg→7mg→14mgと段階的に増量。医師の指示に従って調整します。
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-yellow-50 rounded-xl">
                <p className="text-sm text-yellow-800">
                  <i className="ri-alert-line mr-2"></i>
                  服用を忘れた場合は、その日は服用せず、翌日から通常通り服用してください。
                </p>
              </div>
            </div>
          )}

          {/* Price Tab */}
          {activeTab === 'price' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">料金プラン</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">3mg（初回用量）</h4>
                  <div className="text-3xl font-bold text-teal-600 mb-4">月額 8,000円</div>
                  <p className="text-sm text-gray-600">初めての方向け</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-6 text-center border-2 border-teal-600">
                  <div className="bg-teal-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                    人気No.1
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">7mg（標準用量）</h4>
                  <div className="text-3xl font-bold text-teal-600 mb-4">月額 10,000円</div>
                  <p className="text-sm text-gray-600">多くの方が効果を実感</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">14mg（最大用量）</h4>
                  <div className="text-3xl font-bold text-teal-600 mb-4">月額 15,000円</div>
                  <p className="text-sm text-gray-600">より強い効果を希望の方</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  ※すべて税込価格です<br />
                  ※初診料・再診料は無料です
                </p>
                <button className="!rounded-button bg-teal-600 text-white px-8 py-4 text-lg font-semibold hover:bg-teal-700 transition-colors">
                  料金シミュレーションを試す
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            注射が苦手な方も安心して始められます
          </h2>
          <p className="text-xl mb-8 opacity-90">
            まずは無料相談で、あなたに最適な治療プランをご提案します
          </p>
          <button className="!rounded-button bg-white text-teal-600 px-8 py-4 text-lg font-semibold hover:bg-teal-50 transition-colors">
            無料オンライン相談を予約
          </button>
        </div>
      </section>

      {/* Back to Top */}
      <div className="text-center py-8">
        <Link href="/">
          <span className="text-gray-600 hover:text-teal-600 transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            トップページに戻る
          </span>
        </Link>
      </div>
    </div>
  );
}