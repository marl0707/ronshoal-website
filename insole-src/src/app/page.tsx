import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Baby, 
  Users, 
  Footprints, 
  AlertCircle,
  BookOpen,
  Activity,
  HeartHandshake,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import { APP_CONFIG } from '@/config/constants';

export default function Home() {
  const quickAccessItems = [
    {
      title: '症状について',
      description: 'よくある足の症状を確認',
      icon: AlertCircle,
      href: '/symptoms',
      gradient: 'from-red-400 to-pink-600',
    },
    {
      title: '年齢別ガイド',
      description: 'お子様の年齢に合わせた情報',
      icon: Baby,
      href: '/age-guide',
      gradient: 'from-blue-400 to-cyan-600',
    },
    {
      title: '靴選びガイド',
      description: '成長期の適切な靴選び',
      icon: Footprints,
      href: '/practice/shoes',
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      title: '緊急時対応',
      description: '急な痛みや怪我の対処法',
      icon: Activity,
      href: '/emergency',
      gradient: 'from-orange-400 to-red-600',
    },
  ];

  const ageGuides = [
    { age: '0-3歳', label: 'ファーストシューズ', href: '/age-guide/0-3', color: 'bg-pink-100 text-pink-700' },
    { age: '3-6歳', label: 'プレゴールデンエイジ', href: '/age-guide/3-6', color: 'bg-purple-100 text-purple-700' },
    { age: '6-12歳', label: 'ゴールデンエイジ', href: '/age-guide/6-12', color: 'bg-blue-100 text-blue-700' },
    { age: '12-18歳', label: '部活動期', href: '/age-guide/12-18', color: 'bg-green-100 text-green-700' },
  ];

  const sportsCategories = [
    { name: 'サッカー', href: '/sports/soccer', icon: '⚽' },
    { name: 'バスケ', href: '/sports/basketball', icon: '🏀' },
    { name: '陸上', href: '/sports/track', icon: '🏃' },
    { name: 'テニス', href: '/sports/tennis', icon: '🎾' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Mesh Gradient */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400 rounded-full opacity-20 float-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-20 float-animation" style={{ animationDelay: '4s' }}></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-medium">子どもの足の健康情報サイト</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="gradient-text">子どもの足の健康は、</span>
                <br />
                <span className="text-gray-900">一生の財産です。</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                0歳から18歳までの成長期における足のケア、靴選び、スポーツ障害予防に関する情報を提供します。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/age-guide" className="gradient-button px-8 py-4 text-white font-bold rounded-full text-lg inline-flex items-center">
                  今すぐ始める
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/practice" className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-full text-lg hover:bg-purple-50 transition">
                  実践ガイドを見る
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src={APP_CONFIG.getAssetPath("/images/hero-modern.svg")}
                  alt="子どもの足の健康"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">何をお探しですか？</span>
            </h2>
            <p className="text-xl text-gray-600">お子様の状況に合わせて情報をお選びください</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-purple-600 font-medium">
                      詳しく見る
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Age Guide Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">年齢に応じた</span>
                <br />
                <span className="text-gray-900">適切なケアを</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                成長段階に合わせた足のケア方法、靴選びのポイント、注意すべき症状などを詳しく解説します。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ageGuides.map((guide) => (
                  <Link
                    key={guide.age}
                    href={guide.href}
                    className={`p-4 rounded-xl ${guide.color} hover:scale-105 transition-transform`}
                  >
                    <div className="font-bold text-xl mb-1">{guide.age}</div>
                    <div className="text-sm opacity-80">{guide.label}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Baby className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">0-3歳</h3>
                    <p className="text-sm text-gray-600">ファーストシューズの選び方、歩き始めの注意点</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">3-12歳</h3>
                    <p className="text-sm text-gray-600">運動能力の発達、スポーツを始める時期のケア</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">12-18歳</h3>
                    <p className="text-sm text-gray-600">部活動での怪我予防、成長期特有の症状</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">スポーツ別の対策</span>
            </h2>
            <p className="text-xl text-gray-600">競技特性に合わせた足のケア方法</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsCategories.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="bg-white rounded-2xl p-8 text-center hover:scale-105 transition-transform card-hover"
              >
                <div className="text-5xl mb-4">{sport.icon}</div>
                <h3 className="font-bold text-lg">{sport.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">高齢者の方へ</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              健康寿命の延伸には、足の健康が欠かせません。歩行能力の維持・向上のための情報を提供します。
            </p>
            <Link href="/senior" className="gradient-button px-8 py-4 text-white font-bold rounded-full text-lg inline-flex items-center">
              シニア向け情報を見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">足の健康について気になることはありませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            専門的な情報から日常のケアまで、幅広くサポートします
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/symptoms" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              症状をチェックする
            </Link>
            <Link href="/support" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition">
              サポート情報を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}