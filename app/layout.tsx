import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Be_Vietnam_Pro, Charmonman, Nunito_Sans } from 'next/font/google'
import JsonLd from '@/components/JsonLd';
import CustomAnalytics from '@/components/Analytics';
import './globals.css'

// Configure fonts
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-be-vietnam-pro',
});

const charmonman = Charmonman({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-charmonman',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Hai Long Kim Travel - Discover Vietnam',
  description: 'Experience unforgettable travel adventures with Hai Long Kim Travel. Expert guides, customized tours, and the best prices for your Vietnam vacation.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Hai Long Kim Travel - Discover Vietnam',
    description: 'Experience unforgettable travel adventures with Hai Long Kim Travel.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hai Long Kim Travel - Discover Vietnam',
    description: 'Experience unforgettable travel adventures with Hai Long Kim Travel.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${charmonman.variable} ${nunitoSans.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased" suppressHydrationWarning>
        <CustomAnalytics />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
