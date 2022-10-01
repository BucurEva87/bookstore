import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'upvUxBk7y2ugNGPPGsaw';
const apiBaseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`;

export const getBooksThunk = createAsyncThunk('books/getBooksThunk', async () => {
  const response = await fetch(`${apiBaseURL}/books`, { credentials: 'omit' });
  const books = await response.json();

  return Object.entries(books).map(([id, book]) => ({
    id,
    ...book[0],
  }));
});

export const removeBookThunk = createAsyncThunk('books/removeBookThunk', async (id) => {
  await fetch(`${apiBaseURL}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export const addBookThunk = createAsyncThunk('books/addBookThunk', async ({
  id, title, author, category,
}) => {
  await fetch(`${apiBaseURL}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
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
    builder.addCase(getBooksThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getBooksThunk.fulfilled, (state, books) => (
      { ...state, loading: false, books: books.payload }));
    builder.addCase(getBooksThunk.rejected, (state, error) => (
      { ...state, loading: false, error }));
    builder.addCase(removeBookThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(removeBookThunk.fulfilled, (state) => ({ ...state, loading: false }));
    builder.addCase(removeBookThunk.rejected, (state) => ({ ...state, loading: false }));
    builder.addCase(addBookThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(addBookThunk.fulfilled, (state) => ({ ...state, loading: false }));
    builder.addCase(addBookThunk.rejected, (state) => ({ ...state, loading: false }));
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
