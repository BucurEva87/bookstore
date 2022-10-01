import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [
    'fantasy',
    'adventure',
    'romance',
    'contemporary',
    'dystopian',
    'mystery',
    'horror',
    'thriller',
    'paranormal',
    'historical fiction',
    'science fiction',
    'children\'s',
    'memoire',
    'cookbook',
    'art',
    'self-help',
    'development',
    'motivational',
    'health',
    'history',
    'travel',
    'guide/how-to',
    'families and relationships',
    'humor',
  ],
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
