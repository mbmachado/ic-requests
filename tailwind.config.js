/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
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
      '0': '0',
      '4': '4px',
      '8': '8px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '4px',
      lg: '8px',
      full: '9999px',
    },
    extend: {},
  },
  corePlugins: {
    fontFamily: false,
  },
  plugins: [],
}
