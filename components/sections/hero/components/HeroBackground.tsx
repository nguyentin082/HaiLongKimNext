import Image from 'next/image';

type HeroBackgroundProps = {
  images: readonly string[];
  currentIndex: number;
  imageAlt: string;
};

export default function HeroBackground({
  images,
  currentIndex,
  imageAlt,
}: HeroBackgroundProps) {
  return (
    <>
      {/* Background Images with Fade Transition */}
      {images.map((src, index) => (
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
      ))}



      {/* Dynamic dark-mode gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent dark:from-black/70 dark:via-black/40 dark:to-black/20" />
    </>
  );
}
