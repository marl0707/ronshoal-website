import Link from 'next/link';
import { ArrowLeft, School, Users, CheckCircle, AlertCircle, BookOpen, Heart } from 'lucide-react';

export default function SchoolGuidePage() {
  const schoolStaff = [
    {
      role: '養護教諭',
      responsibilities: [
        '健康診断での足の観察',
        '日常的な健康相談',
        '怪我の応急処置',
        '保護者との連携',
      ],
      icon: Heart,
      color: 'from-pink-500 to-red-500',
    },
    {
      role: '体育教諭',
      responsibilities: [
        '運動時の観察',
        '適切な運動指導',
        '靴の確認',
        'スポーツ障害の早期発見',
      ],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      role: '担任教諭',
      responsibilities: [
        '日常生活の観察',
        '歩き方の変化に気づく',
        '保護者への情報共有',
        '専門機関への橋渡し',
      ],
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const observationPoints = [
    {
      category: '姿勢・歩行',
      items: [
        '片足に体重をかけて立つ',
        '内股・がに股歩き',
        'つま先歩き・かかと歩き',
        '階段の昇降時の様子',
      ],
    },
    {
      category: '運動時',
      items: [
        '走り方の左右差',
        'ジャンプ後の着地',
        '体育を嫌がる',
        '特定の動作を避ける',
      ],
    },
    {
      category: '靴・足の状態',
      items: [
        '靴の異常な減り方',
        '靴のサイズ不適合',
        '足の変形や腫れ',
        '爪の異常',
      ],
    },
    {
      category: '訴え・様子',
      items: [
        '足の痛みの訴え',
        '疲れやすさ',
        '朝の起床困難',
        '運動後の不調',
      ],
    },
  ];

  const cooperationMethods = [
    {
      method: '健康診断の活用',
      description: '年次健康診断時に足の状態もチェック項目に含める',
      icon: '📋',
    },
    {
      method: '保健だよりでの啓発',
      description: '足の健康に関する情報を定期的に発信',
      icon: '📰',
    },
    {
      method: '専門家による講演会',
      description: '保護者・教職員向けの足育講座の開催',
      icon: '🎤',
    },
    {
      method: '相談窓口の設置',
      description: '足の悩みに特化した相談日を設定',
      icon: '💬',
    },
  ];

  const schoolPrograms = [
    {
      title: '足育プログラム',
      target: '全学年',
      content: '正しい歩き方、靴の選び方を学ぶ',
      frequency: '年2回',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      title: '運動器検診',
      target: '小学1年・4年',
      content: '足を含む運動器の総合的なチェック',
      frequency: '年1回',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'スポーツテスト',
      target: '全学年',
      content: '運動能力と足の機能の関連を評価',
      frequency: '年1回',
      color: 'bg-green-100 text-green-700',
    },
    {
      title: '個別相談',
      target: '希望者',
      content: '専門家による個別アドバイス',
      frequency: '随時',
      color: 'bg-orange-100 text-orange-700',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link href="/support" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition">
          <ArrowLeft className="h-4 w-4 mr-2" />
          サポート情報に戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
            <School className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">学校との連携ガイド</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            学校と家庭が協力して、子どもたちの足の健康を守るための
            連携方法と実践的なアプローチをご紹介します。
          </p>
        </div>
      </section>

      {/* School Staff Roles */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">学校スタッフの役割</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {schoolStaff.map((staff, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${staff.color} rounded-xl mb-4`}>
                <staff.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4">{staff.role}</h3>
              <ul className="space-y-2">
                {staff.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Observation Points */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">
          <AlertCircle className="inline-block h-8 w-8 text-orange-500 mr-3" />
          <span className="gradient-text">観察のポイント</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {observationPoints.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-orange-700">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* School Programs */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">学校での取り組み例</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {schoolPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{program.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${program.color}`}>
                  {program.frequency}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">対象:</span>
                  <span className="font-medium">{program.target}</span>
                </div>
                <div>
                  <span className="text-gray-600">内容:</span>
                  <p className="mt-1">{program.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cooperation Methods */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">連携の方法</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cooperationMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition card-hover">
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="font-bold mb-2">{method.method}</h3>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Communication Flow */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">情報共有のフロー</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-bold">気になる症状の発見</h3>
                <p className="text-sm text-gray-600">教職員が日常観察で異変に気づく</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-bold">保護者への連絡</h3>
                <p className="text-sm text-gray-600">観察内容を具体的に伝える</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-bold">専門機関の紹介</h3>
                <p className="text-sm text-gray-600">必要に応じて医療機関を案内</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="ml-4">
                <h3 className="font-bold">フォローアップ</h3>
                <p className="text-sm text-gray-600">経過観察と継続的なサポート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources for Schools */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">学校向けリソース</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-3">教材ダウンロード</h3>
              <p className="text-sm text-gray-600 mb-4">
                授業で使える足育教材をご用意しています
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                教材を見る →
              </button>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-3">講師派遣</h3>
              <p className="text-sm text-gray-600 mb-4">
                専門家による出張講座のご案内
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                詳細を見る →
              </button>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold mb-3">相談窓口</h3>
              <p className="text-sm text-gray-600 mb-4">
                学校関係者専用の相談サービス
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                お問い合わせ →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            学校と家庭が連携して、子どもたちの健やかな成長をサポートしましょう
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="gradient-button px-8 py-4 text-white font-bold rounded-full">
              連携について相談する
            </Link>
            <Link href="/support/faq" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition">
              よくある質問を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}