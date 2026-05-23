'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'vi';

  return (
    <footer className="w-full bg-background relative">
      <svg width="0" height="0" className="absolute">
        <linearGradient id="footer-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="rgb(54, 160, 157)" offset="0%" />
          <stop stopColor="rgb(6, 110, 108)" offset="100%" />
        </linearGradient>
        <linearGradient id="footer-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="rgb(116, 216, 213)" offset="0%" />
          <stop stopColor="rgb(35, 157, 157)" offset="100%" />
        </linearGradient>
      </svg>
      <div className="section-shell pb-10 pt-12 md:pt-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between lg:gap-24">
          
          {/* Left Side: Brand */}
          <div className="flex-1 md:max-w-[400px]">
            <Link href={`/${currentLocale}`} className="font-brand text-[32px] font-bold leading-8 tracking-wide">
              <span className="brand-gradient">{t('brand')}</span>
            </Link>
            <p className="mt-6 text-[14px] leading-relaxed text-text-muted">
              {t('description')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 md:max-w-[400px]">
            <h3 className="text-[14px] font-bold uppercase tracking-[0.7px] text-primary">
              {t('contactTitle')}
            </h3>
            <div className="mt-8 flex flex-col gap-5 text-[14px] text-text-muted">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center">
                  <MapPin className="h-5 w-5 dark:hidden" stroke="url(#footer-gradient-light)" />
                  <MapPin className="h-5 w-5 hidden dark:block" stroke="url(#footer-gradient-dark)" />
                </div>
                <p className="leading-snug">{t('address')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 flex h-5 w-5 items-center justify-center">
                  <Phone className="h-5 w-5 dark:hidden" stroke="url(#footer-gradient-light)" />
                  <Phone className="h-5 w-5 hidden dark:block" stroke="url(#footer-gradient-dark)" />
                </div>
                <p className="font-bold text-text-secondary">{t('phone')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 flex h-5 w-5 items-center justify-center">
                  <Mail className="h-5 w-5 dark:hidden" stroke="url(#footer-gradient-light)" />
                  <Mail className="h-5 w-5 hidden dark:block" stroke="url(#footer-gradient-dark)" />
                </div>
                <p>{t('email')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-muted py-6 text-center text-[12px] text-text-muted/80">
        <div className="section-shell">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
