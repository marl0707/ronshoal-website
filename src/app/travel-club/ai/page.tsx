"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/**
 * 会員制旅行サービスの相談窓口（AI）。
 *
 * cruise の「AI相談室」と同じ考え方: LINE の自動応答からこのURLへ飛ばし、
 * ここで AI と会話してもらう。回答は Hetzner の /chat/mwr（RAG付き・検証済み）。
 *
 * 🔴 法定表示: このページも勧誘の一部なので、最上部で目的と事業者を明示する（特商法33条の2）。
 */

type Msg = { role: "user" | "model"; content: string };

const EXAMPLES = [
    "月にいくらかかりますか",
    "本当に安くなるんですか",
    "やめたいときはどうなりますか",
    "紹介しないと損ですか",
];

export default function TravelClubAiPage() {
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    async function send(text: string) {
        const q = text.trim();
        if (!q || loading) return;
        setInput("");
        const next = [...messages, { role: "user" as const, content: q }];
        setMessages(next);
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: q, history: messages }),
            });
            const data = await res.json();
            setMessages([
                ...next,
                { role: "model", content: data.reply || data.error || "うまくお答えできませんでした。もう一度お試しください。" },
            ]);
        } catch {
            setMessages([...next, { role: "model", content: "通信に失敗しました。少し時間をおいてお試しください。" }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-white text-corp-main flex flex-col">
            {/* 法定表示（特商法33条の2） */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                <div className="max-w-2xl mx-auto text-[12px] leading-relaxed text-gray-700">
                    <strong className="text-corp-main">ロンショール合同会社（担当：瀬島和樹）</strong>による、会員制の旅行サービス
                    「Travel Advantage™」および <strong className="text-corp-main">MWR Life の連鎖販売取引への参加を勧誘する目的</strong>のご案内です。
                    参加には登録費用・月額費用がかかり、<strong className="text-corp-main">収入は保証されません</strong>。
                    当社は MWR Life の独立系 Lifestyle Ambassador であり、公式サイトではありません。
                </div>
            </div>

            <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col px-4">
                <div className="py-5">
                    <h1 className="text-xl font-bold">なんでも聞いてください</h1>
                    <p className="text-[13px] text-gray-600 mt-2 leading-relaxed">
                        当社が実測した資料をもとにお答えします。
                        <strong>費用が回収できない可能性や、ポイントの制限など、都合の悪いことも隠さずお答えします。</strong>
                        わからないことは「確認できていません」と正直に返します。
                    </p>
                </div>

                {messages.length === 0 && (
                    <div className="pb-4">
                        <p className="text-xs text-gray-500 mb-2">たとえば</p>
                        <div className="flex flex-wrap gap-2">
                            {EXAMPLES.map((e) => (
                                <button
                                    key={e}
                                    onClick={() => send(e)}
                                    className="text-[13px] border border-gray-300 rounded-full px-3 py-1.5 hover:bg-gray-50 transition"
                                >
                                    {e}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex-1 space-y-4 pb-4">
                    {messages.map((m, i) => (
                        <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                            <div
                                className={
                                    "inline-block max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed whitespace-pre-wrap " +
                                    (m.role === "user" ? "bg-corp-main text-white" : "bg-gray-100 text-gray-900")
                                }
                            >
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="text-left">
                            <div className="inline-block bg-gray-100 rounded-2xl px-4 py-3 text-[14px] text-gray-500">
                                調べています…（10秒ほどかかります）
                            </div>
                        </div>
                    )}
                    <div ref={endRef} />
                </div>

                <div className="sticky bottom-0 bg-white border-t border-gray-200 py-3">
                    <div className="flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.nativeEvent.isComposing) send(input);
                            }}
                            placeholder="質問を入力してください"
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gray-500"
                            disabled={loading}
                        />
                        <button
                            onClick={() => send(input)}
                            disabled={loading || !input.trim()}
                            className="rounded-lg bg-corp-main text-white px-5 py-3 text-[15px] font-semibold disabled:opacity-40"
                        >
                            送信
                        </button>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                        価格・条件は変わることがあります。ご契約前に概要書面・契約書面を必ずご確認ください。
                        契約書面の受領日から20日間はクーリング・オフができます。
                        <Link href="/travel-club" className="underline ml-1">
                            費用と実測データを見る
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
