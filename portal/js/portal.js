const KEY = "cove-demo-v7";

const seed = {
  users: {
    alex: { name: "Him", other: "jordan" },
    jordan: { name: "Her", other: "alex" },
    both: { name: "Joint", other: null },
    solo: { name: "You", other: null }
  },
  accounts: [
    { id: "a1", owner: "alex", name: "Capital One Checking", last4: "2681", type: "Checking", balance: 2140, shared: false, hidden: false },
    { id: "a2", owner: "jordan", name: "Chase Checking", last4: "0396", type: "Checking", balance: 1880, shared: false, hidden: false },
    { id: "a3", owner: "both", name: "Joint Checking", last4: "4410", type: "Checking", balance: 620, shared: true, hidden: false }
  ],
  txs: [
    { id: "t1", name: "Trader Joe's", amount: 86.20, date: "2026-08-31", cat: "Groceries", type: "personal", payer: "alex", split: 0, paid: true, pending: false, accountId: "a1", notes: "" },
    { id: "t2", name: "Sport Clips", amount: 40, date: "2026-08-31", cat: "Other", type: "personal", payer: "alex", split: 0, paid: true, pending: false, accountId: "a1", notes: "" },
    { id: "t3", name: "Transfer to Savings", amount: 25, date: "2026-08-30", cat: "Other", type: "personal", payer: "alex", split: 0, paid: false, pending: true, accountId: "a1", notes: "" },
    { id: "t4", name: "Costa Vida", amount: 14.17, date: "2026-08-30", cat: "Eating out", type: "personal", payer: "jordan", split: 0, paid: false, pending: true, accountId: "a2", notes: "" }
  ],
  budgets: [
    { name: "Groceries", limit: 800, scope: "shared" }
  ],
  goals: [],
  settled: 0,
  income: [
    { id: "i1", name: "His net pay", amount: 5500, owner: "alex", scope: "personal", recurring: true },
    { id: "i2", name: "Her net pay", amount: 5700, owner: "jordan", scope: "personal", recurring: true }
  ],
  monthly: [
    { id: "m1", name: "Rent", amount: 2650, due: "2026-09-01", paid: false, type: "shared", kind: "bill", owner: "both", payer: "both", split: 50 },
    { id: "m2", name: "WiFi", amount: 65, due: "2026-09-01", paid: false, type: "personal", kind: "bill", owner: "alex", payer: "alex", split: 0 },
    { id: "m3", name: "Mom's Insurance", amount: 60, due: "2026-09-01", paid: false, type: "personal", kind: "bill", owner: "alex", payer: "alex", split: 0 },
    { id: "m4", name: "Phones", amount: 200, due: "2026-09-01", paid: false, type: "personal", kind: "bill", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m5", name: "Boat", amount: 383, due: "2026-09-01", paid: false, type: "personal", kind: "other", owner: "alex", payer: "alex", split: 0 },
    { id: "m6", name: "Car Insurance", amount: 145, due: "2026-09-01", paid: true, type: "shared", kind: "bill", owner: "both", payer: "both", split: 50 },
    { id: "m7", name: "Her Car Payment", amount: 487, due: "2026-09-01", paid: false, type: "personal", kind: "bill", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m8", name: "Mochi Medicine", amount: 200, due: "2026-09-01", paid: false, type: "personal", kind: "health", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m9", name: "His Car Payment", amount: 470, due: "2026-09-01", paid: false, type: "personal", kind: "bill", owner: "alex", payer: "alex", split: 0 },
    { id: "m10", name: "Testosterone", amount: 250, due: "2026-09-01", paid: false, type: "personal", kind: "health", owner: "alex", payer: "alex", split: 0 },
    { id: "m11", name: "Vyvanse", amount: 50, due: "2026-09-01", paid: false, type: "personal", kind: "health", owner: "alex", payer: "alex", split: 0 },
    { id: "m12", name: "Groceries", amount: 800, due: "2026-09-01", paid: false, type: "shared", kind: "other", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m13", name: "Counseling", amount: 80, due: "2026-09-01", paid: false, type: "personal", kind: "health", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m14", name: "Nails", amount: 60, due: "2026-09-01", paid: false, type: "personal", kind: "other", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m15", name: "Dog Food", amount: 50, due: "2026-09-01", paid: false, type: "personal", kind: "other", owner: "alex", payer: "alex", split: 0 },
    { id: "m16", name: "Utilities", amount: 150, due: "2026-09-01", paid: false, type: "personal", kind: "bill", owner: "alex", payer: "alex", split: 0 },
    { id: "m17", name: "Cat care", amount: 50, due: "2026-09-01", paid: false, type: "personal", kind: "other", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m18", name: "Paramount+", amount: 15, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m19", name: "Peacock", amount: 18, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m20", name: "Roku", amount: 17, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m21", name: "Amazon Prime", amount: 16, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m22", name: "Apple Storage (Her)", amount: 3, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m23", name: "Nuuly", amount: 106, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m24", name: "Peloton", amount: 54, due: "2026-09-01", paid: false, type: "personal", kind: "membership", owner: "jordan", payer: "jordan", split: 0 },
    { id: "m25", name: "Apple Music", amount: 11, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 },
    { id: "m26", name: "Apple Storage (His)", amount: 9, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 },
    { id: "m27", name: "Apple Care", amount: 14, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 },
    { id: "m28", name: "TradingView", amount: 15, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 },
    { id: "m29", name: "ChartPrime", amount: 66, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 },
    { id: "m30", name: "Identity IQ", amount: 9, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 },
    { id: "m31", name: "Tesla FSD", amount: 99, due: "2026-09-01", paid: false, type: "personal", kind: "subscription", owner: "alex", payer: "alex", split: 0 }
  ],
  debts: [
    { id: "d1", name: "Robinhood CC", balance: 1200, minimum: 25, extra: 0, original: 1200, owner: "both", type: "Credit card", apr: 22.5 },
    { id: "d2", name: "AF Bed Financing", balance: 400, minimum: 99, extra: 0, original: 400, owner: "both", type: "Loan", apr: 0 },
    { id: "d3", name: "NFM", balance: 971, minimum: 36, extra: 0, original: 971, owner: "both", type: "Loan", apr: 18 },
    { id: "d4", name: "Capital One Savor", balance: 470, minimum: 60, extra: 0, original: 470, owner: "both", type: "Credit card", apr: 28.49 },
    { id: "d5", name: "Scheels", balance: 700, minimum: 25, extra: 0, original: 700, owner: "both", type: "Credit card", apr: 0 },
    { id: "d6", name: "Capital One Venture", balance: 670, minimum: 40, extra: 0, original: 670, owner: "both", type: "Credit card", apr: 28.24 },
    { id: "d7", name: "CareCredit", balance: 2300, minimum: 80, extra: 0, original: 2300, owner: "both", type: "Credit card", apr: 0 },
    { id: "d8", name: "John Loan", balance: 4218, minimum: 60, extra: 0, original: 4218, owner: "both", type: "Loan", apr: 3 },
    { id: "d9", name: "Chase CC", balance: 2000, minimum: 250, extra: 0, original: 2000, owner: "both", type: "Credit card", apr: 26.5 },
    { id: "d10", name: "Upstart Loan", balance: 5650, minimum: 250, extra: 0, original: 5650, owner: "both", type: "Loan", apr: 16 },
    { id: "d11", name: "OneMain Loan", balance: 9300, minimum: 417, extra: 0, original: 9300, owner: "both", type: "Loan", apr: 16.66 },
    { id: "d12", name: "Student Loans", balance: 20000, minimum: 188, extra: 0, original: 20000, owner: "both", type: "Loan", apr: 3 }
  ]
};

const SB_URL = "https://wsvkxhjnrpadiykqravz.supabase.co";
const SB_KEY = "sb_publishable_AYUgvb3OWADQGfjmYHrYBQ_3whxkyi9";
const sb = window.supabase ? window.supabase.createClient(SB_URL, SB_KEY) : null;
let sbUser = null;
let saveTimer = null;
let homeId = null;
let inviteCode = "";

function emptyHousehold() {
  return {
    users: structuredClone(seed.users),
    accounts: [],
    txs: [],
    budgets: [],
    goals: [],
    extraLog: [],
    settled: 0,
    income: [],
    monthly: [],
    debts: []
  };
}

function portalUrl() {
  return window.location.origin + window.location.pathname;
}
function inviteLink() {
  if (!inviteCode) return portalUrl();
  return portalUrl() + "?join=" + encodeURIComponent(inviteCode);
}
function claimSeat() {
  if (!sbUser) return;
  if (!state.members) state.members = {};
  if (state.members[sbUser.id]) {
    user = state.members[sbUser.id];
    return;
  }
  const taken = Object.values(state.members);
  user = taken.includes("alex") ? "jordan" : "alex";
  state.members[sbUser.id] = user;
  save();
}

function load() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return structuredClone(seed);
  try { return JSON.parse(raw); } catch { return structuredClone(seed); }
}
function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  if (!sb || !sbUser) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushCloud, 700);
}

function applyState(next) {
  state = next || emptyHousehold();
  if (!state.users) state.users = structuredClone(seed.users);
  if (!state.extraLog) state.extraLog = [];
  if (!state.goals) state.goals = [];
  if (!state.budgets) state.budgets = [];
  if (!state.monthly) state.monthly = [];
  if (!state.debts) state.debts = [];
  if (!state.income) state.income = [];
  if (!state.txs) state.txs = [];
  if (!state.snapshots) state.snapshots = {};
  bootMonths();
  localStorage.setItem(KEY, JSON.stringify(state));
}

function shiftMonth(ym, delta) {
  const d = new Date(Number(ym.slice(0, 4)), Number(ym.slice(5, 7)) - 1 + delta, 1);
  return monthKey(d);
}
function cloneBooksFrom(src) {
  return {
    monthly: structuredClone(src.monthly || []),
    debts: structuredClone(src.debts || []),
    income: structuredClone(src.income || []),
    accounts: structuredClone(src.accounts || []),
    extraLog: structuredClone(src.extraLog || []),
    settled: src.settled || 0,
    closedAt: new Date().toISOString()
  };
}
function resetPaidFlags() {
  (state.monthly || []).forEach(m => {
    m.paid = false;
    if (m.paidBy) m.paidBy = { alex: false, jordan: false };
  });
  (state.debts || []).forEach(d => { d.minPaid = false; });
}
function bootMonths() {
  if (!state.snapshots) state.snapshots = {};
  const now = monthKey();
  const hasStuff = ((state.monthly || []).length + (state.debts || []).length + (state.income || []).length) > 0;
  if (!state.liveMonth) {
    if (hasStuff) {
      const prev = shiftMonth(now, -1);
      state.liveMonth = prev;
      if (!state.snapshots[prev]) state.snapshots[prev] = cloneBooksFrom(state);
      resetPaidFlags();
      state.liveMonth = now;
    } else {
      state.liveMonth = now;
    }
    return;
  }
  if (now > state.liveMonth) {
    if (!state.snapshots[state.liveMonth]) state.snapshots[state.liveMonth] = cloneBooksFrom(state);
    resetPaidFlags();
    state.liveMonth = now;
  }
}
function viewingClosed() {
  return !!(state.liveMonth && viewMonth !== state.liveMonth && state.snapshots && state.snapshots[viewMonth]);
}
function bag() {
  if (viewingClosed()) return state.snapshots[viewMonth];
  return state;
}
function closeAndRoll(target) {
  if (!state.liveMonth) state.liveMonth = monthKey();
  if (target > state.liveMonth) {
    if (!state.snapshots[state.liveMonth]) state.snapshots[state.liveMonth] = cloneBooksFrom(state);
    resetPaidFlags();
    state.liveMonth = target;
  }
}
function monthBanner() {
  if (!state.liveMonth) return "";
  if (viewMonth === state.liveMonth) {
    return `<p class="note">Live month · ${viewMonthLabel()}. Closed months stay in Financials and the month picker.</p>`;
  }
  if (state.snapshots[viewMonth]) {
    return `<p class="note">Viewing closed ${viewMonthLabel()}. Live month is ${state.liveMonth}. Edits here stay on this snapshot.</p>`;
  }
  return `<p class="note">No snapshot for ${viewMonthLabel()} yet. Showing live books.</p>`;
}

async function pushCloud() {
  if (!sb || !sbUser) return;
  if (homeId) {
    const { error } = await sb.from("homes").update({ data: state, updated_at: new Date().toISOString() }).eq("id", homeId);
    if (error) console.warn("Cove save failed", error.message);
    return;
  }
  const { error } = await sb.from("households").upsert({
    user_id: sbUser.id,
    data: state,
    updated_at: new Date().toISOString()
  });
  if (error) console.warn("Cove save failed", error.message);
}

async function pullCloud(joinCode) {
  if (!sb || !sbUser) return;
  const mem = await sb.from("home_members").select("home_id, homes(id, data, invite_code)").eq("user_id", sbUser.id).maybeSingle();
  if (!mem.error && mem.data && mem.data.homes) {
    homeId = mem.data.home_id;
    inviteCode = mem.data.homes.invite_code || "";
    applyState(mem.data.homes.data);
    return;
  }
  if (joinCode) {
    const joined = await sb.rpc("join_home", { code: joinCode.trim().toLowerCase() });
    if (joined.error) { console.warn(joined.error.message); setAuthMsg(joined.error.message); }
    else {
      homeId = joined.data;
      const again = await sb.from("home_members").select("home_id, homes(id, data, invite_code)").eq("user_id", sbUser.id).maybeSingle();
      if (again.data && again.data.homes) {
        homeId = again.data.home_id;
        inviteCode = again.data.homes.invite_code || "";
        applyState(again.data.homes.data);
        return;
      }
    }
  }
  const old = await sb.from("households").select("data").eq("user_id", sbUser.id).maybeSingle();
  const created = await sb.rpc("create_home");
  if (!created.error && created.data) {
    homeId = created.data;
    const row = await sb.from("homes").select("data, invite_code").eq("id", homeId).maybeSingle();
    inviteCode = (row.data && row.data.invite_code) || "";
    if (old.data && old.data.data && ((old.data.data.monthly || []).length || (old.data.data.debts || []).length)) {
      applyState(old.data.data);
    } else {
      applyState(emptyHousehold());
    }
    await pushCloud();
    return;
  }
  if (old.data && old.data.data) {
    applyState(old.data.data);
  } else {
    applyState(emptyHousehold());
    await sb.from("households").upsert({ user_id: sbUser.id, data: state, updated_at: new Date().toISOString() });
  }
}

function setAuthMsg(text) {
  const el = document.getElementById("authMsg");
  if (el) el.textContent = text || "";
}

function showAuth(on) {
  const gate = document.getElementById("authGate");
  if (gate) gate.hidden = !on;
}

async function bootAuth() {
  if (!sb) { render(); return; }
  const { data } = await sb.auth.getSession();
  sbUser = data.session ? data.session.user : null;
  if (!sbUser) { showAuth(true); return; }
  showAuth(false);
  await pullCloud(new URLSearchParams(location.search).get("join") || "");
  claimSeat();
  render();
}

let state = load();
if (!state.extraLog) state.extraLog = [];
if (!state.goals) state.goals = [];
if (!state.budgets) state.budgets = [];
if (!state.snapshots) state.snapshots = {};
bootMonths();
save();
let user = "alex";
let view = "dashboard";
let expenseFilter = "all";
let shareEdit = null;
let monthEdit = null;
let txEdit = null;
let txTab = "list";
let spendPeriod = "this";
function monthKey(d = new Date()) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
}
function lastMonthKey(d = new Date()) {
  const x = new Date(d.getFullYear(), d.getMonth() - 1, 1);
  return monthKey(x);
}
const THIS_YR = String(new Date().getFullYear());
let viewMonth = monthKey();
function viewMonthDate() {
  const y = Number(viewMonth.slice(0, 4));
  const m = Number(viewMonth.slice(5, 7));
  return new Date(y, m - 1, 1);
}
function viewMonthLabel() {
  return viewMonthDate().toLocaleString("en-US", { month: "long", year: "numeric" });
}
function lastViewMonth() {
  const d = viewMonthDate();
  return monthKey(new Date(d.getFullYear(), d.getMonth() - 1, 1));
}
function dueOnViewMonth(iso) {
  const day = Number(String(iso || "01").slice(-2)) || 1;
  const cap = new Date(viewMonthDate().getFullYear(), viewMonthDate().getMonth() + 1, 0).getDate();
  return viewMonth + "-" + String(Math.min(day, cap)).padStart(2, "0");
}
let monthFilter = "all";
let forecastMonths = 12;
let forecastEditMonth = 1;
let forecastSaved = {};
let forecastPlan = null;
let forecastResult = null;
let forecastDirty = false;
let forecastPool = 500;
let forecastLog = [];
let forecastLogOpen = false;
let finTab = "income";
let finScope = "household";
let pdUp = "out";
let pdSub = "mo";
let pdBill = "mo";
let pdAcct = "breakdown";
let dashMode = "personal";
const PIE = ["#3ee0c5", "#5b8def", "#f07167", "#e7b34d", "#a78bfa", "#67e8f9", "#94a3b8", "#34d399", "#fb7185"];

const app = document.getElementById("app");
const money = n => (n < 0 ? "-" : "") + "$" + Math.abs(n).toFixed(2);
const heroMoney = n => (n < 0 ? "-" : "") + "$" + Math.abs(Math.round(n)).toLocaleString("en-US");
const signedHero = n => (n > 0 ? "+" : n < 0 ? "-" : "") + "$" + Math.abs(Math.round(n)).toLocaleString("en-US");

function spent(cat, scope) {
  return state.txs
    .filter(t => t.cat === cat && (scope === "all" || t.type === scope) && (t.date || "").startsWith(viewMonth))
    .reduce((s, t) => s + t.amount, 0);
}

function visibleAccounts() {
  const list = bag().accounts || [];
  if (user === "solo") return list.filter(a => a.owner === "alex" || a.shared);
  return list.filter(a => {
    if (a.shared) return true;
    if (a.owner === user) return true;
    if (a.hidden) return false;
    return true;
  });
}

function inPeriod(t, period) {
  const d = t.date || "";
  if (period === "this") return d.startsWith(viewMonth);
  if (period === "last") return d.startsWith(lastViewMonth());
  if (period === "ytd") return d.startsWith(THIS_YR);
  return true;
}

