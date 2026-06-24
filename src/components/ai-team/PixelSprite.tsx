"use client";

/* ============================================================
 * PixelSprite.tsx — 「文字グリッド + パレット」方式の
 * ピクセル絵レンダラ。SVG <rect> をシェイプ毎に描画する。
 * ============================================================ */

import { useEffect, useState, CSSProperties } from "react";

export type PixelFrame = string[];
export type PixelPalette = Record<string, string>;

interface PixelSpriteProps {
  frame: PixelFrame;
  palette: PixelPalette;
  scale?: number;
  style?: CSSProperties;
  ariaLabel?: string;
}

export function PixelSprite({ frame, palette, scale = 4, style, ariaLabel }: PixelSpriteProps) {
  if (!frame || !palette) return null;
  const H = frame.length;
  const W = Math.max(...frame.map((r) => r.length));
  const runs: { x: number; y: number; w: number; c: string }[] = [];
  for (let y = 0; y < H; y++) {
    const row = frame[y];
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === "." || ch === " " || !palette[ch]) {
        x++;
        continue;
      }
      let w = 1;
      while (x + w < row.length && row[x + w] === ch) w++;
      runs.push({ x, y, w, c: palette[ch] });
      x += w;
    }
  }
  return (
    <svg
      width={W * scale}
      height={H * scale}
      viewBox={`0 0 ${W} ${H}`}
      shapeRendering="crispEdges"
      style={style}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      className="pixel"
    >
      {runs.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height="1" fill={r.c} />
      ))}
    </svg>
  );
}

export function useFrameIndex(count: number, fps = 3) {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    if (count <= 1) return;
    let raf = 0;
    let last = performance.now();
    let idx = 0;
    const tick = (t: number) => {
      if (t - last >= 1000 / fps) {
        idx = (idx + 1) % count;
        setI(idx);
        last = t;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [count, fps]);
  return i;
}

interface PixelSpriteCycleProps {
  frames: PixelFrame[];
  palette: PixelPalette;
  scale?: number;
  fps?: number;
  style?: CSSProperties;
  ariaLabel?: string;
}

export function PixelSpriteCycle({ frames, palette, scale, fps = 3, style, ariaLabel }: PixelSpriteCycleProps) {
  const i = useFrameIndex(frames.length, fps);
  const safeFrame = frames[i % frames.length] || frames[0];
  return (
    <PixelSprite
      frame={safeFrame}
      palette={palette}
      scale={scale}
      style={style}
      ariaLabel={ariaLabel}
    />
  );
}

/* Generic tick hook (used by ActivityProp / MonitorContent) */
export function useTick(intervalMs = 600) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return t;
}
