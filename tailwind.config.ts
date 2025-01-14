import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import customTheme from './src/lib/theme';

const config: Config = {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: false,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: customTheme,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = Array.from({ length: 5 }, (_, i) => ({
        [`.no-of-lines-${i + 1}`]: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': `${i + 1}`,
        },
      }));
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
