import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    APP_URL: process.env.NEXT_APP_URL
  }
};

export default nextConfig;