function txsFor(period) {
  return visibleTxs().filter(t => inPeriod(t, period));
}

function catSpend(period, cat) {
  return txsFor(period).filter(t => t.cat === cat).reduce((s, t) => s + t.amount, 0);
}

function periodLabel(period) {
  if (period === "this") return "This month (" + viewMonth + ")";
  if (period === "last") return "Last month (" + lastViewMonth() + ")";
  return "Year to date (" + THIS_YR + ")";
}

function personShare(t, who) {
  if (!t || t.type !== "shared") return 0;
  if (t.payer === "both") return t.amount * 0.5;
  const split = Number(t.split);
  if (split === 0 || split === 100) return t.payer === who ? t.amount : 0;
  if (t.payer === who) return t.amount * (1 - split / 100);
  return t.amount * (split / 100);
}

function visibleTxs() {
  if (user === "solo") return state.txs.filter(t => t.payer === "alex" || t.type === "shared" || t.payer === "both");
  return state.txs.filter(t => {
    if (t.type === "shared" || t.payer === "both") return true;
    return t.payer === user;
  });
}

function sharedTxs() {
  return state.txs.filter(t => t.type === "shared");
}

function balanceBetween() {
  let alexNet = 0;
  sharedTxs().filter(t => t.paid).forEach(t => {
    const otherShare = t.amount * (t.split / 100);
    if (t.payer === "alex") alexNet += otherShare;
    if (t.payer === "jordan") alexNet -= otherShare;
  });
  return alexNet - state.settled;
}

function suggestCategory(name) {
  const n = (name || "").toLowerCase();
  if (/rent|lease/.test(n)) return "Rent";
  if (/groc|trader|whole foods|kroger/.test(n)) return "Groceries";
  if (/uber|lyft|gas|metro/.test(n)) return "Transport";
  if (/netflix|spotify|hulu|apple/.test(n)) return "Subscriptions";
  if (/dinner|lunch|bar|cafe|restaurant/.test(n)) return "Eating out";
  if (/electric|water|internet|wifi/.test(n)) return "Utilities";
  return "Other";
}

function render() {
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === view);
    b.style.opacity = "1";
  });
  document.getElementById("modeLabel").textContent = user === "solo" ? "Individual" : "Couple household · " + (state.users[user] ? state.users[user].name : user);
  const us = document.getElementById("userSelect");
  if (us) {
    us.value = user;
    const locked = !!(sbUser && state.members && state.members[sbUser.id]);
    us.disabled = locked;
    us.title = locked ? "This login is locked to your seat" : "";
  }
  const ht = document.getElementById("headerTitle");
  if (ht) ht.textContent = viewMonthLabel();
  const mp = document.getElementById("monthPick");
  if (mp && mp.value !== viewMonth) mp.value = viewMonth;
  if (view === "shared") { view = "dashboard"; dashMode = "household"; }
  if (view === "personal") { view = "dashboard"; dashMode = "personal"; }
  if (user === "solo") dashMode = "personal";
  if (view === "expenses" || view === "settle") view = "monthly";

  const map = { dashboard, shared, personal, expenses: monthly, transactions, monthly, calendar, accounts, debts, budgets, goals, financials, settle: monthly, settings };
  app.innerHTML = map[view]();
  bindView();
}

function daysUntil(dateStr) {
  if (!dateStr) return 99;
  const a = new Date(dateStr + "T00:00:00");
  const b = new Date();
  b.setHours(0,0,0,0);
  return Math.round((a - b) / 86400000);
}

function isEmptyHousehold() {
  return !(state.monthly || []).length && !(state.debts || []).length && !(state.income || []).length;
}

function emptyBanner() {
  if (!isEmptyHousehold()) return "";
  return `<div class="tile" style="margin-bottom:16px">
    <h3>Start this household</h3>
    <p class="note">No bills or pay yet. Add income on Monthly expenses, add a debt, or restore the demo in Settings.</p>
    <div class="row-actions">
      <button class="btn primary" data-go="monthly">Add expenses</button>
      <button class="btn" data-go="debts">Add a debt</button>
      <button class="btn" data-go="settings">Settings</button>
    </div>
  </div>`;
}

function upcomingDues() {
  const rows = [];
  visibleMonthly().forEach(m => {
    if (monthPaidFor(m)) return;
    const due = dueOnViewMonth(m.due);
    rows.push({ name: m.name, due, amount: monthShare(m), kind: "Bill", days: daysUntil(due) });
  });
  visibleDebts().filter(d => Number(d.minimum) > 0 && !d.minPaid && Number(d.balance) > 0.05).forEach(d => {
    const due = dueOnViewMonth("01");
    rows.push({ name: d.name + " min", due, amount: Number(d.minimum), kind: "Debt", days: daysUntil(due) });
  });
  return rows.sort((a, b) => a.days - b.days);
}

function reminderStrip() {
  const soon = upcomingDues().filter(r => r.days <= 7);
  if (!soon.length) return "";
  return `<div class="tile" style="margin-bottom:16px">
    <div class="label">Due in the next 7 days · ${viewMonthLabel()}</div>
    ${soon.slice(0, 6).map(r => `<div class="legend-row"><span>${r.name} · ${r.kind}${r.days < 0 ? " · overdue" : r.days === 0 ? " · today" : " · " + r.days + "d"}</span><strong>${money(r.amount)}</strong></div>`).join("")}
  </div>`;
}

function downloadCsv(filename, rows) {
  const csv = rows.map(r => r.map(c => "\"" + String(c ?? "").replace(/"/g, "\"\"") + "\"").join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = filename;
  a.click();
}

function vsLastLine(cur, last) {
  const diff = cur - last;
  if (!last && !cur) return "No last-month data";
  if (!diff) return "Even with last month";
  const pct = last ? Math.abs(diff / last * 100).toFixed(0) + "%" : "";
  return `${heroMoney(Math.abs(diff))} ${diff > 0 ? "more" : "less"} than last month${pct ? " · " + pct : ""}`;
}

function dashboard() {
  const tabs = user === "solo" ? "" : `
    <div class="row-actions">
      <button class="btn ${dashMode==="household"?"active":""}" data-dashmode="household">Household</button>
      <button class="btn ${dashMode==="personal"?"active":""}" data-dashmode="personal">Personal</button>
    </div>`;
  if (dashMode === "household" && user !== "solo") return tabs + monthBanner() + shared();
  return tabs + monthBanner() + personal();
}

function shared() {
  const house = (bag().monthly || []).filter(m => m.owner === "both" || m.payer === "both");
  const spentThis = house.reduce((s, m) => s + m.amount, 0);
  const unpaid = house.filter(m => !monthPaidFor(m));
  const unpaidSum = unpaid.reduce((s, m) => s + monthShare(m), 0);
  const attention = unpaid.filter(m => daysUntil(m.due) <= 7).sort((a, b) => (a.due || "").localeCompare(b.due || ""));
  const alexAmt = house.filter(m => m.owner === "alex" || m.payer === "alex").reduce((s, m) => s + m.amount, 0);
  const jordAmt = house.filter(m => m.owner === "jordan" || m.payer === "jordan").reduce((s, m) => s + m.amount, 0);
  const assignedTot = alexAmt + jordAmt || 1;
  const alexPct = Math.round(alexAmt / assignedTot * 100);
  const livingLoad = house.filter(isLivingKind).reduce((s, m) => s + m.amount, 0);
  const goal = (state.goals || []).find(g => g.scope === "shared");

  return `
    <p class="kicker">Shared dashboard</p>
    <h1>Household snapshot</h1>
    ${emptyBanner()}${reminderStrip()}
    <div class="grid-4">
      <div class="tile clickable" data-go="monthly">
        <div class="label">Household monthly</div>
        <div class="val">${heroMoney(spentThis)}</div>
        <p class="note">Shared living costs on Monthly expenses</p>
      </div>
      <div class="tile clickable" data-go="monthly">
        <div class="label">Unpaid household</div>
        <div class="val" style="display:flex;justify-content:space-between;align-items:baseline;gap:12px">
          <span>${unpaid.length}</span><span>${heroMoney(unpaidSum)}</span>
        </div>
        <p class="note">Count · dollars still open</p>
      </div>
      <div class="tile">
        <div class="label">Assigned to Him</div>
        <div class="val">${alexPct}%</div>
        <p class="note">Her ${100 - alexPct}% of named household bills</p>
      </div>
      <div class="tile">
        <div class="label">Living load / mo</div>
        <div class="val">${heroMoney(livingLoad)}</div>
        <p class="note">Shared monthly expenses before discretionary</p>
      </div>
    </div>
    <div class="grid-2">
      <div class="tile clickable" data-go="monthly">
        <div class="label">Needs attention</div>
        <p class="note" style="margin-bottom:8px">Unpaid household bills due in 7 days or overdue</p>
        ${attention.length ? `<table class="table"><thead><tr><th>Expense</th><th>Amount</th><th>Due</th></tr></thead><tbody>
          ${attention.map(t => `<tr>
            <td>${t.name}</td><td>${money(t.amount)}</td>
            <td>${t.due || "—"} · ${daysUntil(t.due) < 0 ? "overdue" : daysUntil(t.due) === 0 ? "today" : daysUntil(t.due) + "d"}</td>
          </tr>`).join("")}
        </tbody></table>` : `<p class="note">Nothing due this week.</p>`}
      </div>
      <div>
        <div class="tile">
          <div class="label">Who covered shared</div>
          <div class="val">${alexPct}% Alex</div>
          <p class="note">Jordan ${100 - alexPct}% of paid shared this month</p>
          <div class="bar"><span style="width:${alexPct}%"></span></div>
        </div>
        ${goal ? `<div class="tile clickable" style="margin-top:12px" data-go="goals">
          <div class="label">Shared goal</div>
          <h3 style="margin:6px 0">${goal.name}</h3>
          <div class="val">${heroMoney(goal.saved)}</div>
          <p class="note">of ${heroMoney(goal.target)}</p>
          <div class="bar"><span style="width:${Math.min(100, goal.saved / goal.target * 100)}%"></span></div>
        </div>` : ""}
        <div class="tile" style="margin-top:12px">
          <div class="label">Budgets</div>
          ${state.budgets.filter(b => b.scope === "shared").map(b => {
            const s = spent(b.name, "shared");
            const pct = Math.min(100, (s / b.limit) * 100);
            const cls = pct > 100 ? "over" : pct > 80 ? "warn" : "";
            return `<div style="margin-top:12px"><div style="display:flex;justify-content:space-between"><span>${b.name}</span><span class="note">${money(s)} / ${money(b.limit)}</span></div><div class="bar ${cls}"><span style="width:${pct}%"></span></div></div>`;
          }).join("")}
        </div>
      </div>
    </div>
    ${debtProgressTile()}
  `;
}

function accountFor(item) {
  // PLAID_TODO: live funding account + merchant logo from Plaid
  if (item && item.accountId) {
    const hit = (bag().accounts || []).find(a => a.id === item.accountId);
    if (hit) return hit;
  }
  const who = item && (item.owner === "both" || item.payer === "both") ? "both" : (item && (item.owner || item.payer));
  return (bag().accounts || []).find(a => a.owner === who) || (bag().accounts || [])[0] || null;
}
function accountLine(item) {
  // PLAID_TODO: last-4 and bank name from live Plaid account
  const a = accountFor(item);
  if (!a) return "Unassigned · looks only until Plaid";
  return a.last4 ? `${a.name} ${a.last4}` : a.name;
}
function feedWhen(days) {
  if (days < 0) return "Overdue";
  if (days === 0) return "Today";
  if (days === 1) return "In 1 day";
  return "In " + days + " days";
}
function feedRow(name, sub, amount, pending) {
  const init = String(name || "?").replace(/[^A-Za-z0-9]/g, "").slice(0, 1).toUpperCase() || "?";
  return `<div class="feed-row">
    <div class="feed-ico" title="Merchant logos after Plaid">${init}</div>
    <div class="feed-main">
      <div class="feed-name">${name}</div>
      <div class="feed-sub">${sub}${pending ? " · Pending" : ""}</div>
    </div>
    <div class="feed-amt">${money(amount)}</div>
  </div>`;
}
function chip(key, val, label, cur) {
  return `<button type="button" class="chip ${cur===val?"active":""}" data-pd="${key}:${val}">${label}</button>`;
}
function personalFeed(who) {
  const mineMonthly = visibleMonthly().filter(m => m.owner === who || isJointBill(m));
  const outRows = [];
  mineMonthly.forEach(m => {
    if (monthPaidFor(m, who)) return;
    const due = dueOnViewMonth(m.due);
    const days = daysUntil(due);
    if (days > 14) return;
    outRows.push({ name: m.name, days, amount: monthShare(m, who), account: accountLine(m), pending: false });
  });
  visibleDebts().filter(d => Number(d.minimum) > 0 && !d.minPaid && Number(d.balance) > 0.05).forEach(d => {
    const due = dueOnViewMonth("01");
    const days = daysUntil(due);
    if (days > 14) return;
    outRows.push({ name: d.name, days, amount: Number(d.minimum), account: accountLine(d), pending: false });
  });
  outRows.sort((a, b) => a.days - b.days);
  const inRows = (bag().income || []).filter(i => i.owner === who || i.owner === "both").map(i => {
    const due = dueOnViewMonth(i.due || "01");
    return { name: i.name, days: daysUntil(due), amount: Number(i.amount || 0), account: accountLine(i), pending: false };
  }).sort((a, b) => a.days - b.days);

  const upList = pdUp === "in" ? inRows : outRows;
  const upRows = upList.slice(0, 5).map(r => feedRow(r.name, feedWhen(r.days) + " · " + r.account, r.amount, r.pending)).join("")
    || `<p class="note">${pdUp === "in" ? "No incoming this window." : "Nothing upcoming."}</p>`;

  const subs = mineMonthly.filter(m => m.kind === "subscription" || m.kind === "membership");
  const bills = mineMonthly.filter(m => m.kind !== "subscription" && m.kind !== "membership");
  const debtBills = visibleDebts().filter(d => Number(d.minimum) > 0 && Number(d.balance) > 0.05).map(d => ({
    name: d.name, amount: Number(d.minimum), account: accountLine(d)
  }));
  const billRows = bills.map(m => ({ name: m.name, amount: monthShare(m, who), account: accountLine(m) })).concat(debtBills);

  const subMult = pdSub === "yr" ? 12 : 1;
  const billMult = pdBill === "yr" ? 12 : 1;
  const subTotal = subs.reduce((s, m) => s + monthShare(m, who), 0) * subMult;
  const billTotal = billRows.reduce((s, r) => s + r.amount, 0) * billMult;

  const subHtml = subs.slice(0, 5).map(m => feedRow(m.name, (pdSub === "yr" ? "Annual" : "Monthly") + " · " + accountLine(m), monthShare(m, who) * subMult)).join("")
    || `<p class="note">No subscriptions on this view.</p>`;
  const billHtml = billRows.slice(0, 5).map(r => feedRow(r.name, (pdBill === "yr" ? "Annual" : "Monthly") + " · " + r.account, r.amount * billMult)).join("")
    || `<p class="note">No bills on this view.</p>`;

  const recent = visibleTxs().filter(t => t.payer === who || t.type === "shared").slice().sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 5);
  const recentHtml = recent.map(t => feedRow(t.name, (t.date || "") + " · " + accountLine(t), t.amount, t.pending || !t.paid)).join("")
    || `<p class="note">No recent transactions. Manual until Plaid.</p>`;

  const accts = visibleAccounts().filter(a => user === "solo" || a.owner === who || a.shared);
  const acctTotal = accts.reduce((s, a) => s + Math.max(0, Number(a.balance || 0)), 0);
  const pieRows = accts.map(a => [a.name + (a.last4 ? " " + a.last4 : ""), Math.max(0, Number(a.balance || 0))]).filter(r => r[1] > 0);
  const pie = pieStyle(pieRows);
  const allocHtml = pieRows.length ? `<div class="pie-wrap"><div class="pie" style="${pie}"></div><div>${pieRows.map((r, i) => {
    const pct = acctTotal ? Math.round(r[1] / acctTotal * 100) : 0;
    return `<div class="legend-row"><span><i class="swatch" style="background:${PIE[i % PIE.length]}"></i>${r[0]} · ${pct}%</span><strong>${money(r[1])}</strong></div>`;
  }).join("")}</div></div>` : `<p class="note">No account balances yet. Looks-only until Plaid.</p>`;
  const breakHtml = accts.length ? accts.map(a => {
    const bal = Math.max(0, Number(a.balance || 0));
    const pct = acctTotal ? Math.min(100, bal / acctTotal * 100) : 0;
    return `<div class="acct-bar"><div class="legend-row"><span>${a.name}${a.last4 ? " " + a.last4 : ""}</span><strong>${money(bal)}</strong></div><div class="bar"><span style="width:${pct}%"></span></div></div>`;
  }).join("") : `<p class="note">No accounts yet. Looks-only until Plaid.</p>`;

  return {
    upcoming: `<div class="tile pdash-tile">
      <div class="pdash-head">
        <div class="label">Upcoming activity</div>
        <div class="chips">${chip("up","out","Outgoing",pdUp)}${chip("up","in","Incoming",pdUp)}</div>
      </div>
      ${upRows}
    </div>`,
    subs: `<div class="tile pdash-tile">
      <div class="pdash-head">
        <div>
          <div class="label">Subscriptions</div>
          <div class="val">${heroMoney(subTotal)}</div>
        </div>
        <div class="chips">${chip("sub","mo","Monthly",pdSub)}${chip("sub","yr","Annual",pdSub)}</div>
      </div>
      ${subHtml}
      <button class="btn feed-more" data-go="monthly">Show more</button>
    </div>`,
    bills: `<div class="tile pdash-tile">
      <div class="pdash-head">
        <div>
          <div class="label">Bills</div>
          <div class="val">${heroMoney(billTotal)}</div>
        </div>
        <div class="chips">${chip("bill","mo","Monthly",pdBill)}${chip("bill","yr","Annual",pdBill)}</div>
      </div>
      ${billHtml}
      <button class="btn feed-more" data-go="monthly">Show more</button>
    </div>`,
    recent: `<div class="tile pdash-tile">
      <div class="pdash-head">
        <div class="label">Recent transactions</div>
      </div>
      ${recentHtml}
      <button class="btn feed-more" data-go="transactions">Show more</button>
      <p class="note">Merchant logos after Plaid. Account last-4 is looks-only until Plaid.</p>
    </div>`,
    accounts: `<div class="tile pdash-tile">
      <div class="pdash-head">
        <div>
          <div class="label">Accounts</div>
          <div class="val">${heroMoney(acctTotal)}</div>
        </div>
        <div class="chips">${chip("acct","allocation","Allocation",pdAcct)}${chip("acct","breakdown","Breakdown",pdAcct)}</div>
      </div>
      ${pdAcct === "allocation" ? allocHtml : breakHtml}
      <p class="note">Balances typed in Accounts. Live balances after Plaid.</p>
    </div>`
  };
}

