import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface UIState {
  theme: 'light' | 'dark';
  searchString: string;
}

const initialState: UIState = {
  theme: 'light',
  searchString: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      return { ...state, theme: action.payload };
    },
    setValue: (state, action: PayloadAction<string>) => {
      return { ...state, searchString: action.payload };
    },
  },
});

export const { toggleTheme, setValue } = uiSlice.actions;

export const selectTheme = (state: RootState) => state.ui.theme;
export const selectSearchValue = (state: RootState) => state.ui.searchString;

export default uiSlice.reducer;
