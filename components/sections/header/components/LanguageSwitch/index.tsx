'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { memo, useCallback } from 'react';
import { FlagComponent } from './FlagComponent';
import { cn } from '@/lib/utils';

export type Locale = 'vi' | 'en';

export type LanguageSwitchProps = {
  variant?: 'desktop' | 'mobile';
  onSwitch?: () => void;
};

const LOCALES = [
  { locale: 'vi' as const, flag: 'vn' as const, labelKey: 'langVi' as const },
  { locale: 'en' as const, flag: 'us' as const, labelKey: 'langEn' as const },
] as const;

// ─── Desktop: compact pill with sliding underline indicator ─────────────────
function DesktopSwitch({
  currentLocale,
  onSelect,
}: {
  currentLocale: Locale;
  onSelect: (l: Locale) => void;
}) {
  const t = useTranslations('nav');

  return (
    <div
      role="group"
      aria-label="Language switch"
      className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/8 p-1 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/12 dark:border-white/8 dark:bg-white/5 dark:hover:border-white/15 sm:inline-flex"
    >
      {LOCALES.map(({ locale, flag, labelKey }) => {
        const active = currentLocale === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => onSelect(locale)}
            aria-label={t(labelKey)}
            aria-pressed={active}
            className={cn(
              'relative flex h-8 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-[0.7rem] font-semibold uppercase tracking-widest transition-all duration-300',
              active
                ? 'bg-white/90 text-slate-800 shadow-sm dark:bg-white/12 dark:text-white'
                : 'text-white/60 hover:text-white/90 dark:text-white/50 dark:hover:text-white/80',
            )}
          >
            <FlagComponent flag={flag} active={active} size="sm" />
            {locale}
          </button>
        );
      })}
    </div>
  );
}

// ─── Mobile: two side-by-side tiles ─────────────────────────────────────────
function MobileSwitch({
  currentLocale,
  onSelect,
}: {
  currentLocale: Locale;
  onSelect: (l: Locale) => void;
}) {
  const t = useTranslations('nav');

  return (
    <div
      role="group"
      aria-label="Language switch"
      className="mt-2 grid grid-cols-2 gap-2"
    >
      {LOCALES.map(({ locale, flag, labelKey }) => {
        const active = currentLocale === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => onSelect(locale)}
            aria-label={t(labelKey)}
            aria-pressed={active}
            className={cn(
              'flex h-11 items-center justify-center gap-2.5 rounded-2xl text-[0.8rem] font-semibold transition-all duration-300',
              active
                ? 'bg-white/15 text-white ring-1 ring-white/25 dark:bg-white/10 dark:ring-white/15'
                : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/75 dark:text-white/40',
            )}
          >
            <FlagComponent flag={flag} active={active} size="md" />
            {t(labelKey)}
          </button>
        );
      })}
    </div>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────
export const LanguageSwitch = memo(function LanguageSwitch({
  variant = 'desktop',
  onSwitch,
}: LanguageSwitchProps) {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale: Locale = pathname.split('/')[1] === 'en' ? 'en' : 'vi';

  const handleSwitch = useCallback(
    (locale: Locale) => {
      const next = pathname.replace(/^\/(en|vi)/, `/${locale}`);
      router.push(next);
      onSwitch?.();
    },
    [pathname, router, onSwitch],
  );

  return variant === 'mobile' ? (
    <MobileSwitch currentLocale={currentLocale} onSelect={handleSwitch} />
  ) : (
    <DesktopSwitch currentLocale={currentLocale} onSelect={handleSwitch} />
  );
});

export default LanguageSwitch;
