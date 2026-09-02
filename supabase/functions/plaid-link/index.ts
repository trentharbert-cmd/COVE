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
    if (!clientId || !secret) {
      return Response.json({ error: "Plaid secrets not set on this function" }, { status: 500, headers: cors });
    }

    const res = await fetch("https://sandbox.plaid.com/link/token/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        secret,
        client_name: "Cove",
        language: "en",
        country_codes: ["US"],
        user: { client_user_id: userData.user.id },
        products: ["transactions", "liabilities"],
      }),
    });
    const json = await res.json();
    if (!res.ok) {
      return Response.json({ error: json.error_message || json.error_code || "Plaid link failed" }, { status: 400, headers: cors });
    }
    return Response.json({ link_token: json.link_token }, { headers: cors });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500, headers: cors });
  }
});
