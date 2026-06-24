"use client";

/* ============================================================
 * RoomOverlay.tsx — ドアクリック時のフルスクリーン部屋ビュー
 * 等角(iso)で床/壁/デスク/モニター/キャラを俯瞰。
 * キャラクリックで吹き出しが開閉。
 * ============================================================ */

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { AGENTS, type Agent, type TeamMember } from "./agentData";
import { AgentSprite } from "./AgentSprite";
import { useTick } from "./PixelSprite";

const TW = 68;
const TH = 34;
const ROOM_CX = 380;
const ROOM_CY = 130;

type Pt = [number, number];

function isoToScreen(x: number, y: number, h = 0): Pt {
  return [ROOM_CX + (x - y) * (TW / 2), ROOM_CY + (x + y) * (TH / 2) - h];
}

function fmtPts(pts: Pt[]) {
  return pts.map(([a, b]) => `${a},${b}`).join(" ");
}

interface IsoBoxProps {
  x: number;
  y: number;
  sx: number;
  sy: number;
  h: number;
  top: string;
  left: string;
  right: string;
  accent?: string;
}

function IsoBox({ x, y, sx, sy, h, top, left, right, accent }: IsoBoxProps) {
  const A = isoToScreen(x, y, 0);
  const B = isoToScreen(x + sx, y, 0);
  const C = isoToScreen(x + sx, y + sy, 0);
  const D = isoToScreen(x, y + sy, 0);
  const E = isoToScreen(x, y, h);
  const F = isoToScreen(x + sx, y, h);
  const G = isoToScreen(x + sx, y + sy, h);
  const H = isoToScreen(x, y + sy, h);
  return (
    <g>
      <polygon points={fmtPts([E, F, G, H])} fill={top} stroke="#0a0a14" strokeWidth="1" />
      <polygon points={fmtPts([E, F, B, A])} fill={left} stroke="#0a0a14" strokeWidth="1" />
      <polygon points={fmtPts([F, G, C, B])} fill={right} stroke="#0a0a14" strokeWidth="1" />
      {accent && <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={accent} strokeWidth="1.5" />}
    </g>
  );
}

function FloorTile({ x, y, fill, stroke }: { x: number; y: number; fill: string; stroke: string }) {
  const [ax, ay] = isoToScreen(x, y);
  const [bx, by] = isoToScreen(x + 1, y);
  const [cx, cy] = isoToScreen(x + 1, y + 1);
  const [dx, dy] = isoToScreen(x, y + 1);
  return <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy} ${dx},${dy}`} fill={fill} stroke={stroke} strokeWidth="0.5" />;
}

function IsoRoom({ agent, gridN = 6 }: { agent: Agent; gridN?: number }) {
  const pal = agent.palette;
  const wallA = pal.wall;
  const wallB = `color-mix(in oklch, ${wallA} 70%, #000)`;
  const floorA = `color-mix(in oklch, ${pal.accent} 8%, #14121f)`;
  const floorB = `color-mix(in oklch, ${pal.accent} 14%, #1a1727)`;

  const tiles: React.ReactElement[] = [];
  for (let y = 0; y < gridN; y++) {
    for (let x = 0; x < gridN; x++) {
      tiles.push(
        <FloorTile
          key={`t-${x}-${y}`}
          x={x}
          y={y}
          fill={(x + y) % 2 === 0 ? floorA : floorB}
          stroke="rgba(255,255,255,0.04)"
        />,
      );
    }
  }

  const wallH = 88;
  const wL_A = isoToScreen(0, 0, 0);
  const wL_B = isoToScreen(gridN, 0, 0);
  const wL_C = isoToScreen(gridN, 0, wallH);
  const wL_D = isoToScreen(0, 0, wallH);
  const wR_A = isoToScreen(0, 0, 0);
  const wR_B = isoToScreen(0, gridN, 0);
  const wR_C = isoToScreen(0, gridN, wallH);
  const wR_D = isoToScreen(0, 0, wallH);

  return (
    <g>
      <polygon points={fmtPts([wL_A, wL_B, wL_C, wL_D])} fill={wallA} stroke="#0a0a14" strokeWidth="1" />
      <g>
        <DeptPoster agent={agent} />
        <line
          x1={isoToScreen(0, 0, 36)[0]}
          y1={isoToScreen(0, 0, 36)[1]}
          x2={isoToScreen(gridN, 0, 36)[0]}
          y2={isoToScreen(gridN, 0, 36)[1]}
          stroke="rgba(255,255,255,0.08)"
        />
      </g>
      <polygon points={fmtPts([wR_A, wR_B, wR_C, wR_D])} fill={wallB} stroke="#0a0a14" strokeWidth="1" />
      <line
        x1={isoToScreen(0, 0, 36)[0]}
        y1={isoToScreen(0, 0, 36)[1]}
        x2={isoToScreen(0, gridN, 36)[0]}
        y2={isoToScreen(0, gridN, 36)[1]}
        stroke="rgba(255,255,255,0.08)"
      />
      <IsoWallDoor x={gridN - 1.6} agent={agent} />
      {tiles}
      <FloorSheen agent={agent} />
    </g>
  );
}

