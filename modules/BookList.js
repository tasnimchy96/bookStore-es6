import Book from './Book.js';

class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  removeBook = (index) => {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  getAllBooks = () => this.books;
}

export default BookList;
