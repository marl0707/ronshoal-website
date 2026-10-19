import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const novel = 'https://zendama-novel.happyss.workers.dev/';
const file = 'public/artist/index.html';
const source = await readFile(resolve(root, file), 'utf8');

// Static links work with JavaScript disabled and must survive release assembly.
function validate(html) {
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  const entries = [...html.matchAll(/<a\b[^>]*\bdata-fiction-link\b[^>]*>[\s\S]*?<\/a>/g)];
  assert.equal(entries.length, 2, 'Need novel entries in the header and FICTION card');
  for (const [entry] of entries) {
    assert.equal(entry.match(/\bhref=["']([^"']+)["']/)?.[1], novel, 'Novel link must use the public reader');
    assert.ok(entry.includes('小説を読む'), 'Novel link needs a visible label');
  }
  const nav = html.match(/<nav\b[^>]*class=["']head-nav["'][^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(nav?.includes('data-fiction-link'), 'Novel entry must be visible in the header');
  const fiction = html.match(/<article\b[^>]*data-gen=["']ink["'][^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert.ok(fiction?.includes('FICTION') && fiction.includes('data-fiction-link'), 'Novel entry must be inside the FICTION card');
  const sheet = [...html.matchAll(/<link\b[^>]*>/g)].find(([tag]) =>
    /\brel=["']stylesheet["']/.test(tag) && /\bhref=["']css\/fiction-link\.css(?:\?[^"']*)?["']/.test(tag));
  assert.ok(sheet, 'Novel entry stylesheet must be loaded by a link element');
  assert.ok(!html.includes('js/fiction-link.js'), 'Do not replace the public URL with a localhost-only reader');
  return { count: entries.length, sheet: sheet[0].match(/\bhref=["']([^"']+)["']/)[1] };
}

if (process.argv.includes('--self-test')) {
  validate(source);
  const invalid = [
    source.replaceAll('data-fiction-link', 'data-missing-fiction-link'),
    source.replaceAll(novel, 'https://example.invalid/'),
    source.replaceAll(novel, 'http://127.0.0.1:8917/'),
    source.replaceAll('css/fiction-link.css', 'css/missing-fiction.css'),
    source + '<script src="js/fiction-link.js"></script>',
    source.replace(/<a class="fiction-link"[\s\S]*?<\/a>/, '') + source.match(/<a class="fiction-link"[\s\S]*?<\/a>/)[0],
    source.replace(/<link[^>]*href="css\/fiction-link\.css[^>]*>/, '') + '<!-- css/fiction-link.css -->'
  ];
  for (const fixture of invalid) assert.throws(() => validate(fixture));
  console.log(`PASS: source plus ${invalid.length} rejected regression controls`);
}

const sourceValidation = validate(source);
const sourceCss = await readFile(resolve(root, 'public/artist/css/fiction-link.css'), 'utf8');
assert.ok(sourceCss.trim(), 'Novel entry stylesheet must exist and contain rules');
const originIndex = process.argv.indexOf('--origin');
if (originIndex !== -1) {
  const origin = new URL(process.argv[originIndex + 1]);
  assert.ok(['127.0.0.1', 'localhost', 'www.ronshoal.com'].includes(origin.hostname));
  const response = await fetch(new URL('/artist/index.html', origin));
  assert.equal(response.status, 200);
  const delivered = await response.text();
  validate(delivered);
  assert.equal(delivered, source, 'Delivered artist HTML differs from the checked source');
  const css = await fetch(new URL(sourceValidation.sheet, new URL('/artist/index.html', origin)));
  assert.equal(css.status, 200);
  assert.equal(await css.text(), sourceCss);
  console.log(`PASS: delivered header/card entries and CSS at ${origin.origin}`);
} else {
  console.log('PASS: public novel entries in header and FICTION card');
}
