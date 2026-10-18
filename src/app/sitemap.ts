import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/white-label`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
