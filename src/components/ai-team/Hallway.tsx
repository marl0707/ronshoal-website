"use client";

/* ============================================================
 * Hallway.tsx — 一点透視のピクセル風廊下
 * ============================================================ */

import { useEffect, useMemo, useState } from "react";
import { AGENTS, type Agent } from "./agentData";
import { AgentSprite } from "./AgentSprite";
import { ActivityProp } from "./ActivityProp";

const VIEW_W = 1280;
const VIEW_H = 720;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
const FOCAL = 300;
const FLOOR_Y = -3;
const CEIL_Y = 3;
const WALL_X = 4;
const NEAR_Z = 1.5;
const FAR_Z = 10;
const DOOR_DEPTH = 1.6;
const DOOR_TOP_Y = 1.5;
const SIGN_TOP_Y = 2.3;
const SIGN_BOT_Y = 1.7;

type Pt = [number, number];

function projectXY(x: number, y: number, z: number): Pt {
  return [CX + (FOCAL * x) / z, CY - (FOCAL * y) / z];
}

function fmtPoly(pts: Pt[]) {
  return pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}

interface DoorGeom {
  side: "left" | "right" | "end";
  door: Pt[];
  window: Pt[];
  sign: { tl: Pt; tr: Pt; bl: Pt; br: Pt };
  centerScreen: Pt;
}

function computeDoorGeom(agent: Agent): DoorGeom {
  if (agent.wall === "end") {
    const z = agent.z;
    const w = 1.0;
    const yBot = FLOOR_Y;
    const yTop = DOOR_TOP_Y;
    const yWinBot = -0.3;
    const yWinTop = DOOR_TOP_Y - 0.15;
    const bl = projectXY(-w, yBot, z);
    const br = projectXY(w, yBot, z);
    const tr = projectXY(w, yTop, z);
    const tl = projectXY(-w, yTop, z);
    const wbl = projectXY(-w * 0.78, yWinBot, z);
    const wbr = projectXY(w * 0.78, yWinBot, z);
    const wtr = projectXY(w * 0.78, yWinTop, z);
    const wtl = projectXY(-w * 0.78, yWinTop, z);
    return {
      side: "end",
      door: [bl, br, tr, tl],
      window: [wbl, wbr, wtr, wtl],
      sign: {
        tl: projectXY(-w, SIGN_TOP_Y, z),
        tr: projectXY(w, SIGN_TOP_Y, z),
        bl: projectXY(-w, SIGN_BOT_Y, z),
        br: projectXY(w, SIGN_BOT_Y, z),
      },
      centerScreen: projectXY(0, 0.1, z),
    };
  }
  const wallX = agent.wall === "left" ? -WALL_X : WALL_X;
  const z0 = agent.z;
  const z1 = agent.z + DOOR_DEPTH;
  const near = projectXY(wallX, FLOOR_Y, z0);
  const far = projectXY(wallX, FLOOR_Y, z1);
  const farT = projectXY(wallX, DOOR_TOP_Y, z1);
  const nearT = projectXY(wallX, DOOR_TOP_Y, z0);
  const winYBot = -0.3;
  const winYTop = DOOR_TOP_Y - 0.15;
  const wz0 = z0 + DOOR_DEPTH * 0.08;
  const wz1 = z1 - DOOR_DEPTH * 0.08;
  const wNearB = projectXY(wallX, winYBot, wz0);
  const wFarB = projectXY(wallX, winYBot, wz1);
  const wFarT = projectXY(wallX, winYTop, wz1);
  const wNearT = projectXY(wallX, winYTop, wz0);
  return {
    side: agent.wall,
    door: [near, far, farT, nearT],
    window: [wNearB, wFarB, wFarT, wNearT],
    sign: {
      tl: projectXY(wallX, SIGN_TOP_Y, z0),
      tr: projectXY(wallX, SIGN_TOP_Y, z1),
      bl: projectXY(wallX, SIGN_BOT_Y, z0),
      br: projectXY(wallX, SIGN_BOT_Y, z1),
    },
    centerScreen: projectXY(wallX, 0.1, (z0 + z1) / 2),
  };
}

