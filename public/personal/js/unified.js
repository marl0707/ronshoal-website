/* Shared personal identity; no imports or style changes outside /personal/. */
(() => {
  'use strict';
  if (!document.body.classList.contains('personal-theme')) return;
  const query = new URLSearchParams(location.search);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const still = () => query.has('flat') || reduced.matches;
  if (still()) document.documentElement.classList.add('flat');

  const identities = {
    founder: ['FOUNDER', '02', 'BUSINESS / PEOPLE / SYSTEMS'],
    maker: ['MAKER', '03', 'DESIGN / BUILD / RUN'],
    researcher: ['RESEARCH', '04', 'OBSERVATION / RELATIONSHIPS'],
    athlete: ['PLAY', '05', 'PICKLEBALL / COMMUNITY / LIFE'],
    father: ['FATHER', '06', 'FAMILY / EDUCATION / WORLD']
  };
  const identity = identities[document.body.dataset.facet];
  if (identity) {
    const strip = document.createElement('div');
    strip.className = 'identity-strip';
    strip.setAttribute('aria-hidden', 'true');
    strip.innerHTML = `<div class="identity-strip-top"><span>${identity[1]} / SIX FACETS, ONE LIFE</span><span>${identity[2]}</span></div><div class="identity-field"><span class="identity-fallback">${identity[0]}</span><canvas class="identity-canvas" data-word="${identity[0]}"></canvas></div>`;
    document.querySelector('main').prepend(strip);
  }
  // Recolor the existing father's illustration without changing its geometry,
  // labels, provenance, or narrative. Presentation attributes stay local.
  const colors = {
    '#e1ddcf': '#333333', '#e7ebdf': '#191919', '#f6f3eb': '#111111',
    '#a6b1a0': '#79766f', '#bac4b1': '#484848', '#bd684b': '#ff6541',
    '#294f43': '#c0bbb1', '#9aaf93': '#79766f', '#c5d0b7': '#484848',
    '#e9e4d3': '#111111', '#8b9d87': '#79766f', '#7d9473': '#79766f', '#526456': '#aaa59b'
  };
  document.querySelectorAll('.journey-art svg [fill], .journey-art svg [stroke]').forEach(el => {
    for (const key of ['fill', 'stroke']) {
      const value = el.getAttribute(key);
      if (colors[value]) el.setAttribute(key, colors[value]);
    }
  });
  const keepPhrases = (heading, phrases) => {
    heading.replaceChildren(...phrases.map(text => {
      const span = document.createElement('span');
      span.className = 'role-heading-phrase';
      span.textContent = text;
      return span;
    }));
  };
  document.querySelectorAll('.role-work-card h3').forEach(heading => {
    keepPhrases(heading, heading.textContent.split(/(?<=、)/));
  });
  const communityTitle = document.querySelector('[data-facet="athlete"] .detail h2');
  if (communityTitle?.textContent === 'O.pickle — 個人のピックルボール活動。') {
    keepPhrases(communityTitle, ['O.pickle — ', '個人の', 'ピックルボール活動。']);
  }
  const progress = document.createElement('div');
  progress.className = 'theme-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<span></span>';
  document.body.append(progress);
  let scrollQueued = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - innerHeight;
    progress.firstElementChild.style.transform = `scaleX(${distance > 0 ? Math.min(1, scrollY / distance) : 0})`;
    scrollQueued = false;
  };
  addEventListener('scroll', () => {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  updateProgress();

  document.querySelectorAll('.identity-canvas').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const field = canvas.parentElement;
    const word = canvas.dataset.word;
    let points = [], width = 0, height = 0, inView = true, raf = 0;
    let pointer = { x: -9999, y: -9999 }, lastTime = 0;
    const paint = time => {
      ctx.clearRect(0, 0, width, height);
      const calm = still();
      for (const p of points) {
        if (!calm) {
          const dx = p.x - pointer.x, dy = p.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < 75) {
            p.vx += dx / distance * (1 - distance / 75) * 1.5;
            p.vy += dy / distance * (1 - distance / 75) * 1.5;
          }
          p.vx = (p.vx + (p.homeX - p.x) * .035) * .82;
          p.vy = (p.vy + (p.homeY - p.y) * .035) * .82;
          p.x += p.vx; p.y += p.vy;
        }
        const drift = calm ? 0 : Math.sin(time * .0006 + p.phase) * .65;
        ctx.fillStyle = p.accent ? '#ff6541' : '#ece7dd';
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(calm ? p.homeX : p.x, (calm ? p.homeY : p.y) + drift, p.size, p.size);
      }
      ctx.globalAlpha = 1;
      canvas.dataset.rendered = 'true';
      field.classList.add('is-drawn');
    };
    const frame = time => {
      raf = 0;
      if (!inView || document.hidden || still()) return;
      if (time - lastTime >= 30) { paint(time); lastTime = time; }
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!raf && inView && !document.hidden && !still()) raf = requestAnimationFrame(frame);
    };
    const build = () => {
      const rect = field.getBoundingClientRect();
      width = Math.round(rect.width); height = Math.round(rect.height);
      if (!width || !height) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const sample = document.createElement('canvas');
      sample.width = width; sample.height = height;
      const s = sample.getContext('2d', { willReadFrequently: true });
      if (!s) return;
      s.font = '100px "Archivo Black", sans-serif';
      const fontSize = Math.min(height * .83, 100 * width * .94 / s.measureText(word).width);
      s.font = `${fontSize}px "Archivo Black", sans-serif`;
      s.fillStyle = '#fff'; s.textAlign = 'center'; s.textBaseline = 'middle';
      s.fillText(word, width / 2, height / 2);
      const pixels = s.getImageData(0, 0, width, height).data;
      const gap = width < 600 ? 1.8 : 3.4;
      points = [];
      for (let y = 0; y < height; y += gap) for (let x = 0; x < width; x += gap) {
        if (pixels[(Math.floor(y) * width + Math.floor(x)) * 4 + 3] < 128) continue;
        points.push({homeX:x,homeY:y,x:x+(Math.random()-.5)*3,y:y+(Math.random()-.5)*3,vx:0,vy:0,
          accent:Math.random()<.045,alpha:.7+Math.random()*.3,size:width<600?1.05:1.8,phase:Math.random()*6.28});
      }
      canvas.dataset.points = String(points.length);
      paint(0); start();
    };
    let fontReady = false;
    const begin = () => { if (!fontReady) { fontReady = true; build(); } };
    if (document.fonts) {
      document.fonts.load('80px "Archivo Black"').then(begin).catch(begin);
      setTimeout(begin, 1500);
      document.fonts.ready.then(() => { if (fontReady) build(); });
    } else begin();
    const observer = new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      if (!inView) { cancelAnimationFrame(raf); raf = 0; } else start();
    });
    observer.observe(field);
    field.closest('section, main').addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse' || still()) return;
      const rect = canvas.getBoundingClientRect();
      pointer = { x:event.clientX-rect.left, y:event.clientY-rect.top };
    }, { passive:true });
    field.closest('section, main').addEventListener('pointerleave', () => { pointer = {x:-9999,y:-9999}; });
    let previousWidth = innerWidth, resizeTimer;
    addEventListener('resize', () => {
      if (innerWidth === previousWidth) return;
      previousWidth = innerWidth; clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 120);
    }, { passive:true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else start();
    });
    reduced.addEventListener('change', () => {
      // main.js may have skipped its reveal observer at initial reduced motion.
      // Keep all narrative visible when the preference is later switched off.
      document.querySelectorAll('.reveal, .hero-tag, .profile-lead, .philo-line').forEach(el => el.classList.add('in'));
      document.documentElement.classList.toggle('flat', still());
      cancelAnimationFrame(raf); raf = 0; paint(0); start();
    });
  });
})();
