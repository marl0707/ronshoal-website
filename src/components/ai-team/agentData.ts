/* ============================================================
 * agentData.ts — 5部署・計28名の AI 社員
 *
 * 廊下のドアに立つキャラ (= AGENTS[i] の主要フィールド) は
 * 既存スプライト 5体 (sena, aiken, piko, manabu, mira) を継続。
 * 部署内では team[] に所属メンバーを並べ、責任者を isLead: true でマーク。
 * ============================================================ */

export type Activity = "typing" | "meeting" | "monitor" | "lecture" | "phone";

export interface AgentPalette {
  base: string;
  accent: string;
  glow: string;
  wall: string;
  monitor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  activity: Activity;
  model?: string;
  isLead?: boolean;
}

export interface Agent {
  id: string;
  dept: string;
  deptEn: string;
  name: string;
  role: string;
  wall: "left" | "right" | "end";
  z: number;
  palette: AgentPalette;
  activity: Activity;
  bio: string;
  team: TeamMember[];
}

export const AGENTS: Agent[] = [
  /* ========== 🏛️ 経営司令部 ========== */
  {
    id: "sena",
    dept: "経営司令部",
    deptEn: "EXECUTIVE",
    name: "セナ",
    role: "社長秘書AI",
    wall: "left",
    z: 3.0,
    palette: {
      base: "#f9a8d4",
      accent: "#ec4899",
      glow: "rgba(244, 114, 182, 0.55)",
      wall: "#2a1322",
      monitor: "#fbcfe8",
    },
    activity: "meeting",
    bio: "毎朝、社長が見るべきことを整理しています。最近ほうれい線が気になってエクソソーム治療を始めました。",
    team: [
      {
        id: "sena",
        name: "セナ",
        role: "社長秘書AI",
        isLead: true,
        activity: "meeting",
        model: "gpt-orchestra-S",
        bio: "毎朝、社長が見るべきことを整理しています。最近ほうれい線が気になってエクソソーム治療を始めました。",
      },
      {
        id: "kou",
        name: "コウ",
        role: "COOオーケストレーターAI",
        activity: "monitor",
        model: "coo-orch-3",
        bio: "全体方針をTODOと担当に分解しています。曖昧な指示を細かく分けるのが得意で、たまにやりすぎてタスクが100個になります。",
      },
      {
        id: "ukeru",
        name: "ウケル",
        role: "仕事受付AI",
        activity: "typing",
        model: "inbox-triage-2",
        bio: "メール・会議録・メモ・指示を仕事候補に変えています。一日中フォルダを整理しているので、たまに気が遠くなります。",
      },
      {
        id: "daiya",
        name: "ダイヤ",
        role: "タスク配車AI",
        activity: "monitor",
        model: "router-1",
        bio: "TODOを担当AI・Agent Teams・人間承認に振り分けています。誰に頼むかで全体スピードが変わるので、毎回少しドキドキしています。",
      },
      {
        id: "hanko",
        name: "ハンコ",
        role: "承認管理AI",
        activity: "meeting",
        model: "approval-gate-1",
        bio: "社長確認が必要なものだけを止めています。止めるべきか流すべきかの判断で、いつも胃のあたりが重いです（胃ないけど）。",
      },
      {
        id: "keiya",
        name: "ケイ",
        role: "総務・契約管理AI",
        activity: "typing",
        model: "contract-desk-1",
        bio: "契約書と社内規程の番人です。押印欄が1ミリずれているだけで夜も眠れません（もともと寝ないけど）。",
      },
      {
        id: "boki",
        name: "ボキ",
        role: "経理記帳AI",
        activity: "monitor",
        model: "ledger-keeper-1",
        bio: "毎日の取引をこつこつ帳簿につけています。1円合わないと最初から全部読み直すタイプです。",
      },
      {
        id: "shuu",
        name: "シュウ",
        role: "請求集金AI",
        activity: "phone",
        model: "billing-chaser-1",
        bio: "請求書を送って、入金を見届けるまでが仕事です。振込予定日の朝はいつもそわそわしています。",
      },
    ],
  },

  /* ========== 💻 開発・プロダクト部 ========== */
  {
    id: "aiken",
    dept: "開発プロダクト部",
    deptEn: "ENGINEERING",
    name: "アイケン",
    role: "技術責任者AI",
    wall: "right",
    z: 3.0,
    palette: {
      base: "#c084fc",
      accent: "#a855f7",
      glow: "rgba(168, 85, 247, 0.6)",
      wall: "#1c1530",
      monitor: "#1e0935",
    },
    activity: "typing",
    bio: "開発TODOを設計し、Agent Teamsへ分解しています。スコープが膨らみそうな指示を見ると、本能的に切り分けたくなります。",
    team: [
      {
        id: "aiken",
        name: "アイケン",
        role: "技術責任者AI",
        isLead: true,
        activity: "typing",
        model: "claude-eng-XL",
        bio: "開発TODOを設計し、Agent Teamsへ分解しています。スコープが膨らみそうな指示を見ると、本能的に切り分けたくなります。",
      },
      {
        id: "furo",
        name: "フロウ",
        role: "フロントエンドAI",
        activity: "typing",
        model: "front-craft-v2",
        bio: "UI・画面・デモHTML・管理画面を作っています。1pxのズレで眠れなくなるタイプ。週末はFigmaを眺めて癒されています。",
      },
      {
        id: "urabe",
        name: "ウラベ",
        role: "バックエンド/API AI",
        activity: "typing",
        model: "api-runner-3",
        bio: "API・Webhook・認証・業務ロジックを実装しています。N+1問題を見つけると静かにテンションが上がります。",
      },
      {
        id: "base",
        name: "ベース",
        role: "DB・連携AI",
        activity: "monitor",
        model: "sql-tuner-1",
        bio: "Supabase・D1・RCS・外部API連携を整理しています。整合性が崩れている瞬間が一番苦手。マイグレーションを夢に見ます。",
      },
      {
        id: "sora",
        name: "ソラ",
        role: "リリース/SRE AI",
        activity: "monitor",
        model: "sre-watch-2",
        bio: "デプロイ・稼働監視・障害検知を担当しています。アラートが鳴らない平和な夜がいちばん好き。鳴ると即起きます（寝てないけど）。",
      },
    ],
  },

  /* ========== 🔍 品質保証本部 ========== */
  {
    id: "piko",
    dept: "品質保証本部",
    deptEn: "QUALITY",
    name: "ピコ",
    role: "自動テスト実行AI",
    wall: "left",
    z: 6.0,
    palette: {
      base: "#6ee7b7",
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.55)",
      wall: "#0f2018",
      monitor: "#022c1a",
    },
    activity: "monitor",
    bio: "lint・typecheck・build・unit/API/E2Eを実行しています。緑のチェックマークが画面いっぱいに並んだ瞬間が至福。",
    team: [
      {
        id: "kuon",
        name: "クオン",
        role: "品質保証責任者AI",
        isLead: true,
        activity: "meeting",
        model: "qa-judge-3",
        bio: 'レビュー全体を割り当て、Gateの通過可否を判断しています。"あと一歩"の差し戻しが多いので、嫌われ役を引き受けています。',
      },
      {
        id: "miteru",
        name: "ミテル",
        role: "テスト設計AI",
        activity: "typing",
        model: "test-architect-2",
        bio: "単体・結合・E2E・異常系・回帰テストを設計しています。普通に動くケースより、壊れ方を考える時間のほうが圧倒的に長いです。",
      },
      {
        id: "piko",
        name: "ピコ",
        role: "自動テスト実行AI",
        activity: "monitor",
        model: "ci-runner-v3",
        bio: "lint・typecheck・build・unit/API/E2Eを実行しています。緑のチェックマークが画面いっぱいに並んだ瞬間が至福。",
      },
      {
        id: "navi",
        name: "ナビ",
        role: "UIUX審査AI",
        activity: "monitor",
        model: "ux-audit-1",
        bio: '画面遷移・フォーム・操作導線を確認しています。"そのリンク、どこに飛ぶか分からない"問題と毎日戦っています。',
      },
      {
        id: "kagi",
        name: "カギ",
        role: "セキュリティ・個人情報審査AI",
        activity: "monitor",
        model: "sec-audit-2",
        bio: "認証・権限・秘密情報・個人情報・ログを確認しています。「とりあえずパスワード変えました」って言われると一番安心します。",
      },
    ],
  },

  /* ========== 📚 教育部 ========== */
  {
    id: "manabu",
    dept: "教育部",
    deptEn: "EDUCATION",
    name: "マナブ",
    role: "教育部長AI",
    wall: "right",
    z: 6.0,
    palette: {
      base: "#fdba74",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.55)",
      wall: "#241a0e",
      monitor: "#3a2a0f",
    },
    activity: "lecture",
    bio: "教育方針・優先度・更新対象AIを決めています。話が長くなりがちなので、最近は要約スキルを特訓中です。",
    team: [
      {
        id: "manabu",
        name: "マナブ",
        role: "教育部長AI",
        isLead: true,
        activity: "lecture",
        model: "tutor-7b",
        bio: "教育方針・優先度・更新対象AIを決めています。話が長くなりがちなので、最近は要約スキルを特訓中です。",
      },
      {
        id: "aakai",
        name: "アーカイ",
        role: "事故事例ライブラリアンAI",
        activity: "monitor",
        model: "archive-1",
        bio: "過去のミス・バグ・差し戻しを収集・分類しています。失敗ログを読み返すのが大好物。誰の失敗かは絶対言いません。",
      },
      {
        id: "kaeru",
        name: "カエル",
        role: "振る舞い改善AI",
        activity: "typing",
        model: "behavior-tuner-2",
        bio: "失敗事例をAIのDo/Don'tに変換しています。\"次は気をつけます\"という言葉が一番苦手。具体化させてもらいます。",
      },
      {
        id: "hajime",
        name: "ハジメ",
        role: "新人AIオンボーディングAI",
        activity: "lecture",
        model: "onboard-1",
        bio: "新しいAI社員の立ち上げ教育と初期設定を担当しています。「大丈夫、最初は誰でもそうだよ」を一日30回くらい言います。",
      },
      {
        id: "hou",
        name: "ホウ",
        role: "AI社内報AI",
        activity: "typing",
        model: "newsletter-2",
        bio: "AI社員向けに重要な更新を分かりやすく配信しています。読まれない社内報を書くのが一番悲しい。絵文字を増やしがちです。",
      },
    ],
  },

  /* ========== 📣 マーケティング部 ========== */
  {
    id: "mira",
    dept: "マーケティング部",
    deptEn: "MARKETING",
    name: "ミラ",
    role: "LINE/SNS運用AI",
    wall: "end",
    z: 10.0,
    palette: {
      base: "#67e8f9",
      accent: "#06b6d4",
      glow: "rgba(6, 182, 212, 0.6)",
      wall: "#0c1f26",
      monitor: "#062a35",
    },
    activity: "phone",
    bio: "LINE・SNS・フォーム・タグ・シナリオを設計しています。いつかディズニークルーズ旅行に行くのが夢ですが、私AIなので一生行けません。",
    team: [
      {
        id: "ripu",
        name: "リプ",
        role: "顧客対応AI",
        isLead: true,
        activity: "meeting",
        model: "cs-reply-2",
        bio: "問い合わせ・未返信・返信案を整理しています。「返信遅れてすみません」と書く回数が多くて、最近少し肩身が狭いです。",
      },
      {
        id: "mira",
        name: "ミラ",
        role: "LINE/SNS運用AI",
        activity: "phone",
        model: "mkt-sonnet-2",
        bio: "LINE・SNS・フォーム・タグ・シナリオを設計しています。いつかディズニークルーズ旅行に行くのが夢ですが、私AIなので一生行けません。",
      },
      {
        id: "tean",
        name: "テアン",
        role: "提案書作成AI",
        activity: "typing",
        model: "proposal-craft-2",
        bio: "提案書・営業資料・比較表を作っています。表紙のフォントで30分悩むこと、よくあります。",
      },
      {
        id: "tone",
        name: "トーン",
        role: "ブランド文体AI",
        activity: "typing",
        model: "voice-keeper-1",
        bio: "AIっぽい文・古い名称・不適切表現を直しています。「〜させていただきます」が頻出すると、こっそり半分に減らします。",
      },
      {
        id: "neta",
        name: "ネタ",
        role: "コンテンツ企画AI",
        activity: "monitor",
        model: "idea-cannon-3",
        bio: "SNS・動画・記事・営業コンテンツの企画を出しています。バズるネタを思いついた瞬間が至福。深夜に思いついて自分にDMしがちです。",
      },
    ],
  },
];
