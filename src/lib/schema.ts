// src/lib/schema.ts
// Single source of truth for Multify structured data (schema.org JSON-LD).
// Facts here must stay in sync with the visible pages; brand/legal/contact values come from site.ts.
import {
  BRAND,
  BRAND_FULL,
  CONTACT_EMAIL,
  DESCRIPTION,
  FOUNDERS,
  FOUNDING_YEAR,
  LEGAL_NAME,
  LICENCE_NO,
  media,
  PACKAGES,
  PHONE_E164,
  SERVICE_PAGES,
  SITE_URL,
  SOCIAL_PROFILES,
  TAGLINE,
  WHATSAPP_URL,
} from "@/lib/site";
import type { Faq } from "@/lib/faqs";
import type { Industry } from "@/lib/industries";
import type { Post } from "@/lib/posts";

export { SITE_URL };

const ID = {
  org: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  catalog: `${SITE_URL}/#packages`,
  person: (id: string) => `${SITE_URL}/about#${id}`,
  svc: (slug: string) => `${SITE_URL}/#service-${slug}`,
};

const AREA_SERVED = [
  { "@type": "City", name: "Dubai", sameAs: "https://en.wikipedia.org/wiki/Dubai" },
  { "@type": "Country", name: "United Arab Emirates", sameAs: "https://en.wikipedia.org/wiki/United_Arab_Emirates" },
];

// Service entities. `page` links the ones that have their own page.
const SERVICES = [
  { slug: "social-media-marketing", name: "Social Media Marketing", page: "/services/social-media-marketing-dubai",
    description: "Content calendars, captions, uploading and scheduling, community management and monthly analytics reporting for Dubai and UAE brands." },
  { slug: "video-production", name: "Video Production", page: "/services/video-production-dubai",
    description: "Concepts, shoot days on location across Dubai, B-roll and short-form video for Reels, TikTok and YouTube Shorts." },
  { slug: "content-creation-scriptwriting", name: "Content Creation and Scriptwriting", page: "/services/video-production-dubai",
    description: "Creative concepts, hooks and scripts written for every video, plus access to AI-generated content on higher tiers." },
  { slug: "video-editing", name: "Video Editing", page: "/services/video-production-dubai",
    description: "Short-form edits with captions and subtitles, sound design and music, and colour grading, cut for sound-off viewing." },
  { slug: "creator-content-production", name: "Creator Content Production and Editing", page: "/creators",
    description: "Filming and editing systems for influencers, podcasters and creators in Dubai: a month of posts from one shoot, fast-cut and cinematic edits." },
  { slug: "ai-platform-development", name: "AI Platform Development and Integration", page: "/services/ai-platforms-dubai",
    description: "Custom AI platforms, agents and automations built, integrated and fully handed over to the client." },
  { slug: "website-development", name: "Website Development", page: "/services/ai-platforms-dubai",
    description: "Fast, animated business websites with company email setup, delivered and handed over to the client." },
  { slug: "seo-aeo", name: "SEO and AEO", page: "/services/ai-platforms-dubai",
    description: "Search engine optimisation and answer engine optimisation so your business is found in Google and AI assistants." },
] as const;

const monthly = (price: number) => ({
  "@type": "UnitPriceSpecification",
  price,
  priceCurrency: "AED",
  unitCode: "MON",
  referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
});

export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ID.org,
        name: BRAND,
        legalName: LEGAL_NAME,
        alternateName: BRAND_FULL,
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: `${SITE_URL}/icon-512.png`, contentUrl: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
        image: `${SITE_URL}/og.png`,
        description: DESCRIPTION,
        slogan: TAGLINE,
        email: CONTACT_EMAIL,
        telephone: PHONE_E164,
        foundingDate: FOUNDING_YEAR,
        founder: FOUNDERS.map((f) => ({ "@id": ID.person(f.id) })),
        identifier: { "@type": "PropertyValue", propertyID: "Dubai DET Trade Licence", value: LICENCE_NO },
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressRegion: "Dubai", addressCountry: "AE" },
        areaServed: AREA_SERVED,
        priceRange: "AED 5,000 - AED 17,000+ per month",
        currenciesAccepted: "AED",
        knowsLanguage: ["en", "ru"],
        knowsAbout: ["Social media marketing", "Video production", "Content creation", "Scriptwriting", "Video editing", "Creator content", "Real estate marketing", "Car rental marketing", "Hospitality marketing", "AI platform development", "Website development", "Search engine optimisation", "Answer engine optimisation"],
        contactPoint: [
          { "@type": "ContactPoint", contactType: "sales", telephone: PHONE_E164, email: CONTACT_EMAIL, areaServed: "AE", availableLanguage: ["English", "Russian"], url: WHATSAPP_URL },
          { "@type": "ContactPoint", contactType: "customer support", telephone: PHONE_E164, email: CONTACT_EMAIL, areaServed: "AE", availableLanguage: ["English", "Russian"] },
        ],
        ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
        hasOfferCatalog: { "@id": ID.catalog },
        makesOffer: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@id": ID.svc(s.slug) } })),
      },
      ...FOUNDERS.map((f) => ({
        "@type": "Person",
        "@id": ID.person(f.id),
        name: f.name,
        jobTitle: f.role,
        worksFor: { "@id": ID.org },
        workLocation: { "@type": "City", name: "Dubai" },
        url: `${SITE_URL}/about`,
      })),
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: `${SITE_URL}/`,
        name: BRAND,
        description: "Social media and video marketing agency in Dubai: filming, scripts, editing, posting, analytics, AI platforms, websites and SEO & AEO.",
        inLanguage: "en",
        publisher: { "@id": ID.org },
      },
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "@id": ID.svc(s.slug),
        name: s.name,
        serviceType: s.name,
        description: s.description,
        provider: { "@id": ID.org },
        areaServed: AREA_SERVED,
        url: `${SITE_URL}${s.page}`,
      })),
      {
        "@type": "OfferCatalog",
        "@id": ID.catalog,
        name: `${BRAND} packages`,
        url: `${SITE_URL}/pricing`,
        itemListElement: [
          ...PACKAGES.map((p) => ({
            "@type": "Offer",
            name: `${p.name} package`,
            description: p.description,
            url: `${SITE_URL}/pricing#${p.slug}`,
            price: p.price,
            priceCurrency: "AED",
            priceSpecification: monthly(p.price),
            availability: "https://schema.org/InStock",
            seller: { "@id": ID.org },
            areaServed: AREA_SERVED,
            itemOffered: { "@type": "Service", name: `${p.name} social media and video package`, serviceType: "Social media marketing and video production", provider: { "@id": ID.org } },
          })),
          {
            "@type": "Offer",
            name: "AI Platforms",
            description: "Custom AI platform development and integration, AI agents and automations, website development, company email setup and SEO & AEO, with full handover. Quoted per project.",
            url: `${SITE_URL}/services/ai-platforms-dubai`,
            seller: { "@id": ID.org },
            areaServed: AREA_SERVED,
            itemOffered: { "@id": ID.svc("ai-platform-development") },
          },
        ],
      },
    ],
  };
}

