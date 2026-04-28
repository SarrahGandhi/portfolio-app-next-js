import type { MetadataRoute } from "next";

const SITE_URL = "https://sarrahgandhi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
    { path: "/resume", changeFrequency: "monthly", priority: 0.8 },
    { path: "/branding-kit", changeFrequency: "yearly", priority: 0.6 },
    { path: "/elite-studios", changeFrequency: "yearly", priority: 0.6 },
    { path: "/onboarding", changeFrequency: "yearly", priority: 0.5 },
    { path: "/projects/uiux-design", changeFrequency: "yearly", priority: 0.7 },
    { path: "/projects/avro-mobile", changeFrequency: "yearly", priority: 0.7 },
    {
      path: "/projects/midterm-presentation",
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
