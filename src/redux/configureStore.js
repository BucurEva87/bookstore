import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import categoriesSlice from './categories/categories';

export default configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});
