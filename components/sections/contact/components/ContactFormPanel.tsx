'use client';

import { useTranslations } from 'next-intl';
import { CARD_CLASSES } from '../constants';
import { TextInputField, SelectField, TextareaField } from './FormField';

export function ContactFormPanel() {
  const t = useTranslations('contact');

  const serviceOptions = [t('option1'), t('option2'), t('option3'), t('option4')];

  return (
    <div className={`${CARD_CLASSES} p-6 md:p-8`}>
      <p className="font-display text-[14px] font-bold uppercase tracking-[0.18em] text-primary">
        {t('eyebrow')}
      </p>
      <h2 className="mt-3 font-display text-[32px] font-extrabold text-text-secondary md:text-[40px]">
        {t('title')}
      </h2>
      <p className="mt-4 text-[16px] leading-relaxed text-text-muted">{t('subtitle')}</p>

      <form className="mt-8 space-y-[22px]" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          <TextInputField
            label={t('fieldName')}
            placeholder={t('fieldNamePlaceholder')}
          />
          <TextInputField
            label={t('fieldPhone')}
            type="tel"
            placeholder={t('fieldPhonePlaceholder')}
          />
        </div>

        <SelectField label={t('fieldService')} options={serviceOptions} />

        <TextareaField
          label={t('fieldMessage')}
          placeholder={t('fieldMessagePlaceholder')}
          rows={5}
        />

        <button
          type="submit"
          className="mt-2 flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#F79009] px-10 text-[16px] font-bold text-white transition-all hover:bg-[#EA7A08] active:scale-[0.98] shadow-md hover:shadow-lg dark:bg-[#FF9F1C] dark:hover:bg-[#FFB44D] dark:text-[#241303]"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
}
