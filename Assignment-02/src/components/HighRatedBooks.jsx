// src/HighRatedBooks.jsx
import React from 'react';
import Books from '../books';
import BookCard from './BookCard';

const HighRatedBooks = () => {
  const highRated = Books.filter((book) => book.rating > 4.5);

  return (
    <div>
      
<h1>Books with Ratings &gt; 4.5</h1>
      {highRated.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default HighRatedBooks;
