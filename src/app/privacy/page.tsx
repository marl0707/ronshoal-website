import type { Metadata } from "next";
import { Footer } from "@/components/ui/Footer";
import { LegalLayout, Section } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
    title: "プライバシーポリシー | ロンショール合同会社",
    description:
        "ロンショール合同会社が運営するウェブサイトにおける個人情報の取り扱い、Cookie の利用、広告配信・アクセス解析について定めた方針です。",
    alternates: { canonical: "https://www.ronshoal.com/privacy" },
};

const UPDATED = "2026年8月15日";

export default function PrivacyPage() {
    return (
        <>
            <LegalLayout title="プライバシーポリシー" enTitle="PRIVACY POLICY" updated={UPDATED}>
                <p>
                    ロンショール合同会社（以下「当社」）は、当社が運営するウェブサイトおよびサービス（以下あわせて「本サイト」）における
                    利用者の情報の取り扱いについて、以下のとおり定めます。本方針は個人情報の保護に関する法律その他の関係法令に従います。
                </p>

                <Section n="1" title="事業者">
                    <dl className="grid grid-cols-[7rem_1fr] gap-y-2 text-sm">
                        <dt className="text-gray-500">名称</dt>
                        <dd>ロンショール合同会社</dd>
                        <dt className="text-gray-500">代表</dt>
                        <dd>瀬島 和樹</dd>
                        <dt className="text-gray-500">連絡先</dt>
                        <dd>
                            <a className="underline underline-offset-4 hover:opacity-60" href="mailto:sejimakazuki@ronshoal.com">
                                sejimakazuki@ronshoal.com
                            </a>
                        </dd>
                    </dl>
                </Section>

                <Section n="2" title="取得する情報">
                    <p>本サイトでは、次の情報を取得することがあります。</p>
                    <ul>
                        <li>お問い合わせの際にご入力いただくお名前・メールアドレス・お問い合わせ内容</li>
                        <li>本サイトの閲覧履歴、閲覧環境（ブラウザの種類、参照元、端末の種別、IPアドレス等）</li>
                        <li>Cookie およびこれに類する技術によって生成される識別子</li>
                    </ul>
                    <p>
                        当社は、思想・信条や病歴などの要配慮個人情報を、本サイトを通じて取得することはありません。
                    </p>
                </Section>

                <Section n="3" title="利用目的">
                    <ul>
                        <li>お問い合わせへの回答および必要な連絡</li>
                        <li>本サイトの運営、維持、改善および利用状況の分析</li>
                        <li>広告の配信および配信効果の測定</li>
                        <li>法令に基づく対応</li>
                    </ul>
                </Section>

                <Section n="4" title="Cookie の利用">
                    <p>
                        Cookie は、利用者のブラウザに保存される小さなテキストファイルです。本サイトでは、利用状況の把握と広告配信のために
                        Cookie を利用します。Cookie には利用者個人を直接特定する情報は含まれません。
                    </p>
                    <p>
                        Cookie の受け入れはブラウザの設定によって拒否できます。ただし、その場合に本サイトの一部の機能がご利用いただけないことがあります。
                    </p>
                </Section>

                <Section n="5" title="広告配信について">
                    <p>
                        本サイトは、第三者配信の広告サービス（Google AdSense を含みます）を利用することがあります。
                        広告配信事業者は、利用者の興味に応じた広告を表示するために Cookie を使用し、本サイトや他のサイトへのアクセス情報を利用することがあります。
                    </p>
                    <p>
                        Google が広告 Cookie を使用することにより、利用者が本サイトや他のサイトにアクセスした情報に基づいて広告を配信することがあります。
                        パーソナライズ広告は{" "}
                        <a className="underline underline-offset-4 hover:opacity-60" href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                            Google の広告設定
                        </a>
                        から無効にできます。また、第三者配信事業者による Cookie の利用は{" "}
                        <a className="underline underline-offset-4 hover:opacity-60" href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                            aboutads.info
                        </a>
                        で無効にできます。
                    </p>
                    <p>
                        本サイトの一部では、商品・サービスを紹介するアフィリエイトプログラムを利用しており、
                        リンク経由での購入に対して当社が紹介料を受け取ることがあります。紹介料の有無が紹介内容の評価を左右しないよう努めます。
                    </p>
                </Section>

                <Section n="6" title="アクセス解析">
                    <p>
                        本サイトでは、利用状況を把握するために Google Analytics を利用しています。Google Analytics は Cookie を利用して
                        個人を特定しない形で情報を収集します。収集の停止は{" "}
                        <a className="underline underline-offset-4 hover:opacity-60" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                            Google アナリティクス オプトアウト アドオン
                        </a>
                        から行えます。
                    </p>
                </Section>

                <Section n="7" title="第三者への提供">
                    <p>
                        当社は、次の場合を除き、取得した個人情報を本人の同意なく第三者に提供しません。
                    </p>
                    <ul>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要であって、本人の同意を得ることが困難な場合</li>
                        <li>利用目的の達成に必要な範囲で業務を委託する場合（この場合、委託先に対して必要かつ適切な監督を行います）</li>
                    </ul>
                </Section>

                <Section n="8" title="安全管理">
                    <p>
                        当社は、取得した情報の漏えい、滅失またはき損を防ぐため、アクセス権限の管理と通信の暗号化を含む必要かつ適切な措置を講じます。
                    </p>
                </Section>

                <Section n="9" title="開示・訂正・利用停止">
                    <p>
                        利用者は、当社が保有するご自身の個人情報について、開示、訂正、追加、削除、利用停止を求めることができます。
                        下記の連絡先までご連絡いただければ、法令に従って対応いたします。
                    </p>
                </Section>

                <Section n="10" title="お問い合わせ">
                    <p>
                        本方針および個人情報の取り扱いに関するお問い合わせは、
                        <a className="underline underline-offset-4 hover:opacity-60" href="mailto:sejimakazuki@ronshoal.com">
                            sejimakazuki@ronshoal.com
                        </a>
                        までお願いいたします。
                    </p>
                </Section>

                <Section n="11" title="改定">
                    <p>
                        当社は、必要に応じて本方針を変更することがあります。変更後の内容は本ページに掲載した時点から効力を生じます。
                    </p>
                </Section>
            </LegalLayout>
            <Footer />
        </>
    );
}
