'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { XIcon } from 'lucide-react';
import { GalleryImage } from './components/GalleryImage';
import { GALLERY_IMAGES } from './constants';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import type { GalleryItem } from './types';

export default function Gallery() {
  const t = useTranslations('gallery');

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {t('title')}
      </h2>

      {/* Gallery Window Container */}
      <div className="relative mt-10 h-[600px] overflow-hidden md:h-[800px]">
        {/* Top/Bottom Fading Gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background to-transparent" />

        {/* Scrolling Marquee Wrapper */}
        <div className="gallery-marquee-track">
          {/* First instance of the grid */}
          <div className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense">
            {GALLERY_IMAGES.map((item, i) => (
              <GalleryImage
                key={`first-${item.src}`}
                item={item}
                index={i}
                onClick={setSelectedImage}
              />
            ))}
          </div>

          {/* Duplicate instance for seamless loop */}
          <div aria-hidden="true" className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense">
            {GALLERY_IMAGES.map((item, i) => (
              <GalleryImage
                key={`second-${item.src}`}
                item={item}
                index={i}
                onClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent
          className="max-w-7xl border-none bg-transparent p-0 shadow-none"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">{selectedImage?.alt || 'Image preview'}</DialogTitle>

          {selectedImage && (
            <div className="relative flex h-[85vh] w-full items-center justify-center">
              <div className="relative inline-flex max-h-full max-w-full items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />

                {/* Elegant Close Button inside the image bounds */}
                <DialogClose className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <XIcon className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
