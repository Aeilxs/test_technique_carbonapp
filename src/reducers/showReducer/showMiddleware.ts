import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import axios from 'axios';
import { setShows } from './showSlice';

export const searchShows = createAsyncThunk('show/searchShow', async (_, { getState, dispatch, rejectWithValue }) => {
  try {
    const { searchString } = (getState() as RootState).ui;
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`);
    console.log(response.data);
    dispatch(setShows(response.data));
    return { severity: 'info', message: `Here is ${response.data.length} movies for you !` };
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    return rejectWithValue({ severity: 'error', message: 'Echec de la recherche' });
  }
});
