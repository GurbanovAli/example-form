import { createGlobalStyle } from 'styled-components';

import {
  ALICE_BLUE,
  ANTI_FLASH_WHITE,
  AZUREISH_WHITE,
  BLACK_CORAL,
  BLUE_JEANS,
  BLUEBERRY,
  BRIGHT_GRAY,
  BRIGHT_NAVY_BLUE,
  CADET_GRAY,
  CHARADE,
  CHINESE_BLACK,
  CULTURED,
  DARK_CORAL,
  DARK_ORCHID,
  ENGLISH_VIOLET,
  FRENCH_SKY_BLUE,
  GLAUCOUS,
  GRAY,
  GREEN_BLUE,
  GUNMETAL,
  IGUANA_GREEN,
  JET,
  LIGHT_GHOST,
  LIGHT_SILVER,
  LIGHT_BLUE,
  LIGHT_SKY_BLUE,
  LIME_GREEN,
  LOTION,
  LOVENDER_BLUSH,
  MELON,
  METALLIC_RED,
  METALLIC_SILVER,
  MOON_LIGHT,
  MUGHAL_GREEN,
  PALE_CERULEAN,
  PALE_PING,
  PHILIPPINE_GOLD,
  PINK_LACE,
  PLATINUM,
  RAISIN_BLACK,
  ROMAN_SILVER,
  SEASHELL,
  SONIC_SILVER,
  STORM_GRAY,
  TOPAZ,
  VAMPIRE_BLACK,
  VERSE_GREEN,
  WHITE,
  YELLOW_ORANGE,
} from './colors';
import { Theme, ThemeOption } from './types';

export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const TRANSITION_TIME = '200ms';

const themeOption: ThemeOption = {
  transition: `${TRANSITION_TIME} ease-in`,
  transitionTime: TRANSITION_TIME,
  boxShadow: `0px 12px 17px rgba(0, 0, 0, 0.07),
    0px 5.73879px 7.10219px rgba(0, 0, 0, 0.0503198),
    0px 3.27642px 3.79717px rgba(0, 0, 0, 0.0417275),
    0px 1.86672px 2.12866px rgba(0, 0, 0, 0.035),
    0px 0.97842px 1.13052px rgba(0, 0, 0, 0.0282725), 
    0px 0.394235px 0.470434px rgba(0, 0, 0, 0.0196802)`,
  boxShadowHead: '0px 8px 32px rgba(0, 0, 0, 0.08)',
  linearGradient: 'linear-gradient(180deg, #fdfdfd 0%, #f0f3fa 100%)',
  modalBackground: 'rgba(255, 255, 255, 0.8)',
};

const lightTheme: Theme = {
  colors: {
    main: WHITE,
    surface1: LOTION,
    neutral1: CULTURED,
    neutral2: BRIGHT_GRAY,
    neutral3: ANTI_FLASH_WHITE,
    neutral4: LIGHT_SILVER,
    neutral5: GRAY,
    neutral6: CADET_GRAY,
    neutral7: LIGHT_BLUE,
    textMain: GUNMETAL,
    textSecondary: CHINESE_BLACK,
    textTertiary: SONIC_SILVER,
    textQuaternary: CADET_GRAY,
    tertiary: ALICE_BLUE,
    tertiaryHover: AZUREISH_WHITE,
    primary: BRIGHT_NAVY_BLUE,
    primaryHover: GREEN_BLUE,
    secondary: PALE_CERULEAN,
    tableColor2: FRENCH_SKY_BLUE,
    bonusContent: DARK_ORCHID,
    warningBg: SEASHELL,
    warningContent: YELLOW_ORANGE,
    errorBg: LOVENDER_BLUSH,
    errorContent2: DARK_CORAL,
    errorContent1: METALLIC_RED,
    successContent: VERSE_GREEN,
    successBg: ENGLISH_VIOLET,
    successContent2: LIME_GREEN,
    star: TOPAZ,
    emphasis: BLUEBERRY,
    textOnDark: LOTION,
    textOnDark2: AZUREISH_WHITE,
    disabled: AZUREISH_WHITE,
    shadow: LIGHT_GHOST,
    modalBg: MOON_LIGHT,
  },
  ...themeOption,
};

const darkTheme: Theme = {
  colors: {
    main: VAMPIRE_BLACK,
    surface1: CHINESE_BLACK,
    neutral1: RAISIN_BLACK,
    neutral2: JET,
    neutral3: CHARADE,
    neutral4: CHARADE,
    neutral5: STORM_GRAY,
    neutral6: METALLIC_SILVER,
    neutral7: LIGHT_BLUE,
    textMain: WHITE,
    textSecondary: PLATINUM,
    textTertiary: ROMAN_SILVER,
    textQuaternary: METALLIC_SILVER,
    tertiary: JET,
    tertiaryHover: JET,
    primary: BLUE_JEANS,
    primaryHover: LIGHT_SKY_BLUE,
    secondary: GLAUCOUS,
    tableColor2: BLUE_JEANS,
    bonusContent: PINK_LACE,
    warningBg: PHILIPPINE_GOLD,
    warningContent: TOPAZ,
    errorBg: LOVENDER_BLUSH,
    errorContent2: MELON,
    errorContent1: PALE_PING,
    successContent: IGUANA_GREEN,
    successBg: MUGHAL_GREEN,
    successContent2: LIME_GREEN,
    star: TOPAZ,
    emphasis: BLUEBERRY,
    textOnDark: LOTION,
    textOnDark2: AZUREISH_WHITE,
    disabled: BLACK_CORAL,
    shadow: LIGHT_GHOST,
    modalBg: MOON_LIGHT,
  },
  ...themeOption,
};

const getFixedStyles = ({ isFixedBody }: { isFixedBody: boolean }): string =>
  isFixedBody
    ? `overflow: hidden;
  position: fixed;`
    : '';

export const GlobalStyle = createGlobalStyle<{
  isFixedBody: boolean;
  theme: Theme;
}>`
  body {
    font-family: Inter, Arial, sans-serif;
    color: ${({ theme }): string => theme.colors.textMain};
    
    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #D6E7F7;
    }
    ${getFixedStyles};
  }
  
  body.modal-open {
    overflow: hidden;
    position: fixed;
  }
`;

export const themeConfig = {
  [ThemeTypes.LIGHT]: lightTheme,
  [ThemeTypes.DARK]: darkTheme,
};
