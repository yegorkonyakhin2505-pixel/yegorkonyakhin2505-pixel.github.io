import type { MetadataRoute } from "next";
import { SERVICE_PAGES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const UPDATED = new Date("2026-10-27");

// Add every new page here as it ships.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pricing`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICE_PAGES.map((s) => ({ url: `${SITE_URL}${s.path}`, lastModified: UPDATED, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/about`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
