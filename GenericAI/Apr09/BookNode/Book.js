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
