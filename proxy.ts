import createMiddleware from 'next-intl/middleware';

export const proxy = createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
});

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};
