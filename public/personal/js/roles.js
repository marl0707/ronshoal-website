(() => {
  const configs = {
    founder: {
      color: '#29496a', wash: '#e2e8ed', word: 'CONNECT', kanji: '商', en: 'FOUNDER',
      tags: ['ロンショール合同会社', 'マレーシアを拠点に', '日本の事業を遠隔経営'],
      phrase: '医療とAI。<br>人と仕組み。',
      caption: '二つの事業と、遠隔経営のつながりを表す概念図。',
      introduction: 'ロンショールの事業は、医療関連事業とAI事業の二つ。AIの導入支援やシステム開発に加え、自社の情報メディア運営でも仕組みを使い続けています。',
      workTitle: '事業の、具体的な入口。',
      works: [
        ['MEDICAL', '健診プラス', '訪問型の労災二次健診。会社の医療関連事業を紹介しています。', 'https://www.ronshoal.com/kenshin.html', '医療関連事業を見る', 'medical'],
        ['AI & SYSTEMS', 'AIを、仕事の仕組みに。', '導入支援、システム開発、自社のAI社員システム、案内役のロン。', 'https://www.ronshoal.com/ai.html', 'AI事業を見る', 'systems']
      ],
      closeTitle: '離れていても、<br>判断と実行をつなぐ。',
      closeBody: 'マレーシアでの暮らしと、日本の事業。経営の視点は、仕組みをつくることや、家族の環境を選ぶことにもつながっています。',
      related: [['ものづくりの側面へ', 'maker'], ['父親としての選択へ', 'father']]
    },
    maker: {
      color: '#cbe7b8', wash: '#283c33', word: 'BUILD', kanji: '工', en: 'MAKER',
      tags: ['自ら設計', '自ら実装', '運用まで考える'],
      phrase: '考える。つくる。<br>使える形にする。',
      caption: 'アイデアから設計・実装・運用へ進む流れの概念図。',
      introduction: '業務システム、Webサービス、AI活用、データ連携。会社のAI事業では、使う人の仕事に馴染む仕組みを設計・開発しています。iOSアプリの共同開発では、瀬島 和樹が制作し、依頼者が販売を担います。',
      workTitle: '実際の取り組みを、見る。',
      works: [
        ['CO-CREATION', 'iOSアプリ共同開発', 'アイデアを持つ方と仕様を詰め、使えるアプリへ。進め方と相談条件を公開しています。', 'https://www.ronshoal.com/app-co-creation.html', '共同開発の進め方を見る', 'app'],
        ['CONVERSATION', 'AIチャットBOT「ロン」', '会社の事業を案内し、必要な情報への入口をつくるチャットBOT。', 'https://www.ronshoal.com/#ron', 'ロンのいる公式サイトへ', 'chat'],
        ['MEDIA', 'I LOVE PICKLEBALL', '自社のAI社員システムを、情報発信とサイト運営で実践する取り組み。', 'https://www.ronshoal.com/pickleball', 'メディアを見る', 'court'],
        ['MEDIA', 'マレーシア生活情報局', 'マレーシアの暮らしを扱う情報メディア。自社のサイト運営の実践例です。', 'https://www.ronshoal.com/malaysia', '生活情報局を見る', 'world']
      ],
      closeTitle: 'つくった仕組みを、<br>日常へ戻す。',
      closeBody: '経営、制作、暮らしの接点から、必要な仕組みを考える。ものづくりは、ほかの側面と切り離されていません。',
      related: [['経営者の側面へ', 'founder'], ['作品サイトへ', 'artist']]
    },
    researcher: {
      color: '#66517c', wash: '#eae4ee', word: 'OBSERVE', kanji: '究', en: 'RESEARCHER',
      tags: ['修士（医科学）', '奈良県立医科大学大学院', '子どもの腸内細菌'],
      phrase: '条件を見つめ、<br>関係性を読み解く。',
      caption: '関係性を観察する視点の概念図。研究データや結果を示す図ではありません。',
      introduction: '奈良県立医科大学大学院で医科学を修め、子どもの腸内細菌を研究し、論文にまとめました。ここでは、その背景と、研究から暮らしへつながる視点を紹介します。',
      workTitle: '研究の視点を、暮らしへ。',
      works: [
        ['LIFE & EDUCATION', '子育てと、環境を選ぶこと。', '家族でマレーシアへ教育移住。子どもたちが触れる言葉や文化、将来の選択肢を考える。', '/personal/facet.html?view=father', '父親としての考えを読む', 'world'],
        ['BODY & CONTINUITY', '身体を動かし続ける。', '健康長寿を大切なテーマに、ピックルボールを暮らしのなかで続ける。', '/personal/facet.html?view=athlete', '競技との関わりを読む', 'court']
      ],
      closeTitle: 'すぐに答えを決めず、<br>問いを持ち続ける。',
      closeBody: '研究で培った視点を、仕事、食事、家族、身体へ。異なる領域の変化と関係性を、ひとつの人生のなかで見つめていきます。',
      related: [['父親としての選択へ', 'father'], ['ピックルボールの側面へ', 'athlete']]
    },
    athlete: {
      color: '#87572b', wash: '#ede6d7', word: 'PLAY', kanji: '球', en: 'PICKLEBALL',
      tags: ['プレーヤー', 'メディア運営', '長く楽しむ身体'],
      phrase: 'プレーする。<br>知る入口をつくる。',
      caption: 'コート、パドル、ボールをモチーフにしたイラスト。',
      introduction: 'プレーヤーとしての時間と、情報メディアに関わる時間。I LOVE PICKLEBALLでは、施設・用具・記事・練習メニューなど、競技を知り、実際のプレーへ進む入口を届けています。',
      workTitle: 'コートへ向かう、次の一歩。',
      works: [
        ['FIND A COURT', 'プレーする場所を探す。', 'I LOVE PICKLEBALLの施設・コート情報へ。地域から候補を探せます。', 'https://www.ronshoal.com/pickleball/facilities', '施設・コートを見る', 'court'],
        ['PRACTICE', '練習のテーマを見つける。', '基礎や戦術の練習メニューを、メディアから辿れます。', 'https://www.ronshoal.com/pickleball/drills', '練習メニューを見る', 'paddle'],
        ['READ & DISCOVER', '競技を、もっと知る。', 'ルールや道具、参加の準備など、記事を通して競技を知る。', 'https://www.ronshoal.com/pickleball/articles', '記事を読む', 'notes']
      ],
      closeTitle: '遊び、仲間、<br>続けられる身体。',
      closeBody: '勝敗とともに、長く楽しめることを大切にする。競技との関わりは、健康長寿を考える視点や、情報の入口をつくる仕事にもつながっています。',
      related: [['研究者の側面へ', 'researcher'], ['ものづくりの側面へ', 'maker']]
    }
  };
  const config = configs[document.body.dataset.facet];
  if (!config) return;
  const main = document.querySelector('main');
  const details = document.querySelector('#details');
  const nav = document.querySelector('.facet-nav');
  const title = document.querySelector('#title').innerHTML;
  const summary = document.querySelector('#summary').textContent;
  const index = document.querySelector('#index').textContent;
  const personTitle = document.querySelector('#kicker').textContent;
  const link = role => role === 'artist' ? '/artist/index.html' : `/personal/facet.html?view=${role}`;
  const icon = type => {
    const paths = {
      medical: '<path d="M32 10h16v22h22v16H48v22H32V48H10V32h22z"/>',
      systems: '<rect x="24" y="24" width="32" height="32" rx="6"/><path d="M4 12h16v12M60 56h16v12M40 4v20M40 56v20M4 40h20M56 40h20"/><circle cx="40" cy="40" r="5"/>',
      app: '<rect x="20" y="4" width="40" height="72" rx="7"/><path d="M28 17h24M27 27h26v22H27zM34 65h12"/>',
      chat: '<path d="M7 10h66v44H29L14 70V54H7z"/><circle cx="25" cy="32" r="2"/><circle cx="40" cy="32" r="2"/><circle cx="55" cy="32" r="2"/>',
      court: '<rect x="11" y="4" width="58" height="72"/><path d="M11 29h58M11 51h58M40 4v25M40 51v25M4 40h72"/>',
      world: '<circle cx="40" cy="40" r="34"/><ellipse cx="40" cy="40" rx="17" ry="34"/><ellipse cx="40" cy="40" rx="34" ry="13"/><path d="M6 40h68"/>',
      paddle: '<rect x="14" y="5" width="46" height="48" rx="16" transform="rotate(-15 37 29)"/><path d="M41 54l6 22M34 55l5 22"/><circle cx="66" cy="64" r="8"/>',
      notes: '<rect x="15" y="7" width="50" height="66" rx="4"/><path d="M25 25h30M25 37h30M25 49h20M25 60h26"/>'
    };
    return `<svg viewBox="0 0 80 80" aria-hidden="true">${paths[type] || paths.systems}</svg>`;
  };
  const illustrations = {
    founder: '<circle cx="240" cy="210" r="132"/><ellipse cx="240" cy="210" rx="62" ry="132"/><ellipse cx="240" cy="210" rx="132" ry="48"/><path d="M108 210h264M240 78v264"/><circle cx="323" cy="120" r="8" class="art-dot"/><circle cx="166" cy="246" r="8" class="art-dot"/><path d="M323 120Q398 278 166 246" class="art-route"/><rect x="58" y="320" width="140" height="85" rx="4" class="art-block"/><path d="M121 335h14v17h17v14h-17v17h-14v-17h-17v-14h17z"/><rect x="282" y="320" width="140" height="85" rx="4" class="art-block"/><rect x="330" y="343" width="43" height="39" rx="4"/><path d="M240 342v40H198M240 382h42"/>',
    maker: '<rect x="55" y="76" width="370" height="255" rx="10" class="art-block"/><path d="M55 114h370M79 96h6m10 0h6m10 0h6"/><rect x="77" y="140" width="110" height="168" rx="3"/><path d="M92 164h80M92 184h48M92 232h80M92 252h62"/><path d="M222 164h172M222 183h106M222 212h172M222 231h145M222 260h86"/><rect x="273" y="265" width="111" height="161" rx="10" class="art-block"/><path d="M305 282h47M290 312h77M290 337h77M316 407h24"/><circle cx="125" cy="388" r="22"/><path d="M147 388h86"/><path d="M221 381l12 7-12 7"/>',
    researcher: '<circle cx="240" cy="236" r="149"/><ellipse cx="240" cy="236" rx="70" ry="149" transform="rotate(35 240 236)"/><ellipse cx="240" cy="236" rx="70" ry="149" transform="rotate(-35 240 236)"/><circle cx="240" cy="236" r="44" class="art-block"/><circle cx="161" cy="141" r="16" class="art-dot"/><circle cx="331" cy="306" r="21" class="art-dot"/><circle cx="135" cy="321" r="11" class="art-dot"/><circle cx="369" cy="180" r="13" class="art-dot"/><path d="M172 154l40 50M275 266l40 29M151 307l56-47M284 218l73-32"/><path d="M92 94h44M344 382h44M114 389h15"/>',
    athlete: '<g transform="translate(0 20)"><rect x="87" y="65" width="232" height="330" rx="2" class="art-block"/><path d="M87 173h232M87 287h232M203 65v108M203 287v108M67 230h272"/><path d="M67 221h272M67 239h272" class="art-route"/><g transform="rotate(18 343 289)"><rect x="301" y="182" width="83" height="100" rx="30" class="art-paddle"/><path d="M333 282v79h20v-79"/></g><circle cx="368" cy="129" r="25" class="art-ball"/><circle cx="360" cy="122" r="3"/><circle cx="379" cy="132" r="3"/><circle cx="362" cy="143" r="3"/></g>'
  };
  const role = document.body.dataset.facet;
  const heading = `<p class="role-eyebrow">${index} <span>${personTitle}</span></p><h1 id="role-title">${title}</h1><p class="role-lead">${summary}</p>`;
  const tags = `<ul class="role-tags">${config.tags.map(t=>`<li>${t}</li>`).join('')}</ul>`;
  const read = '<a class="role-read" href="#practice">この側面を読む <span aria-hidden="true">↓</span></a>';
  const art = `<figure class="role-art"><span class="role-art-word" aria-hidden="true">${config.word}</span><svg viewBox="0 0 480 470" role="img" aria-label="${config.caption}"><circle cx="240" cy="235" r="220" class="art-disc"/><g class="art-lines">${illustrations[role]}</g></svg><figcaption>${config.caption}</figcaption></figure>`;
  const hero = {
    founder: `<section class="role-hero founder-spread" aria-labelledby="role-title"><div>${heading}${read}</div><div class="founder-route"><p>RONSHOAL LLC / MANAGEMENT</p><div class="route-countries"><span>MY<small>暮らす拠点</small></span><b aria-hidden="true">↔</b><span>JP<small>事業の拠点</small></span></div><div class="founder-pillars"><span>医療関連事業</span><span>AI事業</span></div><p class="route-note">判断する人と、実行を支える仕組み。<br>距離を隔てて、事業を動かす。</p></div><div class="hero-foot">${tags}<p>BUSINESS / PEOPLE / SYSTEMS</p></div></section>`,
    maker: `<section class="role-hero maker-workbench" aria-labelledby="role-title"><div>${heading}${tags}${read}</div><div class="maker-console"><div class="console-bar"><span aria-hidden="true">● ● ●</span><span>SEJIMA / WORKBENCH</span></div>${art}<div class="console-steps"><span>01 DESIGN</span><span>02 BUILD</span><span>03 RUN</span></div></div></section>`,
    researcher: `<section class="role-hero research-notebook" aria-labelledby="role-title"><div><p class="notebook-label">RESEARCH NOTES / 研究の背景</p>${heading}${read}</div><aside class="research-record"><p>ACADEMIC BACKGROUND</p><h2>修士<span>（医科学）</span></h2><dl><dt>学びの場</dt><dd>奈良県立医科大学大学院</dd><dt>研究対象</dt><dd>子どもの腸内細菌</dd><dt>まとめたもの</dt><dd>研究を論文に</dd></dl><p class="record-note">身体を、条件と関係性から見つめる。</p></aside><div class="hero-foot">${tags}<p>OBSERVATION / RELATIONSHIPS / LIFE</p></div></section>`,
    athlete: `<section class="role-hero athlete-court" aria-labelledby="role-title"><div><p class="court-label">PLAY / KNOW / CONTINUE</p>${heading}${tags}<div class="court-actions"><a href="#practice">プレーヤーとして ↓</a><a href="#work">競技を知る入口 ↓</a></div></div>${art}</section>`
  }[role];
  const perspectives = {
    founder: `<section class="role-perspective founder-editorial" aria-labelledby="perspective-title"><p class="role-eyebrow">MANAGEMENT / 二つの事業をつなぐ</p><h2 id="perspective-title">仕事の現場と、<br>仕組みの現場を見つめる。</h2><div class="perspective-columns"><article><span>01 / HEALTHCARE</span><h3>医療関連事業</h3><p>健診プラスでは、訪問型の労災二次健診を扱っています。健康に関わる事業の入口を、会社の公式サイトで紹介しています。</p></article><article><span>02 / AI & SYSTEMS</span><h3>AI事業</h3><p>AIの導入支援やシステム開発に加え、自社でもAI社員システムを利用。事業で使う仕組みを、自社のメディア運営でも実践しています。</p></article></div><p class="perspective-note">実際の事業内容と相談の窓口は、この下の公式ページからご覧いただけます。</p></section>`,
    maker: `<section class="role-perspective maker-process" aria-labelledby="perspective-title"><p class="role-eyebrow">HOW I MAKE / 制作の視点</p><h2 id="perspective-title">使う場面から、<br>運用する日々まで。</h2><ol class="process-rail"><li><span>01 / DESIGN</span><h3>使う人の一日を考える。</h3><p>更新する人、運用する人、受け取る人。必要な画面と情報の流れを、ひとつの仕組みとして考える。</p></li><li><span>02 / BUILD</span><h3>動く形にする。</h3><p>業務基盤、Webサービス、情報の導線。アイデアを説明するだけでなく、実際に使える形へ実装する。</p></li><li><span>03 / RUN</span><h3>使い続けることを考える。</h3><p>つくった後の日常へ、仕組みを戻す。見た目とともに、更新や運用の継続性を考える。</p></li></ol></section>`,
    researcher: `<section class="role-perspective research-lens" aria-labelledby="perspective-title"><div><p class="role-eyebrow">A RESEARCHER'S VIEW / 研究から続く視点</p><h2 id="perspective-title">小さな世界から、<br>暮らしを見つめる。</h2><p>子どもの腸内細菌を研究した経験を出発点に、健康長寿を人生のテーマとして考えています。仕事、運動、食事、家族。生活のなかで起こる変化にも、条件や関係性を見つめる視点をつないでいます。</p><ul class="research-keywords"><li>観察する</li><li>関係を考える</li><li>結論を急がない</li></ul></div>${art}</section>`,
    athlete: `<section class="role-perspective athlete-values" aria-labelledby="perspective-title"><p class="role-eyebrow">ON & OFF THE COURT / 続けるために</p><h2 id="perspective-title">勝敗とともに、<br>大切にしていること。</h2><div class="perspective-columns"><article><span>01 / PLAY</span><h3>遊びと、仲間。</h3><p>相手と向き合い、一球ごとに反応する。考えることの多い日々のなかに、コートで身体を動かす時間を持つ。</p></article><article><span>02 / CONTINUE</span><h3>長く楽しめる身体。</h3><p>スポーツを健康長寿の一部として捉える。勝敗だけに限らず、長く楽しめること、続けられることも大切にする。</p></article></div></section>`
  }[role];
  document.body.classList.add('is-role');
  document.body.style.setProperty('--role-color', config.color);
  document.body.style.setProperty('--role-wash', config.wash);
  main.className = 'role-page';
  main.innerHTML = `${hero}
    <nav class="role-toc" aria-label="このページの目次"><a href="#practice">01 背景と考え方</a><a href="#work">02 具体的な取り組み</a><a href="#connections">03 ほかの側面と</a></nav>
    <section class="role-intro" id="practice" aria-labelledby="practice-title"><div><p class="role-eyebrow">01 / BACKGROUND & PRACTICE</p><h2 id="practice-title">${config.phrase}</h2></div><p>${config.introduction}</p></section>
    ${perspectives}<section class="role-work" id="work" aria-labelledby="work-title"><div class="role-section-head"><p class="role-eyebrow">02 / EXPLORE</p><h2 id="work-title">${config.workTitle}</h2></div><div class="role-work-grid">${config.works.map(([tag,heading,body,url,cta,type],i)=>`<article class="role-work-card"><div class="role-card-art">${icon(type)}<span aria-hidden="true">0${i+1}</span></div><p class="role-card-tag">${tag}</p><h3>${heading}</h3><p class="role-card-body">${body}</p><a href="${url}"${url.startsWith('https:')?' target="_blank" rel="noopener noreferrer"':''}>${cta}<span aria-hidden="true">↗</span></a></article>`).join('')}</div></section>
    <section class="role-connections" id="connections" aria-labelledby="connections-title"><p class="role-eyebrow">03 / ONE LIFE</p><span class="role-kanji" aria-hidden="true">${config.kanji}</span><h2 id="connections-title">${config.closeTitle}</h2><p>${config.closeBody}</p><div class="role-related">${config.related.map(([text,r])=>`<a href="${link(r)}">${text}<span aria-hidden="true">→</span></a>`).join('')}</div></section>
    <div class="role-other"><p class="role-eyebrow">SIX FACETS, ONE LIFE</p><h2>ほかの側面を、読む。</h2></div>`;
  details.classList.add('role-details');
  document.querySelector('.role-intro').after(details);
  main.append(nav);
  // Keep Japanese clauses together; avoid stranding an ending or particle.
  for (const heading of main.querySelectorAll('h2')) {
    heading.innerHTML = heading.innerHTML.split(/<br\s*\/?>/i).map(line =>
      line.includes('、') ? line.split(/(?<=、)/).map(phrase =>
        `<span class="role-heading-phrase">${phrase}</span>`).join('<wbr>') : line
    ).join('<br>');
  }
})();
