// src/BookCard.jsx
import React from 'react';

const BookCard = ({ title, author, rating, genre }) => {
  return (
    <div className="book-card" style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p><strong>Genre:</strong> {genre}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    margin: '0 0 10px',
  },
};

export default BookCard;
