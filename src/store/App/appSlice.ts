import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'adapters/localStorageAdapter';
import { LOCAL_STORAGE_THEME_KEY, ThemeTypes } from 'theme/themeConfig';

import { IAppStateType } from './appTypes';

const initialState: IAppStateType = {
  theme: storage.get(LOCAL_STORAGE_THEME_KEY) || ThemeTypes.LIGHT,
  isFixedBody: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<ThemeTypes>) => {
      state.theme = payload;
    },

    setIsFixedBody: (state, { payload }: PayloadAction<boolean>) => {
      state.isFixedBody = payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
