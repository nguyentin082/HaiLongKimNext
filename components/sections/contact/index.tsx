'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ContactFormPanel } from './components/ContactFormPanel';
import { OfficeCard } from './components/OfficeCard';
import { OFFICE_IMAGES } from './constants';
import type { Office } from './types';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [copiedOfficeId, setCopiedOfficeId] = useState<string | null>(null);

  const offices: Office[] = [
    {
      id: 'hcmc',
      title: t('office1Title'),
      address: t('office1Address'),
      // replace with correct lat/lng in vi and en json files for accurate Google Maps pin
      mapQuery: t('office1MapQuery'),
      imgAlt: t('office1ImgAlt'),
      image: OFFICE_IMAGES.hcmc,
    },
    {
      id: 'angiang',
      title: t('office2Title'),
      address: t('office2Address'),
      // replace with correct lat/lng in vi and en json files for accurate Google Maps pin
      mapQuery: t('office2MapQuery'),
      imgAlt: t('office2ImgAlt'),
      image: OFFICE_IMAGES.angiang,
    },
  ];

  const handleCopyAddress = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedOfficeId(id);
      window.setTimeout(() => setCopiedOfficeId(null), 1800);
    } catch {
      setCopiedOfficeId(null);
    }
  };

  return (
    <section id="contact" className="section-shell py-12 md:py-16">
      <div className="grid gap-8 xl:grid-cols-[560px_minmax(0,1fr)]">
        <ContactFormPanel />

        <div className="flex h-full flex-col gap-8">
          {offices.map((office) => (
            <OfficeCard
              key={office.id}
              office={office}
              isCopied={copiedOfficeId === office.id}
              onCopyAddress={handleCopyAddress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
