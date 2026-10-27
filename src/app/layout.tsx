import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Aurora from "@/components/Aurora";
import VideoBackdrop from "@/components/VideoBackdrop";
import JsonLd from "@/components/JsonLd";
import { buildSiteGraph } from "@/lib/schema";
import { BRAND, DESCRIPTION, SITE_URL } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const TITLE = `${BRAND} — Social Media & Video Marketing Agency in Dubai`;

// The GitHub Pages mirror is built with NEXT_PUBLIC_NOINDEX=1 so only multify.ae is indexed.
const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "1";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${BRAND}` },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: NOINDEX ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_AE",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${BRAND} — social media and video marketing agency, Dubai` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: BRAND,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0c0b10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} antialiased`}>
      <body className="grain min-h-full">
        <JsonLd data={buildSiteGraph()} />
        <SmoothScroll />
        <Aurora />
        <VideoBackdrop />
        <div className="relative z-[1]">{children}</div>
      </body>
    </html>
  );
}