// One WebPage node per route (mounted by the page itself).
export function buildWebPage(opts: { path: string; name: string; description: string; type?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.org },
    inLanguage: "en",
  };
}

// Mount ONLY together with a visible FAQ whose text matches.
export function buildFaqPage(faqs: Faq[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    url: `${SITE_URL}${path}`,
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export function buildBreadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

// Service page node: a Service that is the main entity of its page.
export function buildServicePage(slug: (typeof SERVICE_PAGES)[number]["slug"]) {
  const page = SERVICE_PAGES.find((s) => s.slug === slug)!;
  const linked = SERVICES.filter((s) => s.page === page.path).map((s) => ({ "@id": ID.svc(s.slug) }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${page.path}#service`,
    name: page.title,
    serviceType: page.name,
    description: page.description,
    provider: { "@id": ID.org },
    areaServed: AREA_SERVED,
    url: `${SITE_URL}${page.path}`,
    ...(linked.length ? { hasOfferCatalog: { "@type": "OfferCatalog", name: page.name, itemListElement: linked.map((l) => ({ "@type": "Offer", itemOffered: l })) } } : {}),
  };
}

// Industry page node: the same services, scoped to an audience.
export function buildIndustryService(ind: Industry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${ind.path}#service`,
    name: ind.title,
    serviceType: "Social media marketing and video production",
    description: ind.description,
    provider: { "@id": ID.org },
    areaServed: AREA_SERVED,
    audience: { "@type": "BusinessAudience", audienceType: ind.name },
    url: `${SITE_URL}${ind.path}`,
    isRelatedTo: ["social-media-marketing", "video-production", "video-editing"].map((s) => ({ "@id": ID.svc(s) })),
  };
}

// Creators page node.
export function buildCreatorsService(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    serviceType: "Creator content production and editing",
    description,
    provider: { "@id": ID.org },
    areaServed: AREA_SERVED,
    audience: { "@type": "Audience", audienceType: "Content creators, influencers and podcasters" },
    url: `${SITE_URL}${path}`,
    sameAs: `${SITE_URL}/#service-creator-content-production`,
  };
}

// Blog post node. Author is the founder Person already in the site graph.
export function buildBlogPosting(post: Post) {
  const yegor = FOUNDERS[0];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}${post.path}#article`,
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}${post.path}`,
    mainEntityOfPage: { "@id": `${SITE_URL}${post.path}#webpage` },
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@type": "Person", "@id": ID.person(yegor.id), name: yegor.name, url: `${SITE_URL}/about` },
    publisher: { "@id": ID.org },
    image: `${SITE_URL}/og.png`,
    inLanguage: "en",
    keywords: post.keywords.join(", "),
    isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog`, name: `${BRAND} blog` },
  };
}

// Blog index: a Blog node listing the posts.
export function buildBlog(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: `${BRAND} blog`,
    description: "Guides on social media, short-form video, pricing and AI search for Dubai businesses.",
    publisher: { "@id": ID.org },
    inLanguage: "en",
    blogPost: posts.map((p) => ({ "@id": `${SITE_URL}${p.path}#article` })),
  };
}

// Portfolio videos as VideoObject nodes so the work is visible to text crawlers.
export function buildVideoObjects(items: { title: string; slug: string; tag: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#work`,
    name: `Work by the ${BRAND} team`,
    itemListElement: items.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        "@id": `${SITE_URL}/#video-${v.slug}`,
        name: `${v.title} — ${v.tag}`,
        description: v.description,
        thumbnailUrl: `${SITE_URL}${media(`/media/work/${v.slug}-poster.jpg`)}`,
        contentUrl: `${SITE_URL}${media(`/media/work/${v.slug}.mp4`)}`,
        uploadDate: "2026-08-12",
        inLanguage: "en",
        publisher: { "@id": ID.org },
      },
    })),
  };
}
