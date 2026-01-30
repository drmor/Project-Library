const newBtn = document.getElementById("new");
const myLibrary = [];
const inputLabels = ["Title: ", "Author: ", "Number of pages: "];
const inputValues = ["title", "author", "pages"];
let amountOfBooks = -1;

function Book(title, author, pages, check, uuid){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.check = check;
    this.uuid = uuid;
};

newBtn.addEventListener('click', () => {
    addNewBook();
});

function getValues(){
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    const readCheck = document.getElementById("check").checked;
    let uuid = self.crypto.randomUUID();
    const book = new Book(bookTitle, bookAuthor, bookPages, readCheck, uuid);
    myLibrary.push(book);
};

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
            amountOfBooks += 1;
            getValues();
            if(popup){
                popup.remove();
            };
            displayNewBook();
        });
    };
    function setAttributes(el, attrs) {
        for (const key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }
    function createForm(){
        const newBookForm = document.createElement("form");
        const readBtn = document.createElement("input");
        const checkLabel = document.createElement("label");
        checkLabel.textContent = "Have you read it? ";
        checkLabel.setAttribute("for", "check")
        readBtn.setAttribute("type", "checkbox");
        readBtn.setAttribute("id", "check");
        readBtn.setAttribute("name", "check");
        newBookForm.setAttribute("method", "get");
        popup.appendChild(newBookForm);
        for (let i = 0; i < 3; i++) {
            const input = document.createElement("input");
            const label = document.createElement("label");
            setAttributes(input, {
                "type": "text",
                "id": inputValues[i],
                "name": inputValues[i],
            });
            label.setAttribute("for", inputValues[i])
            label.textContent = inputLabels[i];
            newBookForm.appendChild(label);
            newBookForm.appendChild(input);
        };
        popup.appendChild(checkLabel);
        popup.appendChild(readBtn);
    };
    createForm();
    closeWindow();
};

function displayNewBook(){
    const keys = Object.keys(myLibrary[amountOfBooks]); 
    const bookCard = document.createElement("div");
    bookCard.classList.add("card")
    document.body.appendChild(bookCard)
    for (let i = 0; i < 3; i++) {
        const bookInfo = document.createElement("p");
        bookInfo.textContent = myLibrary[amountOfBooks][keys[i]];
        bookCard.appendChild(bookInfo);
    };
}