function DeptPoster({ agent }: { agent: Agent }) {
  const A = isoToScreen(3.5, 0, 64);
  const B = isoToScreen(4.6, 0, 64);
  const C = isoToScreen(4.6, 0, 18);
  const D = isoToScreen(3.5, 0, 18);
  return (
    <g>
      <polygon
        points={fmtPts([A, B, C, D])}
        fill={agent.palette.accent}
        opacity="0.18"
        stroke={agent.palette.accent}
        strokeWidth="0.6"
      />
      <text
        x={(A[0] + B[0]) / 2}
        y={(A[1] + C[1]) / 2}
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        letterSpacing="0.5"
        fill={agent.palette.accent}
        opacity="0.7"
      >
        {agent.deptEn}
      </text>
    </g>
  );
}

function IsoWallDoor({ x, agent }: { x: number; agent: Agent }) {
  const A = isoToScreen(x, 0, 0);
  const B = isoToScreen(x + 0.7, 0, 0);
  const C = isoToScreen(x + 0.7, 0, 56);
  const D = isoToScreen(x, 0, 56);
  return (
    <g>
      <polygon points={fmtPts([A, B, C, D])} fill="#06060f" stroke={agent.palette.accent} strokeWidth="0.8" opacity="0.7" />
      <circle cx={B[0] - 2} cy={(B[1] + C[1]) / 2} r="1" fill={agent.palette.accent} />
    </g>
  );
}

function FloorSheen({ agent }: { agent: Agent }) {
  const center = isoToScreen(3, 3, 0);
  return <ellipse cx={center[0]} cy={center[1] + 6} rx="84" ry="22" fill={agent.palette.accent} opacity="0.10" />;
}

/* ----- Furniture ----- */

function Desk({ x, y, agent }: { x: number; y: number; agent: Agent }) {
  const accent = agent.palette.accent;
  return (
    <g>
      <IsoBox x={x} y={y} sx={2.4} sy={1.3} h={22} top="#262030" left="#15121f" right="#1d1928" accent={accent} />
      <IsoBox x={x} y={y} sx={2.4} sy={0.06} h={18} top={accent} left={accent} right={accent} />
    </g>
  );
}

function Monitor({ x, y, agent, onScreen }: { x: number; y: number; agent: Agent; onScreen: ReactNode }) {
  return (
    <g>
      <IsoBox x={x + 0.7} y={y + 0.4} sx={0.35} sy={0.25} h={28} top="#0a0a14" left="#06060f" right="#0c0c18" />
      <IsoBox x={x + 0.5} y={y + 0.3} sx={0.75} sy={0.5} h={24} top="#0a0a14" left="#06060f" right="#0c0c18" />
      <ScreenPanel x={x} y={y} h={28} agent={agent}>
        {onScreen}
      </ScreenPanel>
    </g>
  );
}

