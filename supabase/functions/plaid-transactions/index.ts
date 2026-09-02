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
    const access_token = String(body.access_token || "");
    if (!access_token) return Response.json({ error: "Missing access_token" }, { status: 400, headers: cors });

    await fetch("https://sandbox.plaid.com/transactions/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token }),
    });

    const end = new Date();
    const start = new Date(end.getTime() - 120 * 86400000);
    let lastErr = "";
    let transactions: Record<string, unknown>[] = [];
    for (let attempt = 0; attempt < 4; attempt++) {
      if (attempt) await new Promise((r) => setTimeout(r, 2500));
      const tx = await fetch("https://sandbox.plaid.com/transactions/get", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          secret,
          access_token,
          start_date: start.toISOString().slice(0, 10),
          end_date: end.toISOString().slice(0, 10),
          options: { count: 250, offset: 0 },
        }),
      });
      const txJson = await tx.json();
      if (tx.ok) { transactions = txJson.transactions || []; lastErr = ""; break; }
      lastErr = txJson.error_code || txJson.error_message || "transactions failed";
      if (txJson.error_code !== "PRODUCT_NOT_READY") break;
    }

    const txs = transactions.map((t) => ({
      id: "plaid-" + String(t.transaction_id || ""),
      name: String(t.merchant_name || t.name || "Plaid"),
      amount: Math.abs(Number(t.amount || 0)),
      inflow: Number(t.amount || 0) < 0,
      date: String(t.date || end.toISOString().slice(0, 10)),
      cat: Array.isArray(t.category) && t.category[0] ? String(t.category[0]) : "Other",
      pending: !!t.pending,
      accountId: String(t.account_id || ""),
    }));
    const liabRes = await fetch("https://sandbox.plaid.com/liabilities/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token }),
    });
    const liabJson = await liabRes.json();
    const L = liabJson.liabilities || {};
    const debts = [];
    (L.credit || []).forEach((c) => {
      debts.push({
        id: "plaid-debt-" + String(c.account_id || ""),
        name: "Credit card",
        type: "Credit card",
        balance: Number(c.last_statement_balance || 0),
        minimum: Number(c.minimum_payment_amount || 0),
        apr: Number((c.aprs && c.aprs.purchase_apr) || 0),
        due: c.next_payment_due_date || null,
      });
    });
    (L.student || []).forEach((s) => {
      debts.push({
        id: "plaid-debt-" + String(s.account_id || ""),
        name: String(s.loan_name || "Student loan"),
        type: "Loan",
        balance: 0,
        minimum: Number(s.minimum_payment_amount || 0),
        apr: Number(s.interest_rate_percentage || 0),
        due: s.next_payment_due_date || null,
      });
    });
    let income = [];
    const rec = await fetch("https://sandbox.plaid.com/transactions/recurring/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, secret, access_token }),
    });
    const recJson = await rec.json();
    if (rec.ok) {
      income = (recJson.inflow_streams || []).map((s) => ({
        id: "plaid-inc-" + String(s.stream_id || ""),
        name: String(s.merchant_name || s.description || "Income"),
        amount: Number(s.last_amount || s.average_amount || 0),
        recurring: true,
      }));
    }
    return Response.json({ transactions: txs, debts, income, tx_error: lastErr || null }, { headers: cors });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500, headers: cors });
  }
});
