// (function () {

//     var library = {

//         //TODO =================== rewatch https://www.youtube.com/watch?v=pOfwp6VlnlM&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=3
//         // revealing module pattern

//         

//         init: function () {
//             this.cacheDom();
//         },
//         cacheDom: 
//     }
// })()


class Book {
    constructor(title = "NoName", author = "NoAuthor", numPages = "0", read = "Unread") {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
}

function bookInfo() {
    let title = document.getElementsByName("booktitle")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let numPages = document.getElementsByName("numpages")[0].value;
    let read = document.getElementsByName("read")[0].value;

    //TODO ================== INPUT VALIDATION
    title = title || "NoBookTitle";
    author = author || "NoAuthor";
    numPages = numPages || "0";
    read = read || "Error";

    console.log(`Title: ${title}, Author: ${author}, Number of Pages: ${numPages}, Read:${read}`);
    let newBook = new Book(title, author, numPages, read);
    
    return newBook;
}

function addBook(){
    newBook = bookInfo();

    let parentDiv = document.getElementsByName("librarycontainer")[0];

    let newCard = document.createDocumentFragment();
    //Root of card html fragment

    let cardDiv = document.createElement('div');
    cardDiv.className = "card mt-4";
    //Entire Card Element

    let cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = "card-header pb-0";
    //Card Header element holding book title and author

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = "card-body py-0";
    //Card body element holding Page number and Read/Unread

    let cardRow = document.createElement('div');
    cardRow.className = "row";
    //Row element for card body formatting (div)

    let cardNumPages = document.createElement('div');
    cardNumPages.className = "col-3";
    cardNumPages.style = "min-width: 70px";
    //Column for number of pages

    let cardRead = document.createElement('div');
    cardRead.className = "col px-0";
    //Column for book reading status

    cardHeaderDiv.insertAdjacentHTML("beforeend", `<h5>${newBook.title}</h5>`);
    cardHeaderDiv.insertAdjacentHTML("beforeend", `<h6>${newBook.author}</h6>`);
    //Add Title and Author Name Text to card header

    cardNumPages.insertAdjacentHTML("beforeend", `<small class="text-muted">${newBook.numPages} Pages</small>`);
    cardRead.insertAdjacentHTML("beforeend", `<small class="text-danger">${newBook.read}</small>`);
    //Add Number of pages and book status to card body

    cardDiv.appendChild(cardHeaderDiv);
    //Append card header div to Card

    cardRow.appendChild(cardNumPages);
    cardRow.appendChild(cardRead);
    //Append card body div to row

    cardBodyDiv.appendChild(cardRow);
    cardDiv.appendChild(cardBodyDiv);
    //Append row to card body and append card Body to card

    newCard.appendChild(cardDiv);
    //Append entire card to root documentfragment

    parentDiv.appendChild(newCard);
    //Append DocumentFragment to proper librarycontainer div

}