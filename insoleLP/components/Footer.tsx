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
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              RegenCare
            </h3>
            <p className="text-gray-300 leading-relaxed">
              骨髄由来エクソソームを使用した
              最先端の再生医療で、
              あなたの美と健康をサポートします。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  ホーム
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  エクソソームとは
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('effects')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  効果・効能
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  施術の流れ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  料金
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
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
                <span className="text-gray-300">プライバシーポリシー</span>
              </li>
              <li>
                <span className="text-gray-300">利用規約</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">診療時間</h4>
            <div className="text-gray-300 space-y-1">
              <div>平日: 10:00-19:00</div>
              <div>土曜: 10:00-17:00</div>
              <div>日祝: 休診</div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-400 mb-2">お電話でのご予約</div>
              <div className="text-xl font-semibold">03-1234-5678</div>
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