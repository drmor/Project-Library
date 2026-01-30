const bookCard = document.querySelector(".card");
const newBtn = document.getElementById("new");
const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function(){
        for (let i = 0; i < 3; i++) {
            const bookInfo = document.createElement("p");
            bookInfo.textContent = myLibrary[0][keys[i]];
            bookCard.appendChild(bookInfo);
        };
    };
};

const book1 = new Book('Harry Potter', 'J. K. Rowling', '349');
myLibrary.push(book1);

const keys = Object.keys(myLibrary[0]); 

book1.info();

newBtn.addEventListener('click', () => {
    addNewBook();
});

function addNewBook(){
    const popup = document.createElement("div");
    const closeBtn = document.createElement("button");
    const confirmBtn = document.createElement("button");
    closeBtn.textContent = "close";
    confirmBtn.textContent = "confirm";
    popup.classList.add("popup");
    document.body.appendChild(popup);
    popup.appendChild(closeBtn);
    popup.appendChild(confirmBtn);
    function closeWindow(){
        closeBtn.addEventListener('click', () => {
            if(popup){
                popup.remove();
            };
        });
        confirmBtn.addEventListener('click', () => {
            if(popup){
                popup.remove();
            };
        });
    };
    closeWindow();
};