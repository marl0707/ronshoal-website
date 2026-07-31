"use client";

/* ============================================================
 * OfficePreview.tsx — トップページ「最新のお知らせ」用の
 * コンパクトなピクセル絵オフィスアニメ。
 * 5体のAI社員が机に座って働いている俯瞰ビュー。
 * クリック動作はカードラッパー側で処理。
 * ============================================================ */

import { useEffect, useState } from "react";
import { AGENTS } from "./agentData";
import { AgentSprite } from "./AgentSprite";

/* iso projection (RoomOverlay と同じ式・スケールだけ小さく) */
const TW = 44;
const TH = 22;
const ORIGIN_X = 600;
const ORIGIN_Y = 120;

type Pt = [number, number];

function iso(x: number, y: number, h = 0): Pt {
  return [ORIGIN_X + (x - y) * (TW / 2), ORIGIN_Y + (x + y) * (TH / 2) - h];
}

function fmt(pts: Pt[]) {
  return pts.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");
}

interface BoxProps {
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

function IsoBox({ x, y, sx, sy, h, top, left, right, accent }: BoxProps) {
  const A = iso(x, y, 0);
  const B = iso(x + sx, y, 0);
  const C = iso(x + sx, y + sy, 0);
  const D = iso(x, y + sy, 0);
  const E = iso(x, y, h);
  const F = iso(x + sx, y, h);
  const G = iso(x + sx, y + sy, h);
  const H = iso(x, y + sy, h);
  return (
    <g>
      <polygon points={fmt([E, F, G, H])} fill={top} stroke="#0a0a14" strokeWidth="1" />
      <polygon points={fmt([E, F, B, A])} fill={left} stroke="#0a0a14" strokeWidth="1" />
      <polygon points={fmt([F, G, C, B])} fill={right} stroke="#0a0a14" strokeWidth="1" />
      {accent && <line x1={E[0]} y1={E[1]} x2={F[0]} y2={F[1]} stroke={accent} strokeWidth="1.4" />}
    </g>
  );
}

function FloorTile({ x, y, fill }: { x: number; y: number; fill: string }) {
  const [ax, ay] = iso(x, y);
  const [bx, by] = iso(x + 1, y);
  const [cx, cy] = iso(x + 1, y + 1);
  const [dx, dy] = iso(x, y + 1);
  return (
    <polygon
      points={`${ax},${ay} ${bx},${by} ${cx},${cy} ${dx},${dy}`}
      fill={fill}
      stroke="rgba(255,255,255,0.04)"
      strokeWidth="0.4"
    />
  );
}

/* デスク + キャラ + モニター ワンセット */
interface DeskUnitProps {
  /** デスク左上 (iso 座標) */
  x: number;
  y: number;
  agentId: string;
  accent: string;
  monitor: string;
}

function DeskUnit({ x, y, agentId, accent, monitor }: DeskUnitProps) {
  /* デスク (2x1, h=18) */
  const deskH = 18;
  /* モニタ — デスク左奥に立てる */
  const [mAx, mAy] = iso(x, y, deskH);
  const [mBx, mBy] = iso(x + 1.4, y, deskH);
  const [mCx, mCy] = iso(x + 1.4, y, deskH + 18);
  const [mDx, mDy] = iso(x, y, deskH + 18);
  /* キャラ — デスクの手前 (y+1.1, x+0.2) に立たせる */
  const [cx, cy] = iso(x + 0.2, y + 1.1, 0);
  const charW = 42;
  const charH = 56;

  return (
    <g>
      {/* デスク本体 */}
      <IsoBox
        x={x}
        y={y}
        sx={1.8}
        sy={0.9}
        h={deskH}
        top="#222032"
        left="#13111f"
        right="#1a1828"
        accent={accent}
      />
      {/* モニター */}
      <polygon points={fmt([[mAx, mAy], [mBx, mBy], [mCx, mCy], [mDx, mDy]])} fill="#0a0a14" stroke="#000" strokeWidth="0.6" />
      <polygon
        points={fmt([
          [mAx + 2, mAy - 1],
          [mBx - 2, mBy - 1],
          [mCx - 2, mCy + 1],
          [mDx + 2, mDy + 1],
        ])}
        fill={monitor}
      />
      <polygon
        points={fmt([
          [mAx + 2, mAy - 1],
          [mBx - 2, mBy - 1],
          [mCx - 2, mCy + 1],
          [mDx + 2, mDy + 1],
        ])}
        fill={accent}
        opacity="0.18"
      />
      {/* 床のグロー */}
      <ellipse cx={cx + charW / 2} cy={cy + 3} rx="22" ry="5" fill={accent} opacity="0.15" />
      <ellipse cx={cx + charW / 2} cy={cy + 4} rx="14" ry="3.5" fill="#000" opacity="0.5" />
      {/* キャラ */}
      <foreignObject x={cx} y={cy - charH + 10} width={charW} height={charH}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <AgentSprite agentId={agentId} scale={2.2} fps={2.4} mode="idle-blink" />
        </div>
      </foreignObject>
    </g>
  );
}

interface OfficePreviewProps {
  className?: string;
}

export function OfficePreview({ className }: OfficePreviewProps) {
  /* 床稼働インジケータ "● ON DUTY" の脈動用 tick */
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse((x) => x + 1), 700);
    return () => clearInterval(id);
  }, []);

  /* 5体のキャラを 2列×3 / 3列×2 のグリッド風に配置
   * (デスク x,y は iso 単位、原点は奥) */
  const desks: Array<{ x: number; y: number; agentId: string }> = [
    { x: 0, y: 0, agentId: "manabu" },   // 後列左
    { x: 3, y: 0, agentId: "aiken" },    // 後列中
    { x: 6, y: 0, agentId: "piko" },     // 後列右
    { x: 1.5, y: 2.5, agentId: "sena" }, // 前列左
    { x: 4.5, y: 2.5, agentId: "mira" }, // 前列右
  ];

  /* 床タイル 9x5 */
  const tiles: React.ReactElement[] = [];
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 9; x++) {
      const fill = (x + y) % 2 === 0 ? "#13111f" : "#1a1828";
      tiles.push(<FloorTile key={`t-${x}-${y}`} x={x - 1} y={y - 0.5} fill={fill} />);
    }
  }

  return (
    <div
      className={[
        "relative w-full aspect-[16/7] rounded-2xl overflow-hidden",
        "bg-[#05050f] border border-white/10",
        "shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <svg viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="opSpot" cx="50%" cy="20%" r="65%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.25)" />
            <stop offset="55%" stopColor="rgba(6,182,212,0.10)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <linearGradient id="opBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#05050f" />
            <stop offset="100%" stopColor="#0a0a18" />
          </linearGradient>
        </defs>

        {/* 背景 */}
        <rect x="0" y="0" width="1200" height="460" fill="url(#opBg)" />
        <rect x="0" y="0" width="1200" height="460" fill="url(#opSpot)" />

        {/* 床 */}
        {tiles}

        {/* 後列デスクを先に描く (奥→手前で重なり順を確保) */}
        {desks
          .slice()
          .sort((a, b) => a.y - b.y || a.x - b.x)
          .map((d) => {
            const agent = AGENTS.find((a) => a.id === d.agentId);
            if (!agent) return null;
            return (
              <DeskUnit
                key={d.agentId}
                x={d.x}
                y={d.y}
                agentId={d.agentId}
                accent={agent.palette.accent}
                monitor={agent.palette.monitor}
              />
            );
          })}

        {/* CRT scanlines (薄め) */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="460"
          fill="url(#opScan)"
          opacity="0.4"
          style={{ mixBlendMode: "overlay" }}
        />
        <defs>
          <pattern id="opScan" x="0" y="0" width="2" height="3" patternUnits="userSpaceOnUse">
            <rect width="2" height="1" fill="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>
      </svg>

      {/* HUDオーバーレイ */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 md:p-6">
        <div className="flex items-center gap-2 self-start text-[10px] md:text-[11px] font-mono tracking-[0.3em] uppercase text-white/85 bg-black/45 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 transition-opacity duration-300"
            style={{ opacity: pulse % 2 === 0 ? 1 : 0.4 }}
          />
          AI TEAM · ON DUTY · 28 / 28
        </div>
        <div className="flex items-center gap-3 self-end text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">
          <span>5 DEPARTMENTS</span>
          <span>·</span>
          <span>24h / 365d</span>
        </div>
      </div>

      {/* CRT vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
