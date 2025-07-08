'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.8)), url('https://readdy.ai/api/search-image?query=modern%20medical%20laboratory%20with%20scientific%20equipment%2C%20clean%20white%20environment%2C%20bright%20lighting%2C%20professional%20healthcare%20setting%20with%20advanced%20technology%2C%20molecular%20research%20background%2C%20minimalist%20design%20with%20blue%20and%20white%20color%20scheme%2C%20high-tech%20medical%20facility%20interior&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            最先端の再生医療技術で
            <br />
            <span className="text-blue-600">内側から輝く美しさへ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            骨髄由来エクソソームを使用した自己注射による革新的な美容・治療サービス
            <br />
            あなたの細胞レベルから健康と美しさをサポートします
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-12 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              骨髄由来エクソソーム自己注射療法とは
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              骨髄から抽出したエクソソームには、細胞の再生や修復に必要な成長因子や抗炎症物質が豊富に含まれています。
              自己注射により、肌質改善、アンチエイジング、組織修復などの効果が期待できる最先端の再生医療技術です。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
            >
              無料カウンセリング予約
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}