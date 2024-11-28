// src/BookDetails.jsx
import React from 'react';
import Books from '../books';
import BookCard from './BookCard';

import './BookDetails.css';  // Import the CSS file for BookDetails

const BookDetails = () => {
  return (
    <div className="book-details-container">
      <h1>All Book Details</h1>
      <div className="book-cards-container">
        {Books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookDetails;


