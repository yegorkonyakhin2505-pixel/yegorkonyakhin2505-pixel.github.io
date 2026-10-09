import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export served by nginx (see Dockerfile / nginx.conf).
  output: "export",
  // Required for static export; no image optimizer at runtime.
  images: { unoptimized: true },
  // Routes export as /path.html — nginx resolves them via `try_files $uri $uri.html`.
  trailingSlash: false,
};

export default nextConfig;
