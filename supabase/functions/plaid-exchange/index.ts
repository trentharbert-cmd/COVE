import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const anon = Deno.env.get("SUPABASE_ANON_KEY") || "";
    const authHeader = req.headers.get("Authorization") || "";
    const userClient = createClient(supabaseUrl, anon, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) {
      return Response.json({ error: "Not signed in" }, { status: 401, headers: cors });
    }

    const clientId = Deno.env.get("PLAID_CLIENT_ID") || "";
    const secret = Deno.env.get("PLAID_SECRET") || "";
    const body = await req.json();
    const publicToken = String(body.public_token || "");
    if (!publicToken) return Response.json({ error: "Missing public_token" }, { status: 400, headers: cors });

    const ex = await fetch("https://sandbox.plaid.com/item/public_token/exchange", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, public_token: publicToken }),
    });
    const exJson = await ex.json();
    if (!ex.ok) {
      return Response.json({ error: exJson.error_message || "Exchange failed" }, { status: 400, headers: cors });
    }

    const ac = await fetch("https://sandbox.plaid.com/accounts/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token: exJson.access_token }),
    });
    const acJson = await ac.json();
    if (!ac.ok) {
      return Response.json({ error: acJson.error_message || "Accounts failed" }, { status: 400, headers: cors });
    }

    const accounts = (acJson.accounts || []).map((a: Record<string, unknown>) => ({
      id: String(a.account_id || ""),
      name: String(a.name || a.official_name || "Account"),
      last4: String(a.mask || ""),
      type: String(a.subtype || a.type || "Checking"),
      balance: Number((a.balances as { current?: number } | undefined)?.current || 0),
      plaid: true,
    }));

    const maskById: Record<string, string> = {};
    accounts.forEach((a) => { if (a.id) maskById[a.id] = a.last4; });

    await fetch("https://sandbox.plaid.com/transactions/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token: exJson.access_token }),
    });

    const end = new Date();
    const start = new Date(end.getTime() - 120 * 86400000);
    const start_date = start.toISOString().slice(0, 10);
    const end_date = end.toISOString().slice(0, 10);
    let transactions: Record<string, unknown>[] = [];
    let lastErr = "";
    for (let attempt = 0; attempt < 4; attempt++) {
      if (attempt) await new Promise((r) => setTimeout(r, 2500));
      const tx = await fetch("https://sandbox.plaid.com/transactions/get", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          secret,
          access_token: exJson.access_token,
          start_date,
          end_date,
          options: { count: 250, offset: 0 },
        }),
      });
      const txJson = await tx.json();
      if (tx.ok) {
        transactions = txJson.transactions || [];
        lastErr = "";
        break;
      }
      lastErr = txJson.error_code || txJson.error_message || "transactions failed";
      if (txJson.error_code !== "PRODUCT_NOT_READY") break;
    }

    const txs = transactions.map((t) => ({
      id: "plaid-" + String(t.transaction_id || ""),
      name: String(t.merchant_name || t.name || "Plaid"),
      amount: Math.abs(Number(t.amount || 0)),
      inflow: Number(t.amount || 0) < 0,
      date: String(t.date || end_date),
      cat: Array.isArray(t.category) && t.category[0] ? String(t.category[0]) : "Other",
      pending: !!t.pending,
      accountId: String(t.account_id || ""),
      last4: maskById[String(t.account_id || "")] || "",
    }));

    const liabRes = await fetch("https://sandbox.plaid.com/liabilities/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token: exJson.access_token }),
    });
    const liabJson = await liabRes.json();
    const nameById: Record<string, string> = {};
    accounts.forEach((a) => { nameById[a.id] = a.name; });
    const debts: Record<string, unknown>[] = [];
    const L = liabJson.liabilities || {};
    (L.credit || []).forEach((c: Record<string, unknown>) => {
      const aid = String(c.account_id || "");
      debts.push({
        id: "plaid-debt-" + aid,
        name: nameById[aid] || "Credit card",
        type: "Credit card",
        balance: Number(c.last_statement_balance ?? c.current_balance ?? 0),
        minimum: Number(c.minimum_payment_amount || 0),
        apr: Number((c.aprs as { purchase_apr?: number } | undefined)?.purchase_apr || 0),
        due: c.next_payment_due_date || null,
      });
    });
    (L.student || []).forEach((s: Record<string, unknown>) => {
      const aid = String(s.account_id || "");
      debts.push({
        id: "plaid-debt-" + aid,
        name: nameById[aid] || String(s.loan_name || "Student loan"),
        type: "Loan",
        balance: Number(s.outstanding_interest_amount != null ? s.last_payment_amount : 0) || Number(s.ytd_interest_paid || 0),
        minimum: Number(s.minimum_payment_amount || 0),
        apr: Number(s.interest_rate_percentage || 0),
        due: s.next_payment_due_date || s.expected_payoff_date || null,
      });
    });
    (L.mortgage || []).forEach((m: Record<string, unknown>) => {
      const aid = String(m.account_id || "");
      debts.push({
        id: "plaid-debt-" + aid,
        name: nameById[aid] || "Mortgage",
        type: "Loan",
        balance: Number(m.current_late_fee != null ? 0 : 0),
        minimum: Number(m.next_monthly_payment || 0),
        apr: Number(m.interest_rate?.percentage || 0),
        due: m.next_payment_due_date || null,
      });
    });
    // Prefer account balances for owed when liability payload is thin
    accounts.filter((a) => /credit|loan|mortgage/i.test(a.type)).forEach((a) => {
      if (debts.some((d) => String(d.id) === "plaid-debt-" + a.id)) return;
      debts.push({
        id: "plaid-debt-" + a.id,
        name: a.name,
        type: /credit/i.test(a.type) ? "Credit card" : "Loan",
        balance: a.balance,
        minimum: 0,
        apr: 0,
        due: null,
      });
    });
    debts.forEach((d) => {
      const acc = accounts.find((a) => "plaid-debt-" + a.id === String(d.id));
      if (acc && Number(acc.balance)) d.balance = acc.balance;
    });

    let income: Record<string, unknown>[] = [];
    const rec = await fetch("https://sandbox.plaid.com/transactions/recurring/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token: exJson.access_token }),
    });
    const recJson = await rec.json();
    if (rec.ok) {
      income = (recJson.inflow_streams || []).map((s: Record<string, unknown>) => ({
        id: "plaid-inc-" + String(s.stream_id || ""),
        name: String(s.merchant_name || s.description || "Income"),
        amount: Number(s.last_amount || s.average_amount || 0),
        recurring: true,
      }));
    }

    return Response.json({
      item_id: exJson.item_id,
      access_token: exJson.access_token,
      accounts,
      transactions: txs,
      debts,
      income,
      tx_error: lastErr || null,
    }, { headers: cors });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500, headers: cors });
  }
});
