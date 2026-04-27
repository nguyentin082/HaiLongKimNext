'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'vi';

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(/^\/(en|vi)/, `/${locale}`);
    router.push(newPathname);
    setShowLangMenu(false);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#hero', label: t('home') },
    { href: '#services', label: t('services') },
    { href: '#destinations', label: t('destinations') },
    { href: '#gallery', label: t('gallery') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="section-shell py-4 md:py-[15px]">
      <div className="flex items-center justify-between gap-4 rounded-[20px] bg-muted-bg px-4 py-2 md:px-6">
        <Link href={`/${currentLocale}`} className="font-brand text-[23px] font-bold leading-8">
          <span className="brand-gradient">Hải Long Kim Tourist</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-[16px] font-medium text-text-muted transition-colors hover:text-primary',
                index === 0 && 'border-b-2 border-primary pb-[6px] font-bold text-primary',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Language switcher */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1 rounded-[12px] border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted-bg soft-shadow"
            >
              {currentLocale.toUpperCase()}
              <ChevronDown className="h-4 w-4" />
            </button>
            {showLangMenu && (
              <div className="absolute right-0 top-full z-50 mt-2 overflow-hidden rounded-[12px] border border-border bg-card soft-shadow">
                <button
                  onClick={() => switchLanguage('vi')}
                  className={cn(
                    'block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted-bg',
                    currentLocale === 'vi' && 'font-bold text-primary',
                  )}
                >
                  {t('langVi')}
                </button>
                <button
                  onClick={() => switchLanguage('en')}
                  className={cn(
                    'block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted-bg',
                    currentLocale === 'en' && 'font-bold text-primary',
                  )}
                >
                  {t('langEn')}
                </button>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="rounded-[16px] bg-accent px-5 py-3 text-[14px] font-bold text-white soft-shadow transition-transform hover:-translate-y-0.5 md:px-8 md:text-[16px]"
          >
            {t('bookTour')}
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-border bg-card text-primary soft-shadow xl:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 rounded-[24px] border border-border bg-card p-5 soft-shadow xl:hidden">
          <nav className="grid gap-3" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-[16px] px-4 py-3 text-[15px] font-bold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <button
                onClick={() => switchLanguage('vi')}
                className={cn(
                  'flex-1 rounded-[12px] px-3 py-2 text-sm font-medium transition-colors',
                  currentLocale === 'vi'
                    ? 'bg-primary text-white'
                    : 'bg-muted-bg text-foreground hover:bg-primary/10',
                )}
              >
                {t('langVi')}
              </button>
              <button
                onClick={() => switchLanguage('en')}
                className={cn(
                  'flex-1 rounded-[12px] px-3 py-2 text-sm font-medium transition-colors',
                  currentLocale === 'en'
                    ? 'bg-primary text-white'
                    : 'bg-muted-bg text-foreground hover:bg-primary/10',
                )}
              >
                {t('langEn')}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
