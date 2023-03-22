import { useTheme } from 'hooks/useTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme';

import Form from 'components/form/form';
import { useAppSelector } from './hooks/redux';
import { isFixedBody as isFixedBodySelector } from './store/App/appSelectors';

export const App = (): JSX.Element => {
  const { currentTheme } = useTheme();
  const isFixedBody = useAppSelector(isFixedBodySelector);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle isFixedBody={isFixedBody} theme={currentTheme} />
      <Form />
    </ThemeProvider>
  );
};
