import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import showSlice from '../reducers/showReducer/showSlice';
import uiReducer from '../reducers/uiReducer/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    show: showSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
