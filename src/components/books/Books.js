import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from '../book/Book';
import Form from '../form/Form';
// import style from './Books.module.scss';

const Books = () => {
  const books = useSelector((state) => state.books);

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
