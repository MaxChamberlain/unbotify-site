import { type MetadataRoute } from "next";

const SITE_URL = "https://maxintegrations.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/services/cloudflare`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/services/shopify`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/services/analytics`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/services/development`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "daily",
    },
  ];

  return [...staticUrls];
}
