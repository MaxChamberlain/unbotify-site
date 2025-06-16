import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://maxintegrations.net";

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${siteUrl}/cloudflare`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/shopify`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/analytics`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/development`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "yearly",
    },
  ];

  return [...staticUrls];
}