function ScreenPanel({ x, y, h, agent, children }: { x: number; y: number; h: number; agent: Agent; children: ReactNode }) {
  const A = isoToScreen(x, y + 0.3, h);
  const B = isoToScreen(x + 1.8, y + 0.3, h);
  const C = isoToScreen(x + 1.8, y + 0.3, h + 24);
  const D = isoToScreen(x, y + 0.3, h + 24);
  const bezel = 2.4;
  const A2: Pt = [A[0] + bezel, A[1] - bezel];
  const B2: Pt = [B[0] - bezel, B[1] - bezel];
  const C2: Pt = [B[0] - bezel, C[1] + bezel];
  const D2: Pt = [A[0] + bezel, D[1] + bezel];
  return (
    <g>
      <polygon points={fmtPts([A, B, C, D])} fill="#0a0a14" />
      <polygon points={fmtPts([A2, B2, C2, D2])} fill={agent.palette.monitor} />
      <polygon points={fmtPts([A2, B2, C2, D2])} fill={agent.palette.accent} opacity="0.18" />
      <foreignObject
        x={Math.min(A2[0], D2[0])}
        y={Math.min(A2[1], B2[1])}
        width={Math.abs(B2[0] - A2[0])}
        height={Math.abs(D2[1] - A2[1])}
      >
        <div

          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </foreignObject>
    </g>
  );
}

function Chair({ x, y, agent }: { x: number; y: number; agent: Agent }) {
  const accent = agent.palette.accent;
  return (
    <g>
      <IsoBox x={x} y={y} sx={0.8} sy={0.8} h={12} top={accent} left="#1a1325" right="#0e0a18" />
      <IsoBox x={x} y={y + 0.6} sx={0.8} sy={0.2} h={28} top={accent} left="#1a1325" right="#0e0a18" />
      <IsoBox
        x={x + 0.1}
        y={y + 0.1}
        sx={0.6}
        sy={0.6}
        h={13}
        top={`color-mix(in oklch, ${accent} 70%, #fff)`}
        left={accent}
        right={accent}
      />
    </g>
  );
}

function ExtraProps({ agent }: { agent: Agent }) {
  const c = agent.palette.accent;
  switch (agent.id) {
    case "sena":
      return (
        <g>
          <IsoBox x={1.1} y={1.7} sx={0.3} sy={0.3} h={26} top={c} left="#2a1218" right="#3a1a22" />
          <IsoBox x={1.7} y={1.6} sx={0.7} sy={0.04} h={22.5} top="#fef3f7" left="#9a6a85" right="#9a6a85" />
          <IsoBox x={4.5} y={0.5} sx={0.7} sy={0.7} h={6} top="#3a2a16" left="#2a1a0c" right="#2e1f12" />
          <IsoBox x={4.55} y={0.55} sx={0.6} sy={0.6} h={20} top="#10b981" left="#0a6c4b" right="#0a8c5e" />
        </g>
      );
    case "aiken":
      return (
        <g>
          <IsoBox x={1.0} y={1.7} sx={0.25} sy={0.25} h={28} top={c} left="#3a1a3a" right="#4a2a4a" />
          <IsoBox x={1.7} y={1.65} sx={0.3} sy={0.3} h={26} top="#fde68a" left="#a16207" right="#ca8a04" />
          <IsoBox x={4.5} y={0.4} sx={0.9} sy={0.5} h={36} top="#1a1330" left={c} right="#0e0820" accent={c} />
        </g>
      );
    case "piko":
      return (
        <g>
          <IsoBox x={1.0} y={1.7} sx={0.3} sy={0.3} h={26} top="#10b981" left="#064e3b" right="#0a6c4b" />
          <IsoBox x={1.8} y={1.65} sx={0.6} sy={0.04} h={22.5} top="#1a1f1c" left="#0a0a14" right="#0a0a14" />
          <IsoBox x={4.5} y={0.5} sx={0.6} sy={0.6} h={16} top={c} left="#0a3826" right="#0d4730" />
          <IsoBox x={4.55} y={0.55} sx={0.5} sy={0.5} h={14} top="#fde68a" left="#a16207" right="#ca8a04" />
        </g>
      );
    case "manabu":
      return (
        <g>
          <IsoBox x={1.0} y={1.7} sx={0.4} sy={0.3} h={26} top="#7c2d12" left="#3a1408" right="#5a2010" />
          <IsoBox x={1.0} y={1.7} sx={0.4} sy={0.3} h={30} top={c} left="#7c5215" right="#a16708" />
          <IsoBox x={1.0} y={1.7} sx={0.4} sy={0.3} h={34} top="#10b981" left="#0a6c4b" right="#0a8c5e" />
          <IsoBox x={4.4} y={0.4} sx={1.4} sy={0.15} h={36} top="#fefbe7" left="#3a3320" right="#5a5232" accent={c} />
        </g>
      );
    case "mira":
      return (
        <g>
          <IsoBox x={1.0} y={1.65} sx={0.25} sy={0.4} h={24} top={c} left="#062a35" right="#0a3a4a" />
          <IsoBox x={1.8} y={1.7} sx={0.3} sy={0.3} h={26} top="#7c2d12" left="#3a1408" right="#5a2010" />
          <IsoBox x={4.5} y={0.5} sx={0.7} sy={0.7} h={6} top="#3a2a16" left="#2a1a0c" right="#2e1f12" />
          <IsoBox x={4.55} y={0.55} sx={0.5} sy={0.5} h={22} top={c} left="#0a4858" right="#0a5868" />
        </g>
      );
    default:
      return null;
  }
}

