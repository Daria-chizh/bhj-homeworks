const mainModalElement = document.getElementById("modal_main");
const closeWindowElements = document.getElementsByClassName("modal__close");
const showSuccessBtnElements = document.getElementsByClassName("show-success");
const successModalElement = document.getElementById("modal_success");

mainModalElement.classList.add('modal_active'); // Добавляем класс через JavaScript

for (const closeWindowElement of closeWindowElements) {
  closeWindowElement.onclick = function() {
    const targetModalElement = closeWindowElement.parentNode.parentNode;
    targetModalElement.classList.remove('modal_active');
  };
}

for (const showSuccessBtnElement of showSuccessBtnElements) {
  showSuccessBtnElement.onclick = function() {
    const activeModalElements = document.getElementsByClassName('modal_active');
    for (const activeModalElement of activeModalElements) {
      activeModalElement.classList.remove('modal_active');
    }

    successModalElement.classList.add('modal_active');
  };
}
