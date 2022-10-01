import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, removeBookThunk } from '../../redux/books/books';
import './Book.module.scss';

const Book = ({
  id, author, title, category,
}) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    e.preventDefault();

    const parent = e.target.closest('.info');
    const title = parent.querySelector('.title').innerText;
    const index = books.findIndex((b) => b.title === title);

    dispatch(removeBook(index));
    dispatch(removeBookThunk(parent.dataset.id));
  };

  return (
    <article>
      <div className="info" data-id={id}>
        <span className="category">{category}</span>
        <h2 className="title">{title}</h2>
        <span className="author">{author}</span>
        <ul className="actions">
          <li><a href="/">Comments</a></li>
          <li><a href="/" onClick={handleRemoveBook}>Remove</a></li>
          <li><a href="/">Edit</a></li>
        </ul>
      </div>
      <div className="progress">
        <div className="circle"> </div>
        <div className="percentage">
          <span className="total">64%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="current">
        <h5 className="chapter-heading">Chapter</h5>
        <span className="chapter">Chapter 17</span>
        <button type="button">Update progress</button>
      </div>
    </article>
  );
};

Book.propTypes = {
  id: PT.string.isRequired,
  author: PT.string.isRequired,
  title: PT.string.isRequired,
  category: PT.string.isRequired,
};

export default Book;