/* ----- Monitor content per activity ----- */

function MonitorContent({ agent, member }: { agent: Agent; member: TeamMember }) {
  const t = useTick(280);
  const activity = member?.activity || agent.activity;
  switch (activity) {
    case "typing":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 2,
            padding: 4,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 6,
            lineHeight: 1.1,
            color: agent.palette.accent,
          }}
        >
          {["function deploy() {", "  await ship();", "  ✓ tests · 142", "  ✓ build · 12.3s", `${t % 2 === 0 ? "  ▌" : "   "} pr open ↑`].map((l, i) => (
            <div key={i} style={{ opacity: 0.85 + (i % 2) * 0.1 }}>
              {l}
            </div>
          ))}
        </div>
      );
    case "meeting":
      return (
        <div style={{ padding: 4, fontFamily: "JetBrains Mono", fontSize: 6, lineHeight: 1.3 }}>
          <div style={{ color: agent.palette.accent }}>09:30 朝会</div>
          <div style={{ color: "#fff", opacity: 0.7 }}>10:00 開発レビュー</div>
          <div style={{ color: "#fff", opacity: 0.7 }}>11:30 取材対応</div>
          <div style={{ color: agent.palette.accent }}>14:00 取締役会 {t % 2 === 0 ? "●" : "○"}</div>
          <div style={{ color: "#fff", opacity: 0.7 }}>16:00 1on1</div>
        </div>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 80 60" width="100%" height="100%" shapeRendering="crispEdges">
          <text x="3" y="9" fill={agent.palette.accent} fontSize="6" fontFamily="JetBrains Mono">
            UPTIME 99.98%
          </text>
          <line x1="3" y1="55" x2="77" y2="55" stroke={agent.palette.accent} opacity="0.4" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const v = 12 + Math.round((Math.sin(t + i) + 1) * 16);
            return <rect key={i} x={6 + i * 8} y={55 - v} width="4" height={v} fill={agent.palette.accent} opacity={0.6 + i / 14} />;
          })}
        </svg>
      );
    case "lecture":
      return (
        <div style={{ padding: 4, fontFamily: "Noto Sans JP", fontSize: 6, lineHeight: 1.4, color: "#fff" }}>
          <div style={{ color: agent.palette.accent, fontWeight: 700 }}>新人AI研修 v3</div>
          <div>1. プロンプト基礎</div>
          <div>2. 社内用語</div>
          <div>3. PRレビュー作法</div>
          <div style={{ color: agent.palette.accent }}>{t % 2 === 0 ? "4. 雑談" : "4. 雑談 ←"}</div>
        </div>
      );
    case "phone":
      return (
        <div style={{ padding: 4, fontFamily: "JetBrains Mono", fontSize: 6, lineHeight: 1.3, color: "#fff" }}>
          <div style={{ color: agent.palette.accent }}>SNS Live ●</div>
          <div>likes ↑ 1.2k</div>
          <div>reply ↑ 38</div>
          <div>imp.&nbsp;&nbsp; ↑ 24k</div>
          <div style={{ color: agent.palette.accent }}>{t % 2 === 0 ? "送信中…" : "送信中▌"}</div>
        </div>
      );
    default:
      return null;
  }
}

