'use client';

import { useTranslations } from 'next-intl';

interface ReasonItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  );
}

function PriceTagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

const ICONS = [<StarIcon key="star" />, <HeadsetIcon key="headset" />, <PriceTagIcon key="price" />];

export default function WhyChooseUs() {
  const tReasons = useTranslations('reasons');

  const reasonItems: ReasonItem[] = [
    {
      id: tReasons('item1Id'),
      title: tReasons('item1Title'),
      description: tReasons('item1Desc'),
      icon: ICONS[0],
    },
    {
      id: tReasons('item2Id'),
      title: tReasons('item2Title'),
      description: tReasons('item2Desc'),
      icon: ICONS[1],
    },
    {
      id: tReasons('item3Id'),
      title: tReasons('item3Title'),
      description: tReasons('item3Desc'),
      icon: ICONS[2],
    },
  ];

  return (
    <section id="why-choose-us" className="section-shell py-12 md:py-16">
      <div className="rounded-3xl bg-muted-bg px-6 py-12 md:px-10 md:py-14">
        {/* Section heading */}
        <h2 className="text-center font-display text-[28px] font-extrabold text-primary md:text-[36px]">
          {tReasons('title')}
        </h2>

        {/* Cards grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {reasonItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col items-center rounded-3xl bg-card px-8 py-10 text-center soft-shadow border border-border transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon bubble */}
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 font-display text-[17px] font-bold text-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-7 text-text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
