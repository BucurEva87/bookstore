import React from 'react';
import { Link } from 'react-router-dom';
// import style from './Header.module.scss';
import './Header.scss';

const Header = () => (
  <header>
    <a href="/" id="logo">
      <span>Bookstore CMS</span>
    </a>
    <nav>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
    <span id="profile-image">
      <img src={`${process.env.PUBLIC_URL}images/user-image.png`} alt="Profile" />
    </span>
  </header>
);

export default Header;
