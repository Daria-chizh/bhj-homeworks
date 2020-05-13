const img = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const clickSpeedElement = document.getElementById("clicker__speed");

let firstClickTime;

img.onclick = function() {
  // resize image
  const currentWidth = img.width;
  if (currentWidth === 200) {
    img.width = 300;
  } else if (currentWidth === 300) {
    img.width = 200;
  }

  // update click count
  const amount = Number(counter.textContent) + 1;
  counter.textContent = amount;

  // update click speed
  if (firstClickTime) {
    const currentTime = new Date();
    const durationInMS = Number(currentTime) - Number(firstClickTime);
    const durationInSec = durationInMS / 1000;
    const clickSpeed = durationInSec / amount;
    clickSpeedElement.textContent = clickSpeed.toFixed(2);
  } else {
    firstClickTime = new Date();
  }
};
