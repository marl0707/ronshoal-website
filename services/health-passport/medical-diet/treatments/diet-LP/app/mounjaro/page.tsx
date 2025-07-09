'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MounjaroPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20medical%20injection%20pen%20for%20diabetes%20treatment%2C%20professional%20pharmaceutical%20product%20photography%2C%20clean%20white%20background%20with%20blue%20medical%20accents%2C%20high-tech%20medical%20device%2C%20precision%20injection%20technology%2C%20healthcare%20innovation%2C%20medical%20equipment%20close-up%2C%20pharmaceutical%20product%20design%2C%20clinical%20medical%20setting%2C%20professional%20medical%20photography%2C%20advanced%20diabetes%20treatment%20device&width=1200&height=600&seq=mounjaro-hero&orientation=landscape"
            alt="マンジャロ注射ペン"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-teal-500/70"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            最も人気の治療薬
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            マンジャロ<br />
            <span className="text-2xl md:text-3xl font-normal">（チルゼパチド）</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            平均20.9%の減量効果を実現する次世代GLP-1受容体作動薬
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="!rounded-button bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-colors">
              今すぐ診察予約
            </button>
            <Link href="/">
              <button className="!rounded-button border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                他の治療薬と比較
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            マンジャロの3つの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20weight%20loss%20scale%20with%20decreasing%20numbers%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20blue%20and%20teal%20gradient%20colors%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20modern%20healthcare%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20look%2C%20weight%20management%20concept&width=100&height=100&seq=weight-loss-icon&orientation=squarish"
                  alt="減量効果"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">圧倒的な減量効果</h3>
              <p className="text-gray-600">
                臨床試験で平均20.9%の体重減少を実現。他の治療薬を大きく上回る効果が証明されています。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20medical%20injection%20pen%20with%20weekly%20calendar%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20blue%20and%20white%20medical%20colors%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20medical%20device%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20look%2C%20weekly%20treatment%20concept&width=100&height=100&seq=weekly-injection-icon&orientation=squarish"
                  alt="週1回投与"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">週1回の簡単投与</h3>
              <p className="text-gray-600">
                毎日の服薬が不要。週に1回の注射で継続しやすく、忙しい方でも無理なく続けられます。
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20medical%20shield%20with%20safety%20checkmark%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20green%20and%20blue%20medical%20colors%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20medical%20safety%20aesthetic%2C%20high%20detail%20quality%2C%20clean%20look%2C%20safety%20and%20security%20concept&width=100&height=100&seq=safety-icon&orientation=squarish"
                  alt="安全性"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">高い安全性</h3>
              <p className="text-gray-600">
                FDA承認済みの安全な医薬品。医師の管理下で適切に使用することで、安心して治療を続けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8">
            <div className="flex bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-3 rounded-full font-semibold transition-colors text-sm md:text-base ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                概要・効果
              </button>
              <button
                onClick={() => setActiveTab('mechanism')}
                className={`px-4 py-3 rounded-full font-semibold transition-colors text-sm md:text-base ${
                  activeTab === 'mechanism'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                作用機序
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`px-4 py-3 rounded-full font-semibold transition-colors text-sm md:text-base ${
                  activeTab === 'usage'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                使用方法
              </button>
              <button
                onClick={() => setActiveTab('sideeffects')}
                className={`px-4 py-3 rounded-full font-semibold transition-colors text-sm md:text-base ${
                  activeTab === 'sideeffects'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                副作用
              </button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                マンジャロの概要と効果
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">基本情報</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong>一般名：</strong>チルゼパチド</li>
                    <li><strong>薬剤分類：</strong>GIP/GLP-1受容体作動薬</li>
                    <li><strong>投与方法：</strong>週1回皮下注射</li>
                    <li><strong>価格：</strong>月額36,000円</li>
                    <li><strong>FDA承認：</strong>2022年5月</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">臨床試験結果</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-blue-600">20.9%</div>
                      <div className="text-sm text-gray-600">平均体重減少率（72週間）</div>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-teal-600">91%</div>
                      <div className="text-sm text-gray-600">5%以上の減量達成者</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-green-600">69%</div>
                      <div className="text-sm text-gray-600">15%以上の減量達成者</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mechanism Tab */}
          {activeTab === 'mechanism' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                マンジャロの作用機序
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      二重受容体作動薬
                    </h4>
                    <p className="text-gray-600">
                      GIP受容体とGLP-1受容体の両方に作用する世界初の薬剤。単一受容体作動薬より高い効果を発揮します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      食欲抑制効果
                    </h4>
                    <p className="text-gray-600">
                      視床下部の満腹中枢に作用し、自然に食欲を抑制。無理な食事制限をしなくても摂取カロリーが減少します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      胃排出速度の抑制
                    </h4>
                    <p className="text-gray-600">
                      胃からの食物排出を遅らせることで満腹感を持続。少量の食事でも満足感を得られるようになります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      血糖値改善効果
                    </h4>
                    <p className="text-gray-600">
                      インスリン分泌を促進し、血糖値を改善。糖尿病の治療効果も期待できる多面的な薬剤です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Usage Tab */}
          {activeTab === 'usage' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                マンジャロの使用方法
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">投与スケジュール</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-800 mb-2">開始用量</div>
                      <div className="text-gray-600">2.5mg 週1回（4週間）</div>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-800 mb-2">維持用量</div>
                      <div className="text-gray-600">5mg〜15mg 週1回</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-800 mb-2">最大用量</div>
                      <div className="text-gray-600">15mg 週1回</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">投与方法</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-2"></i>
                      週1回、同じ曜日に注射
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-2"></i>
                      腹部、太もも、上腕のいずれかに皮下注射
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-2"></i>
                      食事の時間に関係なく投与可能
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-2"></i>
                      使い捨てペンで簡単に自己投与
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-500 mt-1 mr-2"></i>
                      冷蔵庫で保管（2-8℃）
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Side Effects Tab */}
          {activeTab === 'sideeffects' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                副作用について
              </h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex items-center mb-2">
                    <i className="ri-information-line text-yellow-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">重要な注意事項</span>
                  </div>
                  <p className="text-gray-600">
                    マンジャロは医師の処方が必要な医薬品です。定期的な診察を受けながら安全に使用してください。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-4">
                      <i className="ri-alert-line mr-2"></i>
                      主な副作用（発現頻度順）
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 悪心（吐き気）- 最も多い副作用</li>
                      <li>• 下痢</li>
                      <li>• 嘔吐</li>
                      <li>• 便秘</li>
                      <li>• 腹痛</li>
                      <li>• 食欲減退</li>
                      <li>• 消化不良</li>
                      <li>• 疲労感</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">
                      <i className="ri-heart-pulse-line mr-2"></i>
                      重篤な副作用（稀）
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 急性膵炎</li>
                      <li>• 胆嚢疾患</li>
                      <li>• 重篤な低血糖</li>
                      <li>• 腎機能障害</li>
                      <li>• アレルギー反応</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-700">
                        <i className="ri-warning-line mr-1"></i>
                        異常を感じた場合は直ちに医師に相談してください
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">副作用を軽減するために</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 少量から開始し、徐々に増量する</li>
                    <li>• 脂っこい食事や大量の食事を避ける</li>
                    <li>• 十分な水分摂取を心がける</li>
                    <li>• 定期的な医師の診察を受ける</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Price and Treatment Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Price */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <i className="ri-price-tag-3-line text-blue-600 mr-2"></i>
                料金体系
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-gray-800">マンジャロ 2.5mg</span>
                  <span className="text-2xl font-bold text-blue-600">36,000円/月</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-teal-50 rounded-lg">
                  <span className="font-semibold text-gray-800">マンジャロ 5mg</span>
                  <span className="text-2xl font-bold text-teal-600">36,000円/月</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-gray-800">マンジャロ 7.5mg〜15mg</span>
                  <span className="text-2xl font-bold text-green-600">36,000円/月</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ※ 初回診察料（5,000円）別途<br />
                    ※ 定期診察料（月1回・3,000円）別途
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <i className="ri-roadmap-line text-blue-600 mr-2"></i>
                治療の流れ
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">オンライン相談予約</h4>
                    <p className="text-sm text-gray-600">無料で医師との相談をご予約</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2 
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">医師による診察</h4>
                    <p className="text-sm text-gray-600">病歴や体調を詳しく確認</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">治療開始</h4>
                    <p className="text-sm text-gray-600">薬剤配送後、自宅で治療開始</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">定期フォロー</h4>
                    <p className="text-sm text-gray-600">月1回の診察で安全性確認</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            マンジャロに関するよくある質問
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">
                <i className="ri-question-line text-blue-600 mr-2"></i>
                効果はいつ頃から実感できますか？
              </h3>
              <p className="text-gray-600">
                多くの方が治療開始から2-4週間で食欲の変化を実感し、4-8週間で体重減少が始まります。最大効果は3-6ヶ月で現れることが多いです。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">
                <i className="ri-question-line text-blue-600 mr-2"></i>
                注射は痛いですか？
              </h3>
              <p className="text-gray-600">
                非常に細い針を使用しているため、ほとんど痛みはありません。インスリンペンと同様の使いやすいペン型注射器を使用します。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">
                <i className="ri-question-line text-blue-600 mr-2"></i>
                治療をやめるとリバウンドしますか？
              </h3>
              <p className="text-gray-600">
                治療中に食習慣の改善ができていれば、リバウンドのリスクは低くなります。医師と相談しながら段階的に減量していきます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-3">
                <i className="ri-question-line text-blue-600 mr-2"></i>
                他の薬と併用できますか？
              </h3>
              <p className="text-gray-600">
                多くの薬と併用可能ですが、糖尿病薬や血圧薬など一部の薬剤は用量調整が必要な場合があります。診察時に服用中の薬をすべて医師にお伝えください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            マンジャロで理想の体重を手に入れませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            専門医による丁寧な診察で、あなたに最適な治療プランをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="!rounded-button bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-colors">
              マンジャロ治療を始める
            </button>
            <Link href="/">
              <button className="!rounded-button border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                他の治療薬も見る
              </button>
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-75">
            初回相談は完全無料・所要時間約15分<br />
            24時間いつでもオンライン予約可能
          </p>
        </div>
      </section>
    </div>
  );
}