import Link from "next/link";
import type { ReactNode } from "react";

// 規約・ポリシーなど「読ませる」ページの共通の器。
// トップページの演出（スプラッシュ待ちの Header）は法的ページには重いので使わず、
// ロゴだけの簡素なヘッダーと白地の本文で構成する。
export function LegalLayout({
    title,
    enTitle,
    updated,
    children,
}: {
    title: string;
    enTitle: string;
    updated?: string;
    children: ReactNode;
}) {
    return (
        <main className="min-h-screen bg-white text-corp-main">
            <div className="px-6 py-8 md:px-12">
                <Link href="/" className="inline-flex items-center hover:opacity-60 transition-opacity">
                    <img
                        src="/ronshoal-logo-final.png"
                        alt="Ronshoal LLC"
                        className="h-6 md:h-7 w-auto object-contain"
                    />
                </Link>
            </div>

            <article className="mx-auto max-w-2xl px-6 pb-24 md:pb-32">
                <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400">{enTitle}</p>
                <h1 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
                {updated && (
                    <p className="mt-3 text-xs text-gray-400">最終改定：{updated}</p>
                )}

                <div className="mt-12 space-y-10 text-[15px] leading-[1.9] text-gray-700 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:pl-4 [&_li]:relative [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:content-['—'] [&_li]:before:text-gray-300">
                    {children}
                </div>
            </article>
        </main>
    );
}

export function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
    return (
        <section>
            <h2 className="flex items-baseline gap-3 text-base font-bold text-corp-main">
                <span className="text-xs text-gray-300 tabular-nums">{n}</span>
                {title}
            </h2>
            <div className="mt-1">{children}</div>
        </section>
    );
}
