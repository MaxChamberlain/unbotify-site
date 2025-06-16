import { type MetadataRoute } from "next";

// Assuming a function that fetches all dynamic content slugs
// e.g., from a headless CMS or database
async function fetchDynamicContent() {
  const services = await fetch(".../api/services").then((res) => res.json());
  const blogPosts = await fetch(".../api/posts").then((res) => res.json());
  return { services, blogPosts };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { services, blogPosts } = await fetchDynamicContent();
  const siteUrl = "https://maxintegrations.net";

  const serviceUrls = services.map((service: any) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt),
    priority: 0.8,
  }));

  const blogUrls = blogPosts.map((post: any) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/cloudflare`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/shopify`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/analytics`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/development`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      priority: 1,
    },
  ];

  return [...staticUrls, ...serviceUrls, ...blogUrls];
}
