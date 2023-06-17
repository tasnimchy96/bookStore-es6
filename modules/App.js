import BookList from './BookList.js';
import { list, addNew, contact } from './Button.js';
import { showList, showAddNew, showContact } from './Function.js';
import displayDateTime from './DisplayDateTime.js';

// call the function once to display the initial date and time
displayDateTime();

// call the function every second to update the date and time in real time
setInterval(displayDateTime, 1000);

list.addEventListener('click', showList);
addNew.addEventListener('click', showAddNew);
contact.addEventListener('click', showContact);

class App {
  constructor() {
    this.bookList = new BookList();
    this.bookListDisplay = document.getElementById('bookList');
    this.addForm = document.getElementById('addForm');
    this.addForm.addEventListener('submit', this.handleAddBook.bind(this));
    this.displayBooks();
  }

  handleAddBook = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    this.bookList.addBook(title, author);
    this.displayBooks();
    event.target.reset();
  };

  handleRemoveBook = (index) => {
    this.bookList.removeBook(index);
    this.displayBooks();
  };

  displayBooks = () => {
    this.bookListDisplay.innerHTML = '';
    const books = this.bookList.getAllBooks();
    books.forEach((book, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>"${book.title}" by ${book.author}</td>
      `;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.handleRemoveBook(index);
      });
      removeBtn.classList.add('removeBtn');
      tr.appendChild(removeBtn);
      this.bookListDisplay.appendChild(tr);
    });
  };
}

export default App;
