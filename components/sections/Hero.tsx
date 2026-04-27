'use client';

import { useTranslations } from 'next-intl';

const HERO_IMAGE = 'https://www.figma.com/api/mcp/asset/e0677e37-88f8-4edf-8b05-805b51aa709a';

const QUICK_LINK_ICONS = [
  'https://www.figma.com/api/mcp/asset/93f6ef16-9f33-46c2-b785-4a5b2debe51c',
  'https://www.figma.com/api/mcp/asset/1d4d38f1-7855-4cde-b3aa-d8fa5cc9768a',
  'https://www.figma.com/api/mcp/asset/1cd699e4-b519-48be-9347-94ea912e2cbe',
  'https://www.figma.com/api/mcp/asset/28b3eb57-1f33-4394-bbb8-9efde691fe93',
  'https://www.figma.com/api/mcp/asset/93f6ef16-9f33-46c2-b785-4a5b2debe51c',
  'https://www.figma.com/api/mcp/asset/1d4d38f1-7855-4cde-b3aa-d8fa5cc9768a',
  'https://www.figma.com/api/mcp/asset/1cd699e4-b519-48be-9347-94ea912e2cbe',
];

export default function Hero() {
  const t = useTranslations('hero');

  const quickLinks = [
    { label: t('quickLink1'), icon: QUICK_LINK_ICONS[0] },
    { label: t('quickLink2'), icon: QUICK_LINK_ICONS[1] },
    { label: t('quickLink3'), icon: QUICK_LINK_ICONS[2] },
    { label: t('quickLink4'), icon: QUICK_LINK_ICONS[3] },
    { label: t('quickLink5'), icon: QUICK_LINK_ICONS[4] },
    { label: t('quickLink6'), icon: QUICK_LINK_ICONS[5] },
    { label: t('quickLink7'), icon: QUICK_LINK_ICONS[6] },
  ];

  return (
    <section id="hero" className="section-shell pt-1 md:pt-2">
      <div className="relative overflow-hidden rounded-[32px] card-shadow">
        <img
          src={HERO_IMAGE}
          alt={t('imageAlt')}
          className="h-[420px] w-full object-cover md:h-[560px] xl:h-[640px]"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="absolute left-6 top-6 flex flex-wrap gap-2 md:left-10 md:top-8">
          <span className="rounded-full bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary md:text-xs">
            {t('badge1')}
          </span>
          <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur md:text-xs">
            {t('badge2')}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pt-24 md:px-10 md:pb-10 xl:px-12 xl:pb-12">
          <div className="max-w-[560px]">
            <h1 className="font-display text-[42px] font-extrabold leading-[0.98] text-white md:text-[58px] xl:text-[72px]">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-8 text-white/88 md:text-[18px]">
              {t('description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <a
                href="#destinations"
                className="rounded-[16px] bg-accent px-6 py-4 text-[14px] font-bold text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 md:text-[16px]"
              >
                {t('primaryCta')}
              </a>
              <a
                href="#contact"
                className="rounded-[16px] border border-white/30 bg-white/10 px-6 py-4 text-[14px] font-bold text-white backdrop-blur transition-colors hover:bg-white/15 md:text-[16px]"
              >
                {t('secondaryCta')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-6 flex flex-wrap justify-center gap-4 px-2 md:-mt-8 xl:-mt-10">
        {quickLinks.map((item) => (
          <article key={item.label} className="flex min-w-[120px] flex-col items-center justify-center rounded-[24px] bg-card px-4 py-4 soft-shadow border border-border">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <img src={item.icon} alt="" className="h-6 w-6" />
            </div>
            <p className="text-[14px] font-bold text-text-secondary text-center">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
