'use client';

import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" className="h-5 w-5">
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const AVATAR_COLORS = [
  { bg: '#0D9488', fg: '#CCFBF1' }, // teal
  { bg: '#0369A1', fg: '#E0F2FE' }, // blue
  { bg: '#7C3AED', fg: '#EDE9FE' }, // violet
  { bg: '#B45309', fg: '#FEF3C7' }, // amber
  { bg: '#047857', fg: '#D1FAE5' }, // emerald
];

const AnonAvatar = ({ index, name }: { index: number; name: string }) => {
  const { bg, fg } = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const initials = name
    .split(' ')
    .slice(-2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  return (
    <span
      aria-label={name}
      style={{ backgroundColor: bg, color: fg }}
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-bold tracking-wide shadow-sm select-none"
    >
      {initials}
    </span>
  );
};



const TESTIMONIAL_IDS = [0, 1, 2, 3, 4] as const;

export default function Testimonials() {
  const tTest = useTranslations('testimonials');

  return (
    <section id="testimonials" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {tTest('title')}
      </h2>
      <div className="mt-10 px-4 sm:px-20 md:px-28">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 py-4">
            {TESTIMONIAL_IDS.map((id, index) => (
              <CarouselItem key={id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <article
                  className="h-full rounded-3xl p-6 lg:p-8 flex flex-col justify-between gap-6 relative
                             bg-card/60 backdrop-blur-xl
                             border border-white/40 dark:border-white/10
                             shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  <p className="text-[15px] leading-relaxed text-text-muted flex-grow">
                    {tTest(`item${id}Quote`)}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <AnonAvatar index={index} name={tTest(`item${id}Name`)} />
                    <div>
                      <p className="font-bold text-text-secondary text-[15px]">{tTest(`item${id}Name`)}</p>
                      <p className="text-[13px] text-text-muted/50">{tTest(`item${id}Location`)}</p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-16 md:-left-20 lg:-left-24 h-11 w-11 lg:h-14 lg:w-14 cursor-pointer rounded-full border border-border/80 lg:border-2 bg-background/95 text-foreground shadow-[0_12px_35px_rgba(15,23,42,0.16)] backdrop-blur-md transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:scale-110 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_16px_45px_rgba(15,23,42,0.22)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-slate-900/90 dark:text-white dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] dark:hover:border-primary/60 dark:hover:bg-primary dark:hover:text-primary-foreground" />
          <CarouselNext className="hidden sm:flex -right-16 md:-right-20 lg:-right-24 h-11 w-11 lg:h-14 lg:w-14 cursor-pointer rounded-full border border-border/80 lg:border-2 bg-background/95 text-foreground shadow-[0_12px_35px_rgba(15,23,42,0.16)] backdrop-blur-md transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:scale-110 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_16px_45px_rgba(15,23,42,0.22)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-slate-900/90 dark:text-white dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] dark:hover:border-primary/60 dark:hover:bg-primary dark:hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
