import { ChevronLeft, ChevronRight } from 'lucide-react';

type HeroArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function HeroArrows({ onPrev, onNext }: HeroArrowsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition-all hover:scale-110 hover:border-white/80 hover:bg-white/20 md:flex md:left-6 lg:left-8 lg:h-14 lg:w-14 lg:border-2"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition-all hover:scale-110 hover:border-white/80 hover:bg-white/20 md:flex md:right-6 lg:right-8 lg:h-14 lg:w-14 lg:border-2"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
      </button>
    </>
  );
}
