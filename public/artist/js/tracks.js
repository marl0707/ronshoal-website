(() => {
  const tracks = {
    "kaisatsu-haguruma": {
      no: "01", title: "改札歯車", duration: "03:04", file: "audio/kaisatsu-haguruma.mp3",
      intro: "朝の改札は、誰の事情も知らない顔で人を飲み込む。男は通り抜けるたび、どこか大切な部品を落としてきた気がしていた。ポケットには昨夜拾った小さな歯車。駅員に渡すべきか、心臓の代わりに持っておくべきか迷っているうち、電車は来た。扉が閉まる寸前、隣の女が言った。「それ、きっとあなたのじゃない」。男はうなずいた。自分のものじゃないから、まだ歩けるのだと思った。改札は何も言わず、彼だけを先へ運んだ。",
      tagline: "改札は通過点で、心臓は通行証ではない。",
      words: "同調 / 体温 / 交差点", texture: "acoustic guitar / bass", cover: "art/covers/kaisatsu-haguruma.png"
    },
    "osoneosooki": {
      no: "02", title: "osoneosooki", duration: "03:03", file: "audio/osoneosooki.mp3",
      intro: "午前三時のキッチンでは、コーヒーだけが正しい時間を知っている。彼は冷蔵庫の灯りを浴びながら、誰にも頼まれていない反省会を続けていた。昼に眠る人間は怠け者だと、昔の自分は言ったかもしれない。けれど月は、勤務表を見ない。窓の外で新聞配達のバイクが通り過ぎ、世界がそろそろ朝のふりを始める。彼はカップを洗わずに置いた。明日の自分に、少しだけ話を引き継ぐために。朝はいつも、少し遅れて彼を許した。",
      tagline: "夜更かしは罪じゃない。時計に謝る必要もない。",
      words: "時差 / 月明かり / コーヒー", texture: "slap bass / Rhodes", cover: "art/covers/osoneosooki.png"
    },
    "itonami": {
      no: "03", title: "itonami", duration: "03:23", file: "audio/itonami.mp3",
      intro: "シンクのマグカップは三つ。二人暮らしなら一つ多い。彼女はそれを見ても、何も聞かなかった。長く続く生活には、聞かないほうがいい質問がある。休日の予定はまた合わず、冷めたピザは電子レンジの中で二度目の人生を待っている。ふたりは同じテーブルで別々の画面を見た。それでも、彼が砂糖を二つ入れることを彼女は知っていた。大事件は起きない。だからこそ、今夜はちゃんと終わらない。湯気だけが、二人のあいだをまっすぐ上がった。",
      tagline: "生活は、映画にならないから長い。",
      words: "生活 / 平熱 / マグカップ", texture: "electric piano / trumpet", cover: "art/covers/itonami.png"
    },
    "migi-e-narae-march": {
      no: "04", title: "右へならえ行進曲", duration: "03:03", file: "audio/migi-e-narae-march.mp3",
      intro: "全員が右を向いた瞬間、ひとりだけ左へ歩く人がいた。迷子ではない。彼は自分の影と待ち合わせをしていた。学校では協調性と呼ばれるものを習い、会社では空気と呼ばれるものに遅れない訓練をした。どちらも便利だった。ただ、ときどき息ができなくなる。交差点で信号が変わる。みんなが進む。彼だけが一歩引く。すると影が先に笑った。行進は続く。列の外にも、拍子はある。誰も気づかなかったが、彼の足元でリズムが変わった。",
      tagline: "列を外れると、影が先に手を振る。",
      words: "同調圧力 / 逸脱 / 行進", texture: "heavy guitar / drums", cover: "art/covers/migi-e-narae-march.png"
    },
    "nero": {
      no: "05", title: "NERO", duration: "02:51", file: "audio/nero.mp3",
      intro: "終電を逃した男は、ネクタイを外してポケットにしまった。街は彼に自由をくれたわけじゃない。ただ、帰り方を忘れていただけだ。バーの鏡には、少し疲れた知らない男が映っている。彼はその男に乾杯した。路地裏の看板は一文字だけ消えていて、店の名前が何なのかわからない。それが妙に安心だった。正しい場所へ帰れない夜には、間違った場所でしか会えない自分がいる。朝まで踊る理由なら、それで十分だった。夜明けはまだ、彼を急かさなかった。",
      tagline: "帰れない夜は、少しだけ自由に見える。",
      words: "路地裏 / 遊び場 / 揺らぎ", texture: "funk bass / guitar", cover: "art/covers/nero.png"
    },
    "toothbrush-colors": {
      no: "06", title: "歯ブラシ色違い", duration: "03:40", file: "audio/toothbrush-colors.mp3",
      intro: "洗面台の青い歯ブラシは、昨日から立ったままだった。持ち主が帰らないことを知っているのは、たぶんそれと排水口だけ。彼は歯を磨きながら、もう一本の色を見ないようにした。見なければ、物はただの物でいられる。けれど水を止めると、部屋は急に静かになった。窓の外では誰かがゴミを出し、朝は何事もなかったように始まる。彼は二本の歯ブラシをそのままにした。さよならは、片づけるより先に来ることがある。鏡には、知らない朝の顔が映っていた。",
      tagline: "残ったものほど、帰る場所を知っている。",
      words: "不在 / 洗面台 / 朝", texture: "piano / acoustic guitar", cover: "art/covers/toothbrush-colors.png"
    },
    "idenshi": {
      no: "07", title: "idenshi", duration: "03:11", file: "audio/idenshi.mp3",
      intro: "冷蔵庫の奥で、賞味期限の近いヨーグルトが家族会議を始めていた。議題は「誰が最後に食べるか」。誰も答えない。私はテーブルの端で、妻の笑い声と、子どもの宇宙の話を聞いている。会話は噛み合わないのに、夕食だけは同じ時間に始まる。スプーンを持ち、ヨーグルトのふたを開けた。中には小さな銀河みたいな渦があった。意味なんてなくていい、と誰かが言った気がした。家族はたいてい説明できない。説明できないまま、同じ冷蔵庫を開ける。",
      tagline: "家族は、だいたい説明できない。",
      words: "家族 / 宇宙 / 遺伝子", texture: "synth / slow bass", cover: "art/covers/idenshi.png"
    },
    "tefuda": {
      no: "08", title: "tefuda", duration: "03:41", file: "audio/tefuda.mp3",
      intro: "配られたカードを見た男は笑った。負けそうだったからではない。勝てそうな顔をするのが、いちばん退屈だと知っていた。隣の女は煙草を吸わないのに、煙草を吸う人みたいに指を動かした。テーブルの上には、読み切れない表情と、使い道のない強気が並んでいる。彼は一枚を伏せた。ブラフかもしれないし、本心かもしれない。どちらでもよかった。人生は配り直されない。だから悪い手札ほど、次の一手を考える価値がある。それだけでよかった。",
      tagline: "悪い手札ほど、話は面白くなる。",
      words: "カード / 覚悟 / オールイン", texture: "wah guitar / brass", cover: "art/covers/tefuda.png"
    }
  };
  const id = new URLSearchParams(location.search).get("track");
  const track = tracks[id] || tracks["kaisatsu-haguruma"];
  document.title = `${track.title} | 瀬島和樹 — KAZUKI SEJIMA`;
  document.querySelector("#number").textContent = track.no;
  document.querySelector("#title").textContent = track.title;
  document.querySelector("#duration").textContent = `${track.duration} / KEN9KAI`;
  document.querySelector("#intro").textContent = track.intro;
  document.querySelector("#tagline").textContent = track.tagline;
  const cover = document.querySelector("#cover");
  cover.src = track.cover;
  cover.alt = `${track.title} のイメージジャケット`;
  const audio = document.querySelector("#audio");
  audio.src = track.file;
  const lyricsPanel = document.querySelector("#lyricsPanel");
  const lyrics = document.querySelector("#lyrics");
  const blocks = window.TRACK_LYRICS?.[id] || [];
  if (blocks.length) {
    for (const { text } of blocks) {
      const block = document.createElement("section");
      block.className = "lyric-block";
      const body = document.createElement("p");
      body.className = "lyric-text";
      body.textContent = text;
      block.append(body);
      lyrics.append(block);
    }
  } else {
    lyrics.textContent = "歌詞データを準備中です。";
  }
  const setPlaying = (playing) => {
    cover.closest(".cover").classList.toggle("is-playing", playing);
    lyricsPanel.classList.toggle("is-visible", playing);
    lyricsPanel.setAttribute("aria-hidden", String(!playing));
  };
  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => setPlaying(false));
})();
