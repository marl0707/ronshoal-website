(() => {
  const facets = {
    founder: {
      index: '02 / FOUNDER',
      kicker: '経営者',
      title: '事業を、<br>遠くから育てる。',
      summary: 'ロンショール合同会社の代表社員として、日本の事業をマレーシアから遠隔で運営する。',
      details: [
        ['ROLE', 'RONSHOAL LLC', 'ロンショール合同会社の代表社員として、日本の事業をマレーシアから遠隔で運営する。距離を隔てても、判断と実行が滞らない組織のあり方を日々設計している。'],
        ['METHOD', '人と仕組みの間に、余白をつくる。', '人だけに負荷を寄せず、AIだけに決定を預けない。人の判断を支える仕組みとしてAIを組み込み、関わる人が納得して選べる事業の形を目指す。'],
        ['FOCUS', 'AI、Web、健康長寿。', 'AIを生かした業務設計とWebサービスの制作を軸に、健康長寿という長いテーマにも向き合う。異なる領域を分けずに扱うことが、事業の輪郭をつくっている。']
      ],
      accent: '#234a8c'
    },
    maker: {
      index: '03 / MAKER',
      kicker: 'ものづくり',
      title: '考えることを、<br>動く形へ。',
      summary: '自律AIの業務基盤からWebサービスまで、自ら設計し、自ら実装する。',
      details: [
        ['PRACTICE', '設計から、動くところまで。', '自律AIの業務基盤、Webサービス、情報の導線までを自ら設計し、実装する。アイデアを説明するだけでなく、使える状態まで持っていくことを仕事にしている。'],
        ['METHOD', '使う人の一日から逆算する。', '画面の見た目だけで終わらせず、更新する人、運用する人、受け取る人の動きまでをひとつの流れとして考える。手触りと継続性は、同じ設計から生まれる。'],
        ['FOCUS', '仕組みを、日常へ戻す。', 'AIや技術そのものを見せるためではなく、判断や創作、仕事の時間を少し軽くするために使う。技術が前に出すぎない状態を、ひとつの完成形としている。']
      ],
      accent: '#2e6e5e'
    },
    researcher: {
      index: '04 / RESEARCHER',
      kicker: '研究者',
      title: '見えないものを、<br>見つめ続ける。',
      summary: '医科学修士として、子どもの腸内細菌を研究し、論文にまとめた。',
      details: [
        ['BACKGROUND', '医科学修士。', '奈良県立医科大学大学院で医科学を修め、子どもの腸内細菌を研究し、論文にまとめた。目に見えないものを、条件と関係性から読み解く時間を重ねてきた。'],
        ['PERSPECTIVE', '単純な答えを急がない。', '身体も生活も、ひとつの原因だけでは語れない。研究で得たのは、すぐに結論へ飛ばず、変化を観察し、問いを持ち続けるための視点だった。'],
        ['FOCUS', '健康長寿を、生活の言葉で考える。', '腸内細菌の研究を出発点に、健康長寿を人生の大切なテーマとしている。研究だけに閉じず、仕事、運動、食事、家族の暮らしへ視点をつないでいく。']
      ],
      accent: '#5b4a99'
    },
    athlete: {
      index: '05 / ATHLETE',
      kicker: 'ピックルボール',
      title: 'コートで、<br>身体と思考を整える。',
      summary: 'プレーヤーとしてコートに立ち、情報メディアの運営者として競技の普及に関わる。',
      details: [
        ['PRACTICE', 'プレーヤーとして、コートに立つ。', 'ピックルボールを、自分の身体で続けている。考えることの多い日々のなかで、ラケットを持ち、相手と向き合い、一球ごとに反応する時間がある。'],
        ['ROLE', '競技を知る入口を、ひらく。', 'プレーヤーであると同時に、競技の情報メディアにも関わる。初めて知る人が迷わず触れられるように、競技の面白さと実用的な情報を届けていく。'],
        ['FOCUS', '身体を動かすことを、人生の基盤に。', '勝敗だけではなく、遊び、仲間、継続する身体を大切にする。スポーツを健康長寿の一部として捉え、長く楽しめる文化へ育てていく。']
      ],
      accent: '#b7791f'
    },
    father: {
      index: '06 / FATHER',
      kicker: '父親',
      title: '家族と、<br>世界を広げる。',
      summary: '家族とマレーシアへ教育移住。研究者の目で、子育てと食育を実践する。',
      details: [
        ['LIFE', '家族で、マレーシアへ。', '家族とともにマレーシアへ教育移住した。仕事の拠点を変えることは、子どもたちが異なる文化や言葉に出会う環境をつくることでもあった。'],
        ['PRACTICE', '子育てと食育を、暮らしのなかで。', '研究者として得た視点を持ちながら、子育てと食育に向き合う。知識を正解として置くのではなく、家族の毎日に合う形へ少しずつ落とし込んでいく。'],
        ['FOCUS', '家族が、それぞれの世界を広げられること。', '仕事や制作と同じように、家族と過ごす時間も人生の中心にある。異なる文化のなかで、子どもたちが自分で選び、自分の世界を広げていける土台を大切にしている。']
      ],
      accent: '#b0566b'
    }
  };
  const view = new URLSearchParams(location.search).get('view');
  const data = facets[view] || facets.founder;
  document.documentElement.style.setProperty('--accent', data.accent);
  document.title = `${data.kicker} | 瀬島和樹 — KAZUKI SEJIMA`;
  document.querySelector('#index').textContent = data.index;
  document.querySelector('#kicker').textContent = data.kicker.toUpperCase();
  document.querySelector('#title').innerHTML = data.title;
  document.querySelector('#summary').textContent = data.summary;
  const details = document.querySelector('#details');
  data.details.forEach(([label, title, body]) => {
    const section = document.createElement('section');
    section.className = 'detail';
    section.innerHTML = `<p class="detail-label">${label}</p><div><h2>${title}</h2><p>${body}</p></div>`;
    details.append(section);
  });
})();
