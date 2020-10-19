// Задание 1

let modalWindow = document.getElementById("subscribe-modal");
let closeButtons = document.getElementsByClassName("modal__close");

function setCookie() {
  document.cookie = "windowWasClosed=1";
}

function getCookie(name) {
  const value = ";" + document.cookie;
  let parts = value.split(";" + name + "=");
  if (parts.length === 2)
    return parts.pop().split(";").shift();
}

function showWindow() {
  modalWindow.classList.add("modal_active");
  for (const button of closeButtons) {
    button.addEventListener("click",function() {
      const modal = button.parentElement.parentElement;
      modal.classList.remove("modal_active");
      setCookie();
    });
  }
}

if (getCookie("windowWasClosed") !== "1") {
  showWindow();
}



