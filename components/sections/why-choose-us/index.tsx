'use client';

import { useTranslations } from 'next-intl';

export default function WhyChooseUs() {
  const tReasons = useTranslations('reasons');

  const reasonItems = [
    {
      id: tReasons('item1Id'),
      title: tReasons('item1Title'),
      description: tReasons('item1Desc'),
      icon: '🌟',
    },
    {
      id: tReasons('item2Id'),
      title: tReasons('item2Title'),
      description: tReasons('item2Desc'),
      icon: '📋',
    },
    {
      id: tReasons('item3Id'),
      title: tReasons('item3Title'),
      description: tReasons('item3Desc'),
      icon: '🎧',
    },
  ];

  return (
    <section className="section-shell py-12 md:py-16">
      <div className="rounded-4xl bg-muted-bg px-4 py-10 md:px-8">
        <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
          {tReasons('title')}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasonItems.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-card p-6 text-center soft-shadow border border-border"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-[24px]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-[18px] font-extrabold text-text-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