function debtKindOf(d) {
  const t = String(d.type || d.name || "").toLowerCase();
  if (/student/.test(t) || /student/.test(d.name || "")) return "student";
  if (/car|auto|vehicle/.test(t) || /car payment|auto/.test((d.name || "").toLowerCase())) return "auto";
  if (/credit/.test(t)) return "card";
  return "loan";
}
function ensureDebtTile() {
  if (!state.debtTile) state.debtTile = { mode: "all", exclude: [] };
  if (!Array.isArray(state.debtTile.exclude)) state.debtTile.exclude = [];
}
function debtStartBalance(d) {
  const prevKey = shiftMonth(viewMonth, -1);
  const snap = state.snapshots && state.snapshots[prevKey];
  if (snap && snap.debts) {
    const hit = snap.debts.find(x => String(x.id) === String(d.id));
    if (hit) return Number(hit.balance || 0);
  }
  return Number(d.balance || 0);
}
function debtMonthMath(d) {
  const start = debtStartBalance(d);
  const apr = Number(d.apr || 0);
  const interest = start > 0 && apr > 0 ? start * (apr / 100 / 12) : 0;
  const min = Number(d.minimum || 0);
  const extra = Number(d.extra || 0);
  const paid = (d.minPaid ? min : 0) + extra;
  const scheduled = Math.min(paid, start + interest);
  const end = Math.max(0, start + interest - scheduled);
  const drop = start - end;
  return { start, interest, min, extra, paid: scheduled, end, drop };
}
function debtProgressTile() {
  ensureDebtTile();
  const mode = state.debtTile.mode || "all";
  const exclude = new Set(state.debtTile.exclude || []);
  const rows = visibleDebts().filter(d => {
    if (exclude.has(String(d.id))) return false;
    const k = debtKindOf(d);
    if (mode === "card") return k === "card";
    if (mode === "loan") return k === "loan" || k === "auto" || k === "student";
    if (mode === "nocar") return k !== "auto" && k !== "student";
    return true;
  }).map(d => ({ d, k: debtKindOf(d), math: debtMonthMath(d) }));
  const paid = rows.reduce((s, r) => s + r.math.paid, 0);
  const interest = rows.reduce((s, r) => s + r.math.interest, 0);
  const drop = rows.reduce((s, r) => s + r.math.drop, 0);
  const hidden = visibleDebts().filter(d => exclude.has(String(d.id)));
  const prevLabel = shiftMonth(viewMonth, -1);
  const hasPrev = !!(state.snapshots && state.snapshots[prevLabel]);
  return `
    <div class="tile pdash-tile">
      <div class="pdash-head">
        <div>
          <div class="label">Debts this month</div>
          <div class="val" style="color:${drop>=0?"var(--good)":"var(--bad)"}">${drop>=0?"−":"+"}${heroMoney(Math.abs(drop))}</div>
          <p class="note">Paid ${money(paid)} · interest ${money(interest)} · net balance change${hasPrev ? " vs " + prevLabel + " ending" : " (no prior snapshot)"}</p>
        </div>
        <div class="chips">
          ${["all","card","loan","nocar"].map(m => `<button type="button" class="chip ${mode===m?"active":""}" data-debtmode="${m}">${m==="all"?"All":m==="card"?"Cards":m==="loan"?"Loans":"No car/student"}</button>`).join("")}
        </div>
      </div>
      ${rows.length ? `<table class="table">
        <thead><tr><th>Debt</th><th>Paid</th><th>Interest</th><th>Decrease</th><th></th></tr></thead>
        <tbody>
          ${rows.map(r => `<tr>
            <td>${r.d.name}<div class="note">${r.d.type || r.k} · start ${money(r.math.start)} → ${money(r.math.end)}${r.math.extra ? " · extra " + money(r.math.extra) : ""}</div></td>
            <td>${money(r.math.paid)}</td>
            <td>${money(r.math.interest)}</td>
            <td>${r.math.drop>=0?"−":"+"}${money(Math.abs(r.math.drop))}</td>
            <td><button class="btn" data-debthide="${r.d.id}">Hide</button></td>
          </tr>`).join("")}
          <tr>
            <td><strong>Net</strong></td>
            <td><strong>${money(paid)}</strong></td>
            <td><strong>${money(interest)}</strong></td>
            <td><strong>${drop>=0?"−":"+"}${money(Math.abs(drop))}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>` : `<p class="note">No debts in this filter.</p>`}
      ${hidden.length ? `<p class="note" style="margin-top:8px">Hidden: ${hidden.map(d => `<button class="btn" data-debtshow="${d.id}">${d.name}</button>`).join(" ")}</p>` : ""}
      <p class="note">Interest is estimated from APR on last month’s ending balance. Hide student loans or a car if you only want revolving debt.</p>
    </div>`;
}

function personal() {
  const who = user === "solo" ? "alex" : user;
  const mineAll = visibleTxs().filter(t => t.payer === who);
  const mineThis = mineAll.filter(t => inPeriod(t, "this"));
  const mineLast = mineAll.filter(t => inPeriod(t, "last"));
  const spendThis = mineThis.reduce((s, t) => s + t.amount, 0);
  const spendLast = mineLast.reduce((s, t) => s + t.amount, 0);
  const myMonthly = (bag().monthly || []).filter(m => m.owner === who && !monthPaidFor(m, who));
  const myUnpaidTx = mineAll.filter(t => !t.paid);
  const unpaidItems = [
    ...myMonthly.map(m => ({ name: m.name, amount: m.amount, due: m.due })),
    ...myUnpaidTx.map(t => ({ name: t.name, amount: t.amount, due: t.due || t.date }))
  ];
  const unpaidSum = unpaidItems.reduce((s, x) => s + x.amount, 0);
  const persBudgets = state.budgets.filter(b => b.scope === "personal" || b.scope === "shared");
  const leftBudget = persBudgets.reduce((s, b) => {
    const used = spent(b.name, b.scope === "personal" ? "personal" : "shared");
    return s + Math.max(0, b.limit - used);
  }, 0);
  const sharedThisList = sharedTxs().filter(t => inPeriod(t, "this"));
  const sharedThis = sharedThisList.reduce((s, t) => s + t.amount, 0);
  const myShare = sharedThisList.reduce((s, t) => s + personShare(t, who), 0);
  const hiddenN = (bag().accounts || []).filter(a => a.hidden && a.owner === who).length;
  const goal = (state.goals || []).find(g => g.scope === "personal" && (!g.owner || g.owner === who))
    || (state.goals || []).find(g => g.scope === "personal");
  const topCat = groupSum(mineThis, t => t.cat)[0];
  const topLast = topCat ? catSpend("last", topCat[0]) : 0;
  const myInc = (bag().income || []).filter(i => i.owner === who).reduce((s, i) => s + i.amount, 0);
  const leftMonth = myInc - spendThis;
  const feed = personalFeed(who);

  return `
    <p class="kicker">Personal dashboard</p>
    <h1>${state.users[user].name}'s money</h1>
    ${emptyBanner()}
    <div class="grid-4">
      <div class="tile">
        <div class="label">Personal spend this month</div>
        <div class="val">${heroMoney(spendThis)}</div>
        <p class="note">${vsLastLine(spendThis, spendLast)}</p>
      </div>
      <div class="tile">
        <div class="label">Left this month</div>
        <div class="val" style="color:${leftMonth>=0?"var(--good)":"var(--bad)"}">${signedHero(leftMonth)}</div>
        <p class="note">Income ${heroMoney(myInc)} minus personal spend</p>
      </div>
      <div class="tile">
        <div class="label">Left in budgets</div>
        <div class="val">${heroMoney(leftBudget)}</div>
        <p class="note">Room left across your limits</p>
      </div>
      <div class="tile">
        <div class="label">My unpaid</div>
        <div class="val" style="display:flex;justify-content:space-between;align-items:baseline;gap:12px">
          <span>${unpaidItems.length}</span><span>${heroMoney(unpaidSum)}</span>
        </div>
        <p class="note">Personal bills and open charges</p>
      </div>
    </div>
    <div class="pdash-board">
      <div class="tile pdash-needs">
        <div class="label">Needs attention</div>
        ${unpaidItems.length ? `<table class="table"><thead><tr><th>Item</th><th>Amount</th><th>Due</th></tr></thead><tbody>
          ${unpaidItems.map(x => `<tr><td>${x.name}</td><td>${money(x.amount)}</td><td>${x.due || "—"}</td></tr>`).join("")}
        </tbody></table>` : `<p class="note">Nothing open on your side.</p>`}
      </div>
      <div class="pdash-quad">
        ${feed.upcoming}
        ${feed.subs}
        ${feed.bills}
        ${feed.recent}
      </div>
    </div>
    <div class="pdash-under">
      ${debtProgressTile()}
      ${feed.accounts}
      <div class="tile">
        <div class="label">Your share of household</div>
        <div class="val">${heroMoney(myShare)}</div>
        <p class="note">Your piece of shared spend this month (${heroMoney(sharedThis)} household)</p>
      </div>
      ${topCat ? `<div class="tile">
        <div class="label">${topCat[0]} this month</div>
        <div class="val">${heroMoney(topCat[1])}</div>
        <p class="note">${vsLastLine(topCat[1], topLast)}</p>
      </div>` : ""}
      ${goal ? `<div class="tile">
        <div class="label">Personal goal</div>
        <h3 style="margin:6px 0">${goal.name}</h3>
        <div class="val">${heroMoney(goal.saved)}</div>
        <p class="note">of ${heroMoney(goal.target)}</p>
        <div class="bar"><span style="width:${Math.min(100, goal.saved / goal.target * 100)}%"></span></div>
      </div>` : ""}
      <p class="note">${hiddenN ? hiddenN + " personal account hidden from partner" : "Personal accounts visible to partner by default"}</p>
    </div>
  `;
}

function sharedExpenseRows() {
  const fromTx = sharedTxs().map(t => ({
    key: "t-" + t.id,
    src: "tx",
    id: t.id,
    name: t.name,
    amount: t.amount,
    due: t.due || t.date,
    payer: t.payer,
    split: Number(t.split),
    paid: t.paid,
    note: t.notes || t.cat,
    recurring: /rent|netflix|internet|electric|spotify|phone|storage|equinox|med/i.test(t.name)
  }));
  const names = new Set(fromTx.map(t => t.name.toLowerCase()));
  const fromMonth = (state.monthly || []).filter(m => m.type === "shared" && !names.has(m.name.toLowerCase())).map(m => ({
    key: "m-" + m.id,
    src: "month",
    id: m.id,
    name: m.name,
    amount: m.amount,
    due: m.due,
    payer: m.owner === "both" ? "alex" : m.owner,
    split: 0,
    paid: m.paid,
    note: "From Monthly expenses · " + m.kind,
    recurring: true
  }));
  return fromTx.concat(fromMonth);
}

