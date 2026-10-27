import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND,
    short_name: BRAND,
    description: "Social media and video marketing agency — Dubai, UAE. We make brands impossible to ignore.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0b10",
    theme_color: "#0c0b10",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
