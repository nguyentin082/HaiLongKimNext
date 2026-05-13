export const MOTION = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    entrance: 'cubic-bezier(0, 0, 0.2, 1)',
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
    spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  transition: {
    soft: 'background-color 250ms ease, border-color 250ms ease, color 250ms ease, opacity 250ms ease, transform 250ms ease',
    card: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
    nav: 'color 200ms ease, background-color 200ms ease, border-color 200ms ease',
  },
} as const;
