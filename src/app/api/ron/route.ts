import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type HistoryItem = {
  role: "user" | "assistant";
  content: string;
};

const json = (body: Record<string, unknown>, status = 200) =>
  NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (!contentType.includes("application/json") || contentLength > 16_384) {
    return json({ error: "invalid_request" }, 400);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const source = body && typeof body === "object" ? body as Record<string, unknown> : {};
  const question = typeof source.question === "string" ? source.question.trim().slice(0, 500) : "";
  if (!question) return json({ error: "question_required" }, 400);

  const history: HistoryItem[] = Array.isArray(source.history)
    ? source.history.slice(-6).flatMap((item): HistoryItem[] => {
        if (!item || typeof item !== "object") return [];
        const value = item as Record<string, unknown>;
        const role = value.role === "user" || value.role === "assistant" ? value.role : null;
        const content = typeof value.content === "string" ? value.content.trim().slice(0, 500) : "";
        return role && content ? [{ role, content }] : [];
      })
    : [];

  const baseUrl = process.env.RONSHOAL_CHAT_BASE_URL;
  const secret = process.env.RONSHOAL_CHAT_SECRET;
  if (!baseUrl || !secret) return json({ error: "temporarily_unavailable" }, 503);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 50_000);
  try {
    const upstreamBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const upstream = await fetch(new URL("chat/company", upstreamBase), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Chat-Secret": secret,
      },
      body: JSON.stringify({ message: question, history, page_url: request.nextUrl.pathname }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!upstream.ok) {
      const status = upstream.status === 429 ? 429 : upstream.status === 503 ? 503 : 502;
      return json({ error: "temporarily_unavailable" }, status);
    }
    const payload = await upstream.json() as { reply?: unknown };
    const reply = typeof payload.reply === "string" ? payload.reply.trim().slice(0, 2_000) : "";
    if (!reply) return json({ error: "empty_reply" }, 502);
    return json({ reply });
  } catch (error) {
    const status = error instanceof Error && error.name === "AbortError" ? 504 : 502;
    return json({ error: "temporarily_unavailable" }, status);
  } finally {
    clearTimeout(timer);
  }
}
