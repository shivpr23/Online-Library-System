import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div className="not-found-page">
    <h1>404 - Page Not Found</h1>
    <Link to="/">Return Home</Link>
  </div>
);

export default NotFoundPage;
