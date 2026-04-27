'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Copy, MapPinned, Route } from 'lucide-react';

const OFFICE_IMAGES = {
  hcmc: 'https://www.figma.com/api/mcp/asset/91950ad6-a8b2-4ee9-b2e0-c0a8c532a4a6',
  angiang: 'https://www.figma.com/api/mcp/asset/b9462ff3-32d8-445f-8078-4ac184ce87e6',
};

export default function ContactForm() {
  const t = useTranslations('contact');
  const [copiedOffice, setCopiedOffice] = useState<string | null>(null);

  const offices = [
    { id: 'hcmc', title: t('office1Title'), address: t('office1Address'), imgAlt: t('office1ImgAlt'), image: OFFICE_IMAGES.hcmc },
    { id: 'angiang', title: t('office2Title'), address: t('office2Address'), imgAlt: t('office2ImgAlt'), image: OFFICE_IMAGES.angiang },
  ];

  const serviceOptions = [
    t('option1'),
    t('option2'),
    t('option3'),
    t('option4'),
  ];

  const handleCopyAddress = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedOffice(id);
      window.setTimeout(() => setCopiedOffice(null), 1800);
    } catch {
      setCopiedOffice(null);
    }
  };

  return (
    <section id="contact" className="section-shell py-12 md:py-16">
      <div className="grid gap-8 xl:grid-cols-[560px_minmax(0,1fr)]">
        {/* Form */}
        <div className="rounded-[24px] border border-border bg-card p-6 soft-shadow md:p-8">
          <p className="font-display text-[14px] font-bold uppercase tracking-[0.18em] text-primary">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 font-display text-[32px] font-extrabold text-text-secondary md:text-[40px]">
            {t('title')}
          </h2>
          <form className="mt-8 space-y-[22px]" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-[8.5px] block text-[14px] font-bold text-primary">
                {t('fieldName')}
              </label>
              <input
                type="text"
                placeholder={t('fieldNamePlaceholder')}
                className="h-[50px] w-full rounded-[24px] border border-border bg-muted-bg px-4 text-[16px] text-foreground outline-none placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-[8.5px] block text-[14px] font-bold text-primary">
                {t('fieldPhone')}
              </label>
              <input
                type="tel"
                placeholder={t('fieldPhonePlaceholder')}
                className="h-[50px] w-full rounded-[24px] border border-border bg-muted-bg px-4 text-[16px] text-foreground outline-none placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-[8.5px] block text-[14px] font-bold text-primary">
                {t('fieldService')}
              </label>
              <select className="h-[50px] w-full rounded-[24px] border border-border bg-muted-bg px-4 text-[16px] text-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20">
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-[8.5px] block text-[14px] font-bold text-primary">
                {t('fieldMessage')}
              </label>
              <textarea
                rows={6}
                placeholder={t('fieldMessagePlaceholder')}
                className="w-full rounded-[24px] border border-border bg-muted-bg px-[17px] py-[13px] text-[16px] text-foreground outline-none placeholder:text-text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="flex h-[62px] w-full items-center justify-center rounded-[16px] bg-accent px-10 py-[17px] text-[18px] font-bold text-white card-shadow transition-transform hover:-translate-y-0.5"
            >
              {t('submit')}
            </button>
          </form>
        </div>

        {/* Office Cards */}
        <div className="grid gap-8">
          {offices.map((office) => {
            const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;
            return (
              <article
                key={office.id}
                className="relative overflow-hidden rounded-[24px] border border-border soft-shadow"
              >
                <img
                  src={office.image}
                  alt={office.imgAlt}
                  className="h-[324px] w-full object-cover"
                />
                <div className="absolute inset-x-0 top-6 px-7">
                  <div className="inline-flex rounded-[24px] bg-foreground/90 px-4 py-[13px] text-[16px] font-bold text-accent map-label">
                    {office.address}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-6 flex flex-wrap gap-[18px] px-7">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-[24px] bg-accent px-5 py-[13px] text-[16px] font-bold text-white map-label"
                  >
                    <MapPinned className="h-4 w-4" />
                    {t('actionMaps')}
                  </a>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-[24px] bg-accent px-5 py-[13px] text-[16px] font-bold text-white map-label"
                  >
                    <Route className="h-4 w-4" />
                    {t('actionDirections')}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(office.id, office.address)}
                    className="inline-flex items-center gap-2 rounded-[24px] bg-accent px-5 py-[13px] text-[16px] font-bold text-white map-label"
                  >
                    <Copy className="h-4 w-4" />
                    {copiedOffice === office.id ? t('actionCopied') : t('actionCopy')}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
