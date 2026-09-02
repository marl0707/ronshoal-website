import type { Metadata } from 'next';
import { Footer } from '@/components/ui/Footer';

// 運営者情報。2026-09-02 新設。
//
// 社長指示: 「わかりにくいところに表示」「電話番号などは載せず info@ronshoal.com だけ」。
// → ヘッダーナビには出さず、フッターの「会社情報」列からのみ辿れるようにしてある。
//   目立たせないが、クローラと審査担当は辿れる（sitemap.xml にも掲載済み）。
//
// ⚠️ 記載しているのは正本（/secret のタイムライン）にある事実のみ。
//   **所在地は正本に無いため書いていない。**推測で埋めないこと。
//   電話番号も社長指示により記載しない。
export const metadata: Metadata = {
    title: '運営者情報｜ロンショール合同会社',
    description:
        'ロンショール合同会社（Ronshoal LLC）の運営者情報。会社名・代表者・設立年・事業内容と、お問い合わせ先メールアドレスを記載しています。',
    alternates: { canonical: 'https://www.ronshoal.com/operator' },
};

const ROWS: { label: string; value: React.ReactNode }[] = [
    { label: '運営者', value: 'ロンショール合同会社（Ronshoal LLC）' },
    { label: '代表者', value: '代表社員　瀬島 和樹' },
    { label: '設立', value: '2020年' },
    {
        label: '事業内容',
        value: (
            <ul className="list-disc pl-5 space-y-1">
                <li>労災二次健診システム「健診プラス」の提供・運営</li>
                <li>AI駆動のシステム受託開発「AI Burger」</li>
                <li>Webメディアの運営（I LOVE PICKLEBALL／マレーシア生活情報局）</li>
                <li>医療・テクノロジー領域のビジネスコンサルティング</li>
            </ul>
        ),
    },
    {
        label: 'お問い合わせ',
        value: (
            <a href="mailto:info@ronshoal.com" className="text-blue-600 underline hover:no-underline">
                info@ronshoal.com
            </a>
        ),
    },
];

export default function OperatorPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ロンショール合同会社',
        alternateName: 'Ronshoal LLC',
        url: 'https://www.ronshoal.com',
        foundingDate: '2020',
        founder: { '@type': 'Person', name: '瀬島 和樹' },
        email: 'info@ronshoal.com',
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="min-h-screen bg-white text-gray-900">
                <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">運営者情報</h1>
                    <p className="text-sm text-gray-500 mb-10">Operator Information</p>

                    <dl className="divide-y divide-gray-200 border-t border-gray-200">
                        {ROWS.map((r) => (
                            <div key={r.label} className="py-5 md:grid md:grid-cols-4 md:gap-6">
                                <dt className="text-sm font-semibold text-gray-600 mb-1 md:mb-0">{r.label}</dt>
                                <dd className="text-sm md:text-base text-gray-800 md:col-span-3">{r.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <p className="mt-10 text-xs text-gray-500 leading-relaxed">
                        お問い合わせは上記メールアドレス、または
                        <a href="/contact" className="text-blue-600 underline hover:no-underline mx-1">お問い合わせフォーム</a>
                        よりご連絡ください。個人情報の取り扱いについては
                        <a href="/privacy" className="text-blue-600 underline hover:no-underline mx-1">プライバシーポリシー</a>
                        をご確認ください。
                    </p>
                </div>
                <Footer />
            </main>
        </>
    );
}
