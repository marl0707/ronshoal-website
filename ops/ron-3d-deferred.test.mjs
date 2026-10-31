import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const source = await readFile(new URL('../public/js/ron-3d.js', import.meta.url), 'utf8');
const { deferRon3D } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const tick = () => new Promise(resolve => setImmediate(resolve));
function fixture(count = 1) {
  const entries = Array.from({ length: count }, () => {
    const handlers = new Map();
    return { dataset: {}, classes: new Set(), handlers,
      classList: { add(value) { this.owner.classes.add(value); } },
      addEventListener(name, fn) { handlers.set(name, fn); },
      removeEventListener(name) { handlers.delete(name); } };
  });
  entries.forEach(entry => { entry.classList.owner = entry; });
  const observers = [];
  class Observer {
    constructor(callback, options) { this.callback = callback; this.options = options; this.entries = []; observers.push(this); }
    observe(entry) { this.entries.push(entry); }
    disconnect() { this.disconnected = true; }
  }
  return { entries, doc: { querySelectorAll: () => entries }, Observer, get observer() { return observers.at(-1); } };
}

test('offscreen section does not fetch runtime; near viewport starts exactly once', async () => {
  const f = fixture(); let calls = 0;
  const state = deferRon3D(f.doc, f.Observer, () => { calls++; });
  await tick(); assert.equal(calls, 0); assert.equal(state.requested, false);
  assert.equal(f.entries[0].dataset.ron3dStatus, 'deferred');
  assert.equal(f.observer.options.rootMargin, '300px');
  f.observer.callback([{ isIntersecting: false }]); await tick(); assert.equal(calls, 0);
  f.observer.callback([{ isIntersecting: true }]);
  f.observer.callback([{ isIntersecting: true }]); await tick();
  assert.equal(calls, 1); assert.equal(state.requested, true); assert.equal(f.observer.disconnected, true);
  assert.equal(f.entries[0].handlers.size, 0);
});

for (const interaction of ['focusin', 'pointerenter']) {
  test(`${interaction} can activate before observer delivery without duplicate imports`, async () => {
    const f = fixture(2); let calls = 0;
    deferRon3D(f.doc, f.Observer, () => { calls++; });
    f.entries[1].handlers.get(interaction)();
    f.observer.callback([{ isIntersecting: true }]); await tick();
    assert.equal(calls, 1); assert(f.entries.every(entry => entry.handlers.size === 0));
  });
}

test('no model means no observer, import or document mutation', async () => {
  const f = fixture(0); let calls = 0;
  deferRon3D(f.doc, f.Observer, () => { calls++; }); await tick();
  assert.equal(calls, 0); assert.equal(f.observer, undefined);
});

test('missing or broken observer keeps immediate-load compatibility', async () => {
  for (const Observer of [undefined, class { constructor() { throw Error('synthetic'); } }]) {
    const f = fixture(); let calls = 0;
    deferRon3D(f.doc, Observer, () => { calls++; }); await tick();
    assert.equal(calls, 1);
  }
});

test('runtime rejection preserves the poster fallback and does not retry forever', async () => {
  const f = fixture(); let calls = 0;
  deferRon3D(f.doc, f.Observer, () => { calls++; throw Error('synthetic'); });
  f.observer.callback([{ isIntersecting: true }]); await tick();
  assert.equal(f.entries[0].dataset.ron3dStatus, 'fallback'); assert(f.entries[0].classes.has('is-static'));
  f.observer.callback([{ isIntersecting: true }]); await tick(); assert.equal(calls, 1);
});

test('only dynamic dependency is the preserved renderer; existing renderer is byte-identical', async () => {
  assert.equal(/^\s*import\s/m.test(source), false);
  assert.match(source, /import\("\.\/ron-3d-runtime\.js"\)/);
  const runtime = await readFile(new URL('../public/js/ron-3d-runtime.js', import.meta.url));
  assert.equal(createHash('sha256').update(runtime).digest('hex'), '6e906e4a51905cd9c8cc6fdaba14731d6cdeba85d3e1ce0f5437dee204a9378a');
});