function FlickerLight({
  poly,
  intensity = 1,
  enabled = true,
  seed = 1,
}: {
  poly: Pt[];
  intensity?: number;
  enabled?: boolean;
  seed?: number;
}) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      if (now - last > 90 + seed * 17) {
        setT(now);
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, seed]);
  const rand = (((t | 0) + seed * 137) % 1000) / 1000;
  const flick = !enabled ? 1 : rand > 0.96 ? 0.4 : rand > 0.93 ? 0.8 : 1;
  return (
    <polygon
      points={fmtPoly(poly)}
      fill="#fff7e0"
      opacity={0.85 * flick * intensity}
      style={{ transition: "opacity 80ms linear" }}
    />
  );
}

interface Tweaks {
  flicker?: boolean;
}

interface HallwayProps {
  onDoorClick: (id: string) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  tweaks?: Tweaks;
}

export function Hallway({ onDoorClick, hoveredId, setHoveredId, tweaks }: HallwayProps) {
  const flickerOn = tweaks?.flicker !== false;

  const doors = useMemo(() => AGENTS.map((a) => ({ agent: a, geom: computeDoorGeom(a) })), []);

  const floorLines: React.ReactElement[] = [];
  for (let z = 2; z <= FAR_Z; z += 0.5) {
    const [, y1] = projectXY(0, FLOOR_Y, z);
    const xL = CX + (FOCAL * -WALL_X) / z;
    const xR = CX + (FOCAL * WALL_X) / z;
    floorLines.push(
      <line
        key={`fh-${z}`}
        x1={xL}
        y1={y1}
        x2={xR}
        y2={y1}
        stroke={`rgba(168, 85, 247, ${Math.max(0.04, 0.18 - z * 0.012)})`}
        strokeWidth="1"
      />,
    );
  }
  for (let xw = -4; xw <= 4; xw++) {
    const [nx, ny] = projectXY(xw, FLOOR_Y, NEAR_Z);
    const [fx, fy] = projectXY(xw, FLOOR_Y, FAR_Z);
    floorLines.push(
      <line
        key={`fv-${xw}`}
        x1={nx}
        y1={ny}
        x2={fx}
        y2={fy}
        stroke={xw === -WALL_X || xw === WALL_X ? "rgba(168, 85, 247, 0.35)" : "rgba(168, 85, 247, 0.08)"}
        strokeWidth={xw === -WALL_X || xw === WALL_X ? 1.5 : 1}
      />,
    );
  }

  const lights = [2.2, 4.0, 5.8, 7.6].map((z, i) => {
    const tl = projectXY(-0.8, CEIL_Y - 0.05, z);
    const tr = projectXY(0.8, CEIL_Y - 0.05, z);
    const br = projectXY(0.8, CEIL_Y - 0.05, z + 0.4);
    const bl = projectXY(-0.8, CEIL_Y - 0.05, z + 0.4);
    return <FlickerLight key={i} poly={[tl, tr, br, bl]} seed={i + 1} enabled={flickerOn} />;
  });

  const endWall = (
    <g>
      <polygon
        points={fmtPoly([
          projectXY(-WALL_X, CEIL_Y, FAR_Z),
          projectXY(WALL_X, CEIL_Y, FAR_Z),
          projectXY(WALL_X, FLOOR_Y, FAR_Z),
          projectXY(-WALL_X, FLOOR_Y, FAR_Z),
        ])}
        fill="#0a0815"
      />
      <line
        x1={projectXY(-WALL_X, -1.5, FAR_Z)[0]}
        y1={projectXY(-WALL_X, -1.5, FAR_Z)[1]}
        x2={projectXY(WALL_X, -1.5, FAR_Z)[0]}
        y2={projectXY(WALL_X, -1.5, FAR_Z)[1]}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
    </g>
  );

  const floorPlane = (
    <polygon
      points={fmtPoly([
        projectXY(-WALL_X, FLOOR_Y, NEAR_Z),
        projectXY(WALL_X, FLOOR_Y, NEAR_Z),
        projectXY(WALL_X, FLOOR_Y, FAR_Z),
        projectXY(-WALL_X, FLOOR_Y, FAR_Z),
      ])}
      fill="url(#floorGrad)"
    />
  );
  const ceilingPlane = (
    <polygon
      points={fmtPoly([
        projectXY(-WALL_X, CEIL_Y, NEAR_Z),
        projectXY(WALL_X, CEIL_Y, NEAR_Z),
        projectXY(WALL_X, CEIL_Y, FAR_Z),
        projectXY(-WALL_X, CEIL_Y, FAR_Z),
      ])}
      fill="url(#ceilGrad)"
    />
  );
  const leftWallPlane = (
    <polygon
      points={fmtPoly([
        projectXY(-WALL_X, CEIL_Y, NEAR_Z),
        projectXY(-WALL_X, CEIL_Y, FAR_Z),
        projectXY(-WALL_X, FLOOR_Y, FAR_Z),
        projectXY(-WALL_X, FLOOR_Y, NEAR_Z),
      ])}
      fill="url(#leftWallGrad)"
    />
  );
  const rightWallPlane = (
    <polygon
      points={fmtPoly([
        projectXY(WALL_X, CEIL_Y, NEAR_Z),
        projectXY(WALL_X, CEIL_Y, FAR_Z),
        projectXY(WALL_X, FLOOR_Y, FAR_Z),
        projectXY(WALL_X, FLOOR_Y, NEAR_Z),
      ])}
      fill="url(#rightWallGrad)"
    />
  );

  return (
    <div className="hallway">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0a18" />
            <stop offset="60%" stopColor="#100822" />
            <stop offset="100%" stopColor="#1b0a3a" />
          </linearGradient>
          <linearGradient id="ceilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06060f" />
            <stop offset="100%" stopColor="#0a0815" />
          </linearGradient>
          <linearGradient id="leftWallGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0a0a18" />
            <stop offset="100%" stopColor="#080612" />
          </linearGradient>
          <linearGradient id="rightWallGrad" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#0a0a18" />
            <stop offset="100%" stopColor="#080612" />
          </linearGradient>
          <radialGradient id="vignetteEnd" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.10)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {ceilingPlane}
        {leftWallPlane}
        {rightWallPlane}
        {endWall}
        {floorPlane}

        <rect x="540" y="280" width="200" height="180" fill="url(#vignetteEnd)" />

        {floorLines}
        {lights}

        {doors.map(({ agent, geom }) => (
          <DoorOnWall
            key={agent.id}
            agent={agent}
            geom={geom}
            onClick={() => onDoorClick(agent.id)}
            onHover={() => setHoveredId(agent.id)}
            onLeave={() => setHoveredId(null)}
            isHover={hoveredId === agent.id}
          />
        ))}

        {doors.map(({ agent, geom }) => (
          <FloorReflection key={`ref-${agent.id}`} geom={geom} agent={agent} />
        ))}

        {doors.map(({ agent, geom }) => (
          <DoorSign
            key={`sign-${agent.id}`}
            agent={agent}
            geom={geom}
            isHover={hoveredId === agent.id}
            onClick={() => onDoorClick(agent.id)}
          />
        ))}
      </svg>
    </div>
  );
}

