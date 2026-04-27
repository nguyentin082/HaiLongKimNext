'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

const GALLERY_IMAGES = [
  { src: 'https://www.figma.com/api/mcp/asset/91950ad6-a8b2-4ee9-b2e0-c0a8c532a4a6', key: 'img1Alt', className: 'xl:row-span-2' },
  { src: 'https://www.figma.com/api/mcp/asset/b9462ff3-32d8-445f-8078-4ac184ce87e6', key: 'img2Alt' },
  { src: 'https://www.figma.com/api/mcp/asset/e6a8f50c-6a58-4500-8b7d-51c729154d16', key: 'img3Alt' },
  { src: 'https://www.figma.com/api/mcp/asset/1cd699e4-b519-48be-9347-94ea912e2cbe', key: 'img4Alt' },
  { src: 'https://www.figma.com/api/mcp/asset/1d4d38f1-7855-4cde-b3aa-d8fa5cc9768a', key: 'img5Alt', className: 'xl:col-span-2' },
  { src: 'https://www.figma.com/api/mcp/asset/93f6ef16-9f33-46c2-b785-4a5b2debe51c', key: 'img6Alt' },
];

export default function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section id="gallery" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {t('title')}
      </h2>
      <div className="mt-10 grid auto-rows-[210px] gap-6 md:grid-cols-2 xl:grid-cols-4">
        {GALLERY_IMAGES.map((item) => (
          <img
            key={item.key}
            src={item.src}
            alt={t(item.key as Parameters<typeof t>[0])}
            className={cn('h-full w-full rounded-[24px] object-cover soft-shadow', item.className)}
          />
        ))}
      </div>
    </section>
  );
}
