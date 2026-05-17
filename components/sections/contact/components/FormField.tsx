import { ChevronDown } from 'lucide-react';
import { INPUT_CLASSES, TEXTAREA_CLASSES } from '../constants';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

function FormFieldWrapper({ label, children }: FormFieldProps) {
  return (
    <div>
      <label className="mb-2.5 block text-[14px] font-bold text-primary">{label}</label>
      {children}
    </div>
  );
}

interface TextInputFieldProps {
  label: string;
  type?: 'text' | 'tel' | 'email';
  placeholder: string;
}

export function TextInputField({ label, type = 'text', placeholder }: TextInputFieldProps) {
  return (
    <FormFieldWrapper label={label}>
      <input type={type} placeholder={placeholder} className={INPUT_CLASSES} />
    </FormFieldWrapper>
  );
}

interface SelectFieldProps {
  label: string;
  options: string[];
}

export function SelectField({ label, options }: SelectFieldProps) {
  return (
    <FormFieldWrapper label={label}>
      <div className="relative">
        <select
          className={`${INPUT_CLASSES} peer appearance-none pr-12 cursor-pointer dark:bg-[#15282a] dark:text-foreground`}
        >
          {options.map((option) => (
            <option key={option} className="dark:bg-[#15282a] dark:text-foreground">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted transition-colors duration-300 peer-focus:text-primary" />
      </div>
    </FormFieldWrapper>
  );
}

interface TextareaFieldProps {
  label: string;
  placeholder: string;
  rows?: number;
}

export function TextareaField({ label, placeholder, rows = 5 }: TextareaFieldProps) {
  return (
    <FormFieldWrapper label={label}>
      <textarea rows={rows} placeholder={placeholder} className={TEXTAREA_CLASSES} />
    </FormFieldWrapper>
  );
}
