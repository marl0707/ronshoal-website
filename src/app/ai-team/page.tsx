"use client";

/* ============================================================
 * /ai-team — AI社員紹介ページ本体
 * ============================================================ */

import { useEffect, useState } from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { AGENTS } from "@/components/ai-team/agentData";
import { Hero } from "@/components/ai-team/Hero";
import { RosterStrip } from "@/components/ai-team/RosterStrip";
import { Explainer } from "@/components/ai-team/Explainer";
import { CTA } from "@/components/ai-team/CTA";
import { RoomOverlay } from "@/components/ai-team/RoomOverlay";
import "./ai-team.css";

const TWEAKS = { scanlines: true, flicker: true } as const;

export default function AiTeamPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    // CRT scanlines/flicker をスコープ内のみ有効に
    const root = document.documentElement;
    const prevScan = root.dataset.scanlines;
    const prevFlick = root.dataset.flicker;
    root.dataset.scanlines = String(TWEAKS.scanlines);
    root.dataset.flicker = String(TWEAKS.flicker);
    document.body.classList.add("ai-team-page");
    return () => {
      if (prevScan === undefined) delete root.dataset.scanlines;
      else root.dataset.scanlines = prevScan;
      if (prevFlick === undefined) delete root.dataset.flicker;
      else root.dataset.flicker = prevFlick;
      document.body.classList.remove("ai-team-page");
    };
  }, []);

  const onOpen = (id: string) => setOpenId(id);
  const onClose = () => setOpenId(null);
  const onNavigate = (dir: number) => {
    const i = AGENTS.findIndex((a) => a.id === openId);
    if (i < 0) return;
    const next = (i + dir + AGENTS.length) % AGENTS.length;
    setOpenId(AGENTS[next].id);
  };

  return (
    <div className="ai-team-shell">
      <Header />
      <main>
        <Hero onDoorClick={onOpen} tweaks={TWEAKS} />
        <RosterStrip onOpen={onOpen} />
        <Explainer />
        <CTA />
      </main>
      <Footer />

      {openId && <RoomOverlay agentId={openId} onClose={onClose} onNavigate={onNavigate} />}
    </div>
  );
}
