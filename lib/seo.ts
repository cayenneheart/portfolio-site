import type { Metadata } from 'next';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kaien.mai-mee.com'
).replace(/\/$/, '');

export const SITE_LAST_MODIFIED = '2026-07-25';

export const SITE = {
  name: '小峯海円 Portfolio',
  ownerName: '小峯海円',
  ownerNameEn: 'Kaien Komine',
  defaultTitle: '小峯海円（Kaien Komine）| 起業家・エンジニア',
  description:
    '小峯海円（こみね かいえん）のポートフォリオサイト。「おもろい人生にする」をモットーに、起業・ビジネス開発・グローバルな挑戦を続けています。STARTiX・AXeler創業。',
  shortDescription:
    '小峯海円のポートフォリオ。「おもろい人生にする」をモットーに活動する起業家・エンジニア。',
  twitterCreator: '@cayenneheart1',
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ||
    'ysxUHXDxMRrsuBWcOXp32n4_zm1koOlaJxrE-mF4bnI',
  ogImage: {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: '小峯海円 | 起業家',
  },
} as const;

export const DEFAULT_KEYWORDS = [
  '小峯海円',
  '小峯 海円',
  'こみね かいえん',
  'Kaien Komine',
  '起業家',
  'エンジニア',
  'STARTiX',
  'AXeler',
  '筑波大学',
  'スタートアップ',
  'ポートフォリオ',
];

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') {
    return SITE_URL;
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return `${title} | ${SITE.ownerName}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const formattedTitle = pageTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: formattedTitle,
      description,
      type: 'website',
      locale: 'ja_JP',
      url,
      siteName: SITE.name,
      images: [SITE.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description,
      creator: SITE.twitterCreator,
      images: [SITE.ogImage],
    },
  };
}

export function sitemapDate(date = SITE_LAST_MODIFIED): Date {
  return new Date(`${date}T00:00:00.000Z`);
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.ownerName,
    alternateName: [SITE.ownerNameEn, 'こみね かいえん', '小峯 海円'],
    url: absoluteUrl('/'),
    jobTitle: '起業家・エンジニア',
    sameAs: [
      'https://twitter.com/cayenneheart1',
      'https://github.com/cayenneheart',
      'https://www.linkedin.com/in/kaien-komine-07a31a338/',
      'https://www.instagram.com/cayenneheart_',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: '筑波大学',
    },
    knowsAbout: ['起業', 'ビジネス開発', 'ソフトウェアエンジニアリング', 'AI'],
  };
}
