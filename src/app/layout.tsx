import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Aurora from "@/components/Aurora";
import VideoBackdrop from "@/components/VideoBackdrop";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amplifymarketing.ae"),
  title: "Amplify Marketing — Digital Marketing Agency, Dubai",
  description:
    "Amplify Marketing makes brands impossible to ignore. Strategy, content and campaigns for the UAE market.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Amplify",
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
        <SmoothScroll />
        <Aurora />
        <VideoBackdrop />
        <div className="relative z-[1]">{children}</div>
      </body>
    </html>
  );
}
