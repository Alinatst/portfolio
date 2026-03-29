import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Уберите basePath
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;