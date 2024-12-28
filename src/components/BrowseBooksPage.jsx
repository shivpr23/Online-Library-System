import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BrowseBooksPage.css';

const BrowseBooksPage = () => {
  const { category } = useParams(); // Retrieve category from URL
  const [search, setSearch] = useState('');
  const books = useSelector((state) => state.books);

  // Filter books by category if a category is provided, otherwise show all
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books-page">
      <h1>{category ? `Books in ${category}` : 'All Books'}</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Book List */}
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <Link to={`/book/${book.id}`} className="view-details-link">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooksPage;
