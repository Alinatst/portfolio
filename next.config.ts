import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // ВАЖНО: basePath для GitHub Pages
  basePath: '/portfolio',
  // assetPrefix для статических файлов
  assetPrefix: '/portfolio/',
};

export default nextConfig;