import Link from 'next/link';
import { HelpCircle, Search, School, Download, ChevronRight, Users } from 'lucide-react';

export default function SupportPage() {
  const supportItems = [
    {
      title: 'Q&A',
      description: 'よくある質問と回答をまとめました',
      icon: HelpCircle,
      href: '/support/faq',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: '医療機関検索',
      description: '小児整形外科などの専門医を探せます',
      icon: Search,
      href: '/support/medical',
      color: 'bg-green-100 text-green-600',
    },
    {
      title: '学校への働きかけガイド',
      description: '学校での足の健康推進方法',
      icon: School,
      href: '/support/school',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: '資料ダウンロード',
      description: 'チェックリストや啓発資料など',
      icon: Download,
      href: '/support/download',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      title: '専門家情報',
      description: '参考文献や学会情報',
      icon: Users,
      href: '/support/experts',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            サポート情報
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            足の健康に関する疑問解決や、専門的な情報へのアクセスをサポートします。
          </p>
        </div>
      </section>

      {/* Support Items Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 block"
              >
                <div className={`p-4 rounded-lg ${item.color} inline-flex mb-4`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-primary">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">よくあるご質問</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">Q. 子どもの靴はどのくらいの頻度で買い替えるべきですか？</h3>
              <p className="text-gray-600">
                A. 成長期の子どもは3-4ヶ月ごとにサイズを確認し、つま先に5-10mmの余裕がなくなったら買い替えましょう。
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">Q. 扁平足は治療が必要ですか？</h3>
              <p className="text-gray-600">
                A. 3-6歳頃までの扁平足は多くの場合生理的なもので、痛みがなければ経過観察で問題ありません。
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">Q. スポーツ中の足の痛みはどう対処すべきですか？</h3>
              <p className="text-gray-600">
                A. まずは運動を中止し、RICE処置（安静・冷却・圧迫・挙上）を行います。痛みが続く場合は専門医を受診してください。
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/support/faq"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              もっと見る
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}