import { type MetadataRoute } from "next";

const SITE_URL = "https://unbotify.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly",
    },
  ];

  return [...staticUrls];
}
