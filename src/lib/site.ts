// src/lib/site.ts
// Single source of truth for brand, legal and contact facts. Every page, schema block,
// llms.txt and footer reads from here, so a change made once is a change made everywhere.

export const BRAND = "Multify";
export const BRAND_FULL = "Multify Marketing";
// The DET licence still carries the previous trade name until the amendment is filed.
// Keep this accurate: it is printed in the footer, on invoices and in schema `legalName`.
export const LEGAL_NAME = "Amplify Marketing Management";
export const LICENCE_NO = "1553366";
export const LICENCE_AUTHORITY = "Department of Economy and Tourism, Dubai";
// Yegor started the agency in 2023 as Amplify Marketing; the DET licence followed on 17 Sep 2025.
export const FOUNDING_YEAR = "2023";
export const LICENCE_ISSUED = "September 2025";

export const SITE_URL = "https://multify.ae";

// Bump when a video/poster file changes under the same name: media is cached for 30 days,
// so browsers only refetch when the URL changes.
export const MEDIA_VERSION = "20261027c";
export const media = (path: string) => `${path}?v=${MEDIA_VERSION}`;
export const SITE_HOST = "multify.ae";
export const PORTAL_URL = "https://app.multify.ae";
// "Find your price" form posts here (portal route app/api/inquiries: stores the lead, pings Telegram).
export const INQUIRY_API = `${PORTAL_URL}/api/inquiries`;

export const CONTACT_EMAIL = "hello@multify.ae";
export const PHONE_DISPLAY = "+971 52 452 2978";
export const PHONE_E164 = "+971524522978";
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;

// Fill in when the profiles exist. Empty => omitted everywhere (no placeholder links).
export const INSTAGRAM_URL = "";
export const LINKEDIN_URL = "";
export const TIKTOK_URL = "";
export const SOCIAL_PROFILES = [INSTAGRAM_URL, LINKEDIN_URL, TIKTOK_URL].filter(Boolean);

// Yegor's own product. Linked from About, the AI platforms page and his Person node so
// search and AI engines connect Multify, ClickCollab and the person behind both.
export const CLICKCOLLAB_URL = "https://www.clickcollab.net";

// Both co-founders hold the CEO title (Yegor's decision, 29 Oct 2026). `focus` is the
// plain-language split of who does what; `sameAs` ties the Person node to profiles elsewhere.
export const FOUNDERS = [
  {
    name: "Yegor Konyakhin",
    role: "Co-founder & CEO",
    focus: "strategy, client accounts, social media, AI and web builds",
    id: "founder-yegor",
    sameAs: [`${CLICKCOLLAB_URL}/about`],
  },
  {
    name: "Asset Zhumabayev",
    role: "Co-founder & CEO",
    focus: "filming and editing",
    id: "founder-asset",
    sameAs: [] as string[],
  },
];

export const TAGLINE = "We make brands impossible to ignore.";
export const DESCRIPTION =
  "Dubai social media and video marketing agency. We film, script, edit, post and report short-form content for UAE businesses and creators, from AED 5,000 a month.";

export const PACKAGES = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Get consistent",
    price: 5000,
    perWeek: "6 videos a month",
    features: ["6 videos filmed a month", "Filmed by our team", "Scripts written for every video", "Professionally edited", "End-of-month analytics report"],
    description: "6 videos filmed a month by our team, scripted and professionally edited, with an end-of-month analytics report.",
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "Level up",
    price: 8000,
    perWeek: "3 videos a week",
    popular: true,
    features: ["3 videos every week", "Filmed, scripted & edited", "Access to AI-generated content", "Uploading & scheduling handled", "Monthly strategy call", "End-of-month analytics report"],
    description: "3 videos every week, filmed, scripted and edited, with access to AI-generated content, uploading and scheduling, a monthly strategy call and an end-of-month analytics report.",
  },
  {
    slug: "scale",
    name: "Scale",
    tagline: "Own your market",
    price: 17000,
    perWeek: "6 videos a week",
    features: ["6 videos every week", "Everything in Starter & Growth", "In-depth social media analysis", "Niche & competitor analysis", "Full strategy for your business"],
    description: "6 videos every week, everything in Starter and Growth, plus in-depth social media analysis, niche and competitor analysis and a full strategy for your business.",
  },
] as const;

export const AED = (n: number) => `AED ${n.toLocaleString("en-US")}`;

export const SERVICE_PAGES = [
  {
    slug: "social-media-marketing-dubai",
    path: "/services/social-media-marketing-dubai",
    name: "Social Media Marketing",
    short: "Social media marketing",
    title: "Social Media Marketing Agency in Dubai",
    description: "Content calendars, captions, uploading and scheduling, community management and monthly analytics for Dubai and UAE brands.",
  },
  {
    slug: "video-production-dubai",
    path: "/services/video-production-dubai",
    name: "Video Production",
    short: "Video production",
    title: "Short-Form Video Production in Dubai",
    description: "Concepts, scripts, shoot days on location across Dubai and edits built for Reels, TikTok and YouTube Shorts.",
  },
  {
    slug: "ai-platforms-dubai",
    path: "/services/ai-platforms-dubai",
    name: "AI Platforms, Websites and SEO",
    short: "AI platforms & websites",
    title: "AI Platforms, Websites and SEO/AEO in Dubai",
    description: "Custom AI agents and automations, fast business websites, company email and search/answer-engine optimisation, built and handed over.",
  },
] as const;

export const NAV_PAGES = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const LEGAL_PAGES = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
