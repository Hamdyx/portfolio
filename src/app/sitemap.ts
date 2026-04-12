import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hamdyx.dev',
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
