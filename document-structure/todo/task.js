// Задание 1
const addTaskForm = document.getElementById('tasks__form');
let tasksList = document.getElementById("tasks__list");
let taskInputId = document.getElementById("task__input");

addTaskForm.addEventListener('submit', (event) => {
  if (taskInputId.value) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    const createContainer = document.createElement("div");
    createContainer.classList.add("task__title");

    const taskRemove = document.createElement("a");
    taskRemove.setAttribute("href", "#");
    taskRemove.classList.add("task__remove");
    taskRemove.innerHTML = "&times;";

    taskRemove.onclick = function() {
      taskContainer.remove();
    };

    tasksList.appendChild(taskContainer);
    taskContainer.appendChild(createContainer);
    createContainer.textContent = taskInputId.value;

    taskContainer.appendChild(taskRemove);
  }
  event.preventDefault();
  taskInputId.value = "";
});

