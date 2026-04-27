'use client';

import { useTranslations } from 'next-intl';

const TESTIMONIAL_IMAGES = [
  'https://www.figma.com/api/mcp/asset/db47f96b-afb3-4b4f-85ce-395b254876ec',
  'https://www.figma.com/api/mcp/asset/003be16b-19ad-4ba1-a0ee-deaef40efce9',
  'https://www.figma.com/api/mcp/asset/3dbad33c-a934-438a-84a9-512f5ec49fc1',
];

const PARTNER_IMAGES = {
  vinpearl: 'https://www.figma.com/api/mcp/asset/c2d01461-4cf1-46e4-83f0-6dd1f2a36b6e',
  sunWorld: 'https://www.figma.com/api/mcp/asset/601cc05e-1bb0-4b9a-82ee-437249b63a93',
  superdong: 'https://www.figma.com/api/mcp/asset/0156e538-097d-4cce-82e0-5a7dc7528cc0',
};

export default function Testimonials() {
  const tTest = useTranslations('testimonials');
  const tPartners = useTranslations('partners');

  const testimonials = [
    { name: tTest('item1Name'), quote: tTest('item1Quote'), imgAlt: tTest('item1ImgAlt'), image: TESTIMONIAL_IMAGES[0] },
    { name: tTest('item2Name'), quote: tTest('item2Quote'), imgAlt: tTest('item2ImgAlt'), image: TESTIMONIAL_IMAGES[1] },
    { name: tTest('item3Name'), quote: tTest('item3Quote'), imgAlt: tTest('item3ImgAlt'), image: TESTIMONIAL_IMAGES[2] },
  ];

  const partners = [
    { type: 'image' as const, label: tPartners('partner1'), src: PARTNER_IMAGES.vinpearl },
    { type: 'image' as const, label: tPartners('partner2'), src: PARTNER_IMAGES.sunWorld },
    { type: 'image' as const, label: tPartners('partner3'), src: PARTNER_IMAGES.superdong },
    { type: 'text' as const, label: tPartners('partner4') },
    { type: 'text' as const, label: tPartners('partner5') },
    { type: 'text' as const, label: tPartners('partner6') },
  ];

  return (
    <>
      {/* Testimonials */}
      <section className="section-shell py-12 md:py-16">
        <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
          {tTest('title')}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[24px] bg-card p-6 soft-shadow border border-border">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.imgAlt}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-text-secondary">{item.name}</p>
                  <p className="text-sm text-accent">★★★★★</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-7 text-text-muted">{item.quote}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="section-shell py-12 md:py-16">
        <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
          {tPartners('title')}
        </h2>
        <div className="mt-10 grid grid-cols-2 items-center gap-6 rounded-[32px] bg-card px-5 py-8 soft-shadow border border-border md:grid-cols-3 xl:grid-cols-6">
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
    </>
  );
}
