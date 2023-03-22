export interface ThemeColors {
  main: string;
  surface1: string;
  neutral1: string;
  neutral2: string;
  neutral3: string;
  neutral4: string;
  neutral5: string;
  neutral6: string;
  neutral7: string;
  textMain: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  tertiary: string;
  tertiaryHover: string;
  primary: string;
  primaryHover: string;
  secondary: string;
  tableColor2: string;
  bonusContent: string;
  warningBg: string;
  warningContent: string;
  errorBg: string;
  errorContent2: string;
  errorContent1: string;
  successContent: string;
  successBg: string;
  successContent2: string;
  star: string;
  emphasis: string;
  textOnDark: string;
  textOnDark2: string;
  disabled: string;
  shadow: string;
  modalBg: string;
}

export interface ThemeOption {
  transition: string;
  transitionTime: string;
  boxShadow: string;
  boxShadowHead: string;
  linearGradient: string;
  modalBackground: string;
}

export interface Theme extends ThemeOption {
  colors: ThemeColors;
}
