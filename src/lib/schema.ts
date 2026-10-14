// src/lib/schema.ts
// Single source of truth for Amplify Marketing structured data (schema.org JSON-LD).
// Facts here must stay in sync with the visible page (Packages.tsx, ServicesList.tsx, Contact.tsx).

export const SITE_URL = "https://amplifymarketing.ae";

// Fill these in when the profiles exist. Empty array => `sameAs` is omitted entirely
// (never ship placeholder URLs in production markup).
export const SOCIAL_PROFILES: string[] = [
  // "https://www.instagram.com/<handle>/",
  // "https://www.linkedin.com/company/<slug>/",
  // "https://www.tiktok.com/@<handle>",
];

const ID = {
  org: `${SITE_URL}/#organization`,
  founder: `${SITE_URL}/#founder`,
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  catalog: `${SITE_URL}/#packages`,
  svc: (slug: string) => `${SITE_URL}/#service-${slug}`,
};

const AREA_SERVED = [
  { "@type": "City", name: "Dubai" },
  { "@type": "Country", name: "United Arab Emirates" },
];

const SERVICES = [
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    description:
      "Content calendars, captions, uploading and scheduling, community management and monthly analytics reporting for Dubai and UAE brands.",
  },
  {
    slug: "video-production",
    name: "Video Production",
    description:
      "Concepts, shoot days on location across Dubai, B-roll and short-form video for Reels, TikTok and YouTube Shorts.",
  },
  {
    slug: "content-creation-scriptwriting",
    name: "Content Creation and Scriptwriting",
    description:
      "Creative concepts, hooks and scripts written for every video, plus access to AI-generated content on higher tiers.",
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    description:
      "Short-form edits with captions and subtitles, sound design and music, and colour grading, cut for sound-off viewing.",
  },
  {
    slug: "ai-platform-development",
    name: "AI Platform Development and Integration",
    description:
      "Custom AI platforms, agents and automations built, integrated and fully handed over to the client.",
  },
  {
    slug: "website-development",
    name: "Website Development",
    description:
      "Fast, animated business websites with company email setup, delivered and handed over to the client.",
  },
  {
    slug: "seo-aeo",
    name: "SEO and AEO",
    description:
      "Search engine optimisation and answer engine optimisation so your business is found in Google and AI assistants.",
  },
] as const;

const monthly = (price: number) => ({
  "@type": "UnitPriceSpecification",
  price,
  priceCurrency: "AED",
  unitCode: "MON",
  referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
});

const PACKAGES = [
  {
    slug: "starter",
    name: "Starter",
    price: 5000,
    description:
      "6 videos filmed a month by our team, scripted and professionally edited, with an end-of-month analytics report.",
  },
  {
    slug: "growth",
    name: "Growth",
    price: 8000,
    description:
      "3 videos every week, filmed, scripted and edited, with access to AI-generated content, uploading and scheduling, a monthly strategy call and an end-of-month analytics report.",
  },
  {
    slug: "scale",
    name: "Scale",
    price: 17000,
    description:
      "6 videos every week, everything in Starter and Growth, plus in-depth social media analysis, niche and competitor analysis and a full strategy for your business.",
  },
] as const;

