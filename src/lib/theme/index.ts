import { borderRadius } from './borderRadius';
import { colors } from './colors';
import { screens } from './screens';
import { boxShadow } from './shadows';
import { transition } from './transitions';
import { typography } from './typography';
import { zIndex } from './zIndices';

const customTheme = {
  colors: {
    ...colors,
    'light-blue': '#34febc',
    'dark-blue': '#030d12 ',
    yellow: '#ffde00',
    white: '#ffffff',
  },
  screens,
  zIndex,
  boxShadow,
  borderRadius,
  ...transition,
  ...typography,
  fontFamily: {
    ...typography.fontFamily,
    nunito: ['var(--font-nunito)'],
    loomattic: ['var(--font-loomattic)'],
  },
};

export default customTheme;
