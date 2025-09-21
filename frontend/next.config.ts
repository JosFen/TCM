import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Option A: simple allowlist
    // domains: ['www.news-medical.net', 'via.placeholder.com'],

    // Option B: remotePatterns (more precise; recommended)
    remotePatterns: [
      { protocol: 'https', hostname: 'www.news-medical.net' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
    ],
  },
};

export default nextConfig;
