'use client';

import { Copy, MapPinned, Route } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CARD_CLASSES, GLASS_ADDRESS_CLASSES, GLASS_BUTTON_CLASSES } from '../constants';
import type { Office } from '../types';

interface OfficeCardProps {
  office: Office;
  isCopied: boolean;
  onCopyAddress: (id: string, address: string) => void;
}

export function OfficeCard({ office, isCopied, onCopyAddress }: OfficeCardProps) {
  const t = useTranslations('contact');

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery || office.address)}`;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery || office.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <article
      className={`relative flex-1 min-h-[324px] overflow-hidden ${CARD_CLASSES}`}
    >
      <iframe
        title={office.title}
        src={embedSrc}
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute inset-x-0 top-6 px-7">
        <div className={GLASS_ADDRESS_CLASSES}>{office.address}</div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex flex-wrap gap-[18px] px-7">
        <a href={mapsLink} target="_blank" rel="noreferrer" className={GLASS_BUTTON_CLASSES}>
          <MapPinned className="h-4 w-4" />
          {t('actionMaps')}
        </a>
        <a href={mapsLink} target="_blank" rel="noreferrer" className={GLASS_BUTTON_CLASSES}>
          <Route className="h-4 w-4" />
          {t('actionDirections')}
        </a>
        <button
          type="button"
          onClick={() => onCopyAddress(office.id, office.address)}
          className={GLASS_BUTTON_CLASSES}
        >
          <Copy className="h-4 w-4" />
          {isCopied ? t('actionCopied') : t('actionCopy')}
        </button>
      </div>
    </article>
  );
}
