export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">医療関連事業</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/services/kenshin-plus" className="hover:text-white transition-colors">健診プラス - 労災二次健診オンラインシステム</a>
                            {/* 健康パスポート（オンライン診療）・骨髄由来エクソソーム治療・医療ダイエットは休止中のため非表示（2026-07-06） */}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">IT関連事業</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/services/ai-burger" className="hover:text-white transition-colors">AIバーガー - AI受注開発サービス</a>
                            {/* NFCts・かざす写真館は谷口松雄堂側へ移管済み（2026-07-04）のため自社IT事業欄から除外（2026-07-06） */}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">メディア事業</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/pickleball/" className="hover:text-white transition-colors">I LOVE PICKLEBALL - ピックルボール総合情報</a>
                            <a href="/pickleball/articles" className="hover:text-white transition-colors pl-4">・記事・ニュース</a>
                            <a href="/pickleball/facilities" className="hover:text-white transition-colors pl-4">・コート・施設情報</a>
                            <a href="/malaysia/" className="hover:text-white transition-colors">マレーシア生活情報局</a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-blue-400 mb-6">会社情報</h4>
                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <a href="/" className="hover:text-white transition-colors">ホーム</a>
                            <a href="/secret" className="hover:text-white transition-colors">Secret World</a>
                            <a href="/contact" className="hover:text-white transition-colors">お問い合わせ</a>
                            <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
                            {/* 2026-09-02: 運営者情報。社長指示によりヘッダーナビには出さず、
                                ここからのみ辿れるようにする（クローラと審査担当は辿れる）。 */}
                            <a href="/operator" className="hover:text-white transition-colors">運営者情報</a>
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
