'use client';

import { useTranslations } from 'next-intl';

const TESTIMONIAL_IMAGES = [
  'https://www.figma.com/api/mcp/asset/db47f96b-afb3-4b4f-85ce-395b254876ec',
  'https://www.figma.com/api/mcp/asset/003be16b-19ad-4ba1-a0ee-deaef40efce9',
  'https://www.figma.com/api/mcp/asset/3dbad33c-a934-438a-84a9-512f5ec49fc1',
];

export default function Testimonials() {
  const tTest = useTranslations('testimonials');

  const testimonials = [
    {
      name: tTest('item1Name'),
      quote: tTest('item1Quote'),
      imgAlt: tTest('item1ImgAlt'),
      image: TESTIMONIAL_IMAGES[0],
    },
    {
      name: tTest('item2Name'),
      quote: tTest('item2Quote'),
      imgAlt: tTest('item2ImgAlt'),
      image: TESTIMONIAL_IMAGES[1],
    },
    {
      name: tTest('item3Name'),
      quote: tTest('item3Quote'),
      imgAlt: tTest('item3ImgAlt'),
      image: TESTIMONIAL_IMAGES[2],
    },
  ];

  return (
    <section id="testimonials" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {tTest('title')}
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-3xl bg-card p-6 soft-shadow border border-border"
          >
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
  );
}
