import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { startCorporateAnalytics, publicContext, ROUTES, MEASUREMENT_ID, CONSENT_KEY, COOKIE_PREFIX } from '../public/corporate-analytics.mjs';

class Element {
  constructor(tag, owner) { this.tagName = tag; this.owner = owner; this.children = []; this.handlers = {}; this.attrs = {}; this.hidden = false; }
  append(...elements) { for (const element of elements) { this.children.push(element); element.parentElement = this; } }
  setAttribute(name, value) { this.attrs[name] = value; }
  getAttribute(name) { return this.attrs[name] ?? null; }
  addEventListener(name, handler) { (this.handlers[name] ||= []).push(handler); }
  emit(name, event = {}) { for (const handler of this.handlers[name] || []) handler(event); }
  focus() { this.owner.focused = this; }
  remove() { this.removed = true; }
  closest(selector) { return selector === 'a[href]' && this.tagName === 'a' ? this : null; }
}

function environment({ href = 'https://www.ronshoal.com/', choice = null, storageReadError = false, storageWriteError = false } = {}) {
  const store = new Map(choice === null ? [] : [[CONSENT_KEY, choice]]), cookies = new Map([
    ['_ga', 'SHARED_COOKIE_SYNTHETIC'], ['_ga_OTHER', 'OTHER_SITE_SYNTHETIC'],
    [COOKIE_PREFIX + '_ga', 'CORPORATE_SYNTHETIC'], [COOKIE_PREFIX + '_ga_K9WBYVZC0N', 'CORPORATE_STREAM_SYNTHETIC'],
  ]);
  const doc = { handlers: {}, readyState: 'complete', title: 'SYNTHETIC_PRIVATE_CANARY', referrer: 'https://example.test/private/SYNTHETIC_PRIVATE_CANARY?token=SYNTHETIC_PRIVATE_CANARY',
    createElement(tag) { return new Element(tag, this); },
    querySelector(selector) { if (selector === '.site-policy-link') return this.policy; if (selector === 'footer') return this.footer; return null; },
    addEventListener(name, handler) { (this.handlers[name] ||= []).push(handler); },
    emit(name, event = {}) { for (const handler of this.handlers[name] || []) handler(event); },
  };
  Object.defineProperty(doc, 'cookie', { get: () => [...cookies].map(([name,value]) => name + '=' + value).join('; '),
    set(value) { const [name] = value.split('='); if (value.includes('Max-Age=0')) cookies.delete(name); } });
  doc.head = doc.createElement('head'); doc.body = doc.createElement('body'); doc.footer = doc.createElement('footer');
  doc.policy = doc.createElement('a'); doc.footer.append(doc.policy); doc.body.append(doc.footer);
  let reloads = 0;
  const win = { document: doc, handlers: {}, location: { href, reload() { reloads++; } },
    localStorage: { getItem(key) { if (storageReadError) throw Error('STORAGE_READ'); return store.get(key) ?? null; },
      setItem(key,value) { if (storageWriteError) throw Error('STORAGE_WRITE'); store.set(key,value); }, removeItem(key) { store.delete(key); } },
    addEventListener(name, handler) { (this.handlers[name] ||= []).push(handler); },
    emit(name, event = {}) { for (const handler of this.handlers[name] || []) handler(event); },
  };
  let loads = 0;
  return { win, doc, store, cookies, get loads() { return loads; }, get reloads() { return reloads; },
    loadTag: async () => { loads++; }, commands: () => (win.dataLayer || []).map(value => Array.from(value)),
    events: () => (win.dataLayer || []).map(value => Array.from(value)).filter(value => value[0] === 'event'),
  };
}
const settle = () => new Promise(resolve => setImmediate(resolve));

test('six exact corporate routes collect one manual pageview after prior consent only', async () => {
  for (const path of Object.keys(ROUTES)) {
    const e = environment({ href: 'https://www.ronshoal.com' + path, choice: 'granted' });
    const controller = startCorporateAnalytics(e.win, e.loadTag); await settle();
    assert.equal(e.loads, 1); assert.equal(e.events().length, 1); assert.equal(e.events()[0][1], 'page_view');
    assert.deepEqual(e.events()[0][2], { send_to: MEASUREMENT_ID, ...publicContext(e.win.location) });
    assert.equal(startCorporateAnalytics(e.win, e.loadTag), controller); await settle(); assert.equal(e.loads, 1);
    assert.equal(e.doc.footer.children.length, 2);
  }
});

