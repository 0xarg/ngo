import type { NextConfig } from "next";

const nextConfig = {
  // Add this block to disable linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // If you also want to ignore TypeScript errors during build:
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
} as NextConfig;

export default nextConfig;
