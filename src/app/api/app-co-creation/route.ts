import { createHmac } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const json = (body: Record<string, unknown>, status = 200) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

export async function POST(request: NextRequest) {
  const allowedOrigins = new Set(['https://www.ronshoal.com', 'https://ronshoal.com']);
  if (process.env.NODE_ENV !== 'production') allowedOrigins.add(request.nextUrl.origin);
  if (!allowedOrigins.has(request.headers.get('origin') || '')) {
    return json({ error: 'invalid_origin' }, 403);
  }
  if (!(request.headers.get('content-type') || '').includes('application/json')) {
    return json({ error: 'invalid_request' }, 400);
  }
  if (Number(request.headers.get('content-length') || 0) > 65_536) {
    return json({ error: 'request_too_large' }, 413);
  }
  let body: unknown;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, 'utf8') > 65_536) {
      return json({ error: 'request_too_large' }, 413);
    }
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json({ error: 'invalid_request' }, 400);
  }
  const baseUrl = process.env.RONSHOAL_CHAT_BASE_URL;
  const secret = process.env.RONSHOAL_CHAT_SECRET;
  if (!baseUrl || !secret) return json({ error: 'temporarily_unavailable' }, 503);

  const address = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const clientKey = createHmac('sha256', secret).update(address).digest('hex');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 50_000);
  try {
    const upstream = await fetch(new URL('intake/app-co-creation', baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Chat-Secret': secret, 'X-Intake-Client': clientKey },
      body: JSON.stringify(body), cache: 'no-store', signal: controller.signal,
    });
    if (!upstream.ok) {
      const status = [400, 409, 413, 429, 503].includes(upstream.status) ? upstream.status : 502;
      return json({ error: status === 429 ? 'too_many_requests' : status === 400 ? 'invalid_fields' : 'temporarily_unavailable' }, status);
    }
    const payload = await upstream.json() as { accepted?: unknown; receiptId?: unknown };
    if (payload.accepted !== true || typeof payload.receiptId !== 'string' ||
        !/^[a-f0-9-]{36}$/.test(payload.receiptId)) {
      return json({ error: 'temporarily_unavailable' }, 502);
    }
    return json({ accepted: true, receiptId: payload.receiptId });
  } catch {
    return json({ error: 'temporarily_unavailable' }, 503);
  } finally {
    clearTimeout(timer);
  }
}
