import { sanityClient } from './client';
import { urlFor } from './image';
import type { SanityGalleryItem } from '@/components/sections/gallery/types';

// Map orientation string → Tailwind className (giống cấu trúc cũ)
const ORIENTATION_CLASS: Record<string, string | undefined> = {
  standard: undefined,
  portrait: 'row-span-2',
  wide: 'md:col-span-2',
  hero: 'md:col-span-2 md:row-span-2',
};

const GALLERY_QUERY = `
  *[_type == "galleryImage"] | order(order asc, _createdAt asc) {
    _id,
    alt,
    orientation,
    image
  }
`;

type RawGalleryDoc = {
  _id: string;
  alt: string;
  orientation: string;
  image: { asset: { _ref: string } };
};

/**
 * Fetch all gallery images from Sanity and map them to GalleryItem shape.
 */
export async function fetchGalleryImages(): Promise<SanityGalleryItem[]> {
  const docs = await sanityClient.fetch<RawGalleryDoc[]>(GALLERY_QUERY);

  return docs.map((doc) => ({
    _id: doc._id,
    src: urlFor(doc.image).width(1200).quality(85).url(),
    alt: doc.alt,
    className: ORIENTATION_CLASS[doc.orientation],
  }));
}
