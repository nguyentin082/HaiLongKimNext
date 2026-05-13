import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import ThemeToggle from '@/components/sections/header/components/ThemeToggle';
import LanguageSwitch from '@/components/sections/header/components/LanguageSwitch';
import BookTourButton from './components/BookTourButton';
import HeaderMobileMenu from '@/components/sections/header/components/HeaderMobileMenu';
import DesktopNav from '@/components/sections/header/components/DesktopNav';

type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  locale: string;
};

// Navigation items as constant - prevents recreation on every render
const NAV_ITEMS = [
  { href: '#about', labelKey: 'about' },
  { href: '#destinations', labelKey: 'destinations' },
  { href: '#services', labelKey: 'services' },
  { href: '#gallery', labelKey: 'gallery' },
] as const;

const HEADER_STYLES = {
  header: 'section-shell sticky top-3 z-40 py-3 md:top-4 md:py-3.75',
  container:
    'glass-panel flex items-center justify-between gap-4 rounded-3xl bg-card/80 px-4 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-md md:px-6 dark:shadow-[0_14px_35px_rgba(0,0,0,0.28)]',
  logo: 'font-brand text-[23px] font-bold leading-8',
  controls: 'flex items-center gap-3',
};

export default async function Page({ locale }: HeaderProps) {
  const t = await getTranslations('nav');

  // Build nav links once during server render
  const navLinks: NavLink[] = NAV_ITEMS.map((item) => ({
    href: item.href,
    label: t(item.labelKey),
  }));

  return (
    <header className={HEADER_STYLES.header}>
      <div className={HEADER_STYLES.container}>
        <Link href={`/${locale}`} className={HEADER_STYLES.logo} prefetch={false}>
          <span className="brand-gradient">Hải Long Kim Tourist</span>
        </Link>

        <DesktopNav navLinks={navLinks} />

        <div className={HEADER_STYLES.controls}>
          <span className="hidden xl:flex"><ThemeToggle /></span>
          <span className="hidden xl:flex"><LanguageSwitch /></span>
          <BookTourButton label={t('bookTour')} />
          <HeaderMobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
