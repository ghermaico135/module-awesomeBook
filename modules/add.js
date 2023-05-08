const title = document.querySelector('#title');
const author = document.querySelector('#author');
const userBooks = JSON.parse(localStorage.getItem('userBooks')) || [];
const addBook = () => {
  if (title.value === '' && author.value === '') {
    // alert("Please fill up all fields");
  } else {
    userBooks.push({
      id: Math.floor(Math.random() * 1000),
      bookTitle: title.value,
      bookAuthor: author.value,
    });
    localStorage.setItem('userBooks', JSON.stringify(userBooks));
  }
};

export default addBook;
