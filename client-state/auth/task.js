// Задание 1
let showForm = document.getElementById("signin");
let form = document.getElementById("signin__form");
let button = document.getElementById("signin__btn");

showForm.classList.add("signin_active");

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  request.addEventListener("readystatechange", function() {
    if (this.readyState === request.DONE && this.status === 200) {
      let data = JSON.parse(request.responseText);
      if (data.success === true) {
        localStorage.setItem("user_id", data.user_id);
        const storedText = localStorage.getItem("user_id");
        authorization(storedText);
      } else {
        alert("Неверный логин/пароль");
      }
    }
  });
  request.send(formData);
  e.preventDefault();
});

window.addEventListener("load",function() {
  const storedText = localStorage.getItem("user_id");
  if (storedText) {
    authorization(storedText);
  }
});

function authorization(id) {
  let userId = document.getElementById("user_id");
  userId.textContent = id;
  showForm.classList.remove("signin_active");
  let openWindowAlert = document.querySelector(".welcome");
  openWindowAlert.classList.add("welcome_active");
}
