import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // во время `next build` не фейлить на ESLint-ошибках
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
