/**
 * GROQ queries cho Gallery.
 * Chỉ chứa string query — không fetch, không transform.
 */

export const GALLERY_IMAGES_QUERY = `
  *[_type == "galleryImage"] | order(order asc, _createdAt asc) {
    _id,
    alt,
    orientation,
    image
  }
`;
