'use client';

import Image from 'next/image';
import { useState } from 'react';



interface DestinationItemViewModel {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
}

interface DestinationCardProps {
  item: DestinationItemViewModel;
  /** Position in the visible list (0-based). Cards 0-1 get priority + eager loading. */
  index: number;
}

export default function DestinationCard({ item, index }: DestinationCardProps) {
  // Prioritise the first 2 visible cards for LCP; rest are lazy-loaded.
  const isEager = index < 2;
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="group relative isolate rounded-4xl card-shadow flex-none w-70 sm:w-[320px] md:w-95 lg:w-110 snap-center">
      <div
        className="relative h-110 overflow-hidden rounded-4xl sm:h-130 md:h-150"
      >
        {/* Skeleton shimmer — visible until image fires onLoad */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-4xl overflow-hidden transition-opacity duration-500"
          style={{ opacity: loaded ? 0 : 1, pointerEvents: 'none' }}
        >
          {/* Base layer */}
          <div className="absolute inset-0 bg-muted dark:bg-slate-800" />
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
              backgroundSize: '200% 100%',
              animation: 'dest-shimmer 1.6s ease-in-out infinite',
            }}
          />
          {/* Fake gradient overlay matching real card */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          {/* Fake text lines at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
            <div className="h-2.5 w-16 rounded-full bg-white/20" />
            <div className="h-5 w-32 rounded-full bg-white/25" />
          </div>
        </div>

        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 440px, (min-width: 768px) 380px, (min-width: 640px) 320px, 280px"
          // transition-transform only — opacity is handled by the skeleton overlay above,
          // keeping the <img> layer clean for GPU-composited scale animation.
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          style={{
            opacity: loaded ? 1 : 0,
            // GPU layer promotion — always active so hover never triggers paint.
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          priority={isEager}
          loading={isEager ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="absolute inset-0 rounded-4xl bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-[12px] font-bold uppercase tracking-[1.4px] text-white/80">
          {item.tag}
        </p>
        <h3 className="mt-1 font-display text-[28px] font-bold text-white md:text-[32px]">
          {item.title}
        </h3>
      </div>
    </article>
  );
}
