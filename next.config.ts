import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  // Fix workspace root detection issue
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
