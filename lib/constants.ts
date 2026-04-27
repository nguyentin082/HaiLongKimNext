// Color Palette
export const COLORS = {
  primary: '#0a7373',
  primaryLight: '#107474',
  accent: '#f28c0f',
  gray1: '#2e3230',
  gray2: '#2e2e2e',
  gray3: '#78716c',
  gray4: '#6b7280',
  background: '#f2f2f2',
  border: '#e5e7eb',
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Spacing Scale
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;

// Site Configuration
export const SITE = {
  name: 'Hai Long Kim Travel',
  description: 'Experience unforgettable travel adventures with Hai Long Kim Travel.',
  url: 'https://hailongkim.com',
  ogImage: 'https://hailongkim.com/og-image.jpg',
  twitterHandle: '@hailongkim',
} as const;

// Contact Information
export const CONTACT = {
  phone: '+84 (555) 123-4567',
  email: 'info@hailongkim.com',
  address: 'Ha Long City, Quang Ninh, Vietnam',
  hours: '08:00 - 18:00',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/hailongkim',
  instagram: 'https://instagram.com/hailongkim',
  linkedin: 'https://linkedin.com/company/hailongkim',
} as const;

// GTM Configuration
export const GTM = {
  id: process.env.NEXT_PUBLIC_GTM_ID || '',
} as const;

// GA Configuration
export const GA = {
  id: process.env.NEXT_PUBLIC_GA_ID || '',
} as const;
