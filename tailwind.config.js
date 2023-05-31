/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6)/,
    },
  ],
  darkMode: ['class', '.dark-theme'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: 'var(--blue-light)',
        DEFAULT: 'var(--blue)',
      },
      vermilion: {
        light: 'var(--vermilion-light)',
        DEFAULT: 'var(--vermilion)',
      },
      green: {
        light: 'var(--green-light)',
        DEFAULT: 'var(--green)',
      },
      emerald: {
        light: 'var(--emerald-light)',
        DEFAULT: 'var(--emerald)',
      },
      yellow: {
        light: 'var(--yellow-light)',
        DEFAULT: 'var(--yellow)',
      },
      purple: {
        light: 'var(--purple-light)',
        DEFAULT: 'var(--purple)',
      },
      gray: {
        light: 'var(--gray-light)',
        DEFAULT: 'var(--gray)',
      },
      graphite: {
        light: 'var(--graphite-light)',
        DEFAULT: 'var(--graphite)',
      },
      orange: {
        light: 'var(--orange-light)',
        DEFAULT: 'var(--orange)',
      },
      red: {
        light: 'var(--red-light)',
        DEFAULT: 'var(--red)',
      },
      white: {
        DEFAULT: 'var(--white)',
      },
    },
    spacing: {
      0: '0',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
    },
    borderSpacing: ({ theme }) => ({
      ...theme('spacing'),
    }),
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '4px',
      lg: '8px',
      full: '9999px',
    },
    fontFamily: {
      unica: ['"Unica One"', 'sans-serif'],
      nunito: ['Nunito', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: ['10px', '12px'],
      sm: ['12px', '16px'],
      base: ['14px', '20px'],
      lg: ['16px', '24px'],
      xl: ['22px', '28px'],
      '2xl': ['24px', '32px'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
      'extra-bold': '800',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    boxShadow: {
      1: '0px 3px 1px -2px rgb(31 31 31 / 0.2),0px 2px 2px 0px rgb(31 31 31 / 0.14),0px 1px 5px 0px rgb(31 31 31 / 0.12)',
      2: '0px 2px 4px -1px rgb(31 31 31 / 0.2),0px 4px 5px 0px rgb(31 31 31 / 0.14),0px 1px 10px 0px rgb(31 31 31 / 0.12)',
    },
    extend: {},
  },
  plugins: [],
};
