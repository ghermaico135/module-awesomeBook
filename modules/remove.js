/** @format */

import showList from './display.js';

const removeHandler = (e) => {
  let userBooks = JSON.parse(localStorage.getItem('userBooks')) || [];

  if (e.target.classList.contains('removeBtn')) {
    userBooks = userBooks.filter((book) => book.id.toString() !== e.target.id);

    localStorage.setItem('userBooks', JSON.stringify(userBooks));
  }
  showList();
};

export default removeHandler;
