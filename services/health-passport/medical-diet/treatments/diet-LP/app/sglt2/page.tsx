'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SGLT2Page() {
  const [activeTab, setActiveTab] = useState('mechanism');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20pharmaceutical%20pills%20and%20tablets%20in%20medical%20laboratory%2C%20green%20accent%20lighting%2C%20clinical%20research%20environment%2C%20professional%20healthcare%20setting%2C%20scientific%20medical%20background%2C%20clean%20sterile%20pharmaceutical%20facility%2C%20high-tech%20medical%20equipment%2C%20bright%20modern%20laboratory&width=1200&height=600&seq=sglt2-hero&orientation=landscape"
            alt="SGLT2阻害薬"
            className="w-full h-full object-cover object-center opacity-80"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-emerald-500/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SGLT2阻害薬<br />
            <span className="text-2xl">糖を排出する新しいアプローチ</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            余分な糖を尿中に排出。自然な体重減少とともに、心血管保護効果も期待できます。
          </p>
          <button className="!rounded-button bg-white text-green-600 px-8 py-4 text-lg font-semibold hover:bg-green-50 transition-colors">
            公式LINEで相談する
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-flash-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">糖の排出</h3>
              <p className="text-gray-600">
                1日あたり約70gの糖を尿中に排出。カロリー制限なしで減量効果。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">心血管保護</h3>
              <p className="text-gray-600">
                心疾患リスクを低減。血圧低下効果も期待できます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">経済的</h3>
              <p className="text-gray-600">
                月額10,000円で継続可能。コストパフォーマンスに優れた選択肢。
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
                onClick={() => setActiveTab('mechanism')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'mechanism'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                作用メカニズム
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'benefits'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                期待できる効果
              </button>
              <button
                onClick={() => setActiveTab('safety')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'safety'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                安全性・注意点
              </button>
            </div>
          </div>

          {/* Mechanism Tab */}
          {activeTab === 'mechanism' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">SGLT2阻害薬の作用メカニズム</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">腎臓での糖再吸収を阻害</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-600 mr-2 mt-1"></i>
                      <span>腎臓のSGLT2タンパクをブロック</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-600 mr-2 mt-1"></i>
                      <span>血糖値に関係なく糖を排出</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-600 mr-2 mt-1"></i>
                      <span>1日約280kcal相当の糖を排出</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">排出される糖の量</h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">約70g/日</div>
                    <p className="text-gray-600">
                      ごはん茶碗1.5杯分に相当
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-sm text-gray-500">
                      ※個人差があります
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">期待できる効果</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    <i className="ri-scales-3-line text-green-600 mr-2"></i>
                    体重減少効果
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 平均3-5%の体重減少</li>
                    <li>• 内臓脂肪の優先的な減少</li>
                    <li>• リバウンドしにくい体質へ</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    <i className="ri-heart-3-line text-blue-600 mr-2"></i>
                    心血管保護効果
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 心不全リスクの低減</li>
                    <li>• 血圧低下効果</li>
                    <li>• 動脈硬化の進行抑制</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    <i className="ri-shield-star-line text-purple-600 mr-2"></i>
                    その他の効果
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 腎機能保護効果</li>
                    <li>• 尿酸値の低下</li>
                    <li>• 脂肪肝の改善</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    <i className="ri-time-line text-orange-600 mr-2"></i>
                    効果発現時期
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1週間：尿量増加を実感</li>
                    <li>• 1ヶ月：体重減少開始</li>
                    <li>• 3ヶ月：明確な効果を実感</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Safety Tab */}
          {activeTab === 'safety' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">安全性と注意点</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">主な副作用</h4>
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <i className="ri-alert-line text-yellow-600 mr-2 mt-1"></i>
                        <div>
                          <span className="font-semibold">頻尿・多尿</span>
                          <p className="text-sm mt-1">糖の排出に伴い尿量が増加します。十分な水分補給を心がけてください。</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-alert-line text-yellow-600 mr-2 mt-1"></i>
                        <div>
                          <span className="font-semibold">尿路感染症</span>
                          <p className="text-sm mt-1">尿中の糖分により感染リスクが上昇。清潔を保つことが重要です。</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-alert-line text-yellow-600 mr-2 mt-1"></i>
                        <div>
                          <span className="font-semibold">脱水症状</span>
                          <p className="text-sm mt-1">特に夏場は注意が必要。こまめな水分補給を行ってください。</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">使用上の注意</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-sm text-green-800">
                        <i className="ri-checkbox-circle-fill mr-2"></i>
                        定期的な検査で腎機能をチェック
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-sm text-green-800">
                        <i className="ri-checkbox-circle-fill mr-2"></i>
                        1日1.5L以上の水分摂取を推奨
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-sm text-green-800">
                        <i className="ri-checkbox-circle-fill mr-2"></i>
                        陰部の清潔を保つ
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <p className="text-sm text-green-800">
                        <i className="ri-checkbox-circle-fill mr-2"></i>
                        体調変化時は医師に相談
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">料金プラン</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-green-600 mb-2">月額 10,000円</div>
              <p className="text-gray-600">（税込）</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">料金に含まれるもの</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-green-600 mr-2"></i>
                    SGLT2阻害薬（30日分）
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-green-600 mr-2"></i>
                    医師によるオンライン診察
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-green-600 mr-2"></i>
                    定期的な健康チェック
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-green-600 mr-2"></i>
                    24時間LINEサポート
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">お支払い方法</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-bank-card-line text-green-600 mr-2"></i>
                    クレジットカード
                  </li>
                  <li className="flex items-center">
                    <i className="ri-smartphone-line text-green-600 mr-2"></i>
                    スマホ決済（PayPay、LINE Pay）
                  </li>
                  <li className="flex items-center">
                    <i className="ri-bank-line text-green-600 mr-2"></i>
                    銀行振込
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            コスパ重視の医療ダイエットを始めましょう
          </h2>
          <p className="text-xl mb-8 opacity-90">
            まずは無料相談で、SGLT2阻害薬があなたに適しているか診断します
          </p>
          <button className="!rounded-button bg-white text-green-600 px-8 py-4 text-lg font-semibold hover:bg-green-50 transition-colors">
            無料オンライン相談を予約
          </button>
        </div>
      </section>

      {/* Back to Top */}
      <div className="text-center py-8">
        <Link href="/">
          <span className="text-gray-600 hover:text-green-600 transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            トップページに戻る
          </span>
        </Link>
      </div>
    </div>
  );
}