import type { MetadataRoute } from "next";

const SITE_URL = "https://sarrahgandhi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/projects",
          "/resume",
          "/branding-kit",
          "/elite-studios",
          "/onboarding",
        ],
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
