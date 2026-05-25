export interface GalleryItem {
  src: string;
  alt: string;
  className?: string; // Optional tailwind classes for grid span sizing based on image orientation
}

/** Gallery item fetched from Sanity CMS */
export interface SanityGalleryItem extends GalleryItem {
  _id: string;
}
