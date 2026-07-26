import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  DEFAULT_KEYWORDS,
  SITE,
  SITE_URL,
  absoluteUrl,
  personJsonLd,
} from '@/lib/seo';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.defaultTitle,
    template: `%s | ${SITE.ownerName}`,
  },
  description: SITE.description,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE.ownerName }],
  creator: SITE.ownerName,
  alternates: {
    canonical: absoluteUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: SITE.googleSiteVerification
    ? { google: SITE.googleSiteVerification }
    : undefined,
  openGraph: {
    title: SITE.defaultTitle,
    description: SITE.shortDescription,
    type: 'website',
    locale: 'ja_JP',
    url: absoluteUrl('/'),
    siteName: SITE.name,
    images: [SITE.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.defaultTitle,
    description: SITE.shortDescription,
    creator: SITE.twitterCreator,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
