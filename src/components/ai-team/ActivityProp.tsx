"use client";

/* ============================================================
 * ActivityProp.tsx — 各エージェントの「業務小物」
 * ============================================================ */

import { useMemo } from "react";
import { useTick } from "./PixelSprite";
import type { Activity, AgentPalette } from "./agentData";

const OUTLINE = "#0a0a14";

interface PropProps {
  scale?: number;
  palette: AgentPalette;
}

function PropTyping({ scale = 4, palette }: PropProps) {
  const t = useTick(180);
  const accent = palette.accent;
  const lit = useMemo(() => {
    const r = (n: number) => Math.floor(((t + 1) * 9301 + n * 49297) % 233280) / 233280;
    return [0, 1, 2, 3, 4, 5].map((n) => r(n) > 0.55);
  }, [t]);
  return (
    <svg width={16 * scale} height={10 * scale} viewBox="0 0 16 10" shapeRendering="crispEdges" className="pixel">
      <rect x="0" y="0" width="16" height="10" fill="#1a1325" />
      <rect x="1" y="3" width="14" height="6" fill="#2a1b3b" />
      <rect x="1" y="3" width="14" height="1" fill={accent} opacity="0.4" />
      {[0, 1].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => {
          const k = row * 6 + col;
          const on = lit[k];
          return (
            <rect key={k} x={2 + col * 2} y={4 + row * 2} width="1" height="1" fill={on ? accent : "#7d6fa8"} />
          );
        }),
      )}
      <rect x="0" y="9" width="16" height="1" fill={OUTLINE} />
    </svg>
  );
}

function PropMeeting({ scale = 4, palette }: PropProps) {
  const t = useTick(280);
  const accent = palette.accent;
  return (
    <svg width={14 * scale} height={11 * scale} viewBox="0 0 14 11" shapeRendering="crispEdges" className="pixel">
      <rect x="1" y="0" width="12" height="7" fill={OUTLINE} />
      <rect x="2" y="1" width="10" height="5" fill="#f0e4ee" />
      <rect x="3" y="2" width="6" height="1" fill={accent} />
      <rect x="3" y="3" width="8" height="1" fill="#c89684" opacity="0.5" />
      <rect x="3" y="4" width="5" height="1" fill={accent} opacity="0.7" />
      {t % 2 === 0 && <rect x="9" y="4" width="1" height="1" fill={OUTLINE} />}
      <rect x="0" y="7" width="14" height="1" fill={OUTLINE} />
      <rect x="0" y="8" width="14" height="2" fill="#d4d0db" />
      <rect x="0" y="10" width="14" height="1" fill={OUTLINE} />
    </svg>
  );
}

function PropMonitor({ scale = 4, palette }: PropProps) {
  const t = useTick(140);
  const accent = palette.accent;
  const bars = [0, 1, 2, 3, 4, 5, 6].map((i) => {
    const v = (Math.sin((t + i * 7) * 0.6) + 1) * 0.5;
    return Math.max(1, Math.round(v * 4));
  });
  return (
    <svg width={16 * scale} height={12 * scale} viewBox="0 0 16 12" shapeRendering="crispEdges" className="pixel">
      <rect x="0" y="0" width="16" height="9" fill={OUTLINE} />
      <rect x="1" y="1" width="14" height="7" fill="#031b12" />
      <rect x="2" y="6" width="12" height="1" fill={accent} opacity="0.35" />
      {bars.map((h, i) => (
        <rect key={i} x={2 + i * 2} y={7 - h} width="1" height={h} fill={accent} />
      ))}
      <rect x={2 + (t % 12)} y="2" width="1" height="1" fill="#fde68a" />
      <rect x="6" y="9" width="4" height="2" fill="#0a221b" />
      <rect x="3" y="11" width="10" height="1" fill={OUTLINE} />
    </svg>
  );
}

function PropLecture({ scale = 4, palette }: PropProps) {
  const t = useTick(700);
  const accent = palette.accent;
  const diag = t % 3;
  return (
    <svg width={16 * scale} height={11 * scale} viewBox="0 0 16 11" shapeRendering="crispEdges" className="pixel">
      <rect x="0" y="0" width="16" height="9" fill={OUTLINE} />
      <rect x="1" y="1" width="14" height="7" fill="#fefbe7" />
      {diag === 0 && (
        <g>
          <rect x="2" y="2" width="4" height="1" fill="#7c2d12" />
          <rect x="2" y="4" width="6" height="1" fill="#7c2d12" />
          <rect x="2" y="6" width="3" height="1" fill={accent} />
          <rect x="12" y="3" width="2" height="2" fill={accent} />
        </g>
      )}
      {diag === 1 && (
        <g>
          <rect x="2" y="2" width="2" height="5" fill={accent} />
          <rect x="6" y="2" width="2" height="3" fill="#10b981" />
          <rect x="10" y="2" width="2" height="4" fill="#a855f7" />
        </g>
      )}
      {diag === 2 && (
        <g>
          <rect x="2" y="4" width="3" height="2" fill={accent} />
          <rect x="6" y="4" width="1" height="2" fill="#7c2d12" />
          <rect x="7" y="3" width="1" height="1" fill="#7c2d12" />
          <rect x="7" y="6" width="1" height="1" fill="#7c2d12" />
          <rect x="9" y="4" width="4" height="2" fill="#a855f7" />
        </g>
      )}
      <rect x="0" y="9" width="16" height="1" fill="#a16207" />
      <rect x="3" y="10" width="2" height="1" fill={accent} />
      <rect x="9" y="10" width="2" height="1" fill="#7c2d12" />
    </svg>
  );
}

function PropPhone({ scale = 4, palette }: PropProps) {
  const t = useTick(320);
  const accent = palette.accent;
  const wave = t % 3;
  return (
    <svg width={14 * scale} height={11 * scale} viewBox="0 0 14 11" shapeRendering="crispEdges" className="pixel">
      <rect x="3" y="0" width="6" height="11" fill={OUTLINE} />
      <rect x="4" y="1" width="4" height="8" fill="#072a35" />
      <rect x="4" y="2" width="4" height="1" fill={accent} opacity="0.8" />
      <rect x="5" y="4" width="1" height="1" fill={accent} />
      <rect x="6" y="5" width="1" height="1" fill={accent} opacity="0.7" />
      <rect x="5" y="6" width="2" height="1" fill={accent} opacity="0.5" />
      <rect x="5" y="9" width="2" height="1" fill={accent} />
      {wave >= 0 && <rect x="10" y="4" width="1" height="3" fill={accent} />}
      {wave >= 1 && <rect x="11" y="3" width="1" height="5" fill={accent} opacity="0.7" />}
      {wave >= 2 && <rect x="12" y="2" width="1" height="7" fill={accent} opacity="0.5" />}
    </svg>
  );
}

interface ActivityPropProps {
  activity: Activity;
  palette: AgentPalette;
  scale?: number;
}

export function ActivityProp({ activity, palette, scale = 4 }: ActivityPropProps) {
  switch (activity) {
    case "typing":
      return <PropTyping scale={scale} palette={palette} />;
    case "meeting":
      return <PropMeeting scale={scale} palette={palette} />;
    case "monitor":
      return <PropMonitor scale={scale} palette={palette} />;
    case "lecture":
      return <PropLecture scale={scale} palette={palette} />;
    case "phone":
      return <PropPhone scale={scale} palette={palette} />;
    default:
      return null;
  }
}
