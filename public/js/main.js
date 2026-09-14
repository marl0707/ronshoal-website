/* ═══════════════════════════════════════════════════════════
   RONSHOAL LLC — Renewal (site mockup v0.4)
   依存ゼロ vanilla JS。?flat / prefers-reduced-motion で全停止。
   ヒーロー = 物理プレイグラウンド:
   会社の情報チップ・ロゴ六角・カラーブロックが降ってきて見出しに積もる。
   掴んで投げられる／空白タップで衝撃波／モバイルは端末を傾けると転がる。
   シークレット: 青い六角ピースをソケットにはめると瀬島和樹オフィシャルへ。
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

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

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
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(".reveal, .philo-lead, .kp-title")
      .forEach((el) => io.observe(el));
  }

  /* ── AI社員システム 稼働日数（2026-05-16 始動 = 本番サイトのNEWSが根拠） ── */
  const DAYS = (() => {
    const start = new Date("2026-05-16T00:00:00+09:00");
    return Math.max(1, Math.floor((Date.now() - start.getTime()) / 86400000) + 1);
  })();

  /* ── 物理プレイグラウンド ─────────────────── */
  (() => {
    const wrap = document.getElementById("blocks");
    if (!wrap) return;
    const hero = wrap.closest(".hero");
    const socket = document.getElementById("hexSocket");
    // 遷移先は js/site-config.js の1箇所で管理する（公開時はそこだけ直す）
    const SECRET_URL = (window.SITE_LINKS && window.SITE_LINKS.OFFICIAL_SITE_URL) || "http://localhost:8905/";

    const G = 0.55;          // 重力
    const BOUNCE = 0.45;     // 床の反発
    const AIR = 0.995;       // 空気抵抗
    const MAX_BODIES = 40;
    let W = 0, H = 0;
    let gravX = 0;
    let gravMode = 1;        // 1=通常 / 負=無重力（ダブルタップ）
    let assembleUntil = 0;   // 「片付ける」の整列期限(タイムスタンプ)
    let obstacles = [];
    let hoop = null;         // {x, y, r}
    const bodies = [];
    let visible = true, running = false;
    let score = 0;
    const scoreEl = document.getElementById("score");
    const hoopEl = document.getElementById("hoop");

    const DEFS = [
      { shape: "sq", size: 66, color: "#1d4fd8" },
      { shape: "sq", size: 50, color: "#101a2e" },
      { shape: "sq", size: 58, color: "#0e9f6e" },
      { shape: "sq", size: 44, color: "#f0b429" },
      { shape: "sq", size: 54, color: "#4d7fff" },
      { shape: "sq", size: 40, color: "#b0566b" },
      { shape: "circle", size: 56, color: "#a9c2ff" },
      { shape: "circle", size: 34, color: "#101a2e" },
      { shape: "circle", size: 46, color: "#dcd7c9" },
      { shape: "logo", size: 54 },
      { shape: "logo", size: 42 },
      { shape: "logo", size: 62 },
      { shape: "logo", size: 50, secret: true },
      // 狭い画面では short を使う（横長ピルが縦積みの塔になるのを防ぐ）
      { shape: "pill", html: `<em>DAY</em>${DAYS}`, short: `<em>DAY</em>${DAYS}` },
      { shape: "pill", html: "<em>AI AGENTS</em>28", short: "<em>AI</em>28" },
      { shape: "pill", html: "<em>DEPTS</em>5", short: "<em>部署</em>5" },
      { shape: "pill", html: "<em>ALWAYS ON</em>24/365", short: "24/365" },
      { shape: "pill", html: "健診プラス", short: "健診プラス" },
      { shape: "pill", html: "システム開発", short: "システム開発" },
      { shape: "pill", html: "I LOVE PICKLEBALL", short: "PICKLEBALL" },
    ];

    const measure = () => {
      const hr = hero.getBoundingClientRect();
      W = hr.width; H = hr.height;
      // 狭幅ではロゴ/CTAが画面幅いっぱいで、棚にするとブロックが乗ってロゴを隠す
      // → モバイルは棚なし（床まで落ちて溜まる）
      obstacles = (W < 700 ? [] : ["heroLogo", "heroCtas"])
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          if (!r.width) return null;
          return {
            l: r.left - hr.left - 4, t: r.top - hr.top - 4,
            r: r.right - hr.left + 4, b: r.bottom - hr.top + 4,
          };
        })
        .filter(Boolean);
      // ゴールリングの当たり判定位置
      const ring = hoopEl && hoopEl.querySelector("i");
      if (ring) {
        const rr = ring.getBoundingClientRect();
        hoop = {
          x: rr.left - hr.left + rr.width / 2,
          y: rr.top - hr.top + rr.height / 2,
          r: rr.width / 2,
        };
      }
    };

    const addBody = (def, delay) => {
      if (bodies.length >= MAX_BODIES) return null;
      const el = document.createElement("div");
      el.className = `blk blk--${def.shape}${def.secret ? " blk--secret" : ""}`;
      if (def.shape === "pill") {
        el.innerHTML = (W < 700 && def.short) ? def.short : def.html;
      } else {
        el.style.width = `${def.size}px`;
        el.style.height = `${def.size}px`;
        if (def.color) el.style.background = def.color;
      }
      wrap.appendChild(el);
      const r = el.getBoundingClientRect();
      const w = r.width || def.size, h = r.height || def.size;
      // ピルは高さ基準の小さめ半径（幅基準だと巨大化して積み上がる）
      const rad =
        def.shape === "pill" ? h * 0.54 :
        def.shape === "sq" ? w * 0.56 : Math.max(w, h) * 0.5;
      const b = {
        el, def, w, h, r: rad,
        x: 60 + Math.random() * Math.max(120, W - 120),
        y: -80 - delay * 70 - Math.random() * 60,
        vx: (Math.random() - 0.5) * 2,
        vy: 0,
        rot: (Math.random() - 0.5) * 30,
        vr: (Math.random() - 0.5) * 2,
        held: false, locked: false, entered: false,
        slotX: 0, slotY: 0,
      };
      bodies.push(b);
      return b;
    };

    const build = () => { DEFS.forEach((def, i) => addBody(def, i)); };

    // ＋ブロック用のランダム素材
    const EXTRA_COLORS = ["#1d4fd8", "#4d7fff", "#101a2e", "#0e9f6e", "#f0b429", "#b0566b", "#a9c2ff", "#dcd7c9"];
    const randomDef = () => {
      const shape = Math.random() < 0.55 ? "sq" : Math.random() < 0.55 ? "circle" : "logo";
      return {
        shape,
        size: 34 + Math.random() * 38,
        color: shape === "logo" ? null : EXTRA_COLORS[(Math.random() * EXTRA_COLORS.length) | 0],
      };
    };

    // 回転を考慮した実寸の半値。衝突は円近似の r、画面内に収める境界はこちらを使う
    // （r で壁クランプすると横長ピルが端で切れて文字が欠ける）
    const halfExt = (b) => {
      const a = (b.rot * Math.PI) / 180;
      const c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a));
      return [(c * b.w + s * b.h) / 2, (s * b.w + c * b.h) / 2];
    };
    const clampInside = (b) => {
      const [hx, hy] = halfExt(b);
      if (hx * 2 >= W) b.x = W / 2;
      else b.x = clamp(b.x, hx, W - hx);
      const floor = H - 6;
      if (hy * 2 < floor) b.y = Math.min(b.y, floor - hy);
      if (b.entered) b.y = Math.max(b.y, hy);
    };

    const render = () => {
      for (const b of bodies) {
        b.el.style.transform =
          `translate(${(b.x - b.w / 2).toFixed(2)}px, ${(b.y - b.h / 2).toFixed(2)}px) rotate(${b.rot.toFixed(2)}deg)`;
      }
    };

    const nice = (x, y) => {
      const fl = document.createElement("div");
      fl.className = "blk blk--pill";
      fl.style.cssText = `pointer-events:none; border-color: var(--live); color: var(--live-text); transition: transform 0.9s ease, opacity 0.9s ease;`;
      fl.style.height = "34px";
      fl.textContent = "NICE! +1";
      fl.style.transform = `translate(${x}px, ${y}px)`;
      wrap.appendChild(fl);
      requestAnimationFrame(() => {
        fl.style.transform = `translate(${x}px, ${y - 70}px)`;
        fl.style.opacity = "0";
      });
      setTimeout(() => fl.remove(), 950);
    };

    const step = (f) => {
      const assembling = performance.now() < assembleUntil;
      for (const b of bodies) {
        if (b.held || b.locked) continue;
        const py0 = b.y;
        if (assembling) {
          // 「片付ける」: 整列スロットへ吸い込む
          b.vx = (b.vx + (b.slotX - b.x) * 0.02) * 0.82;
          b.vy = (b.vy + (b.slotY - b.y) * 0.02) * 0.82;
          b.rot *= 0.9; b.vr = 0;
          b.x += b.vx * f; b.y += b.vy * f;
          b.el.style.opacity = "1";
          continue;
        }
        b.vy += G * gravMode * f;
        b.vx += G * gravX * f;
        b.vx *= AIR; b.vy *= AIR;
        b.x += b.vx * f;
        b.y += b.vy * f;
        b.rot += b.vr * f;
        const [hx, hy] = halfExt(b);
        if (b.y > hy + 10) b.entered = true;
        // 壁・床・天井（実寸の半値で判定＝はみ出して切れない）
        if (hx * 2 < W) {
          if (b.x - hx < 0) { b.x = hx; b.vx = Math.abs(b.vx) * 0.5; b.vr *= -0.7; }
          if (b.x + hx > W) { b.x = W - hx; b.vx = -Math.abs(b.vx) * 0.5; b.vr *= -0.7; }
        } else { b.x = W / 2; b.vx = 0; }
        if (b.y + hy > H - 6) {
          b.y = H - 6 - hy;
          b.vy = -Math.abs(b.vy) * BOUNCE;
          if (Math.abs(b.vy) < 0.6) b.vy = 0;
          b.vx *= 0.92; b.vr *= 0.9;
        }
        if (b.entered && b.y - hy < 0) {
          b.y = hy;
          b.vy = Math.abs(b.vy) * 0.5;
        }
        if (b.y - hy < -600) { b.y = -600 + hy; b.vy = Math.abs(b.vy); }
        // ゴール判定: リングを上から通過
        if (hoop && !b.held && b.vy > 2.5 &&
            py0 < hoop.y && b.y >= hoop.y &&
            Math.abs(b.x - hoop.x) < hoop.r * 0.75) {
          score++;
          if (scoreEl) scoreEl.textContent = String(score);
          if (hoopEl) {
            hoopEl.classList.remove("hit");
            void hoopEl.offsetWidth;
            hoopEl.classList.add("hit");
          }
          nice(hoop.x - 40, hoop.y - 60);
        }
        // 見出し・CTAは物理的な棚（円vs矩形）
        for (const o of obstacles) {
          const cx = clamp(b.x, o.l, o.r);
          const cy = clamp(b.y, o.t, o.b);
          const dx = b.x - cx, dy = b.y - cy;
          const d2 = dx * dx + dy * dy;
          if (d2 < b.r * b.r) {
            const d = Math.sqrt(d2) || 0.001;
            const nx = dx / d, ny = dy / d;
            const push = b.r - d;
            b.x += nx * push; b.y += ny * push;
            const vn = b.vx * nx + b.vy * ny;
            if (vn < 0) {
              b.vx -= nx * vn * 1.45;
              b.vy -= ny * vn * 1.45;
              b.vr *= 0.85;
            }
          }
        }
      }
      // ブロック同士の衝突（等質量・円近似）— 整列中はすり抜けさせる
      if (assembling) return;
      for (let i = 0; i < bodies.length; i++) {
        const a = bodies[i];
        if (a.locked) continue;
        for (let j = i + 1; j < bodies.length; j++) {
          const c = bodies[j];
          if (c.locked) continue;
          const dx = c.x - a.x, dy = c.y - a.y;
          const min = a.r + c.r;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0 && d2 < min * min) {
            const d = Math.sqrt(d2);
            const nx = dx / d, ny = dy / d;
            const overlap = (min - d) / 2;
            if (!a.held) { a.x -= nx * overlap; a.y -= ny * overlap; }
            if (!c.held) { c.x += nx * overlap; c.y += ny * overlap; }
            const rvx = a.vx - c.vx, rvy = a.vy - c.vy;
            const vn = rvx * nx + rvy * ny;
            if (vn > 0) {
              const imp = vn * 0.52;
              if (!a.held) { a.vx -= nx * imp; a.vy -= ny * imp; a.vr += (Math.random() - 0.5) * 2; }
              if (!c.held) { c.vx += nx * imp; c.vy += ny * imp; c.vr += (Math.random() - 0.5) * 2; }
            }
          }
        }
      }
      // 分離処理で押し出された分を画面内へ戻す（壁クランプの後に動くため）
      for (const b of bodies) {
        if (b.held || b.locked) continue;
        clampInside(b);
      }
    };

    /* ── 掴む・投げる ── */
    let heldBody = null, hx = 0, hy = 0, lastPX = 0, lastPY = 0, pvx = 0, pvy = 0;
    const heroXY = (e) => {
      const r = hero.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };
    const tryLockSecret = (b) => {
      if (!b.def.secret || !socket) return false;
      const sr = socket.getBoundingClientRect();
      const hr = hero.getBoundingClientRect();
      const sx = sr.left - hr.left + sr.width / 2;
      const sy = sr.top - hr.top + sr.height / 2;
      if (Math.hypot(b.x - sx, b.y - sy) < 38) {
        b.locked = true; b.held = false;
        b.x = sx; b.y = sy; b.rot = 0; b.vx = b.vy = b.vr = 0;
        render();
        b.el.classList.add("locked");
        socket.classList.add("locked");
        setTimeout(() => { location.href = SECRET_URL; }, 650);
        return true;
      }
      return false;
    };

    if (!FLAT) {
      wrap.addEventListener("pointerdown", (e) => {
        const el = e.target.closest(".blk");
        if (!el) return;
        const b = bodies.find((bb) => bb.el === el);
        if (!b || b.locked) return;
        heldBody = b; b.held = true;
        el.classList.add("drag");
        try { el.setPointerCapture(e.pointerId); } catch (_) { /* 合成イベント等 */ }
        const [x, y] = heroXY(e);
        hx = x - b.x; hy = y - b.y;
        lastPX = x; lastPY = y; pvx = pvy = 0;
        e.preventDefault();
      });
      addEventListener("pointermove", (e) => {
        if (!heldBody) return;
        const [x, y] = heroXY(e);
        const [ex, ey] = halfExt(heldBody);
        heldBody.x = ex * 2 >= W ? W / 2 : clamp(x - hx, ex, W - ex);
        heldBody.y = Math.min(y - hy, H - 6 - ey);
        pvx = pvx * 0.5 + (x - lastPX) * 0.5;
        pvy = pvy * 0.5 + (y - lastPY) * 0.5;
        lastPX = x; lastPY = y;
      }, { passive: true });
      addEventListener("pointerup", () => {
        if (!heldBody) return;
        const b = heldBody;
        heldBody = null;
        b.held = false;
        b.el.classList.remove("drag");
        if (tryLockSecret(b)) return;
        b.vx = clamp(pvx * 1.1, -34, 34);
        b.vy = clamp(pvy * 1.1, -34, 34);
        b.vr = clamp(pvx, -8, 8);
      });

      // 空白タップ = 衝撃波 / ダブルタップ = 無重力4秒
      let lastTap = 0, gravTimer = 0;
      hero.addEventListener("pointerdown", (e) => {
        if (e.target.closest(".blk, a, button")) return;
        const now = performance.now();
        if (now - lastTap < 350) {
          lastTap = 0;
          gravMode = -0.35; // ふわっと浮く
          hero.classList.add("zerog");
          clearTimeout(gravTimer);
          gravTimer = setTimeout(() => {
            gravMode = 1;
            hero.classList.remove("zerog");
          }, 4000);
          for (const b of bodies) {
            if (b.locked || b.held) continue;
            b.vy -= 3 + Math.random() * 4;
            b.vr += (Math.random() - 0.5) * 6;
          }
          return;
        }
        lastTap = now;
        const [x, y] = heroXY(e);
        const ring = document.createElement("div");
        ring.className = "shock";
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
        hero.appendChild(ring);
        setTimeout(() => ring.remove(), 600);
        for (const b of bodies) {
          if (b.locked) continue;
          const dx = b.x - x, dy = b.y - y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < 260) {
            const k = (1 - d / 260) * 17;
            b.vx += (dx / d) * k;
            b.vy += (dy / d) * k - 3;
            b.vr += (Math.random() - 0.5) * 8;
          }
        }
        // iOSは傾きセンサーが要許可: 最初のタップで一度だけ求める
        askTilt();
      });

      // 「片付ける」: 整列グリッドへ吸い込み→2秒後にまた崩す
      const btnTidy = document.getElementById("btnTidy");
      if (btnTidy) btnTidy.addEventListener("click", () => {
        const free = bodies.filter((b) => !b.locked);
        const cols = W < 700 ? 4 : 7;
        const gap = W < 700 ? 74 : 96;
        const gridW = (cols - 1) * gap;
        const ox = clamp(W * 0.62 - gridW / 2, 30, Math.max(30, W - gridW - 30));
        const oy = Math.max(120, H * 0.2);
        free.forEach((b, i) => {
          b.slotX = ox + (i % cols) * gap;
          b.slotY = oy + Math.floor(i / cols) * gap;
        });
        assembleUntil = performance.now() + 2200;
        setTimeout(() => {
          for (const b of free) {
            b.vy -= Math.random() * 2;
            b.vx += (Math.random() - 0.5) * 3;
          }
        }, 2300);
      });

      // 「＋ブロック」: 空から追加投下（上限あり）
      const btnMore = document.getElementById("btnMore");
      if (btnMore) btnMore.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
          const b = addBody(randomDef(), i);
          if (!b) { btnMore.disabled = true; btnMore.textContent = "満員です"; break; }
          b.x = 40 + Math.random() * (W - 80);
          b.y = -40 - i * 60;
        }
      });

      // 端末を傾けるとブロックが転がる
      let tiltAsked = false;
      const askTilt = () => {
        if (tiltAsked) return;
        tiltAsked = true;
        if (typeof DeviceOrientationEvent !== "undefined" &&
            typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission().catch(() => {});
        }
      };
      addEventListener("deviceorientation", (e) => {
        if (e.gamma == null) return;
        gravX = clamp(e.gamma / 38, -1.2, 1.2);
      }, { passive: true });
    }

    /* ── ループ ── */
    let lastT = 0;
    const loop = (t) => {
      if (!visible) { running = false; return; }
      const dt = lastT ? Math.min(t - lastT, 100) : 16.7;
      lastT = t;
      const f = dt / 16.7;
      step(f);
      render();
      requestAnimationFrame(loop);
    };
    const start = () => {
      if (!running) { running = true; lastT = 0; requestAnimationFrame(loop); }
    };

    const init = () => {
      measure();
      build();
      if (FLAT) {
        for (let i = 0; i < 420; i++) step(1);
        render();
        return;
      }
      new IntersectionObserver((entries) => {
        visible = entries.some((en) => en.isIntersecting);
        if (visible) start();
      }).observe(hero);
      start();
    };
    // ロゴ画像とフォントの実寸が要る（障害物の矩形が変わるため）
    let done = false;
    const go = () => { if (!done) { done = true; init(); } };
    const waits = [];
    if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
    document.querySelectorAll(".hero-logo img").forEach((img) => {
      if (!img.complete) {
        waits.push(new Promise((r) => {
          img.addEventListener("load", r, { once: true });
          img.addEventListener("error", r, { once: true });
        }));
      }
    });
    if (waits.length) {
      Promise.all(waits).then(go).catch(go);
      setTimeout(go, 1800);
    } else {
      go();
    }

    let rt;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        const hr = hero.getBoundingClientRect();
        if (Math.round(hr.width) === Math.round(W) && Math.round(hr.height) === Math.round(H)) return;
        measure();
        for (const b of bodies) {
          if (b.locked) continue;
          clampInside(b);
        }
        if (FLAT) { for (let i = 0; i < 120; i++) step(1); render(); }
      }, 250);
    });
  })();
})();
