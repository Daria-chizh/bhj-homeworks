const dropDownElements = document.getElementsByClassName("dropdown");

for (const dropDownElement of dropDownElements) {
  dropDownElement.onclick = function () {
    const dropDownListElement = dropDownElement.querySelector(".dropdown__list");
    dropDownListElement.classList.toggle("dropdown__list_active");
  };
}

const dropDownItemElements = document.getElementsByClassName("dropdown__link");

for (const dropDownItemElement of dropDownItemElements) {
  dropDownItemElement.onclick = function() {
    const selectedOption = dropDownItemElement.textContent.trim();
    const parentDropDownElement = dropDownItemElement.closest(".dropdown");
    const dropDownValueElement = parentDropDownElement.querySelector(".dropdown__value");
    dropDownValueElement.textContent = selectedOption;
    return false;
  };
}

