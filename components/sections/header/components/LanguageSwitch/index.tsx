'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { memo, useCallback } from 'react';
import { LanguageOption } from './LanguageOption';

export type Locale = 'vi' | 'en';

export type LanguageSwitchProps = {
  variant?: 'desktop' | 'mobile';
  onSwitch?: () => void;
};

const LANG_STYLES = {
  mobileContainer: 'mt-2 grid grid-cols-2 gap-2 rounded-[20px] bg-linear-to-b from-primary-50/80 via-white/95 to-accent-50/70 p-1.5 shadow-[0_14px_34px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.6)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_14px_34px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)]',
  desktopContainer: 'relative hidden items-center gap-1 rounded-full bg-linear-to-r from-white/96 via-primary-50/70 to-accent-50/60 p-1 shadow-[0_14px_32px_rgba(15,23,42,0.09),inset_0_1px_0_rgba(255,255,255,0.55)] transition-[transform,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 sm:inline-flex dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_14px_32px_rgba(0,0,0,0.44),inset_0_1px_0_rgba(255,255,255,0.05)]',
  backgroundSlider: 'absolute inset-y-1 left-1 rounded-full bg-linear-to-b from-white via-primary-50 to-accent-50 shadow-[0_12px_24px_rgba(8,124,122,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 dark:shadow-[0_12px_24px_rgba(15,23,42,0.42)]',
};

const LanguageSwitchContent = memo(function LanguageSwitchContent({
  variant,
  onSwitch,
}: {
  variant: 'desktop' | 'mobile';
  onSwitch?: () => void;
}) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale: Locale = pathname.split('/')[1] === 'en' ? 'en' : 'vi';

  const handleSwitch = useCallback(
    (locale: Locale) => {
      const newPathname = pathname.replace(/^\/(en|vi)/, `/${locale}`);
      router.push(newPathname);
      onSwitch?.();
    },
    [pathname, router, onSwitch],
  );

  const localeItems = [
    { locale: 'vi' as const, flag: 'vn' as const, label: t('langVi') },
    { locale: 'en' as const, flag: 'us' as const, label: t('langEn') },
  ];

  return (
    <>{
      variant === 'mobile' ? (
        <div
          className={LANG_STYLES.mobileContainer}
          role="group"
          aria-label="Language switch"
        >
          {localeItems.map((item) => (
            <LanguageOption
              key={item.locale}
              locale={item.locale}
              flag={item.flag}
              label={item.label}
              active={currentLocale === item.locale}
              size="md"
              onClick={() => handleSwitch(item.locale)}
            />
          ))}
        </div>
      ) : (
        <div
          className={LANG_STYLES.desktopContainer}
          role="group"
          aria-label="Language switch"
        >
          <span
            aria-hidden="true"
            className={LANG_STYLES.backgroundSlider}
            style={{
              width: 'calc(50% - 0.25rem)',
              transform: currentLocale === 'en' ? 'translateX(100%)' : 'translateX(0)',
            }}
          />
          <div className="relative z-10 grid grid-cols-2 gap-1">
            {localeItems.map((item) => (
              <LanguageOption
                key={item.locale}
                locale={item.locale}
                flag={item.flag}
                label={item.label}
                active={currentLocale === item.locale}
                size="sm"
                onClick={() => handleSwitch(item.locale)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export const LanguageSwitch = memo(function LanguageSwitch({
  variant = 'desktop',
  onSwitch,
}: LanguageSwitchProps) {
  return <LanguageSwitchContent variant={variant} onSwitch={onSwitch} />;
});

export default LanguageSwitch;
