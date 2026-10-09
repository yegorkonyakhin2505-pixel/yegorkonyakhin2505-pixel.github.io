import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amplify Marketing",
    short_name: "Amplify",
    description: "Digital marketing agency — Dubai, UAE. We make brands impossible to ignore.",
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
