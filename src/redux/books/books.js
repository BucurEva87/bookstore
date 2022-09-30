import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
    addBook: (state, book) => {
      state.push(book);
    },
    removeBook: (state, bookIndex) => {
      state.splice(bookIndex, 1);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
