'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Copy, MapPinned, Route, ChevronDown } from 'lucide-react';

const OFFICE_IMAGES = {
  hcmc: 'https://www.figma.com/api/mcp/asset/91950ad6-a8b2-4ee9-b2e0-c0a8c532a4a6',
  angiang: 'https://www.figma.com/api/mcp/asset/b9462ff3-32d8-445f-8078-4ac184ce87e6',
};

export default function ContactForm() {
  const t = useTranslations('contact');
  const [copiedOffice, setCopiedOffice] = useState<string | null>(null);

  const offices = [
    {
      id: 'hcmc',
      title: t('office1Title'),
      address: t('office1Address'),
      imgAlt: t('office1ImgAlt'),
      image: OFFICE_IMAGES.hcmc,
    },
    {
      id: 'angiang',
      title: t('office2Title'),
      address: t('office2Address'),
      imgAlt: t('office2ImgAlt'),
      image: OFFICE_IMAGES.angiang,
    },
  ];

  const serviceOptions = [t('option1'), t('option2'), t('option3'), t('option4')];

  const handleCopyAddress = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedOffice(id);
      window.setTimeout(() => setCopiedOffice(null), 1800);
    } catch {
      setCopiedOffice(null);
    }
  };

  const glassAddressClasses =
    'inline-flex rounded-[24px] border-0 bg-white/90 px-4 py-[13px] text-[15px] font-semibold text-[#1F2F2F] shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 dark:bg-black/75 dark:text-white dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-colors duration-300';

  const glassButtonClasses =
    'inline-flex items-center gap-2 rounded-[24px] border-0 bg-white/90 px-5 py-[13px] text-[15px] font-semibold text-[#1F2F2F] shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] active:scale-[0.98] dark:bg-black/75 dark:text-white dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] dark:hover:bg-black/90 dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]';

  const inputClasses =
    'h-[56px] w-full rounded-[16px] border-0 bg-[#F4F4F5] px-5 text-[16px] text-[#1F2F2F] shadow-none outline-none transition-all duration-300 placeholder:text-[#697575] hover:bg-[#E4E4E7] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#087C7A]/20 dark:bg-[#112325] dark:text-[#EDF7F6] dark:placeholder:text-[#9BABAB] dark:hover:bg-[#162B2D] dark:focus:bg-[#0F1C1E]';

  const textareaClasses =
    'w-full rounded-[16px] border-0 bg-[#F4F4F5] px-5 py-4 text-[16px] text-[#1F2F2F] shadow-none outline-none transition-all duration-300 placeholder:text-[#697575] hover:bg-[#E4E4E7] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#087C7A]/20 resize-y dark:bg-[#112325] dark:text-[#EDF7F6] dark:placeholder:text-[#9BABAB] dark:hover:bg-[#162B2D] dark:focus:bg-[#0F1C1E]';

  return (
    <section id="contact" className="section-shell py-12 md:py-16">
      <div className="grid gap-8 xl:grid-cols-[560px_minmax(0,1fr)]">
        {/* Form */}
        <div className="rounded-[24px] border-0 bg-card p-6 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-500 hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.05)] dark:hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] md:p-8">
          <p className="font-display text-[14px] font-bold uppercase tracking-[0.18em] text-primary">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 font-display text-[32px] font-extrabold text-text-secondary md:text-[40px]">
            {t('title')}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-text-muted">{t('subtitle')}</p>
          <form className="mt-8 space-y-[22px]" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
              <div>
                <label className="mb-2.5 block text-[14px] font-bold text-primary">
                  {t('fieldName')}
                </label>
                <input
                  type="text"
                  placeholder={t('fieldNamePlaceholder')}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="mb-2.5 block text-[14px] font-bold text-primary">
                  {t('fieldPhone')}
                </label>
                <input
                  type="tel"
                  placeholder={t('fieldPhonePlaceholder')}
                  className={inputClasses}
                />
              </div>
            </div>
            <div>
              <label className="mb-2.5 block text-[14px] font-bold text-primary">
                {t('fieldService')}
              </label>
              <div className="relative">
                <select
                  className={`${inputClasses} peer appearance-none pr-12 cursor-pointer dark:bg-[#15282a] dark:text-foreground`}
                >
                  {serviceOptions.map((option) => (
                    <option key={option} className="dark:bg-[#15282a] dark:text-foreground">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted transition-colors duration-300 peer-focus:text-primary" />
              </div>
            </div>
            <div>
              <label className="mb-2.5 block text-[14px] font-bold text-primary">
                {t('fieldMessage')}
              </label>
              <textarea
                rows={5}
                placeholder={t('fieldMessagePlaceholder')}
                className={textareaClasses}
              />
            </div>
            <button
              type="submit"
              className="mt-2 flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#F79009] px-10 text-[16px] font-bold text-white transition-all hover:bg-[#EA7A08] active:scale-[0.98] shadow-md hover:shadow-lg dark:bg-[#FF9F1C] dark:hover:bg-[#FFB44D] dark:text-[#241303]"
            >
              {t('submit')}
            </button>
          </form>
        </div>

        {/* Office Cards */}
        <div className="flex h-full flex-col gap-8">
          {offices.map((office) => {
            const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;
            return (
              <article
                key={office.id}
                className="relative flex-1 min-h-[324px] overflow-hidden rounded-[24px] border-0 bg-card shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-500 hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.05)] dark:hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)]"
              >
                <iframe
                  title={office.title}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(office.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-x-0 top-6 px-7">
                  <div className={glassAddressClasses}>{office.address}</div>
                </div>
                <div className="absolute inset-x-0 bottom-6 flex flex-wrap gap-[18px] px-7">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className={glassButtonClasses}
                  >
                    <MapPinned className="h-4 w-4" />
                    {t('actionMaps')}
                  </a>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className={glassButtonClasses}
                  >
                    <Route className="h-4 w-4" />
                    {t('actionDirections')}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(office.id, office.address)}
                    className={glassButtonClasses}
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
