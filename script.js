const bookCard = document.querySelector(".card");
const myLibrary = [];
let animal = { species: "dog" };

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};

const book1 = new Book('Harry Potter', 'J. K. Rowling', '349');
myLibrary.push(book1);

const keys = Object.keys(myLibrary[0]); 

for (let i = 0; i < keys.length; i++) {
  const bookInfo = document.createElement("p");
  bookInfo.textContent = myLibrary[0][keys[i]];
  bookCard.appendChild(bookInfo);
}
