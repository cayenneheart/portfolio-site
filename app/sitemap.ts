import { MetadataRoute } from 'next';
import { works } from '@/data';
import { absoluteUrl, sitemapDate } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries = works.map((work) => ({
    url: absoluteUrl(`/works/${work.slug}`),
    lastModified: sitemapDate(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: absoluteUrl('/'),
      lastModified: sitemapDate(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/works'),
      lastModified: sitemapDate(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/contact'),
      lastModified: sitemapDate(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...workEntries,
  ];
}
