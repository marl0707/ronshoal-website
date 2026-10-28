import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// Source/functional checks only. This deliberately does not claim browser layout QA.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const folder = path.join(root, 'public/personal/danang');
const data = JSON.parse(fs.readFileSync(path.join(root, 'ops/danang/spots.json'), 'utf8'));
const html = fs.readFileSync(path.join(folder, 'index.html'), 'utf8');
const code = fs.readFileSync(path.join(folder, 'app.js'), 'utf8');
let checks = 0;
function check(condition, message) { checks++; assert.ok(condition, message); }
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const fragmentLinks = [...html.matchAll(/<a\b[^>]*\bhref="(#[^"]*)"[^>]*>/g)].map(match => match[1]);
const mapLinks = [...html.matchAll(/href="https:\/\/maps\.app\.goo\.gl\/([^"]+)"/g)].map(match => match[1]);
const cardIds = [...html.matchAll(/<article\b[^>]*\bid="spot-([^"]+)"/g)].map(match => match[1]);
const saveIds = [...html.matchAll(/\bdata-save="([^"]+)"/g)].map(match => match[1]);
check(data.length === 20 && new Set(data.map(s => s.id)).size === 20, 'Expected 20 distinct candidate records');
check(new Set(ids).size === ids.length, 'Duplicate HTML ID');
check(fragmentLinks.every(link => ids.includes(link.slice(1))), 'Broken internal anchor');
check(mapLinks.length === 20 && new Set(mapLinks).size === 20, 'Expected 20 distinct Google Maps links');
check(data.every(s => mapLinks.includes(s.map)), 'A supplied candidate map is missing');
check(cardIds.length === 20 && data.every(s => cardIds.includes(s.id)), 'Candidate/card ID mismatch');
check(saveIds.length === 20 && data.every(s => saveIds.includes(s.id)), 'Candidate/save button mismatch');
for (const asset of ['style.css', 'app.js']) check(fs.existsSync(path.join(folder, asset)), `Missing ${asset}`);
const embedded = html.match(/<script type="application\/json" id="spots-data">([\s\S]*?)<\/script>/);
check(Boolean(embedded), 'Embedded candidate JSON missing');
const publicData = JSON.parse(embedded[1]);
check(JSON.stringify(publicData) === JSON.stringify(data.map(({id,category,name})=>({id,category,name}))), 'Embedded candidate data is stale');

