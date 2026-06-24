"use client";

/* ============================================================
 * AgentSprite.tsx — 25体のAI社員ピクセル肖像
 *
 * メイン5体 (sena, aiken, piko, manabu, mira) は専用デザイン。
 * 残り20体は4種の "髪型テンプレ" (short/tie/visor/ponytail) を
 * 部署×役割パレットで切り替えて識別性を担保。
 * ============================================================ */

import { CSSProperties } from "react";
import { PixelSpriteCycle, type PixelFrame, type PixelPalette } from "./PixelSprite";

const SHARED_PALETTE: PixelPalette = {
  K: "#0a0a14",
  F: "#fad6c0",
  N: "#c89684",
  W: "#ffffff",
};

interface SpriteSet {
  palette: PixelPalette;
  idle: PixelFrame;
  blink: PixelFrame;
  active: PixelFrame;
}

/* ----- セナ — 経営司令部 (秘書) ・ 黒髪ボブ + ピンクスーツ ----- */
const SENA_PAL: PixelPalette = {
  ...SHARED_PALETTE,
  H: "#1a0a1f",
  h: "#3a1d3a",
  E: "#0a0a14",
  M: "#ec4899",
  B: "#f9a8d4",
  A: "#ec4899",
  b: "#c46a90",
};
const SENA_IDLE: PixelFrame = [
  "...............",
  ".....KKKKKK....",
  "....KHHHHHHK...",
  "...KHHhhhHHHK..",
  "..KHHHhhhHHHHK.",
  "..KHHFFFFFHHHK.",
  "..KHFFFFFFFFHK.",
  "..KHFEFFFFEFHK.",
  "..KHFFFNFFFFHK.",
  "..KHFFFMMMFFHK.",
  "..KHHFFFFFFHHK.",
  "...HHHFFFFFHHK.",
  "...HHKFFFFKHH..",
  ".....KFFFFK....",
  "....KKBBBBKK...",
  "...KBBBBABBBK..",
  "..KBBBABABBBBK.",
  "..KBBBBBBBBBBK.",
  "..KbBBBBBBBBbK.",
  "..KKB......BKK.",
];
const SENA_BLINK: PixelFrame = SENA_IDLE.map((r, y) => (y === 7 ? "..KHFKFFFFKFHK." : r));
const SENA_ACTIVE: PixelFrame = SENA_IDLE.map((r, y) => (y === 9 ? "..KHFMMMMMMFHK." : r));

/* ----- アイケン — 開発 (紫メッシュ + ヘッドホン) ----- */
const AIKEN_PAL: PixelPalette = {
  ...SHARED_PALETTE,
  H: "#2a1b3b",
  h: "#a855f7",
  E: "#a855f7",
  M: "#3a1d3a",
  B: "#1c1530",
  A: "#a855f7",
  b: "#0e0820",
  D: "#f59e0b",
};
const AIKEN_IDLE: PixelFrame = [
  "...............",
  "....KKKKKKK....",
  "...KHhhHHHHHK..",
  "..KHhhHHHHHHHK.",
  "..KHHhHHHHHHHK.",
  "..KHHHHFFFHHHK.",
  ".DDKHFFFFFFHKDD",
  ".DDKHFEFFFEFHDD",
  ".DDKHFFFNFFFHDD",
  "..KHFFFMMFFFHK.",
  "..KHHFFFFFFHHK.",
  "...KKHFFFFHKK..",
  ".....KFFFFK....",
  "....KKFFFFKK...",
  "...KBBABABBBK..",
  "..KBBBAAAABBBK.",
  "..KBBBAAAABBBK.",
  "..KBBBBBBBBBBK.",
  "..KbBBKKKKBBbK.",
  "..KKB......BKK.",
];
const AIKEN_BLINK: PixelFrame = AIKEN_IDLE.map((r, y) => (y === 7 ? ".DDKHFKFFFKFHDD" : r));
const AIKEN_ACTIVE: PixelFrame = AIKEN_IDLE.map((r, y) => {
  if (y === 6) return ".WWKHFFFFFFHKWW";
  if (y === 7) return ".WWKHFEFFFEFHWW";
  if (y === 8) return ".WWKHFFFNFFFHWW";
  return r;
});

