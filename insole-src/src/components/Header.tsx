'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: '年齢別', href: '/age-guide' },
    { name: '症状', href: '/symptoms' },
    { name: 'スポーツ', href: '/sports' },
    { name: '専門家', href: '/support' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-white font-black text-lg transform rotate-3 hover:rotate-6 transition-transform">
                  足
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-black text-gray-900">足育（あしすく）</span>
                <span className="text-2xl font-light text-gray-600">ナビ</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2 text-gray-700 hover:text-purple-600 font-medium rounded-full hover:bg-purple-50 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/practice/insole" className="ml-4 px-6 py-2 gradient-button text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition">
              オーダーメイドインソール情報
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/practice/insole"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              オーダーメイドインソール情報
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;