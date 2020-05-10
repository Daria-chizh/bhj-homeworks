const countdown = document.getElementById("timer");

let intervalID = 0;

// Задание 1
const updateCountdown = function() {
  countdown.textContent--;
  if (countdown.textContent === '0') {
    window.alert("Вы победили в конкурсе!");
    clearInterval(intervalID);
  }
};

intervalID = setInterval(updateCountdown, 1000);

// Задание 1. Повышенный уровень сложности 1

