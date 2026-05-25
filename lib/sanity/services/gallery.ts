import { sanityClient } from '../client';
import { urlFor } from '../image';
import { GALLERY_IMAGES_QUERY } from '../queries/gallery';
import type { RawGalleryImage, SanityOrientation } from '../types/gallery';
import type { SanityGalleryItem } from '@/components/sections/gallery/types';

/** Map orientation từ Sanity → Tailwind className cho layout grid */
const ORIENTATION_CLASS: Record<SanityOrientation, string | undefined> = {
  standard: undefined,
  portrait: 'row-span-2',
  wide: 'md:col-span-2',
  hero: 'md:col-span-2 md:row-span-2',
};

function toGalleryItem(doc: RawGalleryImage): SanityGalleryItem {
  return {
    _id: doc._id,
    src: urlFor(doc.image).width(1200).quality(85).url(),
    alt: doc.alt,
    className: ORIENTATION_CLASS[doc.orientation],
  };
}

/** Fetch toàn bộ gallery images từ Sanity, đã map sang UI type */
export async function fetchGalleryImages(): Promise<SanityGalleryItem[]> {
  const docs = await sanityClient.fetch<RawGalleryImage[]>(GALLERY_IMAGES_QUERY);
  return docs.map(toGalleryItem);
}
