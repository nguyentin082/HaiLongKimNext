'use client';

import { useEffect, useState, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitch from '@/components/sections/header/components/LanguageSwitch';
import ThemeToggle from '@/components/sections/header/components/ThemeToggle';
import { useActiveSection } from '@/hooks/use-active-section';

type NavLink = {
  href: string;
  label: string;
};

type HeaderMobileMenuProps = {
  navLinks: NavLink[];
};

/* ─── Nav link item ─────────────────────────────────────────── */
const NavLinkItem = memo(function NavLinkItem({
  href,
  label,
  isActive,
  index,
  isVisible,
  onClick,
}: NavLink & { isActive: boolean; index: number; isVisible: boolean; onClick: () => void }) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-14px)',
        transition: 'opacity 400ms ease-out, transform 400ms ease-out',
        transitionDelay: `${60 + index * 50}ms`,
      }}
    >
      <a
        href={href}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
        className={[
          'group relative flex items-center justify-center rounded-2xl px-4 py-3.5 transition-all duration-200 select-none',
          isActive
            ? 'bg-primary/10 dark:bg-primary/15'
            : 'hover:bg-foreground/5 active:bg-foreground/10',
        ].join(' ')}
      >
        {/* Active left bar */}
        <span
          className={[
            'absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full transition-all duration-300',
            isActive ? 'h-6 bg-primary opacity-100' : 'h-0 opacity-0',
          ].join(' ')}
        />

        <span
          className={[
            'text-[15.5px] font-semibold tracking-wide transition-colors duration-200',
            isActive
              ? 'text-primary dark:text-primary'
              : 'text-foreground/75 group-hover:text-foreground',
          ].join(' ')}
        >
          {label}
        </span>

        {isActive && (
          <span
            className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary"
            style={{ boxShadow: '0 0 8px rgba(8,124,122,0.55)' }}
          />
        )}
      </a>
    </div>
  );
});

/* ─── Portal menu ───────────────────────────────────────────── */
const MobileMenuPortal = memo(function MobileMenuPortal({
  navLinks,
  isVisible,
  isMounted,
  onClose,
}: {
  navLinks: NavLink[];
  isVisible: boolean;
  isMounted: boolean;
  onClose: () => void;
}) {
  const t = useTranslations('nav');
  const activeSection = useActiveSection(navLinks);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  if (!isMounted || !portalRoot) return null;

  const footerDelay = 60 + navLinks.length * 50 + 40;

  return createPortal(
    <div className="xl:hidden">
      {/* ── Overlay ── */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-[9998] bg-black/65 transition-opacity duration-350"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* ── Panel ── */}
      <div
        className="fixed left-3 right-3 top-[76px] z-[9999]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.97)',
          pointerEvents: isVisible ? 'auto' : 'none',
          transition:
            'opacity 350ms cubic-bezier(0.32,0.72,0,1), transform 350ms cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        {/* Card */}
        <div
          className="overflow-hidden bg-white dark:bg-[rgb(var(--card))]"
          style={{
            borderRadius: 24,
            border: '1px solid rgba(8,124,122,0.10)',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.6) inset, 0 28px 56px rgba(0,0,0,0.14), 0 6px 18px rgba(0,0,0,0.08)',
          }}
        >
          {/* ── Nav links ── */}
          <nav className="flex flex-col gap-0.5 p-2.5 pb-2" aria-label="Mobile navigation">
            {navLinks.map((item, i) => {
              const isActive =
                activeSection === item.href || (activeSection === '' && item.href === '#about');
              return (
                <NavLinkItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={isActive}
                  index={i}
                  isVisible={isVisible}
                  onClick={onClose}
                />
              );
            })}
          </nav>

          {/* ── Divider ── */}
          <div className="mx-4 h-px bg-black/10 dark:bg-white/10" />

          {/* ── Settings footer ── */}
          <div
            className="flex flex-col gap-3 p-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 400ms ease-out, transform 400ms ease-out',
              transitionDelay: `${footerDelay}ms`,
            }}
          >
            {/* Theme row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-foreground/80">
                  {t('themeTitle')}
                </span>
                <span className="text-[11px] text-foreground/40">{t('themeSubtitle')}</span>
              </div>
              <ThemeToggle />
            </div>

            {/* Language row */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-foreground/80">
                  {t('langTitle')}
                </span>
                <span className="text-[11px] text-foreground/40">{t('langSubtitle')}</span>
              </div>
              <LanguageSwitch variant="mobile" onSwitch={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalRoot,
  );
});

/* ─── Main component ────────────────────────────────────────── */
const HeaderMobileMenu = memo(function HeaderMobileMenu({ navLinks }: HeaderMobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animate open / close
  useEffect(() => {
    if (isMenuOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
    } else {
      setIsVisible(false);
      const t = setTimeout(() => setIsMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [isMenuOpen]);

  // Lock scroll + Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    const sw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${sw}px`;
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const handleClose = useCallback(() => setIsMenuOpen(false), []);
  const handleToggle = useCallback(() => setIsMenuOpen((p) => !p), []);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
        className={[
          'relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl transition-all duration-300 xl:hidden',
          isMenuOpen
            ? 'bg-primary/10 text-primary dark:bg-primary/20'
            : 'bg-muted-bg text-primary hover:bg-primary/8 active:scale-95',
        ].join(' ')}
      >
        <Menu
          className={`absolute h-[19px] w-[19px] transition-all duration-300 ${
            isMenuOpen ? 'opacity-0 scale-50 rotate-45' : 'opacity-100 scale-100 rotate-0'
          }`}
        />
        <X
          className={`absolute h-[19px] w-[19px] transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
          }`}
        />
      </button>

      <MobileMenuPortal
        navLinks={navLinks}
        isVisible={isVisible}
        isMounted={isMounted}
        onClose={handleClose}
      />
    </>
  );
});

export default HeaderMobileMenu;
