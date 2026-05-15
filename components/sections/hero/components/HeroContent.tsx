import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

/**
 * HeroContent — renders above the carousel backdrop.
 * All content is static text → no 'use client' needed.
 * Translations are resolved server-side via next-intl RSC support.
 */
export default function HeroContent() {
  const t = useTranslations('hero');

  // Split title on the <br/> tag so we avoid dangerouslySetInnerHTML
  const titleLines = t('newTitle').split(/<br\s*\/?>/i);

  return (
    <div className="absolute inset-0 flex items-center pt-20">
      <div className="section-shell w-full">
        <div className="max-w-[900px] md:pl-10 lg:pl-16">

          {/* Company badge */}
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 dark:text-white/70">
            {t('companyName')}
          </p>

          {/* H1 — one per page, critical for SEO */}
          <h1 className="font-display text-[42px] font-black leading-[1.05] text-white md:text-[64px] lg:text-[76px] [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-150 text-[16px] leading-relaxed text-white/90 dark:text-white/80 md:text-[18px]">
            {t('newDescription')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-10 md:gap-4">
            <a
              href="#destinations"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-bold text-slate-900 transition-all hover:scale-105 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] sm:w-auto md:h-14 md:px-8 md:text-[15px]"
            >
              {t('primaryCtaNew')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
            </a>
            <a
              href="#gallery"
              className="flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-[14px] font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:w-auto md:h-14 md:px-8 md:text-[15px]"
            >
              {t('secondaryCtaNew')}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
