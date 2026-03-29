import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Оставьте ТОЛЬКО basePath
  basePath: '/portfolio',
  // УДАЛИТЕ assetPrefix
};

export default nextConfig;