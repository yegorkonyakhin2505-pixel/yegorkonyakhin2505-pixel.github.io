import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Add every new page here as it ships (service pages, pricing, work, about, contact, blog).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amplifymarketing.ae/",
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
