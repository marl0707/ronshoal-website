import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

/**
 * 会員制旅行サービス（Travel Advantage / MWR Life）の案内ページ。
 *
 * 設計の根拠は 24_MWRLife/PAGE_構成案_20260826.md、
 * 事実の出典は 24_MWRLife/knowledge/ の各レコード（コメントの C-xxx がレコードID）。
 *
 * 🔴 このページで守っていること（24_MWRLife/knowledge/02_compliance_rules.md）
 *  - 最上部で「勧誘目的・商品の種類・事業者名」を明示（特商法33条の2）
 *  - 報酬・収入に触れる箇所には必ず収入開示（IDS）の実数を併記（MWR P&P §3）
 *  - 「政府公認」「最大◯%オフ」「無料」「不労所得」「権利収入」を使わない
 *  - 登録URLを直接置かない。着地はチームLP（特商法37条1項の書面交付を飛ばさない）
 *  - 数値には取得日を併記する
 */

const LP_URL = "https://mwrlifejp.com/lp/girigiri";
const LINE_URL = "https://line.me/R/ti/p/@376hrzfg";

// NOINDEX_20260827: 社長指示（2026-08-27）— 当社が MWR を扱っていることを検索から辿らせない。
// 直リンクでのみ到達させる。サイト内リンク・sitemap には元から載せていない。
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "会員制の旅行サービスという選択肢 | ロンショール合同会社",
  description:
    "Travel Advantage（MWR Life）の費用・仕組み・実測した価格・そして公表されている収入の実態を、都合の悪い数字も含めてそのまま載せています。連鎖販売取引の勧誘を含むご案内です。",
};

function Stat({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="text-3xl font-bold text-corp-main">{value}</div>
      <div className="mt-1 text-sm font-medium text-gray-700">{label}</div>
      {note && <div className="mt-2 text-xs text-gray-500 leading-relaxed">{note}</div>}
    </div>
  );
}

function Section({ id, eyebrow, title, children }: {
  id: string; eyebrow?: string; title: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 border-t border-gray-100">
      {eyebrow && <p className="text-xs tracking-widest text-gray-500 mb-2">{eyebrow}</p>}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-corp-main">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">{children}</div>
    </section>
  );
}

