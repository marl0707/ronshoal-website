"use strict";

const form = document.querySelector("#idea-form");
const review = document.querySelector("#review");
const reviewValues = document.querySelector("#review-values");
const sendButton = document.querySelector("#send");
const editButton = document.querySelector("#edit");
const sendStatus = document.querySelector("#send-status");
const success = document.querySelector("#success");
const startedAt = Date.now();
let submission = null;
let sending = false;
const fieldLabels = [
  ["name", "お名前"], ["email", "メールアドレス"],
  ["idea", "作りたいアプリ"], ["users", "使ってほしい人"],
  ["goal", "解決したいこと・実現したいこと"], ["activity", "現在の事業・活動"],
  ["features", "欲しい機能"], ["references", "参考例"],
  ["marketing", "販売・集客"], ["monetization", "収益化の考え"],
  ["integrations", "保存・外部連携"], ["materials", "素材と現在の権利者"],
  ["timing", "希望時期"], ["questions", "相談したいこと"]
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const input of form.querySelectorAll("[required]")) {
    const filled = input.type === "checkbox" ? input.checked : input.value.trim();
    input.setCustomValidity(filled ? "" : "この項目をご確認・ご記入ください。");
  }
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  submission = { requestId: crypto.randomUUID(), startedAt, website: data.get("website") || "", acknowledged: true, policyVersion: "2026-10-07" };
  reviewValues.replaceChildren();
  for (const [key, label] of fieldLabels) {
    const value = key === "monetization" ? data.getAll(key).join("、") : String(data.get(key) || "").trim();
    submission[key] = value;
    if (!value) continue;
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    reviewValues.append(dt, dd);
  }
  form.hidden = true;
  sendStatus.textContent = "";
  review.hidden = false;
  review.focus({ preventScroll: true });
  review.scrollIntoView({ block: "start" });
});

form.addEventListener("input", (event) => {
  if (event.target.matches("[required]")) event.target.setCustomValidity("");
});

editButton.addEventListener("click", () => {
  if (sending) return;
  review.hidden = true;
  form.hidden = false;
  document.querySelector("#idea").focus({ preventScroll: true });
  form.scrollIntoView({ block: "start" });
});

sendButton.addEventListener("click", async () => {
  if (sending || !submission) return;
  sending = true;
  sendButton.disabled = true;
  editButton.disabled = true;
  sendButton.textContent = "送信しています…";
  sendStatus.textContent = "";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 55_000);
  try {
    const response = await fetch("/api/app-co-creation", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission), signal: controller.signal,
    });
    const payload = await response.json();
    if (!response.ok || payload.accepted !== true || typeof payload.receiptId !== "string") {
      if (response.status === 429) throw new Error("rate");
      if (response.status === 400) throw new Error("fields");
      throw new Error("send");
    }
    document.querySelector("#receipt-id").textContent = payload.receiptId;
    review.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
    success.scrollIntoView({ block: "start" });
    form.reset();
    submission = null;
  } catch (error) {
    sendStatus.textContent = error.message === "rate"
      ? "送信が続いているため、時間をおいて再度お試しください。お急ぎの場合は info@ronshoal.com へご連絡ください。"
      : error.message === "fields"
      ? "入力内容と相談条件の確認を見直してください。長時間経過している場合は、内容を控えてページを開き直してください。"
      : "送信完了を確認できませんでした。入力内容は残っています。同じ内容でもう一度お試しいただくか、info@ronshoal.com へご連絡ください。";
  } finally {
    clearTimeout(timer);
    sending = false;
    sendButton.disabled = false;
    editButton.disabled = false;
    sendButton.textContent = "相談内容を送信";
  }
});

form.noValidate = true;
document.querySelector("#review-button").disabled = false;
