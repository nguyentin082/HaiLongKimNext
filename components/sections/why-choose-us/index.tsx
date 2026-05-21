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
      stroke="url(#icon-brand-gradient)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SupportAgentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#icon-brand-gradient)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Headset band */}
      <path d="M4 13a8 8 0 0 1 16 0" />
      {/* Earpieces */}
      <rect x="2" y="11" width="4" height="6" rx="1" />
      <rect x="18" y="11" width="4" height="6" rx="1" />
      {/* Mic */}
      <path d="M20 17v4a1 1 0 0 1-1 1h-6" />
      {/* Head curve - using bezier to ensure reliable rendering */}
      <path d="M7 14c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      {/* Hair parting */}
      <path d="M12 9c-1 2-3 3-5 5" />
      <path d="M12 9c1 2 3 3 5 5" />
      {/* Eyes */}
      <circle cx="9.5" cy="15" r="1.2" fill="url(#icon-brand-gradient)" stroke="none" />
      <circle cx="14.5" cy="15" r="1.2" fill="url(#icon-brand-gradient)" stroke="none" />
    </svg>
  );
}

function StackedMoneyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#icon-brand-gradient)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Back note (stacked effect) */}
      <path d="M2 8v10a2 2 0 0 0 2 2h14" />
      {/* Front note */}
      <rect x="6" y="4" width="16" height="12" rx="2" />
      <circle cx="14" cy="10" r="2.5" />
      <path d="M10 10h.01M18 10h.01" />
    </svg>
  );
}

const ICONS = [
  <StarIcon key="star" />,
  <SupportAgentIcon key="headset" />,
  <StackedMoneyIcon key="price" />,
];

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
    <section id="why-choose-us" className="section-shell py-12 md:py-16 relative">
      {/* Shared Gradient for Icons */}
      <svg width="0" height="0" className="absolute w-0 h-0" style={{ pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="icon-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="rgb(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>

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
              className="group flex flex-col items-center rounded-3xl bg-card px-8 py-10 text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_20px_-8px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.9)]"
            >
              {/* Icon bubble */}
              <div className="mb-2 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-black/5 dark:bg-white/5 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/10">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-[22px] font-extrabold brand-gradient pb-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
