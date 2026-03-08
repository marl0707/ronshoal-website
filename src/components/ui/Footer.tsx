export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">メディア・コミュニティ</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <span className="text-zinc-500">マレーシア生活情報局</span>
                            <span className="text-zinc-500">I LOVE PICKLEBALL</span>
                            <span className="text-zinc-500">AI研究会</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">プロダクト・SaaS</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <span className="text-zinc-500">G-Scope</span>
                            <span className="text-zinc-500">OneFunnel LMS</span>
                            <span className="text-zinc-500">みんなde日程調整</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">医療・ヘルスケア / その他</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <span className="text-zinc-500">労災二次健診オンラインシステム</span>
                            <span className="text-zinc-500">ZEN CELLS</span>
                            <span className="text-zinc-500">M&A Chapter</span>
                            <span className="text-zinc-500">NFCts</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">会社情報</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/" className="hover:text-white transition-colors">ホーム</a>
                            <a href="/secret" className="hover:text-white transition-colors">Secret World</a>
                            <span className="text-zinc-500">プライバシーポリシー</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm text-zinc-600">
                    ©️2021 Ronshoal.llc | Good Small Company
                </div>
            </div>
        </footer>
    );
};
