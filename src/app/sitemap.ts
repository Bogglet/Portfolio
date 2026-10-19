import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// No lastModified: a build timestamp would claim every page changed on every
// deploy. Add a real date per page if we start tracking content changes.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/for-business`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
