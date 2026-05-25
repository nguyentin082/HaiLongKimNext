/**
 * Raw types phản ánh đúng shape của document trong Sanity.
 * Không thêm logic UI vào đây — chỉ là "data as-is from GROQ".
 */

export type SanityOrientation = 'standard' | 'portrait' | 'wide' | 'hero';

export type RawGalleryImage = {
  _id: string;
  alt: string;
  orientation: SanityOrientation;
  image: { asset: { _ref: string } };
};
