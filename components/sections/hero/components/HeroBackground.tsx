import Image from 'next/image';

type HeroBackgroundProps = {
  images: readonly string[];
  currentIndex: number;
  imageAlt: string;
};

/**
 * HeroBackground — only renders current, previous, and next images.
 * Previously rendered all 14 images simultaneously (with opacity toggling),
 * which allocated 14 DOM nodes + 14 IntersectionObservers unnecessarily.
 * Now only 3 images exist in the DOM at any time.
 */
export default function HeroBackground({
  images,
  currentIndex,
  imageAlt,
}: HeroBackgroundProps) {
  const total = images.length;

  // Calculate which indices to render: [prev, current, next]
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const visibleIndices = new Set([prevIndex, currentIndex, nextIndex]);

  return (
    <>
      {/* Background Images — only render current ± 1 for transitions */}
      {images.map((src, index) => {
        if (!visibleIndices.has(index)) return null;
        return (
          <Image
            key={src}
            src={src}
            alt={imageAlt}
            fill
            sizes="100vw"
            // First image loads eagerly (LCP); rest are lazy
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`object-cover brightness-[0.8] dark:brightness-[0.45] transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        );
      })}

      {/* Dynamic dark-mode gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent dark:from-black/70 dark:via-black/40 dark:to-black/20" />
    </>
  );
}
