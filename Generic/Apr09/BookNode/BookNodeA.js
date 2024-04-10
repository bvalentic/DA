// Import the required modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use the body-parser middleware to parse JSON data
app.use(bodyParser.json());

// An array to store Book objects
let books = [];

// Create a new Book
app.post('/api/books', (req, res) => {
  const book = new Book(req.body.title, req.body.author, req.body.publicationYear, req.body.genre);
  books.push(book);
  res.send(book);
});

// Get all Books
app.get('/api/books', (req, res) => {
  res.send(books);
});

// Get a Book by id
app.get('/api/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(b => b.id === id);
  if (!book) {
    res.status(404).send(`Book with id ${id} not found`);
  } else {
    res.send(book);
  }
});

// Update a Book by id
app.put('/api/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(b => b.id === id);
  if (!book) {
    res.status(404).send(`Book with id ${id} not found`);
  } else {
    book.title = req.body.title;
    book.author = req.body.author;
    book.publicationYear = req.body.publicationYear;
    book.genre = req.body.genre;
    res.send(book);
  }
});

// Delete a Book by id
app.delete('/api/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(b => b.id === id);
  if (!book) {
    res.status(404).send(`Book with id ${id} not found`);
  } else {
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
