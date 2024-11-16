class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    info() {
      const readStatus = this.read ? "already read" : "not read yet";
      return `${this.title}, by ${this.author}, ${this.pages} pages, ${readStatus}.`;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, pages, read) {
      const newBook = new Book(title, author, pages, read);
      this.books.push(newBook);
    }
  
    displayLibrary() {
      const libraryContainer = document.querySelector('#libraryContainer');
      libraryContainer.innerHTML = '';
      this.books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
          <h3>${book.title}</h3>
          <p>by ${book.author}</p>
          <p>${book.pages} pages</p>
          <p>${book.read ? "Already read" : "Not read yet"}</p>
          <button class="remove-book-btn" data-index="${index}">Remove</button>
          <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
        `;
        libraryContainer.appendChild(bookCard);
      });
    }
  
    removeBook(index) {
      this.books.splice(index, 1);
    }
  
    toggleRead(index) {
      this.books[index].read = !this.books[index].read;
    }
  }
  
  const library = new Library();
  
  libraryContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-book-btn')) {
      const index = e.target.getAttribute('data-index');
      library.removeBook(index);
      library.displayLibrary();
    } else if (e.target.classList.contains('toggle-read-btn')) {
      const index = e.target.getAttribute('data-index');
      library.toggleRead(index);
      library.displayLibrary();
    }
  });
  
  document.getElementById('addBookBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.toggle('hidden');
  });
  
  document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
  
    library.addBook(title, author, pages, read);
    library.displayLibrary();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    document.getElementById('formContainer').classList.toggle('hidden');
  });
