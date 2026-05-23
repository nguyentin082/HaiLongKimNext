import { FAB_BUTTON_BASE, FAB_SHIMMER, FAB_TOOLTIP_BASE } from '../constants';

interface FabButtonProps {
  href?: string;
  onClick?: () => void;
  ariaLabel: string;
  tooltip: string;
  colorClass: string;
  icon: React.ReactNode;
  external?: boolean;
}

export function FabButton({
  href,
  onClick,
  ariaLabel,
  tooltip,
  colorClass,
  icon,
  external = false,
}: FabButtonProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {};

  const buttonContent = (
    <>
      <div className={FAB_SHIMMER} />
      <span className="relative z-10 flex items-center justify-center">{icon}</span>
    </>
  );

  return (
    <div className="group relative flex items-center gap-3">
      <span className={FAB_TOOLTIP_BASE}>{tooltip}</span>
      {href ? (
        <a
          href={href}
          aria-label={ariaLabel}
          className={`${FAB_BUTTON_BASE} ${colorClass}`}
          {...externalProps}
        >
          {buttonContent}
        </a>
      ) : (
        <button
          onClick={onClick}
          aria-label={ariaLabel}
          className={`${FAB_BUTTON_BASE} ${colorClass}`}
          type="button"
        >
          {buttonContent}
        </button>
      )}
    </div>
  );
}
