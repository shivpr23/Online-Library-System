import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  // Define some popular books with IDs and categories
  const popularBooks = [
    { id: 1, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi' },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction' },
    { id: 3, title: 'Becoming', author: 'Michelle Obama', category: 'Biography' },
  ];

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

  return (
    <div className="home-page">
      <h1>Welcome to the Online Library!</h1>
      
      <section className="categories">
        <h2>Book Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-books">
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`} className="book-title">{book.title}</Link> by {book.author}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
