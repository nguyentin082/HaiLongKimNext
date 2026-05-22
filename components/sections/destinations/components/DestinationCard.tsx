import Image from 'next/image';

interface DestinationItemViewModel {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
}

interface DestinationCardProps {
  item: DestinationItemViewModel;
}

export default function DestinationCard({ item }: DestinationCardProps) {
  return (
    <article className="group relative isolate rounded-4xl card-shadow flex-none w-70 sm:w-[320px] md:w-95 lg:w-110 snap-center">
      <div
        className="relative h-110 overflow-hidden rounded-4xl sm:h-130 md:h-150"
        style={{ willChange: 'transform', contain: 'layout' }}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 440px, (min-width: 768px) 380px, (min-width: 640px) 320px, 280px"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 rounded-4xl bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-[12px] font-bold uppercase tracking-[1.4px] text-white/80">
          {item.tag}
        </p>
        <h3 className="mt-1 font-display text-[28px] font-bold text-white md:text-[32px]">
          {item.title}
        </h3>
      </div>
    </article>
  );
}
