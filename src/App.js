import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Header from './components/header/Header';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

const App = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState([
    { title: 'The Hunger Games', author: 'Suzanne Collins' },
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/books" index element={<Books books={books} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Navigate to="/books" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
