import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Book from '../book/Book';
import Form from '../form/Form';
// import style from './Books.module.scss';

const Books = ({ books }) => (
  books && (
  <section>
    <ul>
      { books.map((book) => {
        const { title, author } = book;
        return (
          <li key={uuidv4()}>
            <Book title={title} author={author} />
          </li>
        );
      }) }
    </ul>
    <Form />
  </section>
  )
);

Books.defaultProps = {
  books: [],
};

Books.propTypes = {
  books: PT.arrayOf(PT.shape({
    id: PT.number.isRequired,
    title: PT.string.isRequired,
    author: PT.string.isRequired,
  })),
};

export default Books;
