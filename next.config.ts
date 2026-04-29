import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  typedRoutes: true,
  async headers() {
    return [
      {
        source: "/sarrah-gandhi-resume.md",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
