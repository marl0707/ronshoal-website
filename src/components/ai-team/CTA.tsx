"use client";

/* ============================================================
 * CTA.tsx — 最終セクション
 * ============================================================ */

import Link from "next/link";

export function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__inner">
        <div>
          <p className="cta__eyebrow">CONTACT · BUILD WITH US</p>
          <h2 className="cta__title">
            あなたの会社にも、AI社員を。
            <br />
            ロンショールがまるごと設計します。
          </h2>
          <p className="cta__sub">
            このページで見ていただいたような「複数AIで業務を回す構造」を、
            事業内容・社内のレギュレーション・既存ツールに合わせて構築します。
            お気軽にどうぞ。
          </p>
        </div>
        <div className="cta__actions">
          <a className="cta__btn cta__btn--primary" href="mailto:contact@ronshoal.com">
            <span>AIによる開発・運用を相談する</span>
            <span className="cta__btn-arrow">→</span>
          </a>
          <Link className="cta__btn cta__btn--ghost" href="/">
            <span>トップに戻る</span>
            <span className="cta__btn-arrow">↑</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
