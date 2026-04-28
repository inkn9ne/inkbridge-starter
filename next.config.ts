import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Figma plugin UI iframe (null origin) to fetch static assets
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ],
      },
    ];
  },
};

export default nextConfig;
