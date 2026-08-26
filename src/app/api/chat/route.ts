// AIチャット API Route — 旅とくらしの会員クラブ（MWR Life / Travel Advantage）
//
// Hetzner の常駐チャットサーバー（ronshoal-chat :8200 の /chat/mwr）への薄いプロキシ。
// malaysia-info-bureau の実装（本番稼働中）と同じ型にしてある。
//
// 🔴 秘密値（X-Chat-Secret）はサーバー側だけで扱い、ブラウザには出さない。
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

export const maxDuration = 60;

const CHAT_BACKEND_URL = process.env.RONSHOAL_CHAT_BASE_URL || "";
const CHAT_SECRET = process.env.RONSHOAL_CHAT_SECRET || "";

interface ChatMessage {
    role: "user" | "model";
    content: string;
}

export async function POST(request: NextRequest) {
    try {
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";
        const rateLimit = checkRateLimit(ip);
        if (!rateLimit.success) {
            return NextResponse.json(
                { error: "リクエスト数の制限を超えました。しばらくしてからお試しください。", resetIn: rateLimit.resetIn },
                { status: 429 },
            );
        }

        const body = await request.json();
        const { message, history = [] } = body as { message: string; history: ChatMessage[] };

        if (!message || typeof message !== "string") {
            return NextResponse.json({ error: "メッセージが必要です。" }, { status: 400 });
        }

        if (!CHAT_BACKEND_URL || !CHAT_SECRET) {
            console.error("Chat backend not configured: RONSHOAL_CHAT_BASE_URL / RONSHOAL_CHAT_SECRET missing");
            return NextResponse.json({ error: "申し訳ありません。エラーが発生しました。" }, { status: 500 });
        }

        const upstream = await fetch(`${CHAT_BACKEND_URL}/chat/mwr`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Chat-Secret": CHAT_SECRET },
            body: JSON.stringify({ message, history }),
            signal: AbortSignal.timeout(55_000),
        });

        if (!upstream.ok) {
            const detail = await upstream.text().catch(() => "");
            console.error(`Chat backend error: ${upstream.status} ${detail.slice(0, 300)}`);
            const status = upstream.status === 429 ? 429 : 500;
            return NextResponse.json(
                {
                    error:
                        status === 429
                            ? "リクエスト数の制限を超えました。しばらくしてからお試しください。"
                            : "申し訳ありません。エラーが発生しました。",
                },
                { status },
            );
        }

        return NextResponse.json(await upstream.json());
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "申し訳ありません。エラーが発生しました。" }, { status: 500 });
    }
}
