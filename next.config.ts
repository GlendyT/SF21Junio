import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "instagram.fgua3-3.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.fgua3-4.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.fgua3-5.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.fgua3-6.fna.fbcdn.net",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
