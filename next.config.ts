import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений (требуется сервер)
  },
  trailingSlash: true, // Добавляет слэш в конце URL
};

export default nextConfig;