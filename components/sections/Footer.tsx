'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Facebook, MessageCircle, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'vi';

  const navLinks = [
    { href: '#hero', label: tNav('home') },
    { href: '#services', label: tNav('services') },
    { href: '#destinations', label: tNav('destinations') },
    { href: '#gallery', label: tNav('gallery') },
    { href: '#contact', label: tNav('contact') },
  ];

  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Link href={`/${currentLocale}`} className="font-brand text-[23px] font-bold leading-8">
            <span className="brand-gradient">{t('brand')}</span>
          </Link>
          <p className="mt-4 max-w-[420px] text-[14px] leading-[22.75px] text-text-muted">
            {t('description')}
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://facebook.com/hailongkim"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary soft-shadow border border-border transition-colors hover:bg-primary hover:text-white hover:border-primary"
              aria-label={t('ariaFacebook')}
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary soft-shadow border border-border transition-colors hover:bg-primary hover:text-white hover:border-primary"
              aria-label={t('ariaZalo')}
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/hailongkim"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary soft-shadow border border-border transition-colors hover:bg-primary hover:text-white hover:border-primary"
              aria-label={t('ariaLinkedin')}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-[0.7px] text-primary">
              {t('contactTitle')}
            </h3>
            <div className="mt-6 space-y-4 text-[14px] text-text-muted">
              <p>{t('address')}</p>
              <p className="font-bold text-text-secondary">{t('phone')}</p>
              <p>{t('email')}</p>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-[0.7px] text-primary">
              {t('navTitle')}
            </h3>
            <div className="mt-6 space-y-4 text-[14px] text-text-muted">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8 text-center text-[12px] text-text-muted/70">
        {t('copyright')}
      </div>
    </footer>
  );
}
