'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    inquiry_type: '',
    message: '',
    privacy_agreed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy_agreed) {
      alert('プライバシーポリシーに同意してください。');
      return;
    }

    if (formData.message.length > 500) {
      alert('メッセージは500文字以内で入力してください。');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          inquiry_type: '',
          message: '',
          privacy_agreed: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            アクセス・お問い合わせ
          </h2>
          <p className="text-xl text-gray-600">
            ご質問やご相談、無料カウンセリングのご予約はこちらから
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                クリニック情報
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-building-line text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">クリニック名</div>
                    <div className="text-gray-700">RegenCare 再生医療クリニック</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-map-pin-line text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">所在地</div>
                    <div className="text-gray-700">
                      〒107-0052<br />
                      東京都港区赤坂2-14-5 Daiwa赤坂ビル 8F
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-phone-line text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">電話番号</div>
                    <div className="text-gray-700">03-1234-5678</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-time-line text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">診療時間</div>
                    <div className="text-gray-700">
                      平日: 10:00-19:00<br />
                      土曜: 10:00-17:00<br />
                      日祝: 休診
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-train-line text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">アクセス</div>
                    <div className="text-gray-700">
                      東京メトロ千代田線「赤坂駅」徒歩3分<br />
                      東京メトロ銀座線「赤坂見附駅」徒歩5分
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-4 h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.096!2d139.737!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0x3c0b0a5e93c7b4d!2z6LWk5Z2C6aeF!5e0!3m2!1sja!2sjp!4v1634567890123!5m2!1sja!2sjp"
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="クリニック所在地"
              ></iframe>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                お問い合わせフォーム
              </h3>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 mr-2"></i>
                    <span className="text-green-800">お問い合わせを受け付けました。担当者から3営業日以内にご連絡いたします。</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    <span className="text-red-800">送信に失敗しました。お手数ですが、再度お試しください。</span>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      年齢
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="18"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pr-8"
                  >
                    <option value="">選択してください</option>
                    <option value="consultation">無料カウンセリング予約</option>
                    <option value="treatment">治療に関するご質問</option>
                    <option value="pricing">料金に関するご質問</option>
                    <option value="safety">安全性に関するご質問</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    メッセージ
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                    placeholder="ご質問やご要望をお聞かせください（500文字以内）"
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500文字
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacy_agreed"
                    checked={formData.privacy_agreed}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3"
                  />
                  <label className="text-sm text-gray-700">
                    <span className="text-red-500">*</span>
                    プライバシーポリシーに同意し、個人情報の取り扱いについて了承します。
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}