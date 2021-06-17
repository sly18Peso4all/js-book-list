const list = document.querySelector("#book-list ul");

/**
 * Deletes book from the List Element
 */
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const id = e.target.closest("li");
    id.remove();
  }
});

/**
 *  Add book to the List
 */

const addBook = document.querySelector("#add-book");

addBook.addEventListener("submit", function (e) {
  e.preventDefault();

  const userInputValue = addBook.querySelector('input[type="text"]').value;

  // Create HTML
  const html = `
    <li>
      <span class="name">${userInputValue}</span>
      <span class="delete">delete</span>
    </li>
  `;
  list.insertAdjacentHTML("beforeend", html);
});

/**
 * Hide or  dist Book List
 */
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function () {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

/**
 * Filter Books
 */

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.querySelectorAll("li");
  books.forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

/**
 * tabbed Content
 */
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function (panel) {
      if (panel === targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
