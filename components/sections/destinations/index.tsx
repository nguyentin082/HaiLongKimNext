'use client';

import { useCallback, useEffect, useRef } from 'react';
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
import { useMemo, useState } from 'react';

export default function Destinations() {
  const t = useTranslations('destinations');
  const [activeFilter, setActiveFilter] = useState<DestinationFilterId>('featured');
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Use ref for isPaused to avoid re-creating the interval on every pause toggle
  const isPausedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // Tracks whether a programmatic smooth scroll is still animating.
  // Uses a timestamp-based approach instead of scrollend (avoids Safari compat issues)
  const scrollAnimatingUntilRef = useRef<number>(0);

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

  // Core scroll function — always executes, no blocking guard
  const scrollByAmount = useCallback((amount: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (amount > 0 && el.scrollLeft >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (amount < 0 && el.scrollLeft <= 0) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: amount, behavior: 'smooth' });
    }

    // Mark scroll as animating for ~600ms (typical smooth scroll duration)
    scrollAnimatingUntilRef.current = Date.now() + 600;
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

  // Auto-scroll interval — stored in ref so pause/resume never restarts the interval
  const startInterval = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      // Only scroll if: not paused AND no animation currently in progress
      if (isPausedRef.current) return;
      if (Date.now() < scrollAnimatingUntilRef.current) return;
      scrollNext();
    }, 4000);
  }, [scrollNext]);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start the interval once on mount, stop on unmount
  useEffect(() => {
    startInterval();
    return stopInterval;
  }, [startInterval, stopInterval]);

  // Reset scroll position and restart timer when filter changes
  useEffect(() => {
    const el = carouselRef.current;
    if (el) el.scrollLeft = 0;
    scrollAnimatingUntilRef.current = 0;
  }, [activeFilter]);

  const handlePauseChange = useCallback((paused: boolean) => {
    isPausedRef.current = paused;
  }, []);

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
        onPauseChange={handlePauseChange}
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
    </section>
  );
}