export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ID.org,
        name: "Amplify Marketing",
        legalName: "Amplify Marketing Management",
        alternateName: "Amplify",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/icon-512.png`,
          contentUrl: `${SITE_URL}/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/icon-512.png`,
        description:
          "Amplify Marketing is a Dubai digital marketing agency: social media marketing, video production, content creation, scriptwriting, editing, AI platform development, website development and SEO & AEO for UAE brands.",
        slogan: "We make brands impossible to ignore.",
        email: "amplifymarketingdubai@gmail.com",
        telephone: "+971524522978",
        foundingDate: "2025",
        founder: { "@id": ID.founder },
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Dubai DET Trade Licence",
          value: "1553366",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        areaServed: AREA_SERVED,
        priceRange: "AED 5,000 - AED 17,000+ per month",
        currenciesAccepted: "AED",
        knowsLanguage: "en",
        knowsAbout: [
          "Social media marketing",
          "Video production",
          "Content creation",
          "Scriptwriting",
          "Video editing",
          "AI platform development",
          "Website development",
          "Search engine optimisation",
          "Answer engine optimisation",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+971524522978",
            email: "amplifymarketingdubai@gmail.com",
            areaServed: "AE",
            availableLanguage: ["English"],
            url: "https://wa.me/971524522978",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+971524522978",
            email: "amplifymarketingdubai@gmail.com",
            areaServed: "AE",
            availableLanguage: ["English"],
          },
        ],
        ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
        hasOfferCatalog: { "@id": ID.catalog },
        makesOffer: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@id": ID.svc(s.slug) },
        })),
      },
      {
        "@type": "Person",
        "@id": ID.founder,
        name: "Yegor Konyakhin",
        jobTitle: "Founder",
        worksFor: { "@id": ID.org },
        workLocation: { "@type": "City", name: "Dubai" },
        url: `${SITE_URL}/`,
      },
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: `${SITE_URL}/`,
        name: "Amplify Marketing",
        description:
          "Digital marketing agency in Dubai: video, social media, AI platforms, websites and SEO & AEO.",
        inLanguage: "en",
        publisher: { "@id": ID.org },
      },
      {
        "@type": "WebPage",
        "@id": ID.webpage,
        url: `${SITE_URL}/`,
        name: "Amplify Marketing - Digital Marketing Agency, Dubai",
        isPartOf: { "@id": ID.website },
        about: { "@id": ID.org },
        inLanguage: "en",
      },
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "@id": ID.svc(s.slug),
        name: s.name,
        serviceType: s.name,
        description: s.description,
        provider: { "@id": ID.org },
        areaServed: AREA_SERVED,
        url: `${SITE_URL}/#services`,
      })),
      {
        "@type": "OfferCatalog",
        "@id": ID.catalog,
        name: "Amplify Marketing packages",
        url: `${SITE_URL}/#packages`,
        itemListElement: [
          ...PACKAGES.map((p) => ({
            "@type": "Offer",
            name: `${p.name} package`,
            description: p.description,
            url: `${SITE_URL}/#packages`,
            price: p.price,
            priceCurrency: "AED",
            priceSpecification: monthly(p.price),
            availability: "https://schema.org/InStock",
            seller: { "@id": ID.org },
            areaServed: AREA_SERVED,
            itemOffered: {
              "@type": "Service",
              name: `${p.name} social media and video package`,
              serviceType: "Social media marketing and video production",
              provider: { "@id": ID.org },
            },
          })),
          {
            "@type": "Offer",
            name: "AI Platforms",
            description:
              "Custom AI platform development and integration, AI agents and automations, website development, company email setup and SEO & AEO, with full handover. Quoted per project.",
            url: `${SITE_URL}/#packages`,
            seller: { "@id": ID.org },
            areaServed: AREA_SERVED,
            itemOffered: { "@id": ID.svc("ai-platform-development") },
          },
        ],
      },
    ],
  };
}

// Optional. Mount ONLY together with a visible FAQ section whose text matches these answers.
export const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does a marketing agency cost in Dubai?",
    a: "Amplify Marketing's monthly packages start at AED 5,000 (Starter), with Growth at AED 8,000 and Scale at AED 17,000 per month. AI platform and website projects are quoted per project.",
  },
  {
    q: "What is included in each Amplify Marketing package?",
    a: "Every tier includes filming, scripting, editing and an end-of-month analytics report. Starter is 6 filmed videos a month, Growth is 3 videos a week with AI-generated content access, uploading and scheduling and a monthly strategy call, and Scale is 6 videos a week with social media, niche and competitor analysis and a full business strategy.",
  },
  {
    q: "Do I need to film anything myself?",
    a: "No. Our team handles concepts, scripts, shoot days, editing and posting, so you do not have to touch the post button.",
  },
  {
    q: "Can I cancel my package at any time?",
    a: "Yes. Packages are monthly and can be cancelled anytime.",
  },
  {
    q: "Do you use AI to create content?",
    a: "The Growth package includes access to AI-generated content alongside filmed video. We also build custom AI platforms, agents and automations for client businesses.",
  },
  {
    q: "What kind of video do you produce?",
    a: "Short-form video for Instagram Reels, TikTok and YouTube Shorts: scripted, filmed on location in Dubai, and edited with captions, sound design and colour grading for sound-off viewing.",
  },
  {
    q: "Do you only work with businesses in Dubai?",
    a: "We are based in Dubai and serve brands across Dubai and the wider UAE.",
  },
  {
    q: "Do you build websites and handle SEO?",
    a: "Yes. Our AI Platforms offering covers website development, company email setup and SEO & AEO (search engine optimisation and answer engine optimisation), with full handover so everything is yours.",
  },
  {
    q: "Is Amplify Marketing a licensed company in Dubai?",
    a: "Yes. Amplify Marketing Management operates under Dubai Department of Economy and Tourism trade licence 1553366.",
  },
  {
    q: "How do I get started?",
    a: "Send an enquiry by email to amplifymarketingdubai@gmail.com or by phone or WhatsApp on +971 52 452 2978, and we will recommend the right package.",
  },
];

export function buildFaqPage() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    url: `${SITE_URL}/`,
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// Breadcrumbs: for FUTURE sub-pages only (a one-item trail on the homepage adds nothing).
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
