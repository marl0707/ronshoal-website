export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">医療サービス</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <span className="text-zinc-500">健診プラス</span>
                            <span className="text-zinc-500">健康パスポート</span>
                            <span className="text-zinc-500">職場 de クリニック</span>
                            <span className="text-zinc-500">足育ナビ</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">ビジネスサービス</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <span className="text-zinc-500">AIプロトタイピング工房</span>
                            <span className="text-zinc-500">個人事業主向け社会保険</span>
                            <span className="text-zinc-500">医療介護経営コンサルティング</span>
                            <span className="text-zinc-500">高校企業部</span>
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