export default function TravelClubPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-corp-main">
        {/* ── 1. 法定表示（特商法33条の2）：最上部・スクロールなしで読める位置 ── */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-6 py-4 text-[13px] leading-relaxed text-gray-700">
            <strong className="text-corp-main">ロンショール合同会社（担当：瀬島和樹）</strong>からのご案内です。
            会員制の旅行サービス「Travel Advantage™」のご紹介と、
            <strong className="text-corp-main">MWR Life の連鎖販売取引（いわゆるMLM）への参加を勧誘する目的</strong>を含みます。
            ご参加には登録費用・月額費用がかかり、<strong className="text-corp-main">収入は保証されません</strong>。
            当社は MWR Life の独立系 Lifestyle Ambassador であり、MWR Life の公式サイトではありません。
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          {/* ── 2. 結論を先に ── */}
          <section className="pt-14 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              得になる人と、<br />ならない人がいます。
            </h1>
            <p className="text-[15px] leading-relaxed text-gray-800">
              会員制の旅行サービスです。月額を払うと、その額以上のポイントが毎月たまり、旅行代金に使えます。
              ホテルも会員価格で予約できます。
            </p>
            <p className="text-[15px] leading-relaxed text-gray-800 mt-4">
              ただし<strong>年に1回しか旅行しない方には、費用を上回りません</strong>。
              紹介による報酬もありますが、後述するとおり
              <strong>公表されている実績は、多くの人にとって費用に届いていません</strong>。
              このページは、その両方をそのまま載せています。
            </p>
          </section>

          {/* ── 3. 費用の全体像（C-202） ── */}
          <Section id="cost" eyebrow="COST" title="まず、かかるお金">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
              <Stat value="$589" label="入会時（Elite + TURBO）" note="初期手数料 $120 ＋ ビジネス会費 $99 ＋ 初回30日分 $119.97 ＋ ターボ $249.97" />
              <Stat value="$119.97" label="月額" note="会員種別により異なります" />
              <Stat value="$1,908.61" label="初年度の合計" note="2年目以降は $1,538.64" />
            </div>
            <p className="text-sm text-gray-600">
              金額は公式資料（2026年8月25日 取得）に基づきます。為替と時期により変わります。
              このほかに紹介活動を行う場合は年間ビジネス会費 $99 がかかります。
            </p>
          </Section>

          {/* ── 4. 仕組み（C-203 / C-203b / C-1005） ── */}
          <Section id="points" eyebrow="HOW IT WORKS" title="ポイントの仕組みと、その制限">
            <p>
              月額を払うと、ロイヤリティポイントがたまります。1ポイント＝1米ドルとして旅行代金に充当できます。
              ターボ会員の場合、年間の会費に対しておよそ2倍のポイントがたまるため、
              <strong>1ポイントあたり約 $0.5 で取得している計算</strong>になります。
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-[14px] space-y-2">
              <p className="font-semibold text-amber-900">先に制限をお伝えします</p>
              <ul className="list-disc pl-5 space-y-1 text-amber-900">
                <li>商品ごとに使用上限があり、通常はためたポイントを使い切れません</li>
                <li>上限が外れるのは<strong>12か月継続したあと</strong>で、対象は一部の企画に限られます</li>
                <li>ポイントは<strong>分割して使えません</strong>。使うときは1回でまとめて使います</li>
                <li><strong>プランを下げると、たまっていたポイントは全て失われます</strong></li>
                <li>現金化・譲渡はできません</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              ポイントとは別に「トラベルクレジット」があり、こちらは100クレジット＝1米ドルです。単位が異なります。
            </p>
          </Section>

          {/* ── 5. 価格の実測（C-301〜C-303） ── */}
          <Section id="price" eyebrow="MEASURED" title="本当に安いのか、実際に測りました">
            <p>
              同じホテル・同じ日程・大人2名1室の条件で、一般の予約サイトの販売価格と会員価格を1件ずつ突き合わせています。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
              <Stat value="16,876軒" label="比較したホテル" />
              <Stat value="89%" label="会員価格の方が安かった割合" />
              <Stat value="14%" label="安さの中央値" />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-[14px]">
              <p className="font-semibold mb-2">正直にお伝えすること</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                <li><strong>すべての予約が安くなるわけではありません。</strong>日程やホテルによっては一般の予約サイトの方が安い場合があります</li>
                <li>土曜は水曜のおよそ1.4倍の相場です。曜日を書かない割引率は、どの曜日を測ったかの産物になります</li>
                <li>航空券には最安値保証がありません</li>
                <li>他社の方が安かった場合の返還は現金ではなく「トラベルクレジット」（100クレジット＝1米ドル）です</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">日本12都市・海外20都市を自動取得して比較（2026年8月23日 時点）。</p>
          </Section>

          {/* ── 6. Life Experience（C-901 / C-903） ── */}
          <Section id="le" eyebrow="LIFE EXPERIENCE" title="会員限定のグループ旅行">
            <p>
              宿泊・現地の移動・食事・アクティビティがひとつの価格に含まれる企画型の旅行です（航空券は別途）。
              当社が会員ページから実測したところ、<strong>受付中は50企画</strong>、
              そのうち<strong>ポイントで全額をまかなえる対象は23企画</strong>でした（2026年8月25日 取得）。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
              <Stat value="50企画" label="受付中" />
              <Stat value="23企画" label="ポイント全額の対象" />
              <Stat value="$269〜" label="1名あたりの価格帯" note="中央値 $699・航空券は別途" />
            </div>
            <p className="text-sm text-gray-600">
              価格・催行日・空席は変動します。ご案内の前に必ず会員ページで再確認しています。
            </p>
          </Section>

          {/* ── 6.5 報酬の仕組み（C-420 / C-427 / C-428）SECTION_COMP_20260826 ── */}
          {/* 🔴 この節は「達成した場合の金額」しか書かない。到達率・到達期間の見込みは一切書かない。
                 直後に 7.（収入の実態＝IDS）が来る順序を崩さない。期待値→実態の順で読ませる。 */}
          <Section id="how-rewards-work" eyebrow="HOW IT WORKS" title="報酬はどう決まるか">
            <p>
              紹介による報酬は、<strong>ランクごとに金額が決まっています</strong>。
              運営元が公開している報酬プランから、そのまま引用します。
            </p>

            <div className="overflow-x-auto not-prose">
              <table className="w-full text-[14px] border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200">ランク</th>
                    <th className="text-left p-3 border-b border-gray-200">必要な組織</th>
                    <th className="text-left p-3 border-b border-gray-200">1日あたり</th>
                    <th className="text-left p-3 border-b border-gray-200">全ボーナス込みの月額</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Silver", "約3人", "4ドル", "300ドル"],
                    ["Gold", "約12人", "10ドル", "600ドル"],
                    ["Jade", "約60人", "40ドル", "3,000ドル"],
                    ["Emerald", "約250人", "150ドル", "8,000ドル"],
                    ["Diamond", "約1,250人", "750ドル", "50,000ドル"],
                  ].map(([r, n, d, m]) => (
                    <tr key={r} className="border-b border-gray-100">
                      <td className="p-3 font-medium">{r}</td>
                      <td className="p-3">{n}</td>
                      <td className="p-3">{d}</td>
                      <td className="p-3 font-semibold">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600">
              運営元の報酬プラン（2025年5月版）より抜粋。全19ランクのうち5つを載せています。
              <strong className="text-gray-800">
                この金額は「そのランクに到達した場合」のものです。運営元自身が「保証ではなく、あくまで例示」と明記しています。
              </strong>
            </p>

            {/* C-427: 当社が最も強調する構造 */}
            <div className="not-prose mt-8">
              <p className="text-[15px] leading-relaxed text-gray-800 mb-4">
                ここからが、この仕組みでいちばん大事なところです。
                <strong>結果を決めるのは「自分が何人紹介したか」ではありません。</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-5 bg-gray-50">
                  <div className="text-xs tracking-widest text-gray-500 mb-2">パターン A</div>
                  <div className="text-[15px] font-semibold text-gray-900 leading-snug">
                    自分が毎月1人ずつ、<br />10年かけて120人紹介する
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="text-2xl font-bold text-gray-700">月45万円で頭打ち</div>
                    <div className="mt-2 text-[13px] text-gray-600 leading-relaxed">
                      紹介した人が誰も紹介しなかった場合。<strong>10年経っても月収100万円には届きません。</strong>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-corp-main rounded-lg p-5 bg-white">
                  <div className="text-xs tracking-widest text-gray-500 mb-2">パターン B</div>
                  <div className="text-[15px] font-semibold text-gray-900 leading-snug">
                    自分は3人だけ紹介して、<br />その3人が半年に1人ずつ動く
                  </div>
                  <div className="mt-4 pt-4 border-t border-corp-main/30">
                    <div className="text-2xl font-bold text-corp-main">3年7か月で月120万円</div>
                    <div className="mt-2 text-[13px] text-gray-600 leading-relaxed">
                      同じ計算式で出した数字です。<strong>「120人紹介する」より「3人育てる」ほうが速くなります。</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-[14px] space-y-2 mt-6">
              <p className="font-semibold text-blue-900">なぜこうなるのか</p>
              <p className="text-blue-900 leading-relaxed">
                報酬プランには「<strong>1本の系列は、必要ポイントの半分までしか数えない</strong>」という制限があります。
                そのため、自分の下に120人を横に並べても点数が足りません。
                一方、3人を支えてその先が伸びると、3本の系列がそれぞれ上限まで育ち、点数が満たされます。
              </p>
              <p className="text-blue-900 leading-relaxed">
                つまり<strong>「広さ」ではなく「深さ」が点数を作ります。</strong>
                そして深さを作るのは自分ではなく、紹介した人です。
                <strong>だから当社は、紹介の数を追うのではなく、紹介した方を支えることを前提にしています。</strong>
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-[14px] space-y-2 mt-4">
              <p className="font-semibold text-amber-900">ここまでの数字について</p>
              <ul className="list-disc pl-5 space-y-1 text-amber-900">
                <li>
                  いずれも<strong>「そのペースが続いた場合」の計算例</strong>です。
                  <strong>収入を保証するものではありません。</strong>
                </li>
                <li>
                  「紹介した人のうち何割が動くか」は<strong>当社が置いた仮定</strong>であり、
                  実際にどれくらいの人が動くかは公表されていません
                </li>
                <li>
                  <strong>実際の分布は、次の「公表されている実績」をご覧ください。</strong>
                  期待値と実態の両方を見てからご判断ください
                </li>
              </ul>
            </div>
          </Section>

          {/* ── 7. 収入の実態（C-501 / C-502 / C-503）🔴 MWR P&P §3 の必須開示 ── */}
          <Section id="income" eyebrow="INCOME DISCLOSURE" title="紹介報酬について、公表されている実績">
            <p>
              紹介による報酬制度があります。ただし、その実態は運営元が毎年公表しています。
              <strong>都合の悪い数字なので、こちらから先に出します。</strong>
            </p>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-[14px] border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 border-b border-gray-200">ランク</th>
                    <th className="text-left p-3 border-b border-gray-200">到達者に占める割合</th>
                    <th className="text-left p-3 border-b border-gray-200">年間所得の中央値</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Silver", "86.22%", "348ドル"],
                    ["Gold", "8.64%", "1,699ドル"],
                    ["Platinum", "2.20%", "3,870ドル"],
                    ["Titanium", "1.44%", "6,085ドル"],
                    ["Jade 以上", "各1%未満", "12,943ドル〜"],
                  ].map(([r, p, m]) => (
                    <tr key={r} className="border-b border-gray-100">
                      <td className="p-3 font-medium">{r}</td>
                      <td className="p-3">{p}</td>
                      <td className="p-3">{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-[14px] space-y-2">
              <p className="font-semibold text-red-900">この表の読み方</p>
              <ul className="list-disc pl-5 space-y-1 text-red-900">
                <li>
                  <strong>アクティブな参加者の約75%は、その年にSilverにも到達していません。</strong>
                  つまり上の表の母数にすら入っていません
                </li>
                <li>
                  ランク到達者の86%を占めるSilverの中央値は<strong>年間348ドル</strong>。
                  一方、初年度にかかる費用は<strong>1,908.61ドル</strong>です。
                  <strong>費用を上回るのはGold以上（到達者の8.64%）</strong>という関係になります
                </li>
                <li>収入は保証されません。報酬は紹介した方が費用を負担することで発生します</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              出典：MWR Life が公表している収入開示（2025年通年・全世界）。2026年8月25日 取得。
            </p>
          </Section>

          {/* ── 8. 向いていない人（C-209 / C-601〜C-608） ── */}
          <Section id="not-for-you" eyebrow="NOT FOR YOU" title="こういう方には、おすすめしません">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>旅行が年に1回程度の方。</strong>会費に対して使う機会が足りません</li>
              <li><strong>紹介活動をするつもりがない方。</strong>会員価格とポイントだけで費用を回収するには、相応の回数が必要です</li>
              <li><strong>ディズニークルーズが目的の方。</strong>取り扱いがありません（他のクルーズ会社は19社を扱っています）</li>
              <li><strong>ポイントを小分けに使いたい方。</strong>1回でまとめて使う仕組みです</li>
              <li><strong>短期で収入がほしい方。</strong>上の収入開示のとおりです</li>
            </ul>
            <p className="text-sm text-gray-600">
              ほかに、運営元に対する外部からの指摘（各国当局の警告や業界団体の是正事例）も存在します。
              ご質問いただければ、把握している範囲をそのままお答えします。
            </p>
          </Section>

          {/* ── 9. よくある質問（C-701 / C-702 / C-1001 / C-1002 / C-207） ── */}
          <Section id="faq" eyebrow="FAQ" title="よくある質問">
            {[
              ["途中でやめられますか？",
               "契約書面を受け取った日から20日間はクーリング・オフができます（特定商取引法40条）。それ以降も解約はできますが、支払済みの分は返金されません。解約手数料はかかりません。"],
              ["支払いを止めるとどうなりますか？",
               "支払いが失敗している間はポイントがロックされます。180日以上の滞納で会員資格は取り消され、ポイントも失われます。"],
              ["まず試せますか？",
               "会員が発行できる体験用のコードがあります。ホテル予約を1回・最大2泊まで、会員価格で試せます。ご希望の方はお申し付けください。"],
              ["家族も使えますか？",
               "Elite会員の場合、追加の同行者を4名まで登録できます。登録した方は自分のログインで予約できますが、ポイントは付与されません。"],
              ["日本語で使えますか？",
               "予約サイトは日本語表示に対応しています。一方、運営元の規約類は英語で、日本語の公式資料はありません。"],
            ].map(([q, a]) => (
              <div key={q} className="border border-gray-200 rounded-lg p-5">
                <p className="font-semibold mb-2">{q}</p>
                <p className="text-[14px] text-gray-700 leading-relaxed">{a}</p>
              </div>
            ))}
          </Section>

          {/* ── 10. LINE 導線 ── */}
          <Section id="contact" eyebrow="ASK" title="疑問は、その場で聞いてください">
            <p>
              LINEで質問できます。当社が実測した資料をもとに、AIがすぐにお答えします。
              <strong>費用が回収できない可能性やポイントの制限など、都合の悪いことも隠さずお答えします</strong>。
              分からないことは「確認できていません」と正直に返します。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 not-prose pt-2">
              <a
                href={LINE_URL}
                className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
              >
                LINEで質問する
              </a>
              <a
                href={LP_URL}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-corp-main hover:bg-gray-50 transition"
              >
                説明と書面を見る
              </a>
            </div>
            <p className="text-sm text-gray-600">
              ご登録は、勧誘の目的をお伝えし、法律で定められた概要書面をお渡ししたうえでご案内しています。
              このページから直接お申し込みいただくことはできません。
            </p>
          </Section>

          {/* ── 11. 事業者情報 ── */}
          <section className="py-12 border-t border-gray-200 text-[13px] text-gray-600 leading-relaxed space-y-2">
            <p className="font-semibold text-corp-main">事業者情報</p>
            <p>
              ロンショール合同会社 ／ 代表：瀬島和樹 ／ 〒651-2276 兵庫県神戸市西区春日台5丁目8-20 ／ 070-8409-2273
            </p>
            <p>
              統括者：MWR Life, LLC（300 SE 2nd Street, Suite 600, Fort Lauderdale, FL 33301, U.S.A.）
            </p>
            <p>
              本ページは連鎖販売取引の勧誘を含みます。ご契約前に概要書面・契約書面を必ずご確認ください。
              契約書面の受領日から20日間はクーリング・オフができます。
              掲載の価格・企画はすべて取得時点の実測値で、空室状況・為替・時期により変動します。最安値を保証するものではありません。
              収入は保証されません。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
