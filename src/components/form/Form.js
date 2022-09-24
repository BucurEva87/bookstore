import React from 'react';
// import style from './Form.module.scss'

const Form = () => (
  <footer>
    <h2>Add new book</h2>
    <form>
      <input type="text" id="book-title" placeholder="Book title" required />
      <input type="text" id="book-author" placeholder="Book author" required />
      <input type="submit" value="Add book" />
    </form>
  </footer>
);

export default Form;
