'use client';

import Image from 'next/image';
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
        'transition-transform duration-500 ease-out hover:z-10 hover:scale-[1.04] hover:-translate-y-1.5',
        item.className,
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="rounded-2xl object-cover transition-[filter] duration-500 ease-out group-hover:brightness-110"
        loading="lazy"
      />
    </div>
  );
}
