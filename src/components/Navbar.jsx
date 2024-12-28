import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/books">Browse Books</Link>
    <Link to="/add-book">Add Book</Link>
  </nav>
);

export default Navbar;
