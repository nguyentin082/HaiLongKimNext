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

      {/* Gallery Window Container */}
      <div className="relative mt-10 h-[600px] md:h-[800px] overflow-hidden">
        {/* Top/Bottom Fading Gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background to-transparent" />

        {/* Scrolling Marquee Wrapper */}
        <div className="flex flex-col animate-[marquee-up_60s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First instance of the grid */}
          <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense px-4">
            {GALLERY_IMAGES.map((item, i) => (
              <GalleryImage key={`first-${item.src}`} item={item} index={i} />
            ))}
          </div>

          {/* Duplicate instance for seamless loop */}
          <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense px-4">
            {GALLERY_IMAGES.map((item, i) => (
              <GalleryImage key={`second-${item.src}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
