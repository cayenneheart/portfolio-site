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

export const metadata: Metadata = {
  title: 'Portfolio | フルスタックエンジニア',
  description:
    'フルスタックエンジニアのポートフォリオサイト。Web開発、モバイルアプリ開発の実績を紹介しています。',
  keywords: ['ポートフォリオ', 'エンジニア', 'Web開発', 'React', 'Next.js'],
  authors: [{ name: 'Taro Yamada' }],
  openGraph: {
    title: 'Portfolio | フルスタックエンジニア',
    description: 'フルスタックエンジニアのポートフォリオサイト',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
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
