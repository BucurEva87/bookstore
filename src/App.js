import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Header from './components/header/Header';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/books" index element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<Navigate to="/books" replace />} />
    </Routes>
  </Router>
);

export default App;
