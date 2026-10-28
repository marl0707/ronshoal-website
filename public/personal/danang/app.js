(() => {
  'use strict';
  const data = JSON.parse(document.getElementById('spots-data').textContent);
  const key = 'sejima-danang-wishlist-v1';
  const validIds = new Set(data.map(s => s.id));
  let saved = new Set();
  try {
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(stored)) saved = new Set(stored.filter(id => validIds.has(id)));
  } catch { /* Keep the page usable when local storage is disabled or invalid. */ }
  let filter = 'all';
  const cards = [...document.querySelectorAll('.spot')];
  const groups = [...document.querySelectorAll('[data-group]')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const saveButtons = [...document.querySelectorAll('[data-save]')];
  const status = document.getElementById('result-count');
  const pick = document.getElementById('pick');
  const shuffle = document.getElementById('shuffle');
  function render() {
    for (const button of filterButtons) button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    for (const button of saveButtons) {
      const active = saved.has(button.dataset.save);
      const spot = data.find(s => s.id === button.dataset.save);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', `${spot.name}${active ? 'を行きたい店から外す' : 'を行きたい店に保存'}`);
      button.querySelector('span').textContent = active ? '保存済み' : '行きたい';
    }
    let visible = 0;
    for (const card of cards) {
      const matches = filter === 'all' || (filter === 'saved' ? saved.has(card.dataset.id) : card.dataset.category === filter);
      card.hidden = !matches;
      if (matches) visible++;
    }
    for (const group of groups) group.hidden = ![...group.querySelectorAll('.spot')].some(card => !card.hidden);
    document.getElementById('saved-count').textContent = String(saved.size);
    document.getElementById('empty').hidden = visible > 0;
    status.textContent = `${visible}軒の候補${filter === 'saved' ? ' / 行きたいリスト' : ''}`;
    shuffle.disabled = visible === 0;
    pick.hidden = true;
  }
  for (const button of filterButtons) button.addEventListener('click', () => { filter = button.dataset.filter; render(); });
  for (const button of saveButtons) button.addEventListener('click', () => {
    const id = button.dataset.save;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    try { localStorage.setItem(key, JSON.stringify([...saved])); } catch { /* Session-only selection remains available. */ }
    render();
  });
  shuffle.addEventListener('click', () => {
    const options = cards.filter(card => !card.hidden);
    if (!options.length) return;
    const selected = options[Math.floor(Math.random() * options.length)];
    const spot = data.find(s => s.id === selected.dataset.id);
    const link = document.getElementById('pick-link');
    link.textContent = `${spot.name} ↘`;
    link.href = `#spot-${spot.id}`;
    pick.hidden = false;
    link.focus({preventScroll:true});
  });
  document.getElementById('close-pick').addEventListener('click', () => { pick.hidden = true; shuffle.focus({preventScroll:true}); });
  function revealHash(fragment = location.hash) {
    const id = fragment.slice(1);
    const target = document.getElementById(id);
    if (!target || (!target.classList.contains('spot') && !target.classList.contains('chapter'))) return;
    if (target.hidden || target.closest('[hidden]')) {
      filter = 'all'; render();
      requestAnimationFrame(() => target.scrollIntoView({behavior:'auto',block:'start'}));
    }
  }
  window.addEventListener('hashchange', () => revealHash());
  for (const link of document.querySelectorAll('a[href^="#"]')) link.addEventListener('click', () => revealHash(link.getAttribute('href')));
  render(); revealHash();
  document.getElementById('share').addEventListener('click', async () => {
    const shareStatus = document.getElementById('share-status');
    const url = 'https://www.ronshoal.com/personal/danang/index.html';
    const info = {title:'食欲だけ、先に着いた。｜瀬島のダナン候補帳',text:'朝は肉、午後は浅煎り、夜は海老以外。ダナン20軒の出発前作戦会議。',url};
    if (typeof navigator.share === 'function') {
      try { await navigator.share(info); shareStatus.textContent = '共有操作を閉じました。'; return; }
      catch (error) { if (error.name === 'AbortError') { shareStatus.textContent = ''; return; } }
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard-unavailable');
      await navigator.clipboard.writeText(url);
      shareStatus.textContent = 'URLをコピーしました。友人とのトークに貼り付けてください。';
    } catch {
      document.getElementById('share-fallback').hidden = false;
      const input = document.getElementById('share-url');
      input.value = url; input.focus(); input.select();
      shareStatus.textContent = '下のURLを選んでコピーできます。';
    }
  });
  const progress = document.querySelector('.progress');
  let scrollPending = false;
  function updateProgress() {
    const distance = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${distance > 0 ? Math.min(100,Math.max(0,scrollY/distance*100)) : 0}%`;
    scrollPending = false;
  }
  window.addEventListener('scroll', () => { if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateProgress); } }, {passive:true});
  updateProgress();

  const canvas = document.getElementById('coast');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const hero = document.querySelector('.hero');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const flat = document.documentElement.classList.contains('flat');
  let width = 0, height = 0, active = true, frame = 0, last = 0;
  let pointer = {x:-10000,y:-10000};
  function size() {
    width = hero.clientWidth; height = hero.clientHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr);
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function draw(time) {
    frame = 0;
    if (!active || document.hidden || motion.matches || flat) return;
    frame = requestAnimationFrame(draw);
    if (time-last < 32) return;
    last = time;
    ctx.clearRect(0,0,width,height);
    const t = time/9000, mobile = width < 640;
    const cx = width*(mobile?.83:.78), cy = height*(mobile?.47:.54), radius = width*(mobile?.75:.29);
    const lines = mobile?13:24, steps = mobile?58:95;
    for (let j=0;j<lines;j++) {
      const r = radius*(.45+j/lines*.72);
      for (let k=0;k<steps;k++) {
        const angle = k/steps*Math.PI*2;
        const swell = Math.sin(angle*3+t+j*.18)*12+Math.sin(angle*7-t*.8)*3;
        let x = cx+Math.cos(angle)*(r+swell);
        let y = cy+Math.sin(angle)*(r+swell)*.73;
        const dx=x-pointer.x,dy=y-pointer.y,d=Math.hypot(dx,dy);
        if (d>0 && d<100) {x+=dx/d*(100-d)*.16;y+=dy/d*(100-d)*.16;}
        const alpha = .08+Math.pow((Math.sin(angle+t+j*.13)+1)/2,3)*.24;
        ctx.fillStyle = `rgba(255,92,36,${alpha})`;
        ctx.beginPath();ctx.arc(x,y,mobile?.8:1,0,Math.PI*2);ctx.fill();
      }
    }
  }
  function start() { if (!frame && active && !document.hidden && !motion.matches && !flat) frame=requestAnimationFrame(draw); }
  function stop() { if (frame) cancelAnimationFrame(frame);frame=0; }
  hero.addEventListener('pointermove', e => {const rect=hero.getBoundingClientRect();pointer={x:e.clientX-rect.left,y:e.clientY-rect.top};},{passive:true});
  hero.addEventListener('pointerleave', () => {pointer={x:-10000,y:-10000};},{passive:true});
  if (typeof IntersectionObserver==='function') new IntersectionObserver(entries=>{active=entries[0].isIntersecting;active?start():stop();}).observe(hero);
  document.addEventListener('visibilitychange',()=>{document.hidden?stop():start();});
  motion.addEventListener('change',()=>{motion.matches?stop():start();});
  let priorWidth=innerWidth;
  window.addEventListener('resize',()=>{if(innerWidth!==priorWidth){priorWidth=innerWidth;size();}updateProgress();},{passive:true});
  size();start();
})();
