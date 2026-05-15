"use client";

/* ============================================================
 * Hero.tsx — 廊下ビュー + HUDオーバーレイ
 * ============================================================ */

import { useEffect, useState } from "react";
import { AGENTS } from "./agentData";
import { Hallway } from "./Hallway";

interface HeroProps {
  onDoorClick: (id: string) => void;
  tweaks?: { flicker?: boolean; scanlines?: boolean };
}

export function Hero({ onDoorClick, tweaks }: HeroProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [bootMsg, setBootMsg] = useState("ESTABLISHING UPLINK…");

  useEffect(() => {
    const seq: [number, string][] = [
      [200, "AUTH OK · session #af-2026"],
      [800, "AI TEAM ONLINE · 5/5"],
      [1800, "STATUS · NORMAL OPS"],
    ];
    const timers = seq.map(([ms, msg]) => setTimeout(() => setBootMsg(msg), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  const hovered = hoveredId ? AGENTS.find((a) => a.id === hoveredId) : null;

  return (
    <section className="hero" id="ai-team">
      <div className="hero__stage">
        <Hallway
          onDoorClick={onDoorClick}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          tweaks={tweaks}
        />

        <div className="hero__vignette" />
        <div className="hero__flicker" />
        <div className="hero__crt" />

        <div className="hero__hud">
          <div className="hero__top">
            <div className="hero__lede">
              <p className="hero__eyebrow">RONSHOAL // AI TEAM · /ai-team</p>
              <h1 className="hero__title">
                AI社員、
                <br />
                <span className="accent">稼働中。</span>
              </h1>
              <p className="hero__sub">
                ロンショールでは、25人のAIが5部署に分かれて会社を回しています。
                <br />
                気になる部屋のドアを覗いてください。
              </p>
            </div>
            <div className="hero__systembar">
              <div>
                <span className="dot" />
                {bootMsg}
              </div>
              <div>2026.05.15 · 09:42 JST</div>
              <div>HALLWAY · 03F · 25 AGENTS</div>
            </div>
          </div>

          <div className="hero__bottom">
            <p className="hero__hint">
              <span>▸</span>
              ドアをクリックして部屋へ
            </p>
            <div className="hero__bottom-meta">
              <div>SCROLL ▾ &nbsp; 仕組みを見る</div>
              {hovered && (
                <div style={{ color: hovered.palette.accent, letterSpacing: "0.24em" }}>
                  HOVER · {hovered.deptEn} / {hovered.name}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
