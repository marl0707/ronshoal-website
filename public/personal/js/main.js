/* ═══════════════════════════════════════════════════════════
   KAZUKI SEJIMA — Official  (site mockup v0.1)
   依存ゼロ vanilla JS。?flat / prefers-reduced-motion で全停止。
   中心モチーフ: 六面体（六つの側面）の二重ワイヤーフレーム
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
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ── リビール ─────────────────────────────── */
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
      .querySelectorAll(".reveal, .hero-tag, .profile-lead, .philo-line")
      .forEach((el) => io.observe(el));
  }

  /* ── 章ラベル（縦書き・一文字） ───────────── */
  (() => {
    const label = document.getElementById("sectionLabel");
    if (!label) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) label.textContent = en.target.dataset.label;
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    document.querySelectorAll("[data-label]").forEach((s) => io.observe(s));
  })();

  /* ── 六面体（二重キューブ・ワイヤーフレーム） ── */
  const cube = (() => {
    const canvas = document.getElementById("cubeCanvas");
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    const hero = canvas.closest(".hero");

    const V = [];
    for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) V.push([x, y, z]);
    const E = [];
    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 8; j++) {
        let diff = 0;
        for (let k = 0; k < 3; k++) if (V[i][k] !== V[j][k]) diff++;
        if (diff === 1) E.push([i, j]);
      }
    }

    const SUMI = { r: 28, g: 27, b: 26 };
    const col = { ...SUMI };
    let target = { ...SUMI };
    let rx = -0.42, ry = 0.62;
    let tiltX = 0, tiltY = 0, curTX = 0, curTY = 0;
    let speed = 1, curSpeed = 1;
    let visible = true, running = false;

    let dprC = DPR;
    const size = () => {
      dprC = Math.min(window.devicePixelRatio || 1, 2); // ディスプレイ移動にも追従
      const r = hero.getBoundingClientRect();
      canvas.width = Math.round(r.width * dprC);
      canvas.height = Math.round(r.height * dprC);
    };

    const project = (p, scale, d) => {
      const k = scale / (p[2] + d);
      return [canvas.width / 2 + p[0] * k, canvas.height / 2 + p[1] * k, k];
    };

    const rotate = (p, ax, ay) => {
      let [x, y, z] = p;
      let c = Math.cos(ay), s = Math.sin(ay);
      [x, z] = [x * c - z * s, x * s + z * c];
      c = Math.cos(ax); s = Math.sin(ax);
      [y, z] = [y * c - z * s, y * s + z * c];
      return [x, y, z];
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(canvas.width, canvas.height) * 0.34;
      const d = 3.4;
      const ax = rx + curTX, ay = ry + curTY;
      const layers = [
        { s: 1, a: 0.85, lw: 1.1, dot: 2.4, axo: 0, ayo: 0 },
        { s: 0.55, a: 0.4, lw: 0.7, dot: 0, axo: 0.9, ayo: -1.3 },
      ];
      for (const L of layers) {
        const pts = V.map((v) =>
          project(rotate([v[0] * L.s, v[1] * L.s, v[2] * L.s], ax * (L.axo ? -1 : 1) + L.axo, ay * (L.ayo ? -1 : 1) + L.ayo), scale, d)
        );
        ctx.strokeStyle = `rgba(${col.r | 0}, ${col.g | 0}, ${col.b | 0}, ${L.a})`;
        ctx.lineWidth = L.lw * dprC;
        for (const [i, j] of E) {
          ctx.beginPath();
          ctx.moveTo(pts[i][0], pts[i][1]);
          ctx.lineTo(pts[j][0], pts[j][1]);
          ctx.stroke();
        }
        if (L.dot) {
          ctx.fillStyle = `rgba(${col.r | 0}, ${col.g | 0}, ${col.b | 0}, 0.9)`;
          for (const p of pts) {
            ctx.beginPath();
            ctx.arc(p[0], p[1], L.dot * dprC, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    // フレームレート非依存（120Hz端末で2倍速にならないようdt正規化）
    let lastT = 0;
    const step = (t) => {
      if (!visible) { running = false; return; }
      const dt = lastT ? Math.min(t - lastT, 100) : 16.7;
      lastT = t;
      const f = dt / 16.7;
      curSpeed = lerp(curSpeed, speed, 1 - Math.pow(0.95, f));
      rx += 0.0016 * curSpeed * f;
      ry += 0.0023 * curSpeed * f;
      curTX = lerp(curTX, tiltX, 1 - Math.pow(0.96, f));
      curTY = lerp(curTY, tiltY, 1 - Math.pow(0.96, f));
      col.r = lerp(col.r, target.r, 1 - Math.pow(0.93, f));
      col.g = lerp(col.g, target.g, 1 - Math.pow(0.93, f));
      col.b = lerp(col.b, target.b, 1 - Math.pow(0.93, f));
      drawFrame();
      requestAnimationFrame(step);
    };
    const start = () => {
      if (!running) { running = true; lastT = 0; requestAnimationFrame(step); }
    };

    size();
    if (FLAT) {
      drawFrame();
    } else {
      hero.addEventListener("pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        tiltY = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
        tiltX = ((e.clientY - r.top) / r.height - 0.5) * 0.35;
      }, { passive: true });
      hero.addEventListener("pointerleave", () => { tiltX = tiltY = 0; });
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) start();
      }).observe(hero);
      start();
    }

    // 立方体は状態を持たないため常に再サイズしてよい（高さのみの変化でも歪み防止）
    let rt;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        size();
        if (FLAT) drawFrame();
      }, 200);
    });

    const hexToRgb = (hex) => {
      const n = parseInt(hex.slice(1), 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    };
    return {
      setColor(hex) { target = hex ? hexToRgb(hex) : { ...SUMI }; },
      setSpeed(v) { speed = v; },
    };
  })();

  /* ── FACETS: ホバーで面の色と透かし漢字が呼応 ── */
  (() => {
    const mark = document.getElementById("facetMark");
    const facets = document.querySelectorAll(".facet");
    if (!mark || !facets.length) return;
    const root = document.documentElement;
    const reset = () => {
      root.style.setProperty("--facet", "#1c1b1a");
      if (cube) { cube.setColor(null); cube.setSpeed(1); }
    };
    facets.forEach((f) => {
      const activate = () => {
        const c = f.dataset.color;
        root.style.setProperty("--facet", c);
        mark.textContent = f.dataset.kanji;
        if (cube) { cube.setColor(c); cube.setSpeed(2.4); }
      };
      f.addEventListener("pointerenter", activate);
      f.addEventListener("focusin", activate);
      f.addEventListener("pointerleave", reset);
      f.addEventListener("focusout", reset);
    });
  })();
})();
