const bookCard = document.querySelector(".card");
const newBtn = document.getElementById("new");
const myLibrary = [];
const inputValues = ["Title: ", "Author: ", "Number of pages: "];

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
    function createForm(){
        const newBookForm = document.createElement("form");
        const readBtn = document.createElement("input");
        const checkLabel = document.createElement("label");
        checkLabel.textContent = "Have you read it? ";
        readBtn.setAttribute("type", "checkbox");
        newBookForm.setAttribute("method", "get");
        popup.appendChild(newBookForm);
        for (let i = 0; i < 3; i++) {
            const input = document.createElement("input");
            const label = document.createElement("label");
            input.setAttribute("type", "text");
            label.textContent = inputValues[i];
            newBookForm.appendChild(label);
            newBookForm.appendChild(input);
        };
        popup.appendChild(checkLabel);
        popup.appendChild(readBtn);
    };
    createForm();
    closeWindow();
};