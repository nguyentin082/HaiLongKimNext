import { getTranslations } from 'next-intl/server';
import { GalleryClient } from './GalleryClient';
import { fetchGalleryImages } from '@/lib/sanity/queries';

export default async function Gallery() {
  const t = await getTranslations('gallery');
  const images = await fetchGalleryImages();

  return (
    <section id="gallery" className="w-full bg-zinc-50 dark:bg-zinc-900/30">
      <div className="section-shell py-12 md:py-16">
        <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
          {t('title')}
        </h2>

        <GalleryClient images={images} />
      </div>
    </section>
  );
}
