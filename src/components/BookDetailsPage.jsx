import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams(); // Get book ID from URL
  const book = useSelector((state) =>
    state.books.find((book) => book.id === parseInt(id))
  );

  // If no book found, display a message
  if (!book) {
    return (
      <div className="book-details-page">
        <h1>Book Not Found</h1>
        <Link to="/books">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
};

export default BookDetailsPage;