test('unselected, denied, malformed and unavailable storage never load the Google tag', async () => {
  for (const options of [{}, { choice: 'denied' }, { choice: 'garbage' }, { choice: 'granted', storageReadError: true }]) {
    const e = environment(options); const c = startCorporateAnalytics(e.win, e.loadTag); await settle();
    assert.ok(c); assert.equal(e.loads, 0); assert.equal(e.events().length, 0); assert.equal(e.win['ga-disable-' + MEASUREMENT_ID], true);
  }
});

test('query, UTM, fragment, bare delimiters, private routes and alternate hosts remain outside the network scope even with stored consent', async () => {
  const rejected = ['/?email=SYNTHETIC_PRIVATE_CANARY', '/?utm_source=qa', '/?', '/#', '/#contact', '/ai.html?code=SYNTHETIC_PRIVATE_CANARY',
    '/auth/v1/verify', '/secret', '/personal/index.html', '/pickleball', '/malaysia/ja', '/operator', '/contact', '/privacy', '/ai-team', '/ai-extra', '/ai/', '/services/kenshin-plus'];
  for (const href of [...rejected.map(path => 'https://www.ronshoal.com' + path), 'http://www.ronshoal.com/', 'https://ronshoal.com/', 'https://preview.example.test/', 'https://user:pass@www.ronshoal.com/']) {
    const e = environment({ href, choice: 'granted' }); assert.equal(publicContext(e.win.location), null);
    const c = startCorporateAnalytics(e.win, e.loadTag); await settle(); assert.equal(e.loads, 0); assert.equal(e.events().length, 0);
    if (c) assert.equal(c.send('page_view'), false);
  }
});

test('allow and deny controls implement the choice, settings reopening and keyboard focus without a navigation dependency', async () => {
  const e = environment(); startCorporateAnalytics(e.win, e.loadTag);
  const panel = e.doc.body.children.at(-1), actions = panel.children[3], [allow,deny] = actions.children;
  assert.equal(panel.hidden, false); assert.equal(allow.textContent, '許可する'); assert.equal(deny.textContent, '許可しない');
  deny.emit('click'); await settle(); assert.equal(e.store.get(CONSENT_KEY), 'denied'); assert.equal(e.loads, 0); assert.equal(panel.hidden, true);
  e.doc.footer.children.at(-1).emit('click'); assert.equal(panel.hidden, false); assert.equal(e.doc.focused, panel);
  allow.emit('click'); await settle(); assert.equal(e.store.get(CONSENT_KEY), 'granted'); assert.equal(e.loads, 1); assert.equal(e.events().length, 1);
});

test('only fixed context and navigation enums enter the event payload; free-form source values are discarded', async () => {
  const e = environment({ choice: 'granted' }); const c = startCorporateAnalytics(e.win, e.loadTag); await settle();
  const link = e.doc.createElement('a'); link.setAttribute('href', 'mailto:SYNTHETIC_PRIVATE_CANARY@example.test'); e.doc.emit('click', { target: link });
  assert.equal(e.events().at(-1)[2].section, 'contact_email');
  assert.equal(c.send('unknown_event', { body: 'SYNTHETIC_PRIVATE_CANARY' }), false);
  assert.equal(c.send('corporate_navigation_click', { section: 'arbitrary' }), false);
  assert.equal(c.send('corporate_navigation_click', { section: 'business', page_location: 'SYNTHETIC_PRIVATE_CANARY', free_text: 'SYNTHETIC_PRIVATE_CANARY' }), true);
  assert.equal(JSON.stringify(e.commands()).includes('SYNTHETIC_PRIVATE_CANARY'), false);
  const config = e.commands().find(command => command[0] === 'config')[2];
  assert.equal(config.send_page_view, false); assert.equal(config.allow_google_signals, false); assert.equal(config.allow_ad_personalization_signals, false);
  assert.equal(config.cookie_prefix, COOKIE_PREFIX); assert.equal(config.cookie_domain, 'www.ronshoal.com'); assert.equal(config.cookie_path, '/');
  const consent = e.commands().filter(command => command[0] === 'consent');
  assert.equal(consent[0][2].analytics_storage, 'denied'); assert.equal(consent[1][2].analytics_storage, 'granted');
  for (const command of consent) for (const name of ['ad_storage','ad_user_data','ad_personalization']) assert.equal(command[2][name], 'denied');
});

test('scope is checked at each event and hash/popstate stops subsequent automatic destination traffic', async () => {
  for (const [suffix,event] of [['#contact','hashchange'], ['?code=SYNTHETIC_PRIVATE_CANARY','popstate']]) {
    const e = environment({ choice: 'granted' }); const c = startCorporateAnalytics(e.win, e.loadTag); await settle();
    e.win.location.href += suffix; assert.equal(c.send('page_view'), false); e.win.emit(event);
    assert.equal(e.win['ga-disable-' + MEASUREMENT_ID], true); assert.equal(c.getState().scopeStopped, true);
    e.win.location.href = 'https://www.ronshoal.com/'; assert.equal(c.send('page_view'), false); assert.equal(e.events().length, 1);
  }
});

