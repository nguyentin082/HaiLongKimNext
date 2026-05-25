'use client';

import { useState } from 'react';
import { XIcon } from 'lucide-react';
import { GalleryImage } from './components/GalleryImage';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import type { GalleryItem, SanityGalleryItem } from './types';

interface GalleryClientProps {
  images: SanityGalleryItem[];
}

export function GalleryClient({ images }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      {/* Gallery Window Container */}
      <div className="relative mt-10 h-[600px] overflow-hidden md:h-[800px]">
        {/* Scrolling Marquee Wrapper */}
        <div className="gallery-marquee-track">
          {/* First instance of the grid */}
          <div className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense">
            {images.map((item, i) => (
              <GalleryImage
                key={`first-${item._id}`}
                item={item}
                index={i}
                onClick={setSelectedImage}
              />
            ))}
          </div>

          {/* Duplicate instance for seamless loop */}
          <div
            aria-hidden="true"
            className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense"
          >
            {images.map((item, i) => (
              <GalleryImage
                key={`second-${item._id}`}
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
    </>
  );
}
