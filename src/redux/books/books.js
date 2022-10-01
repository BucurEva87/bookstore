import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'action',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'action',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'action',
    },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
