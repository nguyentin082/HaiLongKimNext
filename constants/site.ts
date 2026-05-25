export const SITE = {
  name: 'Hải Long Kim Tourist',
  description:
    'Công ty TNHH TM DV Hải Long Kim – đơn vị lữ hành bản địa uy tín với 20+ năm kinh nghiệm.',
  url: 'https://www.hlktourist.com',
  altUrl: 'https://www.hlktourist.vn',
  ogImage: 'https://www.hlktourist.com/hero-bg.jpg',
  twitterHandle: '@hlktourist',
} as const;

export const CONTACT = {
  phone: '+84-971-798-988',
  email: 'hailongkimviptours@gmail.com',
  address: '95 Đường 1, Khu Phố 26, Phường Long Trường, TP.HCM',
  hours: '07:30 - 20:00',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/hailongkimtourist',
  instagram: 'https://instagram.com/hlktourist',
  linkedin: 'https://linkedin.com/company/hlktourist',
  zalo: 'https://zalo.me/0971798988',
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
