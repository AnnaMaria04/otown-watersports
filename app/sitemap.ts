import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://otown-watersports.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/coaching", "/rates", "/athletes", "/plan"].map((p) => ({
    url: `${SITE}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
