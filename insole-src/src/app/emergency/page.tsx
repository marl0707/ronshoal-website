import Link from 'next/link';
import { AlertTriangle, Phone, Clock, Snowflake, ChevronRight } from 'lucide-react';

export default function EmergencyPage() {
  const emergencySteps = [
    {
      step: 1,
      title: '安静にする',
      description: '痛む部位に体重をかけないようにし、安全な場所で休ませる',
      icon: '🛑',
    },
    {
      step: 2,
      title: '冷却する',
      description: '氷や保冷剤をタオルで包み、15-20分間冷やす（直接当てない）',
      icon: '🧊',
    },
    {
      step: 3,
      title: '圧迫する',
      description: '弾性包帯で適度に圧迫（きつすぎないよう注意）',
      icon: '🩹',
    },
    {
      step: 4,
      title: '挙上する',
      description: '心臓より高い位置に足を上げて安静にする',
      icon: '⬆️',
    },
  ];

  const emergencySituations = [
    {
      title: '激しい痛みと腫れ',
      symptoms: ['触れただけで激痛', '急速に腫れる', '内出血がひどい'],
      action: '骨折の可能性あり。固定して速やかに受診',
      severity: 'high',
    },
    {
      title: '足首の捻挫',
      symptoms: ['足首を捻った', '歩けるが痛い', '徐々に腫れてきた'],
      action: 'RICE処置を行い、翌日受診',
      severity: 'medium',
    },
    {
      title: '踵の強い痛み',
      symptoms: ['踵を着くと痛い', 'ジャンプ後に痛み', '朝起きた時に痛い'],
      action: '運動を中止し、数日で改善なければ受診',
      severity: 'low',
    },
    {
      title: '爪の剥離・出血',
      symptoms: ['爪が剥がれた', '爪下に血が溜まった', '激しい痛み'],
      action: '清潔にして保護、感染予防のため受診',
      severity: 'medium',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'medium':
        return 'border-orange-500 bg-orange-50';
      case 'low':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold">緊急時対応ガイド</h1>
          </div>
          <p className="text-center mt-2 text-red-100">
            落ち着いて適切な処置を行いましょう
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="font-bold text-red-900 mb-2">以下の場合は直ちに119番通報または医療機関へ</h2>
                <ul className="text-red-800 space-y-1">
                  <li>• 骨が変形している、または皮膚から突出している</li>
                  <li>• 足に全く体重をかけられない</li>
                  <li>• 足の感覚がない、または動かせない</li>
                  <li>• 足の色が青白い、または紫色になっている</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RICE Treatment */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            RICE処置の基本
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySteps.map((item) => (
              <div key={item.step} className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <div className="text-center">
                  <span className="inline-block bg-primary text-white rounded-full w-8 h-8 leading-8 text-sm font-bold mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center text-blue-600">
              <Snowflake className="w-5 h-5 mr-2" />
              <span className="font-medium">RICE = Rest（安静）・Ice（冷却）・Compression（圧迫）・Elevation（挙上）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Situation Guide */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            症状別対応ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencySituations.map((situation) => (
              <div
                key={situation.title}
                className={`border-2 rounded-lg p-6 ${getSeverityColor(situation.severity)}`}
              >
                <h3 className="font-bold text-lg mb-3">{situation.title}</h3>
                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">主な症状：</p>
                  <ul className="text-sm space-y-1">
                    {situation.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white bg-opacity-70 rounded p-3">
                  <p className="font-medium text-sm mb-1">対応：</p>
                  <p className="text-sm">{situation.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            してはいけないこと
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-4 text-red-600">❌ NG行動</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  無理に歩かせる
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  熱いお風呂に入れる
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  マッサージをする
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">×</span>
                  アルコールを飲ませる
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-green-600">✅ OK行動</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">○</span>
                  安静にして様子を見る
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">○</span>
                  冷やして腫れを抑える
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">○</span>
                  適度に固定する
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">○</span>
                  早めに専門医に相談
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Time Guidelines */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">受診のタイミング</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold text-red-600 mb-2">すぐに受診</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 骨折の疑い</li>
                  <li>• 激しい痛み</li>
                  <li>• 大きな変形</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-orange-600 mb-2">24時間以内</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 歩行困難</li>
                  <li>• 腫れがひどい</li>
                  <li>• 痛みが増す</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-yellow-600 mb-2">2-3日様子見</h3>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• 軽い痛み</li>
                  <li>• 少しの腫れ</li>
                  <li>• 歩行可能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">関連情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/support/medical"
              className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              医療機関を探す
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/symptoms"
              className="inline-flex items-center justify-center px-6 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition-colors"
            >
              症状について調べる
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}