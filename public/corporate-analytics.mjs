// Corporate static pages only. Never install this module in the shared app layout.
export const MEASUREMENT_ID = 'G-K9WBYVZC0N';
export const CONSENT_KEY = 'ronshoal_corporate_analytics_v1';
export const COOKIE_PREFIX = 'ronshoal_corp';
const ORIGIN = 'https://www.ronshoal.com';
export const ROUTES = Object.freeze({
  '/': ['/', 'ロンショール合同会社 | 医療関連事業・AI事業'],
  '/index.html': ['/', 'ロンショール合同会社 | 医療関連事業・AI事業'],
  '/ai': ['/ai.html', 'AI事業 | ロンショール合同会社'],
  '/ai.html': ['/ai.html', 'AI事業 | ロンショール合同会社'],
  '/kenshin': ['/kenshin.html', '健診プラス | ロンショール合同会社'],
  '/kenshin.html': ['/kenshin.html', '健診プラス | ロンショール合同会社'],
});
const runtimes = new WeakMap();

export function publicContext(location) {
  try {
    const url = new URL(location.href);
    if (url.origin !== ORIGIN || url.username || url.password || !Object.hasOwn(ROUTES, url.pathname)) return null;
    // Also reject a bare '?' or '#', which URL.search/hash normalize to empty.
    if (url.href.includes('?') || url.href.includes('#')) return null;
    const [path, title] = ROUTES[url.pathname];
    return { page_location: ORIGIN + path, page_title: title, page_referrer: '' };
  } catch { return null; }
}

export const CONSENT_CSS = `
#ronshoal-analytics-consent{position:fixed;inset:auto 16px 16px;z-index:10000;max-width:780px;margin:0 auto;padding:20px;background:#fff;color:#111;border:1px solid #111;box-shadow:0 4px 24px #0002;font:14px/1.7 system-ui,sans-serif;text-align:left;box-sizing:border-box}
#ronshoal-analytics-consent[hidden]{display:none!important}
#ronshoal-analytics-consent h2{margin:0 0 8px;font-size:17px;line-height:1.5;color:#111;letter-spacing:normal}
#ronshoal-analytics-consent p{margin:0 0 12px;font-size:14px;line-height:1.7;color:#111;letter-spacing:normal}
#ronshoal-analytics-consent a{color:#111;text-decoration:underline;text-underline-offset:3px}
#ronshoal-analytics-consent .rca-actions{display:flex;gap:12px;flex-wrap:wrap}
#ronshoal-analytics-consent button{min-height:44px;flex:1 1 120px;padding:10px 14px;background:#fff;color:#111;border:1px solid #111;font:700 14px/1.5 system-ui,sans-serif;letter-spacing:normal;cursor:pointer;box-sizing:border-box}
#ronshoal-analytics-consent button:focus-visible,.ronshoal-analytics-settings:focus-visible{outline:2px solid currentColor;outline-offset:4px}
.ronshoal-analytics-settings{display:inline-flex;align-items:center;justify-content:center;min-height:44px;max-width:100%;padding:8px 10px;border:1px solid currentColor;background:transparent;color:inherit;font:12px/1.5 system-ui,sans-serif;letter-spacing:normal;cursor:pointer;box-sizing:border-box}
@media(max-width:374px){#ronshoal-analytics-consent{inset:auto 12px 12px;padding:16px}#ronshoal-analytics-consent .rca-actions{gap:8px}}
`;

