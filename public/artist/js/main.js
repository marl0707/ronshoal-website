/* ═══════════════════════════════════════════════════════════
   KAZUKI SEJIMA — Generative Studies  (site mockup v0.1)
   依存ゼロ vanilla JS。?flat / prefers-reduced-motion で全停止。
   ═══════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  const html = document.documentElement;
  html.classList.remove("no-js");
  html.classList.add("js");

  const FLAT =
    new URLSearchParams(location.search).has("flat") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (FLAT) html.classList.add("flat");

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const INK = "#ece7dd";
  const ACC = "#ff3d00";
  const BG = "#0b0b0b"; /* canvas内はRGB等値（低α合成の丸めで青転びするため） */
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ── プリローダー ─────────────────────────── */
  (() => {
    const pre = document.getElementById("preloader");
    if (!pre) return;
    if (FLAT) {
      html.classList.add("loaded");
      pre.remove();
      return;
    }
    const countEl = document.getElementById("preCount");
    const kanjiEl = document.getElementById("preKanji");
    const KANJI = ["瀬", "島", "和", "樹"];
    const T = 1400;
    const t0 = performance.now();
    let ki = 0;
    const kanjiTimer = setInterval(() => {
      ki = (ki + 1) % KANJI.length;
      kanjiEl.textContent = KANJI[ki];
    }, 200);
    const tick = (now) => {
      const p = clamp((now - t0) / T, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      countEl.textContent = Math.round(eased * 100);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        clearInterval(kanjiTimer);
        kanjiEl.textContent = "樹";
        html.classList.add("loaded");
        setTimeout(() => pre.remove(), 1100);
      }
    };
    requestAnimationFrame(tick);
  })();

  /* ── カスタムカーソル + マグネット ───────── */
  const FINE = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
  if (!FLAT && FINE) {
    html.classList.add("has-cursor");
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    let mx = innerWidth / 2, my = innerHeight / 2;
    let dx = mx, dy = my, rx = mx, ry = my;
    // 初期位置を即時反映（放置するとCSS初期値の左上に張り付く）
    dot.style.transform = `translate(${dx}px, ${dy}px)`;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    const loop = () => {
      dx = lerp(dx, mx, 0.4); dy = lerp(dy, my, 0.4);
      rx = lerp(rx, mx, 0.16); ry = lerp(ry, my, 0.16);
      // ポインタ静止中(収束後)はstyle書き込みを止める
      if (Math.abs(rx - mx) > 0.05 || Math.abs(ry - my) > 0.05 ||
          Math.abs(dx - mx) > 0.05 || Math.abs(dy - my) > 0.05) {
        dot.style.transform = `translate(${dx}px, ${dy}px)`;
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    document.addEventListener("mouseover", (e) => {
      ring.classList.toggle("big", !!e.target.closest("a, button, .work-frame"));
    });

    // マグネット吸着
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.style.display = "inline-block";
      el.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const ox = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const oy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        el.style.transform = `translate(${ox}px, ${oy}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ── テキストスクランブル ─────────────────── */
  const SCRAMBLE_CHARS = "アイウカキクサシスセ01#/—SEJIMA";
  const scramble = (el, finalText, dur = 520) => {
    if (el._scr) cancelAnimationFrame(el._scr);
    const t0 = performance.now();
    const step = (now) => {
      const p = clamp((now - t0) / dur, 0, 1);
      const keep = Math.floor(finalText.length * p);
      let out = finalText.slice(0, keep);
      for (let i = keep; i < finalText.length; i++) {
        out += SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
      }
      el.textContent = out;
      if (p < 1) el._scr = requestAnimationFrame(step);
      else el._scr = null;
    };
    el._scr = requestAnimationFrame(step);
  };
  if (!FLAT) {
    document.querySelectorAll("[data-scramble]").forEach((el) => {
      const orig = el.textContent;
      el.setAttribute("aria-label", orig); // スクランブル中もアクセシブルネームを固定
      el.addEventListener("mouseenter", () => scramble(el, orig));
    });
  }

  /* ── リビール（IntersectionObserver） ─────── */
  if (!FLAT) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    document
      .querySelectorAll(".reveal, .mani-line, .about-lead, .philo-big")
      .forEach((el) => io.observe(el));
  }

  /* ── 現在セクション表示 ───────────────────── */
  (() => {
    const label = document.getElementById("sectionLabel");
    if (!label) return;
    const set = (txt) => (FLAT ? (label.textContent = txt) : scramble(label, txt, 400));
    set("01 — INTRO");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) set(en.target.dataset.label);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    document.querySelectorAll("[data-label]").forEach((s) => io.observe(s));
  })();

  /* ── 時計（KL / 日本） ────────────────────── */
  (() => {
    const kl = document.getElementById("clockKL");
    const jp = document.getElementById("clockJP");
    if (!kl || !jp) return;
    const fmt = (tz) =>
      new Intl.DateTimeFormat("ja-JP", {
        timeZone: tz, hour12: false,
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      });
    const fKL = fmt("Asia/Kuala_Lumpur");
    const fJP = fmt("Asia/Tokyo");
    const update = () => {
      const now = new Date();
      kl.textContent = fKL.format(now);
      jp.textContent = fJP.format(now);
    };
    update();
    setInterval(update, 1000);
  })();

  /* ── HERO パーティクル・タイポグラフィ ────── */
  (() => {
    const canvas = document.getElementById("heroCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hero = canvas.closest(".hero");
    let particles = [];
    let mouseX = -9999, mouseY = -9999;
    let heroVisible = true;
    let running = false;

    const sizeCanvas = () => {
      const r = hero.getBoundingClientRect();
      canvas.width = Math.round(r.width * DPR);
      canvas.height = Math.round(r.height * DPR);
    };

    // 狭幅では文字を広げて粒を細かくする（粒>間隔だと文字がガタつく）
    const widthFactor = (w) => (w < 1000 ? 0.92 : 0.86);

    const drawStatic = () => {
      sizeCanvas();
      ctx.fillStyle = INK;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let fs = 100;
      ctx.font = `${fs}px "Archivo Black", sans-serif`;
      fs = Math.floor((fs * canvas.width * widthFactor(canvas.width)) / ctx.measureText("SEJIMA").width);
      ctx.font = `${fs}px "Archivo Black", sans-serif`;
      ctx.fillText("SEJIMA", canvas.width / 2, canvas.height / 2);
    };

    let builtWithFont = false;
    const buildParticles = () => {
      builtWithFont = document.fonts ? document.fonts.check('80px "Archivo Black"') : true;
      sizeCanvas();
      const off = document.createElement("canvas");
      off.width = canvas.width;
      off.height = canvas.height;
      const octx = off.getContext("2d", { willReadFrequently: true });
      octx.fillStyle = "#fff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      let fs = 100;
      octx.font = `${fs}px "Archivo Black", sans-serif`;
      fs = Math.floor((fs * off.width * widthFactor(off.width)) / octx.measureText("SEJIMA").width);
      octx.font = `${fs}px "Archivo Black", sans-serif`;
      octx.fillText("SEJIMA", off.width / 2, off.height / 2);
      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const narrow = off.width < 1000;
      const gap = Math.max(narrow ? 3 : 4, Math.round(off.width / 340));
      particles = [];
      for (let y = 0; y < off.height; y += gap) {
        for (let x = 0; x < off.width; x += gap) {
          if (data[(y * off.width + x) * 4 + 3] > 128) {
            particles.push({
              x: Math.random() * off.width,
              y: Math.random() * off.height,
              hx: x, hy: y,
              vx: 0, vy: 0,
              a: Math.random() < 0.055,
              s: (narrow ? Math.random() * 0.9 + 0.8 : Math.random() * 1.4 + 1.1) * DPR,
            });
          }
        }
      }
    };

    const R = 120 * DPR;
    const step = () => {
      if (!heroVisible) { running = false; return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.vx += (p.hx - p.x) * 0.014;
        p.vy += (p.hy - p.y) * 0.014;
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < R * R && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = ((R - d) / R) * 2.4;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx *= 0.9; p.vy *= 0.9;
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.a ? ACC : INK;
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
      requestAnimationFrame(step);
    };
    const start = () => {
      if (!running) { running = true; requestAnimationFrame(step); }
    };

    const toCanvasXY = (e) => {
      const r = canvas.getBoundingClientRect();
      mouseX = (e.clientX - r.left) * DPR;
      mouseY = (e.clientY - r.top) * DPR;
    };

    const init = () => {
      if (FLAT) { drawStatic(); return; }
      buildParticles();
      hero.addEventListener("pointermove", toCanvasXY, { passive: true });
      hero.addEventListener("pointerleave", () => { mouseX = mouseY = -9999; });
      hero.addEventListener("pointerdown", (e) => {
        toCanvasXY(e);
        for (const p of particles) {
          const dx = p.x - mouseX, dy = p.y - mouseY;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d < 340 * DPR) {
            const k = (1 - d / (340 * DPR)) * 26;
            p.vx += (dx / d) * k;
            p.vy += (dy / d) * k;
          }
        }
      });
      new IntersectionObserver((entries) => {
        heroVisible = entries[0].isIntersecting;
        if (heroVisible) start();
      }).observe(hero);
      start();
    };

    // Archivo Black のロードを待ってから文字サンプリング
    let done = false;
    const go = () => { if (!done) { done = true; init(); } };
    if (document.fonts && document.fonts.ready) {
      document.fonts.load('80px "Archivo Black"').then(go).catch(go);
      setTimeout(go, 1800);
      // 低速回線でタイムアウト初期化された場合、フォント到着後に一度だけ組み直す
      document.fonts.ready.then(() => {
        if (done && !builtWithFont) FLAT ? drawStatic() : buildParticles();
      });
    } else {
      setTimeout(go, 400);
    }

    // 幅が変わった時だけ再構築（iOSツールバー伸縮=高さのみの変化で爆散させない）
    let rt, lastW = innerWidth;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (innerWidth === lastW) return;
        lastW = innerWidth;
        FLAT ? drawStatic() : buildParticles();
      }, 300);
    });
  })();

  /* ── WORKS ジェネラティブ・キャンバス群 ───── */
  (() => {
    const works = document.querySelectorAll(".work[data-gen]");
    if (!works.length) return;

    const makeGen = (type, canvas) => {
      const ctx = canvas.getContext("2d");
      let W = 0, H = 0;
      const g = { boost: 1, target: 1, frame: 0, state: null };

      const size = () => {
        const r = canvas.parentElement.getBoundingClientRect();
        W = canvas.width = Math.max(2, Math.round(r.width * DPR));
        H = canvas.height = Math.max(2, Math.round(r.height * DPR));
      };

      const initState = () => {
        ctx.fillStyle = BG;
        ctx.fillRect(0, 0, W, H);
        if (type === "strings") {
          // 箏の13絃 — 減衰する定在波
          g.state = {
            strings: Array.from({ length: 13 }, (_, i) => ({
              rx: (i + 1.5) / 15,
              amp: 0,
              freq: 1 + (i % 4),
              t0: -9999,
              nextPluck: 40 + Math.random() * 260 + i * 23,
            })),
          };
        } else if (type === "ink") {
          // ことばの雨 — 縦書きの文字列が流れ落ちる
          const fs = Math.max(14, Math.round(15 * DPR));
          const colW = fs * 1.9;
          const cols = Math.max(4, Math.floor(W / colW));
          g.state = {
            chars: "ものがたりをつむぐことばのかけら物語言葉歌声絃音記憶夜光海風",
            fs,
            drops: Array.from({ length: cols }, (_, i) => ({
              x: (i + 0.5) * colW,
              y: Math.random() * H,
              spd: 0.5 + Math.random() * 1.1,
              lastY: -9999,
            })),
          };
        } else if (type === "vita") {
          // 腸内細菌のコロニー — 呼吸のリズムで脈動し、細胞がエクソソームを放出する
          const centers = Array.from({ length: 4 }, () => ({
            x: (0.25 + Math.random() * 0.5) * W,
            y: (0.25 + Math.random() * 0.5) * H,
            a: Math.random() * Math.PI * 2,
          }));
          const cells = Array.from({ length: 150 }, () => ({
            ci: (Math.random() * centers.length) | 0,
            ang: Math.random() * Math.PI * 2,
            rad: (0.05 + Math.random() * 0.15) * Math.min(W, H),
            spd: 0.003 + Math.random() * 0.012,
            r: (1 + Math.random() * 2.2) * DPR,
            acc: Math.random() < 0.06,
          }));
          g.state = { centers, cells, exos: [] };
        } else if (type === "life") {
          const cell = Math.max(6, Math.round(8 * DPR));
          const cols = Math.ceil(W / cell), rows = Math.ceil(H / cell);
          const grid = new Uint8Array(cols * rows);
          for (let i = 0; i < grid.length; i++) grid[i] = Math.random() < 0.14 ? 1 : 0;
          g.state = { cell, cols, rows, grid, next: new Uint8Array(cols * rows) };
        }
      };

      const step = (t) => {
        g.frame++;
        g.boost = lerp(g.boost, g.target, 0.06);
        const b = g.boost;

        if (type === "strings") {
          ctx.fillStyle = BG;
          ctx.fillRect(0, 0, W, H);
          for (const st of g.state.strings) {
            st.nextPluck -= b;
            if (st.nextPluck <= 0) {
              st.amp = (7 + Math.random() * 13) * DPR;
              st.t0 = t;
              st.nextPluck = 110 + Math.random() * 340;
            }
            const dt = Math.max(0, t - st.t0) / 1000;
            const decay = Math.exp(-dt * 1.7);
            const A = st.amp * decay;
            const x0 = st.rx * W;
            ctx.beginPath();
            for (let y = 0; y <= H; y += 6 * DPR) {
              const shape = Math.sin((y / H) * Math.PI * st.freq);
              const x = x0 + A * shape * Math.sin(dt * 26 + y * 0.0015);
              y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle =
              decay > 0.72 && st.amp > 0
                ? ACC
                : `rgba(236, 231, 221, ${(0.22 + 0.55 * decay).toFixed(3)})`;
            ctx.lineWidth = DPR * (0.7 + 0.9 * decay);
            ctx.stroke();
          }
        } else if (type === "ink") {
          ctx.fillStyle = "rgba(11, 11, 11, 0.028)";
          ctx.fillRect(0, 0, W, H);
          const s = g.state;
          ctx.font = `${s.fs}px "Zen Kaku Gothic New", sans-serif`;
          ctx.textAlign = "center";
          for (const d of s.drops) {
            d.y += d.spd * b * 1.7 * DPR;
            if (d.y - d.lastY >= s.fs * 1.25) {
              d.lastY = d.y;
              const ch = s.chars[(Math.random() * s.chars.length) | 0];
              ctx.fillStyle =
                Math.random() < 0.06 ? ACC : "rgba(236, 231, 221, 0.88)";
              ctx.fillText(ch, d.x, d.y);
            }
            if (d.y > H + s.fs * 3) {
              d.y = -Math.random() * H * 0.4;
              d.lastY = -9999;
              d.spd = 0.5 + Math.random() * 1.1;
            }
          }
        } else if (type === "signal") {
          ctx.fillStyle = BG;
          ctx.fillRect(0, 0, W, H);
          const n = 22;
          const gapY = (H * 0.72) / n;
          const y0 = H * 0.18;
          const tt = t * 0.0012 * b;
          for (let i = 0; i < n; i++) {
            const base = y0 + i * gapY;
            const pts = [];
            for (let x = 0; x <= W; x += 7 * DPR) {
              const env = Math.exp(-Math.pow((x - W / 2) / (W / 4.6), 2));
              const noise =
                Math.sin(x * 0.018 + tt * 2 + i * 1.7) * 0.6 +
                Math.sin(x * 0.007 - tt * 1.4 + i * 0.6) * 0.4;
              pts.push([x, base - Math.abs(noise) * env * 54 * DPR * b]);
            }
            // 塗り(上の線を隠す)と線を分離 — 閉路をstrokeするとキャンバス縁に枠線が出る
            ctx.beginPath();
            ctx.moveTo(0, base);
            for (const [x, y] of pts) ctx.lineTo(x, y);
            ctx.lineTo(W, H);
            ctx.lineTo(0, H);
            ctx.closePath();
            ctx.fillStyle = BG;
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (const [x, y] of pts) ctx.lineTo(x, y);
            ctx.strokeStyle =
              i === Math.floor(n / 2) ? ACC : "rgba(236, 231, 221, 0.5)";
            ctx.lineWidth = DPR * 0.9;
            ctx.stroke();
          }
        } else if (type === "vita") {
          ctx.fillStyle = "rgba(11, 11, 11, 0.06)";
          ctx.fillRect(0, 0, W, H);
          const s = g.state;
          // 呼吸: ゆっくりした収縮と拡張
          const breath = 1 + 0.14 * Math.sin(t * 0.0011) * b;
          for (const c of s.centers) {
            c.a += (Math.random() - 0.5) * 0.3;
            c.x = clamp(c.x + Math.cos(c.a) * 0.5 * b, W * 0.15, W * 0.85);
            c.y = clamp(c.y + Math.sin(c.a) * 0.5 * b, H * 0.15, H * 0.85);
          }
          for (const cl of s.cells) {
            cl.ang += cl.spd * b;
            const c = s.centers[cl.ci];
            const wob = Math.sin(t * 0.0009 + cl.ang * 3) * 7 * DPR;
            const x = c.x + Math.cos(cl.ang) * (cl.rad * breath + wob);
            const y = c.y + Math.sin(cl.ang) * (cl.rad * breath + wob);
            ctx.beginPath();
            ctx.arc(x, y, cl.r, 0, Math.PI * 2);
            ctx.fillStyle = cl.acc ? ACC : "rgba(236, 231, 221, 0.55)";
            ctx.fill();
            // エクソソーム放出: 細胞から小胞が漂い出る
            if (Math.random() < 0.004 * b && s.exos.length < 110) {
              const ea = Math.random() * Math.PI * 2;
              s.exos.push({
                x, y,
                vx: Math.cos(ea) * 0.5 * DPR,
                vy: Math.sin(ea) * 0.5 * DPR,
                life: 1,
              });
            }
          }
          for (let i = s.exos.length - 1; i >= 0; i--) {
            const e = s.exos[i];
            e.x += e.vx * b; e.y += e.vy * b;
            e.life -= 0.006 * b;
            if (e.life <= 0) { s.exos.splice(i, 1); continue; }
            ctx.beginPath();
            ctx.arc(e.x, e.y, 0.9 * DPR, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(236, 231, 221, ${(0.4 * e.life).toFixed(3)})`;
            ctx.fill();
          }
        } else if (type === "life") {
          const s = g.state;
          const every = b > 1.6 ? 2 : 5;
          if (g.frame % every === 0) {
            const { cols, rows, grid, next } = s;
            let pop = 0;
            for (let y = 0; y < rows; y++) {
              for (let x = 0; x < cols; x++) {
                let nb = 0;
                for (let dy = -1; dy <= 1; dy++) {
                  for (let dx = -1; dx <= 1; dx++) {
                    if (!dx && !dy) continue;
                    const xx = (x + dx + cols) % cols;
                    const yy = (y + dy + rows) % rows;
                    nb += grid[yy * cols + xx] ? 1 : 0;
                  }
                }
                const alive = grid[y * cols + x];
                const willLive = alive ? (nb === 2 || nb === 3) : nb === 3;
                next[y * cols + x] = willLive ? (alive ? 1 : 2) : 0; // 2 = 誕生
                if (willLive) pop++;
              }
            }
            s.grid.set(next);
            if (pop < cols * rows * 0.03 || g.frame % 900 === 0) {
              for (let i = 0; i < s.grid.length; i++) {
                if (Math.random() < 0.1) s.grid[i] = 1;
              }
            }
          }
          ctx.fillStyle = "rgba(11, 11, 11, 0.32)";
          ctx.fillRect(0, 0, W, H);
          const { cell, cols, rows, grid } = s;
          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
              const v = grid[y * cols + x];
              if (!v) continue;
              ctx.fillStyle = v === 2 ? ACC : "rgba(236, 231, 221, 0.75)";
              ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
            }
          }
        }
      };

      return {
        setup() { size(); initState(); },
        step,
        setBoost(v) { g.target = v; },
      };
    };

    const gens = [];
    works.forEach((work) => {
      const canvas = work.querySelector("canvas");
      const gen = makeGen(work.dataset.gen, canvas);
      gen.el = work;
      gen.active = false;
      gens.push(gen);
      work.addEventListener("pointerenter", () => gen.setBoost(2.4));
      work.addEventListener("pointerleave", () => gen.setBoost(1));
    });

    const setupAll = () => gens.forEach((gn) => gn.setup());
    setupAll();

    // 静止画モード: 内部的に十分な回数ステップして1枚に固める
    const bake = () =>
      gens.forEach((gn) => {
        for (let i = 0; i < 200; i++) gn.step(i * 16.7);
      });

    // 幅が変わった時だけ再構築（高さのみの変化=iOSツールバーでトレイルを消さない）
    const onWidthResize = (fn) => {
      let rt, lastW = innerWidth;
      addEventListener("resize", () => {
        clearTimeout(rt);
        rt = setTimeout(() => {
          if (innerWidth === lastW) return;
          lastW = innerWidth;
          fn();
        }, 300);
      });
    };

    if (FLAT) {
      bake();
      onWidthResize(() => { setupAll(); bake(); });
      return;
    }

    let running = false;
    const loop = (t) => {
      let any = false;
      for (const gn of gens) if (gn.active) { gn.step(t); any = true; }
      if (!any) { running = false; return; } // 全作品が画面外ならrAF停止(IOで再開)
      requestAnimationFrame(loop);
    };
    const start = () => {
      if (!running) { running = true; requestAnimationFrame(loop); }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          const gen = gens.find((gn) => gn.el === en.target);
          if (gen) gen.active = en.isIntersecting;
        });
        if (gens.some((gn) => gn.active)) start();
      },
      { threshold: 0.05 }
    );
    gens.forEach((gn) => io.observe(gn.el));

    onWidthResize(setupAll);
  })();

  /* ── スクロール駆動（進捗 / 横スクロール / チッカー歪み） ── */
  (() => {
    const bar = document.getElementById("progressBar");
    const worksSec = document.querySelector(".works");
    const sticky = document.querySelector(".works-sticky");
    const track = document.getElementById("worksTrack");
    const tickers = document.querySelectorAll(".ticker");

    if (FLAT) return; // flat は CSS で縦積み・進捗も不要（撮影用）

    // 基準は常に sticky 要素の実高（=CSS 100vh のpx値）。
    // innerHeight はiOSツールバー伸縮で変動し、混用すると横トラックが跳ぶ。
    let stickyH = sticky ? sticky.offsetHeight : innerHeight;

    // 横スクロール区間の高さ = 横に流す距離 + 1画面
    const sizeWorks = () => {
      if (!worksSec || !track || !sticky) return;
      stickyH = sticky.offsetHeight;
      const extra = Math.max(0, track.scrollWidth - innerWidth);
      worksSec.style.height = `${extra + stickyH}px`;
    };
    sizeWorks();
    addEventListener("load", sizeWorks);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeWorks);
    let rt, lastW = innerWidth;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (innerWidth === lastW) return; // 高さのみの変化では再レイアウトしない
        lastW = innerWidth;
        sizeWorks();
      }, 300);
    });

    let lastY = scrollY;
    let skew = 0;
    let prevBar = -1, prevTx = 1, prevSkew = null;
    const loop = () => {
      const docH = document.documentElement.scrollHeight - innerHeight;
      if (bar && docH > 0) {
        const bp = clamp(scrollY / docH, 0, 1);
        if (Math.abs(bp - prevBar) > 0.0005) {
          prevBar = bp;
          bar.style.transform = `scaleX(${bp})`;
        }
      }
      if (worksSec && track) {
        const top = worksSec.offsetTop;
        const range = worksSec.offsetHeight - stickyH;
        if (range > 0) {
          const p = clamp((scrollY - top) / range, 0, 1);
          const dist = Math.max(0, track.scrollWidth - innerWidth);
          const tx = Math.round(-p * dist);
          if (tx !== prevTx) {
            prevTx = tx;
            track.style.transform = `translate3d(${tx}px, 0, 0)`;
          }
        }
      }
      const vel = scrollY - lastY;
      lastY = scrollY;
      skew = lerp(skew, clamp(vel * 0.05, -5, 5), 0.12);
      if (Math.abs(skew) < 0.02) skew = 0; // 収束したら書き込みを止める
      if (skew !== prevSkew) {
        prevSkew = skew;
        const s = `skewX(${skew.toFixed(3)}deg)`;
        tickers.forEach((tk) => { tk.style.transform = s; });
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  })();
})();
