'use client';

import { useState, useEffect } from 'react';

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              お子様の健康、<br />
              <span className="text-blue-600">一緒に守りませんか？</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              足の健康は全身の健康の基盤です。<br />
              早めの対策で、お子様の明るい未来をサポートしましょう。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">医師診断による</h3>
              <p className="text-sm text-gray-600">正式な医療行為</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">実質500円程度</h3>
              <p className="text-sm text-gray-600">医療費助成適用</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">24時間対応</h3>
              <p className="text-sm text-gray-600">いつでも相談OK</p>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 mb-8 border-2 border-red-200">
            <div className="flex items-center justify-center gap-4 mb-4">
              <i className="ri-time-line text-red-500 text-3xl animate-pulse"></i>
              <div>
                <h3 className="text-xl font-bold text-red-600">限定タイマー</h3>
                <p className="text-sm text-gray-600">特別プレゼントの残り時間</p>
              </div>
            </div>
            
            <div className="text-4xl font-bold text-red-600 mb-2" suppressHydrationWarning={true}>
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
            
            <p className="text-sm text-gray-600">
              時間内にご登録いただくと、特別プレゼントをお渡しします
            </p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleLineCTA}
              className="!rounded-button w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-6 text-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <i className="ri-line-fill mr-4 text-3xl"></i>
              今すぐ無料相談を始める
            </button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                <span>相談無料</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                <span>24時間対応</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-check-line text-green-600"></i>
                <span>特典プレゼント</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 leading-relaxed">
              ※医療費助成制度の内容は地域により異なります<br />
              ※症状により保険適応とならない場合があります<br />
              ※まずはお気軽にご相談ください
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}