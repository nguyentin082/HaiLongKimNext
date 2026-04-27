import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        qualities: [75, 85],
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default withNextIntl(nextConfig);