function harness({hash = '', stored = '[]', blocked = false, source = code} = {}) {
  let document;
  class Element {
    constructor({id = '', classes = [], dataset = {}, href = '', parent = null} = {}) {
      this.id = id; this.classes = new Set(classes); this.dataset = dataset;
      this.href = href; this.parentElement = parent; this.hidden = false;
      this.disabled = false; this.textContent = ''; this.style = {}; this.attributes = {};
      this.events = new Map(); this.children = []; this.scrolled = false;
      this.classList = {contains: name => this.classes.has(name), add: name => this.classes.add(name)};
      if (parent) parent.children.push(this);
    }
    setAttribute(name, value) { this.attributes[name] = String(value); }
    getAttribute(name) { return name === 'href' ? this.href : this.attributes[name] ?? null; }
    addEventListener(type, handler) { const handlers = this.events.get(type) || []; handlers.push(handler); this.events.set(type, handlers); }
    matches(selector) {
      if (selector === '[hidden]') return this.hidden;
      if (selector === 'a[href^="#"]' || selector === "a[href^='#']") return this.href.startsWith('#');
      if (selector.startsWith('.')) return this.classes.has(selector.slice(1));
      return false;
    }
    closest(selector) { for (let item = this; item; item = item.parentElement) if (item.matches(selector)) return item; return null; }
    querySelector(selector) { if (selector === 'span') return this.span ||= new Element(); return this.querySelectorAll(selector)[0] || null; }
    querySelectorAll(selector) {
      const result = [];
      const walk = item => { for (const child of item.children) { if (child.matches(selector)) result.push(child); walk(child); } };
      walk(this); return result;
    }
    focus() { document.activeElement = this; }
    select() { this.selected = true; }
    scrollIntoView() { this.scrolled = true; }
    click() {
      if (this.disabled) return;
      const event = {target: this, currentTarget: this, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }};
      for (const handler of this.events.get('click') || []) handler(event);
      for (const handler of document.events.get('click') || []) handler(event);
    }
  }
  const byId = Object.fromEntries(ids.map(id => [id, new Element({id})]));
  const groups = ['banhmi','coffee','steak','seafood'].map(id => {
    const item = byId[id]; item.classes.add('chapter'); item.dataset.group = id; return item;
  });
  const cards = data.map(s => {
    const item = byId[`spot-${s.id}`]; item.classes.add('spot');
    item.dataset = {id:s.id, category:s.category};
    item.parentElement = byId[s.category]; byId[s.category].children.push(item); return item;
  });
  const filters = ['all','banhmi','coffee','steak','seafood','saved'].map(filter => new Element({dataset:{filter}}));
  const saves = data.map(s => new Element({dataset:{save:s.id}}));
  const anchors = fragmentLinks.map(href => new Element({href}));
  const progress = new Element();
  byId['spots-data'].textContent = embedded[1];
  byId.coast.getContext = () => null;
  for (const id of ['pick','empty','share-fallback']) byId[id].hidden = true;
  const select = selector => selector === '.spot' ? cards : selector === '[data-group]' ? groups : selector === '[data-filter]' ? filters : selector === '[data-save]' ? saves : selector.startsWith('a[') ? anchors : [];
  document = {
    events: new Map(), getElementById: id => byId[id] || null,
    querySelectorAll: select, querySelector: selector => selector === '.progress' ? progress : select(selector)[0] || null,
    documentElement: {scrollHeight:1000, classList:{contains:()=>false}},
    addEventListener(type, handler) { const handlers = this.events.get(type) || []; handlers.push(handler); this.events.set(type,handlers); }
  };
  const window = {events:new Map(), addEventListener(type, handler) { const list=this.events.get(type)||[];list.push(handler);this.events.set(type,list); }};
  let storageValue = stored;
  const localStorage = {
    getItem() { if (blocked) throw new Error('blocked-storage'); return storageValue; },
    setItem(_key, value) { if (blocked) throw new Error('blocked-storage'); storageValue=value; }
  };
  vm.runInNewContext(source, {document,window,location:{hash},localStorage,navigator:{},innerHeight:800,scrollY:0,requestAnimationFrame:fn=>{fn();return 1},cancelAnimationFrame(){},URL,decodeURIComponent,Set,JSON}, {timeout:1000});
  return {
    byId,cards,groups,filters,saves,anchors,document,window,
    visible: () => cards.filter(card=>!card.hidden),
    filter: name => { const item=filters.find(item=>item.dataset.filter===name);assert.ok(item);item.click(); },
    save: id => { const item=saves.find(item=>item.dataset.save===id);assert.ok(item);item.click(); },
    stored: () => storageValue
  };
}

