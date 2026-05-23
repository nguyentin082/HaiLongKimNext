'use client';

import { cn } from '@/lib/utils';
import type { GalleryItem } from '../types';

interface GalleryImageProps {
  item: GalleryItem;
  index: number;
  onClick?: (item: GalleryItem) => void;
}

export function GalleryImage({ item, index, onClick }: GalleryImageProps) {
  return (
    <div
      onClick={() => onClick?.(item)}
      className={cn(
        'group relative rounded-2xl animate-in fade-in zoom-in-95 fill-mode-both cursor-pointer',
        // 1. Smooth lifting and scaling
        'transition-all duration-500 ease-out hover:z-10 hover:scale-[1.04] hover:-translate-y-1.5',
        // 2. Light mode: Deep premium shadow
        'hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]',
        // 3. Dark mode: Beautiful primary-colored glow + subtle ring (using explicit hex to guarantee rendering)
        'dark:hover:shadow-[0_0_30px_#4cc8c580] dark:hover:ring-2 dark:hover:ring-[#4cc8c580]',
        item.className,
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="block h-full w-full object-cover rounded-2xl transition-all duration-500 ease-out group-hover:brightness-110"
        loading="lazy"
      />
    </div>
  );
}
