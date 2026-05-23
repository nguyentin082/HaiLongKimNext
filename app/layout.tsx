import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Be_Vietnam_Pro, Charmonman, Nunito_Sans } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import CustomAnalytics from '@/components/Analytics';
import CustomScrollbar from '@/components/CustomScrollbar';
import 'flag-icons/css/flag-icons.min.css';
import './globals.css';

// Configure fonts
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-be-vietnam-pro',
});

const charmonman = Charmonman({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700'],
  variable: '--font-charmonman',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hlktourist.vn'),

  // ── Title ────────────────────────────────────────────────────────────────
  title: {
    default: 'Hải Long Kim Tourist | Tour Du Lịch Việt Nam Trọn Gói',
    template: '%s | Hải Long Kim Tourist',
  },

  // ── Description ──────────────────────────────────────────────────────────
  description:
    'Công ty TNHH TM DV Hải Long Kim – đơn vị lữ hành bản địa uy tín với 20+ năm kinh nghiệm. Chuyên tour 3 miền trọn gói, vé máy bay, vé tàu và dịch vụ vận chuyển toàn quốc. Giá tốt nhất, hỗ trợ 24/7.',

  // ── Keywords ─────────────────────────────────────────────────────────────
  keywords: [
    'tour du lịch Việt Nam',
    'Hải Long Kim Tourist',
    'tour Phú Quốc',
    'tour 3 miền',
    'công ty lữ hành TP.HCM',
    'đặt tour giá rẻ',
    'vé máy bay giá rẻ',
    'dịch vụ vận chuyển du lịch',
    'Vietnam travel agency',
    'Phu Quoc tours',
  ],

  // ── Robots ───────────────────────────────────────────────────────────────
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

  // ── Canonical & Alternates ───────────────────────────────────────────────
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/vi',
      'en-US': '/en',
    },
  },

  // ── Favicon / Icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    siteName: 'Hải Long Kim Tourist',
    title: 'Hải Long Kim Tourist | Tour Du Lịch Việt Nam Trọn Gói',
    description:
      'Công ty TNHH TM DV Hải Long Kim – đơn vị lữ hành bản địa uy tín với 20+ năm kinh nghiệm. Tour 3 miền, Phú Quốc, vé máy bay, vận chuyển toàn quốc.',
    url: '/',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Hải Long Kim Tourist – Tour du lịch Việt Nam',
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Hải Long Kim Tourist | Tour Du Lịch Việt Nam Trọn Gói',
    description:
      'Đơn vị lữ hành bản địa uy tín. Tour 3 miền trọn gói, vé máy bay, dịch vụ vận chuyển toàn quốc. Giá tốt – Hỗ trợ 24/7.',
    images: ['/hero-bg.jpg'],
  },

  // ── Author / Publisher ───────────────────────────────────────────────────
  authors: [{ name: 'Hải Long Kim Tourist', url: 'https://www.hlktourist.vn' }],
  creator: 'Hải Long Kim Tourist',
  publisher: 'Hải Long Kim Tourist',

  // ── Category ─────────────────────────────────────────────────────────────
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
      <body
        className="bg-background text-foreground font-sans antialiased"
        suppressHydrationWarning
      >
        <CustomScrollbar />
        <CustomAnalytics />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
