// src/lib/posts.ts
// Blog posts as structured blocks. Rendered by app/blog/[slug] and used for BlogPosting schema.
// Facts about Multify come from site.ts; market ranges are labelled as indicative in the text.
import { AED, PRICE_FROM } from "@/lib/site";

const perVideo = (price: number, videos: number) => AED(Math.round(price / videos));

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string } // the quotable definition, rendered in a box
  | { type: "stats"; items: { label: string; value: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "link"; text: string; href: string; label: string };

export type Post = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string; // ISO date
  updated: string;
  readingMinutes: number;
  keywords: string[];
  blocks: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "social-media-management-cost-dubai",
    path: "/blog/social-media-management-cost-dubai",
    title: "How Much Does Social Media Management Cost in Dubai? (2026 Prices)",
    metaTitle: "Social Media Management Cost in Dubai (2026)",
    description:
      "What Dubai businesses pay for social media management in 2026: indicative ranges, what each level includes, Multify's published prices and the hidden costs to check.",
    published: "2026-10-27",
    updated: "2026-10-27",
    readingMinutes: 7,
    keywords: ["social media management cost Dubai", "social media agency price UAE", "social media management packages Dubai"],
    blocks: [
      { type: "quote", text: "Social media management in Dubai costs anywhere from about AED 1,500 a month for a freelancer posting supplied content to AED 30,000 or more for a full-service agency with filming, paid ads and strategy. For a package that includes filming, scripting, editing and reporting, expect AED 5,000 to AED 17,000 a month." },
      { type: "p", text: "Prices in Dubai are all over the place because \"social media management\" can mean anything from scheduling your photos to running a weekly production. This guide separates the levels, explains what moves the price, and shows our own published numbers so you have a real benchmark." },
      { type: "h2", text: "The four price levels in Dubai" },
      { type: "p", text: "These are indicative 2026 ranges for monthly retainers in Dubai, based on the quotes businesses share with us and on what agencies publish. Treat them as a map, not a quote." },
      { type: "table", head: ["Level", "Typical monthly price", "What you get"], rows: [
        ["Freelancer or VA", "AED 1,500 – 4,000", "Posting content you supply, captions, basic scheduling. No filming."],
        ["Small content agency", "AED 4,000 – 10,000", "Filming, scripts, editing and posting on a fixed cadence, monthly report."],
        ["Full-service agency", "AED 10,000 – 30,000+", "Strategy, production, paid ads management, community management, several platforms."],
        ["Agency + paid media", "AED 15,000 – 50,000+", "Everything above plus ad spend managed on your behalf (spend is extra)."],
      ] },
      { type: "h2", text: "What actually drives the price" },
      { type: "ul", items: [
        "Filming. Content made from footage shot for you costs more than content made from your phone photos, and performs differently. Ask who films and how often.",
        "Volume. The number of finished videos a month is the biggest lever; three a week is roughly double the work of six a month.",
        "Scripts and strategy. Written hooks and a monthly plan are what separate content from noise; some packages charge for them separately.",
        "Posting and replies. Uploading, scheduling, captions, hashtags and answering comments add hours every week.",
        "Platforms. Each extra platform means extra formats and extra posting time.",
        "Reporting. A real monthly report with numbers and next steps, versus a screenshot of followers.",
      ] },
      { type: "h2", text: "Our prices" },
      { type: "p", text: "Multify quotes each business after five questions (industry, videos a week, what you need, audience, start date), because those are the things that move the price. All three packages include filming at your location, a script for every video, editing and an end-of-month report. There is no long-term contract and no VAT is added at present." },
      { type: "stats", items: [
        { label: "Starter · 6 videos a month", value: `from ${AED(PRICE_FROM)} / month` },
        { label: "Growth · 3 videos a week", value: "quoted per business" },
        { label: "Scale · 6 videos a week", value: "quoted per business" },
        { label: "Cost per finished video", value: `from about ${perVideo(PRICE_FROM, 6)} on Starter, less per video on Growth and Scale` },
      ] },
      { type: "link", text: "Five questions, one price for your business, plus what is and isn't included:", href: "/pricing", label: "Find your price" },
      { type: "h2", text: "Hidden costs to check before you sign" },
      { type: "ul", items: [
        "Ad spend. Boosting and campaigns are paid to Meta, TikTok or Google on top of any management fee. Ask whether the fee includes managing ads, and confirm the spend is yours to control.",
        "Shoot days. Some agencies quote a monthly fee and then charge per shoot day. Ask how many filming sessions are included.",
        "Extra formats. A vertical video re-cut to square or landscape, or a longer YouTube version, may be billed separately.",
        "Rush edits and revisions. Check how many revision rounds are included and the turnaround for recaps.",
        "Ownership. Make sure finished videos and raw footage are yours once paid for, and that your accounts stay in your name.",
        "Travel. Shoots outside Dubai are usually quoted separately.",
      ] },
      { type: "h2", text: "How to compare two quotes fairly" },
      { type: "ol", items: [
        "Count finished videos per month and divide the fee by that number. Cost per video is the honest comparison.",
        "Check whether filming is included, and how many shoot days.",
        "Ask for the monthly report template. If there isn't one, there isn't reporting.",
        "Ask what happens in month one: strategy call, scripts, first shoot date.",
        "Read the cancellation terms. Month-to-month is normal for content packages.",
      ] },
      { type: "p", text: "If you want a quote in writing, send us your Instagram and what you sell. We reply with the package that fits and a first shoot date." },
    ],
  },
  {
    slug: "how-to-choose-video-content-agency-dubai",
    path: "/blog/how-to-choose-video-content-agency-dubai",
    title: "How to Choose a Video Content Agency in Dubai",
    metaTitle: "How to Choose a Video Content Agency in Dubai",
    description:
      "Checklist for hiring a Reels and TikTok content agency in Dubai: eight questions to ask, red flags, what a fair quote looks like and a 30-day test.",
    published: "2026-10-27",
    updated: "2026-10-27",
    readingMinutes: 6,
    keywords: ["video content agency Dubai", "social media content agency Dubai", "Reels production Dubai"],
    blocks: [
      { type: "quote", text: "A video content agency plans, films, edits and usually posts short-form video for a business on a monthly schedule. It sits between a production house, which makes one film per project, and a digital marketing agency, which manages ads and campaigns but rarely films." },
      { type: "p", text: "Dubai has hundreds of agencies that say they do video. Most do one of three things well: production, posting, or advertising. Decide which you are buying, then use the questions below to tell them apart." },
      { type: "h2", text: "Eight questions to ask before you sign" },
      { type: "ol", items: [
        "Who films? Their own team, or freelancers booked per job? Ask to see footage from the last month, not the showreel.",
        "Who writes the scripts? A hook written before the shoot is the difference between a view and a scroll. Ask for two sample scripts.",
        "How many finished videos a month, and how many shoot days? Divide the fee by the videos to get the real price.",
        "Is posting included? Captions, hashtags, scheduling and replies take hours a week. Some agencies hand you files and stop.",
        "What does the monthly report contain? Reach, growth, conversions, best and worst content, next steps. Ask to see a real one.",
        "Who owns the files and the accounts? Finished videos, raw footage and your social accounts should be yours.",
        "What is the contract length? Monthly with notice is normal for content; twelve-month lock-ins are a warning sign unless the price reflects it.",
        "Have you filmed in my industry? Real estate, car rental, venues and clinics each have their own formats and rules.",
      ] },
      { type: "h2", text: "Red flags" },
      { type: "ul", items: [
        "Follower guarantees. Nobody can promise growth on a platform they don't control.",
        "A showreel with no recent work. Ask for last month's posts for three current clients.",
        "No scripts, no plan. If the first step is \"we'll come and film\", the content will drift.",
        "Fees without a video count. \"Social media management\" with no number of deliverables is not a package.",
        "Accounts created in the agency's name. You should be the owner; they should be a collaborator.",
      ] },
      { type: "h2", text: "What a fair quote looks like" },
      { type: "p", text: `A clear monthly fee, a video count, the number of shoot days, what is posted and where, and the report you get. For reference, Multify's packages start from ${AED(PRICE_FROM)} a month for 6 filmed videos; 3 and 6 videos a week are quoted per business after five questions on the pricing page. Filming, scripts, editing and a monthly report are included, cancellable monthly.` },
      { type: "link", text: "The full package comparison:", href: "/pricing", label: "Pricing and FAQ" },
      { type: "link", text: "Eleven Dubai agencies compared on what they publish, including us:", href: "/best-video-content-agencies-dubai", label: "Best video content agencies in Dubai" },
      { type: "h2", text: "Run a 30-day test" },
      { type: "ol", items: [
        "Week 1: strategy call, scripts approved, shoot date booked.",
        "Week 2: first shoot day; first edits back for approval within days.",
        "Weeks 3–4: posting on schedule, first replies handled, first numbers in.",
        "Day 30: a report with reach, growth, what worked and what changes next month.",
      ] },
      { type: "p", text: "If an agency can't run that month, it won't run month six either. If it can, you have your answer." },
    ],
  },
  {
    slug: "real-estate-video-marketing-dubai",
    path: "/blog/real-estate-video-marketing-dubai",
    title: "Real Estate Video Marketing in Dubai: Formats That Generate Enquiries",
    metaTitle: "Real Estate Video Marketing in Dubai: 6 Formats",
    description:
      "Six short-form formats that bring enquiries for Dubai agents and brokerages, a sample weekly calendar, the DLD permit rule and a pre-shoot checklist.",
    published: "2026-10-27",
    updated: "2026-10-27",
    readingMinutes: 6,
    keywords: ["real estate video marketing Dubai", "property video Dubai", "real estate marketing agency Dubai"],
    blocks: [
      { type: "quote", text: "Real estate video marketing in Dubai means short vertical videos of properties, agents and communities, posted weekly on Instagram, TikTok and YouTube Shorts, so buyers and tenants find and message the agent before they search portals." },
      { type: "p", text: "Portals show every listing. Video shows yours, with your face, in the first three seconds of someone's scroll. These are the formats we film for agents and brokerages in Dubai, in the order we'd start them." },
      { type: "h2", text: "Six formats, in order of impact" },
      { type: "h3", text: "1. Listing walkthrough" },
      { type: "p", text: "30–60 seconds: entrance, living space, the view, one standout feature, the price, and \"message me for a viewing\". Filmed on a gimbal with the curtains open and the lights on. One per listing, re-cut when the price changes." },
      { type: "h3", text: "2. Agent talking-head" },
      { type: "p", text: "You answering one question a buyer actually asks: what service charges are in this tower, how a payment plan works, which community fits a AED 1.5 million budget. Scripted to 30 seconds. These build the name that gets you referrals." },
      { type: "h3", text: "3. Area and community guide" },
      { type: "p", text: "A walk or drive through JVC, Marina, Business Bay or Dubai Hills with facts on screen: price per square foot, schools, commute. These keep getting found for months because people search the area before the listing." },
      { type: "h3", text: "4. Market update" },
      { type: "p", text: "A weekly 20-second update: new launches, a rule change, what moved in your area. Filmed in a batch of four on one shoot day, posted one a week." },
      { type: "h3", text: "5. Handover and before-and-after" },
      { type: "p", text: "Keys, the first walk in, a furnishing package going in. Satisfying to watch, and proof that you close." },
      { type: "h3", text: "6. Client testimonial" },
      { type: "p", text: "A buyer or tenant at handover, 20 seconds, with your branding. Ask on the day; people say yes when they're happy." },
      { type: "h2", text: "A sample week on the Growth package" },
      { type: "table", head: ["Day", "Post", "Format"], rows: [
        ["Monday", "New listing", "Walkthrough"],
        ["Wednesday", "\"What are service charges in Marina?\"", "Talking-head"],
        ["Friday", "JVC in 40 seconds", "Area guide"],
      ] },
      { type: "p", text: "Three videos a week from one shoot day, with scripts approved beforehand and each edit approved before posting. Market updates and testimonials slot in when there is news or a handover." },
      { type: "h2", text: "The permit rule" },
      { type: "p", text: "Property advertisements in Dubai, including social media posts, require a Dubai Land Department advertising permit issued through Trakheesi, and the permit number should appear on the post. Your brokerage normally obtains it per listing; we put it in the caption and on screen where required. Rules change, so confirm the current DLD and RERA requirements before publishing. This is a summary, not legal advice." },
      { type: "h2", text: "Pre-shoot checklist" },
      { type: "ul", items: [
        "Property staged: beds made, counters clear, curtains open, lights on, AC on.",
        "Permit number and approved price confirmed in writing.",
        "Three questions you want to answer on camera, so the talking-heads are ready.",
        "Route planned by location: 2–4 properties per day.",
        "Agent wardrobe: plain colours, no small patterns, brand pin if you have one.",
      ] },
      { type: "link", text: "What we film for agents and brokerages, the recommended package and five FAQs:", href: "/industries/real-estate-marketing-dubai", label: "Real estate marketing in Dubai" },
    ],
  },
  {
    slug: "what-is-aeo-answer-engine-optimisation",
    path: "/blog/what-is-aeo-answer-engine-optimisation",
    title: "What Is AEO and Why Your Dubai Business Needs It",
    metaTitle: "What Is AEO? Answer Engine Optimisation for Dubai",
    description:
      "AEO explained for Dubai business owners: how ChatGPT, Perplexity, Gemini and Google AI pick who to recommend, how it differs from SEO, and a five-step checklist.",
    published: "2026-10-27",
    updated: "2026-10-27",
    readingMinutes: 6,
    keywords: ["AEO", "answer engine optimisation", "AI search optimisation Dubai", "SEO and AEO agency Dubai"],
    blocks: [
      { type: "quote", text: "Answer engine optimisation (AEO) is the practice of making a business the one that AI assistants such as ChatGPT, Perplexity, Gemini and Google's AI answers recommend when someone asks a question, by publishing clear facts about who you are, where you are, what you sell and what it costs, in a form those systems can read and trust." },
      { type: "p", text: "A growing share of \"which agency / clinic / rental company should I use in Dubai\" questions are now asked to an AI assistant instead of typed into Google. The assistant answers with three to five names. AEO is how you become one of them." },
      { type: "h2", text: "How AI answers choose who to recommend" },
      { type: "p", text: "From what the engines publish and from testing prompts every month, the pattern is consistent:" },
      { type: "ul", items: [
        "They lean on lists. \"Best X in Dubai\" articles, directories such as Clutch, Sortlist, DesignRush and GoodFirms, and review platforms are cited far more than company homepages.",
        "They want a clear entity. One name, one phone, one address and one licence number that match across your site, Google Business Profile and every directory.",
        "They quote pages that answer a question in the first paragraph, with a price or a number in it.",
        "They read structured data (schema.org) and plain-text files like llms.txt that state the facts without the design.",
        "They prefer pages that already rank and load fast, so classic SEO still underpins all of it.",
      ] },
      { type: "h2", text: "SEO versus AEO" },
      { type: "table", head: ["", "SEO", "AEO"], rows: [
        ["Goal", "Rank on the results page", "Be named in the answer"],
        ["Unit", "A page for a keyword", "A fact about an entity"],
        ["Signals", "Links, content, speed, intent", "Consistency, citations in lists, schema, clear Q&A"],
        ["Measure", "Rankings, clicks", "Mentions across prompts, referrals from AI tools"],
      ] },
      { type: "h2", text: "A five-step AEO checklist for a Dubai business" },
      { type: "ol", items: [
        "Write the entity statement. On your homepage and About page: who you are, legal name and licence, where you serve, what you sell, from what price, in two sentences.",
        "Publish prices and answers. A pricing page with real numbers and a visible FAQ, marked up with FAQPage schema.",
        "Make the facts machine-readable. Organization, Service and Person schema; an llms.txt file; a sitemap; Open Graph previews.",
        "Match everything off-site. Google Business Profile, Clutch, Sortlist, DesignRush, GoodFirms, LinkedIn: same name, phone, address, description. Collect reviews.",
        "Get into the lists. Pitch the authors of \"best in Dubai\" articles and publish an honest one yourself that includes competitors; this format is what the engines cite.",
      ] },
      { type: "h2", text: "What this looks like in practice" },
      { type: "p", text: "This site is built the way we build for clients: an entity statement on the homepage, a pricing page with published packages and ten FAQs, one page per service and per industry, a schema graph naming the company, founders, services and prices, an llms.txt and llms-full.txt for AI crawlers, real 404s and a sitemap, with the same name and phone everywhere. It is an ordinary static site that loads fast; the difference is that every fact is stated once, plainly, and repeated consistently." },
      { type: "link", text: "We build this for Dubai businesses alongside websites and AI tools:", href: "/services/ai-platforms-dubai", label: "AI platforms, websites and SEO/AEO" },
    ],
  },
];

export const POST_PATHS = POSTS.map((p) => p.path);
