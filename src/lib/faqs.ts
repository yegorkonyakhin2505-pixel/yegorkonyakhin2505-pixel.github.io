// src/lib/faqs.ts
// FAQ text is rendered visibly on the page AND used for FAQPage schema. Never ship one without the other.
import { AED, BRAND, CONTACT_EMAIL, LEGAL_NAME, LICENCE_NO, PHONE_DISPLAY, PRICE_FROM } from "@/lib/site";

export type Faq = { q: string; a: string };

export const PRICING_FAQS: Faq[] = [
  {
    q: "How much does social media management cost in Dubai with Multify?",
    a: `Packages start from ${AED(PRICE_FROM)} a month. The exact price depends on how many videos a week you want, how many shoot days that takes, whether we post for you and how much strategy sits behind it. Answer five questions on the pricing page and we reply within 1 working day with a package and a price for your business. Every package includes filming, scriptwriting, editing and an end-of-month analytics report. AI platform and website projects are quoted per project.`,
  },
  {
    q: "What is included in the Starter package?",
    a: `Starter includes 6 videos filmed a month by our team, a script written for every video, professional editing and an end-of-month analytics report. It is the entry package, from ${AED(PRICE_FROM)} a month.`,
  },
  {
    q: "What is the difference between Growth and Scale?",
    a: "Growth is 3 videos a week and adds AI-generated content, uploading and scheduling and a monthly strategy call. Scale doubles output to 6 videos a week and adds in-depth social media analysis, niche and competitor analysis and a full strategy for your business. Both are quoted for your business after the five questions on the pricing page.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All packages are monthly and you can cancel anytime. You pay month by month against an invoice.",
  },
  {
    q: "Is VAT added to the prices?",
    a: `Prices are in AED. ${BRAND} is currently not VAT-registered, so no VAT is added to invoices.`,
  },
  {
    q: "Do you film on location in Dubai?",
    a: "Yes. Our team runs shoot days at your location across Dubai: the main content, B-roll and behind-the-scenes footage. Shoots elsewhere in the UAE are arranged per project.",
  },
  {
    q: "Do you write the scripts and post the content for us?",
    a: "Yes. We write a script and hook for every video. On Growth and Scale we also upload and schedule every post and handle captions and hashtags, so you never have to touch the post button.",
  },
  {
    q: "How do you report results?",
    a: "At the end of every month you receive a report covering reach, follower growth and conversions, your best and worst performing content, and what we will double down on next month. Growth and Scale clients also get a monthly strategy call, and every client gets a portal with the content calendar and weekly numbers.",
  },
  {
    q: "What happens in the first month?",
    a: "A strategy call to set goals and tone, a content calendar for the month, scripts for approval, the first shoot day, editing and approvals, then posting. Your first analytics report arrives at the end of the month.",
  },
  {
    q: `Is ${BRAND} a licensed company in Dubai?`,
    a: `Yes. ${BRAND} trades under ${LEGAL_NAME}, licensed by the Dubai Department of Economy and Tourism under trade licence ${LICENCE_NO}. Contact us at ${CONTACT_EMAIL} or ${PHONE_DISPLAY}.`,
  },
];

export const HOME_FAQS: Faq[] = [
  {
    q: `What does ${BRAND} do?`,
    a: `${BRAND} is a Dubai video and social media marketing agency. We plan, script, film, edit, post and report on short-form content (Instagram Reels, TikTok and YouTube Shorts) for UAE businesses and creators. We also build AI platforms, websites and SEO for clients.`,
  },
  PRICING_FAQS[0],
  PRICING_FAQS[3],
  PRICING_FAQS[6],
  PRICING_FAQS[9],
];

export const SOCIAL_FAQS: Faq[] = [
  {
    q: "Which platforms do you manage?",
    a: "Instagram (Reels, posts and Stories), TikTok and YouTube Shorts are the core. We can also publish the same content to Facebook and LinkedIn when it fits the business.",
  },
  {
    q: "How many posts a month do I get?",
    a: `It follows your package: 6 filmed videos a month on Starter, 3 a week on Growth and 6 a week on Scale. Stories, captions and reposts are planned around the videos in the monthly calendar.`,
  },
  {
    q: "Who approves the content before it goes live?",
    a: "You do. Scripts are approved before the shoot and finished videos before posting. Nothing is published without your sign-off.",
  },
  {
    q: "Do you reply to comments and DMs?",
    a: "On Growth and Scale we can reply to comments and routine DMs and pass real enquiries straight to you. The scope is agreed on the strategy call.",
  },
  {
    q: "Do you run paid ads?",
    a: "Packages cover organic content and management. Boosting and paid campaigns can be added as a separate line, with the ad spend paid by you directly to the platform.",
  },
];

export const VIDEO_FAQS: Faq[] = [
  {
    q: "What does a shoot day look like?",
    a: "We arrive at your location with the scripts approved, film the main pieces, B-roll and behind-the-scenes, and typically cover several videos in one session. You only need to be there for the parts that feature you or your team.",
  },
  {
    q: "What formats do you deliver?",
    a: "Vertical 9:16 for Reels, TikTok and Shorts as standard, with 1:1 or 16:9 cuts when a platform needs them. Files are delivered ready to post, with captions burned in.",
  },
  {
    q: "Do you use AI in the videos?",
    a: "Filming is real. On Growth and Scale we add AI-generated content where it helps: concept visuals, product scenes, voice-over variants and quick formats between shoot days. It is always labelled to you and never passed off as footage of your business.",
  },
  {
    q: "Can I use the videos outside social media?",
    a: "Yes. Once paid for, the videos are yours: website, ads, screens in your venue, presentations.",
  },
  {
    q: "Do you also do longer videos or events?",
    a: "Yes. Event coverage, podcast production and longer brand films are quoted per project on top of a package, or on their own.",
  },
];

export const AI_FAQS: Faq[] = [
  {
    q: "What kind of AI platforms do you build?",
    a: "Custom agents and automations around how your business already works: lead handling, booking and follow-up flows, content and reporting tools, internal assistants, and client portals like the one our own clients use.",
  },
  {
    q: "Do I own what you build?",
    a: "Yes. Everything is set up in accounts in your name and handed over with documentation. There is no lock-in and no monthly fee to keep what you own.",
  },
  {
    q: "How is a project priced?",
    a: "Per project, after a short scoping call. You get a fixed quote with the scope written down before any work starts.",
  },
  {
    q: "What is AEO?",
    a: "Answer engine optimisation: making your business the one ChatGPT, Perplexity, Gemini and Google AI answers recommend. In practice it is clear entity facts, question-and-answer pages, structured data and consistent listings, on top of normal SEO.",
  },
  {
    q: "Can you build a website like this one?",
    a: "Yes. multify.ae is built the same way we build for clients: fast static pages, animation that does not lag, search and AI-engine ready, with company email on your domain.",
  },
];
