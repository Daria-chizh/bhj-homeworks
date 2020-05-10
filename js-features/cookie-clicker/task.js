const img = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

img.onclick = function() {
  const amount = Number(counter.textContent);
  counter.textContent = amount + 1;

  // resize image
  const currentWidth = img.width;
  if (currentWidth === 200) {
    img.width = 300;
  } else if (currentWidth === 300) {
    img.width = 200;
  }
};
