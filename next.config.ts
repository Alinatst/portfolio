import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Статический экспорт
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/portfolio', // Замените на название вашего репозитория
};

export default nextConfig;