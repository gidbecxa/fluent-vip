import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    suppressHydrationWarning: true,
  },
};

export default nextConfig;
