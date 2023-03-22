import { themeSelector } from 'store/App/appSelectors';
import { appActions } from 'store/App/appSlice';
import { themeConfig, ThemeTypes } from 'theme';

import { Theme } from 'theme/types';
import { CSSProperties } from 'styled-components';
import { useAppDispatch, useAppSelector } from './redux';

type ReturnType = {
  theme: ThemeTypes;
  changeTheme: (themeType: ThemeTypes) => void;
  currentTheme: Theme & CSSProperties;
};

export const useTheme = (): ReturnType => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector);
  const currentTheme = themeConfig[theme];

  const changeTheme = (newTheme: ThemeTypes): void => {
    dispatch(appActions.setTheme(newTheme));
  };

  return {
    theme,
    changeTheme,
    currentTheme,
  };
};