for (const options of [{}, {stored:'{invalid'}, {stored:'{}'}, {blocked:true}]) {
  const h = harness(options);
  check(h.visible().length === 20, 'Storage problem hid initial candidates');
  check(h.byId.share.events.has('click'), 'Storage problem prevented share initialization');
}
const invalidHash = harness({hash:'#%'});
check(invalidHash.visible().length === 20 && invalidHash.byId.share.events.has('click'), 'Malformed hash prevented application initialization');
const clean = harness();
for (const [category, count] of Object.entries({banhmi:7,coffee:6,steak:5,seafood:2})) {
  clean.filter(category);
  check(clean.visible().length === count && clean.visible().every(card=>card.dataset.category===category), `Incorrect ${category} filter`);
}
clean.filter('saved');
check(clean.visible().length===0 && !clean.byId.empty.hidden && clean.byId.shuffle.disabled, 'Empty wishlist state failed');
clean.filter('all'); clean.save('ngon'); clean.save('xliii');
check(clean.byId['saved-count'].textContent==='2', 'Wishlist count failed');
check(JSON.parse(clean.stored()).sort().join(',')==='ngon,xliii', 'Wishlist persistence failed');
clean.filter('saved');
check(clean.visible().length===2 && clean.visible().every(card=>['ngon','xliii'].includes(card.dataset.id)), 'Saved filter included unsaved cards');
clean.save('ngon'); clean.save('xliii');
check(clean.visible().length===0 && !clean.byId.empty.hidden && clean.byId.shuffle.disabled, 'Removing the last wishlist item did not restore empty state');
const contaminated=harness({stored:'["ngon","unknown","ngon",null]'});
check(contaminated.byId['saved-count'].textContent==='1', 'Unknown or duplicate persisted IDs changed wishlist count');
const blocked=harness({blocked:true}); blocked.save('ngon'); blocked.filter('saved');
check(blocked.visible().length===1 && blocked.visible()[0].dataset.id==='ngon', 'Blocked persistence prevented session wishlist use');
const sameHash=harness({hash:'#steak'}); sameHash.filter('coffee');
check(sameHash.byId.steak.hidden, 'Regression fixture did not hide the steak chapter');
sameHash.anchors.find(anchor=>anchor.href==='#steak').click();
check(!sameHash.byId.steak.hidden && sameHash.cards.filter(card=>card.dataset.category==='steak').every(card=>!card.hidden), 'Same-hash chapter navigation did not reveal hidden content');
const nested=harness({hash:'#spot-ngon'}); nested.filter('coffee');
nested.anchors.find(anchor=>anchor.href==='#spot-ngon').click();
check(!nested.byId['spot-ngon'].hidden && !nested.byId.steak.hidden, 'Same-hash card navigation did not reveal its hidden parent');
clean.filter('coffee'); clean.byId.shuffle.click();
check(!clean.byId.pick.hidden && clean.visible().some(card=>`#spot-${card.dataset.id}`===clean.byId['pick-link'].href), 'Random suggestion escaped selected category');
clean.byId['close-pick'].click();
check(clean.byId.pick.hidden && clean.document.activeElement===clean.byId.shuffle, 'Suggestion close/focus failed');
let selfTest;
if (process.argv.includes('--self-test')) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'danang-check-self-test-'));
  const tempOps = path.join(temp, 'ops/danang');
  const tempPublic = path.join(temp, 'public/personal/danang');
  const statuses = {};
  try {
    fs.mkdirSync(tempOps, {recursive:true});
    fs.mkdirSync(tempPublic, {recursive:true});
    fs.copyFileSync(fileURLToPath(import.meta.url), path.join(tempOps, 'check.mjs'));
    fs.copyFileSync(path.join(root, 'ops/danang/spots.json'), path.join(tempOps, 'spots.json'));
    for (const asset of ['index.html','style.css','app.js']) fs.copyFileSync(path.join(folder, asset), path.join(tempPublic, asset));
    const run = () => spawnSync(process.execPath, [path.join(tempOps, 'check.mjs')], {encoding:'utf8',timeout:10000,maxBuffer:1024*1024});
    const baseline = run();
    check(!baseline.error && baseline.status===0, 'Self-test positive control did not pass');
    statuses.baseline = baseline.status;
    const decodeAnchor = 'const id = fragment.slice(1);';
    check(code.split(decodeAnchor).length===2, 'Self-test decode mutation anchor must occur once');
    const badDecode = code.replace(decodeAnchor, 'const id = decodeURIComponent(fragment.slice(1));');
    fs.writeFileSync(path.join(tempPublic, 'app.js'), badDecode);
    const malformedResult = run();
    check(!malformedResult.error && malformedResult.status!==0 && malformedResult.stderr.includes('URI malformed'), 'Validator did not reject the previous malformed-hash bug');
    statuses.malformedHashRejected = true;
    const clickLines = code.split('\n').filter(line=>line.trimStart().startsWith('for (const link of document.querySelectorAll'));
    check(clickLines.length===1, 'Self-test internal-anchor listener mutation anchor must occur once');
    fs.writeFileSync(path.join(tempPublic, 'app.js'), code.replace(clickLines[0], ''));
    const sameHashResult = run();
    check(!sameHashResult.error && sameHashResult.status!==0 && sameHashResult.stderr.includes('Same-hash chapter navigation did not reveal hidden content'), 'Validator did not reject the previous same-hash navigation bug');
    statuses.sameHashRejected = true;
    selfTest = {status:'passed',...statuses,publicSourcesMutated:false};
  } finally {
    fs.rmSync(temp, {recursive:true,force:true});
  }
}
console.log(JSON.stringify({status:'passed',scope:'source-and-mock-dom-only',checks,candidates:data.length,visualBrowserQA:false,...(selfTest?{selfTest}:{})}));
