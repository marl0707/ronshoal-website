// 公開先が決まったら、ここの1行だけを差し替える（2026-09-06・W5）。
// ARTIST_SITE_URL = アーティストサイト（モック中は :8904）。index.html の data-site-link="ARTIST_SITE_URL" が読む。
// ⚠ 22_RonshoalHP/site_mockup/js/site-config.js にも同型の定数がある。公開時は両方を同じ日に直す。
window.SITE_LINKS = Object.freeze({
  ARTIST_SITE_URL: "/artist/index.html",
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-site-link]").forEach((a) => {
    const url = window.SITE_LINKS[a.dataset.siteLink];
    if (url) a.setAttribute("href", url);
  });
});