test('withdrawal disables the destination before reload, preserves shared cookies, and prevents collection in the next document', async () => {
  const e = environment({ choice: 'granted' }); const c = startCorporateAnalytics(e.win, e.loadTag); await settle(); c.choose('denied');
  assert.equal(e.win['ga-disable-' + MEASUREMENT_ID], true); assert.equal(e.reloads, 1); assert.equal(c.send('page_view'), false);
  assert.deepEqual([...e.cookies.keys()], ['_ga','_ga_OTHER']); assert.equal(e.store.get(CONSENT_KEY), 'denied');
  assert.equal(e.commands().filter(command => command[0] === 'consent').length, 2, 'withdrawal must not emit a denial ping');
  const next = environment({ choice: e.store.get(CONSENT_KEY) }); startCorporateAnalytics(next.win, next.loadTag); await settle(); assert.equal(next.loads, 0);
});

test('a late tag load after withdrawal cannot emit a pageview', async () => {
  const e = environment(); let resolve; const c = startCorporateAnalytics(e.win, () => new Promise(done => { resolve = done; }));
  c.choose('granted'); c.choose('denied'); resolve(); await settle(); assert.equal(e.events().length, 0); assert.equal(e.win['ga-disable-' + MEASUREMENT_ID], true);
});

test('cross-tab denial and cleared storage stop the destination', async () => {
  for (const key of [CONSENT_KEY, null]) {
    const e = environment({ choice: 'granted' }); const c = startCorporateAnalytics(e.win, e.loadTag); await settle();
    e.store.delete(CONSENT_KEY); e.win.emit('storage', { key }); assert.equal(c.send('page_view'), false); assert.equal(e.reloads, 1);
  }
});

test('storage write failures fail closed and invalidate a stale grant', async () => {
  const e = environment({ choice: 'granted', storageWriteError: true }); const c = startCorporateAnalytics(e.win, e.loadTag); await settle(); c.choose('denied');
  assert.equal(e.win['ga-disable-' + MEASUREMENT_ID], true); assert.equal(e.store.has(CONSENT_KEY), false); assert.equal(c.send('page_view'), false);
  const fresh = environment({ storageWriteError: true }); const other = startCorporateAnalytics(fresh.win, fresh.loadTag); other.choose('granted'); await settle(); assert.equal(fresh.loads, 0);
});

test('Google loader rejection and invalid dataLayer never break the document', async () => {
  const e = environment({ choice: 'granted' }); const c = startCorporateAnalytics(e.win, async () => { throw Error('LOAD_FAILED'); }); await settle();
  assert.equal(c.send('page_view'), false); assert.equal(e.win['ga-disable-' + MEASUREMENT_ID], true);
  const other = environment({ choice: 'granted' }); other.win.dataLayer = {};
  startCorporateAnalytics(other.win, other.loadTag); await settle(); assert.equal(other.loads, 0);
});

test('the real loader is appended only after consent and suppresses the request referrer', async () => {
  const e = environment(); const c = startCorporateAnalytics(e.win); assert.equal(e.doc.head.children.filter(node => node.tagName === 'script').length, 0);
  c.choose('granted'); const script = e.doc.head.children.find(node => node.tagName === 'script');
  assert.equal(script.src, 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID); assert.equal(script.referrerPolicy, 'no-referrer');
  script.onload(); await settle(); assert.equal(e.events().length, 1);
});

test('public documents register this module once; the shared app layout remains outside its registration', () => {
  for (const name of ['index','ai','kenshin']) {
    const text = readFileSync(new URL('../public/' + name + '.html', import.meta.url), 'utf8');
    assert.equal((text.match(/type="module" src="\/corporate-analytics\.mjs"/g) || []).length, 1);
  }
  const layout = readFileSync(new URL('../src/app/layout.tsx', import.meta.url), 'utf8'); assert.equal(layout.includes('corporate-analytics'), false);
  const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(pkg.scripts['check:corporate-analytics'], 'node --test ops/corporate-analytics.test.mjs');
  assert.ok(pkg.scripts.build.includes('npm run check:corporate-analytics && next build'));
  for (const gate of ['check:danang','check:auth-relay','check:fiction-link']) assert.ok(pkg.scripts.build.includes('npm run ' + gate));
});