/* ----- ピコ — 品質保証 (緑ショート + バイザー) ----- */
const PIKO_PAL: PixelPalette = {
  ...SHARED_PALETTE,
  H: "#064e3b",
  h: "#10b981",
  E: "#10b981",
  M: "#0a0a14",
  B: "#064e3b",
  A: "#10b981",
  b: "#022c1a",
  D: "#6ee7b7",
};
const PIKO_IDLE: PixelFrame = [
  "...............",
  ".....KKKKKK....",
  "....KhhhhhhK...",
  "...KhHHHHHHhK..",
  "..KhHHHHHHHHhK.",
  "..KHHFFFFFHHHK.",
  "..KHFFFFFFFFHK.",
  ".KDDDDDDDDDDDDK",
  "..KHFFFNFFFFHK.",
  "..KHFFFMMMFFHK.",
  "..KHHFFFFFFHHK.",
  "...KKHFFFFHKK..",
  ".....KFFFFK....",
  "....KKFFFFKK...",
  "...KBBBAABBBK..",
  "..KBBABBBBABBK.",
  "..KBABBBBBBABK.",
  "..KBBBBBBBBBBK.",
  "..KbBBBBBBBBbK.",
  "..KKB......BKK.",
];
const PIKO_BLINK: PixelFrame = PIKO_IDLE;
const PIKO_ACTIVE: PixelFrame = PIKO_IDLE.map((r, y) => (y === 7 ? ".KWDDDDDDDDDDWK" : r));

/* ----- マナブ — 教育部 (オレンジふわふわ髪 + 丸メガネ) ----- */
const MANABU_PAL: PixelPalette = {
  ...SHARED_PALETTE,
  H: "#7c2d12",
  h: "#fdba74",
  E: "#0a0a14",
  M: "#7c2d12",
  B: "#3a2a14",
  A: "#f59e0b",
  b: "#241a0e",
  D: "#fde68a",
};
const MANABU_IDLE: PixelFrame = [
  "...............",
  "...KKKKKKKK....",
  "..KhhHHHHHhhK..",
  ".KhhHHhhhHHhhK.",
  ".KhHHhhhhhHHhK.",
  "..KHHHFFFHHHK..",
  "..KHFFFFFFFHK..",
  "..KHKKFKFKKFHK.",
  "..KHKEKFKEKFHK.",
  "..KHFFFMMMFFHK.",
  "..KHHFFFFFFHHK.",
  "...KKHFFFFHKK..",
  ".....KFFFFK....",
  "....KKFFFFKK...",
  "...KBBABBABBBK.",
  "..KBBBBAABBBBK.",
  "..KBBAAAAAABBK.",
  "..KBBBBBBBBBBK.",
  "..KbBBBBBBBBbK.",
  "..KKB......BKK.",
];
const MANABU_BLINK: PixelFrame = MANABU_IDLE.map((r, y) => (y === 8 ? "..KHKKKKFKKKFHK" : r));
const MANABU_ACTIVE: PixelFrame = MANABU_IDLE.map((r, y) => {
  if (y === 9) return "..KHFFFMMMMFFHK";
  return r;
});

/* ----- ミラ — マーケ (シアンロング + ヘッドセットマイク) ----- */
const MIRA_PAL: PixelPalette = {
  ...SHARED_PALETTE,
  H: "#155e75",
  h: "#67e8f9",
  E: "#06b6d4",
  M: "#06b6d4",
  B: "#0c1f26",
  A: "#06b6d4",
  b: "#062a35",
  D: "#67e8f9",
};
const MIRA_IDLE: PixelFrame = [
  "...............",
  "....KKKKKKK....",
  "...KhhhhhhhhK..",
  "..KhHHHHHHHhhK.",
  "..KhHhHHHhHHHK.",
  "..KHHHFFFHHHHK.",
  "..KHFFFFFFFFHK.",
  "..KHFEFFFFEFHK.",
  "..KHFFFNFFFFHK.",
  "..KHFFFMMMFFHKD",
  "..KHHFFFFFFHHKD",
  "...KKHHHHHHKKDD",
  "....HHHHHHHHK..",
  "....HHHHHHHHK..",
  "...KKBBBBBBKK..",
  "..KBBABBBBABBK.",
  "..KBABBABBABBK.",
  "..KBBBBABBBBBK.",
  "..KbBBBBBBBBbK.",
  "..KKB......BKK.",
];
const MIRA_BLINK: PixelFrame = MIRA_IDLE.map((r, y) => (y === 7 ? "..KHFKFFFFKFHK." : r));
const MIRA_ACTIVE: PixelFrame = MIRA_IDLE.map((r, y) => {
  if (y === 9) return "..KHFMMMMMMFHKD";
  return r;
});

