/** @format */
import addBook from './modules/add.js';
import showList from './modules/display.js';
import removeHandler from './modules/remove.js';
import showDate from './modules/showDate.js';

const bookList = document.querySelector('.booklist');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#addBtn');

// single Page accessibility
const showBookList = document.querySelector('#showBookList');
const addBookList = document.querySelector('#addNewBook');
const contact = document.querySelector('#contact');
const currentDate = document.querySelector('#current-date');
const showBook = document.querySelector('#showBook');
const addBooks = document.querySelector('#addBook');
const showContact = document.querySelector('#showContact');

const homePage = document.querySelector('#home-display');

// get items
const userBooks = JSON.parse(localStorage.getItem('userBooks')) || [];

// getItems eventListeners
window.addEventListener('load', () => {
  showList();
});

// Add EventListener
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
  showList();
  title.value = '';
  author.value = '';
});

document.addEventListener('click', removeHandler);
// showList();

window.addEventListener('load', () => {
  currentDate.innerHTML = showDate();
});

showBookList.addEventListener('click', () => {
  showBook.style.visibility = 'visible';
  addBooks.style.visibility = 'hidden';
  showContact.style.visibility = 'hidden';
  homePage.style.visibility = 'hidden';
});

addBookList.addEventListener('click', () => {
  showBook.style.visibility = 'hidden';
  addBooks.style.visibility = 'visible';
  showContact.style.visibility = 'hidden';
  homePage.style.visibility = 'hidden';
});

contact.addEventListener('click', () => {
  showBook.style.visibility = 'hidden';
  addBooks.style.visibility = 'hidden';
  showContact.style.visibility = 'visible';
  homePage.style.visibility = 'hidden';
});

export {
  title, author, userBooks, bookList, currentDate,
};
