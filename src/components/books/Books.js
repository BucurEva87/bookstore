import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import Book from '../book/Book';
import Form from '../form/Form';
// import style from './Books.module.scss';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    books && (
      <section>
        <ul>
          { books.map((book) => {
            const { title, author, category } = book;
            return (
              <li key={uuidv4()}>
                <Book title={title} author={author} category={category} />
              </li>
            );
          }) }
        </ul>
        <Form />
      </section>
    )
  );
};

export default Books;
