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

const longTimerElement = document.getElementById("longTimer");

let longTimerIntervalId = 0;

const updateLongTimer = function() {
  // format "HH:MM:SS"
  const timerValue = longTimerElement.textContent;
  const timeParts = timerValue.split(':');
  let hour = timeParts[0];
  let minute = timeParts[1];
  let second = timeParts[2];

  second--;
  if (second < 0) {
    second = 59;
    minute--;
    if (minute < 0) {
      minute = 59;
      hour--;
      if (hour < 0) {
        window.alert("Вы победили в конкурсе!");
        clearInterval(longTimerIntervalId);
        return;
      }
    }
  }

  longTimerElement.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
};

longTimerIntervalId = setInterval(updateLongTimer, 1000);
