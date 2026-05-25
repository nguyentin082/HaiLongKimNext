import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: 'https://www.hlktourist.com/sitemap.xml',
    host: 'https://www.hlktourist.com',
  };
}
