import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Status } from '../types/Status';

export type FilterState = {
  status: Status;
  query: string;
};

const initialState: FilterState = {
  status: 'all',
  query: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload.toLowerCase();
    },
    clearQuery(state) {
      state.query = '';
    },
  },
});

export const { setStatus, setQuery, clearQuery } = filterSlice.actions;
export default filterSlice.reducer;
