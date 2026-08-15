import type { Metadata } from "next";
import { Footer } from "@/components/ui/Footer";
import { LegalLayout, Section } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
    title: "お問い合わせ | ロンショール合同会社",
    description:
        "ロンショール合同会社へのお問い合わせ窓口です。事業のご相談、メディア掲載、広告掲載についてはメールにてご連絡ください。",
    alternates: { canonical: "https://www.ronshoal.com/contact" },
};

const MAIL = "sejimakazuki@ronshoal.com";

export default function ContactPage() {
    return (
        <>
            <LegalLayout title="お問い合わせ" enTitle="CONTACT">
                <p>
                    ご相談・ご依頼・取材のお申し込みは、メールにてお願いいたします。
                    内容を確認のうえ、担当より折り返しご連絡いたします。
                </p>

                <Section n="1" title="メールでのお問い合わせ">
                    <p className="!mt-6">
                        <a
                            className="inline-flex items-center gap-2 border border-corp-main px-6 py-3 text-sm font-bold tracking-wide transition-colors hover:bg-corp-main hover:text-white"
                            href={`mailto:${MAIL}`}
                        >
                            {MAIL}
                        </a>
                    </p>
                    <p className="text-sm text-gray-500">
                        お問い合わせの際は、会社名・お名前・ご用件を本文にご記載ください。
                        通常2〜3営業日以内にご返信いたします。
                    </p>
                </Section>

                <Section n="2" title="運営メディアについて">
                    <p>
                        各メディアの記事内容・掲載情報・広告掲載に関するお問い合わせは、それぞれのサイトの窓口をご利用いただくとスムーズです。
                    </p>
                    <ul>
                        <li>
                            <a className="underline underline-offset-4 hover:opacity-60" href="/pickleball/">
                                I LOVE PICKLEBALL
                            </a>
                            ｜ピックルボールの施設・大会・ギアの情報メディア
                        </li>
                        <li>
                            <a className="underline underline-offset-4 hover:opacity-60" href="/malaysia/ja/contact">
                                マレーシア生活情報局
                            </a>
                            ｜クアラルンプールの学校・住まい・医療・グルメの生活情報メディア
                        </li>
                    </ul>
                </Section>

                <Section n="3" title="個人情報の取り扱い">
                    <p>
                        お問い合わせいただいた内容および連絡先は、回答と必要な連絡のためにのみ利用します。
                        詳しくは
                        <a className="underline underline-offset-4 hover:opacity-60" href="/privacy">
                            プライバシーポリシー
                        </a>
                        をご覧ください。
                    </p>
                </Section>
            </LegalLayout>
            <Footer />
        </>
    );
}
