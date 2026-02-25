'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              RegenCare
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              骨髄由来エクソソームを使用した
              最先端の再生医療で、
              あなたの美と健康をサポートします。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">医療サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/kenshin-plus" className="text-gray-300 hover:text-white transition-colors">
                  健診プラス
                </a>
              </li>
              <li>
                <a href="/health-passport" className="text-gray-300 hover:text-white transition-colors">
                  健康パスポート
                </a>
              </li>
              <li>
                <a href="/workplace-clinic" className="text-gray-300 hover:text-white transition-colors">
                  職場 de クリニック
                </a>
              </li>
              <li>
                <a href="/ashisuku-navi" className="text-gray-300 hover:text-white transition-colors">
                  足育ナビ
                </a>
              </li>
              <li>
                <a href="/medical-diet" className="text-gray-300 hover:text-white transition-colors">
                  医療ダイエット
                </a>
              </li>
              <li>
                <a href="/sleep-apnea" className="text-gray-300 hover:text-white transition-colors">
                  睡眠時無呼吸症候群治療
                </a>
              </li>
              <li>
                <a href="/mens-health" className="text-gray-300 hover:text-white transition-colors">
                  男性ヘルスケア
                </a>
              </li>
              <li>
                <a href="/exosome" className="text-gray-300 hover:text-white transition-colors">
                  エクソソーム治療
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">ビジネスサービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/ai-burger" className="text-gray-300 hover:text-white transition-colors">
                  AIバーガー
                </a>
              </li>
              <li>
                <a href="/social-insurance" className="text-gray-300 hover:text-white transition-colors">
                  個人事業主向け社会保険
                </a>
              </li>
              <li>
                <a href="/medical-consulting" className="text-gray-300 hover:text-white transition-colors">
                  医療介護経営コンサルティング
                </a>
              </li>
              <li>
                <a href="/high-school-business" className="text-gray-300 hover:text-white transition-colors">
                  高校企業部
                </a>
              </li>
              <li>
                <a href="/agi-step" className="text-gray-300 hover:text-white transition-colors">
                  AGIステップ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  よくある質問
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  お問い合わせ
                </button>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  会社情報
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">診療時間</h4>
            <div className="text-gray-300 space-y-1 text-sm">
              <div>平日: 10:00-19:00</div>
              <div>土曜: 10:00-17:00</div>
              <div>日祝: 休診</div>
            </div>
            <div className="mt-4">
              <div className="text-xs text-gray-400 mb-2">お電話でのご予約</div>
              <div className="text-lg font-semibold">03-1234-5678</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 RegenCare 再生医療クリニック. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              医療広告ガイドラインに準拠しています
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <h5 className="text-lg font-semibold mb-3">重要なお知らせ</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• 本治療は保険適用外の自由診療です</li>
            <li>• 効果には個人差があり、すべての方に同様の効果を保証するものではありません</li>
            <li>• 治療前には必ず医師による診察とカウンセリングをお受けください</li>
            <li>• 副作用やリスクについては事前に十分ご説明いたします</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}