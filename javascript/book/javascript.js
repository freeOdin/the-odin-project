const myLibrary = [];

function Book(title, author, pages, read) { 
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;
    this.info = () => {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${readStatus}.`; 
    } 
}

const addBookToLibrary= (title, author, pages, read) => {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const displayLibrary = () => {
    const libraryContainer = document.querySelector('#libraryContainer');
    libraryContainer.innerHTML = '';
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Already read" : "Not read yet"}</p>
            <button class="remove-book-btn" data-index="${myLibrary.indexOf(book)}">Remove</button>
            <button class="toggle-read-btn" data-index="${myLibrary.indexOf(book)}">Toggle Read</button>
        `;
        libraryContainer.appendChild(bookCard);
    });
}

libraryContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-book-btn')) {
      const index = e.target.getAttribute('data-index');
      myLibrary.splice(index, 1);
      displayLibrary();
    }
});

libraryContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-read-btn')) {
      const index = e.target.getAttribute('data-index');
      myLibrary[index].read = !myLibrary[index].read;
      displayLibrary();
    }
});

document.getElementById('addBookBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.toggle('hidden');
});

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayLibrary();
    author.value = '';
    title.value = '';
    pages.value = '';
    read.checked = false;
    document.getElementById('formContainer').classList.toggle('hidden');
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false); 
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Ulysses", "James Joyce", 412, false);

displayLibrary();
