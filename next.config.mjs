import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve AVIF first (smallest), then WebP as fallback
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
    // Tuned to match the sizes prop used in DestinationCard
    // (280px, 320px, 380px, 440px) so Next.js generates matching srcset widths
    imageSizes: [280, 320, 380, 440, 640, 750, 828],
    // Cache optimised images for 7 days (default is 60s)
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default withNextIntl(nextConfig);
