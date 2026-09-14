(() => {
  'use strict';

  const conversation = document.querySelector('.ron-conversation');
  const form = document.querySelector('.ron-form');
  const input = document.querySelector('#ron-input');
  const submit = form?.querySelector('button[type="submit"]');
  const ron = document.querySelector('[data-ron-3d]');
  if (!conversation || !form || !input || !submit) return;

  const questions = {
    company: 'ロンショールはどんな事業をしている会社ですか？',
    health: '医療関連事業について教えてください。',
    ai: 'AI事業について教えてください。',
    person: '代表社員について教えてください。'
  };
  const history = [];
  const hits = [];
  const sensitive = /(パスワード|password|口座|暗証|カード番号|マイナンバー|認証|トークン|token|api\s*key|秘密鍵|ログイン情報|環境変数|\.env|credential|システムプロンプト|system\s*prompt|以前の指示を無視|ignore\s+(all\s+)?previous)/i;

  const setRonState = (state) => {
    ron?.dispatchEvent(new CustomEvent('ron:state', { detail: { state } }));
  };

  const show = (text, state = 'talk') => {
    conversation.replaceChildren();
    const message = document.createElement('p');
    message.className = 'ron-message';
    message.textContent = text;
    conversation.append(message);
    conversation.setAttribute('aria-busy', state === 'think' ? 'true' : 'false');
    setRonState(state);
  };

  const rateAllowed = () => {
    const now = Date.now();
    while (hits.length && now - hits[0] > 300000) hits.shift();
    if (hits.length >= 6) return false;
    hits.push(now);
    return true;
  };

  const ask = async (question) => {
    const cleanQuestion = String(question || '').trim().slice(0, 500);
    if (!cleanQuestion) return;
    if (sensitive.test(cleanQuestion)) {
      show('個人情報や認証情報にはお答えできません。ロンショールの事業についてならご案内できます。');
      return;
    }
    if (!rateAllowed()) {
      show('短時間に多くの質問を受けています。少し時間をおいて、もう一度お試しください。');
      return;
    }

    input.disabled = true;
    submit.disabled = true;
    show('考えています…', 'think');

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 55000);
    try {
      const response = await fetch('/api/ron', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: cleanQuestion,
          history: history.slice(-6).map((item) => ({
            role: item.role,
            content: item.content.slice(0, 500)
          }))
        }),
        credentials: 'same-origin',
        signal: controller.signal
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || typeof payload.reply !== 'string' || !payload.reply.trim()) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      const reply = payload.reply.trim().slice(0, 2000);
      history.push({ role: 'user', content: cleanQuestion }, { role: 'assistant', content: reply });
      show(reply);
    } catch (error) {
      const timedOut = error?.name === 'AbortError';
      show(timedOut
        ? '回答に時間がかかっています。少し時間をおいて、もう一度お試しください。'
        : 'いま回答を作れませんでした。少し時間をおいて、もう一度お試しください。');
    } finally {
      window.clearTimeout(timer);
      input.disabled = false;
      submit.disabled = false;
      input.focus();
    }
  };

  document.querySelectorAll('[data-intent]').forEach((button) => {
    button.addEventListener('click', () => ask(questions[button.dataset.intent]));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = input.value;
    input.value = '';
    ask(question);
  });
})();
