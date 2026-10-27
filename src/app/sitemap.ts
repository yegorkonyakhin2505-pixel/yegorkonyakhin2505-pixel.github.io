import type { MetadataRoute } from "next";
import { INDUSTRIES } from "@/lib/industries";
import { POSTS } from "@/lib/posts";
import { SERVICE_PAGES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const UPDATED = new Date("2026-10-27");

// Add every new page here as it ships.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pricing`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICE_PAGES.map((s) => ({ url: `${SITE_URL}${s.path}`, lastModified: UPDATED, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...INDUSTRIES.map((i) => ({ url: `${SITE_URL}${i.path}`, lastModified: UPDATED, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/creators`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/best-video-content-agencies-dubai`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    ...POSTS.map((p) => ({ url: `${SITE_URL}${p.path}`, lastModified: new Date(p.updated), changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${SITE_URL}/contact`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
