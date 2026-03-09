import { MetadataRoute } from 'next';
import { works } from '@/data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaien.maimee.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries = works.map((work) => ({
    url: `${BASE_URL}/works/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...workEntries,
  ];
}
