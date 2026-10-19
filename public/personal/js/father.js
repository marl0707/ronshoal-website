(() => {
  if (!document.body.classList.contains('is-father')) return;
  const main = document.querySelector('main');
  const summary = document.querySelector('#summary').textContent;
  const navigation = document.querySelector('.facet-nav');
  const chapters = Array.from(document.querySelectorAll('#details .detail')).map(section => ({
    title: section.querySelector('h2').textContent,
    body: section.querySelector('div > p').textContent
  }));
  const [why, future, language, culture, choice, education] = chapters;
  const person = (x, active) => `<g transform="translate(${x} 0)" ${active ? 'class="person-active"' : 'class="person-outline"'}><circle cx="20" cy="16" r="11"/><path d="M5 74V43c0-16 30-16 30 0v31M14 74v31M26 74v31"/></g>`;
  const chapter = (number, en) => `<p class="chapter-index"><span>${number}</span>${en}</p>`;
  const heading = text => text.split('、').map((part, i, parts) => `<span class="heading-phrase">${part}${i < parts.length - 1 ? '、' : ''}</span>`).join('<wbr>');
  main.className = 'father-page';
  main.innerHTML = `
    <section class="father-hero" aria-labelledby="father-title">
      <div class="hero-copy">
        <p class="father-eyebrow"><span>06 / FATHER</span> 父親としての選択</p>
        <h1 id="father-title">家族と、<br><em>世界を</em><br>広げる。</h1>
        <p class="father-lead">${summary}</p>
        <a class="story-link" href="#why">教育移住の理由を読む <span aria-hidden="true">↓</span></a>
      </div>
      <figure class="journey-art">
        <svg viewBox="0 0 520 570" role="img" aria-labelledby="journey-title">
          <title id="journey-title">日本とマレーシアを結ぶ旅と、多様な環境を表すイラスト</title>
          <defs><pattern id="travel-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#e1ddcf" stroke-width=".8"/></pattern></defs>
          <rect x="15" y="35" width="480" height="490" rx="240" fill="#e7ebdf"/>
          <rect x="15" y="35" width="480" height="490" rx="240" fill="url(#travel-grid)"/>
          <circle cx="294" cy="225" r="151" fill="#f6f3eb" stroke="#a6b1a0"/>
          <ellipse cx="294" cy="225" rx="83" ry="151" fill="none" stroke="#bac4b1"/>
          <ellipse cx="294" cy="225" rx="151" ry="58" fill="none" stroke="#bac4b1"/>
          <path d="M143 225h302M294 74v302" fill="none" stroke="#bac4b1"/>
          <path d="M402 151C503 214 165 425 178 290" class="journey-route" fill="none" stroke="#bd684b" stroke-width="2" stroke-dasharray="5 6"/>
          <circle cx="402" cy="151" r="6" fill="#bd684b"/>
          <circle cx="178" cy="290" r="6" fill="#bd684b"/>
          <g fill="#294f43" font-family="sans-serif" font-size="11" letter-spacing="2"><text x="355" y="132">JAPAN</text><text x="83" y="276">MALAYSIA</text></g>
          <g transform="translate(53 355) rotate(-10)"><rect width="120" height="154" rx="7" fill="#294f43"/><rect x="9" y="9" width="102" height="136" rx="3" fill="none" stroke="#9aaf93"/><circle cx="60" cy="64" r="25" fill="none" stroke="#c5d0b7"/><ellipse cx="60" cy="64" rx="12" ry="25" fill="none" stroke="#c5d0b7"/><path d="M35 64h50" stroke="#c5d0b7"/><text x="60" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#e9e4d3">NEW WORLD</text></g>
          <g transform="translate(264 337)" fill="none" stroke="#294f43" stroke-width="2"><path d="M0 136h186M13 136V60h40v76M24 60V31h18v29M30 31V12h6v19M69 136V60h40v76M80 60V31h18v29M86 31V12h6v19M53 77h16M125 136V76c0-22 48-22 48 0v60"/><path d="M123 76q26-38 52 0M149 39v-9"/><path d="M25 74h16M25 89h16M25 104h16M81 74h16M81 89h16M81 104h16" stroke="#8b9d87"/></g>
          <g transform="translate(217 411)" fill="#bd684b"><circle cx="0" cy="0" r="12"/><path d="M-16 64V29q0-30 32 0v35z"/><circle cx="39" cy="25" r="8"/><path d="M29 64V45q0-19 20 0v19z"/><path d="M16 34l14 12" fill="none" stroke="#bd684b" stroke-width="5" stroke-linecap="round"/></g>
          <g fill="#7d9473"><path d="M457 420c-22-4-36-25-28-46 24 7 38 21 28 46z"/><path d="M457 442c23-5 32-24 23-43-23 9-32 22-23 43z"/><path d="M457 468v-49" fill="none" stroke="#7d9473" stroke-width="2"/></g>
          <text x="335" y="536" text-anchor="middle" fill="#526456" font-family="sans-serif" font-size="10" letter-spacing="3">A LIFE WITH MORE POSSIBILITIES</text>
        </svg>
        <figcaption><span>日本 → マレーシア</span> 言葉と文化に出会う暮らしへ。</figcaption>
      </figure>
    </section>
    <nav class="story-nav" aria-label="教育移住の話の目次">
      <a href="#why">01 なぜ海外へ</a><a href="#future">02 将来の選択肢</a><a href="#language">03 言葉</a><a href="#culture">04 文化</a><a href="#choice">05 国選び</a><a href="#education">06 教育観</a>
    </nav>
    <section class="father-why" id="why" aria-labelledby="why-title">
      <div>${chapter('01', 'WHY OVERSEAS')}<p class="future-years" aria-hidden="true"><span>20</span><small>年後</small><span>30</span><small>年後</small></p><p class="years-note">子どもたちが、活躍する未来を考える。</p></div>
      <div class="chapter-copy"><h2 id="why-title"><span class="heading-phrase">今の日本で、</span><wbr><span class="heading-phrase">子育てをする気は</span><wbr><span class="heading-phrase">ありませんでした。</span></h2><p>${why.body}</p></div>
    </section>
    <section class="father-section" id="future" aria-labelledby="future-title">
      ${chapter('02', 'FUTURE POSSIBILITIES')}
      <div class="section-heading"><h2 id="future-title">${heading(future.title)}</h2><span class="section-word" aria-hidden="true">POSSIBILITIES</span></div>
      <div class="risk-grid"><div><span>LANGUAGE</span><p>日本語しか<br>話せない。</p></div><div><span>WORK</span><p>日本でしか<br>働けない。</p></div><div><span>EXPERIENCE</span><p>日本以外に<br>行ったことがない。</p></div></div>
      <p class="section-body">${future.body}</p>
    </section>
    <section class="father-section language-section" id="language" aria-labelledby="language-title">
      ${chapter('03', 'LANGUAGE ENVIRONMENT')}<h2 id="language-title">${heading(language.title)}</h2>
      <div class="language-grid"><div class="language-card"><span class="language-glyph" aria-hidden="true">Aa<span>hello.</span></span><div><span class="card-eyebrow">ENGLISH</span><h3>英語を学ぶ。</h3></div></div><div class="language-card chinese-card"><span class="language-glyph" aria-hidden="true">你好</span><div><span class="card-eyebrow">MANDARIN</span><h3>中国語に触れる。</h3></div></div></div>
      <p class="section-body">${language.body}</p>
    </section>
    <section class="father-culture" id="culture" aria-labelledby="culture-title">
      <div class="culture-stat"><p class="card-eyebrow">A WORLD TO UNDERSTAND</p><p class="stat-number"><b>1</b><span>in</span><b>4</b></p><svg viewBox="0 0 230 112" role="img" aria-label="4人のうち1人を色で示した図">${[0,60,120,180].map((x,i)=>person(x,i===0)).join('')}</svg><p class="stat-caption">世界人口の<strong>4人に1人</strong>が<br>イスラム教徒。</p><a class="source-note" href="https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/" target="_blank" rel="noopener noreferrer">Pew Research Center · 2020年推計を概数で表現 ↗</a></div>
      <div class="chapter-copy">${chapter('04', 'CULTURE & OPPORTUNITY')}<h2 id="culture-title">${heading(culture.title)}</h2><p>${culture.body}</p></div>
    </section>
    <section class="father-section choice-section" id="choice" aria-labelledby="choice-title">
      ${chapter('05', 'OUR CHOICE')}<h2 id="choice-title">${heading(choice.title)}</h2>
      <div class="choice-grid"><div class="choice-card"><span class="country-code">SG</span><div><p class="card-eyebrow">SINGAPORE</p><h3>シンガポール</h3><p>生活コストが、<br>わが家の家計には難しかった。</p></div></div><div class="choice-card chosen"><span class="country-code">MY</span><div><p class="card-eyebrow">MALAYSIA</p><h3>マレーシア</h3><p>家族の教育移住先として<br>選んだ国。</p></div><span class="chosen-label">OUR CHOICE</span></div></div>
      <p class="section-body">${choice.body}</p>
    </section>
    <section class="father-education" id="education" aria-labelledby="education-title">
      ${chapter('06', 'AS A FATHER')}<span class="education-ring" aria-hidden="true"></span><h2 id="education-title">親が与えられるのは、<br><em>環境。</em></h2><p>${education.body}</p><span class="education-word" aria-hidden="true">ENVIRONMENT</span>
    </section>
    <div class="other-facets"><p class="father-eyebrow">SIX FACETS, ONE LIFE</p><h2>ほかの側面を、読む。</h2></div>
  `;
  main.append(navigation);
  if (new URLSearchParams(location.search).has('flat')) document.documentElement.classList.add('flat');
})();
