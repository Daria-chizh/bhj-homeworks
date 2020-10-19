// Задание 1

let chatWidget = document.querySelector(".chat-widget");
let chatWidgetInput = document.getElementById("chat-widget__input");
let chatWidgetMessages = document.querySelector(".chat-widget__messages");
let chatWidgetSideText = document.querySelector(".chat-widget__side-text");

const answers = [
  'Да',
  'Нет',
  'Ололо!'
];

chatWidgetSideText.onclick = function() {
  chatWidget.classList.add("chat-widget_active");
};

document.addEventListener("keypress", (event) => {
  let answer = answers[Math.floor(Math.random() * answers.length)];
  let now = new Date().toLocaleTimeString().slice(0, -3);
  if (event.code ==="Enter") {
    chatWidgetMessages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${now}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
      </div>
      <div class="message">
        <div class="message__time">${now}</div>
        <div class="message__text">${answer}</div>
      </div>
    `;
    chatWidgetInput.value = "";
  }
});
