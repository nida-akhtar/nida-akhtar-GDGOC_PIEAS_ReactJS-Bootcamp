// src/App.jsx
import React from 'react';
import HighRatedBooks from './components/HighRatedBooks';
import BookDetails from './components/BookDetails';
import FictionBooks from './components/FictionBooks';
import BookAuthors from './components/BookAuthors';

import './App.css';  // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <div className="top-border">
        <h2>Library Management System</h2>
      </div>
      <h1>Library Manager</h1>
      <HighRatedBooks />
      <BookDetails />
      <FictionBooks />
      <BookAuthors />
    </div>
  );
};
export default App;