/* ============================================================
 * Supporting 20 — テンプレート + パレット override
 * ============================================================ */

const STYLE_SHORT_IDLE: PixelFrame = [
  "...............",
  "......KKKKK....",
  ".....KHHHHHK...",
  "....KHHHHHHHK..",
  "...KHHHHHHHHHK.",
  "...KHHFFFFFHHK.",
  "...KHFFFFFFFHK.",
  "...KHFEFFFEFHK.",
  "...KHFFFNFFFHK.",
  "...KHFFFMMFFHK.",
  "...KHHFFFFFHHK.",
  "....KKHFFFFKK..",
  "......KFFFFK...",
  "......KFFFFK...",
  ".....KKBBBBKK..",
  "....KBBBABBBBK.",
  "....KBBBABBBBK.",
  "....KBBBBBBBBK.",
  "....KbBBBBBBbK.",
  "....KKB....BKK.",
];
const STYLE_SHORT_BLINK: PixelFrame = STYLE_SHORT_IDLE.map((r, y) => (y === 7 ? "...KHFKFFFKFHK." : r));
const STYLE_SHORT_ACTIVE: PixelFrame = STYLE_SHORT_IDLE.map((r, y) => (y === 9 ? "...KHFMMMMMFHK." : r));

const STYLE_TIE_IDLE: PixelFrame = [
  "...............",
  "......KKKKK....",
  ".....KHHHHHK...",
  "....KHhhhhhHK..",
  "....KHHhhhHHK..",
  "....KHFFFFFHK..",
  "...KHFFFFFFFHK.",
  "...KHFEFFFEFHK.",
  "...KHFFFNFFFHK.",
  "...KHFFFMMFFHK.",
  "...KKHFFFFFHHK.",
  ".....KFFFFFK...",
  ".....KFFFFFK...",
  "....KKBBBBBKK..",
  "...KWWBAABWWK..",
  "...KBBBAABBBK..",
  "...KBBBAABBBK..",
  "...KBBBBBBBBBK.",
  "...KbBBBBBBBBbK",
  "...KKB......BKK",
];
const STYLE_TIE_BLINK: PixelFrame = STYLE_TIE_IDLE.map((r, y) => (y === 7 ? "...KHFKFFFKFHK." : r));
const STYLE_TIE_ACTIVE: PixelFrame = STYLE_TIE_IDLE.map((r, y) => (y === 9 ? "...KHFMMMMMFHK." : r));

const STYLE_VISOR_IDLE: PixelFrame = [
  "...............",
  "......KKKKK....",
  ".....KHHHHHK...",
  "....KHHHHHHHK..",
  "...KHHHHHHHHHK.",
  ".DDDDDDDDDDDDD.",
  "...KHFFFFFFFHK.",
  "...KHFEFFFEFHK.",
  "...KHFFFNFFFHK.",
  "...KHFFFMMFFHK.",
  "...KHHFFFFFHHK.",
  "....KKHFFFFKK..",
  "......KFFFFK...",
  ".....KKFFFFKK..",
  "....KKBBBBBKK..",
  "...KBBBAABBBK..",
  "...KBABBAABBBK.",
  "...KBBBABBBBBK.",
  "...KbBBBBBBBbK.",
  "...KKB.....BKK.",
];
const STYLE_VISOR_BLINK: PixelFrame = STYLE_VISOR_IDLE;
const STYLE_VISOR_ACTIVE: PixelFrame = STYLE_VISOR_IDLE.map((r, y) => (y === 5 ? ".DDDWWWWWWWDDD." : r));