function IsoCharacter({ agent, memberId, onClick, ariaLabel }: { agent: Agent; memberId: string; onClick: () => void; ariaLabel: string }) {
  const [sx, sy] = isoToScreen(3.4, 3.6, 0);
  const W = 110;
  const H = 150;
  return (
    <g>
      <ellipse cx={sx} cy={sy + 4} rx="22" ry="6" fill="#000" opacity="0.55" />
      <ellipse cx={sx} cy={sy + 2} rx="30" ry="8" fill={agent.palette.accent} opacity="0.18" />
      <foreignObject x={sx - W / 2} y={sy - H + 30} width={W} height={H}>
        <div

          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={onClick}
          role="button"
          aria-label={ariaLabel}
        >
          <AgentSprite agentId={memberId} scale={5.6} fps={2.4} mode="idle-blink" />
        </div>
      </foreignObject>
    </g>
  );
}

function SpeechBubble({
  member,
  accent,
  onClose,
}: {
  member: TeamMember;
  accent: string;
  onClose: () => void;
}) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={bubbleRef} className="bubble" role="dialog" aria-label={`${member.name}の自己紹介`}>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: 4,
        }}
      >
        {member.name} <span style={{ color: "#0a0a14" }}>·</span> {member.role}
      </div>
      <div>{member.bio}</div>
      <button type="button" className="bubble__close" onClick={onClose} aria-label="吹き出しを閉じる">
        ×
      </button>
      <span className="bubble__tail" />
    </div>
  );
}

interface RoomOverlayProps {
  agentId: string;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}

function Stat({ k, v, accent }: { k: string; v: string; accent?: string }) {
  return (
    <div className="room-overlay__stat">
      <p className="room-overlay__stat-k">{k}</p>
      <p className="room-overlay__stat-v" style={{ color: accent || undefined }}>
        {v}
      </p>
    </div>
  );
}

function lastPing(i: number) {
  return `00:0${i + 1}m ago`;
}

