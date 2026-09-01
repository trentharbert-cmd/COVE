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
    const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const authHeader = req.headers.get("Authorization") || "";

    const userClient = createClient(supabaseUrl, anon, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) {
      return Response.json({ error: "Not signed in" }, { status: 401, headers: cors });
    }

    const body = await req.json();
    const email = String(body.email || "").trim().toLowerCase();
    const code = String(body.code || "").trim().toLowerCase();
    if (!email || !email.includes("@")) {
      return Response.json({ error: "Enter a valid email" }, { status: 400, headers: cors });
    }
    if (!code) {
      return Response.json({ error: "No household invite code" }, { status: 400, headers: cors });
    }

    const redirectTo = "https://cove-gray.vercel.app/portal/?join=" + encodeURIComponent(code);
    const admin = createClient(supabaseUrl, service);
    const { error } = await admin.auth.admin.inviteUserByEmail(email, { redirectTo });
    if (error) {
      const already = /already|registered|exists/i.test(error.message || "");
      if (already) {
        return Response.json({
          ok: true,
          existing: true,
          message: "They already have an account. Send them the invite link instead.",
          link: redirectTo,
        }, { headers: cors });
      }
      return Response.json({ error: error.message }, { status: 400, headers: cors });
    }
    return Response.json({ ok: true, message: "Invite sent." }, { headers: cors });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500, headers: cors });
  }
});
