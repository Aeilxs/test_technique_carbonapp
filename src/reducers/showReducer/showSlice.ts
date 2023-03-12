import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { searchShows } from './showMiddleware';

export interface ShowState {
  shows: [];
}

const initialState: ShowState = {
  shows: [],
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
      .addCase(searchShows.fulfilled, (state) => {
        console.log('coucou');
      })
      .addCase(searchShows.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { setShows } = showSlice.actions;

export const selectShows = (state: RootState) => state.show.shows;

export default showSlice.reducer;
