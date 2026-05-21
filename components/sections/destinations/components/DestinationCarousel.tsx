import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import type { RefObject } from 'react';
import DestinationCard from './DestinationCard';

interface DestinationItemViewModel {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
}

interface DestinationCarouselProps {
  items: DestinationItemViewModel[];
  carouselRef: RefObject<HTMLDivElement | null>;
  onPauseChange: (paused: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function DestinationCarousel({
  items,
  carouselRef,
  onPauseChange,
  onPrev,
  onNext,
}: DestinationCarouselProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onNext, onPrev]);

  return (
    <div className="relative mt-10">
      <div
        id="dest-carousel"
        ref={carouselRef}
        onMouseEnter={() => onPauseChange(true)}
        onMouseLeave={() => onPauseChange(false)}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4"
      >
        {items.map((item) => (
          <DestinationCard key={item.id} item={item} />
        ))}
      </div>

      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute top-1/2 -left-16 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-background/95 text-foreground shadow-[0_12px_35px_rgba(15,23,42,0.16)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_16px_45px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:-left-20 md:flex lg:-left-24 lg:h-14 lg:w-14 lg:border-2 dark:border-white/10 dark:bg-slate-900/90 dark:text-white dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] dark:hover:border-primary/60 dark:hover:bg-primary dark:hover:text-primary-foreground"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="absolute top-1/2 -right-16 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-background/95 text-foreground shadow-[0_12px_35px_rgba(15,23,42,0.16)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_16px_45px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:-right-20 md:flex lg:-right-24 lg:h-14 lg:w-14 lg:border-2 dark:border-white/10 dark:bg-slate-900/90 dark:text-white dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] dark:hover:border-primary/60 dark:hover:bg-primary dark:hover:text-primary-foreground"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
      </button>
    </div>
  );
}
