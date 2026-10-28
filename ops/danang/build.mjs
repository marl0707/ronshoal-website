import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const out = path.join(root, 'public/personal/danang');
const spots = JSON.parse(fs.readFileSync(path.join(root, 'ops/danang/spots.json'), 'utf8'));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const groups = [
  {id:'banhmi',en:'BREAD FIRST.',ja:'朝は、肉を挟む。',num:'01',intro:'「朝からガッツリ」は、この旅の合言葉。七つの候補があるけれど、一度に七本食べるという意味ではない。念のため。'},
  {id:'coffee',en:'CHASE THE FRUIT.',ja:'コーヒーに、果実を探す。',num:'02',intro:'浅煎りで、フルーティーな一杯が好き。最初のひとことは「今日、果実感のある豆はありますか」。その答えを聞くための、六つの寄り道。'},
  {id:'steak',en:'MEAT THE CITY.',ja:'肉と、この街に会う。',num:'03',intro:'ステーキ候補を五つも集めてしまった。旅程を詰める前に、胃袋のスケジュールを空けておこう。いちばん気になるのはクァンゴンのボーネ。'},
  {id:'seafood',en:'THE SEA, AGAIN.',ja:'今夜、海老は休暇です。',num:'04',intro:'海老は最近、食べ放題で十分に会った。今回は魚、イカ、貝、そしてカニにも目を向けたい。海の広さを、メニューの上で思い出す夜に。'}
];
const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9Z"/></svg>';
const card = (s,i) => `<article class="spot" id="spot-${esc(s.id)}" data-id="${esc(s.id)}" data-category="${esc(s.category)}">
  <div class="spot-top"><span class="spot-number">${String(i+1).padStart(2,'0')}</span><span class="badge">${esc(s.badge)}</span><button class="save" data-save="${esc(s.id)}" type="button" aria-pressed="false" aria-label="${esc(s.name)}を行きたい店に保存">${star}<span>行きたい</span></button></div>
  <p class="spot-ja">${esc(s.ja)}</p><h3>${esc(s.name)}</h3><p class="spot-title">${esc(s.title)}</p>
  <p class="spot-copy">${esc(s.description)}</p><div class="mission"><span>現地でのお楽しみ</span><p>${esc(s.mission)}</p></div>
  <div class="spot-bottom"><span class="address">${esc(s.address)}<small>Đà Nẵng</small></span><a class="map-link" href="https://maps.app.goo.gl/${esc(s.map)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.name)}をGoogleマップで開く">地図を開く <span aria-hidden="true">↗</span></a></div>
  ${s.source?`<a class="source" href="${esc(s.source)}" target="_blank" rel="noopener noreferrer">${esc(s.sourceLabel)} ↗</a>`:''}
</article>`;
const html = `<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#111110">
<title>食欲だけ、先に着いた。｜瀬島のダナン候補帳</title>
<meta name="description" content="朝は肉たっぷりのバインミー。午後は浅煎りの果実感。夜は海老以外の海鮮。瀬島 和樹がこれから行きたい、ダナン20軒の出発前候補帳。">
<meta name="robots" content="noindex,follow"><link rel="canonical" href="https://www.ronshoal.com/personal/danang/index.html">
<meta property="og:type" content="website"><meta property="og:title" content="食欲だけ、先に着いた。｜瀬島のダナン候補帳"><meta property="og:description" content="まだ食べていない。なのに、もう楽しい。ダナン20軒の出発前作戦会議。"><meta property="og:url" content="https://www.ronshoal.com/personal/danang/index.html"><meta property="og:image" content="https://www.ronshoal.com/personal/danang/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css?v=1">
<script>if(new URLSearchParams(location.search).has('flat'))document.documentElement.classList.add('flat');</script><script src="app.js?v=1" defer></script></head>
<body><a class="skip" href="#guide">お店の候補へ</a><div class="progress" aria-hidden="true"></div><div class="grain" aria-hidden="true"></div>
<header class="header"><a class="brand" href="#top">SEJIMA<span>PERSONAL FIELD NOTES</span></a><a class="header-index" href="#guide">20 SPOTS <span aria-hidden="true">↘</span></a></header>
<main id="top"><section class="hero" aria-labelledby="hero-title">
<div class="hero-kicker"><span>VIETNAM / ĐÀ NẴNG</span><span>AN APPETITE BEFORE ARRIVAL</span></div>
<div class="city-word" aria-hidden="true">DA NANG<span>↗</span></div><canvas id="coast" aria-hidden="true"></canvas>
<div class="hero-bottom"><div><p class="eyebrow">瀬島 和樹の、これから行きたい候補帳。</p><h1 id="hero-title"><span>食欲だけ、</span><br><span class="accent">先に着いた。</span></h1><p class="hero-deck">まだ食べていない。なのに、もう楽しい。<br>肉とコーヒーと、ときどき海。<br>友人たちへ渡す、出発前の作戦会議。</p><a class="round-link" href="#guide"><span>候補をのぞく</span><span aria-hidden="true">↓</span></a></div>
<div class="trip-stamp" aria-label="20軒、4つの食欲"><div class="stamp-ring" aria-hidden="true"></div><span class="stamp-top">NOT YET TASTED</span><strong>20<span>SPOTS</span></strong><span class="stamp-bottom">4つの食欲 / 1つの胃袋</span></div></div>
<div class="hero-foot"><span>THE TRIP STARTS WITH AN APPETITE.</span><span>SCROLL TO GET HUNGRY ↓</span></div></section>
<section class="manifesto"><p class="eyebrow">BEFORE WE GO</p><div class="manifesto-body"><h2>名店の答え合わせは、<br><em>これから。</em></h2><div><p>これは食べ歩きの採点表ではなく、<br>僕の「気になる」を集めた候補帳です。</p><p>朝から肉の挟まったバインミーを食べたい。<br>浅煎りのコーヒーに、果実みたいな香りを探したい。<br>海老は最近たくさん食べたので、今回はほかの海鮮を。</p><p class="muted">味の感想は、現地の僕に任せておく。<br>出発前の僕は、わくわくする係でいこう。</p></div></div></section>
<nav class="chapter-nav" aria-label="4つの食欲">${groups.map(g=>`<a href="#${g.id}"><span>${g.num} / ${g.id==='banhmi'?'07':g.id==='coffee'?'06':g.id==='steak'?'05':'02'} SPOTS</span><strong>${g.en}</strong><small>${g.ja}</small><b aria-hidden="true">↗</b></a>`).join('')}</nav>
<section class="feature" aria-labelledby="feature-title"><div class="feature-art" aria-hidden="true"><div class="griddle"><div class="egg"></div><div class="steak-shape"></div><i></i><i></i><i></i></div><span class="feature-art-caption">AN IMAGINARY SIZZLE.<br>イラストは、まだ見ぬ一皿の想像図。</span></div><div class="feature-body"><p class="eyebrow">THE ONE I KEEP THINKING ABOUT</p><p class="feature-name">Quán NGON / クァンゴン</p><h2 id="feature-title">まず君に、<br>会いに行きたい。</h2><p>五軒の肉候補を並べたのに、<br>気がつくと、ここに目が戻っている。<br>ベトナム式のボーネ。<br>まだ一口も食べていないのに、期待はすでに大盛りだ。</p><a class="ink-link" href="#spot-ngon">今回の大本命を見る <span aria-hidden="true">↗</span></a></div></section>
<section id="guide" class="guide"><div class="guide-heading"><p class="eyebrow">THE APPETITE INDEX</p><h2>さて、何から<br class="mobile-only">気になろう。</h2><p>名前を眺める。行きたいに星をつける。<br>あとは、その日の空腹と相談する。</p></div>
<div class="guide-tools"><div class="filters" role="group" aria-label="お店を絞り込む"><button type="button" data-filter="all" aria-pressed="true">すべて <span>20</span></button>${groups.map(g=>`<button type="button" data-filter="${g.id}" aria-pressed="false">${g.id==='banhmi'?'バインミー':g.id==='coffee'?'コーヒー':g.id==='steak'?'ステーキ':'海鮮'}</button>`).join('')}<button type="button" data-filter="saved" aria-pressed="false">★ 行きたい <span id="saved-count">0</span></button></div><div class="guide-actions"><span id="result-count" role="status" aria-live="polite">20軒の候補</span><button type="button" class="text-button" id="shuffle">迷ったら一軒 ↗</button></div></div>
<p class="guide-note">全店、今回の訪問前の候補。価格・営業日・メニューは当日確認。ホテルからの近さは出発前メモです。</p>
<div id="pick" class="pick" hidden><span>今日の候補は、この一軒。</span><a id="pick-link" href="#guide"></a><button id="close-pick" type="button" aria-label="候補の提案を閉じる">×</button></div>
<div id="empty" class="empty" hidden><p>まだ星のない、まっさらな旅。</p><span>気になる店の「行きたい」を押すと、ここに集まります。</span></div>
${groups.map(g=>`<section class="chapter" id="${g.id}" data-group="${g.id}" aria-labelledby="heading-${g.id}"><div class="chapter-heading"><span class="chapter-num">${g.num}</span><div><p class="chapter-en">${g.en}</p><h2 id="heading-${g.id}">${g.ja}</h2></div><p>${g.intro}</p></div><div class="spot-grid">${spots.filter(s=>s.category===g.id).map(s=>card(s,spots.indexOf(s))).join('')}</div></section>`).join('')}
</section><section class="phrase"><p class="eyebrow">A LITTLE LINE FOR A GOOD CUP</p><h2>果実を探している、と<br>コーヒー屋で言ってみる。</h2><blockquote lang="en">“I like light-roasted, fruity coffee.<br>What beans would you recommend today?”</blockquote><p>浅煎りでフルーティーなコーヒーが好きです。<br>今日の豆なら、どれがおすすめですか？</p><div class="phrase-rule"></div><p class="phrase-small">海鮮では、こう聞いてみたい。</p><blockquote class="sea-phrase" lang="en">“I'd like seafood other than shrimp.<br>What would you recommend?”</blockquote><p class="phrase-small">海老以外の海鮮なら、何がおすすめですか？</p></section>
<section class="closing"><p class="eyebrow">TO BE CONTINUED, AT THE TABLE.</p><h2>続きは、<br><span>お店で。</span></h2><p>二十軒を全部回る必要はない。<br>一軒でも、いい出会いがあれば。<br>あ、でも朝のバインミーは、できれば外したくない。</p><button class="share-button" id="share" type="button">この候補帳を友人へ <span aria-hidden="true">↗</span></button><p class="share-status" id="share-status" role="status" aria-live="polite"></p><div id="share-fallback" hidden><label for="share-url">このURLをコピーしてください</label><input id="share-url" type="url" readonly value="https://www.ronshoal.com/personal/danang/index.html"></div></section></main>
<footer><div class="footer-top"><a href="#top">SEJIMA<span>DA NANG FIELD NOTES</span></a><p>Curated by 瀬島 和樹<br>出発前の候補帳 / 2026.10.28</p></div><p>店舗名・住所は共有されたGoogleマップのリンク先を確認。紹介文は訪問前の期待で、実食レビューではありません。朝営業や豆の情報は各店の参考リンクを添えています。営業時間、価格、在庫、料理の内容は変更されるため、地図と現地メニューで確認してください。</p><p>「行きたい」はこのブラウザ内に保存され、友人とは共有されません。このページはURLで共有できますが、検索結果への掲載は求めていません。</p></footer>
<noscript><style>.save,.guide-tools,.share-button{display:none}</style><p class="no-js-note">すべてのお店と地図リンクをご覧いただけます。保存と絞り込みにはJavaScriptを使います。</p></noscript>
<script type="application/json" id="spots-data">${JSON.stringify(spots.map(({id,category,name})=>({id,category,name}))).replace(/</g,'\\u003c')}</script></body></html>`;
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'index.html'),html.replace(/[ \t]+$/gm,''));
await import('./check.mjs');
console.log(JSON.stringify({written:'public/personal/danang/index.html',spots:spots.length,groups:groups.length}));
