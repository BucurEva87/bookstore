import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'upvUxBk7y2ugNGPPGsaw';
const apiBaseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await fetch(`${apiBaseURL}/books`, { credentials: 'omit' });
  const books = await response.json();

  return Object.entries(books).map(([id, book]) => ({
    id,
    ...book[0],
  }));
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    books: [],
    error: '',
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getBooks.fulfilled, (state, books) => (
      { ...state, loading: false, books: books.payload }));
    builder.addCase(getBooks.rejected, (state, error) => ({ ...state, loading: false, error }));
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
