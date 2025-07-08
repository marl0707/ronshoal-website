'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
              RegenCare
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              ホーム
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              エクソソームとは
            </button>
            <button onClick={() => scrollToSection('effects')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              効果・効能
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              施術の流れ
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              料金
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              よくある質問
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              お問い合わせ
            </button>
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              予約・相談
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl"></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                ホーム
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                エクソソームとは
              </button>
              <button onClick={() => scrollToSection('effects')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                効果・効能
              </button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                施術の流れ
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                料金
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                よくある質問
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                お問い合わせ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap mt-4"
              >
                予約・相談
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}