function storedChoice(win) {
  try {
    const value = win.localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch { return null; }
}

function saveChoice(win, value) {
  try {
    win.localStorage.setItem(CONSENT_KEY, value);
    return win.localStorage.getItem(CONSENT_KEY) === value;
  } catch { return false; }
}

function removeOwnCookies(win) {
  try {
    for (const cookie of win.document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (!name.startsWith(COOKIE_PREFIX + '_')) continue;
      for (const domain of ['', '; Domain=www.ronshoal.com', '; Domain=.www.ronshoal.com']) {
        win.document.cookie = name + '=; Max-Age=0; Path=/' + domain + '; Secure; SameSite=Lax';
      }
    }
  } catch { /* The disable flag and next-document gate remain effective. */ }
}

function loadGoogleTag(win) {
  return new Promise((resolve, reject) => {
    const script = win.document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    script.referrerPolicy = 'no-referrer';
    script.onload = resolve;
    script.onerror = () => { script.remove(); reject(new Error('CORPORATE_ANALYTICS_LOAD_FAILED')); };
    win.document.head.append(script);
  });
}

export function startCorporateAnalytics(win, loadTag = loadGoogleTag) {
  try {
    const initial = new URL(win.location.href);
    // UI may expose the saved preference on a corporate URL with query/hash,
    // but the network gate below remains stricter and never collects that URL.
    if (initial.origin !== ORIGIN || initial.username || initial.password || !Object.hasOwn(ROUTES, initial.pathname)) return null;
    if (runtimes.has(win)) return runtimes.get(win);
    const doc = win.document;
    let choice = storedChoice(win), ready = false, loading = false, pageSent = false, scopeStopped = false;
    const disableKey = 'ga-disable-' + MEASUREMENT_ID;
    win[disableKey] = true;

    const eligible = () => !scopeStopped && choice === 'granted' && publicContext(win.location);
    function command() {
      if (!Array.isArray(win.dataLayer)) throw new Error('CORPORATE_DATA_LAYER_UNAVAILABLE');
      win.dataLayer.push(arguments);
    }
    function send(name, params = {}) {
      try {
        const context = eligible();
        if (!ready || !context || win[disableKey]) return false;
        const sections = ['business', 'company', 'contact', 'service_ai', 'service_kenshin', 'contact_email'];
        if (name !== 'page_view' && (name !== 'corporate_navigation_click' || !sections.includes(params.section))) return false;
        const detail = name === 'corporate_navigation_click' ? { section: params.section } : {};
        command('event', name, { send_to: MEASUREMENT_ID, ...context, ...detail });
        return true;
      } catch { return false; }
    }
    async function enable() {
      if (!eligible() || loading || ready) return;
      loading = true;
      try {
        if (win.dataLayer === undefined) win.dataLayer = [];
        if (!Array.isArray(win.dataLayer)) return;
        win[disableKey] = false;
        command('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        command('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        command('set', 'ads_data_redaction', true);
        command('set', 'url_passthrough', false);
        command('js', new Date());
        command('config', MEASUREMENT_ID, {
          ...publicContext(win.location), send_page_view: false,
          cookie_prefix: COOKIE_PREFIX, cookie_domain: 'www.ronshoal.com', cookie_path: '/',
          cookie_flags: 'SameSite=Lax;Secure',
          allow_google_signals: false, allow_ad_personalization_signals: false,
        });
        await loadTag(win);
        ready = true;
        if (!pageSent && send('page_view')) pageSent = true;
      } catch { win[disableKey] = true; }
      finally { loading = false; }
    }

    const style = doc.createElement('style');
    style.textContent = CONSENT_CSS;
    doc.head.append(style);
    const panel = doc.createElement('section');
    panel.id = 'ronshoal-analytics-consent';
    panel.tabIndex = -1;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'アクセス解析の設定');
    const heading = doc.createElement('h2');
    heading.textContent = 'アクセス解析を利用しますか';
    const explanation = doc.createElement('p');
    explanation.textContent = '許可後に、会社案内ページの閲覧数などをGoogle Analyticsで集計し、サイト改善に利用します。選択は後から変更できます。';
    const privacy = doc.createElement('a');
    privacy.href = '/privacy'; privacy.textContent = 'プライバシーポリシー';
    const privacyLine = doc.createElement('p'); privacyLine.append(privacy);
    const actions = doc.createElement('div'); actions.className = 'rca-actions';
    const allow = doc.createElement('button'); allow.type = 'button'; allow.textContent = '許可する';
    const deny = doc.createElement('button'); deny.type = 'button'; deny.textContent = '許可しない';
    const message = doc.createElement('p'); message.setAttribute('role', 'status'); message.hidden = true;
    actions.append(allow, deny); panel.append(heading, explanation, privacyLine, actions, message);
    panel.hidden = choice !== null || !publicContext(win.location);
    doc.body.append(panel);

    const settings = doc.createElement('button');
    settings.type = 'button'; settings.className = 'ronshoal-analytics-settings';
    settings.textContent = 'アクセス解析の設定';
    settings.setAttribute('aria-controls', panel.id);
    const footer = doc.querySelector('.site-policy-link')?.parentElement || doc.querySelector('footer');
    if (footer) footer.append(settings);
    settings.addEventListener('click', () => { panel.hidden = false; panel.focus(); });

    function choose(value) {
      if (value !== 'granted' && value !== 'denied') return;
      const wasActive = ready || loading;
      // Stop locally before storage or a reload; never send a consent-denial ping.
      if (value === 'denied') { choice = 'denied'; ready = false; win[disableKey] = true; removeOwnCookies(win); }
      if (!saveChoice(win, value)) {
        choice = 'denied'; ready = false; win[disableKey] = true;
        try { win.localStorage.removeItem(CONSENT_KEY); } catch { /* Keep current-document collection disabled. */ }
        removeOwnCookies(win);
        message.textContent = '設定を保存できませんでした。アクセス解析は無効のままです。';
        message.hidden = false;
        return;
      }
      choice = value; panel.hidden = true; message.hidden = true;
      if (value === 'granted') void enable();
      else if (wasActive) win.location.reload();
    }
    allow.addEventListener('click', () => choose('granted'));
    deny.addEventListener('click', () => choose('denied'));

    doc.addEventListener('click', (event) => {
      const link = event.target?.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const targets = { '#business': 'business', '#company': 'company', '#contact': 'contact',
        './ai.html': 'service_ai', 'ai.html': 'service_ai', '/ai.html': 'service_ai',
        './kenshin.html': 'service_kenshin', 'kenshin.html': 'service_kenshin', '/kenshin.html': 'service_kenshin' };
      const section = Object.hasOwn(targets, href) ? targets[href] : href.startsWith('mailto:') ? 'contact_email' : null;
      if (section) send('corporate_navigation_click', { section });
    });
    const stopOutsideScope = () => {
      if (!publicContext(win.location)) { scopeStopped = true; ready = false; win[disableKey] = true; }
    };
    win.addEventListener('hashchange', stopOutsideScope);
    win.addEventListener('popstate', stopOutsideScope);
    win.addEventListener('storage', (event) => {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      const value = storedChoice(win);
      if (value !== 'granted') {
        const wasActive = ready || loading;
        choice = value; ready = false; win[disableKey] = true; removeOwnCookies(win);
        if (wasActive) win.location.reload();
      } else { choice = value; panel.hidden = true; void enable(); }
    });
    const controller = { choose, send, showSettings: () => { panel.hidden = false; },
      getState: () => ({ choice, ready, loading, pageSent, scopeStopped }) };
    runtimes.set(win, controller);
    if (choice === 'granted') void enable();
    return controller;
  } catch { return null; }
}

if (typeof window !== 'undefined' && window.document) {
  if (window.document.readyState === 'loading') window.document.addEventListener('DOMContentLoaded', () => startCorporateAnalytics(window), { once: true });
  else startCorporateAnalytics(window);
}
