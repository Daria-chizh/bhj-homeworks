// Задание 1

let formIdSubmit = document.getElementById("form");
let progressIdElement = document.getElementById("progress");

formIdSubmit.onsubmit = function() {
  let input = this.elements.file;
  let file = input.files[0];
  if (file) {
    upload(file);
  }
  return false;
};

function upload(file) {
  let request = new XMLHttpRequest();
  request.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      let percentComplete = event.loaded / event.total;
      console.log(event.loaded, event.total, percentComplete);
      progressIdElement.value = percentComplete;
    }
  };

  request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
  request.send(file);
}



