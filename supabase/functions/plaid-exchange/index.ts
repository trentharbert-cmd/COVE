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

    return Response.json({
      item_id: exJson.item_id,
      // Sandbox only: token returned so the household can refresh later.
      // Production must store this server-side, never in the browser.
      access_token: exJson.access_token,
      accounts,
    }, { headers: cors });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500, headers: cors });
  }
});
