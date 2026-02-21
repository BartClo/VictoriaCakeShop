import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Allow local images to load even before real photos are added
    unoptimized: true,
  },
};

export default nextConfig;
