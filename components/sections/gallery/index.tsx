'use client';

import { useTranslations } from 'next-intl';
import { GalleryImage } from './components/GalleryImage';
import { GALLERY_IMAGES } from './constants';

export default function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section id="gallery" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {t('title')}
      </h2>

      {/* Shadcn Block 25 Gallery: masonry-style dense grid using Tailwind */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense">
        {GALLERY_IMAGES.map((item, i) => (
          <GalleryImage key={item.src} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
