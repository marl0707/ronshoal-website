import Link from 'next/link';
import { Trophy, Users, Target, ChevronRight } from 'lucide-react';

export default function SportsPage() {
  const sports = [
    {
      name: 'ラグビー',
      description: 'コンタクトスポーツ特有の足部障害と予防法',
      href: '/sports/rugby',
      image: '🏉',
      keyPoints: [
        'スクラム時の足部ケア',
        'ポジション別対策',
        'テーピング方法'
      ],
      injuries: ['スクラム足', '足首捻挫', '疲労骨折'],
    },
    {
      name: 'サッカー',
      description: '方向転換の多いスポーツでの足の保護',
      href: '/sports/soccer',
      image: '⚽',
      keyPoints: [
        'グラウンド別シューズ選び',
        'ACL損傷予防',
        '成長期のケア'
      ],
      injuries: ['シーバー病', 'ジョーンズ骨折', '足関節捻挫'],
    },
    {
      name: '野球',
      description: '投球・打撃動作と足部の関係',
      href: '/sports/baseball',
      image: '⚾',
      keyPoints: [
        '投手の軸足ケア',
        'ベースランニング',
        'スパイク選び'
      ],
      injuries: ['足底筋膜炎', '母趾球の痛み', 'アキレス腱炎'],
    },
    {
      name: 'バスケットボール',
      description: 'ジャンプとダッシュが多いスポーツ',
      href: '/sports/basketball',
      image: '🏀',
      keyPoints: [
        'クッション性重視',
        '足首サポート',
        'インソール活用'
      ],
      injuries: ['ジャンパー膝', '足関節捻挫', '疲労骨折'],
    },
    {
      name: '陸上競技',
      description: '種目別の足部負荷と対策',
      href: '/sports/track',
      image: '🏃',
      keyPoints: [
        '種目別シューズ',
        'フォーム改善',
        '疲労管理'
      ],
      injuries: ['シンスプリント', 'アキレス腱炎', '疲労骨折'],
    },
    {
      name: 'テニス',
      description: 'コートサーフェスと足部への影響',
      href: '/sports/tennis',
      image: '🎾',
      keyPoints: [
        'サーフェス別対策',
        '横移動のサポート',
        '衝撃吸収'
      ],
      injuries: ['足底筋膜炎', '外反母趾', '足関節捻挫'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            スポーツ別対策
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            各スポーツの特性に応じた足のケア方法と障害予防をご紹介します。
            正しい知識で、スポーツを安全に楽しみましょう。
          </p>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 block"
              >
                <div className="text-center mb-4">
                  <span className="text-5xl">{sport.image}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-2">{sport.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{sport.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-700 mb-1">対策ポイント：</p>
                    <ul className="text-sm text-gray-600 space-y-0.5">
                      {sport.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm text-gray-700 mb-1">注意すべき障害：</p>
                    <div className="flex flex-wrap gap-1">
                      {sport.injuries.map((injury, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {injury}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-end text-primary">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Guidelines */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            スポーツ共通の足部ケア
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">ウォーミングアップ</h3>
              <p className="text-sm text-gray-600">
                足首回し、足指運動、ふくらはぎのストレッチを必ず行いましょう。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">適切な休息</h3>
              <p className="text-sm text-gray-600">
                成長期は特に、オーバーユースに注意。週2日は休息日を設けましょう。
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">シューズの管理</h3>
              <p className="text-sm text-gray-600">
                競技用と練習用を分ける、定期的な交換、適切なサイズ選びが重要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            指導者・保護者の方へ
          </h2>
          <p className="text-gray-600 mb-8">
            子どもたちの足の健康を守るために、指導者や保護者ができることをまとめました。
            チーム全体での取り組みが、障害予防につながります。
          </p>
          <Link
            href="/support/coaches"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            指導者向けガイドを見る
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}