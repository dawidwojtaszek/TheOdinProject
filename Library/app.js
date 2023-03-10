function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.changeIsRead = function () {
  this.isRead = !this.isRead;
};

//  DARK MODE TOGGLE

const htmlTag = document.getElementsByTagName("html");
const toggleBtn = document.getElementById("toggleDarkMode");

toggleBtn.addEventListener("click", (e) => {
  htmlTag[0].classList.toggle("dark");
  e.preventDefault();
});
