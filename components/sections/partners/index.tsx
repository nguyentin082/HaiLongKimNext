/**
 * Partners – Server Component
 *
 * Rendered entirely on the server:
 * - No JS bundle sent to the client for this section
 * - HTML is crawlable by search engines on first byte (SSR/SEO)
 * - CSS animation lives in globals.css (no runtime <style> injection)
 * - `next/image` handles lazy-loading & srcset automatically
 */

import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface Partner {
  key: string;
  src: string;
  label: string;
}

// Defined outside the component — zero allocation per request
const PARTNER_SRCS: Omit<Partner, 'label'>[] = [
  { key: 'vinpearl', src: '/icons/brand/VINPEARL.svg' },
  { key: 'sunworld', src: '/icons/brand/SUNWORLD.svg' },
  { key: 'superdong', src: '/icons/brand/SUPERDONG.svg' },
  { key: 'vnairlines', src: '/icons/brand/vnairline.svg' },
  { key: 'vietjet', src: '/icons/brand/vietjet.svg' },
  { key: 'muongthanh', src: '/icons/brand/muongthanh.svg' },
  { key: 'phuquocexpress', src: '/icons/brand/PhuQuocExpress.svg' },
];

export default async function Partners() {
  const t = await getTranslations('partners');

  const partners: Partner[] = PARTNER_SRCS.map((p, i) => ({
    ...p,
    label: t(`partner${i + 1}` as Parameters<typeof t>[0]),
  }));

  // ×3 so the track never empties on wide screens;
  // only the first 7 are meaningful for SEO — the rest are aria-hidden.
  const track = [...partners, ...partners, ...partners];

  return (
    <section className="w-full bg-zinc-50 dark:bg-zinc-900/30" aria-labelledby="partners-heading">
      <div className="section-shell py-10 md:py-16">
        <h2
        id="partners-heading"
        className="text-center font-display text-[26px] font-extrabold text-primary md:text-[34px]"
      >
        {t('title')}
      </h2>

      {/* Marquee wrapper */}
      <div className="relative mt-8 overflow-hidden py-5 md:py-8">

        {/*
          role="list" + role="listitem" → accessible + crawlable list of partners.
          Only the FIRST copy is visible to assistive tech; duplicates are aria-hidden.
        */}
        <div
          className="partners-marquee flex w-max items-center"
          role="list"
          aria-label={t('title')}
        >
          {track.map((partner, idx) => {
            const isOriginal = idx < partners.length;
            return (
              <div
                key={`${partner.key}-${idx}`}
                role={isOriginal ? 'listitem' : undefined}
                aria-hidden={isOriginal ? undefined : 'true'}
                className="flex shrink-0 items-center justify-center px-4 md:px-8"
              >
                {/* Fixed bounding box: mobile 112×44 | desktop 208×80 */}
                <div className="flex h-11 w-28 items-center justify-center md:h-20 md:w-52">
                  <Image
                    src={partner.src}
                    alt={isOriginal ? partner.label : ''}
                    title={isOriginal ? partner.label : undefined}
                    width={208}
                    height={80}
                    // Eager-load only the first visible set; lazy the rest
                    loading={isOriginal ? 'eager' : 'lazy'}
                    // Treat first copy as part of above-the-fold content
                    priority={isOriginal}
                    className="max-h-full max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
