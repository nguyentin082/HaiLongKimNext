'use client';

import { useTranslations } from 'next-intl';

const PARTNER_IMAGES = {
  vinpearl: 'https://www.figma.com/api/mcp/asset/c2d01461-4cf1-46e4-83f0-6dd1f2a36b6e',
  sunWorld: 'https://www.figma.com/api/mcp/asset/601cc05e-1bb0-4b9a-82ee-437249b63a93',
  superdong: 'https://www.figma.com/api/mcp/asset/0156e538-097d-4cce-82e0-5a7dc7528cc0',
};

export default function Partners() {
  const tPartners = useTranslations('partners');

  const partners = [
    {
      type: 'image' as const,
      label: tPartners('partner1'),
      src: PARTNER_IMAGES.vinpearl,
    },
    {
      type: 'image' as const,
      label: tPartners('partner2'),
      src: PARTNER_IMAGES.sunWorld,
    },
    {
      type: 'image' as const,
      label: tPartners('partner3'),
      src: PARTNER_IMAGES.superdong,
    },
    { type: 'text' as const, label: tPartners('partner4') },
    { type: 'text' as const, label: tPartners('partner5') },
    { type: 'text' as const, label: tPartners('partner6') },
  ];

  return (
    <section className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {tPartners('title')}
      </h2>
      <div className="mt-10 grid grid-cols-2 items-center gap-6 rounded-4xl bg-card px-5 py-8 soft-shadow border border-border md:grid-cols-3 xl:grid-cols-6">
        {partners.map((item) =>
          item.type === 'image' ? (
            <img
              key={item.label}
              src={item.src}
              alt={item.label}
              className="mx-auto max-h-9 w-auto object-contain dark:brightness-75 dark:contrast-125"
            />
          ) : (
            <div
              key={item.label}
              className="text-center text-sm font-extrabold uppercase tracking-[0.08em] text-text-muted"
            >
              {item.label}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
