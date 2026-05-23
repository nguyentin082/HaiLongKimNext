'use client';

import Image from 'next/image';
import { memo } from 'react';
import { ServiceBadge } from './ServiceBadge';
import { ServiceFeatures } from './ServiceFeatures';
import type { ServiceItem } from '../types';

type ServiceCardProps = {
  item: ServiceItem;
};

function ServiceCardBase({ item }: ServiceCardProps) {
  const shadowClass = item.badge
    ? item.badge.variant === 'accent'
      ? 'shadow-[0_4px_20px_-4px_rgba(247,144,9,0.15)] hover:shadow-[0_12px_40px_-8px_rgba(247,144,9,0.35)]'
      : 'shadow-[0_4px_20px_-4px_rgba(8,124,122,0.15)] hover:shadow-[0_12px_40px_-8px_rgba(8,124,122,0.35)]'
    : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)]';

  return (
    <article
      className={[
        'group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-card',
        'transition-[box-shadow,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]',
        shadowClass,
      ].join(' ')}
    >
      <div className="relative h-[210px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {item.badge ? <ServiceBadge label={item.badge.label} variant={item.badge.variant} /> : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary/80">
            {item.category}
          </p>
          <h3 className="mt-2 font-display text-[22px] font-bold leading-tight text-text-secondary">
            {item.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-text-muted/80">
            {item.description}
          </p>
        </div>

        <ServiceFeatures features={item.features} />

        <a
          href={item.buttonLink}
          className="mt-auto flex w-full items-center justify-center rounded-[14px] bg-zinc-900 px-5 py-3.5 text-[14px] font-bold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 active:scale-[0.98]"
        >
          {item.buttonText}
        </a>
      </div>
    </article>
  );
}

export const ServiceCard = memo(ServiceCardBase);