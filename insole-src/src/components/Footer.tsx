import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      title: '年齢別ガイド',
      links: [
        { name: '0-3歳（ファーストシューズ）', href: '/age-guide/0-3' },
        { name: '3-6歳（プレゴールデンエイジ）', href: '/age-guide/3-6' },
        { name: '6-12歳（ゴールデンエイジ）', href: '/age-guide/6-12' },
        { name: '12-18歳（部活動期）', href: '/age-guide/12-18' },
      ],
    },
    {
      title: '実践ガイド',
      links: [
        { name: '靴選び完全ガイド', href: '/practice/shoes' },
        { name: '運動プログラム', href: '/practice/exercise' },
        { name: 'インソール活用法', href: '/practice/insole' },
        { name: '季節別ケア', href: '/practice/seasonal' },
      ],
    },
    {
      title: 'サポート情報',
      links: [
        { name: 'Q&A', href: '/support/faq' },
        { name: '医療機関検索', href: '/support/medical' },
        { name: '学校への働きかけガイド', href: '/support/school' },
        { name: '専門家情報', href: '/support/expert' },
      ],
    },
    {
      title: '高齢者向け',
      links: [
        { name: '歩くことの大切さ', href: '/senior/walking' },
        { name: '転倒予防と足の健康', href: '/senior/fall-prevention' },
        { name: '高齢者の足のトラブル', href: '/senior/trouble' },
        { name: '運動プログラム', href: '/senior/exercise' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                本サイトの情報は、日本整形外科学会、日本小児整形外科学会等の公開情報を参考にしています。
              </p>
            </div>
            <div className="flex space-x-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                利用規約
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                運営情報
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            © 2024 足育（あしすく）ナビ. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;