import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// No lastModified: a build timestamp would claim every page changed on every
// deploy. Add a real date per page if we start tracking content changes.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-22");

  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/for-business`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
