import { sanityClient } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

/**
 * Build a Sanity image URL from an asset reference.
 * Usage: urlFor(image).width(800).url()
 */
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
