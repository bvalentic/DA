const express = require('express');
const app = express();
app.use(express.json());

class Book {
  constructor(title, author, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }

  toString() {
    return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}, Genre: ${this.genre}`;
  }
}

let books = [];

// Create
app.post('/books', (req, res) => {
  const { title, author, publicationYear, genre } = req.body;
  const newBook = new Book(title, author, publicationYear, genre);
  books.push(newBook);
  res.send(newBook);
});

// Read
app.get('/books', (req, res) => {
  res.send(books);
});

app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books[id];
  if (!book) {
    res.status(404).send('Book not found');
  } else {
    res.send(book);
  }
});

// Update
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const { title, author, publicationYear, genre } = req.body;
  const book = books[id];
  if (!book) {
    res.status(404).send('Book not found');
  } else {
    book.title = title;
    book.author = author;
    book.publicationYear = publicationYear;
    book.genre = genre;
    res.send(book);
  }
});

// Delete
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books[id];
  if (!book) {
    res.status(404).send('Book not found');
  } else {
    books.splice(id, 1);
    res.send('Book deleted');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
