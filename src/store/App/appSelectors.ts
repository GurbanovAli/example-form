import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

import { IAppStateType } from './appTypes';

const appSelector = (state: RootState): IAppStateType => state.app;

export const themeSelector = createSelector(appSelector, (app) => app.theme);
export const isFixedBody = createSelector(
  appSelector,
  (app) => app.isFixedBody
);
