import type { NextConfig } from "next";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // ИЗМЕНИТЕ на название ВАШЕГО репозитория!
  basePath: isGitHubPages ? "/portfolio" : undefined,
};

export default nextConfig;