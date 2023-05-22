let bookList = [
  {
    title: "Atomic habits",
    author: "James Clear",
    pages: 200,
    isRead: true,
  },
  {
    title: "Atomic habits",
    author: "James Clear",
    pages: 200,
    isRead: true,
  },
  {
    title: "Atomic habits",
    author: "James Clear",
    pages: 200,
    isRead: true,
  },
];

// Book constructor
function Book(name, author, pages, isRead) {
  this.title = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
// Book PROTOTYPE
Book.prototype.changeIsRead = function () {
  this.isRead = !this.isRead;
};

// add book to list
function addBook(book) {
  bookList.push(book);
}

// Card Component
function infoBox(p, a) {
  const box = document.createElement("div");
  box.classList = "border-b-2 border-veryLightGray py-2";
  const pa = document.createElement("span");
  pa.innerText = p;
  const text = document.createElement("p");
  text.classList = "font-bold text-darkBlue dark:text-white";
  text.innerText = a;
  box.appendChild(pa);
  box.appendChild(text);
  return box;
}

function cardComponent(title, author, pages, isRead, index) {
  const card = document.createElement("div");
  card.classList =
    "w-[250px] min-h-[320px] px-3 pt-6 pb-2 border-4 border-darkBlue shadow-md relative dark:bg-lightGray dark:text-white dark:border-white";
  const isReadBox = document.createElement("div");
  isReadBox.classList =
    "absolute h-7 px-2 top-[-16px] left-2 font-medium flex items-center";
  isRead ? isReadBox.classList.add("read") : isReadBox.classList.add("notRead");
  isReadBox.innerText = isRead ? "Read" : "Not Read";
  card.appendChild(isReadBox);
  card.appendChild(infoBox("Title:", title));
  card.appendChild(infoBox("Author:", author));
  card.appendChild(infoBox("Pages:", pages));
  const readBox = document.createElement("div");
  readBox.classList = "py-2 flex justify-between w-full items-center";
  const label = document.createElement("span");
  label.innerText = "Have you read it?";
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList = "h-5 w-5";
  checkBox.checked = isRead;
  checkBox.dataset.index = index;
  readBox.appendChild(label);
  readBox.appendChild(checkBox);
  card.appendChild(readBox);
  const removeBtn = document.createElement("button");
  removeBtn.classList =
    "border-2 border-magenta text-magenta w-full py-1 hover:bg-magenta hover:text-black dark:hover:text-white";
  removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i> Remove`;
  card.appendChild(removeBtn);
  return card;
}

//  Render Book List

function renderBookList(bookList) {
  const cardsListElement = document.querySelector("#cardsList");

  bookList.forEach((e) => {
    cardsListElement.appendChild(
      cardComponent(e.title, e.author, e.pages, e.isRead)
    );
  });
}

renderBookList(bookList);

//  DARK MODE TOGGLE

const htmlTag = document.getElementsByTagName("html");
const toggleBtn = document.getElementById("toggleDarkMode");

toggleBtn.addEventListener("click", (e) => {
  htmlTag[0].classList.toggle("dark");
  e.preventDefault();
});

// MODAL

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("closeModal");
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("closeModal");
}

const addBookBtn = document.getElementById("addBookBtn");
addBookBtn.addEventListener("click", (e) => {
  openModal();
  e.preventDefault();
});
const modal = document.getElementById("modal");
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeModalClick")) {
    closeModal();
  }
});

const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  addBook(book);
  console.log("dodddddd");
  e.preventDefault();
});
