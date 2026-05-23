'use client';

import { cn } from '@/lib/utils';
import type { GalleryItem } from '../types';

interface GalleryImageProps {
  item: GalleryItem;
  index: number;
}

export function GalleryImage({ item, index }: GalleryImageProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl animate-in fade-in zoom-in-95 duration-500 fill-mode-both cursor-pointer',
        item.className,
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}
