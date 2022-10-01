import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, removeBookThunk } from '../../redux/books/books';
import style from './Book.module.scss';

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
        <span className={style.category}>{category}</span>
        <h2 className={style.title}>{title}</h2>
        <span className={style.author}>{author}</span>
        <ul className={style.actions}>
          <li><a href="/">Comments</a></li>
          <li><a href="/" onClick={handleRemoveBook}>Remove</a></li>
          <li><a href="/">Edit</a></li>
        </ul>
      </div>
      <div className={style.progress}>
        <img src={`${process.env.PUBLIC_URL}images/circle.png`} alt="Progress" className={style.circle} />
        <div className="percentage">
          <span className={style.total}>
            {Math.floor(Math.random() * 100)}
            %
          </span>
          <span className={style.completed}>Completed</span>
        </div>
      </div>
      <div className={style.current}>
        <h5 className={style['chapter-heading']}>Chapter</h5>
        <span className={style.chapter}>Chapter 17</span>
        <button type="button" className={style['btn-update']}>Update progress</button>
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
