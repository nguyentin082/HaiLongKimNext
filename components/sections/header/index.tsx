import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import ThemeToggle from '@/components/sections/header/components/ThemeToggle';
import LanguageSwitch from '@/components/sections/header/components/LanguageSwitch';
import BookTourButton from './components/BookTourButton';
import HeaderMobileMenu from '@/components/sections/header/components/HeaderMobileMenu';
import DesktopNav from '@/components/sections/header/components/DesktopNav';
import HeaderShell from './components/HeaderShell';
import HeaderLogo from './components/HeaderLogo';

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

export default async function Page({ locale }: HeaderProps) {
  const t = await getTranslations('nav');

  // Build nav links once during server render
  const navLinks: NavLink[] = NAV_ITEMS.map((item) => ({
    href: item.href,
    label: t(item.labelKey),
  }));

  return (
    <header className="section-shell fixed left-0 right-0 top-3 z-40 mx-auto py-3 md:top-4 md:py-3.75">
      <HeaderShell>
        <HeaderLogo locale={locale} />

        <DesktopNav navLinks={navLinks} />

        <div className="flex items-center gap-3">
          <span className="hidden xl:flex">
            <ThemeToggle />
          </span>
          <span className="hidden xl:flex">
            <LanguageSwitch />
          </span>
          <BookTourButton label={t('bookTour')} />
          <HeaderMobileMenu navLinks={navLinks} />
        </div>
      </HeaderShell>
    </header>
  );
}
