"use client";

/* ============================================================
 * RosterStrip.tsx — 廊下の下に置く 5人カード
 * ============================================================ */

import { AGENTS } from "./agentData";
import { AgentSprite } from "./AgentSprite";

interface RosterStripProps {
  onOpen: (id: string) => void;
}

export function RosterStrip({ onOpen }: RosterStripProps) {
  return (
    <section className="roster">
      <div className="roster__inner">
        <div className="roster__head">
          <div>
            <p className="roster__eyebrow">ROSTER · 5 × 5 = 25 AGENTS</p>
            <h2 className="roster__title">
              5部署、5名づつで計25体のAI。
              <br />
              人間ひとり × チーム規模で動く。
            </h2>
          </div>
          <p className="roster__desc">
            各部署のリーダーAIがチームをまとめ、それぞれに4名の専門スタッフAIがついています。
            カードをタップしてチーム5名と会う。
          </p>
        </div>

        <div className="roster__grid">
          {AGENTS.map((a, i) => (
            <button
              key={a.id}
              className="roster__card"
              style={
                {
                  ["--card-accent" as string]: a.palette.accent,
                  ["--card-glow" as string]: a.palette.glow,
                } as React.CSSProperties
              }
              onClick={() => onOpen(a.id)}
              aria-label={`${a.dept} · ${a.name}を開く`}
            >
              <div className="roster__card-sprite">
                <AgentSprite agentId={a.id} scale={5} fps={2.2} />
              </div>
              <p className="roster__card-id">
                ROOM {String(i + 1).padStart(2, "0")} · {a.deptEn}
              </p>
              <h3 className="roster__card-name">{a.name}</h3>
              <p className="roster__card-role">{a.role}</p>
              <p className="roster__card-team">+ {a.team.length - 1} 名のスタッフ</p>
              <div className="roster__card-footer">
                <span className="roster__card-status">ON DUTY</span>
                <span className="roster__card-open">OPEN →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
