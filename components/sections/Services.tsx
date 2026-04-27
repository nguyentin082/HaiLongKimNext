'use client';

import { useTranslations } from 'next-intl';

const SERVICE_IMAGES = [
  'https://www.figma.com/api/mcp/asset/88cb74e0-1510-47ee-a813-c094d4d087d7',
  'https://www.figma.com/api/mcp/asset/0b70d2a0-764a-43bc-931e-5acc23ffdf1f',
  'https://www.figma.com/api/mcp/asset/bdb5ffbd-22ff-45cf-a382-8c3c401359d9',
  'https://www.figma.com/api/mcp/asset/50b2925b-0157-4e17-85eb-aac62c963283',
];

export default function Services() {
  const t = useTranslations('services');

  const items = [
    { category: t('item1Category'), title: t('item1Title'), description: t('item1Desc'), image: SERVICE_IMAGES[0], alt: t('item1Alt') },
    { category: t('item2Category'), title: t('item2Title'), description: t('item2Desc'), image: SERVICE_IMAGES[1], alt: t('item2Alt') },
    { category: t('item3Category'), title: t('item3Title'), description: t('item3Desc'), image: SERVICE_IMAGES[2], alt: t('item3Alt') },
    { category: t('item4Category'), title: t('item4Title'), description: t('item4Desc'), image: SERVICE_IMAGES[3], alt: t('item4Alt') },
  ];

  return (
    <section id="services" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {t('title')}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[24px] bg-card soft-shadow border border-border">
            <img src={item.image} alt={item.alt} className="h-[210px] w-full object-cover" />
            <div className="p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-[20px] font-bold text-text-secondary">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-7 text-text-muted">{item.description}</p>
              <a
                href="#contact"
                className="mt-5 flex w-full items-center justify-center rounded-[16px] bg-accent px-5 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                {t('learnMore')}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
