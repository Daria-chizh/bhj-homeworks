// Задание 1
window.addEventListener("load",function() {
  const request = new XMLHttpRequest();
  request.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
  request.addEventListener('readystatechange', function() {
    if ((request.readyState === 4) && (request.status === 200)) {
      const obj = JSON.parse(request.response);
      const pollTitleElement = document.getElementById("poll__title");
      pollTitleElement.textContent = obj.data.title;
      const answersElement = document.getElementById("poll__answers");
      for (const answer of obj.data.answers) {
        const buttonPoolAnswer = document.createElement("button");
        buttonPoolAnswer.classList.add("poll__answer");
        buttonPoolAnswer.textContent = answer;
        answersElement.appendChild(buttonPoolAnswer);

        const spaceElement = document.createTextNode(' ');
        answersElement.appendChild(spaceElement);

        buttonPoolAnswer.onclick = function() {
          alert("Спасибо, ваш голос засчитан!");
        }
      }
    }
  });
  request.send();
});
