import Link from 'next/link';
import { ArrowLeft, Activity, Timer, TrendingUp, Heart, Shield, Zap } from 'lucide-react';

export default function ExercisePage() {
  const exerciseCategories = [
    {
      category: '足指の運動',
      target: '足指の筋力・柔軟性',
      exercises: [
        {
          name: 'タオルギャザー',
          description: 'タオルを足指でたぐり寄せる',
          duration: '3セット×10回',
          difficulty: '初級',
        },
        {
          name: 'ビー玉つかみ',
          description: 'ビー玉を足指でつかんで移動',
          duration: '左右各20個',
          difficulty: '中級',
        },
        {
          name: '足指じゃんけん',
          description: 'グー・チョキ・パーを足指で作る',
          duration: '10回×3セット',
          difficulty: '初級',
        },
      ],
      icon: '🦶',
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'バランス運動',
      target: '体幹・足首の安定性',
      exercises: [
        {
          name: '片足立ち',
          description: '目を開けて片足で立つ',
          duration: '左右各30秒',
          difficulty: '初級',
        },
        {
          name: 'バランスボード',
          description: 'バランスボードの上で立位保持',
          duration: '3分×3セット',
          difficulty: '中級',
        },
        {
          name: 'ライン歩行',
          description: '直線上を歩く（つま先とかかとを接して）',
          duration: '10歩×3往復',
          difficulty: '上級',
        },
      ],
      icon: '⚖️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'ストレッチ',
      target: '柔軟性・可動域改善',
      exercises: [
        {
          name: 'アキレス腱ストレッチ',
          description: '壁に手をついて後ろ足を伸ばす',
          duration: '左右各30秒×3回',
          difficulty: '初級',
        },
        {
          name: '足底筋膜ストレッチ',
          description: '座って足指を手前に引く',
          duration: '左右各20秒×3回',
          difficulty: '初級',
        },
        {
          name: 'ふくらはぎストレッチ',
          description: '段差を使ってかかとを下げる',
          duration: '20秒×3セット',
          difficulty: '中級',
        },
      ],
      icon: '🧘',
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: '筋力トレーニング',
      target: '下肢全体の筋力向上',
      exercises: [
        {
          name: 'カーフレイズ',
          description: 'つま先立ちを繰り返す',
          duration: '15回×3セット',
          difficulty: '初級',
        },
        {
          name: 'スクワット',
          description: '正しいフォームでゆっくり',
          duration: '10回×3セット',
          difficulty: '中級',
        },
        {
          name: 'ランジ',
          description: '前後に足を開いて膝を曲げる',
          duration: '左右各10回×3セット',
          difficulty: '上級',
        },
      ],
      icon: '💪',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const agePrograms = [
    {
      age: '3-6歳',
      focus: '楽しみながら基礎作り',
      activities: [
        '裸足での活動',
        '様々な地面を歩く',
        '簡単なバランス遊び',
        '足指を使った遊び',
      ],
      frequency: '毎日15-20分',
      color: 'bg-pink-100 text-pink-700',
    },
    {
      age: '6-9歳',
      focus: '運動能力の向上',
      activities: [
        '基本的な運動',
        'バランス訓練',
        '簡単な筋トレ',
        'スポーツの基礎動作',
      ],
      frequency: '週3-4回 30分',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      age: '9-12歳',
      focus: 'スポーツ特化型',
      activities: [
        '競技別トレーニング',
        '本格的な筋トレ',
        'アジリティ訓練',
        '柔軟性の維持',
      ],
      frequency: '週4-5回 45分',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      age: '12歳以上',
      focus: '怪我予防と向上',
      activities: [
        '専門的トレーニング',
        'ウェイトトレーニング',
        'プライオメトリクス',
        'リカバリーケア',
      ],
      frequency: '週5-6回 60分',
      color: 'bg-green-100 text-green-700',
    },
  ];

  const preventionTips = [
    {
      tip: 'ウォーミングアップ',
      description: '必ず運動前に5-10分',
      icon: Timer,
    },
    {
      tip: '段階的な負荷増加',
      description: '週10%以内の増加に留める',
      icon: TrendingUp,
    },
    {
      tip: '休養日の確保',
      description: '週2日は完全休養',
      icon: Heart,
    },
    {
      tip: '正しいフォーム',
      description: '質を重視した動作',
      icon: Shield,
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
            <Activity className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">足の健康エクササイズ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            足の機能を向上させ、怪我を予防するための
            年齢に応じたエクササイズプログラムをご紹介します。
          </p>
        </div>
      </section>

      {/* Exercise Categories */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">エクササイズカテゴリー</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {exerciseCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h3 className={`font-bold text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-600">{category.target}</p>
                </div>
              </div>
              <div className="space-y-4">
                {category.exercises.map((exercise, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{exercise.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        exercise.difficulty === '初級' ? 'bg-green-100 text-green-700' :
                        exercise.difficulty === '中級' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{exercise.description}</p>
                    <p className="text-sm font-medium text-purple-600">{exercise.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Age-specific Programs */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">年齢別プログラム</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agePrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <div className={`inline-block px-4 py-2 rounded-full font-bold mb-4 ${program.color}`}>
                {program.age}
              </div>
              <h3 className="font-bold text-lg mb-3">{program.focus}</h3>
              <ul className="space-y-2 mb-4">
                {program.activities.map((activity, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <Zap className="h-3 w-3 text-orange-500 mr-2" />
                    {activity}
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm font-medium text-gray-700">
                  頻度: {program.frequency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise Demo */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">基本エクササイズのやり方</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-purple-700">タオルギャザー</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-purple-600 mr-3">1.</span>
                  椅子に座り、床にタオルを広げる
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-purple-600 mr-3">2.</span>
                  足指でタオルをつかむ
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-purple-600 mr-3">3.</span>
                  ゆっくりとたぐり寄せる
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-purple-600 mr-3">4.</span>
                  10回繰り返す
                </li>
              </ol>
              <div className="mt-4 bg-purple-50 rounded-lg p-3">
                <p className="text-sm font-medium text-purple-700">
                  効果: 足指の筋力強化、土踏まずの形成
                </p>
              </div>
            </div>
            <div className="bg-white/80 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4 text-pink-700">片足立ち</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">1.</span>
                  両足を肩幅に開いて立つ
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">2.</span>
                  片足をゆっくり上げる
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">3.</span>
                  30秒キープ
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-pink-600 mr-3">4.</span>
                  反対の足も同様に
                </li>
              </ol>
              <div className="mt-4 bg-pink-50 rounded-lg p-3">
                <p className="text-sm font-medium text-pink-700">
                  効果: バランス能力向上、体幹強化
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">安全に運動するために</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {preventionTips.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition card-hover">
              <item.icon className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold mb-2">{item.tip}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motivation Tips */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">運動を継続するコツ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold mb-2">習慣化</h3>
              <p className="text-sm text-gray-600">毎日同じ時間に実施</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">目標設定</h3>
              <p className="text-sm text-gray-600">達成可能な小さな目標から</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-bold mb-2">楽しく</h3>
              <p className="text-sm text-gray-600">ゲーム要素を取り入れる</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            定期的な運動で、健康な足を育てましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sports" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              スポーツ別対策を見る
            </Link>
            <Link href="/practice/shoes" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              靴の選び方を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}