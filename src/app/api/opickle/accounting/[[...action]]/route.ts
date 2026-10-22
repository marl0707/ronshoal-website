import { createHmac } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const COOKIE = 'opickle_finance_session';
const COOKIE_PATH = '/api/opickle/accounting';
const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, {
  status, headers: { 'Cache-Control': 'private, no-store, max-age=0', 'X-Content-Type-Options': 'nosniff',
    'X-Robots-Tag': 'noindex, nofollow, noarchive' },
});
const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const, path: COOKIE_PATH, maxAge: 43200 };

function allowedOrigin(request: NextRequest) {
  const origins = new Set(['https://www.ronshoal.com', 'https://ronshoal.com']);
  if (process.env.NODE_ENV !== 'production') origins.add(request.nextUrl.origin);
  return origins.has(request.headers.get('origin') || '');
}

type Context = { params: Promise<{ action?: string[] }> };

export async function GET(request: NextRequest, context: Context) {
  const { action = [] } = await context.params;
  if (action.length) return json({ error: 'not_found' }, 404);
  const session = request.cookies.get(COOKIE)?.value || '';
  if (!/^[A-Za-z0-9_-]+\.[a-f0-9]{64}$/.test(session) || session.length > 512) {
    return json({ error: 'unauthorized' }, 401);
  }
  return upstream(request, 'dashboard', { 'X-Opickle-Session': session });
}

export async function POST(request: NextRequest, context: Context) {
  const { action = [] } = await context.params;
  if (action.length !== 1 || !['login', 'logout', 'form'].includes(action[0])) return json({ error: 'not_found' }, 404);
  if (!allowedOrigin(request)) return json({ error: 'invalid_origin' }, 403);
  if (action[0] === 'logout') {
    const response = json({ ok: true });
    response.cookies.set(COOKIE, '', { ...cookieOptions, maxAge: 0 });
    return response;
  }
  if (!(request.headers.get('content-type') || '').startsWith('application/json')) return json({ error: 'invalid_request' }, 400);
  const sizeLimit = action[0] === 'form' ? 24576 : 2048;
  if (Number(request.headers.get('content-length') || 0) > sizeLimit) return json({ error: 'request_too_large' }, 413);
  let body: unknown;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw) > sizeLimit) return json({ error: 'request_too_large' }, 413);
    body = JSON.parse(raw);
  } catch { return json({ error: 'invalid_request' }, 400); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ error: 'invalid_request' }, 400);
  if (action[0] === 'form') {
    const session = request.cookies.get(COOKIE)?.value || '';
    if (!/^[A-Za-z0-9_-]+\.[a-f0-9]{64}$/.test(session) || session.length > 512) return json({ error: 'unauthorized' }, 401);
    const b = body as Record<string, unknown>;
    if (!['load', 'preview', 'commit'].includes(String(b.action)) || !b.payload || typeof b.payload !== 'object' || Array.isArray(b.payload)) return json({ error: 'invalid_request' }, 400);
    const p = b.payload as Record<string, unknown>;
    if (typeof p.token !== 'string' || !/^[a-fA-F0-9]{64}$/.test(p.token) || Object.keys(p).some(k => !['token', 'data', 'nonce'].includes(k))) return json({ error: 'invalid_request' }, 400);
    return upstream(request, 'form', { 'X-Opickle-Session': session }, { action: b.action, payload: p });
  }
  const password = (body as Record<string, unknown>).password;
  if (typeof password !== 'string' || !password.length || password.length > 128) return json({ error: 'unauthorized' }, 401);
  return upstream(request, 'login', {}, { password });
}

async function upstream(request: NextRequest, operation: 'login' | 'dashboard' | 'form', extraHeaders: Record<string, string>, body?: Record<string, unknown>) {
  // Reuse the website's existing private service bridge. No Google credentials reach Vercel.
  const base = process.env.RONSHOAL_CHAT_BASE_URL;
  const secret = process.env.RONSHOAL_CHAT_SECRET;
  if (!base || !secret) return json({ error: 'configuration_pending' }, 503);
  const url = new URL(`private/opickle/${operation}`, base.endsWith('/') ? base : `${base}/`);
  if (url.protocol !== 'https:' && process.env.NODE_ENV === 'production') return json({ error: 'configuration_pending' }, 503);
  const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const clientKey = createHmac('sha256', secret).update(ip).digest('hex');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const response = await fetch(url, { method: body ? 'POST' : 'GET', cache: 'no-store', redirect: 'error',
      headers: { 'Content-Type': 'application/json', 'X-Chat-Secret': secret,
        'X-Opickle-Client': clientKey, ...extraHeaders },
      body: body ? JSON.stringify(body) : undefined, signal: controller.signal });
    if (!response.ok) {
      const status = [401, 429, 503].includes(response.status) ? response.status : 502;
      return json({ error: status === 401 ? 'unauthorized' : status === 429 ? 'too_many_requests' : 'source_unavailable' }, status);
    }
    const value = await response.json();
    if (operation === 'login') {
      if (typeof value.session !== 'string' || !/^[A-Za-z0-9_-]+\.[a-f0-9]{64}$/.test(value.session) || value.session.length > 512) {
        return json({ error: 'source_unavailable' }, 502);
      }
      const result = json({ ok: true });
      result.cookies.set(COOKIE, value.session, cookieOptions);
      return result;
    }
    if (operation === 'form') {
      if (typeof value.ok !== 'boolean') return json({ error: 'source_unavailable' }, 502);
      return json(value);
    }
    if (value.schema !== 'opickle-dashboard-v1' || !Array.isArray(value.transactions) || !Array.isArray(value.timeline)) {
      return json({ error: 'source_unavailable' }, 502);
    }
    return json(value);
  } catch { return json({ error: 'source_unavailable' }, 503); }
  finally { clearTimeout(timer); }
}
