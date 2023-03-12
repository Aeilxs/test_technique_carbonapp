import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { searchShows } from './showMiddleware';

export interface AlertMessage {
  severity: AlertColor;
  message: '';
}
export interface ShowState {
  shows: ShowData[];
  message: AlertMessage;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

export interface ShowData {
  id: number;
  name: string;
  image: string;
  summary: string;
}

const initialState: ShowState = {
  shows: [],
  message: { severity: 'info', message: '' },
  status: 'idle',
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShows: (state, action: PayloadAction<[]>) => {
      return { ...state, shows: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchShows.pending, (state) => {
        return { ...state, status: 'pending' };
      })
      .addCase(searchShows.fulfilled, (state, action) => {
        const { severity, message } = action.payload as AlertMessage;
        return { ...state, message: { severity, message }, status: 'fulfilled' };
      })
      .addCase(searchShows.rejected, (state, action) => {
        const { severity, message } = action.payload as AlertMessage;
        return { ...state, message: { severity, message }, status: 'rejected' };
      });
  },
});

export const { setShows } = showSlice.actions;

export const selectShows = (state: RootState) => state.show.shows;
export const selectShowMessage = (state: RootState) => state.show.message;
export const selectShowStatus = (state: RootState) => state.show.status;

export default showSlice.reducer;