const STYLE_PONYTAIL_IDLE: PixelFrame = [
  "...............",
  "....KKKKKKK....",
  "...KhHHHHHHK...",
  "..KhhHHHHHHHK..",
  "..KhhHHHHHHHKH.",
  "..KHHHFFFFFHKHH",
  "..KHFFFFFFFHKHH",
  "..KHFEFFFEFHKHH",
  "..KHFFFNFFFHKHH",
  "..KHFFFMMFFHK..",
  "..KKHFFFFFHKK..",
  "....KFFFFFK....",
  "...KKFFFFFKK...",
  "...KBBBABBBBK..",
  "..KBBABBBABBBK.",
  "..KBBBBABBBBBK.",
  "..KBBBBBBBBBBK.",
  "..KBBBBBBBBBBK.",
  "..KbBBBBBBBBbK.",
  "..KKB......BKK.",
];
const STYLE_PONYTAIL_BLINK: PixelFrame = STYLE_PONYTAIL_IDLE.map((r, y) => (y === 7 ? "..KHFKFFFKFHKHH" : r));
const STYLE_PONYTAIL_ACTIVE: PixelFrame = STYLE_PONYTAIL_IDLE.map((r, y) => (y === 9 ? "..KHFMMMMMFHK.." : r));

const STYLES = {
  short: { idle: STYLE_SHORT_IDLE, blink: STYLE_SHORT_BLINK, active: STYLE_SHORT_ACTIVE },
  tie: { idle: STYLE_TIE_IDLE, blink: STYLE_TIE_BLINK, active: STYLE_TIE_ACTIVE },
  visor: { idle: STYLE_VISOR_IDLE, blink: STYLE_VISOR_BLINK, active: STYLE_VISOR_ACTIVE },
  ponytail: { idle: STYLE_PONYTAIL_IDLE, blink: STYLE_PONYTAIL_BLINK, active: STYLE_PONYTAIL_ACTIVE },
} as const;

function makeSprite(styleKey: keyof typeof STYLES, overrides: PixelPalette): SpriteSet {
  const s = STYLES[styleKey];
  return {
    palette: { ...SHARED_PALETTE, ...overrides },
    idle: s.idle,
    blink: s.blink,
    active: s.active,
  };
}

