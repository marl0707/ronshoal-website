import Link from 'next/link';
import { ArrowLeft, Footprints, Ruler, AlertCircle, CheckCircle, X } from 'lucide-react';

export default function ShoesPage() {
  const shoeTypes = [
    {
      type: 'ファーストシューズ',
      age: '1〜2歳',
      features: [
        '柔らかく曲がりやすい',
        '軽量（50-80g程度）',
        'つま先が広い',
        '滑りにくいソール',
      ],
      icon: '👶',
      color: 'from-pink-500 to-red-500',
    },
    {
      type: '幼児用シューズ',
      age: '2〜6歳',
      features: [
        'かかとのホールド性',
        '適度なクッション',
        'マジックテープ式',
        '通気性の良い素材',
      ],
      icon: '🧒',
      color: 'from-purple-500 to-pink-500',
    },
    {
      type: '学童用シューズ',
      age: '6〜12歳',
      features: [
        'アーチサポート',
        '耐久性のある素材',
        '成長に対応する設計',
        '運動に適した機能',
      ],
      icon: '👦',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'スポーツシューズ',
      age: '全年齢',
      features: [
        '競技別の特殊機能',
        '高いサポート性',
        '衝撃吸収性',
        '専門的な設計',
      ],
      icon: '⚽',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const sizingGuide = [
    {
      step: 'つま先の余裕',
      detail: '親指の幅（5-10mm）程度の余裕が必要',
      checkMethod: '親指で押して確認',
      icon: '👍',
    },
    {
      step: 'かかとのフィット',
      detail: 'かかとがしっかりホールドされること',
      checkMethod: '歩いて脱げないか確認',
      icon: '🦵',
    },
    {
      step: '幅の確認',
      detail: '一番広い部分で圧迫感がないこと',
      checkMethod: '両サイドをつまんで確認',
      icon: '↔️',
    },
    {
      step: '歩行テスト',
      detail: '実際に歩いて違和感がないこと',
      checkMethod: '店内を歩いてもらう',
      icon: '🚶',
    },
  ];

  const commonMistakes = [
    {
      mistake: '大きめを選ぶ',
      problem: '歩行が不安定になり、転倒や変形の原因に',
      solution: 'ジャストサイズで3-6ヶ月ごとに買い替え',
    },
    {
      mistake: 'デザイン重視',
      problem: '機能性が不十分で足の発達を妨げる',
      solution: '機能性を優先し、その中でデザインを選ぶ',
    },
    {
      mistake: '中古の使用',
      problem: '他人の歩き癖がついており、足に悪影響',
      solution: '新品を購入し、兄弟でも共有しない',
    },
    {
      mistake: 'サイズ確認不足',
      problem: '気づかないうちにサイズアウト',
      solution: '月1回は足のサイズをチェック',
    },
  ];

  const materialGuide = [
    {
      material: '天然皮革',
      pros: ['通気性が良い', '足になじむ', '耐久性が高い'],
      cons: ['価格が高い', '手入れが必要'],
      recommended: '長時間履く場合',
    },
    {
      material: '合成皮革',
      pros: ['手入れが簡単', '価格が手頃', '軽量'],
      cons: ['通気性が劣る', '耐久性が低い'],
      recommended: '日常使い',
    },
    {
      material: 'メッシュ素材',
      pros: ['通気性抜群', '軽量', '速乾性'],
      cons: ['耐久性が低い', '汚れやすい'],
      recommended: 'スポーツ用',
    },
    {
      material: 'キャンバス',
      pros: ['通気性良好', '洗える', '価格が安い'],
      cons: ['サポート性が低い', '濡れに弱い'],
      recommended: '室内履き',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link href="/practice" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          実践ガイドに戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Footprints className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">正しい靴の選び方</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お子様の足の健やかな成長には、適切な靴選びが欠かせません。
            年齢や用途に応じた靴の選び方をご紹介します。
          </p>
        </div>
      </section>

      {/* Shoe Types */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">年齢別シューズガイド</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {shoeTypes.map((shoe, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className="flex items-start mb-4">
                <span className="text-5xl mr-4">{shoe.icon}</span>
                <div>
                  <h3 className="font-bold text-xl">{shoe.type}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${shoe.color} text-white mt-2`}>
                    {shoe.age}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {shoe.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sizing Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <Ruler className="inline-block h-8 w-8 text-blue-600 mr-3" />
          <span className="gradient-text">サイズ選びのポイント</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizingGuide.map((guide, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <div className="text-4xl mb-4 text-center">{guide.icon}</div>
              <h3 className="font-bold text-lg mb-2">{guide.step}</h3>
              <p className="text-sm text-gray-700 mb-3">{guide.detail}</p>
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs font-medium text-blue-700">{guide.checkMethod}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertCircle className="inline-block h-8 w-8 text-red-500 mr-3" />
          <span className="gradient-text">よくある間違い</span>
        </h2>
        <div className="space-y-4">
          {commonMistakes.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-start">
                <X className="h-6 w-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.mistake}</h3>
                  <p className="text-gray-700 mb-3">{item.problem}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-700">
                      <CheckCircle className="inline h-4 w-4 mr-2" />
                      正解: {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Material Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">素材の特徴</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {materialGuide.map((material, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <h3 className="font-bold text-xl mb-4">{material.material}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-medium text-green-700 mb-2">メリット</p>
                  <ul className="space-y-1">
                    {material.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-gray-700">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-2">デメリット</p>
                  <ul className="space-y-1">
                    {material.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-gray-700">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-700">
                  おすすめ: {material.recommended}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shoe Care Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">靴のお手入れ方法</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-purple-700">日常のケア</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 毎日陰干しする</li>
                <li>• 中敷きを取り出して乾燥</li>
                <li>• ブラシで汚れを落とす</li>
                <li>• 防水スプレーの使用</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-pink-700">洗い方</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ぬるま湯で手洗い</li>
                <li>• 中性洗剤を使用</li>
                <li>• よくすすぐ</li>
                <li>• 陰干しで乾燥</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-purple-700">保管方法</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 風通しの良い場所</li>
                <li>• 型崩れ防止の詰め物</li>
                <li>• 直射日光を避ける</li>
                <li>• 湿気対策</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Replacement Timing */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">買い替えのタイミング</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">サイズアウトのサイン</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">!</span>
                  つま先が当たっている
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">!</span>
                  かかとが浮く
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">!</span>
                  歩きにくそうにしている
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">!</span>
                  足に赤い跡がつく
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">劣化のサイン</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">!</span>
                  ソールの偏った減り
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">!</span>
                  かかとの型崩れ
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">!</span>
                  アッパーの破れ
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">!</span>
                  中敷きのへたり
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            正しい靴選びで、お子様の足の健康を守りましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/age-guide" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              年齢別ガイドを見る
            </Link>
            <Link href="/practice/insole" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              インソールについて
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}