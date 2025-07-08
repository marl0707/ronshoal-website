'use client';

import { useState } from 'react';

export default function SymptomChecklist() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const symptoms = [
    { id: 1, text: "転びやすい", icon: "ri-run-line" },
    { id: 2, text: "足が痛い", icon: "ri-heart-pulse-line" },
    { id: 3, text: "靴の減り方が違う", icon: "ri-footprint-line" },
    { id: 4, text: "姿勢が悪い", icon: "ri-user-line" },
    { id: 5, text: "X脚・O脚", icon: "ri-arrow-left-right-line" },
    { id: 6, text: "扁平足", icon: "ri-foot-print-line" },
    { id: 7, text: "スポーツでケガ", icon: "ri-football-line" },
    { id: 8, text: "疲れやすい", icon: "ri-battery-low-line" }
  ];

  const handleCheck = (id: number) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleLineCTA = () => {
    window.open('https://s.lmes.jp/landing-qr/2007556008-zPJe1JKN?uLand=CHhFB9', '_blank');
  };

  return (
    <section id="symptoms" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          症状チェックリスト
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          お子様に当てはまる症状はありませんか？
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {symptoms.map((symptom) => (
            <div 
              key={symptom.id}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                checkedItems.includes(symptom.id)
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
              }`}
              onClick={() => handleCheck(symptom.id)}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  checkedItems.includes(symptom.id)
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {checkedItems.includes(symptom.id) && (
                    <i className="ri-check-line text-white text-sm"></i>
                  )}
                </div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  checkedItems.includes(symptom.id)
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <i className={`${symptom.icon} text-xl`}></i>
                </div>
                
                <span className={`font-semibold text-lg ${
                  checkedItems.includes(symptom.id)
                    ? 'text-blue-800'
                    : 'text-gray-700'
                }`}>
                  {symptom.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {checkedItems.length > 0 && (
          <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                <i className="ri-error-warning-line"></i>
                {checkedItems.length}つの症状が該当しています
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              1つでも該当したら、お気軽にご相談ください
            </h3>
            
            <button 
              onClick={handleLineCTA}
              className="!rounded-button bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <i className="ri-line-fill mr-3 text-xl"></i>
              LINE で無料相談する
            </button>
          </div>
        )}
      </div>
    </section>
  );
}