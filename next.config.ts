import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["100.98.235.58", "192.168.1.8"],
};

export default nextConfig;
