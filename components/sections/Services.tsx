'use client';

import { useTranslations } from 'next-intl';
import {
  Sparkles,
  Flame,
  Check,
  Phone,
  MapPin,
  Bus,
  Train,
  Ship,
  Plane,
  Ticket,
  Music,
  Compass,
} from 'lucide-react';

// Reliable Unsplash images, one per service category
const SERVICE_IMAGES = [
  // Tour trọn gói — island/beach
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  // Thiết kế tour — custom travel planning
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
  // Dịch vụ xe — vehicle/transport
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
  // MICE / Sự kiện — conference/event
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
];

const BADGE_VARIANTS = ['accent', 'primary'] as const;
type BadgeVariant = (typeof BADGE_VARIANTS)[number];

function ServiceBadge({ label, variant }: { label: string; variant: BadgeVariant }) {
  const isAccent = variant === 'accent';
  const Icon = isAccent ? Sparkles : Flame;

  return (
    <div className="absolute top-4 right-4 z-20">
      <div
        className={[
          'flex items-center gap-1.5 rounded-full px-3.5 py-1.5',
          'bg-white/85 backdrop-blur-md border border-white/20 shadow-sm dark:bg-black/50 dark:border-white/10',
          isAccent
            ? 'text-amber-600 dark:text-amber-400'
            : 'text-emerald-700 dark:text-emerald-400',
        ].join(' ')}
      >
        <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span className="text-[11px] font-bold uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

const getFeatureIcon = (feature: string) => {
  const f = feature.toLowerCase();
  if (f.includes('liên hệ') || f.includes('contact')) return Phone;
  if (f.includes('máy bay') || f.includes('flight')) return Plane;
  if (f.includes('tàu hoả') || f.includes('train')) return Train;
  if (f.includes('cao tốc') || f.includes('speedboat') || f.includes('tàu')) return Ship;
  if (f.includes('xe') || f.includes('bus') || f.includes('car')) return Bus;
  if (f.includes('safari')) return Compass;
  if (f.includes('show') || f.includes('diễn') || f.includes('live')) return Music;
  if (
    f.includes('vinwonders') ||
    f.includes('cáp treo') ||
    f.includes('cable') ||
    f.includes('ticket')
  )
    return Ticket;
  if (f.includes('đảo') || f.includes('island') || f.includes('rút') || f.includes('móng tay'))
    return MapPin;
  if (
    f.includes('sài gòn') ||
    f.includes('hà tiên') ||
    f.includes('phú quốc') ||
    f.includes('route')
  )
    return MapPin;
  return Check;
};

export default function Services() {
  const t = useTranslations('services');

  const items = [
    {
      category: t('item1Category'),
      title: t('item1Title'),
      description: t('item1Desc'),
      features: t('item1Features').split('|'),
      image: SERVICE_IMAGES[0],
      alt: t('item1Alt'),
      badge: { label: t('item1Badge'), variant: 'accent' as BadgeVariant },
      buttonText: t('item1CTA'),
      buttonLink: t('item1Link'),
    },
    {
      category: t('item2Category'),
      title: t('item2Title'),
      description: t('item2Desc'),
      features: t('item2Features').split('|'),
      image: SERVICE_IMAGES[1],
      alt: t('item2Alt'),
      badge: { label: t('item2Badge'), variant: 'primary' as BadgeVariant },
      buttonText: t('item2CTA'),
      buttonLink: t('item2Link'),
    },
    {
      category: t('item3Category'),
      title: t('item3Title'),
      description: t('item3Desc'),
      features: t('item3Features').split('|'),
      image: SERVICE_IMAGES[2],
      alt: t('item3Alt'),
      buttonText: t('item3CTA'),
      buttonLink: t('item3Link'),
    },
    {
      category: t('item4Category'),
      title: t('item4Title'),
      description: t('item4Desc'),
      features: t('item4Features').split('|'),
      image: SERVICE_IMAGES[3],
      alt: t('item4Alt'),
      buttonText: t('item4CTA'),
      buttonLink: t('item4Link'),
    },
  ];

  return (
    <section id="services" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {t('title')}
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const isFeatured = !!item.badge;
          const isAccentBadge = item.badge?.variant === 'accent';

          // Clean, borderless minimalist card
          // Featured cards emit a soft colored glow from their shadow instead of using borders
          const cardClass = [
            'group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-card',
            'transition-[box-shadow,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]',
            isFeatured
              ? isAccentBadge
                ? 'shadow-[0_4px_20px_-4px_rgba(247,144,9,0.15)] hover:shadow-[0_12px_40px_-8px_rgba(247,144,9,0.35)]'
                : 'shadow-[0_4px_20px_-4px_rgba(8,124,122,0.15)] hover:shadow-[0_12px_40px_-8px_rgba(8,124,122,0.35)]'
              : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)]',
          ].join(' ');

          return (
            <article key={item.title} className={cardClass}>
              {/* Image wrapper */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[210px] w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                />
                {/* Subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Badge */}
                {item.badge && (
                  <ServiceBadge label={item.badge.label} variant={item.badge.variant} />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-5">
                  <h3 className="font-display text-[22px] font-bold text-text-secondary leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-muted/80">
                    {item.description}
                  </p>
                </div>

                <ul
                  className={`mt-auto mb-6 grid gap-x-3 gap-y-3 ${item.features.length >= 4 ? 'grid-cols-2' : 'grid-cols-1'}`}
                >
                  {item.features.map((feature, idx) => {
                    const Icon = getFeatureIcon(feature);

                    return (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                          <Icon className="h-[11px] w-[11px]" strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] font-medium leading-snug text-text-secondary/90">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto flex w-full items-center justify-center rounded-[14px] bg-zinc-900 px-5 py-3.5 text-[14px] font-bold text-white transition-all duration-200 ease-out hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 active:scale-[0.98]"
                >
                  {item.buttonText || t('learnMore')}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
