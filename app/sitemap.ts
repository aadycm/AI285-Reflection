import type { MetadataRoute } from "next";
import { reflections, slugFor } from "@/content";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = ["", "/reflections", "/journey", "/about", "/final-reflection"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...reflections
      .filter((r) => r.status === "published")
      .map((r) => ({
        url: `${base}/reflections/${slugFor(r.week)}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  ];
}
