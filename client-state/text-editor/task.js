// Задание 1

const editorElement = document.getElementById('editor');
const storedText = localStorage.getItem('text');
if (storedText) {
  editorElement.value = storedText;
}

editorElement.addEventListener('keypress', () => {
  localStorage.setItem('text', editorElement.value);
});

editorElement.addEventListener('change', () => {
  localStorage.setItem('text', editorElement.value);
});

