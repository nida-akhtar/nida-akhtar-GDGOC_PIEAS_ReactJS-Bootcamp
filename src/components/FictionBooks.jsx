// src/FictionBooks.jsx
import React from 'react';
import Books from '../books';
import BookCard from './BookCard';

const FictionBooks = () => {
  const fictionBooks = Books.filter((book) => book.genre.toLowerCase() === 'fiction');

  return (
    <div>
      <h1>Fiction Books</h1>
      {fictionBooks.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default FictionBooks;
