import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this block to disable linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // If you also want to ignore TypeScript errors during build:
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
