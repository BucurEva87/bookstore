const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
};