function expenses() {
  let list = sharedExpenseRows();
  if (expenseFilter === "unpaid") list = list.filter(t => !t.paid);
  if (expenseFilter === "paid") list = list.filter(t => t.paid);
  if (expenseFilter === "recurring") list = list.filter(t => t.recurring);
  return `
    <p class="kicker">Household</p>
    <h1>Shared expenses</h1>
    <p class="note">Pulled from shared transactions and shared monthly expenses. Add one here if it isn’t on either list yet.</p>
    <div class="row-actions">
      ${["all","unpaid","paid","recurring"].map(f => `<button class="btn ${expenseFilter===f?"active":""}" data-filter="${f}">${f[0].toUpperCase()+f.slice(1)}</button>`).join("")}
      <button class="btn primary" id="openShare">Add expense</button>
    </div>
    <div class="tile">
      <table class="table">
        <thead><tr><th>Expense</th><th>Amount</th><th>Due</th><th>Who pays</th><th>Split</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${list.map(t => `<tr>
            <td>${t.name}<div class="note">${t.note || ""}</div></td>
            <td>${money(t.amount)}</td>
            <td>${t.due || "—"}</td>
            <td>${state.users[t.payer]?.name || t.payer}</td>
            <td>${t.split === 0 || t.split === 100 ? "Assigned" : t.split + "% / " + (100 - t.split) + "%"}</td>
            <td>
              <button class="badge ${t.paid?"paid":"unpaid"}" ${t.src==="tx" ? `data-toggle-paid="${t.id}"` : `data-month-paid="${t.id}"`}>${t.paid?"Paid":"Unpaid"}</button>
            </td>
            <td>
              <button class="btn" data-edit-share="${t.src}:${t.id}">Edit</button>
              <button class="btn" data-del-share="${t.src}:${t.id}">Delete</button>
            </td>
          </tr>`).join("") || `<tr><td colspan="7" class="note">Nothing here.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function acctName(id) {
  return state.accounts.find(a => a.id === id)?.name || "—";
}

function groupSum(list, keyFn) {
  const map = {};
  list.forEach(t => {
    const k = keyFn(t);
    map[k] = (map[k] || 0) + t.amount;
  });
  return Object.entries(map).sort((a, b) => b[1] - a[1]);
}

function pieStyle(rows) {
  const total = rows.reduce((s, r) => s + r[1], 0) || 1;
  let at = 0;
  const parts = rows.map((r, i) => {
    const start = at;
    at += (r[1] / total) * 360;
    return `${PIE[i % PIE.length]} ${start}deg ${at}deg`;
  });
  return `conic-gradient(${parts.join(",")})`;
}

function analysisView(list) {
  const total = list.reduce((s, t) => s + t.amount, 0);
  const byCat = groupSum(list, t => t.cat);
  const byAcct = groupSum(list, t => acctName(t.account));
  const byWho = groupSum(list, t => state.users[t.payer]?.name || t.payer);
  const byType = groupSum(list, t => t.type);
  const top = [...list].sort((a, b) => b.amount - a.amount).slice(0, 5);
  const avg = list.length ? total / list.length : 0;
  const biggestCat = byCat[0];
  return `
    <div class="grid-2">
      <div class="tile">
        <div class="label">Actual spend by category</div>
        <p class="note">This is what you spent — not what you budgeted.</p>
        <div class="pie-wrap">
          <div class="pie" style="background:${pieStyle(byCat)}"></div>
          <div>
            ${byCat.map((r, i) => {
              const pct = total ? (r[1] / total * 100) : 0;
              return `<div class="legend-row"><span class="swatch" style="background:${PIE[i % PIE.length]}"></span><span>${r[0]}</span><strong>${money(r[1])} · ${pct.toFixed(0)}%</strong></div>`;
            }).join("")}
          </div>
        </div>
      </div>
      <div class="tile">
        <div class="label">Insights</div>
        <div class="val" style="font-size:26px;margin:8px 0">${money(total)}</div>
        <p class="note">across ${list.length} transactions · avg ${money(avg)}</p>
        <p style="margin-top:14px">${biggestCat ? `<strong>${biggestCat[0]}</strong> is the largest category at ${money(biggestCat[1])}.` : "Add spend to see insights."}</p>
        ${byCat.slice(0, 4).map(r => {
          const last = catSpend("last", r[0]);
          const cur = r[1];
          if (spendPeriod === "last" || spendPeriod === "ytd") return "";
          const diff = cur - last;
          if (!last && !cur) return "";
          const dir = diff > 0 ? "higher" : diff < 0 ? "lower" : "flat";
          return `<p class="note" style="margin-top:8px">${r[0]} is ${money(Math.abs(diff))} ${dir} than last month (${money(last)} → ${money(cur)}).</p>`;
        }).join("")}
        <p class="note" style="margin-top:8px">${byType.map(r => `${r[0]} ${money(r[1])}`).join(" · ")}</p>
      </div>
    </div>
    <div class="grid-3">
      <div class="tile">
        <div class="label">By account</div>
        ${byAcct.map(r => `<div class="legend-row"><span>${r[0]}</span><strong>${money(r[1])}</strong></div>`).join("")}
      </div>
      <div class="tile">
        <div class="label">Who paid</div>
        ${byWho.map(r => `<div class="legend-row"><span>${r[0]}</span><strong>${money(r[1])}</strong></div>`).join("")}
      </div>
      <div class="tile">
        <div class="label">Largest charges</div>
        ${top.map(t => `<div class="legend-row"><span>${t.name}</span><strong>${money(t.amount)}</strong></div>`).join("")}
      </div>
    </div>
  `;
}

function transactions() {
  const list = txsFor(spendPeriod).slice().sort((a, b) => (b.date || "").localeCompare(a.date || "") || b.id - a.id);
  return `
    <p class="kicker">Activity</p>
    <h1>Transactions</h1>
    <div class="row-actions">
      <button class="btn ${txTab === "list" ? "active" : ""}" data-txtab="list">All activity</button>
      <button class="btn ${txTab === "analysis" ? "active" : ""}" data-txtab="analysis">Spend analysis</button>
    </div>
    <div class="row-actions">
      <button class="btn ${spendPeriod==="this"?"active":""}" data-period="this">This month</button>
      <button class="btn ${spendPeriod==="last"?"active":""}" data-period="last">Last month</button>
      <button class="btn ${spendPeriod==="ytd"?"active":""}" data-period="ytd">Year to date</button>
      <button class="btn primary" id="addTxPage">Add transaction</button>
    </div>
    <p class="note">${periodLabel(spendPeriod)}</p>
    ${txTab === "analysis" ? analysisView(list) : `
    <p class="note">Every visible transaction, newest first, across accounts.</p>
    <div class="tile" style="margin-top:12px">
      <table class="table">
        <thead><tr><th>Date</th><th>Name</th><th>Account</th><th>Amount</th><th>Category</th><th>Type</th><th>Payer</th><th></th></tr></thead>
        <tbody>
          ${list.map(t => `<tr>
            <td>${t.date}</td>
            <td>${t.name}</td>
            <td>${acctName(t.account)}</td>
            <td>${money(t.amount)}</td>
            <td>${t.cat}</td>
            <td><span class="badge ${t.type}">${t.type}</span></td>
            <td>${state.users[t.payer]?.name || t.payer}</td>
            <td>
              <button class="btn" data-edit-tx="${t.id}">Edit</button>
              <button class="btn" data-del-tx="${t.id}">Delete</button>
            </td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`}
  `;
}

function calendar() {
  const rows = upcomingDues();
  return `
    <p class="kicker">${viewMonthLabel()}</p>
    <h1>Due dates</h1>
    <p class="note">Bills and debt minimums for the month in the header. Paid items drop off.</p>
    ${emptyBanner()}
    <div class="tile" style="overflow-x:auto">
      <table class="table">
        <thead><tr><th>Due</th><th>Name</th><th>Type</th><th>Amount</th><th></th></tr></thead>
        <tbody>
          ${rows.map(r => `<tr>
            <td>${r.due}</td>
            <td>${r.name}</td>
            <td>${r.kind}</td>
            <td>${money(r.amount)}</td>
            <td>${r.days < 0 ? "Overdue" : r.days === 0 ? "Today" : r.days + " days"}</td>
          </tr>`).join("") || `<tr><td colspan="5">Nothing unpaid this month.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function accounts() {
  return `
    <p class="kicker">Where money sits</p>
    <h1>Accounts</h1>
    <p class="note">Visible to partner by default. Hide only if you want it off their screen.</p>
    <div class="grid-3">
      ${visibleAccounts().map(a => `
        <div class="tile">
          <div class="label">${a.type} · ${a.shared ? "Shared" : "Personal"}</div>
          <div class="val">${money(a.balance)}</div>
          <p style="margin:8px 0">${a.name}</p>
          ${a.owner === user || user === "solo" ? `<button class="btn" data-hide="${a.id}">${a.hidden ? "Unhide from partner" : "Hide from partner"}</button>` : `<span class="badge ${a.hidden?"hidden":"shared"}">${a.hidden?"Hidden":"Visible"}</span>`}
        </div>`).join("")}
    </div>
  `;
}

function budgets() {
  const list = state.budgets || [];
  return `
    <p class="note">Spend is from Transactions in ${viewMonthLabel()}. Add a budget if a category has a cap.</p>
    <div class="grid-2">
      ${list.map(b => {
        const s = spent(b.name, b.scope === "personal" ? "personal" : "shared");
        const pct = b.limit ? Math.min(120, (s / b.limit) * 100) : 0;
        return `<div class="tile">
          <div class="label">${b.scope}</div>
          <h3>${b.name}</h3>
          <p class="note">${money(s)} of ${money(b.limit)} · ${money(Math.max(0, b.limit - s))} left</p>
          <div class="bar ${pct>100?"over":pct>80?"warn":""}"><span style="width:${Math.min(pct,100)}%"></span></div>
          <button class="btn" data-del-budget="${b.name}|${b.scope}">Remove</button>
        </div>`;
      }).join("") || `<div class="tile"><p class="note">No budgets yet.</p></div>`}
    </div>
    <div class="tile" style="margin-top:16px">
      <h3>Add budget</h3>
      <div class="row-actions" style="align-items:center">
        <input id="bName" placeholder="Groceries" />
        <input id="bLimit" type="number" step="1" placeholder="Limit" style="width:110px" />
        <select id="bScope"><option value="shared">Shared</option><option value="personal">Personal</option></select>
        <button class="btn primary" id="addBudget">Add</button>
      </div>
    </div>
  `;
}

function visibleMonthly() {
  const list = bag().monthly || [];
  if (user === "solo") return list.filter(m => m.owner === "alex" || m.owner === "both");
  return list.filter(m => m.owner === "both" || m.owner === user || m.payer === user);
}

function isJointBill(m) {
  return m && (m.owner === "both" || m.payer === "both");
}
function viewerId() {
  return user === "solo" ? "alex" : user;
}
function monthShare(m, who) {
  if (isJointBill(m)) return Number(m.amount) * 0.5;
  return Number(m.amount) || 0;
}
function monthPaidFor(m, who) {
  const w = who || viewerId();
  if (isJointBill(m) && m.paidBy && typeof m.paidBy[w] === "boolean") return m.paidBy[w];
  return !!m.paid;
}
function toggleMonthPaid(m, who) {
  const w = who || viewerId();
  if (isJointBill(m)) {
    if (!m.paidBy) m.paidBy = { alex: !!m.paid, jordan: !!m.paid };
    m.paidBy[w] = !m.paidBy[w];
    m.paid = !!(m.paidBy.alex && m.paidBy.jordan);
  } else {
    m.paid = !m.paid;
  }
}

function snapshotForecast() {
  const items = visibleMonthly()
    .filter(m => isJointBill(m) || m.owner === viewerId() || m.payer === viewerId())
    .map(m => ({
      id: String(m.id),
      name: m.name,
      amount: monthShare(m),
      kind: m.kind || "other",
      removed: false
    }));
  const debts = visibleDebts().filter(d => Number(d.minimum) > 0).map(d => ({
    id: String(d.id),
    name: d.name,
    minimum: Number(d.minimum || 0),
    extra: Number(d.extra || 0),
    removed: false
  }));
  return { items, debts };
}

function setViewerIncomeTotal(n) {
  const target = Math.max(0, Number(n) || 0);
  const who = viewerId();
  if (!state.income) state.income = [];
  const rows = state.income.filter(i => i.owner === who);
  if (!rows.length) {
    state.income.push({
      id: "i" + Date.now(),
      name: "Pay",
      amount: target,
      owner: who,
      scope: "personal",
      recurring: true
    });
    return;
  }
  const rest = rows.slice(1).reduce((s, i) => s + Number(i.amount || 0), 0);
  rows[0].amount = Math.max(0, target - rest);
}

function todayForecastBaseline() {
  const items = visibleMonthly().filter(m => isJointBill(m) || m.owner === viewerId() || m.payer === viewerId());
  const debts = visibleDebts().filter(d => Number(d.minimum) > 0);
  const bills = items.reduce((s, m) => s + monthShare(m), 0)
    + debts.reduce((s, d) => s + Number(d.minimum || 0) + Number(d.extra || 0), 0);
  const income = (state.income || []).filter(i => i.owner === viewerId()).reduce((s, i) => s + Number(i.amount || 0), 0);
  return { income, bills, cash: income - bills };
}

function clonePlan(p) {
  return JSON.parse(JSON.stringify(p));
}

function clearForecastAfter(n) {
  for (let i = n + 1; i <= 12; i++) delete forecastSaved[i];
}

function planForMonth(n) {
  for (let i = n; i >= 1; i--) {
    if (forecastSaved[i]) return clonePlan(forecastSaved[i]);
  }
  return snapshotForecast();
}

function debtInterest(balance, apr) {
  const b0 = Number(balance) || 0;
  if (!(b0 > 0.05)) return 0;
  const r = (Number(apr) || 0) / 100 / 12;
  return r > 0 ? b0 * r : 0;
}

function dueThisMonth(balance, scheduled, apr) {
  const b0 = Number(balance) || 0;
  if (!(b0 > 0.05)) return 0;
  return Math.min(Number(scheduled) || 0, b0 + debtInterest(b0, apr));
}

function stepDebt(balance, payment, apr) {
  const b0 = Number(balance) || 0;
  if (!(b0 > 0.05)) return 0;
  return Math.max(0, b0 + debtInterest(b0, apr) - (Number(payment) || 0));
}

function startingDebtBalances() {
  const bals = {};
  (state.debts || []).forEach(d => { bals[String(d.id)] = Number(d.balance || 0); });
  return bals;
}

function liveDebtById(id) {
  return (state.debts || []).find(d => String(d.id) === String(id));
}

function strategyScore(mode, bal, min, apr) {
  if (!(bal > 0.05)) return -Infinity;
  if (mode === "apr") return Number(apr) || 0;
  if (mode === "balance") return bal;
  if (mode === "snowball") return -bal;
  if (mode === "cashflow") return min / bal;
  return -Infinity;
}

function applyForecastStrategy(mode) {
  const pool0 = Math.max(0, Number(forecastPool) || 0);
  if (!forecastPlan) forecastPlan = snapshotForecast();
  let bals = startingDebtBalances();
  let freed = 0;
  const base = snapshotForecast();
  for (let m = 1; m <= 12; m++) {
    const plan = clonePlan(base);
    plan.debts.forEach(fd => {
      const gone = !(bals[String(fd.id)] > 0.05);
      fd.extra = 0;
      fd.removed = gone;
    });
    const live = plan.debts.filter(fd => !fd.removed && bals[String(fd.id)] > 0.05);
    let target = null;
    let best = -Infinity;
    live.forEach(fd => {
      const row = liveDebtById(fd.id);
      const bal = bals[String(fd.id)];
      const min = Number(fd.minimum || 0);
      const apr = row ? row.apr : 0;
      const sc = strategyScore(mode, bal, min, apr);
      if (sc > best) { best = sc; target = fd; }
    });
    const poolNow = pool0 + freed;
    if (target) {
      const row = liveDebtById(target.id);
      const bal = bals[String(target.id)];
      const min = Number(target.minimum || 0);
      const apr = row ? row.apr : 0;
      const due = dueThisMonth(bal, min + poolNow, apr);
      target.extra = Math.max(0, Math.round((due - min) * 100) / 100);
    }
    forecastSaved[m] = clonePlan(plan);
    const before = Object.assign({}, bals);
    bals = applyMonthPayments(bals, plan);
    plan.debts.forEach(fd => {
      const id = String(fd.id);
      if (before[id] > 0.05 && !(bals[id] > 0.05)) freed += Number(fd.minimum || 0);
    });
  }
  forecastEditMonth = 1;
  forecastPlan = clonePlan(forecastSaved[1]);
  forecastDirty = false;
  runForecast({ keep: true });
}

function persistForecastMonth(clearLater) {
  if (!forecastPlan) return;
  forecastSaved[forecastEditMonth] = clonePlan(forecastPlan);
  if (clearLater) clearForecastAfter(forecastEditMonth);
  forecastDirty = false;
}

function planUsedForMonth(m) {
  if (forecastSaved[m]) return forecastSaved[m];
  if (m === forecastEditMonth && forecastPlan) return forecastPlan;
  return planForMonth(m);
}

function applyMonthPayments(bals, plan) {
  const next = Object.assign({}, bals);
  (plan.debts || []).forEach(fd => {
    const id = String(fd.id);
    if (fd.removed || !(next[id] > 0.05)) return;
    const live = (state.debts || []).find(d => String(d.id) === id);
    const sched = Number(fd.minimum || 0) + Number(fd.extra || 0);
    const apr = live ? live.apr : 0;
    next[id] = stepDebt(next[id], dueThisMonth(next[id], sched, apr), apr);
  });
  return next;
}

function balancesAtStartOf(month) {
  let bals = startingDebtBalances();
  for (let m = 1; m < month; m++) bals = applyMonthPayments(bals, planUsedForMonth(m));
  return bals;
}

function scorePlan(plan, startBals) {
  const today = todayForecastBaseline();
  const bals = startBals || startingDebtBalances();
  const liveItems = plan.items.filter(x => !x.removed);
  const liveDebts = plan.debts.filter(d => !d.removed && (bals[String(d.id)] == null || bals[String(d.id)] > 0.05));
  const bills = liveItems.reduce((s, x) => s + Number(x.amount || 0), 0)
    + liveDebts.reduce((s, d) => {
      const bal = bals[String(d.id)];
      const live = (state.debts || []).find(x => String(x.id) === String(d.id));
      const sched = Number(d.minimum || 0) + Number(d.extra || 0);
      if (bal == null) return s + sched;
      return s + dueThisMonth(bal, sched, live ? live.apr : 0);
    }, 0);
  const cash = today.income - bills;
  return {
    bills,
    cash,
    dBills: bills - today.bills,
    dCash: cash - today.cash
  };
}

function buildForecastLog() {
  forecastLog = [];
  let bals = startingDebtBalances();
  for (let m = 1; m <= 12; m++) {
    const plan = planForMonth(m);
    plan.debts.forEach(fd => {
      if (!(bals[String(fd.id)] > 0.05)) fd.removed = true;
    });
    if (forecastSaved[m]) forecastSaved[m] = clonePlan(plan);
    const rows = [];
    plan.debts.forEach(fd => {
      const id = String(fd.id);
      const start = Number(bals[id] || 0);
      if (!(start > 0.05) || fd.removed) return;
      const live = liveDebtById(id);
      const min = Number(fd.minimum || 0);
      const extra = Number(fd.extra || 0);
      const apr = live ? live.apr : 0;
      const paid = dueThisMonth(start, min + extra, apr);
      const end = stepDebt(start, paid, apr);
      if (paid > 0.004 || extra > 0.004 || (start > 0.05 && !(end > 0.05))) {
        rows.push({
          month: m,
          name: fd.name,
          paid,
          extra,
          min,
          start,
          end,
          paidOff: start > 0.05 && !(end > 0.05)
        });
      }
    });
    if (rows.length) forecastLog.push({ month: m, rows });
    bals = applyMonthPayments(bals, plan);
  }
  if (forecastEditMonth && forecastSaved[forecastEditMonth]) {
    forecastPlan = clonePlan(forecastSaved[forecastEditMonth]);
  }
}

function runForecast(opts) {
  if (forecastPlan && !forecastSaved[forecastEditMonth]) {
    forecastSaved[forecastEditMonth] = clonePlan(forecastPlan);
  }
  const today = todayForecastBaseline();
  forecastResult = [];
  let bals = startingDebtBalances();
  let prevBills = today.bills;
  let prevCash = today.cash;
  let cum = 0;
  let extraVsToday = 0;
  for (let m = 1; m <= 12; m++) {
    const plan = planForMonth(m);
    const s = scorePlan(plan, bals);
    cum += s.cash;
    extraVsToday += s.dCash;
    forecastResult.push({
      month: m,
      bills: s.bills,
      cash: s.cash,
      dBills: s.dBills,
      dCash: s.dCash,
      cumCash: cum,
      extraVsToday,
      dExpMo: s.bills - prevBills,
      dCashMo: s.cash - prevCash
    });
    prevBills = s.bills;
    prevCash = s.cash;
    bals = applyMonthPayments(bals, plan);
  }
  buildForecastLog();
}

function forecastPage() {
  if (!forecastPlan) forecastPlan = planForMonth(forecastEditMonth);
  const startBals = balancesAtStartOf(forecastEditMonth);
  (forecastPlan.debts || []).forEach(fd => {
    if (!(startBals[String(fd.id)] > 0.05)) fd.removed = true;
  });
  const now = scorePlan(forecastPlan, startBals);
  const chips = `
    <div class="row-actions">
      ${["all","unpaid","paid","shared","personal"].map(f => `<button class="btn ${monthFilter===f?"active":""}" data-month="${f}">${f[0].toUpperCase()+f.slice(1)}</button>`).join("")}
      <button class="btn active" data-month="forecast">Forecast</button>
    </div>`;
  const fcPayoff = (x, bal) => {
    const d = (state.debts || []).find(row => String(row.id) === String(x.id));
    if (!(bal > 0.05)) return "Paid off this month forward";
    const pay = Number(x.minimum || 0) + Number(x.extra || 0);
    return "Paying " + money(pay) + "/mo · " + payoffLabel(payoffStats(bal, pay, d ? d.apr : 0).months);
  };
  const row = (x, kind) => {
    const bal = kind === "debt" ? Number(startBals[String(x.id)] || 0) : 0;
    const paidOff = kind === "debt" && !(bal > 0.05);
    const dull = x.removed || paidOff;
    return `
    <tr style="${dull ? "opacity:.4;color:var(--muted)" : ""}">
      <td>${x.name}${kind === "debt" ? `<div class="note">Owed ${money(bal)} at start of month ${forecastEditMonth}${x.removed || paidOff ? (paidOff ? " · paid off" : "") : " · " + fcPayoff(x, bal)}</div>` : ""}</td>
      <td>
        <input data-fc-amt="${kind}:${x.id}" type="number" step="1" value="${kind === "debt" ? x.minimum : x.amount}" style="width:96px" ${x.removed ? "disabled" : ""} />
      </td>
      ${kind === "debt" ? `<td><input data-fc-extra="${x.id}" type="number" step="1" value="${x.extra}" style="width:88px" ${x.removed ? "disabled" : ""} /></td>` : ""}
      <td>
        ${x.removed
          ? `<button class="btn" data-fc-on="${kind}:${x.id}">On</button>`
          : `<button class="btn" data-fc-off="${kind}:${x.id}">Off</button>`}
      </td>
    </tr>`;
  };
  return `
    <p class="kicker">Sandbox</p>
    <h1>Forecast</h1>
    <p class="note">Off a bill in month 1, then Save or Simulate. Later months inherit that cut. Only a later month you edit and save is locked.</p>
    ${chips}
    <div class="tile" style="margin:14px 0">
      <div class="row-actions" style="align-items:center">
        <label class="note">Editing month
          <select id="fcMonth">
            ${[1,2,3,4,5,6,7,8,9,10,11,12].map(n => `<option value="${n}" ${n===forecastEditMonth?"selected":""}>Month ${n}${forecastSaved[n] ? " · saved" : ""}</option>`).join("")}
          </select>
        </label>
        <button class="btn" id="fcSave">Save this month</button>
        <button class="btn primary" id="fcRun">Simulate 12 months</button>
        <button class="btn" id="fcReset">Reset all</button>
      </div>
      <div class="row-actions" style="align-items:center;margin-top:12px">
        <label class="note">Extra pool / mo
          <input id="fcPool" type="number" step="1" min="0" value="${forecastPool}" style="width:96px" />
        </label>
        <button class="btn" data-fc-strat="apr">Highest APR</button>
        <button class="btn" data-fc-strat="balance">Highest balance</button>
        <button class="btn" data-fc-strat="snowball">Smallest balance</button>
        <button class="btn" data-fc-strat="cashflow">Best cashflow</button>
      </div>
      <div class="row-actions" style="align-items:center">
        <span></span>
        <div style="margin-left:auto;text-align:right">
          <div class="label">Income</div>
          <div class="val income-edit" id="editIncome" contenteditable="true" spellcheck="false">${heroMoney(todayForecastBaseline().income)}</div>
        </div>
      </div>
      <p class="note" style="margin-top:10px">This month’s draft · expense ${money(now.bills)} · cashflow ${signedHero(now.cash)} · vs today ${signedHero(now.dBills)} exp / ${signedHero(now.dCash)} cash</p>
    </div>
    ${forecastResult ? `
    <div class="tile" style="margin-bottom:16px;overflow-x:auto">
      <div class="label">12-month run</div>
      <p class="note">Cashflow = leftover this month. Cum cashflow = leftover piled up. Extra vs today = how much more/less than staying on today’s plan. Δ vs last mo = the rate changed this month.</p>
      <table class="table">
        <thead><tr>
          <th>Month</th>
          <th>Expense</th>
          <th>Cashflow</th>
          <th>Δ expense</th>
          <th>Δ cash vs today</th>
          <th>Cum cashflow</th>
          <th>Extra vs today’s plan</th>
          <th>Δ exp vs last mo</th>
          <th>Δ cash vs last mo</th>
        </tr></thead>
        <tbody>
          ${(() => { const t = todayForecastBaseline(); return `<tr>
            <td>Today</td>
            <td>${money(t.bills)}</td>
            <td>${signedHero(t.cash)}</td>
            <td></td>
            <td>${signedHero(0)}</td>
            <td>${signedHero(0)}</td>
            <td>${signedHero(0)}</td>
            <td>—</td>
            <td>—</td>
          </tr>`; })()}
          ${forecastResult.map(r => `<tr>
            <td>${r.month}</td>
            <td>${money(r.bills)}</td>
            <td>${signedHero(r.cash)}</td>
            ${(() => {
              const delta = r.month === 1 ? r.dBills : r.dExpMo;
              if (Math.abs(delta) < 0.5) return "<td></td>";
              return `<td style="color:${delta<=0?"var(--good)":"var(--bad)"}">${signedHero(delta)}</td>`;
            })()}
            <td style="color:${r.dCash>=0?"var(--good)":"var(--bad)"}">${signedHero(r.dCash)}</td>
            <td style="color:${r.cumCash>=0?"var(--good)":"var(--bad)"}">${signedHero(r.cumCash)}</td>
            <td style="color:${r.extraVsToday>=0?"var(--good)":"var(--bad)"}">${signedHero(r.extraVsToday)}</td>
            <td style="color:${r.dExpMo<=0?"var(--good)":"var(--bad)"}">${signedHero(r.dExpMo)}</td>
            <td style="color:${r.dCashMo>=0?"var(--good)":"var(--bad)"}">${signedHero(r.dCashMo)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    ${forecastLog.length ? `
    <div class="tile" style="margin-bottom:16px">
      <button class="btn" id="fcLogToggle">${forecastLogOpen ? "Hide" : "Show"} payoff schedule</button>
      <span class="note" style="margin-left:10px">${forecastLog.reduce((s, m) => s + m.rows.filter(r => r.paidOff).length, 0)} paid off · ${money(forecastLog.reduce((s, m) => s + m.rows.reduce((a, r) => a + r.paid, 0), 0))} applied</span>
      ${forecastLogOpen ? `
        <p class="note" style="margin-top:12px">${forecastLog.flatMap(m => m.rows.filter(r => r.paidOff).map(r => "Month " + m.month + " · " + r.name + " paid off, " + money(r.min) + "/mo freed")).join(" · ") || "No debt reaches $0 in this window."}</p>
        <table class="table" style="margin-top:10px">
          <thead><tr><th>Month</th><th>Debt</th><th>Paid</th><th>Extra</th><th>Still owed</th><th></th></tr></thead>
          <tbody>
            ${forecastLog.flatMap(m => m.rows.map(r => `<tr>
              <td>${m.month}</td>
              <td>${r.name}</td>
              <td>${money(r.paid)}</td>
              <td>${r.extra ? money(r.extra) : ""}</td>
              <td>${r.paidOff ? "$0" : money(r.end)}</td>
              <td>${r.paidOff ? '<span class="badge paid">Paid off</span>' : ""}</td>
            </tr>`)).join("")}
          </tbody>
        </table>
      ` : ""}
    </div>` : ""}
    ` : `<p class="note">Save or Simulate after you change a month.</p>`}
    <div class="exp-sec exp-living">
      <h3>Living · month ${forecastEditMonth}</h3>
      <div class="tile">
        <table class="table">
          <thead><tr><th>Name</th><th>Amount</th><th></th></tr></thead>
          <tbody>${forecastPlan.items.filter(x => x.kind !== "subscription" && x.kind !== "membership").map(x => row(x, "item")).join("")}</tbody>
        </table>
      </div>
    </div>
    <div class="exp-sec exp-subs">
      <h3>Subscriptions · month ${forecastEditMonth}</h3>
      <div class="tile">
        <table class="table">
          <thead><tr><th>Name</th><th>Amount</th><th></th></tr></thead>
          <tbody>${forecastPlan.items.filter(x => x.kind === "subscription" || x.kind === "membership").map(x => row(x, "item")).join("")}</tbody>
        </table>
      </div>
    </div>
    <div class="exp-sec exp-debt">
      <h3>Debts · month ${forecastEditMonth}</h3>
      <div class="tile">
        <table class="table">
          <thead><tr><th>Name</th><th>Min / mo</th><th>Extra</th><th></th></tr></thead>
          <tbody>${forecastPlan.debts.map(x => row(x, "debt")).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
}

function monthly() {
  if (monthFilter === "forecast") return forecastPage();
  let base = visibleMonthly();
  if (monthFilter === "shared") base = base.filter(m => m.type === "shared" || isJointBill(m));
  if (monthFilter === "personal") base = base.filter(m => isJointBill(m) || m.owner === viewerId() || m.payer === viewerId());
  let list = base;
  if (monthFilter === "unpaid") list = base.filter(m => !monthPaidFor(m));
  if (monthFilter === "paid") list = base.filter(m => monthPaidFor(m));
  const living = list.filter(m => m.kind !== "subscription" && m.kind !== "membership");
  const subs = list.filter(m => m.kind === "subscription" || m.kind === "membership");
  const allDebts = visibleDebts().filter(d => Number(d.minimum) > 0);
  let debtRows = allDebts;
  if (monthFilter === "unpaid") debtRows = allDebts.filter(d => !d.minPaid);
  if (monthFilter === "paid") debtRows = allDebts.filter(d => d.minPaid);
  const debtUnpaid = allDebts.filter(d => !d.minPaid);
  const debtUnpaidSum = debtUnpaid.reduce((s, d) => s + Number(d.minimum || 0), 0);
  const debtMinAll = allDebts.reduce((s, d) => s + Number(d.minimum || 0), 0);
  const debtSum = debtRows.reduce((s, d) => s + Number(d.minimum || 0), 0);
  const unpaidItems = base.filter(m => !monthPaidFor(m));
  const unpaidSum = unpaidItems.reduce((s, m) => s + monthShare(m), 0) + debtUnpaidSum;
  const myIncome = (state.income || []).filter(i => i.owner === viewerId()).reduce((s, i) => s + Number(i.amount || 0), 0);
  const plannedOut = base.reduce((s, m) => s + monthShare(m), 0) + debtMinAll;
  const paidOut = base.filter(m => monthPaidFor(m)).reduce((s, m) => s + monthShare(m), 0)
    + allDebts.filter(d => d.minPaid).reduce((s, d) => s + Number(d.minimum || 0), 0);
  const extras = allDebts.reduce((s, d) => s + Number(d.extra || 0), 0);
  const staticNet = myIncome - plannedOut;
  const cashflow = myIncome - paidOut - extras;
  const monthRow = m => `<tr>
    <td>${m.name}</td>
    <td>${money(m.amount)}${isJointBill(m) ? `<div class="note">Your share ${money(monthShare(m))}</div>` : ""}</td>
    <td>${m.due || "—"}</td>
    <td>${m.kind}</td>
    <td><span class="badge ${m.type}">${isJointBill(m) ? "shared" : m.type}</span></td>
    <td>${monthFilter === "shared" && isJointBill(m)
      ? `<span class="note">Mark your half on Personal</span>`
      : `<button class="badge ${monthPaidFor(m)?"paid":"unpaid"}" data-month-paid="${m.id}">${monthPaidFor(m) ? (isJointBill(m) ? "My half paid" : "Paid") : "Unpaid"}</button>`}</td>
    <td>
      <button class="btn" data-edit-month="${m.id}">Edit</button>
      <button class="btn" data-del-month="${m.id}">Delete</button>
    </td>
  </tr>`;
  const sectionTable = (rows) => `
    <div class="tile">
      <table class="table">
        <thead><tr><th>Name</th><th>Amount</th><th>Due</th><th>Kind</th><th>Whose</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  return `
    <p class="kicker">Repeating load</p>
    <h1>Monthly expenses</h1>
    <p class="note">Living costs, subscriptions, and debt minimums for this view. Date-night spend lives on Transactions.</p>
    <div class="grid-3">
      <div class="tile">
        <div class="label">Income</div>
        <div class="val income-edit" id="editIncome" contenteditable="true" spellcheck="false">${heroMoney(myIncome)}</div>
      </div>
      <div class="tile">
        <div class="label">Unpaid</div>
        <div class="val" style="display:flex;justify-content:space-between;align-items:baseline;gap:12px">
          <span>${unpaidItems.length + debtUnpaid.length}</span>
          <span>${money(unpaidSum)}</span>
        </div>
        <p class="note">Bills + debt mins still open · extras not included</p>
      </div>
      <div class="tile split-tile">
        <div class="split-half">
          <div class="label">Planned net</div>
          <div class="val" style="color:${staticNet>=0?"var(--good)":"var(--bad)"}">${signedHero(staticNet)}</div>
          <p class="note">Income − monthly bills − debt mins</p>
        </div>
        <div class="split-half">
          <div class="label">Cashflow</div>
          <div class="val" style="color:${cashflow>=0?"var(--good)":"var(--bad)"}">${signedHero(cashflow)}</div>
          <p class="note">After paid items + extras. Unused subs stay out.</p>
        </div>
      </div>
    </div>
    <div class="row-actions">
      ${["all","unpaid","paid","shared","personal"].map(f => `<button class="btn ${monthFilter===f?"active":""}" data-month="${f}">${f[0].toUpperCase()+f.slice(1)}</button>`).join("")}
      ${(monthFilter === "personal" || monthFilter === "forecast") ? `<button class="btn ${monthFilter==="forecast"?"active":""}" data-month="forecast">Forecast</button>` : ""}
      <button class="btn primary" id="openShare">Add expense</button>
    </div>
    <div class="exp-sec exp-living">
      <h3>Living · ${money(living.reduce((s, m) => s + monthShare(m), 0))}</h3>
      ${living.length ? sectionTable(living.map(monthRow).join("")) : `<p class="note">No living expenses in this filter.</p>`}
    </div>
    <div class="exp-sec exp-subs">
      <h3>Subscriptions · ${money(subs.reduce((s, m) => s + monthShare(m), 0))}</h3>
      ${subs.length ? sectionTable(subs.map(monthRow).join("")) : `<p class="note">No subscriptions in this filter.</p>`}
    </div>
    <div class="exp-sec exp-debt">
      <h3>Debt minimums · ${money(debtSum)}</h3>
      ${debtRows.length ? `
      <div class="tile">
        <table class="table">
          <thead><tr><th>Debt</th><th>Min / mo</th><th>Balance</th><th>APR</th><th>Status</th><th>Extra</th></tr></thead>
          <tbody>
            ${debtRows.map(d => `<tr>
              <td>${d.name}</td>
              <td>${money(d.minimum)}</td>
              <td>${money(d.balance)}</td>
              <td>${d.apr}%</td>
              <td><button class="badge ${d.minPaid?"paid":"unpaid"}" data-debt-min-paid="${d.id}">${d.minPaid?"Paid":"Unpaid"}</button></td>
              <td>
                <input data-extra-mo="${d.id}" type="number" step="1" value="${d.extra || 0}" style="width:88px" />
                <button class="btn" data-set-extra-mo="${d.id}">Set extra</button>
              </td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>` : `<p class="note">No debt minimums on this view.</p>`}
    </div>
    <div class="tile" style="margin-top:12px">
      <h3>Add a monthly expense</h3>
      <div class="row-actions" style="align-items:center">
        <input id="mcName" placeholder="Name" />
        <input id="mcAmt" type="number" step="0.01" placeholder="Amount" style="width:110px" />
        <input id="mcDue" type="date" />
        <select id="mcKind">
          <option value="bill">Bill</option>
          <option value="subscription">Subscription</option>
          <option value="health">Health</option>
          <option value="membership">Membership</option>
          <option value="other">Other</option>
        </select>
        <select id="mcType"><option value="shared">Shared</option><option value="personal">Personal</option></select>
        <button class="btn primary" id="addMonthly">Add</button>
      </div>
    </div>
  `;
}

function visibleDebts() {
  const list = bag().debts || [];
  if (user === "solo") return list.filter(d => d.owner === "alex" || d.owner === "both");
  return list.filter(d => {
    if (d.owner === "both") return !d.hiddenFromPartner;
    if (d.owner === user) return true;
    return !!d.sharedWithPartner;
  });
}

function defaultApr(type) {
  if (/credit/i.test(type || "")) return 22.5;
  if (/student/i.test(type || "")) return 6.5;
  if (/auto/i.test(type || "")) return 7.5;
  return 10;
}

function payoffStats(balance, payment, apr) {
  const r = (Number(apr) || 0) / 100 / 12;
  if (!(balance > 0) || !(payment > 0)) return { months: Infinity, interest: 0 };
  if (r > 0 && payment <= balance * r + 0.01) return { months: Infinity, interest: 0 };
  let b = balance, months = 0, interest = 0;
  while (b > 0.05 && months < 600) {
    const int = r > 0 ? b * r : 0;
    interest += int;
    b = b + int - payment;
    months++;
  }
  return { months, interest };
}

function payoffLabel(months) {
  if (!isFinite(months)) return "Won't pay off at this rate";
  if (months === 1) return "1 month remaining";
  if (months < 12) return months + " months remaining";
  const y = Math.floor(months / 12);
  const m = months % 12;
  return y + (y === 1 ? " year" : " years") + (m ? " " + m + " mo" : "") + " remaining";
}

function paymentToClear(balance, months, apr) {
  const r = (Number(apr) || 0) / 100 / 12;
  if (months <= 0) return balance;
  if (r <= 0) return balance / months;
  const pow = Math.pow(1 + r, months);
  return balance * r * pow / (pow - 1);
}

function debtInsights(d) {
  const apr = d.apr || defaultApr(d.type);
  const nowPay = Number(d.minimum) + Number(d.extra);
  const now = payoffStats(d.balance, nowPay, apr);
  const lines = [];
  const others = (state.debts || []).filter(x => x.id !== d.id && x.balance > 0);
  const highestApr = [d, ...others].sort((a, b) => (b.apr || defaultApr(b.type)) - (a.apr || defaultApr(a.type)))[0];
  const smallest = [d, ...others].sort((a, b) => a.balance - b.balance)[0];

  if (!isFinite(now.months)) {
    const cover = d.balance * ((apr / 100) / 12);
    lines.push(`At ${money(nowPay)}/mo you are not covering interest (~${money(cover)}/mo). Raise the payment above that or the balance grows.`);
  } else {
    lines.push(`Current path: ${money(nowPay)}/mo finishes in ${payoffLabel(now.months)} and costs about ${money(now.interest)} in interest.`);
  }

  [6, 12, 24].forEach(target => {
    if (!isFinite(now.months) || now.months > target) {
      const need = paymentToClear(d.balance, target, apr);
      const extraNeed = Math.max(0, need - d.minimum);
      const more = Math.max(0, need - nowPay);
      if (need > 0 && extraNeed < d.balance) {
        lines.push(`To clear this in ${target} months, pay ${money(need)}/mo total (${money(more)} more than today, ${money(extraNeed)} extra over the minimum).`);
      }
    }
  });

  [25, 50, 100].forEach(bump => {
    const next = payoffStats(d.balance, nowPay + bump, apr);
    if (isFinite(now.months) && isFinite(next.months) && next.months < now.months) {
      const savedMo = now.months - next.months;
      const savedInt = Math.max(0, now.interest - next.interest);
      if (savedMo >= 2 || savedInt >= 20) {
        lines.push(`Add ${money(bump)} extra: finish ${savedMo} month${savedMo === 1 ? "" : "s"} sooner and save ${money(savedInt)} interest.`);
      }
    } else if (!isFinite(now.months) && isFinite(next.months)) {
      lines.push(`Add ${money(bump)} extra and this can actually reach payoff in ${payoffLabel(next.months).replace(" remaining", "")}.`);
    }
  });

  if (highestApr && highestApr.id === d.id && others.length) {
    lines.push(`Highest APR in this household (${apr}%). Extra dollars save more interest here than on the other debts.`);
  } else if (highestApr && highestApr.id !== d.id) {
    lines.push(`After the minimum, extra cash usually belongs on ${highestApr.name} first (${highestApr.apr || defaultApr(highestApr.type)}% APR).`);
  }
  if (smallest && smallest.id === d.id && others.length && d.balance < 2500) {
    lines.push(`Smallest balance. Paying this off first frees up ${money(d.minimum)}/mo for the next debt.`);
  }

  const unique = [];
  lines.forEach(l => { if (!unique.includes(l)) unique.push(l); });
  return unique.slice(0, 5);
}

function headerKey(h) {
  return String(h || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}
function pickCol(row, keys) {
  for (const k of keys) {
    if (row[k] != null && String(row[k]).trim() !== "") return row[k];
  }
  return "";
}
function toNum(v) {
  if (v == null || v === "") return 0;
  const n = Number(String(v).replace(/[$,]/g, ""));
  return Number.isFinite(n) ? n : 0;
}
function ownerFrom(v) {
  const s = String(v || "").toLowerCase();
  if (s.includes("jord")) return "jordan";
  if (s.includes("both") || s.includes("shared") || s.includes("joint")) return "both";
  if (s.includes("alex")) return "alex";
  return user === "jordan" ? "jordan" : "alex";
}
function rowsToDebts(rows) {
  return rows.map((raw, i) => {
    const row = {};
    Object.keys(raw || {}).forEach(k => { row[headerKey(k)] = raw[k]; });
    const name = String(pickCol(row, ["name", "debt", "debtname", "account", "accountname", "description", "title"]) || "").trim();
    if (!name) return null;
    const type = String(pickCol(row, ["type", "kind", "category"]) || "Other");
    const balance = toNum(pickCol(row, ["balance", "owed", "amountowed", "currentbalance", "amount", "current"]));
    const original = toNum(pickCol(row, ["original", "originalbalance", "startbalance", "starting", "principal"])) || balance;
    const minimum = toNum(pickCol(row, ["minimum", "min", "minpayment", "monthlyminimum", "payment"]));
    const extra = toNum(pickCol(row, ["extra", "extrapayment", "additional", "additionalpayment"]));
    const apr = toNum(pickCol(row, ["apr", "rate", "interest", "interestrate"])) || defaultApr(type);
    return {
      id: "d" + Date.now() + "-" + i,
      name,
      type,
      balance,
      original,
      minimum,
      extra,
      apr,
      owner: ownerFrom(pickCol(row, ["owner", "whose", "who", "person", "belongs"]))
    };
  }).filter(Boolean);
}
function parseCsvText(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(l => l.trim());
  if (!lines.length) return [];
  const headers = lines[0].split(",").map(h => h.trim());
  return lines.slice(1).map(line => {
    const cols = line.split(",");
    const row = {};
    headers.forEach((h, i) => { row[h] = (cols[i] || "").trim(); });
    return row;
  });
}
async function importDebtFile(file) {
  const fname = (file.name || "").toLowerCase();
  let rows = [];
  if (fname.endsWith(".csv")) {
    rows = parseCsvText(await file.text());
  } else if (window.XLSX) {
    const buf = await file.arrayBuffer();
    const wb = window.XLSX.read(buf, { type: "array" });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    rows = window.XLSX.utils.sheet_to_json(sheet, { defval: "" });
  } else {
    throw new Error("Excel import needs an internet connection in this prototype. Use a .csv to test offline.");
  }
  return rowsToDebts(rows);
}

function debtKind(d) {
  if (!(Number(d.balance) > 0.05)) return "done";
  if (/credit/i.test(d.type || "")) return "card";
  return "loan";
}

function debts() {
  const list = visibleDebts().slice().sort((a, b) => {
    const ka = debtKind(a), kb = debtKind(b);
    const order = { card: 0, loan: 1, done: 2 };
    if (order[ka] !== order[kb]) return order[ka] - order[kb];
    return (Number(b.apr) || 0) - (Number(a.apr) || 0);
  });
  const live = list.filter(d => Number(d.balance) > 0.05);
  const owed = list.reduce((s, d) => s + Number(d.balance || 0), 0);
  const monthCash = live.reduce((s, d) => s + Number(d.minimum || 0) + Number(d.extra || 0), 0);
  const extra = list.reduce((s, d) => s + Number(d.extra || 0), 0);
  const topApr = live.slice().sort((a, b) => (Number(b.apr) || 0) - (Number(a.apr) || 0))[0];
  const groups = [
    { key: "card", title: "Credit cards", rows: list.filter(d => debtKind(d) === "card") },
    { key: "loan", title: "Loans", rows: list.filter(d => debtKind(d) === "loan") },
    { key: "done", title: "Paid off", rows: list.filter(d => debtKind(d) === "done") }
  ];
  const row = d => {
    const apr = d.apr || defaultApr(d.type);
    const pay = Number(d.minimum || 0) + Number(d.extra || 0);
    const stats = payoffStats(Number(d.balance || 0), pay, apr);
    const whose = d.owner === "both" ? "Shared" : (state.users[d.owner]?.name || d.owner);
    return `<tr>
      <td>${d.name}<div class="note">${whose}</div></td>
      <td>${d.type || "—"}</td>
      <td><input data-debt-bal="${d.id}" type="number" step="1" min="0" value="${d.balance || 0}" style="width:108px" /></td>
      <td><input data-debt-apr="${d.id}" type="number" step="0.01" min="0" value="${apr}" style="width:72px" /></td>
      <td><input data-debt-min="${d.id}" type="number" step="1" min="0" value="${d.minimum || 0}" style="width:88px" /></td>
      <td><input data-debt-extra="${d.id}" type="number" step="1" min="0" value="${d.extra || 0}" style="width:88px" /></td>
      <td>${money(pay)}</td>
      <td>${Number(d.balance) > 0.05 ? payoffLabel(stats.months) : "—"}</td>
      <td>
        <button class="btn" data-pay="${d.id}">Apply extra</button>
        <button class="btn" data-clear-extra="${d.id}">Clear extra</button>
      </td>
    </tr>`;
  };
  const section = g => !g.rows.length ? "" : `
    <div class="exp-sec ${g.key === "card" ? "exp-debt" : g.key === "loan" ? "exp-living" : "exp-subs"}">
      <h3>${g.title} · ${money(g.rows.reduce((s, d) => s + Number(d.balance || 0), 0))}</h3>
      <div class="tile" style="overflow-x:auto">
        <table class="table">
          <thead><tr>
            <th>Name</th><th>Type</th><th>Owed</th><th>APR %</th><th>Min</th><th>Extra</th><th>Paying</th><th>Payoff</th><th></th>
          </tr></thead>
          <tbody>${g.rows.map(row).join("")}</tbody>
        </table>
      </div>
    </div>`;
  return `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap">
      <div>
        <p class="kicker">Pay down</p>
        <h1>Debts</h1>
        <p class="note">Edit owed or min here. Monthly expenses, Financials, and a fresh Forecast all read these same numbers.</p>
      </div>
      <div style="text-align:right">
        <input type="file" id="debtFile" accept=".xlsx,.xls,.csv" hidden />
        <button class="btn" id="importDebts">Import</button>
        <p class="note" id="importMsg" style="margin-top:8px;max-width:220px;margin-left:auto"></p>
      </div>
    </div>
    <div class="grid-3">
      <div class="tile"><div class="label">Total owed</div><div class="val">${heroMoney(owed)}</div></div>
      <div class="tile"><div class="label">Debt cash this month</div><div class="val">${heroMoney(monthCash)}</div><p class="note">Mins + extras on live balances</p></div>
      <div class="tile"><div class="label">Extra planned</div><div class="val">${heroMoney(extra)}</div></div>
    </div>
    ${topApr ? `<p class="note" style="margin:4px 0 16px">Highest APR is ${topApr.name} at ${topApr.apr || defaultApr(topApr.type)}%. Extra usually belongs there first.</p>` : ""}
    ${groups.map(section).join("")}
    <div class="tile" style="margin-top:16px">
      <h3>Add a debt</h3>
      <div class="fields" style="margin-top:10px">
        <label>Name<input id="dName" placeholder="Chase Sapphire, car loan..." /></label>
        <label>Type
          <select id="dType">
            <option>Credit card</option>
            <option>Loan</option>
            <option>Student loan</option>
            <option>Auto loan</option>
            <option>Medical</option>
            <option>Other</option>
          </select>
        </label>
        <label>Balance owed<input id="dBal" type="number" step="0.01" placeholder="0.00" /></label>
        <label>Minimum payment<input id="dMin" type="number" step="0.01" placeholder="0.00" /></label>
        <label>Extra payment<input id="dExtra" type="number" step="0.01" value="0" /></label>
        <label>APR %<input id="dApr" type="number" step="0.1" placeholder="22.5 for cards" /></label>
        <label>Whose
          <select id="dOwner">
            <option value="alex">Alex</option>
            <option value="jordan">Jordan</option>
            <option value="both">Shared</option>
          </select>
        </label>
      </div>
      <div class="row-actions">
        <button class="btn primary" id="addDebt">Add debt</button>
      </div>
    </div>
  `;
}

function finIncome(scope) {
  return (bag().income || []).filter(i => {
    if (scope === "household") return true;
    if (user === "solo") return i.owner === "alex";
    return i.owner === user;
  });
}

function finSpend(scope) {
  const list = visibleTxs();
  if (scope === "household") return list;
  if (user === "solo") return list.filter(t => t.payer === "alex");
  return list.filter(t => t.payer === user || (t.type === "personal" && t.payer === user));
}

function scopedMonthly(scope) {
  return visibleMonthly().filter(m => {
    if (/card minimum|loan minimum/i.test(m.name)) return false;
    if (scope === "household") return true;
    if (user === "solo") return m.owner === "alex" || m.type === "shared";
    return m.owner === user || (m.type === "shared" && scope === "household") || m.owner === user;
  });
}

function scopedDebts(scope) {
  return visibleDebts().filter(d => {
    if (scope === "household") return true;
    if (user === "solo") return d.owner === "alex" || d.owner === "both";
    return d.owner === user || d.owner === "both";
  });
}

function isLivingKind(m) {
  return m.kind === "bill" || m.kind === "health" || m.kind === "other";
}

function financials() {
  const inc = finIncome(finScope);
  const incTotal = inc.reduce((s, i) => s + i.amount, 0);
  const spendList = finSpend(finScope);
  const spendTotal = spendList.reduce((s, t) => s + t.amount, 0);
  const net = incTotal - spendTotal;
  const assets = visibleAccounts().filter(a => a.balance > 0).reduce((s, a) => s + a.balance, 0);
  const liabAcct = visibleAccounts().filter(a => a.balance < 0).reduce((s, a) => s + Math.abs(a.balance), 0);
  const liabDebt = visibleDebts().reduce((s, d) => s + d.balance, 0);
  const equity = assets - liabDebt;
  const monthlyOut = visibleMonthly().filter(m => finScope === "household" ? true : (user === "solo" ? m.owner === "alex" : m.owner === user || m.type === "shared" && finScope === "household")).reduce((s, m) => s + m.amount, 0);

  const tabs = `
    ${monthBanner()}
    <div class="row-actions">
      <button class="btn ${finScope==="household"?"active":""}" data-finscope="household">Household</button>
      <button class="btn ${finScope==="personal"?"active":""}" data-finscope="personal">Personal</button>
    </div>
    <div class="row-actions">
      <button class="btn ${finTab==="income"?"active":""}" data-fintab="income">P&L</button>
      <button class="btn ${finTab==="balance"?"active":""}" data-fintab="balance">Balance sheet</button>
      <button class="btn ${finTab==="cash"?"active":""}" data-fintab="cash">Cash flow</button>
      <button class="btn ${finTab==="budgets"?"active":""}" data-fintab="budgets">Budgets</button>
      <button class="btn ${finTab==="goals"?"active":""}" data-fintab="goals">Goals</button>
    </div>`;

  if (finTab === "budgets") {
    return `<p class="kicker">Financials</p><h1>Budgets</h1>${tabs}${budgets()}`;
  }
  if (finTab === "goals") {
    return `<p class="kicker">Financials</p><h1>Goals</h1>${tabs}${goals()}`;
  }
  if (finTab === "balance") {
    return `
      <p class="kicker">Financials</p>
      <h1>What we have vs what we owe</h1>
      ${tabs}
      <div class="grid-3">
        <div class="tile"><div class="label">Assets</div><div class="val">${money(assets)}</div><p class="note">Positive account balances</p></div>
        <div class="tile"><div class="label">Debts</div><div class="val">${money(liabDebt)}</div><p class="note">Cards and loans</p></div>
        <div class="tile"><div class="label">Net position</div><div class="val">${money(equity)}</div></div>
      </div>
      <div class="grid-2">
        <div class="tile"><div class="label">Accounts (assets)</div>
          ${visibleAccounts().filter(a=>a.balance>0).map(a=>`<div class="legend-row"><span>${a.name}</span><strong>${money(a.balance)}</strong></div>`).join("") || "<p class='note'>None</p>"}
        </div>
        <div class="tile"><div class="label">Debts</div>
          ${visibleDebts().map(d=>`<div class="legend-row"><span>${d.name}</span><strong>${money(d.balance)}</strong></div>`).join("")}
        </div>
      </div>
    `;
  }
  if (finTab === "cash") {
    return `
      <p class="kicker">Financials</p>
      <h1>Did cash go up or down</h1>
      ${tabs}
      <div class="grid-3">
        <div class="tile"><div class="label">Income this month</div><div class="val">${money(incTotal)}</div></div>
        <div class="tile"><div class="label">Recorded spend</div><div class="val">${money(spendTotal)}</div></div>
        <div class="tile"><div class="label">Net cash</div><div class="val">${money(net)}</div></div>
      </div>
      <div class="tile">
        <p>${net >= 0 ? "Cash is up this month on the numbers entered." : "Cash is down this month on the numbers entered."}</p>
        <p class="note" style="margin-top:8px">Repeating monthly expenses on the books: ${money(visibleMonthly().reduce((s,m)=>s+m.amount,0))}. Card balances are on Debts, not double-counted here as new spend.</p>
      </div>
    `;
  }
  const monthItems = scopedMonthly(finScope);
  const living = monthItems.filter(isLivingKind);
  const livingTotal = living.reduce((s, m) => s + m.amount, 0);
  const afterLiving = incTotal - livingTotal;
  const debtList = scopedDebts(finScope);
  const debtMin = debtList.reduce((s, d) => s + Number(d.minimum || 0), 0);
  const debtExtra = debtList.reduce((s, d) => s + Number(d.extra || 0), 0);
  const debtPay = debtMin + debtExtra;
  const afterDebt = afterLiving - debtPay;
  const discMonthly = monthItems.filter(m => m.kind === "subscription" || m.kind === "membership");
  const discCats = ["Eating out", "Fun", "Groceries", "Transport"];
  const livingNames = new Set(living.map(m => m.name.toLowerCase()));
  const discFromTx = groupSum(
    spendList.filter(t => inPeriod(t, "this") && discCats.includes(t.cat) && !livingNames.has((t.name || "").toLowerCase()) && t.cat !== "Rent" && t.cat !== "Utilities"),
    t => t.cat
  );
  const discRows = [
    ...discMonthly.map(m => [m.name, m.amount]),
    ...discFromTx
  ];
  const discTotal = discRows.reduce((s, r) => s + r[1], 0);
  const afterDisc = afterDebt - discTotal;
  const topDisc = [...discRows].sort((a, b) => b[1] - a[1])[0];

  return `
    <p class="kicker">Financials</p>
    <h1>What came in vs what went out</h1>
    ${tabs}
    <div class="grid-2">
      <div class="tile">
        <div class="label">P&L · this month</div>
        <p class="note" style="margin:6px 0 12px">Living is from Monthly expenses. Discretionary is this month's transactions. Those two are not mixed.</p>

        <p class="label">Income</p>
        ${inc.map(i => `<div class="legend-row"><span>${i.name}${i.recurring ? " · recurring" : " · this month"}</span><span><strong>${money(i.amount)}</strong> <button class="btn" data-del-inc="${i.id}">Delete</button></span></div>`).join("") || `<div class="legend-row"><span>No income entered</span><strong>${money(0)}</strong></div>`}
        <div class="legend-row"><span>Total income</span><strong>${money(incTotal)}</strong></div>
        <div class="row-actions" style="align-items:center;margin-top:8px">
          <input id="incName" placeholder="Paycheck, commission..." />
          <input id="incAmt" type="number" step="0.01" placeholder="Amount" style="width:110px" />
          <label class="note"><input type="checkbox" id="incRec" /> Recurring</label>
          <button class="btn primary" id="addIncome">Add income</button>
        </div>

        <p class="label" style="margin-top:16px">Living expenses</p>
        ${living.map(m => `<div class="legend-row"><span>${m.name}</span><strong>${money(m.amount)}</strong></div>`).join("") || `<p class="note">No living expenses on Monthly expenses.</p>`}
        <div class="legend-row"><span>Total living</span><strong>${money(livingTotal)}</strong></div>
        <div class="legend-row"><span>Left after living</span><strong>${money(afterLiving)}</strong></div>

        <p class="label" style="margin-top:16px">Debt payments</p>
        ${debtList.map(d => `<div class="legend-row"><span>${d.name}</span><strong>${money(Number(d.minimum))}</strong></div>`).join("") || `<p class="note">No debts.</p>`}
        <div class="legend-row"><span>Total debt payments</span><strong>${money(debtMin)}</strong></div>
        <div class="legend-row"><span>Remaining after debt</span><strong>${money(afterLiving - debtMin)}</strong></div>

        <p class="label" style="margin-top:16px">Additional debt payments</p>
        ${debtList.filter(d => Number(d.extra) > 0).map(d => `<div class="legend-row"><span>${d.name}</span><strong>${money(Number(d.extra))}</strong></div>`).join("") || `<p class="note">No extra debt payments this month.</p>`}
        <div class="legend-row"><span>Total additional debt payments</span><strong>${money(debtExtra)}</strong></div>
        <div class="legend-row"><span>Remaining after additional debt</span><strong>${money(afterDebt)}</strong></div>

        <p class="label" style="margin-top:16px">Discretionary</p>
        ${discRows.map(r => `<div class="legend-row"><span>${r[0]}</span><strong>${money(r[1])}</strong></div>`).join("") || `<p class="note">No discretionary spend logged.</p>`}
        <div class="legend-row"><span>Total discretionary</span><strong>${money(discTotal)}</strong></div>
        <div class="legend-row"><span>Balance after discretionary</span><strong>${money(afterDisc)}</strong></div>

        <div class="legend-row" style="margin-top:10px;border-top:1px solid var(--line);padding-top:12px"><span>Net income</span><strong>${money(afterDisc)}</strong></div>
      </div>
      <div>
        <div class="tile">
          <div class="label">Living expenses / mo</div>
          <div class="val">${heroMoney(livingTotal)}</div>
          <p class="note">Rent, utilities, health, and other repeating costs</p>
        </div>
        <div class="tile" style="margin-top:12px">
          <div class="label">Debt payments this month</div>
          <div class="val">${heroMoney(debtPay)}</div>
          <p class="note">Min ${heroMoney(debtMin)} · extra ${heroMoney(debtExtra)}</p>
        </div>
        <div class="tile" style="margin-top:12px">
          <div class="label">${topDisc ? topDisc[0] + " this month" : "Highest discretionary"}</div>
          <div class="val">${topDisc ? heroMoney(topDisc[1]) : "—"}</div>
          ${topDisc ? (() => {
            const last = catSpend("last", topDisc[0]);
            const diff = topDisc[1] - last;
            if (!diff) return `<p class="note">Even with last month</p>`;
            return `<p class="note">${heroMoney(Math.abs(diff))} ${diff > 0 ? "more" : "less"} than last month</p>`;
          })() : `<p class="note">No discretionary spend yet</p>`}
        </div>
        <div class="tile" style="margin-top:12px">
          <div class="label">Total expenses</div>
          <div class="val">${heroMoney(livingTotal + debtPay + discTotal)}</div>
          <p class="note">Living + debt + discretionary</p>
        </div>
        <div class="tile" style="margin-top:12px">
          <div class="label">Net</div>
          <div class="val" style="color:${afterDisc >= 0 ? "var(--good)" : "var(--bad)"}">${signedHero(afterDisc)}</div>
          <p class="note">${afterDisc >= 0 ? "Left over this month" : "Short this month"}</p>
        </div>
      </div>
    </div>
  `;
}

function viewerLeftover() {
  const who = viewerId();
  const inc = (state.income || []).filter(i => i.owner === who).reduce((s, i) => s + Number(i.amount || 0), 0);
  const bills = visibleMonthly()
    .filter(m => isJointBill(m) || m.owner === who || m.payer === who)
    .reduce((s, m) => s + monthShare(m), 0);
  const mins = visibleDebts().reduce((s, d) => s + Number(d.minimum || 0), 0);
  return inc - bills - mins;
}

function goals() {
  const left = viewerLeftover();
  return `
    <p class="note">Leftover this month after bills + debt mins: ${signedHero(left)}. Apply some of that to a goal.</p>
    <div class="grid-3">
      ${(state.goals || []).map(g => {
        const pct = g.target ? Math.min(100, (g.saved / g.target) * 100) : 0;
        return `<div class="tile">
          <div class="label">${g.scope || "personal"}</div>
          <h3>${g.name}</h3>
          <div class="val">${money(g.saved)}</div>
          <p class="note">of ${money(g.target)}</p>
          <div class="bar"><span style="width:${pct}%"></span></div>
          <div class="row-actions">
            <input data-goal-amt="${g.id}" type="number" step="1" placeholder="Add" style="width:88px" />
            <button class="btn" data-goal-add="${g.id}">Add</button>
            <button class="btn" data-goal-left="${g.id}">Use leftover</button>
            <button class="btn" data-del-goal="${g.id}">Remove</button>
          </div>
        </div>`;
      }).join("") || `<div class="tile"><p class="note">No goals yet.</p></div>`}
    </div>
    <div class="tile" style="margin-top:16px">
      <h3>Add goal</h3>
      <div class="row-actions" style="align-items:center">
        <input id="gName" placeholder="Emergency fund" />
        <input id="gTarget" type="number" step="1" placeholder="Target" style="width:110px" />
        <select id="gScope"><option value="personal">Personal</option><option value="shared">Shared</option></select>
        <button class="btn primary" id="addGoal">Add</button>
      </div>
    </div>
  `;
}

function settle() {
  const owe = balanceBetween();
  const dir = owe >= 0 ? "Jordan owes Alex" : "Alex owes Jordan";
  return `
    <p class="kicker">Between you</p>
    <h1>Settle-up</h1>
    <div class="grid-2">
      <div class="tile">
        <div class="label">Running balance</div>
        <div class="val">${money(Math.abs(owe))}</div>
        <p style="margin:10px 0">${dir}</p>
        <button class="btn primary" id="settleNow">Settle now</button>
        <p class="note" style="margin-top:10px">Clears the IOU to zero. Does not move real money in this prototype.</p>
      </div>
      <div class="tile">
        <div class="label">Paid shared items</div>
        <table class="table">
          <tbody>
            ${sharedTxs().filter(t => t.paid).map(t => `<tr><td>${t.name}</td><td>${(state.users[t.payer] || {name: t.payer}).name} paid</td><td>${money(t.amount)}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function settings() {
  const log = (state.extraLog || []).slice().reverse().slice(0, 12);
  return `
    <p class="kicker">Household</p>
    <h1>Settings</h1>
    <div class="grid-2">
      <div class="tile">
        <h3>This browser</h3>
        <p class="note">${sbUser ? "Signed in as " + sbUser.email : "Not signed in. Data is only on this browser until you log in."}</p>
        ${sbUser ? `<button class="btn" id="authOut">Log out</button>` : `<p class="note">Viewing as ${user === "solo" ? "Solo" : state.users[user].name}.</p>`}
      </div>
      <div class="tile">
        <h3>Invite partner</h3>
        <p class="note">They open this link, create an account, and land in this household. You are ${state.users[user] ? state.users[user].name : user} on this login.</p>
        <p><strong id="inviteCodeLabel">${inviteCode || "No code yet — run supabase-setup.sql"}</strong></p>
        <p class="note" id="inviteLinkLabel">${inviteCode ? inviteLink() : ""}</p>
        <div class="row-actions">
          <input id="partnerEmail" type="email" placeholder="Partner email" style="min-width:220px" />
          <button class="btn primary" id="sendInvite" type="button">Send invite</button>
        </div>
        <div class="row-actions">
          <button class="btn" id="copyInvite" type="button">Copy invite link</button>
          <a class="btn" id="mailInvite" href="${inviteCode ? "mailto:?subject=" + encodeURIComponent("Join our Cove household") + "&body=" + encodeURIComponent("Create an account and join with this link:\n\n" + inviteLink() + "\n\nCode: " + inviteCode) : "#"}">Open in my email</a>
        </div>
        <div class="row-actions">
          <input id="joinCodeInput" placeholder="Have a code?" />
          <button class="btn" id="joinHomeBtn">Join household</button>
        </div>
        <p class="note" id="joinMsg"></p>
      </div>
      <div class="tile">
        <h3>Data</h3>
        <div class="row-actions">
          <button class="btn" id="exportMonthly">Export monthly CSV</button>
          <button class="btn" id="exportDebts">Export debts CSV</button>
          <button class="btn" id="exportForecast">Export forecast CSV</button>
        </div>
      </div>
      <div class="tile">
        <h3>Start empty</h3>
        <p class="note">Clears bills, debts, pay, and transactions. Keeps names.</p>
        <button class="btn" id="startEmpty">Clear household</button>
      </div>
      <div class="tile">
        <h3>Restore demo</h3>
        <button class="btn" id="resetDemo">Load sample data</button>
      </div>
    </div>
    <div class="tile" style="margin-top:16px">
      <h3>Extra applied to balances</h3>
      ${log.length ? `<table class="table"><thead><tr><th>When</th><th>Debt</th><th>Amount</th><th>Balance after</th></tr></thead><tbody>
        ${log.map(e => `<tr><td>${e.at || ""}</td><td>${e.name}</td><td>${money(e.amount)}</td><td>${money(e.balance)}</td></tr>`).join("")}
      </tbody></table>` : `<p class="note">Apply extra on Debts to log it here.</p>`}
    </div>
  `;
}

function bindView() {
  app.querySelectorAll("[data-go]").forEach(el => el.onclick = () => { view = el.dataset.go; render(); });
  app.querySelectorAll("[data-dashmode]").forEach(el => el.onclick = () => {
    dashMode = el.dataset.dashmode;
    view = "dashboard";
    render();
  });
  app.querySelectorAll("[data-debtmode]").forEach(el => el.onclick = () => {
    ensureDebtTile();
    state.debtTile.mode = el.dataset.debtmode;
    save();
    render();
  });
  app.querySelectorAll("[data-debthide]").forEach(el => el.onclick = () => {
    ensureDebtTile();
    const id = String(el.dataset.debthide);
    if (!state.debtTile.exclude.includes(id)) state.debtTile.exclude.push(id);
    save();
    render();
  });
  app.querySelectorAll("[data-debtshow]").forEach(el => el.onclick = () => {
    ensureDebtTile();
    state.debtTile.exclude = state.debtTile.exclude.filter(x => x !== String(el.dataset.debtshow));
    save();
    render();
  });
  app.querySelectorAll("[data-pd]").forEach(el => el.onclick = () => {
    const [k, v] = (el.dataset.pd || "").split(":");
    if (k === "up") pdUp = v;
    if (k === "sub") pdSub = v;
    if (k === "bill") pdBill = v;
    if (k === "acct") pdAcct = v;
    render();
  });
  app.querySelectorAll("[data-txtab]").forEach(el => el.onclick = () => { txTab = el.dataset.txtab; render(); });
  app.querySelectorAll("[data-period]").forEach(el => el.onclick = () => { spendPeriod = el.dataset.period; render(); });
  app.querySelectorAll("[data-filter]").forEach(el => el.onclick = () => { expenseFilter = el.dataset.filter; render(); });
  const openShare = document.getElementById("openShare");
  if (openShare) openShare.onclick = () => openShareForm(null);
  app.querySelectorAll("[data-edit-share]").forEach(el => el.onclick = () => {
    const [src, id] = el.dataset.editShare.split(":");
    const row = sharedExpenseRows().find(r => String(r.src) === src && String(r.id) === String(id));
    openShareForm(row || null);
  });
  app.querySelectorAll("[data-del-share]").forEach(el => el.onclick = () => {
    const [src, id] = el.dataset.delShare.split(":");
    if (!confirm("Delete this shared expense?")) return;
    if (src === "tx") state.txs = state.txs.filter(t => String(t.id) !== String(id));
    if (src === "month") bag().monthly = (bag().monthly || []).filter(m => String(m.id) !== String(id));
    save();
    render();
  });
  app.querySelectorAll("[data-toggle-paid]").forEach(el => el.onclick = () => {
    const t = state.txs.find(x => x.id == el.dataset.togglePaid);
    if (t) { t.paid = !t.paid; save(); render(); }
  });
  app.querySelectorAll("[data-hide]").forEach(el => el.onclick = () => {
    const a = (bag().accounts || []).find(x => x.id === el.dataset.hide);
    if (a) { a.hidden = !a.hidden; save(); render(); }
  });
  app.querySelectorAll("[data-month]").forEach(el => el.onclick = () => {
    monthFilter = el.dataset.month;
    if (monthFilter === "forecast" && !forecastPlan) forecastPlan = planForMonth(forecastEditMonth);
    render();
  });
  const fcMonth = document.getElementById("fcMonth");
  if (fcMonth) fcMonth.onchange = () => {
    persistForecastMonth(false);
    forecastEditMonth = Number(fcMonth.value || 1);
    forecastPlan = planForMonth(forecastEditMonth);
    const bals = balancesAtStartOf(forecastEditMonth);
    (forecastPlan.debts || []).forEach(fd => {
      if (!(bals[String(fd.id)] > 0.05)) fd.removed = true;
    });
    render();
  };
  const fcSave = document.getElementById("fcSave");
  if (fcSave) fcSave.onclick = () => {
    persistForecastMonth(false);
    render();
  };
  const fcRun = document.getElementById("fcRun");
  if (fcRun) fcRun.onclick = () => { runForecast(); render(); };
  const fcPool = document.getElementById("fcPool");
  if (fcPool) fcPool.onchange = () => { forecastPool = Math.max(0, Number(fcPool.value || 0)); };
  app.querySelectorAll("[data-fc-strat]").forEach(el => el.onclick = () => {
    forecastPool = Math.max(0, Number((document.getElementById("fcPool") || {}).value || forecastPool || 0));
    applyForecastStrategy(el.dataset.fcStrat);
    forecastLogOpen = true;
    render();
  });
  const fcLogToggle = document.getElementById("fcLogToggle");
  if (fcLogToggle) fcLogToggle.onclick = () => { forecastLogOpen = !forecastLogOpen; render(); };
  const fcReset = document.getElementById("fcReset");
  if (fcReset) fcReset.onclick = () => {
    forecastSaved = {};
    forecastResult = null;
    forecastLog = [];
    forecastLogOpen = false;
    forecastDirty = false;
    forecastEditMonth = 1;
    forecastPlan = snapshotForecast();
    render();
  };
  app.querySelectorAll("[data-fc-amt]").forEach(el => el.onchange = () => {
    const [kind, id] = el.dataset.fcAmt.split(":");
    if (kind === "debt") {
      const d = forecastPlan.debts.find(x => x.id === id);
      if (d) d.minimum = Math.max(0, Number(el.value || 0));
    } else {
      const it = forecastPlan.items.find(x => x.id === id);
      if (it) it.amount = Math.max(0, Number(el.value || 0));
    }
    persistForecastMonth(true);
    render();
  });
  app.querySelectorAll("[data-fc-extra]").forEach(el => el.onchange = () => {
    const d = forecastPlan.debts.find(x => x.id === el.dataset.fcExtra);
    if (d) d.extra = Math.max(0, Number(el.value || 0));
    persistForecastMonth(true);
    render();
  });
  app.querySelectorAll("[data-fc-off]").forEach(el => el.onclick = () => {
    const [kind, id] = el.dataset.fcOff.split(":");
    const row = kind === "debt" ? forecastPlan.debts.find(x => x.id === id) : forecastPlan.items.find(x => x.id === id);
    if (row) row.removed = true;
    persistForecastMonth(true);
    render();
  });
  app.querySelectorAll("[data-fc-on]").forEach(el => el.onclick = () => {
    const [kind, id] = el.dataset.fcOn.split(":");
    const row = kind === "debt" ? forecastPlan.debts.find(x => x.id === id) : forecastPlan.items.find(x => x.id === id);
    if (row) row.removed = false;
    persistForecastMonth(true);
    render();
  });
  app.querySelectorAll("[data-debt-min-paid]").forEach(el => el.onclick = () => {
    const d = (bag().debts || []).find(x => x.id === el.dataset.debtMinPaid);
    if (d) { d.minPaid = !d.minPaid; save(); render(); }
  });
  app.querySelectorAll("[data-set-extra-mo]").forEach(el => el.onclick = () => {
    const d = (bag().debts || []).find(x => x.id === el.dataset.setExtraMo);
    const input = app.querySelector(`[data-extra-mo="${el.dataset.setExtraMo}"]`);
    if (d && input) { d.extra = Math.max(0, Number(input.value || 0)); save(); render(); }
  });
  app.querySelectorAll("[data-month-paid]").forEach(el => el.onclick = () => {
    const m = (bag().monthly || []).find(x => x.id === el.dataset.monthPaid);
    if (m) { toggleMonthPaid(m); save(); render(); }
  });
  const patchDebt = (id, fn) => {
    const d = (bag().debts || []).find(x => String(x.id) === String(id));
    if (!d) return;
    fn(d);
    save();
    render();
  };
  app.querySelectorAll("[data-debt-bal]").forEach(el => el.onchange = () => {
    patchDebt(el.dataset.debtBal, d => {
      d.balance = Math.max(0, Number(el.value || 0));
      if (!d.original || d.original < d.balance) d.original = d.balance;
    });
  });
  app.querySelectorAll("[data-debt-min]").forEach(el => el.onchange = () => {
    patchDebt(el.dataset.debtMin, d => { d.minimum = Math.max(0, Number(el.value || 0)); });
  });
  app.querySelectorAll("[data-debt-extra]").forEach(el => el.onchange = () => {
    patchDebt(el.dataset.debtExtra, d => { d.extra = Math.max(0, Number(el.value || 0)); });
  });
  app.querySelectorAll("[data-debt-apr]").forEach(el => el.onchange = () => {
    patchDebt(el.dataset.debtApr, d => { d.apr = Math.max(0, Number(el.value || 0)); });
  });
  app.querySelectorAll("[data-set-min]").forEach(el => el.onclick = () => {
    const d = (bag().debts || []).find(x => x.id === el.dataset.setMin);
    const input = app.querySelector(`[data-min-input="${el.dataset.setMin}"]`);
    if (d && input) { d.minimum = Math.max(0, Number(input.value || 0)); save(); render(); }
  });
  app.querySelectorAll("[data-set-extra]").forEach(el => el.onclick = () => {
    const d = (bag().debts || []).find(x => x.id === el.dataset.setExtra);
    const input = app.querySelector(`[data-extra-input="${el.dataset.setExtra}"]`);
    if (d && input) { d.extra = Math.max(0, Number(input.value || 0)); save(); render(); }
  });
  app.querySelectorAll("[data-clear-extra]").forEach(el => el.onclick = () => {
    const d = (bag().debts || []).find(x => x.id === el.dataset.clearExtra);
    if (d) { d.extra = 0; save(); render(); }
  });
  app.querySelectorAll("[data-rec]").forEach(el => el.onclick = () => {
    const pop = document.getElementById("rec-" + el.dataset.rec);
    if (pop) pop.classList.toggle("open");
  });
  app.querySelectorAll("[data-pay]").forEach(el => el.onclick = () => {
    const d = (bag().debts || []).find(x => x.id === el.dataset.pay);
    if (d && Number(d.extra) > 0) {
      const amt = Number(d.extra);
      d.balance = Math.max(0, Number(d.balance) - amt);
      if (!state.extraLog) state.extraLog = [];
      state.extraLog.push({ at: todayISO(), name: d.name, amount: amt, balance: d.balance });
      save();
      render();
    }
  });
  const importBtn = document.getElementById("importDebts");
  const fileInput = document.getElementById("debtFile");
  if (importBtn && fileInput) {
    importBtn.onclick = () => fileInput.click();
    fileInput.onchange = async () => {
      const file = fileInput.files && fileInput.files[0];
      fileInput.value = "";
      const msg = document.getElementById("importMsg");
      if (!file) return;
      try {
        const added = await importDebtFile(file);
        if (!added.length) {
          if (msg) msg.textContent = "No debt rows found. Use columns like Name, Balance, Minimum.";
          return;
        }
        state.debts = state.debts.concat(added);
        save();
        render();
      } catch (err) {
        if (msg) msg.textContent = err.message || "Could not read that file.";
      }
    };
  }
  app.querySelectorAll("[data-fintab]").forEach(el => el.onclick = () => { finTab = el.dataset.fintab; render(); });
  app.querySelectorAll("[data-finscope]").forEach(el => el.onclick = () => { finScope = el.dataset.finscope; render(); });
  const addD = document.getElementById("addDebt");
  if (addD) addD.onclick = () => {
    const name = document.getElementById("dName").value.trim();
    if (!name) return;
    const balance = Number(document.getElementById("dBal").value || 0);
    state.debts.push({
      id: "d" + Date.now(),
      name,
      type: document.getElementById("dType").value,
      balance,
      original: balance,
      minimum: Number(document.getElementById("dMin").value || 0),
      extra: Number(document.getElementById("dExtra").value || 0),
      apr: Number(document.getElementById("dApr").value || defaultApr(document.getElementById("dType").value)),
      owner: user === "solo" ? "alex" : document.getElementById("dOwner").value
    });
    save();
    render();
  };
  const addM = document.getElementById("addMonthly");
  if (addM) addM.onclick = () => {
    const name = document.getElementById("mcName").value.trim();
    if (!name) return;
    const row = {
      name,
      amount: Number(document.getElementById("mcAmt").value || 0),
      due: document.getElementById("mcDue").value || monthKey() + "-28",
      paid: false,
      type: document.getElementById("mcType").value,
      kind: document.getElementById("mcKind").value,
      owner: user === "solo" ? "alex" : user
    };
    if (monthEdit) {
      const m = (bag().monthly || []).find(x => x.id === monthEdit);
      if (m) Object.assign(m, row);
      monthEdit = null;
    } else {
      if (!bag().monthly) bag().monthly = [];
      bag().monthly.push({ id: "m" + Date.now(), ...row });
    }
    save();
    render();
  };
  app.querySelectorAll("[data-edit-month]").forEach(el => el.onclick = () => {
    const m = (bag().monthly || []).find(x => x.id === el.dataset.editMonth);
    if (!m) return;
    openShareForm({
      src: "month",
      id: m.id,
      name: m.name,
      amount: m.amount,
      due: m.due,
      payer: m.payer || m.owner,
      split: m.split != null ? m.split : (m.owner === "both" ? 50 : 0),
      paid: m.paid,
      note: "",
      type: m.type
    });
  });
  app.querySelectorAll("[data-del-month]").forEach(el => el.onclick = () => {
    if (!confirm("Delete this monthly expense?")) return;
    bag().monthly = (bag().monthly || []).filter(x => x.id !== el.dataset.delMonth);
    save();
    render();
  });
  const editInc = document.getElementById("editIncome");
  if (editInc) {
    editInc.onfocus = () => {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(editInc);
      sel.removeAllRanges();
      sel.addRange(range);
    };
    editInc.onkeydown = e => {
      if (e.key === "Enter") { e.preventDefault(); editInc.blur(); }
    };
    editInc.onblur = () => {
      setViewerIncomeTotal(String(editInc.textContent || "").replace(/[^0-9.]/g, ""));
      save();
      render();
    };
  }
  const addInc = document.getElementById("addIncome");
  if (addInc) addInc.onclick = () => {
    const name = document.getElementById("incName").value.trim();
    if (!name) return;
    if (!state.income) state.income = [];
    state.income.push({
      id: "i" + Date.now(),
      name,
      amount: Number(document.getElementById("incAmt").value || 0),
      owner: user === "solo" ? "alex" : user,
      scope: "personal",
      recurring: document.getElementById("incRec").checked
    });
    save();
    render();
  };
  app.querySelectorAll("[data-del-inc]").forEach(el => el.onclick = () => {
    state.income = (state.income || []).filter(i => i.id !== el.dataset.delInc);
    save();
    render();
  });
  const addTxPage = document.getElementById("addTxPage");
  if (addTxPage) addTxPage.onclick = () => openTxModal(null);
  app.querySelectorAll("[data-edit-tx]").forEach(el => el.onclick = () => {
    const t = state.txs.find(x => String(x.id) === String(el.dataset.editTx));
    openTxModal(t || null);
  });
  app.querySelectorAll("[data-del-tx]").forEach(el => el.onclick = () => {
    if (!confirm("Delete this transaction?")) return;
    state.txs = state.txs.filter(x => String(x.id) !== String(el.dataset.delTx));
    save();
    render();
  });
  const sn = document.getElementById("settleNow");
  if (sn) sn.onclick = () => { state.settled = balanceBetween() + state.settled; save(); render(); };
  const authOut = document.getElementById("authOut");
  if (authOut) authOut.onclick = async () => {
    if (sb) await sb.auth.signOut();
    sbUser = null;
    homeId = null;
    inviteCode = "";
    showAuth(true);
  };
  const sendInvite = document.getElementById("sendInvite");
  if (sendInvite) sendInvite.onclick = async () => {
    const msg = document.getElementById("joinMsg");
    const email = (document.getElementById("partnerEmail").value || "").trim();
    if (!email) { if (msg) msg.textContent = "Enter their email first."; return; }
    if (!inviteCode) { if (msg) msg.textContent = "No household code yet. Run supabase-setup.sql."; return; }
    if (!sb) { if (msg) msg.textContent = "Not connected."; return; }
    if (msg) msg.textContent = "Sending…";
    const { data, error } = await sb.functions.invoke("invite-partner", { body: { email, code: inviteCode } });
    if (error) { if (msg) msg.textContent = error.message || "Deploy the invite-partner function in Supabase first."; return; }
    if (data && data.error) { if (msg) msg.textContent = data.error; return; }
    if (msg) msg.textContent = (data && data.message) || "Invite sent.";
  };
  const copyInvite = document.getElementById("copyInvite");
  if (copyInvite) copyInvite.onclick = async () => {
    const msg = document.getElementById("joinMsg");
    try {
      await navigator.clipboard.writeText(inviteLink());
      if (msg) msg.textContent = "Invite link copied.";
    } catch {
      if (msg) msg.textContent = inviteLink();
    }
  };
  const joinHomeBtn = document.getElementById("joinHomeBtn");
  if (joinHomeBtn) joinHomeBtn.onclick = async () => {
    const code = (document.getElementById("joinCodeInput").value || "").trim();
    const msg = document.getElementById("joinMsg");
    if (!code || !sb) return;
    const { error } = await sb.rpc("join_home", { code: code.toLowerCase() });
    if (error) { if (msg) msg.textContent = error.message; return; }
    await pullCloud();
    claimSeat();
    render();
  };
  const rst = document.getElementById("resetDemo");
  if (rst) rst.onclick = () => { localStorage.removeItem(KEY); state = load(); if (!state.extraLog) state.extraLog = []; render(); };
  const startEmpty = document.getElementById("startEmpty");
  if (startEmpty) startEmpty.onclick = () => {
    if (!confirm("Clear bills, debts, pay, and transactions on this browser?")) return;
    state.monthly = [];
    state.debts = [];
    state.income = [];
    state.txs = [];
    state.budgets = [];
    state.goals = [];
    state.extraLog = [];
    save();
    render();
  };
  const addBudget = document.getElementById("addBudget");
  if (addBudget) addBudget.onclick = () => {
    const name = (document.getElementById("bName").value || "").trim();
    const limit = Number(document.getElementById("bLimit").value || 0);
    if (!name || !(limit > 0)) return;
    if (!state.budgets) state.budgets = [];
    state.budgets.push({ name, limit, scope: document.getElementById("bScope").value });
    save();
    render();
  };
  app.querySelectorAll("[data-del-budget]").forEach(el => el.onclick = () => {
    const [name, scope] = el.dataset.delBudget.split("|");
    state.budgets = (state.budgets || []).filter(b => !(b.name === name && b.scope === scope));
    save();
    render();
  });
  const addGoal = document.getElementById("addGoal");
  if (addGoal) addGoal.onclick = () => {
    const name = (document.getElementById("gName").value || "").trim();
    const target = Number(document.getElementById("gTarget").value || 0);
    if (!name || !(target > 0)) return;
    if (!state.goals) state.goals = [];
    state.goals.push({ id: "g" + Date.now(), name, target, saved: 0, scope: document.getElementById("gScope").value, owner: viewerId() });
    save();
    render();
  };
  app.querySelectorAll("[data-goal-add]").forEach(el => {
    el.onclick = () => {
      const g = (state.goals || []).find(x => x.id === el.dataset.goalAdd);
      const input = app.querySelector(`[data-goal-amt="${el.dataset.goalAdd}"]`);
      if (g && input) { g.saved = Number(g.saved || 0) + Math.max(0, Number(input.value || 0)); save(); render(); }
    };
  });
  app.querySelectorAll("[data-goal-left]").forEach(el => el.onclick = () => {
    const g = (state.goals || []).find(x => x.id === el.dataset.goalLeft);
    if (g) { g.saved = Number(g.saved || 0) + Math.max(0, viewerLeftover()); save(); render(); }
  });
  app.querySelectorAll("[data-del-goal]").forEach(el => el.onclick = () => {
    state.goals = (state.goals || []).filter(g => g.id !== el.dataset.delGoal);
    save();
    render();
  });
  const exportMonthly = document.getElementById("exportMonthly");
  if (exportMonthly) exportMonthly.onclick = () => {
    downloadCsv("cove-monthly.csv", [["Name", "Amount", "Due", "Kind", "Whose", "Paid"]].concat(
      (state.monthly || []).map(m => [m.name, m.amount, m.due, m.kind, m.owner, monthPaidFor(m) ? "paid" : "unpaid"])
    ));
  };
  const exportDebts = document.getElementById("exportDebts");
  if (exportDebts) exportDebts.onclick = () => {
    downloadCsv("cove-debts.csv", [["Name", "Type", "Balance", "Minimum", "Extra", "APR", "Owner"]].concat(
      (state.debts || []).map(d => [d.name, d.type, d.balance, d.minimum, d.extra, d.apr, d.owner])
    ));
  };
  const exportForecast = document.getElementById("exportForecast");
  if (exportForecast) exportForecast.onclick = () => {
    if (!forecastResult) runForecast({ keep: true });
    downloadCsv("cove-forecast.csv", [["Month", "Expense", "Cashflow", "Cum cashflow", "Extra vs today"]].concat(
      (forecastResult || []).map(r => [r.month, r.bills, r.cash, r.cumCash, r.extraVsToday])
    ));
  };
}

const monthPickEl = document.getElementById("monthPick");
if (monthPickEl) monthPickEl.onchange = () => {
  if (monthPickEl.value) {
    closeAndRoll(monthPickEl.value);
    viewMonth = monthPickEl.value;
    save();
  }
  render();
};

document.getElementById("userSelect").onchange = e => {
  user = e.target.value;
  forecastPlan = null;
  forecastSaved = {};
  forecastResult = null;
  forecastEditMonth = 1;
  render();
};

function todayISO() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function openTxModal(row) {
  const modal = document.getElementById("modal");
  if (!modal) return;
  txEdit = row ? row.id : null;
  modal.querySelector("h2").textContent = row ? "Edit transaction" : "Add transaction";
  document.getElementById("fName").value = row ? row.name : "";
  document.getElementById("fAmt").value = row ? row.amount : "";
  document.getElementById("fDate").value = row && row.date ? row.date : todayISO();
  document.getElementById("fDue").value = row && row.due ? row.due : "";
  if (row && row.cat) document.getElementById("fCat").value = row.cat;
  if (row && row.type) document.getElementById("fType").value = row.type;
  if (row && row.payer && document.getElementById("fPayer").querySelector(`option[value="${row.payer}"]`)) {
    document.getElementById("fPayer").value = row.payer;
  }
  document.getElementById("fSplit").value = row && row.split != null ? row.split : 50;
  document.getElementById("fPaid").value = row && row.paid ? "yes" : "no";
  document.getElementById("fNotes").value = row && row.notes ? row.notes : "";
  const sel = document.getElementById("fAcct");
  sel.innerHTML = visibleAccounts().map(a => `<option value="${a.id}">${a.name}</option>`).join("");
  if (row && row.account) sel.value = row.account;
  modal.classList.add("open");
}
const menuBtn = document.getElementById("menuBtn");
if (menuBtn) menuBtn.onclick = () => document.body.classList.toggle("nav-open");
document.querySelectorAll(".nav-btn").forEach(b => {
  const prev = b.onclick;
  b.onclick = () => {
    view = b.dataset.view;
    document.body.classList.remove("nav-open");
    render();
  };
});
document.getElementById("cancelTx").onclick = () => document.getElementById("modal").classList.remove("open");
document.getElementById("fName").addEventListener("input", e => {
  document.getElementById("fCat").value = suggestCategory(e.target.value);
});
document.getElementById("saveTx").onclick = () => {
  const name = document.getElementById("fName").value.trim() || "Untitled";
  const row = {
    name,
    amount: Number(document.getElementById("fAmt").value || 0),
    date: document.getElementById("fDate").value,
    due: document.getElementById("fDue").value || document.getElementById("fDate").value,
    cat: document.getElementById("fCat").value,
    type: user === "solo" ? "personal" : document.getElementById("fType").value,
    payer: user === "solo" ? "alex" : document.getElementById("fPayer").value,
    split: Number(document.getElementById("fSplit").value || 50),
    paid: document.getElementById("fPaid").value === "yes",
    notes: document.getElementById("fNotes").value,
    account: document.getElementById("fAcct").value
  };
  if (txEdit) {
    const t = state.txs.find(x => String(x.id) === String(txEdit));
    if (t) Object.assign(t, row);
    txEdit = null;
  } else {
    state.txs.unshift({ id: Date.now(), ...row });
  }
  save();
  document.getElementById("modal").classList.remove("open");
  render();
};

function kindFromCat(cat) {
  if (/rent|util/i.test(cat || "")) return "bill";
  if (/sub/i.test(cat || "")) return "subscription";
  if (/health/i.test(cat || "")) return "health";
  if (/gym|member/i.test(cat || "")) return "membership";
  return "other";
}

function openShareForm(row) {
  const modal = document.getElementById("shareModal");
  if (!modal) return;
  shareEdit = row ? { src: "month", id: row.id } : null;
  modal.querySelector("h2").textContent = row ? "Edit monthly expense" : "Add monthly expense";
  document.getElementById("sName").value = row ? row.name : "";
  document.getElementById("sAmt").value = row ? row.amount : "";
  document.getElementById("sDue").value = row && row.due ? row.due : todayISO();
  const payer = row && row.payer ? row.payer : "alex";
  if (document.getElementById("sPayer").querySelector(`option[value="${payer}"]`)) {
    document.getElementById("sPayer").value = payer;
  }
  document.getElementById("sMode").value = row && (Number(row.split) === 0 || Number(row.split) === 100) ? "assigned" : "split";
  document.getElementById("sSplit").value = row && row.split ? row.split : 50;
  document.getElementById("sPaid").value = row && row.paid ? "yes" : "no";
  document.getElementById("sNotes").value = row && row.note ? row.note : "";
  if (document.getElementById("sType")) document.getElementById("sType").value = row && row.type === "personal" ? "personal" : "shared";
  const sMode = document.getElementById("sMode");
  if (sMode && sMode.onchange) sMode.onchange();
  modal.classList.add("open");
}

const shareModal = document.getElementById("shareModal");
if (shareModal) {
  document.getElementById("cancelShare").onclick = () => { shareEdit = null; shareModal.classList.remove("open"); }
  const sMode = document.getElementById("sMode");
  const sSplitWrap = document.getElementById("sSplitWrap");
  const sPayerLabel = document.getElementById("sPayerLabel");
  const syncShareMode = () => {
    const assigned = sMode.value === "assigned";
    if (sSplitWrap) sSplitWrap.style.display = assigned ? "none" : "";
    if (sPayerLabel) {
      const sel = document.getElementById("sPayer");
      sPayerLabel.innerHTML = "";
      const lab = document.createTextNode(assigned ? "Who pays this bill" : "Who paid");
      sPayerLabel.appendChild(lab);
      sPayerLabel.appendChild(sel);
    }
  };
  if (sMode) sMode.onchange = syncShareMode;
  document.getElementById("saveShare").onclick = () => {
    const name = document.getElementById("sName").value.trim() || "Untitled";
    const amount = Number(document.getElementById("sAmt").value || 0);
    const due = document.getElementById("sDue").value || "2026-08-26";
    const payer = document.getElementById("sPayer").value;
    const assigned = document.getElementById("sMode").value === "assigned";
    const split = payer === "both" ? 50 : (assigned ? 0 : Number(document.getElementById("sSplit").value || 50));
    const paid = document.getElementById("sPaid").value === "yes";
    const cat = document.getElementById("sCat").value;
    const notes = document.getElementById("sNotes").value;
    const type = document.getElementById("sType") ? document.getElementById("sType").value : "shared";
    const row = {
      name,
      amount,
      due,
      paid,
      type,
      kind: kindFromCat(cat),
      owner: payer === "both" ? "both" : payer,
      payer,
      split,
      notes
    };
    if (shareEdit && shareEdit.id) {
      const m = (bag().monthly || []).find(x => String(x.id) === String(shareEdit.id));
      if (m) Object.assign(m, row);
    } else {
      if (!bag().monthly) bag().monthly = [];
      bag().monthly.push({ id: "m" + Date.now(), ...row });
    }
    save();
    shareEdit = null;
    shareModal.classList.remove("open");
    render();
  };
}

function joinCodeFromForm() {
  const el = document.getElementById("authJoin");
  return (el && el.value ? el.value : "").trim().toLowerCase();
}

document.getElementById("authIn") && (document.getElementById("authIn").onclick = async () => {
  if (!sb) return setAuthMsg("Supabase did not load.");
  setAuthMsg("Signing in…");
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPass").value;
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) return setAuthMsg(error.message);
  sbUser = data.user;
  showAuth(false);
  await pullCloud(joinCodeFromForm());
  claimSeat();
  render();
});
document.getElementById("authUp") && (document.getElementById("authUp").onclick = async () => {
  if (!sb) return setAuthMsg("Supabase did not load.");
  setAuthMsg("Creating account…");
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPass").value;
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) return setAuthMsg(error.message);
  if (!data.session) {
    setAuthMsg("Account created. If it asks to confirm email, turn Confirm email off in Supabase Auth, then log in.");
    return;
  }
  sbUser = data.user;
  showAuth(false);
  await pullCloud(joinCodeFromForm());
  claimSeat();
  render();
});
document.getElementById("authForgot") && (document.getElementById("authForgot").onclick = async () => {
  if (!sb) return setAuthMsg("Supabase did not load.");
  const email = document.getElementById("authEmail").value.trim();
  if (!email) return setAuthMsg("Enter your email first.");
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: portalUrl() });
  setAuthMsg(error ? error.message : "Check your email for a reset link.");
});
if (sb) {
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === "PASSWORD_RECOVERY") {
      const next = prompt("New password (6+ characters)");
      if (next && next.length >= 6) {
        const { error } = await sb.auth.updateUser({ password: next });
        setAuthMsg(error ? error.message : "Password updated. You can use the app.");
      }
    }
    if (session) sbUser = session.user;
  });
}

(function prefillJoin() {
  const code = new URLSearchParams(location.search).get("join");
  const el = document.getElementById("authJoin");
  if (code && el) el.value = code;
})();
bootAuth();
