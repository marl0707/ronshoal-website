
'use client';

export default function HeroSection() {
  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  return (
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            ケガをしない体づくりは、<br />
            <span className="text-green-600">足元から始まります</span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
              医師の診断のもと、保険適応でオーダーメイドインソールが作れます
            </p>
            <p className="text-lg md:text-xl text-green-700 font-bold bg-green-50 py-3 px-6 rounded-full inline-block">
              18歳以下なら小児医療費助成で最大500円/日で作成可能
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20children%20playing%20sports%2C%20running%20and%20jumping%20outdoors%2C%20natural%20lighting%2C%20vibrant%20colors%2C%20healthy%20active%20lifestyle%2C%20playground%20setting%2C%20diverse%20group%20of%20kids%20aged%205-15%2C%20bright%20sunny%20day%2C%20soft%20shadows%2C%20high%20quality%20photography%2C%20joyful%20expressions&width=600&height=400&seq=hero1&orientation=landscape"
              alt="元気に遊ぶ子どもたち"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Children%20playing%20various%20sports%20activities%2C%20soccer%20football%20baseball%20tennis%2C%20athletic%20kids%20in%20sports%20uniforms%2C%20action%20shots%2C%20dynamic%20movements%2C%20professional%20sports%20photography%2C%20bright%20stadium%20lighting%2C%20competitive%20spirit%2C%20team%20sports&width=600&height=400&seq=hero2&orientation=landscape"
              alt="スポーツを楽しむ子どもたち"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={handleLineCTA}
            className="!rounded-button bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-4 text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <i className="ri-line-fill mr-3 text-2xl"></i>
            今すぐ無料相談を始める
          </button>
          <p className="text-gray-600 mt-4">24時間受付・相談無料</p>
        </div>
      </div>
    </section>
  );
}