interface DoorOnWallProps {
  agent: Agent;
  geom: DoorGeom;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
  isHover: boolean;
}

function DoorOnWall({ agent, geom, onClick, onHover, onLeave, isHover }: DoorOnWallProps) {
  const { door, window: win } = geom;
  const accent = agent.palette.accent;
  const glow = agent.palette.glow;

  const xs = win.map((p) => p[0]);
  const ys = win.map((p) => p[1]);
  const fx = Math.min(...xs);
  const fy = Math.min(...ys);
  const fw = Math.max(...xs) - fx;
  const fh = Math.max(...ys) - fy;

  const spriteScale = Math.max(1.4, Math.min(3.4, (fh * 0.85) / 20));
  const clipId = `clip-${agent.id}`;

  return (
    <g
      className="door-trigger"
      style={{ ["--door-glow" as string]: glow } as React.CSSProperties}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="button"
      tabIndex={0}
      aria-label={`${agent.dept}を開く`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <defs>
        <clipPath id={clipId}>
          <polygon points={fmtPoly(win)} />
        </clipPath>
      </defs>

      <polygon
        className="door-frame"
        points={fmtPoly(door)}
        fill={isHover ? "#16162b" : "#0d0d1c"}
        stroke={accent}
        strokeWidth={isHover ? "2" : "1"}
        opacity={0.96}
      />
      <polygon
        points={fmtPoly(insetPolygon(door, 0.04))}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />

      <polygon points={fmtPoly(win)} fill={agent.palette.wall} />
      <polygon
        points={fmtPoly(win)}
        fill={glow}
        opacity={isHover ? 0.45 : 0.22}
        style={{ transition: "opacity 200ms ease" }}
      />

      <foreignObject x={fx} y={fy} width={fw} height={fh} clipPath={`url(#${clipId})`}>
        <div

          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 0,
            transform: `scale(${isHover ? 1.04 : 1.0})`,
            transformOrigin: "50% 100%",
            transition: "transform 240ms ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "6%",
              bottom: "6%",
              opacity: 0.85,
              transform: "scale(0.7)",
              transformOrigin: "right bottom",
            }}
          >
            <ActivityProp activity={agent.activity} palette={agent.palette} scale={Math.max(1, spriteScale * 0.55)} />
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <AgentSprite agentId={agent.id} scale={spriteScale} fps={1.6} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 35%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </foreignObject>

      <line
        x1={(win[0][0] + win[1][0]) / 2}
        y1={(win[0][1] + win[1][1]) / 2}
        x2={(win[2][0] + win[3][0]) / 2}
        y2={(win[2][1] + win[3][1]) / 2}
        stroke={accent}
        strokeWidth="0.8"
        opacity="0.7"
      />

      <polygon points={fmtPoly(win)} fill="none" stroke={accent} strokeWidth="1.2" opacity={isHover ? 1 : 0.7} />

      <circle
        cx={
          geom.side === "left"
            ? door[1][0] - 2
            : geom.side === "right"
              ? door[1][0] + 2
              : (door[0][0] + door[1][0]) / 2
        }
        cy={(door[0][1] + door[1][1]) / 2 - 16}
        r="2"
        fill={accent}
        opacity="0.9"
      />
    </g>
  );
}

