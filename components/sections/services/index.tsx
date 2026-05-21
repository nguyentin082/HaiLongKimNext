'use client';

import { useTranslations } from 'next-intl';
import { ServiceCard } from './components/ServiceCard';
import { SERVICE_IMAGES } from './constants';
import type { ServiceItem } from './types';

function splitFeatures(value: string) {
  return value
    .split('|')
    .map((feature) => feature.trim())
    .filter(Boolean);
}

export default function Services() {
  const t = useTranslations('services');

  const items: ServiceItem[] = [
    {
      category: t('item1Category'),
      title: t('item1Title'),
      description: t('item1Desc'),
      features: splitFeatures(t('item1Features')),
      image: SERVICE_IMAGES[0],
      alt: t('item1Alt'),
      badge: { label: t('item1Badge'), variant: 'accent' },
      buttonText: t('item1CTA'),
      buttonLink: t('item1Link'),
    },
    {
      category: t('item2Category'),
      title: t('item2Title'),
      description: t('item2Desc'),
      features: splitFeatures(t('item2Features')),
      image: SERVICE_IMAGES[1],
      alt: t('item2Alt'),
      badge: { label: t('item2Badge'), variant: 'primary' },
      buttonText: t('item2CTA'),
      buttonLink: t('item2Link'),
    },
    {
      category: t('item3Category'),
      title: t('item3Title'),
      description: t('item3Desc'),
      features: splitFeatures(t('item3Features')),
      image: SERVICE_IMAGES[2],
      alt: t('item3Alt'),
      buttonText: t('item3CTA'),
      buttonLink: t('item3Link'),
    },
    {
      category: t('item4Category'),
      title: t('item4Title'),
      description: t('item4Desc'),
      features: splitFeatures(t('item4Features')),
      image: SERVICE_IMAGES[3],
      alt: t('item4Alt'),
      buttonText: t('item4CTA'),
      buttonLink: t('item4Link'),
    },
  ];

  return (
    <section id="services" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {t('title')}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}