import { igPosts } from "@/content/site";

export type IgPost = { id: string; caption: string; image: string; href: string };

/**
 * Latest reels from @fletcherotown via the Instagram API (Instagram Login, long-lived token in INSTAGRAM_TOKEN).
 * Refreshes at most once an hour. Without a token, or if Instagram is unreachable, the hand-picked list in content/site.ts is shown.
 */
export async function getLatestReels(limit = 6): Promise<IgPost[]> {
  const fallback = igPosts.map((p) => ({ id: p.id, caption: p.caption, image: p.image, href: `https://www.instagram.com/reel/${p.id}/` }));
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) return fallback.slice(0, limit);
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_product_type,thumbnail_url,media_url,permalink,timestamp&limit=30&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return fallback.slice(0, limit);
    const json = (await res.json()) as { data?: { id: string; caption?: string; media_type: string; media_product_type?: string; thumbnail_url?: string; media_url?: string; permalink: string }[] };
    const videos = (json.data ?? []).filter((m) => m.media_type === "VIDEO" && (m.thumbnail_url || m.media_url));
    if (!videos.length) return fallback.slice(0, limit);
    return videos.slice(0, limit).map((m) => ({
      id: m.id,
      caption: tidy(m.caption),
      image: m.thumbnail_url ?? m.media_url ?? "",
      href: m.permalink,
    }));
  } catch {
    return fallback.slice(0, limit);
  }
}

/** First line of the caption, without hashtags or mentions, kept short. */
function tidy(c?: string) {
  const line = (c ?? "").split("\n")[0].replace(/[#@][\w.]+/g, "").replace(/\s+/g, " ").trim();
  if (!line) return "On the water at O’Town";
  return line.length > 60 ? `${line.slice(0, 57).trimEnd()}…` : line;
}
