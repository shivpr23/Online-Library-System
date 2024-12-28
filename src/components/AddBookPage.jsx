import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBookPage.css';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = () => {
    if (!title || !author || !category || !description || !rating) {
      setError('All fields are required.');
      return;
    }
    setError('');
    dispatch(
      addBook({
        id: Date.now(),
        title,
        author,
        category,
        description,
        rating, // default rating
      })
    );
    navigate('/books');
  };

  return (
    <div className="add-book-page">
      <h1>Add a New Book</h1>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="0-5" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={handleAddBook}>Add Book</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddBookPage;
