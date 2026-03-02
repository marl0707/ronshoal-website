export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">医療サービス</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="#" className="hover:text-white transition-colors">健診プラス</a>
                            <a href="#" className="hover:text-white transition-colors">健康パスポート</a>
                            <a href="#" className="hover:text-white transition-colors">職場 de クリニック</a>
                            <a href="#" className="hover:text-white transition-colors">足育ナビ</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">ビジネスサービス</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="#" className="hover:text-white transition-colors">AIプロトタイピング工房</a>
                            <a href="#" className="hover:text-white transition-colors">個人事業主向け社会保険</a>
                            <a href="#" className="hover:text-white transition-colors">医療介護経営コンサルティング</a>
                            <a href="#" className="hover:text-white transition-colors">高校企業部</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">会社情報</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/" className="hover:text-white transition-colors">ホーム</a>
                            <a href="/message" className="hover:text-white transition-colors">代表メッセージ</a>
                            <a href="/company" className="hover:text-white transition-colors">会社情報</a>
                            <a href="/contact" className="hover:text-white transition-colors">お問い合わせ</a>
                            <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
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
