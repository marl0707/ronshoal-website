
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg" suppressHydrationWarning={true}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-foot-print-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-blue-800">オーダーメイド インソール</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6" suppressHydrationWarning={true}>
            <a href="#insole" className="text-gray-700 hover:text-blue-600 transition-colors">インソールとは</a>
            <a href="#symptoms" className="text-gray-700 hover:text-blue-600 transition-colors">対象症状</a>
            <a href="#assistance" className="text-gray-700 hover:text-blue-600 transition-colors">医療費助成</a>
            <a href="#flow" className="text-gray-700 hover:text-blue-600 transition-colors">利用の流れ</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          <button 
            onClick={handleLineCTA}
            className="!rounded-button bg-green-500 text-white px-6 py-2 font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            公式LINE登録
          </button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {mounted && isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200" suppressHydrationWarning={true}>
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#insole" className="text-gray-700 hover:text-blue-600 transition-colors">インソールとは</a>
              <a href="#symptoms" className="text-gray-700 hover:text-blue-600 transition-colors">対象症状</a>
              <a href="#assistance" className="text-gray-700 hover:text-blue-600 transition-colors">医療費助成</a>
              <a href="#flow" className="text-gray-700 hover:text-blue-600 transition-colors">利用の流れ</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
