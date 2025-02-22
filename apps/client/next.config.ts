import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com"], // Allow external images from this domain
  },
};

export default nextConfig;
