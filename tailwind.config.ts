import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-be-vietnam-pro)'],
        'display': ['var(--font-charmonman)'],
        'body': ['var(--font-nunito-sans)'],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          '50': 'rgb(var(--primary-50) / <alpha-value>)',
          '100': 'rgb(var(--primary-100) / <alpha-value>)',
          '200': 'rgb(var(--primary-200) / <alpha-value>)',
          '300': 'rgb(var(--primary-300) / <alpha-value>)',
          '400': 'rgb(var(--primary-400) / <alpha-value>)',
          '500': 'rgb(var(--primary-500) / <alpha-value>)',
          '600': 'rgb(var(--primary-600) / <alpha-value>)',
          '700': 'rgb(var(--primary-700) / <alpha-value>)',
          '800': 'rgb(var(--primary-800) / <alpha-value>)',
          '900': 'rgb(var(--primary-900) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
        },
        accent: {
          '50': 'rgb(var(--accent-50) / <alpha-value>)',
          '100': 'rgb(var(--accent-100) / <alpha-value>)',
          '200': 'rgb(var(--accent-200) / <alpha-value>)',
          '300': 'rgb(var(--accent-300) / <alpha-value>)',
          '400': 'rgb(var(--accent-400) / <alpha-value>)',
          '500': 'rgb(var(--accent-500) / <alpha-value>)',
          '600': 'rgb(var(--accent-600) / <alpha-value>)',
          '700': 'rgb(var(--accent-700) / <alpha-value>)',
          '800': 'rgb(var(--accent-800) / <alpha-value>)',
          '900': 'rgb(var(--accent-900) / <alpha-value>)',
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
        },
        'muted-bg': 'rgb(var(--muted-bg) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        'surface-alt': 'rgb(var(--surface-alt) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        'gutter': '1rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