export function RoomOverlay({ agentId, onClose, onNavigate }: RoomOverlayProps) {
  const agent = AGENTS.find((a) => a.id === agentId);
  const idx = AGENTS.findIndex((a) => a.id === agentId);
  const team = agent?.team || [];
  const lead = team.find((m) => m.isLead) || team[0];
  const [activeId, setActiveId] = useState<string | undefined>(lead?.id);
  const [bubbleOpen, setBubbleOpen] = useState(true);

  useEffect(() => {
    setActiveId(lead?.id);
    setBubbleOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  if (!agent) return null;
  const active = team.find((m) => m.id === activeId) || lead;
  if (!active) return null;

  return (
    <div
      className="room-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{ ["--accent" as string]: agent.palette.accent } as CSSProperties}
    >
      <div className="room-overlay__inner" style={{ ["--accent" as string]: agent.palette.accent } as CSSProperties}>
        <div className="room-overlay__top">
          <div className="room-overlay__crumb">
            <span className="step">
              <span style={{ color: "var(--c-accent)" }}>◤</span> 廊下
            </span>
            <span className="arrow">→</span>
            <span className="step">
              ROOM <strong>{String(idx + 1).padStart(2, "0")}</strong> · <strong>{agent.dept}</strong> · {team.length}名
            </span>
          </div>
          <button type="button" className="room-overlay__back" onClick={onClose} aria-label="廊下に戻る">
            <span>←</span> 廊下に戻る
          </button>
        </div>

        <div className="room-overlay__scene">
          <svg viewBox="0 0 760 460" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
            <IsoRoom agent={agent} />
            <Desk x={0.6} y={1.4} agent={agent} />
            <Monitor x={0.8} y={1.5} agent={agent} onScreen={<MonitorContent agent={agent} member={active} />} />
            <Chair x={1.4} y={2.0} agent={agent} />
            <ExtraProps agent={agent} />
            <IsoCharacter
              agent={agent}
              memberId={active.id}
              onClick={() => setBubbleOpen((b) => !b)}
              ariaLabel={`${active.name}をクリックして自己紹介`}
            />
          </svg>

          <div className="room-overlay__bubblelayer">
            {bubbleOpen ? (
              <div className="room-overlay__bubblewrap">
                <SpeechBubble member={active} accent={agent.palette.accent} onClose={() => setBubbleOpen(false)} />
              </div>
            ) : (
              <button
                type="button"
                className="room-overlay__taphint"
                onClick={() => setBubbleOpen(true)}
                style={{ color: agent.palette.accent, borderColor: agent.palette.accent }}
              >
                ▸ タップして会話
              </button>
            )}
          </div>

          <div className="room-overlay__nav">
            <button type="button" onClick={() => onNavigate(-1)} aria-label="前の部屋">
              ←
            </button>
            <button type="button" onClick={() => onNavigate(1)} aria-label="次の部屋">
              →
            </button>
          </div>
        </div>

        <div className="room-overlay__panel">
          <p className="room-overlay__deptline">
            {agent.deptEn} · ROOM {String(idx + 1).padStart(2, "0")}
          </p>
          <h2 className="room-overlay__deptname">{agent.dept}</h2>
          <p className="room-overlay__role">
            <span style={{ color: agent.palette.accent, fontWeight: 700 }}>{active.name}</span>
            <span style={{ opacity: 0.55 }}> —— </span>
            {active.role}
            {active.isLead && (
              <span
                style={{
                  marginLeft: 8,
                  fontFamily: "JetBrains Mono",
                  fontSize: 9,
                  letterSpacing: "0.32em",
                  color: agent.palette.accent,
                }}
              >
                ★ LEAD
              </span>
            )}
          </p>
          <hr className="room-overlay__divider" />
          <div className="room-overlay__bio-quote">
            <p className="room-overlay__bio">{active.bio}</p>
          </div>

          <div className="room-overlay__stats">
            <Stat k="STATUS" v="ON DUTY" accent={agent.palette.accent} />
            <Stat k="MODEL" v={active.model || "—"} />
            <Stat k="UPTIME" v="99.94%" />
            <Stat k="LAST PING" v={lastPing(team.findIndex((m) => m.id === active.id))} />
          </div>
        </div>

        <div className="room-overlay__team" role="tablist" aria-label={`${agent.dept}のチーム`}>
          {team.map((m) => (
            <button
              key={m.id}
              type="button"
              className="room-overlay__team-card"
              role="tab"
              aria-selected={m.id === active.id}
              data-active={m.id === active.id ? "true" : undefined}
              style={
                {
                  ["--member-accent" as string]: agent.palette.accent,
                  ["--member-glow" as string]: agent.palette.glow,
                } as CSSProperties
              }
              onClick={() => {
                setActiveId(m.id);
                setBubbleOpen(true);
              }}
            >
              <div className="room-overlay__team-sprite">
                <AgentSprite agentId={m.id} scale={2.4} fps={1.8} mode={m.id === active.id ? "idle-blink" : "still"} />
              </div>
              <div className="room-overlay__team-meta">
                <p className="room-overlay__team-name">
                  {m.name}
                  {m.isLead && <span className="room-overlay__team-star">★</span>}
                </p>
                <p className="room-overlay__team-role">{m.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
