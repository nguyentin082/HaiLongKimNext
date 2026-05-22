export const SITE = {
  name: 'Hai Long Kim Travel',
  description: 'Experience unforgettable travel adventures with Hai Long Kim Travel.',
  url: 'https://hailongkim.com',
  ogImage: 'https://hailongkim.com/og-image.jpg',
  twitterHandle: '@hailongkim',
} as const;

export const CONTACT = {
  phone: '+84 (555) 123-4567',
  email: 'info@hailongkim.com',
  address: 'Ha Long City, Quang Ninh, Vietnam',
  hours: '08:00 - 18:00',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/hailongkim',
  instagram: 'https://instagram.com/hailongkim',
  linkedin: 'https://linkedin.com/company/hailongkim',
  zalo: 'https://zalo.me',
} as const;

export const TRUST_BADGES = {
  hotline: '20+ năm kinh nghiệm',
  support: 'Hỗ trợ nhanh',
  quality: 'Chất lượng cao',
} as const;

export const GTM = {
  id: process.env.NEXT_PUBLIC_GTM_ID || '',
} as const;

export const GA = {
  id: process.env.NEXT_PUBLIC_GA_ID || '',
} as const;
