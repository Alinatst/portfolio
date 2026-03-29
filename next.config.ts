import type { NextConfig } from "next";

// Определяем, запущен ли проект на GitHub Pages
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // Статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений (требуется сервер)
  },
  trailingSlash: true, // Добавляет слэш в конце URL
  // basePath только для продакшена на GitHub Pages
  basePath: isGitHubPages ? "/portfolio" : undefined,
};

export default nextConfig;