import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import axios from 'axios';
import { setShows } from './showSlice';
import { setValue } from '../uiReducer/uiSlice';

export const searchShows = createAsyncThunk('show/searchShow', async (_, { getState, dispatch, rejectWithValue }) => {
  try {
    const { searchString } = (getState() as RootState).ui;
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`);
    dispatch(setValue(''));
    if (response.data.length === 0) {
      return { severity: 'warning', message: `Sadly there is no show that match your research, try again :(` };
    }
    const filteredData = response.data.map((show: any) => ({
      id: show.show.id,
      name: show.show.name,
      image: show.show.image?.original || 'https://cdn-icons-png.flaticon.com/512/3875/3875172.png',
      summary: show.show.summary || 'No summary available',
      language: show.show.language || '',
      genres: show.show.genres || [''],
      status: show.show.status || '',
      premiered: show.show.premiered || '',
      ended: show.show.ended || '',
      officialSite: show.show.officialSite || '',
    }));

    dispatch(setShows(filteredData));
    return { severity: 'success', message: `Here are the shows you asked for !` };
  } catch (error) {
    if (!axios.isAxiosError(error)) throw error;
    return rejectWithValue({ severity: 'error', message: 'Echec de la recherche' });
  }
});
