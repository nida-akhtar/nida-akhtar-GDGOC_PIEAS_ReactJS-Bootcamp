// manager.js

import Books from './books.js';

// 1. Function to print book titles with ratings higher than 4.5
const highRatedBooks = () => {
    const highRated = Books.filter(book => book.rating > 4.5);
    console.table(highRated.map(book => ({ Title: book.title, Rating: book.rating })));
};

// 2. Function to iterate and print book details using destructuring
const printBookDetails = () => {
    const details = Books.map(({ title, author, rating, genre }) => ({
        Title: title,
        Author: author,
        Rating: rating,
        Genre: genre
    }));
    console.table(details);
};

// 3. Function to print book titles with the genre "fiction"
const fictionBooks = () => {
    const fiction = Books.filter(book => book.genre.toLowerCase() === 'fiction');
    console.table(fiction.map(book => ({ Title: book.title })));
};

// 4. Function to display an array of book authors
const getBookAuthors = () => {
    const authors = Books.map(book => ({ Author: book.author }));
    console.table(authors);
};

// Call the functions for demonstration
console.log("Books with ratings higher than 4.5:");
highRatedBooks();

console.log("\nDetails of all books:");
printBookDetails();

console.log("\nBooks with the genre 'Fiction':");
fictionBooks();

console.log("\nList of authors:");
getBookAuthors();
