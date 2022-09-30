import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    books: [],
    error: '',
  },
});
