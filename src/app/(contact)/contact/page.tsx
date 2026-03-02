"use client";

import { TextReveal } from "@/components/ui/TextReveal";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/ui/Header";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-16 px-6 lg:px-12">
            <Header />
            <div className="max-w-4xl mx-auto pt-8">
                <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">
                        CONTACT
                    </h1>
                    <p className="text-sm md:text-base leading-[2] text-gray-600 mb-16">
                        AI開発、事業相談、その他各種サービスについてのお問い合わせはこちらのフォームよりご連絡ください。<br />
                        内容を確認次第、担当者より折り返しご連絡させていただきます。
                    </p>
                </TextReveal>

                <TextReveal delay={0.1}>
                    <div className="w-full aspect-[21/9] mb-16 overflow-hidden bg-gray-100 group">
                        <img
                            src="https://picsum.photos/seed/contact/1600/900"
                            alt="Contact Support Concept"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                </TextReveal>

                <FadeIn delay={0.2}>
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase">Company Name</label>
                            <input type="text" id="company" className="border-b border-gray-300 py-3 outline-none focus:border-black transition-colors" placeholder="貴社名" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase">Your Name <span className="text-red-500">*</span></label>
                            <input type="text" id="name" required className="border-b border-gray-300 py-3 outline-none focus:border-black transition-colors" placeholder="お名前" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" id="email" required className="border-b border-gray-300 py-3 outline-none focus:border-black transition-colors" placeholder="メールアドレス" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase">Message <span className="text-red-500">*</span></label>
                            <textarea id="message" required rows={5} className="border-b border-gray-300 py-3 outline-none focus:border-black transition-colors resize-none" placeholder="お問い合わせ内容をご記入ください"></textarea>
                        </div>
                        <div className="pt-8">
                            <button className="bg-black text-white px-12 py-4 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </FadeIn>
            </div>
        </main>
    );
}
