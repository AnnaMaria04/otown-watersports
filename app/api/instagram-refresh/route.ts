/**
 * Keeps the long-lived Instagram token alive. Called by the Vercel cron in vercel.json (twice a month).
 * Long-lived tokens last 60 days; refreshing extends them. Protected with CRON_SECRET (set automatically by Vercel for cron jobs).
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) return new Response("Unauthorized", { status: 401 });
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) return Response.json({ ok: false, reason: "INSTAGRAM_TOKEN not set" });
  const res = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`, { cache: "no-store" });
  const json = await res.json().catch(() => ({}));
  const sameToken = json.access_token ? json.access_token === token : null;
  return Response.json({ ok: res.ok, expires_in: json.expires_in ?? null, sameToken });
}
