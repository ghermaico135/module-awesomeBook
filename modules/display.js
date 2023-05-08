/** @format */
const bookList = document.querySelector('.booklist');

const showList = () => {
  const books = JSON.parse(localStorage.getItem('userBooks')) || [];
  let content = '';
  books.forEach((book) => {
    content += `
    <div
    class="container bg-light d-flex justify-content-between border border-dark p-2">
    <div>
    <p class="text-dark">"${book.bookTitle}" by ${book.bookAuthor}</p>
    </div>
    <div>
    <button type="submit" class="btn btn-danger removeBtn" id="${book.id}">
    Remove
    </button>
    </div>
    </div>
    `;
  });
  bookList.innerHTML = content;
};

export default showList;
