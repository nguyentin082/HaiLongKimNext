'use client';

import { useTranslations } from 'next-intl';

const LOGO_SRC = 'https://www.figma.com/api/mcp/asset/96b98671-57a5-4a77-84ae-57206e6ff535';

export default function About() {
  const tAbout = useTranslations('about');
  const tReasons = useTranslations('reasons');

  const checks = [
    tAbout('check1'),
    tAbout('check2'),
    tAbout('check3'),
    tAbout('check4'),
  ];

  const reasonItems = [
    { id: tReasons('item1Id'), title: tReasons('item1Title'), description: tReasons('item1Desc'), icon: '🌟' },
    { id: tReasons('item2Id'), title: tReasons('item2Title'), description: tReasons('item2Desc'), icon: '📋' },
    { id: tReasons('item3Id'), title: tReasons('item3Title'), description: tReasons('item3Desc'), icon: '🎧' },
  ];

  return (
    <>
      {/* Overview / About Section */}
      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-display text-[14px] font-bold uppercase tracking-[0.14em] text-accent">
              {tAbout('eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-[32px] font-extrabold leading-tight text-text-secondary md:text-[44px]">
              {tAbout('title')}
            </h2>
            <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-text-muted md:text-[16px]">
              {tAbout('description')}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {checks.map((check, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#79b02f]/10 text-[#79b02f]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[15px] font-semibold text-text-secondary">{check}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative rounded-[32px] bg-card p-8 soft-shadow border border-border">
              <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
                <img
                  src={LOGO_SRC}
                  alt={tAbout('logoAlt')}
                  className="w-full max-w-[240px]"
                />
                <div className="absolute -bottom-6 -right-6 rounded-[24px] bg-[#79b02f] px-6 py-5 text-white shadow-xl max-w-[200px]">
                  <p className="text-[32px] font-extrabold leading-none">{tAbout('hotlineLabel')}</p>
                  <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.05em] leading-snug">
                    {tAbout('hotlineValue')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-shell py-12 md:py-16">
        <div className="rounded-[32px] bg-muted-bg px-4 py-10 md:px-8">
          <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
            {tReasons('title')}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasonItems.map((item) => (
              <article key={item.id} className="rounded-[24px] bg-card p-6 text-center soft-shadow border border-border">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-[24px]">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-[18px] font-extrabold text-text-secondary">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-7 text-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
