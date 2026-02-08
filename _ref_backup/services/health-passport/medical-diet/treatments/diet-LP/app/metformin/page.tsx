'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MetforminPage() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Advanced%20pharmaceutical%20research%20laboratory%2C%20purple%20accent%20lighting%2C%20modern%20medical%20science%20facility%2C%20anti-aging%20research%20concept%2C%20longevity%20medicine%2C%20high-tech%20laboratory%20equipment%2C%20futuristic%20medical%20research%20center%2C%20clean%20scientific%20environment&width=1200&height=600&seq=metformin-hero&orientation=landscape"
            alt="メトホルミン研究"
            className="w-full h-full object-cover object-center opacity-80"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-500/40"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            メトホルミン<br />
            <span className="text-2xl">60年の実績と抗老化効果</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            世界で最も使用されている糖尿病薬。近年、抗老化効果でも注目を集めています。
          </p>
          <button className="!rounded-button bg-white text-purple-600 px-8 py-4 text-lg font-semibold hover:bg-purple-50 transition-colors">
            公式LINEで相談する
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">60年以上の実績</h3>
              <p className="text-gray-600">
                1957年から使用される、最も歴史ある安全な薬剤です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-sparkles-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">抗老化効果</h3>
              <p className="text-gray-600">
                細胞レベルでの老化抑制効果が研究で明らかになっています。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-wallet-3-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">最も経済的</h3>
              <p className="text-gray-600">
                月額5,000円で継続可能。長期使用に最適な選択肢です。
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
                onClick={() => setActiveTab('history')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'history'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                歴史と実績
              </button>
              <button
                onClick={() => setActiveTab('antiaging')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'antiaging'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                抗老化効果
              </button>
              <button
                onClick={() => setActiveTab('mechanism')}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === 'mechanism'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                作用メカニズム
              </button>
            </div>
          </div>

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">メトホルミンの歴史と実績</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-24 text-purple-600 font-bold mr-4">1922年</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">植物から発見</h4>
                    <p className="text-gray-600">フレンチライラック（ガレガ）から血糖降下作用のある成分を発見</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 text-purple-600 font-bold mr-4">1957年</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">臨床使用開始</h4>
                    <p className="text-gray-600">フランスで糖尿病治療薬として承認、使用開始</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 text-purple-600 font-bold mr-4">1995年</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">米国FDA承認</h4>
                    <p className="text-gray-600">アメリカでも正式に承認され、世界的な標準治療薬に</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 text-purple-600 font-bold mr-4">2010年代</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">抗老化研究</h4>
                    <p className="text-gray-600">寿命延長効果や抗がん作用など、新たな効果が次々と発見</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10億人以上</div>
                  <p className="text-gray-600">世界中で使用された患者数</p>
                </div>
              </div>
            </div>
          )}

          {/* Anti-aging Tab */}
          {activeTab === 'antiaging' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">最新研究で明らかになった抗老化効果</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    <i className="ri-microscope-line text-purple-600 mr-2"></i>
                    細胞レベルの効果
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ミトコンドリア機能の改善</li>
                    <li>• 細胞老化の抑制</li>
                    <li>• DNA損傷の修復促進</li>
                    <li>• 炎症反応の低下</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    <i className="ri-body-scan-line text-blue-600 mr-2"></i>
                    全身への効果
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 認知機能の維持・改善</li>
                    <li>• 心血管疾患リスクの低下</li>
                    <li>• がん発症リスクの低減</li>
                    <li>• 筋肉量の維持</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-800 mb-4">研究データ</h4>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">31%</div>
                      <p className="text-sm text-gray-600">全死亡リスクの低下</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">37%</div>
                      <p className="text-sm text-gray-600">がん死亡リスクの低下</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">6年</div>
                      <p className="text-sm text-gray-600">健康寿命の延長</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    ※UK Biobank研究（2019年）による
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Mechanism Tab */}
          {activeTab === 'mechanism' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">メトホルミンの作用メカニズム</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">主な作用機序</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h5 className="font-bold text-purple-800 mb-2">AMPK活性化</h5>
                      <p className="text-sm text-gray-600">
                        細胞のエネルギーセンサーを活性化し、代謝を改善
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h5 className="font-bold text-purple-800 mb-2">肝糖新生の抑制</h5>
                      <p className="text-sm text-gray-600">
                        肝臓での糖の産生を抑え、血糖値を安定化
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h5 className="font-bold text-purple-800 mb-2">インスリン感受性の改善</h5>
                      <p className="text-sm text-gray-600">
                        筋肉や脂肪組織での糖の取り込みを促進
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h5 className="font-bold text-purple-800 mb-2">腸内細菌叢の改善</h5>
                      <p className="text-sm text-gray-600">
                        有益な腸内細菌を増やし、全身の健康を向上
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">体重への効果</h4>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      メトホルミンは劇的な体重減少薬ではありませんが、以下の効果により緩やかな体重管理をサポートします：
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <i className="ri-checkbox-circle-fill text-purple-600 mr-2 mt-1"></i>
                        <span>食欲の適正化により過食を防ぐ</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-checkbox-circle-fill text-purple-600 mr-2 mt-1"></i>
                        <span>脂肪の蓄積を抑制</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-checkbox-circle-fill text-purple-600 mr-2 mt-1"></i>
                        <span>基礎代謝の維持・向上</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Combination Therapy */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">併用療法のすすめ</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700">
                メトホルミンは他の医療ダイエット薬と併用することで、<br />
                相乗効果を発揮します
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">
                  マンジャロとの併用
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  最強の減量効果 + 抗老化効果
                </p>
                <div className="text-purple-600 font-bold">
                  月額41,000円で最高の結果を
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">
                  SGLT2阻害薬との併用
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  糖排出効果 + 代謝改善効果
                </p>
                <div className="text-purple-600 font-bold">
                  月額15,000円でバランス良く
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">料金プラン</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">月額 5,000円</div>
              <p className="text-gray-600">（税込）</p>
              <p className="text-sm text-gray-500 mt-2">最も経済的な医療ダイエット薬</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">料金に含まれるもの</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-purple-600 mr-2"></i>
                    メトホルミン（30日分）
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-purple-600 mr-2"></i>
                    医師によるオンライン診察
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-purple-600 mr-2"></i>
                    3ヶ月ごとの血液検査
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-purple-600 mr-2"></i>
                    24時間LINEサポート
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">こんな方におすすめ</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-user-heart-line text-purple-600 mr-2"></i>
                    健康的な老化を目指す方
                  </li>
                  <li className="flex items-center">
                    <i className="ri-wallet-line text-purple-600 mr-2"></i>
                    長期的に続けやすい価格重視の方
                  </li>
                  <li className="flex items-center">
                    <i className="ri-shield-star-line text-purple-600 mr-2"></i>
                    実績ある安全な薬を希望の方
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            健康的な体重管理と抗老化を同時に
          </h2>
          <p className="text-xl mb-8 opacity-90">
            60年の実績を持つメトホルミンで、理想の健康を手に入れましょう
          </p>
          <button className="!rounded-button bg-white text-purple-600 px-8 py-4 text-lg font-semibold hover:bg-purple-50 transition-colors">
            無料オンライン相談を予約
          </button>
        </div>
      </section>

      {/* Back to Top */}
      <div className="text-center py-8">
        <Link href="/">
          <span className="text-gray-600 hover:text-purple-600 transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            トップページに戻る
          </span>
        </Link>
      </div>
    </div>
  );
}