const AGENT_SPRITES: Record<string, SpriteSet> = {
  /* メイン5体 */
  sena: { palette: SENA_PAL, idle: SENA_IDLE, blink: SENA_BLINK, active: SENA_ACTIVE },
  aiken: { palette: AIKEN_PAL, idle: AIKEN_IDLE, blink: AIKEN_BLINK, active: AIKEN_ACTIVE },
  piko: { palette: PIKO_PAL, idle: PIKO_IDLE, blink: PIKO_BLINK, active: PIKO_ACTIVE },
  manabu: { palette: MANABU_PAL, idle: MANABU_IDLE, blink: MANABU_BLINK, active: MANABU_ACTIVE },
  mira: { palette: MIRA_PAL, idle: MIRA_IDLE, blink: MIRA_BLINK, active: MIRA_ACTIVE },

  /* 🏛️ 経営司令部 (pink/burgundy) */
  kou: makeSprite("tie", {
    H: "#e4e4f0", h: "#f5f5ff", E: "#ec4899", M: "#3a1d3a",
    B: "#3a1d3a", A: "#ec4899", b: "#1f0f1f",
  }),
  ukeru: makeSprite("short", {
    H: "#7c2d12", h: "#a16207", E: "#0a0a14", M: "#ec4899",
    B: "#831843", A: "#fbcfe8", b: "#3a1d3a",
  }),
  daiya: makeSprite("ponytail", {
    H: "#3b1e3b", h: "#7c3a7a", E: "#ec4899", M: "#ec4899",
    B: "#3b1e3b", A: "#f9a8d4", b: "#241224",
  }),
  hanko: makeSprite("visor", {
    H: "#fde68a", h: "#fef3c7", E: "#7c2d12", M: "#7c2d12",
    B: "#3a2a16", A: "#fde68a", b: "#241a0e", D: "#ec4899",
  }),

  /* 💻 開発 (purple) */
  furo: makeSprite("ponytail", {
    H: "#831843", h: "#ec4899", E: "#f472b6", M: "#831843",
    B: "#3a1b3b", A: "#ec4899", b: "#241024",
  }),
  urabe: makeSprite("visor", {
    H: "#1e1b3a", h: "#4c1d95", E: "#a855f7", M: "#3a1d3a",
    B: "#1c1530", A: "#a855f7", b: "#0e0820", D: "#7c3aed",
  }),
  base: makeSprite("tie", {
    H: "#6d28d9", h: "#a855f7", E: "#c084fc", M: "#3a1d3a",
    B: "#1c1530", A: "#c084fc", b: "#0e0820",
  }),
  sora: makeSprite("short", {
    H: "#312e81", h: "#6366f1", E: "#a5b4fc", M: "#1e1b4b",
    B: "#1e1b4b", A: "#6366f1", b: "#15123a",
  }),

  /* 🔍 品質保証 (green) */
  kuon: makeSprite("tie", {
    H: "#022c1a", h: "#0f766e", E: "#10b981", M: "#022c1a",
    B: "#064e3b", A: "#10b981", b: "#022c1a",
  }),
  miteru: makeSprite("ponytail", {
    H: "#064e3b", h: "#34d399", E: "#34d399", M: "#0a0a14",
    B: "#064e3b", A: "#a7f3d0", b: "#022c1a",
  }),
  navi: makeSprite("short", {
    H: "#0f766e", h: "#5eead4", E: "#0a0a14", M: "#0a0a14",
    B: "#064e3b", A: "#5eead4", b: "#022c1a",
  }),
  kagi: makeSprite("visor", {
    H: "#022c1a", h: "#064e3b", E: "#10b981", M: "#022c1a",
    B: "#064e3b", A: "#10b981", b: "#022c1a", D: "#0a0a14",
  }),

  /* 📚 教育部 (amber/orange) */
  aakai: makeSprite("short", {
    H: "#7c2d12", h: "#a16207", E: "#0a0a14", M: "#7c2d12",
    B: "#3a2a14", A: "#fde68a", b: "#241a0e",
  }),
  kaeru: makeSprite("ponytail", {
    H: "#92400e", h: "#fdba74", E: "#7c2d12", M: "#7c2d12",
    B: "#3a2a14", A: "#fdba74", b: "#241a0e",
  }),
  hajime: makeSprite("tie", {
    H: "#fdba74", h: "#fed7aa", E: "#7c2d12", M: "#f59e0b",
    B: "#92400e", A: "#fdba74", b: "#451a03",
  }),
  hou: makeSprite("visor", {
    H: "#fef3c7", h: "#fef9c3", E: "#7c2d12", M: "#7c2d12",
    B: "#3a2a14", A: "#fde68a", b: "#241a0e", D: "#f59e0b",
  }),

  /* 📣 マーケ (cyan) */
  ripu: makeSprite("tie", {
    H: "#0e7490", h: "#22d3ee", E: "#67e8f9", M: "#06b6d4",
    B: "#0c1f26", A: "#22d3ee", b: "#062a35",
  }),
  tean: makeSprite("short", {
    H: "#fde68a", h: "#fef9c3", E: "#0a0a14", M: "#06b6d4",
    B: "#0c1f26", A: "#fde68a", b: "#062a35",
  }),
  tone: makeSprite("ponytail", {
    H: "#0369a1", h: "#38bdf8", E: "#7dd3fc", M: "#06b6d4",
    B: "#0c1f26", A: "#38bdf8", b: "#062a35",
  }),
  neta: makeSprite("visor", {
    H: "#a5f3fc", h: "#cffafe", E: "#06b6d4", M: "#ec4899",
    B: "#0c1f26", A: "#67e8f9", b: "#062a35", D: "#ec4899",
  }),
};

interface AgentSpriteProps {
  agentId: string;
  scale?: number;
  mode?: "idle-blink" | "active" | "still";
  fps?: number;
  style?: CSSProperties;
}

export function AgentSprite({ agentId, scale = 4, mode = "idle-blink", fps = 2, style }: AgentSpriteProps) {
  const s = AGENT_SPRITES[agentId];
  if (!s) return null;

  let frames: PixelFrame[];
  switch (mode) {
    case "idle-blink":
      frames = [s.idle, s.idle, s.idle, s.idle, s.idle, s.blink, s.idle, s.idle, s.idle, s.active];
      break;
    case "active":
      frames = [s.active, s.idle];
      break;
    case "still":
      frames = [s.idle];
      break;
    default:
      frames = [s.idle];
  }
  return (
    <PixelSpriteCycle
      frames={frames}
      palette={s.palette}
      scale={scale}
      fps={fps}
      style={style}
      ariaLabel={`${agentId} sprite`}
    />
  );
}
