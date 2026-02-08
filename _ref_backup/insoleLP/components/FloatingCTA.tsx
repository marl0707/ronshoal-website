'use client';

import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show floating button after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Show popup after 30 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating CTA Button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={handleLineCTA}
            className="!rounded-button bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-bounce"
          >
            <i className="ri-line-fill mr-2 text-xl"></i>
            LINE相談
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-[fadeInUp_0.3s_ease-out]">
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <i className="ri-close-line text-gray-600"></i>
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-green-600 text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                お子様の足、気になりませんか？
              </h3>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                小学生の40％以上に足の問題があります。<br />
                早めの対策で、将来の健康をサポートしませんか？
              </p>

              <div className="space-y-3">
                <button 
                  onClick={handleLineCTA}
                  className="!rounded-button w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <i className="ri-line-fill mr-2"></i>
                  無料で相談してみる
                </button>

                <button 
                  onClick={closePopup}
                  className="!rounded-button w-full bg-gray-100 text-gray-600 py-3 font-semibold hover:bg-gray-200 transition-colors"
                >
                  後で見る
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                相談は完全無料・24時間対応
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}