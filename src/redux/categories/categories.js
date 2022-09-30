import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [] },
  reducers: {
    check: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
export const { check } = categoriesSlice.actions;
