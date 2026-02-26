import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/**': ['./generated/prisma/**/*'],
    '/quiz/**': ['./generated/prisma/**/*'],
    '/result/**': ['./generated/prisma/**/*'],
    '/room/**': ['./generated/prisma/**/*'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
