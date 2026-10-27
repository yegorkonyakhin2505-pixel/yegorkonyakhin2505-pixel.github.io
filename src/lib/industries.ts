// src/lib/industries.ts
// Industry pages: one per sector we have footage and process for. Text here is rendered
// visibly AND feeds Service/FAQPage schema, so keep it factual. Compliance notes are
// summaries, not legal advice — each one says so on the page.
import type { Faq } from "@/lib/faqs";
import { AED, PACKAGES } from "@/lib/site";

const [starter, growth, scale] = PACKAGES;

export type Industry = {
  slug: string;
  path: string;
  name: string; // short label for nav/footer
  title: string; // H1
  metaTitle: string;
  description: string; // meta description + schema
  eyebrow: string;
  lede: string;
  whoFor: string[];
  formats: { name: string; what: string }[];
  shootDay: string[];
  compliance: { heading: string; points: string[]; note: string };
  packageAdvice: string;
  workSlugs: string[]; // tiles in lib/work.ts
  faqs: Faq[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate-marketing-dubai",
    path: "/industries/real-estate-marketing-dubai",
    name: "Real estate",
    title: "Real Estate Video and Social Media Marketing in Dubai",
    metaTitle: "Real Estate Video & Social Marketing in Dubai",
    description:
      "Listing walkthroughs, agent talking-heads and area guides for Dubai real estate agents and brokerages, filmed, edited and posted by Multify. From AED 5,000 a month.",
    eyebrow: "Industries · Real estate",
    lede:
      "Buyers and tenants in Dubai shortlist on Instagram and TikTok before they ever call an agent. We film the property, the agent and the area, cut it for sound-off viewing and post it on a schedule, so your listings and your name show up every week.",
    whoFor: [
      "Individual agents and brokers building a personal brand",
      "Brokerages that want consistent listing content without a full-time videographer",
      "Developers' sales teams promoting launches and ready units",
      "Short-term rental and holiday-home operators",
    ],
    formats: [
      { name: "Listing walkthroughs", what: "A 30–60 second vertical tour: entrance, living space, views, one standout feature, price and a call to message. Filmed on gimbal with natural light." },
      { name: "Agent talking-heads", what: "You answering the questions buyers ask: service charges, payment plans, which communities fit which budgets. Scripted to land in 30 seconds." },
      { name: "Area and community guides", what: "Drive-through and walk-through content of JVC, Marina, Business Bay, Dubai Hills and the rest, with facts on screen. These keep working for months." },
      { name: "Before-and-after and handover days", what: "Renovations, furnishing packages and key handovers, cut as satisfying short reels." },
      { name: "Market updates", what: "A weekly 20-second update on what moved: new launches, price shifts, rule changes. Filmed in batches on one shoot day." },
      { name: "Client testimonials", what: "Buyers and tenants on camera at handover, with your branding and captions." },
    ],
    shootDay: [
      "One shoot day usually covers 2–4 properties plus agent pieces to camera; we plan the route by location so travel does not eat the day.",
      "Properties should be staged and lit before we arrive; we bring gimbal, lights for dark interiors and a lav mic for the agent.",
      "You approve the hooks and scripts before the shoot, and each edit before it is posted.",
    ],
    compliance: {
      heading: "Advertising rules for Dubai property content",
      points: [
        "Property advertisements in Dubai, including social media posts, require a Dubai Land Department advertising permit (issued through Trakheesi), and the permit number should appear on the post.",
        "Agents should be RERA-registered and show their broker registration details where the platform or the listing requires it.",
        "Off-plan promotions follow the developer's approved marketing material; we do not invent payment plans or returns on camera.",
      ],
      note: "This is a summary of the rules as we understand them, not legal advice. Permit requirements change; confirm the current DLD and RERA requirements with your brokerage before publishing.",
    },
    packageAdvice: `Most agents start on Growth (${AED(growth.price)} a month, 3 videos a week): enough to post a listing, a talking-head and an area clip every week. A single agent with a few exclusive listings can start on Starter (${AED(starter.price)}, 6 videos a month). Brokerages with several agents on camera usually need Scale (${AED(scale.price)}).`,
    workSlugs: ["real-estate", "podcast"],
    faqs: [
      { q: "How much does real estate video marketing cost in Dubai?", a: `With Multify, ${AED(starter.price)} a month for 6 filmed and edited videos (Starter), ${AED(growth.price)} for 3 videos a week (Growth) or ${AED(scale.price)} for 6 videos a week (Scale). Filming, scripts, editing and a monthly report are included in every package; one-off property films are quoted per project.` },
      { q: "Do you need a permit to post property videos in Dubai?", a: "Property advertisements in Dubai, including social media, require a Dubai Land Department advertising permit issued through Trakheesi, and the permit number should appear on the post. Your brokerage normally obtains it per listing; we add it to the caption and on screen where required. Confirm current requirements with DLD and RERA." },
      { q: "Can you film several properties in one day?", a: "Yes. A typical shoot day covers 2–4 properties plus talking-head pieces, planned by location. Properties should be staged before we arrive." },
      { q: "Do you post the videos for us?", a: "On Growth and Scale we upload and schedule to Instagram, TikTok and YouTube Shorts with captions and hashtags. On Starter you receive the finished videos and post them yourself." },
      { q: "Will you say that a property is a good investment?", a: "No. We script facts the agent and brokerage approve: price, size, payment plan as published, service charges, location. We do not promise returns or appreciation on camera." },
    ],
  },
  {
    slug: "car-rental-marketing-dubai",
    path: "/industries/car-rental-marketing-dubai",
    name: "Car rental",
    title: "Social Media Marketing for Car Rental Companies in Dubai",
    metaTitle: "Car Rental Social Media Marketing in Dubai",
    description:
      "Fleet reels, driving shots and booking explainers for Dubai car rental companies, filmed and edited by Multify. Packages from AED 5,000 a month.",
    eyebrow: "Industries · Car rental",
    lede:
      "Dubai car rental is decided on Instagram and TikTok: a visitor searches, watches a few reels and messages the company whose cars looked best. We film your fleet properly, cut it for the platforms and post it on a schedule, so you are the company they message.",
    whoFor: [
      "Luxury and sports car rental companies",
      "Daily and monthly rental fleets competing on price and availability",
      "Chauffeur and airport-transfer services",
      "Car clubs, detailing and PPF studios that sell to the same audience",
    ],
    formats: [
      { name: "Fleet reels", what: "One car per reel: walk-around, interior, start-up, a driving shot and the daily rate on screen. Batched so a month of content comes from one shoot." },
      { name: "Driving and location shots", what: "Sheikh Zayed Road at night, the Marina, Palm West Beach, the desert road. Filmed from a chase car with a gimbal, and only where filming is permitted." },
      { name: "Booking call-to-actions", what: "Short clips that answer the real questions: deposit, insurance, mileage, delivery to the hotel, documents needed. These convert." },
      { name: "Customer handovers", what: "Keys, the first drive, the reaction. With permission, these are your best social proof." },
      { name: "Seasonal and event content", what: "Winter season, Eid, New Year, car meets and club events, planned into the calendar ahead of time." },
      { name: "Comparisons and price explainers", what: "Three cars at three budgets, what is included, how to book. Evergreen content that keeps getting found." },
    ],
    shootDay: [
      "One shoot day usually covers 4–8 cars at your showroom or parking plus one driving location; we plan golden hour for the hero shots.",
      "Cars should be washed and fuelled; we bring gimbal, chase-car rig and lights for night interiors.",
      "Rates and offers are confirmed in writing before the shoot so what we put on screen is accurate on the day of posting.",
    ],
    compliance: {
      heading: "Filming and advertising rules for car content in Dubai",
      points: [
        "Commercial filming in public locations in Dubai generally requires a permit from the Dubai Film and TV Commission; we film on private premises by default and obtain permits for public locations when the plan needs them.",
        "Drone footage requires separate authorisation; we do not fly drones without the required permits.",
        "Driving shots follow the road rules: no speed or stunt content, no filming that endangers the driver, crew or the public.",
        "Advertised prices should match what the customer is actually charged, including deposits and insurance, under UAE consumer protection rules.",
      ],
      note: "This is a summary of the rules as we understand them, not legal advice. Confirm permit requirements with the Dubai Film and TV Commission and your own advisor before public-location shoots.",
    },
    packageAdvice: `Rental companies usually run Growth (${AED(growth.price)} a month): 3 videos a week keeps every car in rotation and leaves room for booking explainers. Smaller fleets start on Starter (${AED(starter.price)}, 6 videos a month). Companies with 30+ cars and daily offers go to Scale (${AED(scale.price)}).`,
    workSlugs: ["car-rental", "bmw-club"],
    faqs: [
      { q: "How much does social media marketing cost for a car rental company in Dubai?", a: `With Multify, ${AED(starter.price)} a month for 6 filmed and edited videos (Starter), ${AED(growth.price)} for 3 videos a week (Growth) or ${AED(scale.price)} for 6 videos a week (Scale). Every package includes filming at your location, scripts, editing and a monthly report.` },
      { q: "Do you film driving shots?", a: "Yes, from a chase car with a gimbal, within road rules and only where filming is permitted. Public-location shoots that need a Dubai Film and TV Commission permit are planned in advance." },
      { q: "Can one shoot day cover the whole fleet?", a: "A typical day covers 4–8 cars plus one driving location. Larger fleets are split across two days in the same month." },
      { q: "Do you also run paid ads for car rentals?", a: "Packages cover organic content and management. Boosting and paid campaigns can be added separately, with the ad spend paid by you to the platform." },
      { q: "Which platforms work best for car rental in Dubai?", a: "Instagram and TikTok carry most tourist enquiries; YouTube Shorts adds search traffic for model-specific queries. We post to all three on Growth and Scale." },
    ],
  },
  {
    slug: "hospitality-nightlife-marketing-dubai",
    path: "/industries/hospitality-nightlife-marketing-dubai",
    name: "Restaurants & nightlife",
    title: "Nightlife, Restaurant and Lounge Social Media Marketing in Dubai",
    metaTitle: "Restaurant & Nightlife Marketing in Dubai",
    description:
      "Atmosphere reels, event recaps and menu content for Dubai restaurants, lounges, clubs and karaoke venues, filmed at night by Multify. From AED 5,000 a month.",
    eyebrow: "Industries · Hospitality & nightlife",
    lede:
      "People choose where to go tonight from what they saw on Instagram this afternoon. We film your venue when it is actually alive, recap your events within days, and keep a week-by-week rhythm of content that fills tables and guest lists.",
    whoFor: [
      "Restaurants and cafés opening or relaunching",
      "Lounges, rooftops and beach clubs",
      "Nightclubs and event promoters",
      "Karaoke venues, shisha lounges and entertainment bars",
    ],
    formats: [
      { name: "Atmosphere reels", what: "The room at peak: lighting, music, guests, the bar in motion. Filmed on event nights with permission signage and cut for a 3-second hook." },
      { name: "Event recaps", what: "Delivered within 48–72 hours while the night is still being talked about: DJ, crowd, highlights, next date on screen." },
      { name: "Menu and dish content", what: "Macro food shots, the pour, the plate arriving at the table. Built for saves and shares." },
      { name: "Room and booth tours", what: "Karaoke rooms, VIP tables, private dining: what you get, how to book, price on screen." },
      { name: "Staff and owner pieces", what: "The chef, the bartender, the host: short talking-heads that give the venue a face." },
      { name: "Promotions and ladies' nights", what: "Weekly offers filmed in batches and scheduled ahead, so the calendar is never empty." },
    ],
    shootDay: [
      "Venue shoots happen on a real night, usually 9pm–1am, with a daytime session for food and rooms when needed.",
      "Guests are filmed with clear signage at the entrance and we avoid identifiable faces where a guest asks; the venue decides what gets published.",
      "We work with your event calendar so recaps and promos land in the right week.",
    ],
    compliance: {
      heading: "Advertising rules for venues in the UAE",
      points: [
        "Alcohol cannot be promoted in advertising in the UAE; venue content focuses on the atmosphere, food, music and events rather than drinks promotions.",
        "Paid promotion by influencers and creators follows UAE Media Council rules, including the advertiser permit requirement and clear labelling of paid content.",
        "Filming guests requires visible notice at the venue; we follow your house policy on what gets published and remove any clip a guest objects to.",
        "Offers shown on screen must match what is charged at the venue.",
      ],
      note: "This is a summary of the rules as we understand them, not legal advice. Confirm the current UAE Media Council and platform policies with your venue's licensing advisor before publishing.",
    },
    packageAdvice: `Venues with weekly events run Growth (${AED(growth.price)} a month): 3 videos a week covers an atmosphere reel, a recap and a promo every week. A restaurant or café without events usually starts on Starter (${AED(starter.price)}, 6 videos a month). Clubs and multi-venue groups go to Scale (${AED(scale.price)}).`,
    workSlugs: ["nightclub", "karaoke", "barbershop"],
    faqs: [
      { q: "How much does social media marketing cost for a restaurant or club in Dubai?", a: `With Multify, ${AED(starter.price)} a month for 6 filmed and edited videos (Starter), ${AED(growth.price)} for 3 videos a week (Growth) or ${AED(scale.price)} for 6 videos a week (Scale), filming at your venue included.` },
      { q: "Do you film at night and on event nights?", a: "Yes. Venue shoots happen on real nights, usually 9pm–1am, with daytime sessions for food, rooms and staff pieces when needed." },
      { q: "How fast do we get an event recap?", a: "Recaps are delivered within 48–72 hours of the event so they post while the night is still being talked about." },
      { q: "Can you show drinks in the videos?", a: "Alcohol cannot be promoted in advertising in the UAE, so our content focuses on the atmosphere, food, music and events. We follow your licensing advisor's guidance on what can appear on screen." },
      { q: "Do you handle comments and DMs for the venue?", a: "On Growth and Scale we reply to comments and routine DMs and pass real booking enquiries to your team, within the scope agreed on the strategy call." },
    ],
  },
];

export const INDUSTRY_PATHS = INDUSTRIES.map((i) => i.path);
