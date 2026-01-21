let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

async function searchBooks() {
    let searchValue = searchInputEl.value;
    if (searchValue === "") {
        return;
    }

    spinnerEl.classList.remove("d-none");
    searchResultsEl.innerHTML = "";

    let url = "https://apis.ccbp.in/book-store?title=" + searchValue;
    let response = await fetch(url);
    let data = await response.json();

    spinnerEl.classList.add("d-none");

    if (data.search_results.length === 0) {
        searchResultsEl.textContent = "No results found";
    } else {
        for (let book of data.search_results) {
            let bookItem = document.createElement("div");
            bookItem.classList.add("book-item");

            let bookImg = document.createElement("img");
            bookImg.src = book.imageLink;
            bookImg.alt = book.title;

            let authorP = document.createElement("p");
            authorP.textContent = book.author;

            bookItem.appendChild(bookImg);
            bookItem.appendChild(authorP);
            searchResultsEl.appendChild(bookItem);
        }
    }
}

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchBooks();
    }
});