function insetPolygon(pts: Pt[], k: number): Pt[] {
  const cx0 = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const cy0 = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  return pts.map(([x, y]) => [x + (cx0 - x) * k, y + (cy0 - y) * k] as Pt);
}

function FloorReflection({ geom, agent }: { geom: DoorGeom; agent: Agent }) {
  const { door } = geom;
  const bot1 = door[0];
  const bot2 = door[1];
  const refTop = bot1;
  const refTop2 = bot2;
  const refBot: Pt = [bot1[0], bot1[1] + 36];
  const refBot2: Pt = [bot2[0], bot2[1] + 36];
  const refId = `ref-grad-${agent.id}`;
  return (
    <g opacity="0.45">
      <defs>
        <linearGradient id={refId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={agent.palette.accent} stopOpacity="0.32" />
          <stop offset="100%" stopColor={agent.palette.accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fmtPoly([refTop, refTop2, refBot2, refBot])} fill={`url(#${refId})`} />
    </g>
  );
}

interface DoorSignProps {
  agent: Agent;
  geom: DoorGeom;
  isHover: boolean;
  onClick: () => void;
}

function DoorSign({ agent, geom, isHover, onClick }: DoorSignProps) {
  const { sign, door, side } = geom;
  const cx = (sign.tl[0] + sign.tr[0] + sign.bl[0] + sign.br[0]) / 4;
  const cy = (sign.tl[1] + sign.tr[1] + sign.bl[1] + sign.br[1]) / 4;
  const doorW = Math.abs(door[1][0] - door[0][0]);
  const scale = side === "end" ? 0.65 : Math.max(0.42, Math.min(1.05, doorW / 130));
  const skew = side === "left" ? "8deg" : side === "right" ? "-8deg" : "0deg";

  const FW = 220;
  const FH = 60;

  return (
    <foreignObject
      x={cx - FW / 2}
      y={cy - FH / 2}
      width={FW}
      height={FH}
      style={{ overflow: "visible", pointerEvents: "none" }}
    >
      <div

        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          style={{
            pointerEvents: "auto",
            cursor: "pointer",
            transform: `scale(${scale}) skewY(${skew})`,
            transformOrigin: "center",
            background: isHover ? "#161624" : "#0a0a14",
            border: `1px solid ${agent.palette.accent}`,
            boxShadow: isHover
              ? `0 0 14px ${agent.palette.glow}, inset 0 0 0 1px rgba(255,255,255,0.04)`
              : `inset 0 0 0 1px rgba(255,255,255,0.04)`,
            padding: "4px 10px 5px",
            fontFamily: "JetBrains Mono, monospace",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            transition: "all 200ms ease",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: agent.palette.accent,
              fontSize: 8,
              fontWeight: 700,
              letterSpacing: "0.34em",
              textShadow: isHover ? `0 0 6px ${agent.palette.glow}` : "none",
              lineHeight: 1.0,
            }}
          >
            {agent.deptEn}
          </div>
          <div
            style={{
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.04em",
              color: "#fff",
              lineHeight: 1.05,
            }}
          >
            {agent.dept}
          </div>
        </div>
      </div>
    </foreignObject>
  );
}
