'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import DestinationCarousel from './components/DestinationCarousel';
import DestinationFilterBar from './components/DestinationFilterBar';
import {
  type DestinationFilter,
  type DestinationFilterId,
  type DestinationItemViewModel,
  createDestinationViewModels,
  destinationItemsByFilter,
} from './destination-data';

export default function Destinations() {
  const t = useTranslations('destinations');
  const [activeFilter, setActiveFilter] = useState<DestinationFilterId>('featured');
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isScrollingRef = useRef(false);

  const filters = useMemo<DestinationFilter[]>(
    () => [
      { id: 'featured', label: t('filterFeatured') },
      { id: 'north', label: t('filterNorth') },
      { id: 'central', label: t('filterCentral') },
      { id: 'south', label: t('filterSouth') },
    ],
    [t],
  );

  const visibleItems = useMemo<DestinationItemViewModel[]>(() => {
    const rawItems = destinationItemsByFilter[activeFilter];

    return createDestinationViewModels(rawItems, t);
  }, [activeFilter, t]);

  const scrollByAmount = useCallback((amount: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (el.scrollLeft + amount >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (el.scrollLeft + amount <= 0 && amount < 0) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
      return;
    }

    el.scrollBy({ left: amount, behavior: 'smooth' });
  }, []);

  const scrollNext = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    scrollByAmount(Math.floor(el.clientWidth * 0.8));
  }, [scrollByAmount]);

  const scrollPrev = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    scrollByAmount(Math.floor(-el.clientWidth * 0.8));
  }, [scrollByAmount]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScrollEnd = () => {
      isScrollingRef.current = false;
    };
    el.addEventListener('scrollend', onScrollEnd);

    let id: number | undefined;

    if (!isPaused) {
      id = window.setInterval(() => {
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        scrollNext();
      }, 4000);
    }

    return () => {
      if (id) window.clearInterval(id);
      el.removeEventListener('scrollend', onScrollEnd);
    };
  }, [isPaused, scrollNext]);

  const handleFilterClick = useCallback((id: DestinationFilterId) => {
    setActiveFilter(id);
  }, []);

  return (
    <section id="destinations" className="section-shell py-12 md:py-16">
      <div className="text-center">
        <h2 className="font-display text-[30px] font-extrabold text-primary md:text-[36px]">
          {t('title')}
        </h2>
        <DestinationFilterBar
          filters={filters}
          activeFilter={activeFilter}
          onSelect={handleFilterClick}
        />
      </div>

      <DestinationCarousel
        items={visibleItems}
        carouselRef={carouselRef}
        onPauseChange={setIsPaused}
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
    </section>
  );
}
