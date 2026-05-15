"use client";

/* ============================================================
 * Explainer.tsx — 仕組み解説（完全に素人向け・技術用語禁止）
 * ============================================================ */

import { Fragment } from "react";
import { PixelSprite } from "./PixelSprite";

type FlowKind = "human" | "inbox" | "switch" | "team" | "package";

function FlowNodeIcon({ kind, color }: { kind: FlowKind; color: string }) {
  const grid = (frame: string[]) => (
    <PixelSprite frame={frame} palette={{ K: "#0a0a14", C: color, W: "#ffffff", a: "#f59e0b" }} scale={4} />
  );
  switch (kind) {
    case "human":
      return grid([
        "...KKK....",
        "..KCCCK...",
        "..KCCCK...",
        "...KKK....",
        "..KKKKK...",
        ".KCCCCCK..",
        ".KCCCCCK..",
        ".KCCCCCK..",
        ".KKKKKKK..",
      ]);
    case "inbox":
      return grid([
        "..........",
        ".KKKKKKKK.",
        ".KCCCCCCK.",
        ".KCCWWCCK.",
        ".KCWWWWCK.",
        ".KCCWWCCK.",
        ".KCCCCCCK.",
        ".KKKKKKKK.",
        "..........",
      ]);
    case "switch":
      return grid([
        "....KK....",
        "...KCCK...",
        "..KCCCCK..",
        ".KCKCKCK.K",
        "KCCKCKCCKK",
        ".KCKCKCK.K",
        "..KCCCCK..",
        "...KCCK...",
        "....KK....",
      ]);
    case "team":
      return grid([
        "..........",
        ".KKK..KKK.",
        ".KCK..KCK.",
        ".KKK..KKK.",
        ".KCCKKCCK.",
        ".KCCCCCCK.",
        ".KCCCCCCK.",
        ".KKKKKKKK.",
        "..........",
      ]);
    case "package":
      return grid([
        "..........",
        ".KKKKKKKK.",
        ".KCCKKCCK.",
        ".KCKaaKCK.",
        ".KCKaaKCK.",
        ".KCKaaKCK.",
        ".KCCKKCCK.",
        ".KKKKKKKK.",
        "..........",
      ]);
    default:
      return null;
  }
}

interface FlowNode {
  n: string;
  kind: FlowKind;
  label: string;
  desc: string;
  color: string;
}

const FLOW: FlowNode[] = [
  { n: "01", kind: "human", label: "人間が依頼", desc: "「資料つくって」「これ調べて」と日本語で伝えるだけ。", color: "#ffffff" },
  { n: "02", kind: "inbox", label: "秘書AIが受付", desc: "社長秘書AIが内容を整理し、どの部署に任せるかを判断。", color: "#ec4899" },
  { n: "03", kind: "switch", label: "担当に振り分け", desc: "開発・品質・教育・マーケ、得意なAIへ自動で割り振り。", color: "#a855f7" },
  { n: "04", kind: "team", label: "AI同士で仕上げ", desc: "担当AIが作業、必要なら別のAIに相談しながら完成させる。", color: "#10b981" },
  { n: "05", kind: "package", label: "人間に届く", desc: "秘書AIが要点をまとめて、できあがりを人間に渡す。", color: "#f59e0b" },
];

function ArrowBetween({ idx }: { idx: number }) {
  const left = `calc(${(idx + 1) * (100 / 5)}% - 12px)`;
  return (
    <div className="flow__arrow" style={{ left }}>
      <svg viewBox="0 0 24 12" shapeRendering="crispEdges">
        <rect x="0" y="5" width="16" height="2" fill="currentColor" />
        <rect x="14" y="3" width="2" height="2" fill="currentColor" />
        <rect x="16" y="4" width="2" height="4" fill="currentColor" />
        <rect x="18" y="5" width="2" height="2" fill="currentColor" />
        <rect x="14" y="7" width="2" height="2" fill="currentColor" />
      </svg>
    </div>
  );
}

export function Explainer() {
  return (
    <section className="explainer" id="how">
      <div className="explainer__inner">
        <div className="explainer__head">
          <div className="explainer__lede">
            <p className="explainer__eyebrow">HOW IT WORKS</p>
            <h2 className="explainer__title">
              &quot;AI社員&quot; って、
              <br />
              結局なにをしてるの？
            </h2>
          </div>
          <div className="explainer__body">
            <p>
              ロンショールでは、<strong>AIたちが&quot;社員&quot;として働いています</strong>。
              人間が「これやって」と頼むと、担当のAIが受け取って、
              得意なAIに振り分けて、みんなで仕上げる。
              終わったら秘書AIが整理して人間に届けてくれる ──
              <strong>会社の中を AI がぐるぐる回ってる</strong>イメージです。
            </p>
            <p>
              なので、<strong>夜中でも、休日でも、25人ぶんの動きが止まりません</strong>。
              人間は「方針を決める」「最後に確認する」ことに集中できる、
              という新しい会社の形です。
            </p>
          </div>
        </div>

        <div className="flow">
          <div className="flow__grid" />
          <div className="flow__board">
            {FLOW.map((node, i) => (
              <Fragment key={node.n}>
                <div className="flow__node" style={{ ["--node-color" as string]: node.color } as React.CSSProperties}>
                  <p className="flow__node-num">STEP {node.n}</p>
                  <div className="flow__node-icon">
                    <FlowNodeIcon kind={node.kind} color={node.color} />
                  </div>
                  <p className="flow__node-label">{node.label}</p>
                  <p className="flow__node-desc">{node.desc}</p>
                </div>
                {i < FLOW.length - 1 && <ArrowBetween idx={i} />}
              </Fragment>
            ))}
          </div>
          <div className="flow__tape">
            <span>
              INPUT · <strong>HUMAN</strong>
            </span>
            <span>
              OUTPUT · <strong>HUMAN</strong>
            </span>
            <span>
              ROUND TRIP · <strong>~ 24h / 365d</strong>
            </span>
            <span>
              BREAKS · <strong>ZERO</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
