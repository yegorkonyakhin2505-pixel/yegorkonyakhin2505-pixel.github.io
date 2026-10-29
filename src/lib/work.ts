// src/lib/work.ts
// Portfolio tiles. Footage is work by our team; client names stay private and no numbers
// are shown unless a client has approved them. `description` feeds VideoObject schema.
// `landscape`: the source film is horizontal (16:9); the tile keeps it that way instead of cropping.
export type Case = { title: string; slug: string; tag: string; art: string; description: string; landscape?: boolean };

export const BUSINESSES: Case[] = [
  { title: "Barbershops", slug: "barbershop", tag: "Content & Reels", art: "radial-gradient(circle at 70% 20%, color-mix(in oklab, var(--accent) 65%, #fff) 0%, #101012 65%)", description: "Short-form reels for a Dubai barbershop: cuts, fades and the chair-side atmosphere, edited with captions for sound-off viewing." },
  { title: "BMW Car Club", slug: "bmw-club", tag: "Event Films & Socials", art: "linear-gradient(220deg, color-mix(in oklab, var(--accent) 55%, #000) 0%, #060607 80%)", description: "Event film and social clips for a BMW car club meet in Dubai: rolling shots, line-ups and member moments." },
  { title: "Podcasts", slug: "podcast", tag: "Production & Clips", art: "radial-gradient(circle at 30% 80%, color-mix(in oklab, var(--accent) 70%, #000) 0%, #101012 70%)", description: "Multi-camera podcast recording in Dubai cut into vertical clips with captions for Instagram and TikTok." },
  { title: "Car Rental", slug: "car-rental", tag: "Promo & Socials", art: "linear-gradient(150deg, color-mix(in oklab, var(--accent) 70%, #000) 0%, #101012 70%)", description: "Promo reels for a Dubai luxury car rental: fleet walk-arounds, driving shots and booking call-to-actions." },
  { title: "Clothing Brand", slug: "clothing", tag: "Campaign Content", art: "linear-gradient(320deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0b0b0d 75%)", description: "Campaign content for a clothing brand: lookbook-style vertical video and product detail shots for social media." },
  { title: "Nightlife & Clubs", slug: "nightclub", tag: "Event Coverage", art: "radial-gradient(circle at 50% 10%, color-mix(in oklab, var(--accent) 55%, #fff) 0%, #0d0d10 70%)", description: "Night-out event coverage for a Dubai club: crowd, DJ and venue atmosphere cut into recap reels." },
  { title: "Esports Team", slug: "esports", tag: "Montages & Socials", art: "linear-gradient(200deg, color-mix(in oklab, var(--accent) 65%, #000) 0%, #08080a 80%)", description: "Fast-cut montages and social clips for an esports team: matches, reactions and team branding." },
  { title: "Karaoke Lounge", slug: "karaoke", tag: "Promo & Reels", art: "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--accent) 60%, #fff) 0%, #0c0c0f 65%)", description: "Promo reels for a karaoke lounge: rooms, drinks and guests singing, edited for Instagram and TikTok." },
  { title: "Real Estate", slug: "real-estate", tag: "Social Growth", art: "linear-gradient(150deg, color-mix(in oklab, var(--accent) 75%, #000) 0%, #101012 70%)", description: "Property and agent content for Dubai real estate social media: walkthroughs, area shots and talking-head clips." },
  { title: "Product Ads", slug: "laptop", tag: "Tech & Promo Films", art: "linear-gradient(260deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0b0b0d 75%)", description: "Product promo film for a tech product: macro detail shots, screen content and a clean studio look." },
];

export const INFLUENCERS: Case[] = [
  { title: "Gym & Fitness", slug: "inf-gym", tag: "Content System", art: "radial-gradient(circle at 60% 30%, color-mix(in oklab, var(--accent) 60%, #fff) 0%, #0c0c0f 65%)", description: "Content system for a fitness creator in Dubai: gym sessions filmed and cut into a month of posts." },
  { title: "Behind the Scenes", slug: "inf-backstage", tag: "Production Content", art: "linear-gradient(300deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0a0a0d 75%)", description: "Behind-the-scenes production content from a shoot day in Dubai." },
  { title: "Gym Workouts", slug: "inf-workout", tag: "Training Content", art: "radial-gradient(circle at 75% 70%, color-mix(in oklab, var(--accent) 55%, #fff) 0%, #0b0b0e 68%)", description: "Training content for a gym creator: exercise demonstrations filmed and captioned for Reels and Shorts." },
  // Horizontal films: shown as two wide tiles under the three vertical ones (Yegor, 29 Oct 2026).
  { title: "Cinematic Films", slug: "inf-cinematic", tag: "Signature Edits", art: "linear-gradient(230deg, color-mix(in oklab, var(--accent) 55%, #000) 0%, #08080a 80%)", description: "Cinematic creator film: slow-motion, colour-graded sequences with sound design.", landscape: true },
  { title: "Creator Montages", slug: "inf-montage", tag: "Fast-Cut Edits", art: "radial-gradient(circle at 25% 75%, color-mix(in oklab, var(--accent) 65%, #000) 0%, #0c0c0f 70%)", description: "Fast-cut montage edit for a creator: beat-matched cuts and captions built for retention.", landscape: true },
];
