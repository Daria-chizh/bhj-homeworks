const bookControlsElements = document.querySelectorAll(".font-size");
const bookElement = document.getElementById("book");

for (const bookControlsElement of bookControlsElements) {
  bookControlsElement.onclick = function() {
    const currentActiveElement = document.querySelector(".font-size_active");
    currentActiveElement.classList.remove("font-size_active");
    bookControlsElement.classList.add("font-size_active");
    bookElement.classList.remove("book_fs-small");
    bookElement.classList.remove("book_fs-big");

    if (bookControlsElement.classList.contains("font-size_small")) {
      bookElement.classList.add("book_fs-small");
    } else if (bookControlsElement.classList.contains("font-size_big")) {
      bookElement.classList.add("book_fs-big");
    }
    return false;
  }
}
