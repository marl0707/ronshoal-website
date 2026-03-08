export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">医療関連事業</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/services/kenshin-plus" className="hover:text-white transition-colors">健診プラス - 労災二次健診オンラインシステム</a>
                            <span className="text-zinc-300 mt-2">健康パスポート - オンライン診療プラットフォーム</span>
                            <a href="/services/kenko-passport/exosome" className="hover:text-white transition-colors pl-4">・骨髄由来エクソソーム治療</a>
                            <a href="/services/kenko-passport/medical-diet" className="hover:text-white transition-colors pl-4">・医療ダイエット</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">IT関連事業</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/services/ai-burger" className="hover:text-white transition-colors">AIバーガー - AI受注開発サービス</a>
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
