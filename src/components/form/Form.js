import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, addBookThunk } from '../../redux/books/books';
// import style from './Form.module.scss'

const Form = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const titleRef = useRef('');
  const authorRef = useRef('');
  const categoryRef = useRef('');

  const handleAddBook = (e) => {
    e.preventDefault();

    const book = {
      id: uuidv4(),
      title: titleRef.current.value.trim(),
      author: authorRef.current.value.trim(),
      category: categoryRef.current.value,
    };

    dispatch(addBook(book));

    dispatch(addBookThunk(book));
  };

  return (
    <footer>
      <h2>Add new book</h2>
      <form onSubmit={handleAddBook}>
        <input ref={titleRef} type="text" id="book-title" placeholder="Book title" required />
        <input ref={authorRef} type="text" id="book-author" placeholder="Book author" required />
        <select ref={categoryRef} id="book-category" defaultValue="" required>
          <option value="" disabled hidden>Category</option>
          { categories.map((category) => (
            <option
              key={`category_${category}`}
              value={category}
            >
              {`${category[0].toUpperCase()}${category.substring(1)}`}
            </option>
          )) }
        </select>
        <input type="submit" value="Add book" />
      </form>
    </footer>
  );
};

export default Form;
