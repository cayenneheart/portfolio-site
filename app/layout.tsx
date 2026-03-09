import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ChatWidget } from '@/components/chat/chat-widget';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaien.mai-mee.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '小峯海円（Kaien Komine）| 起業家・エンジニア',
    template: '%s | 小峯海円',
  },
  description:
    '小峯海円（こみね かいえん）のポートフォリオサイト。「おもろい人生にする」をモットーに、起業・ビジネス開発・グローバルな挑戦を続けています。STARTiX・AXeler創業。',
  keywords: ['小峯海円', 'こみね かいえん', 'Kaien Komine', '起業家', 'エンジニア', 'STARTiX', 'AXeler', '筑波大学', 'スタートアップ', 'ポートフォリオ'],
  authors: [{ name: '小峯海円' }],
  creator: '小峯海円',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: '小峯海円（Kaien Komine）| 起業家・エンジニア',
    description: '小峯海円のポートフォリオ。「おもろい人生にする」をモットーに活動する起業家・エンジニア。',
    type: 'website',
    locale: 'ja_JP',
    url: BASE_URL,
    siteName: '小峯海円 Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小峯海円（Kaien Komine）| 起業家・エンジニア',
    description: '小峯海円のポートフォリオ。「おもろい人生にする」をモットーに活動する起業家・エンジニア。',
    creator: '@cayenneheart1',
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: '小峯海円',
              alternateName: 'Kaien Komine',
              url: BASE_URL,
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
            }),
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
          <ChatWidget difyAppId={process.env.NEXT_PUBLIC_DIFY_APP_ID || ''} />
        </ThemeProvider>
      </body>
    </html>
  );
}
