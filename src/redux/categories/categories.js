import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
