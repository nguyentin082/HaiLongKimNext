type HeroBackgroundProps = {
  images: string[];
  currentIndex: number;
  imageAlt: string;
};

export default function HeroBackground({ images, currentIndex, imageAlt }: HeroBackgroundProps) {
  return (
    <>
      {/* Background Images with Fade Transition */}
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={imageAlt}
          className={`absolute inset-0 h-full w-full object-cover brightness-[0.8] dark:brightness-[0.45] transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Mask Blur (Spotify/Apple premium pattern) */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Dynamic Dark Mode Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent dark:from-black/70 dark:via-black/40 dark:to-black/20"
      />
    </>
  );
}
