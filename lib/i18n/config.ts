type Locale = 'en' | 'vi';

export const locales: Locale[] = ['en', 'vi'];
export const defaultLocale: Locale = 'en';

type Messages = typeof import('../../messages/en.json');

declare global {
  interface IntlMessages extends Messages {}
}
