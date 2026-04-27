'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

const DEST_IMAGES = {
  dest1: 'https://www.figma.com/api/mcp/asset/09071095-19a6-465b-bc80-1002ba40ab08',
  dest2: 'https://www.figma.com/api/mcp/asset/8d3eaf5d-0ddb-4a26-ae5a-902a516ab6f4',
  dest3: 'https://www.figma.com/api/mcp/asset/75f149c7-f03b-4361-9c79-44a3797ae413',
};

export default function Destinations() {
  const t = useTranslations('destinations');
  const [activeFilter, setActiveFilter] = useState('featured');

  const filters = [
    { id: 'featured', label: t('filterFeatured') },
    { id: 'north', label: t('filterNorth') },
    { id: 'central', label: t('filterCentral') },
    { id: 'south', label: t('filterSouth') },
  ];

  const allItems = [
    { region: 'north', tag: t('dest1Tag'), title: t('dest1Title'), image: DEST_IMAGES.dest1, alt: t('dest1Alt') },
    { region: 'central', tag: t('dest2Tag'), title: t('dest2Title'), image: DEST_IMAGES.dest2, alt: t('dest2Alt') },
    { region: 'south', tag: t('dest3Tag'), title: t('dest3Title'), image: DEST_IMAGES.dest3, alt: t('dest3Alt') },
  ];

  const visibleItems = useMemo(() => {
    if (activeFilter === 'featured') return allItems;
    return allItems.filter((item) => item.region === activeFilter);
  }, [activeFilter, allItems]);

  return (
    <section id="destinations" className="section-shell py-12 md:py-16">
      <div className="text-center">
        <h2 className="font-display text-[30px] font-extrabold text-primary md:text-[36px]">
          {t('title')}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'rounded-[16px] px-8 py-[17px] text-[16px] font-bold text-white card-shadow transition-transform hover:-translate-y-0.5 md:px-10 md:text-[18px]',
                activeFilter === filter.id ? 'bg-foreground' : 'bg-primary/95',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.title} className="group relative overflow-hidden rounded-[32px] card-shadow">
            <img
              src={item.image}
              alt={item.alt}
              className="h-[430px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-display text-[14px] font-bold uppercase tracking-[1.4px] text-white/80">
                {item.tag}
              </p>
              <h3 className="mt-1 font-display text-[36px] font-bold text-white">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
